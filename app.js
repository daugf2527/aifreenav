const appI18n = window.APP_I18N;
let language = appI18n.detectLanguage();

function copyAtPath(key) {
  return key.split(".").reduce((value, part) => value?.[part], appI18n.dictionaries[language]);
}

function t(key, values) {
  return appI18n.format(copyAtPath(key) || key, values);
}

function groupLabel(key) {
  return t(`groups.${key}`);
}

function categoryLabel(key) {
  return t(`categories.${key}`);
}

const groupOrder = ["精选推荐", "公益站", "付费站点", "福利羊毛", "待重新评估"];
const fixedFeaturedIds = [];
const fixedFeaturedRank = new Map(fixedFeaturedIds.map((id, index) => [id, index]));
const fourStarHeadRank = new Map([
  "aff-tokenforge",
  "aff-vibe-code",
  "aff-gls-api",
  "aff-kscsnkli"
].map((id, index) => [id, index]));
const fourStarMiddleRank = new Map([
  "aff-api520",
  "aff-bluesminds",
  "aff-aerolink",
  "公益站-1"
].map((id, index) => [id, index]));
const fourStarTailRank = new Map(["aff-kktoken", "aff-gorouter", "aff-yesnovelai", "aff-juziai"].map((id, index) => [id, index]));
const modelProviderDefinitions = Object.freeze({
  anthropic: { label: "Anthropic", icon: "/provider-icons/anthropic.svg" },
  openai: { label: "OpenAI", icon: "/provider-icons/openai.ico" },
  deepseek: { label: "DeepSeek", icon: "/provider-icons/deepseek.svg" },
  google: { label: "Google", icon: "/provider-icons/google.svg" },
  novelai: { label: "NovelAI", icon: "/provider-icons/novelai.png" },
  qwen: { label: "Qwen", icon: "/provider-icons/qwen.svg" },
  moonshotai: { label: "Moonshot AI / Kimi", icon: "/provider-icons/moonshotai.svg" },
  bytedance: { label: "ByteDance / Doubao", icon: "/provider-icons/bytedance.svg" },
  baidu: { label: "Baidu ERNIE", icon: "/provider-icons/baidu.svg" },
  minimax: { label: "MiniMax", icon: "/provider-icons/minimax.svg" },
  xai: { label: "xAI", icon: "/provider-icons/xai.svg" },
  mistralai: { label: "Mistral AI", icon: "/provider-icons/mistralai.svg" },
  meta: { label: "Meta AI", icon: "/provider-icons/meta.svg" },
  zhipu: { label: "Zhipu AI / GLM", icon: "/provider-icons/zhipu.png" },
  "tencent-hunyuan": { label: "Tencent Hunyuan", icon: "/provider-icons/tencent-hunyuan.svg" },
  cohere: { label: "Cohere", icon: "/provider-icons/cohere.ico" },
  stabilityai: { label: "Stability AI", icon: "/provider-icons/stability-ai.ico" },
  iflytek: { label: "iFlytek / 讯飞", icon: "/provider-icons/iflytek.ico" },
  xiaomi: { label: "Xiaomi / 小米", icon: "/provider-icons/xiaomi.ico" },
  sensetime: { label: "SenseTime / 商汤", icon: "/provider-icons/sensetime.png" },
  claudeflare: { label: "Claudeflare 路由", text: "特殊路由" }
});

function clamp(value, lower, upper) {
  return Math.min(Math.max(value, lower), upper);
}

function inferRating(site) {
  if (site.status === "closed" || site.browserHidden || site.availability?.available === false) return { rating: 0 };
  const rating = window.SITE_MANUAL_RATINGS?.[site.id];
  if (Number.isInteger(rating)) return { rating };
  if (Number.isInteger(site.ratingOverride)) return { rating: site.ratingOverride };
  return { rating: 0 };
}

function inferOffer(site) {
  if (site.affiliate && site.offerLabelOverride === "邀请入口") return { offerLabel: "注册送额", offerKind: "affiliate" };
  if (site.offerLabelOverride) return { offerLabel: site.offerLabelOverride, offerKind: site.offerKindOverride || "unknown" };
  if (site.affiliate) return { offerLabel: "注册送额", offerKind: "affiliate" };
  if (/^历史\/活动/.test(site.quotaNature || "")) return { offerLabel: "历史活动", offerKind: "history" };
  if (/^未确认/.test(site.quotaNature || "")) return { offerLabel: "额度待核", offerKind: "unknown" };
  const text = `${site.registration} ${site.quota} ${site.note} ${site.source}`;
  if (/非免费|不属于白嫖|没有(?:长期)?免费(?:承诺|额度)|未(?:确认|核实|见|提供).*免费|付费短期|需要.*购买|仅.*购买/.test(text)) {
    return { offerLabel: "付费 / 条件", offerKind: "paid" };
  }
  if (/免费|赠|签到|积分|试用|领取|体验金|活动额/.test(text)) {
    return { offerLabel: "免费 / 赠额", offerKind: "free" };
  }
  return { offerLabel: "规则待查", offerKind: "unknown" };
}

function inferRegistrationRank(site) {
  const text = `${site.registration} ${site.source}`;
  if (site.status === "closed") return 0;
  if (/0 级|免注册|公开注册|邮箱注册|GitHub 注册|直接登录/.test(text)) return 5;
  if (/邮箱|GitHub|用户名/.test(text)) return 4;
  if (/二级|一级|社区积分|邀请码|注册码|CDK|LDC|购买/.test(text)) return 1;
  return site.status === "direct" ? 4 : 2;
}

function inferQuotaRank(site) {
  const text = site.quota;
  if (/未给出|未核实|未公开|无可靠|未承诺/.test(text)) return 0;
  const amounts = [...text.matchAll(/\$(\d+(?:\.\d+)?)/g)].map((match) => Number(match[1]));
  if (amounts.length) return clamp(Math.round(Math.log10(Math.max(...amounts) + 1) * 2), 1, 6);
  if (/\d+ 次|\d+ 积分|\d+ 天/.test(text)) return 5;
  if (/签到|余额|免费|额度/.test(text)) return 2;
  return 1;
}

const reportSites = Array.isArray(window.SITE_DATA) ? window.SITE_DATA : [];
const supplementalSites = Array.isArray(window.SUPPLEMENTAL_SITES) ? window.SUPPLEMENTAL_SITES : [];
const affiliateOverrides = window.AFFILIATE_OVERRIDES || {};
const siteReviews = window.SITE_REVIEWS || {};
const availabilityById = window.SITE_AVAILABILITY || {};
const browserReviews = window.SITE_BROWSER_REVIEWS || {};
const englishById = window.SITE_ENGLISH || {};
const manualCardFacts = window.MANUAL_CARD_FACTS || {};
const manualCardFactsEnglish = window.MANUAL_CARD_FACTS_EN || {};
const manualRecommendationRanks = window.MANUAL_RECOMMENDATION_RANKS || {};
const manualCreditBadges = window.MANUAL_CREDIT_BADGES || {};
const manualCardStatuses = window.MANUAL_CARD_STATUSES || {};
const manualCardBenefits = window.MANUAL_CARD_BENEFITS || {};
const manualNetworkStatus = window.MANUAL_NETWORK_STATUS || {};
const AVAILABILITY_MAX_AGE_MS = 3 * 24 * 60 * 60 * 1000;
const NEW_CARD_WINDOW_DAYS = 7;

function hasFreshUpdate(site) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(site.updatedAt || "")) return false;
  const updatedAt = new Date(`${site.updatedAt}T00:00:00`).getTime();
  const elapsed = Date.now() - updatedAt;
  return elapsed >= 0 && elapsed < NEW_CARD_WINDOW_DAYS * 24 * 60 * 60 * 1000;
}

function currentAvailability(id) {
  const result = availabilityById[id];
  const checkedAt = Date.parse(result?.checkedAt || "");
  if (typeof result?.available !== "boolean" || !Number.isFinite(checkedAt)) return null;
  if (Date.now() - checkedAt > AVAILABILITY_MAX_AGE_MS) return null;
  return result;
}

const sourceSites = [
  ...reportSites.map((site) => ({ ...site, ...(affiliateOverrides[site.id] || {}) })),
  ...supplementalSites
].map((site) => ({
  ...site,
  group: site.group === "高级推广" || site.group === "富可敌国" ? "付费站点" : site.group,
  ...(siteReviews[site.id] || {}),
  ...(browserReviews[site.id] || {}),
  ...(manualCardFacts[site.id] || {}),
  networkStatus: manualNetworkStatus[site.id] || site.networkStatus,
  recommendationRank: manualRecommendationRanks[site.id] ?? site.recommendationRank,
  cardStatus: manualCardStatuses[site.id] || site.cardStatus,
  benefitDisplay: manualCardBenefits[site.id] || site.benefitDisplay,
  creditBadges: manualCreditBadges[site.id] || []
}));

const preparedSites = sourceSites.map((site) => {
  const prepared = {
    ...site,
    availability: currentAvailability(site.id),
    ...inferRating(site),
    ...inferOffer(site)
  };
  return {
    ...prepared,
    registrationRaw: site.registration,
    quotaRaw: site.quota,
    registrationDisplay: registrationDisplay(prepared),
    quotaDisplay: quotaDisplay(prepared),
    registrationTags: registrationTags(prepared),
    benefitTags: benefitTags(prepared),
    registrationRank: inferRegistrationRank(prepared),
    quotaRank: inferQuotaRank(prepared),
    quotaUnknown: quotaClass(prepared) === "unknown"
  };
}).filter((site) => site.availability?.available !== false && !site.browserHidden);

function localizedOfferLabel(site, english) {
  if (!english) return site.offerLabel;
  if (site.offerKind === "affiliate" && site.offerLabelOverride) return englishById[site.id]?.offerLabelOverride || t("offers.affiliate");
  return t(`offers.${site.offerKind}`);
}

function localizeSites() {
  return preparedSites.map((site) => {
    const english = language === "en";
    const overlay = english ? (englishById[site.id] || {}) : {};
    const manualOverlay = english ? (manualCardFactsEnglish[site.id] || {}) : {};
    return {
      ...site,
      ...overlay,
      ...manualOverlay,
      offerLabel: localizedOfferLabel(site, english)
    };
  });
}

let sites = localizeSites();

const state = {
  search: "",
  minRating: 1,
  group: "all",
  category: "all",
  sort: "recommended"
};

const INITIAL_CARD_BATCH_SIZE = 18;
const IDLE_CARD_BATCH_SIZE = 20;
const BULK_OPEN_LIMIT = 20;
const MASONRY_MIN_CARD_WIDTH = 244;
const MASONRY_GAP = 14;
let pendingCardRender = null;
let pendingCardRenderMode = "";
let renderRevision = 0;
let pendingMasonryLayout = null;
let bulkOpenState = "idle";
let bulkOpenCount = 0;

const siteList = document.querySelector("#site-list");
const searchInput = document.querySelector("#site-search");
const groupSelect = document.querySelector("#group-select");
const categorySelect = document.querySelector("#category-select");
const ratingRange = document.querySelector("#rating-range");
const ratingOutput = document.querySelector("#rating-output");
const updateDialog = document.querySelector("#update-dialog");
const languageToggle = document.querySelector("#language-toggle");
const totalRecords = document.querySelector("#total-records");
const ratingGuide = document.querySelector("#rating-guide");
const ratingGuideToggle = document.querySelector("#rating-guide-toggle");
const ratingGuidePanel = document.querySelector("#rating-guide-panel");
const bulkOpenButton = document.querySelector("#open-top-sites");
const bulkOpenLabel = document.querySelector(".bulk-open-label");
const bulkOpenStatus = document.querySelector("#bulk-open-status");

const ratingGuideTiers = [
  { rating: 4, key: "top", className: "top" },
  { rating: 3, key: "strong", className: "strong" },
  { rating: 2, key: "ordinary", className: "ordinary" },
  { rating: 1, key: "weak", className: "weak" }
];

function getCategoryClass(category) {
  if (category === "生图 / 视频") return "image";
  if (category === "搜索工具") return "search";
  if (category === "工具 / 服务") return "service";
  return "";
}

function getGroupClass(group) {
  return {
    "公益站": "public",
    "付费站点": "premium",
    "高级推广": "premium",
    "富可敌国": "wealthy",
    "福利羊毛": "welfare",
    "待重新评估": "review",
    "精选推荐": "featured"
  }[group] || "";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function safeExternalUrl(value) {
  try {
    const url = new URL(String(value));
    return url.protocol === "https:" ? url.href : "";
  } catch {
    return "";
  }
}

function activeSites() {
  return sites.filter((site) => site.rating > 0);
}

function countBy(key) {
  return activeSites().reduce((total, site) => {
    total[site[key]] = (total[site[key]] || 0) + 1;
    return total;
  }, {});
}

function registrationTags(site) {
  if (Array.isArray(site.registrationTags)) return site.registrationTags;
  const text = `${sourceField(site, "registration")} ${site.registrationGuide || ""}`;
  const tags = new Set();
  if (/邮箱|邮件|QQ 邮箱|163|Google|Gmail|email/i.test(text)) tags.add("email");
  if (/GitHub/i.test(text)) tags.add("github");
  if (/LINUX\s*DO|LinuxDo|linux\.do/i.test(text)) tags.add("linuxdo");
  if (/邀请(?:链接|码)?|邀请码|注册码|CDK|LDC|回帖|留言|官方群|QQ群|TG 群|Discord/i.test(text)) tags.add("invite");
  if (/手机号|手机(?:号)?|电话/i.test(text)) tags.add("phone");
  if (/充值|购买|付费|订阅|支付|消费/i.test(text)) tags.add("paid");
  if (site.status === "direct" || /开放注册|公开注册|免注册|可注册|官网注册|邮箱注册|常规注册|注册表单|账号密码注册|直接登录/i.test(text)) tags.add("open");
  if (!tags.size || /未给出明确注册路径|规则待核|以站内规则为准|具体规则以当前页面为准/i.test(text)) tags.add("unknown");
  return [...tags];
}

function benefitTags(site) {
  if (Array.isArray(site.creditBadges)) {
    const tags = [...new Set(site.creditBadges.map((badge) => badge.type))];
    return tags.length ? tags : ["unknown"];
  }
  if (Array.isArray(site.benefitTags)) return site.benefitTags;
  const text = sourceField(site, "quota");
  const tags = new Set();
  const signupCredit = /(?:新用户|首次)?(?:注册|登录|绑定)(?:[^。；]{0,12})?(?:赠|送|领|得|自动领|可领|可得)\s*(?:[$¥]?\s*\d)|(?:新用户|首次)?(?:注册|登录|绑定)\s*[$¥]?\s*\d+(?:\.\d+)?\s*(?:积分|额度|分|U|元|美元)?/i;
  if (signupCredit.test(text)) tags.add("signup");
  if (/(?:每日|自动|重新登录)?签到|每日登录领取/.test(text) && !/关闭签到|无签到|签到已关闭|不可签到/.test(text)) tags.add("checkin");
  if (/邀请(?:注册|用户|双方|奖励|返利)?[^。；]{0,20}(?:赠|送|得|返|奖励|可申请|[$¥]|\d|积分|额度)|双方各(?:得|送|赠)?\s*[$¥]?\d/.test(text)) tags.add("referral");
  if (/回帖|评论|留言|官方群|QQ群|TG|Discord|问卷|抽奖|兑换码|CDK/.test(text)) tags.add("community");
  if (/充值|购买|付费|订阅|支付|套餐|首充/.test(text) || site.offerKind === "paid") tags.add("paid");
  if (!tags.size || /未给出|未核实|未公开|待核|以.*为准|历史|已结束/.test(text)) tags.add("unknown");
  return [...tags];
}

function sourceField(site, field) {
  return String(site[`${field}Raw`] || site[field] || "");
}

function registrationDisplay(site) {
  if (site.registrationDisplay) return site.registrationDisplay;
  const text = sourceField(site, "registration");
  const items = [];
  const add = (value) => { if (value && !items.includes(value)) items.push(value); };
  const githubAge = text.match(/(?:GitHub[^；，。]{0,12}?满\s*|满\s*)(\d+)\s*年/i)?.[1];

  if (/GitHub/i.test(text)) add(githubAge ? `GitHub 账号需满 ${githubAge} 年` : "GitHub 账号注册");
  if (/LINUX\s*DO|LinuxDo|linux\.do/i.test(text)) add("LINUX DO 登录");
  if (/邮箱|邮件|QQ 邮箱|163|Google|Gmail|email/i.test(text)) add(/Google|Gmail/i.test(text) ? "Google / 邮箱验证码注册" : "邮箱验证码注册");
  if (/手机号|手机(?:号)?|电话/i.test(text)) add("需手机号");
  if (/邀请码|注册码|邀请(?:链接|码)?|CDK|LDC|回帖|留言|官方群|QQ群|TG 群|Discord/i.test(text)) add("邀请码 / 社群验证");
  if (/充值|购买|付费|订阅|支付|消费/i.test(text)) add("购买 / 充值后使用");
  if (/GitHub[^。；]{0,24}(?:暂停|关闭)/i.test(text)) add("GitHub 新用户注册暂停");
  if (!items.length) {
    if (site.status === "direct" || /开放注册|公开注册|免注册|可注册|官网注册|常规注册|注册表单|账号密码注册|直接登录/i.test(text)) add("公开注册");
    else if (/未给出明确注册路径|规则待核|以站内规则为准/i.test(text)) add("注册规则待核");
    else add("按站内规则注册");
  }
  return items.slice(0, 3).join("；");
}

function quotaDisplay(site) {
  if (site.quotaDisplay) return site.quotaDisplay;
  let text = sourceField(site, "quota")
    .replace(/https?:\/\/\S+/g, "")
    .replace(/裸注册无赠送[；;，,]?\s*/g, "")
    .replace(/原报告未给出固定赠额/g, "未核实固定额度")
    .replace(/未(?:核实|确认|给出|公开)[^；。]{0,16}(?:赠额|免费额度|可得额度)/g, "未核实固定额度")
    .replace(/注册\s*\+\s*签到\s*[:：]\s*/g, "注册与签到合计 ")
    .replace(/(?:新用户|首次)?注册(?:自动)?(?:赠|送|可得|可领|自动领)\s*/g, "注册 ")
    .replace(/(?:重新登录|自动|每日)?签到(?:可得|可领|送|赠|获得)\s*/g, "签到 ")
    .replace(/每日签到/g, "签到")
    .replace(/\s*\+\s*/g, "；")
    .replace(/(\d+)\s*[-~]\s*(\d+)/g, "$1–$2")
    .replace(/[；;]\s*[；;]/g, "；")
    .replace(/^[；;]\s*|\s*[；;]$/g, "")
    .replace(/\s{2,}/g, " ")
    .trim();
  return text || "未核实固定额度";
}

function countTags(getTags) {
  return activeSites().reduce((total, site) => {
    getTags(site).forEach((tag) => { total[tag] = (total[tag] || 0) + 1; });
    return total;
  }, {});
}

function renderGroups() {
  const counts = countBy("group");
  const items = [
    { key: "all", label: groupLabel("all"), count: activeSites().length },
    ...groupOrder.filter((key) => counts[key]).map((key) => ({ key, label: groupLabel(key), count: counts[key] }))
  ];
  groupSelect.innerHTML = items.map((item) => `<option value="${escapeHtml(item.key)}">${escapeHtml(item.label)} ${item.count}</option>`).join("");
  groupSelect.value = state.group;
}

function renderCategories() {
  const counts = countBy("category");
  const items = [
    { key: "all", label: categoryLabel("all"), count: activeSites().length },
    ...Object.entries(counts).map(([key, count]) => ({ key, label: categoryLabel(key), count }))
  ];
  categorySelect.innerHTML = items.map((item) => `<option value="${escapeHtml(item.key)}">${escapeHtml(item.label)} ${item.count}</option>`).join("");
  categorySelect.value = state.category;
}

function ratingCounts() {
  return activeSites().reduce((counts, site) => {
    counts[site.rating] = (counts[site.rating] || 0) + 1;
    return counts;
  }, {});
}

function renderRatingGuide() {
  if (!ratingGuidePanel) return;
  const counts = ratingCounts();
  const guide = copyAtPath("ratingGuide");
  const tiers = ratingGuideTiers.map((tier) => {
    const copy = guide.tiers[tier.key];
    return `<a class="rating-guide-item ${tier.className}" href="#rating-anchor-${tier.rating}" data-rating-anchor-jump="${tier.rating}" aria-label="${escapeHtml(`${copy.label}, ${copy.stars}, ${copy.description}, ${guide.anchorHint}`)}">
      <span class="rating-guide-item-top"><strong>${escapeHtml(copy.label)}</strong><span>${escapeHtml(copy.stars)} · ${counts[tier.rating] || 0}</span></span>
      <span class="rating-guide-item-description">${escapeHtml(copy.description)}</span>
    </a>`;
  }).join("");
  ratingGuidePanel.innerHTML = `<div class="rating-guide-head"><div><p class="rating-guide-kicker">${escapeHtml(guide.title)}</p><h2>${escapeHtml(guide.subtitle)}</h2></div><span class="rating-guide-count">${escapeHtml(guide.current)} ${activeSites().length}</span></div><div class="rating-guide-items">${tiers}</div><button class="rating-guide-reset" type="button" data-rating-reset>${escapeHtml(guide.all)}</button>`;
}

function filteredSites() {
  const query = state.search.trim().toLowerCase();
  return sites.filter((site) => {
    const matchesSearch = !query || [
      site.name,
      site.domain,
      site.group,
      site.category,
      site.registration,
      site.registrationDisplay,
      site.quota,
      site.quotaDisplay,
      site.note,
      site.source,
      site.reviewDetail,
      site.risk,
      site.verification,
      site.offerLabel
    ].join(" ").toLowerCase().includes(query);
    const matchesRating = site.rating >= state.minRating;
    const matchesGroup = state.group === "all" || site.group === state.group;
    const matchesCategory = state.category === "all" || site.category === state.category;
    return matchesSearch && matchesRating && matchesGroup && matchesCategory;
  });
}

function sortSites(items) {
  return [...items].sort((a, b) => {
    if (state.sort === "recommended") {
      const aFixedRank = fixedFeaturedRank.get(a.id);
      const bFixedRank = fixedFeaturedRank.get(b.id);
      if (aFixedRank !== undefined || bFixedRank !== undefined) {
        if (aFixedRank === undefined) return 1;
        if (bFixedRank === undefined) return -1;
        return aFixedRank - bFixedRank;
      }
      if (a.rating !== b.rating) return b.rating - a.rating;
      const aHeadRank = a.rating === 4 ? fourStarHeadRank.get(a.id) : undefined;
      const bHeadRank = b.rating === 4 ? fourStarHeadRank.get(b.id) : undefined;
      if (aHeadRank !== undefined || bHeadRank !== undefined) {
        if (aHeadRank === undefined) return 1;
        if (bHeadRank === undefined) return -1;
        return aHeadRank - bHeadRank;
      }
      const aMiddleRank = a.rating === 4 ? fourStarMiddleRank.get(a.id) : undefined;
      const bMiddleRank = b.rating === 4 ? fourStarMiddleRank.get(b.id) : undefined;
      if (aMiddleRank !== undefined || bMiddleRank !== undefined) {
        if (aMiddleRank === undefined) return 1;
        if (bMiddleRank === undefined) return -1;
        return aMiddleRank - bMiddleRank;
      }
      const aTailRank = a.rating === 4 ? fourStarTailRank.get(a.id) : undefined;
      const bTailRank = b.rating === 4 ? fourStarTailRank.get(b.id) : undefined;
      if (aTailRank !== undefined || bTailRank !== undefined) {
        if (aTailRank === undefined) return -1;
        if (bTailRank === undefined) return 1;
        return aTailRank - bTailRank;
      }
      if (a.rating === 3 && b.rating === 3) {
        if (Boolean(a.affiliate) !== Boolean(b.affiliate)) return Number(Boolean(b.affiliate)) - Number(Boolean(a.affiliate));
        const aManualRank = Number.isFinite(a.recommendationRank) ? a.recommendationRank : Number.MAX_SAFE_INTEGER;
        const bManualRank = Number.isFinite(b.recommendationRank) ? b.recommendationRank : Number.MAX_SAFE_INTEGER;
        if (aManualRank !== bManualRank) return aManualRank - bManualRank;
      }
      if (Boolean(a.affiliate) !== Boolean(b.affiliate)) return Number(Boolean(b.affiliate)) - Number(Boolean(a.affiliate));
      const aRecommendationRank = Number.isInteger(a.recommendationRank) ? a.recommendationRank : Number.MAX_SAFE_INTEGER;
      const bRecommendationRank = Number.isInteger(b.recommendationRank) ? b.recommendationRank : Number.MAX_SAFE_INTEGER;
      if (aRecommendationRank !== bRecommendationRank) return aRecommendationRank - bRecommendationRank;
    }
    if (state.sort === "quota") {
      return b.quotaRank - a.quotaRank || b.rating - a.rating || b.registrationRank - a.registrationRank;
    }
    if (state.sort === "registration") {
      return b.registrationRank - a.registrationRank || b.rating - a.rating || b.quotaRank - a.quotaRank;
    }
    return b.rating - a.rating || b.registrationRank - a.registrationRank || b.quotaRank - a.quotaRank;
  });
}

function openTopRecommendations() {
  if (!bulkOpenButton || bulkOpenButton.disabled) return;
  const recommendations = sortSites(activeSites())
    .slice(0, BULK_OPEN_LIMIT)
    .map((site) => safeExternalUrl(site.affiliateUrl || site.url))
    .filter(Boolean);

  if (!recommendations.length) {
    bulkOpenState = "empty";
    if (bulkOpenStatus) bulkOpenStatus.textContent = t("bulkOpenEmpty");
    return;
  }

  bulkOpenState = "opening";
  bulkOpenCount = recommendations.length;
  bulkOpenButton.disabled = true;
  bulkOpenButton.classList.add("is-opening");
  bulkOpenButton.setAttribute("aria-busy", "true");
  bulkOpenButton.setAttribute("aria-label", t("bulkOpenProgress", { total: recommendations.length }));
  if (bulkOpenLabel) bulkOpenLabel.textContent = t("bulkOpenProgress", { total: recommendations.length });
  if (bulkOpenStatus) bulkOpenStatus.textContent = "";

  // Keep every open call inside the user gesture so the browser can allow the tab batch.
  recommendations.forEach((url) => window.open(url, "_blank", "noopener,noreferrer"));

  window.setTimeout(() => {
    bulkOpenState = "complete";
    bulkOpenButton.classList.remove("is-opening");
    bulkOpenButton.classList.add("is-complete");
    bulkOpenButton.disabled = false;
    bulkOpenButton.removeAttribute("aria-busy");
    bulkOpenButton.setAttribute("aria-label", t("bulkOpen"));
    if (bulkOpenLabel) bulkOpenLabel.textContent = t("bulkOpen");
    if (bulkOpenStatus) bulkOpenStatus.textContent = t("bulkOpenDone", { count: recommendations.length });
    window.setTimeout(() => bulkOpenButton.classList.remove("is-complete"), 900);
  }, 1100);
}

function stars(rating) {
  return `${"★".repeat(rating)}${"☆".repeat(5 - rating)}`;
}

function quotaClass(site) {
  if (site.quotaUnknown) return "unknown";
  return /未给出|未核实|未公开|无可靠|未承诺|^未确认/.test(String(site.quota) + " " + String(site.quotaNature || "")) ? "unknown" : "";
}

function getSpriteIndex(value) {
  let hash = 0;
  for (const character of String(value)) hash = (hash * 31 + character.codePointAt(0)) >>> 0;
  return hash % 16;
}

function getFaviconClass(value) {
  if (value === "aff-freemodel") return "favicon-freemodel";
  if (value === "aff-kktoken") return "favicon-kktoken";
  if (value === "aff-seekai") return "favicon-seekai";
  return `favicon-${Array.from(String(value)).map((character) => character.codePointAt(0).toString(36)).join("-")}`;
}

function registrationText(site) {
  return language === "en" ? site.registration : site.registrationDisplay;
}

function cardStatusInfo(site) {
  const kind = site.cardStatus || (site.status === "conditional" ? "conditional" : "available");
  return { kind, label: t(`card.status${kind[0].toUpperCase()}${kind.slice(1)}`) };
}

function registrationFieldLabel(cardStatus) {
  if (cardStatus.kind === "conditional") return t("card.eligibility");
  if (cardStatus.kind === "pending") return t("card.verificationStatus");
  return t("card.registration");
}

function modelProvidersHtml(site) {
  const providers = [...new Set(site.modelProviders || [])]
    .map((key) => ({ key, ...modelProviderDefinitions[key] }))
    .filter((provider) => provider.label && (provider.icon || provider.text));
  if (!providers.length) return "";

  return `<div class="model-providers" aria-label="${escapeHtml(t("card.modelProviders"))}">${providers.map((provider) => (
    `<span class="provider-mark provider-${escapeHtml(provider.key)}" tabindex="0" data-tooltip="${escapeHtml(provider.label)}" aria-label="${escapeHtml(provider.label)}">${provider.icon ? `<img src="${escapeHtml(provider.icon)}" alt="" width="16" height="16">` : `<span class="provider-text">${escapeHtml(provider.text)}</span>`}</span>`
  )).join("")}</div>`;
}

function mainlandAccessInfo(site) {
  const networkStatus = site.networkStatus || ({
    restricted: "network_pending",
    failed: "failed",
    available: "available"
  }[site.mainlandAccess] || null);
  if (networkStatus === "cloudflare_blocked") {
    return {
      label: t("card.cloudflare"),
      kind: "restricted",
      detail: language === "en"
        ? "Current evidence records a Cloudflare challenge or block. Check an official alternate entry point or confirm your network conditions."
        : "当前证据记录了 Cloudflare 挑战或拦截；请使用站方提供的备用入口或自行确认网络条件。"
    };
  }
  if (networkStatus === "region_restricted") {
    return {
      label: t("card.regionRestricted"),
      kind: "region",
      detail: language === "en"
        ? "The current record indicates mainland-China access is restricted. This is not itself proof of a Cloudflare block."
        : "当前记录表明中国大陆访问受限；这本身不等同于 Cloudflare 拦截。"
    };
  }
  if (networkStatus === "network_pending") {
    return {
      label: t("card.networkPending"),
      kind: "unverified",
      detail: language === "en"
        ? "A security challenge or network limitation may occur, but a current Cloudflare block is not confirmed."
        : "可能遇到安全验证或网络限制，但尚未确认当前存在 Cloudflare 拦截。"
    };
  }
  if (networkStatus === "security_challenge") {
    return {
      label: t("card.securityChallenge"),
      kind: "challenge",
      detail: language === "en"
        ? "A browser security challenge was observed; it is separate from a confirmed service outage."
        : "观察到浏览器安全验证；这与确认服务关闭是两回事。"
    };
  }
  if (site.mainlandAccess === "failed") {
    return {
      label: language === "en" ? "Entry loading issue" : "入口加载异常",
      kind: "failed",
      detail: language === "en"
        ? "The public entry check stopped at about:blank and did not load normal content. This can be related to region, network routing, or the site page and is not equivalent to a confirmed IP block."
        : "本轮 Chrome 公开入口核验停在 about:blank，未能加载正常内容。该结果可能与地区、网络路径或站方页面有关，暂不等同于明确 IP 封锁。"
    };
  }
  if (site.mainlandAccess === "available") {
    return {
      label: language === "en" ? "Entry opens" : "入口可打开",
      kind: "available",
      detail: language === "en"
        ? "The public entry opened during the browser check. Network routing and site rules can change; rely on the current result."
        : "本轮 Chrome 公开入口可正常打开；网络与站方策略可能变化，请以当前访问结果为准。"
    };
  }
  return null;
}

function creditBadgesHtml(site) {
  if (!site.creditBadges?.length) return "";
  return `<span class="credit-badges">${site.creditBadges.map((badge) => (
    `<span class="offer-badge ${escapeHtml(badge.type)}">${escapeHtml(t(`creditLabels.${badge.type}`))} ${escapeHtml(badge.value)}</span>`
  )).join("")}</span>`;
}

function renderSiteCard(site) {
  const registrationUrl = safeExternalUrl(site.affiliateUrl);
  const topicUrls = site.topicUrls.map(safeExternalUrl).filter(Boolean);
  const destinationUrl = safeExternalUrl(site.affiliateUrl || site.url);
  const mainlandAccess = site.mainlandAccess ? mainlandAccessInfo(site) : null;
  const cardStatus = cardStatusInfo(site);
  const isNew = hasFreshUpdate(site);
  const registrationLabel = registrationFieldLabel(cardStatus);
  const benefitFieldHtml = site.creditBadges?.length ? "" : `
    <div class="card-field card-benefit">
      <dt>${t("card.currentBenefit")}</dt>
      <dd>${escapeHtml(site.benefitDisplay || t("card.benefitPending"))}</dd>
    </div>`;
  const priceText = site.pricing || t("card.noPrice");
  const reviewDetailHtml = [
    site.reviewDetail ? "<p><span>" + t("card.detailRisk") + "</span>" + escapeHtml(site.reviewDetail) + "</p>" : "",
    site.registrationGuide ? "<p><span>" + t("card.preRegistration") + "</span>" + escapeHtml(site.registrationGuide) + "</p>" : "",
    mainlandAccess ? "<p><span>" + t("card.network") + "</span>" + escapeHtml(mainlandAccess.detail) + "</p>" : "",
    site.verification ? "<p><span>" + t("card.verification") + "</span>" + escapeHtml(site.verification) + "</p>" : ""
    ,site.browserVerification ? "<p><span>" + t("card.todayCheck") + "</span>" + escapeHtml(site.browserVerification) + (language === "en" ? "; " : "；") + escapeHtml(site.browserDetail || "") + "</p>" : ""
  ].join("");
  const cardActions = [
    topicUrls.length ? `<a class="post-link" href="${escapeHtml(topicUrls[0])}" target="_blank" rel="noopener noreferrer">${t("card.sourcePostItem")}</a>` : "",
    destinationUrl ? `<a class="open-link ${site.affiliate ? "is-affiliate" : ""}" href="${escapeHtml(destinationUrl)}" target="_blank" rel="noopener noreferrer">${site.affiliate ? t("card.openReferral") : t("card.open")}</a>` : ""
  ].filter(Boolean).join("");

  return `
    <article class="site-card is-${site.status} ${site.affiliate ? "is-affiliate" : ""} ${isNew ? "is-new" : ""}" data-rating="${site.rating}" tabindex="0" role="button" aria-pressed="false" aria-label="${escapeHtml(site.name)}, ${escapeHtml(t("card.flipLabel"))}">
      <div class="card-flip-inner">
        <div class="card-face card-front">
          ${isNew ? '<span class="update-ribbon" aria-hidden="true">NEW</span>' : ""}
          <div class="card-topline">
            <div class="site-identity">
              <div class="site-logo" aria-hidden="true">
                <span class="site-sprite ${getFaviconClass(site.id)} sprite-${getSpriteIndex(site.domain)}"></span>
              </div>
              <div class="site-name">
                <h3>${escapeHtml(site.name)}</h3>
                <div class="domain">${escapeHtml(site.domain)}</div>
              </div>
            </div>
            <span class="status ${cardStatus.kind}">${escapeHtml(cardStatus.label)}</span>
          </div>
          <div class="rating-row">
            <span class="rating-stars" role="img" aria-label="${language === "en" ? "Rating" : "推荐"} ${site.rating} / 5">${stars(site.rating)}</span>
            ${creditBadgesHtml(site)}
          </div>
          <div class="card-signals">
            <div class="card-classification">
              <span class="tag ${getCategoryClass(site.category)}">${escapeHtml(categoryLabel(site.category))}</span>
              ${mainlandAccess && mainlandAccess.kind !== "available" ? `<span class="mainland-access ${mainlandAccess.kind}" data-tooltip="${escapeHtml(mainlandAccess.detail)}" tabindex="0">${escapeHtml(mainlandAccess.label)}</span>` : ""}
            </div>
          </div>
          ${modelProvidersHtml(site)}
          <dl class="card-fields">
            <div class="card-field">
              <dt>${registrationLabel}</dt>
              <dd>${escapeHtml(registrationText(site))}</dd>
            </div>
            ${benefitFieldHtml}
            ${site.summary ? `<div class="card-field card-summary" data-tooltip="${escapeHtml(site.summary)}" tabindex="0"><dt>${t("card.aiSummary")}</dt><dd>${escapeHtml(site.summary)}</dd></div>` : ""}
          </dl>
          <details class="report-detail">
            <summary>${t("card.details")}</summary>
            ${reviewDetailHtml}
            <p><span>${t("card.reachability")}</span>${escapeHtml(site.reachability)}</p>
            <p><span>${t("card.usage")}</span>${escapeHtml(site.note)}</p>
            ${site.affiliate && registrationUrl ? `<p><span>${t("card.registrationLink")}</span><span class="topic-links"><a href="${escapeHtml(registrationUrl)}" target="_blank" rel="noopener noreferrer">${t("card.registrationEntry")}</a></span></p><p><span>${t("card.referralDisclosureLabel")}</span>${t("card.referralDisclosure")}</p>` : ""}
            ${topicUrls.length ? `
              <p><span>${t("card.sourcePost")}</span><span class="topic-links">${topicUrls.map((url, topicIndex) => `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${t("card.sourcePostItem")} ${topicIndex + 1}</a>`).join("")}</span></p>
            ` : ""}
            <p><span>${t("card.original")}</span>${escapeHtml(site.source)}</p>
          </details>
          ${cardActions ? `<div class="card-footer"><span class="card-actions">${cardActions}</span></div>` : ""}
        </div>
        <div class="card-face card-back" aria-hidden="true">
          <p class="card-back-label">${t("card.price")}</p>
          <h3>${escapeHtml(site.name)}</h3>
          <p class="card-back-price">${escapeHtml(priceText)}</p>
          <span class="card-back-hint">${t("card.flipHint")}</span>
        </div>
      </div>
    </article>
  `;
}

function cancelPendingCardRender() {
  if (pendingCardRender === null) return;
  if (pendingCardRenderMode === "idle" && typeof window.cancelIdleCallback === "function") {
    window.cancelIdleCallback(pendingCardRender);
  } else {
    window.clearTimeout(pendingCardRender);
  }
  pendingCardRender = null;
  pendingCardRenderMode = "";
}

function scheduleCardRender(callback) {
  if (typeof window.requestIdleCallback === "function") {
    pendingCardRenderMode = "idle";
    pendingCardRender = window.requestIdleCallback(callback, { timeout: 180 });
    return;
  }
  pendingCardRenderMode = "timeout";
  pendingCardRender = window.setTimeout(callback, 16);
}

function resetMasonryLayout() {
  if (pendingMasonryLayout !== null) window.cancelAnimationFrame(pendingMasonryLayout);
  pendingMasonryLayout = null;
  siteList.classList.remove("is-masonry");
  siteList.style.height = "";
}

function layoutMasonryCards() {
  pendingMasonryLayout = null;
  const cards = [...siteList.querySelectorAll(".site-card")];
  if (!cards.length) {
    resetMasonryLayout();
    return;
  }

  const containerWidth = siteList.clientWidth;
  const columnCount = Math.max(1, Math.floor((containerWidth + MASONRY_GAP) / (MASONRY_MIN_CARD_WIDTH + MASONRY_GAP)));
  const cardWidth = (containerWidth - MASONRY_GAP * (columnCount - 1)) / columnCount;
  const columnHeights = Array(columnCount).fill(0);
  siteList.classList.add("is-masonry");

  cards.forEach((card) => {
    card.style.width = `${cardWidth}px`;
    card.style.left = "0px";
    card.style.top = "0px";
  });

  // Read all heights in one layout pass, then write positions in a separate
  // pass. Interleaving writes and offsetHeight reads causes layout thrashing
  // when the directory contains many cards.
  const cardHeights = cards.map((card) => card.offsetHeight);
  cards.forEach((card, index) => {
    const column = columnHeights.indexOf(Math.min(...columnHeights));
    card.style.left = `${column * (cardWidth + MASONRY_GAP)}px`;
    card.style.top = `${columnHeights[column]}px`;
    columnHeights[column] += cardHeights[index] + MASONRY_GAP;
  });

  siteList.style.height = `${Math.max(...columnHeights) - MASONRY_GAP}px`;
}

function scheduleMasonryLayout() {
  if (pendingMasonryLayout !== null) window.cancelAnimationFrame(pendingMasonryLayout);
  pendingMasonryLayout = window.requestAnimationFrame(layoutMasonryCards);
}

function markRatingAnchors() {
  const seen = new Set();
  siteList.querySelectorAll(".site-card[data-rating]").forEach((card) => {
    const rating = card.dataset.rating;
    if (seen.has(rating)) return;
    seen.add(rating);
    card.id = `rating-anchor-${rating}`;
    card.dataset.ratingAnchor = rating;
  });
}

function scrollToRatingAnchor(rating) {
  const target = document.querySelector(`#rating-anchor-${rating}`);
  if (!target) return false;
  target.classList.remove("is-anchor-target");
  void target.offsetWidth;
  target.classList.add("is-anchor-target");
  const targetTop = target.getBoundingClientRect().top + window.scrollY - 18;
  window.scrollTo({ top: Math.max(0, targetTop), behavior: "auto" });
  return true;
}

function renderSites(targetRating = null) {
  cancelPendingCardRender();
  resetMasonryLayout();
  const revision = ++renderRevision;
  const visible = sortSites(filteredSites());

  if (!visible.length) {
    siteList.innerHTML = `<div class="empty-state">${t("card.noMatches")}</div>`;
    return;
  }

  const targetIndex = Number.isInteger(targetRating) ? visible.findIndex((site) => site.rating === targetRating) : -1;
  // Render the complete list for an anchor jump so later lazy batches cannot move the target.
  let nextIndex = targetIndex >= 0 ? visible.length : Math.min(INITIAL_CARD_BATCH_SIZE, visible.length);
  siteList.innerHTML = visible.slice(0, nextIndex).map(renderSiteCard).join("");
  markRatingAnchors();
  // Lay out the first viewport before the browser paints. Otherwise the cards
  // briefly render as one normal-flow column and then jump into masonry.
  layoutMasonryCards();
  if (targetIndex >= 0) window.requestAnimationFrame(() => scrollToRatingAnchor(targetRating));

  const appendNextBatch = () => {
    if (revision !== renderRevision) return;
    pendingCardRender = null;
    pendingCardRenderMode = "";
    const endIndex = Math.min(nextIndex + IDLE_CARD_BATCH_SIZE, visible.length);
    siteList.insertAdjacentHTML("beforeend", visible.slice(nextIndex, endIndex).map((site, index) => renderSiteCard(site, nextIndex + index)).join(""));
    nextIndex = endIndex;
    markRatingAnchors();
    scheduleMasonryLayout();
    if (nextIndex < visible.length) scheduleCardRender(appendNextBatch);
  };

  if (nextIndex < visible.length) scheduleCardRender(appendNextBatch);
}

function updateRatingLabel() {
  ratingOutput.textContent = state.minRating === 1 ? t("all") : language === "en" ? `${state.minRating} stars+` : `${state.minRating} 星+`;
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function setAttribute(selector, attribute, value) {
  const element = document.querySelector(selector);
  if (element) element.setAttribute(attribute, value);
}

function setMeta(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.setAttribute("content", value);
}

function applySeoTranslation() {
  const canonicalUrl = language === "en"
    ? "https://aifreenav.pages.dev/en/"
    : "https://aifreenav.pages.dev/zh/";
  const locale = language === "en" ? "en_US" : "zh_CN";
  const alternateLocale = language === "en" ? "zh_CN" : "en_US";

  setAttribute('link[rel="canonical"]', "href", canonicalUrl);
  setMeta('meta[name="description"]', t("metaDescription"));
  setMeta('meta[property="og:title"]', t("socialTitle"));
  setMeta('meta[property="og:description"]', t("metaDescription"));
  setMeta('meta[property="og:url"]', canonicalUrl);
  setMeta('meta[property="og:locale"]', locale);
  setMeta('meta[property="og:locale:alternate"]', alternateLocale);
  setMeta('meta[property="og:image:alt"]', t("socialImageAlt"));
  setMeta('meta[name="twitter:title"]', t("socialTitle"));
  setMeta('meta[name="twitter:description"]', t("metaDescription"));
  setMeta('meta[name="twitter:image:alt"]', t("socialImageAlt"));
}

function applyPageTranslation() {
  document.documentElement.lang = language === "en" ? "en" : "zh-CN";
  document.title = t("documentTitle");
  applySeoTranslation();
  const brandTitle = document.querySelector("#site-brand-title");
  if (brandTitle?.firstChild) brandTitle.firstChild.nodeValue = `${t("brand")} `;
  if (totalRecords) totalRecords.textContent = language === "en" ? `${activeSites().length} sites` : `${activeSites().length} 站`;

  setAttribute("#updates-button", "aria-label", t("updatesButton"));
  document.querySelectorAll("#site-intro > span").forEach((element) => {
    element.textContent = `${language === "en" ? "Records are updated continuously. Contact: qq4291567" : "数据每日滚动更新，联系方式 qq4291567"}    `;
  });
  setText(".search-box > span", t("search"));
  setAttribute("#site-search", "placeholder", t("searchPlaceholder"));
  setAttribute("#clear-search", "aria-label", t("clear"));
  setAttribute("#clear-search", "data-tooltip", t("clear"));
  languageToggle.textContent = t("languageShort");
  setAttribute("#language-toggle", "aria-label", t("languageToggle"));
  setAttribute("#language-toggle", "data-tooltip", t("languageToggle"));

  setAttribute(".filter-row", "aria-label", t("filtersLabel"));
  setText(".rating-filter > span", t("rating"));
  setText("label[for='group-select'] > span", t("group"));
  setText("label[for='category-select'] > span", t("category"));
  if (bulkOpenButton && !bulkOpenButton.disabled) {
    setAttribute("#open-top-sites", "aria-label", t("bulkOpen"));
    if (bulkOpenLabel) bulkOpenLabel.textContent = t("bulkOpen");
  }
  if (bulkOpenState === "opening") {
    setAttribute("#open-top-sites", "aria-label", t("bulkOpenProgress", { total: bulkOpenCount }));
    if (bulkOpenLabel) bulkOpenLabel.textContent = t("bulkOpenProgress", { total: bulkOpenCount });
  } else if (bulkOpenState === "complete") {
    if (bulkOpenStatus) bulkOpenStatus.textContent = t("bulkOpenDone", { count: bulkOpenCount });
  } else if (bulkOpenState === "empty") {
    if (bulkOpenStatus) bulkOpenStatus.textContent = t("bulkOpenEmpty");
  }
  setAttribute(".verification-timeline", "aria-label", `${t("snapshot")} 2026-09-09`);
  setText(".verification-timeline div > span", t("snapshot"));
  setText(".verification-timeline small", t("snapshotDone"));

  if (ratingGuide) setAttribute("#rating-guide", "aria-label", t("ratingGuide.title"));
  if (ratingGuideToggle) {
    ratingGuide.classList.toggle("is-english", language === "en");
    setAttribute("#rating-guide-toggle", "aria-label", ratingGuide.classList.contains("is-open") ? t("ratingGuide.close") : t("ratingGuide.open"));
    setText(".rating-guide-toggle-text", t("ratingGuide.tab"));
  }
  renderRatingGuide();

  setAttribute(".directory", "aria-label", t("directoryLabel"));
  setText(".footer-note span:first-child", t("source"));
  setText(".footer-note span:last-child", t("noKeys"));
  setText("#update-dialog-title", t("updates"));
  setAttribute("#close-updates", "aria-label", t("closeUpdates"));
  setAttribute("#close-updates", "data-tooltip", t("closeUpdates"));
  const updateItems = document.querySelectorAll("#update-dialog li");
  [t("updateOne"), t("updateTwo"), t("updateThree")].forEach((value, index) => {
    if (updateItems[index]) updateItems[index].textContent = value;
  });
}

function setLanguage(nextLanguage) {
  language = nextLanguage === "en" ? "en" : "zh";
  try { window.localStorage.setItem("ai-thousand-eyes-language", language); } catch {}
  const url = new URL(window.location.href);
  url.pathname = language === "en" ? "/en/" : "/zh/";
  url.searchParams.delete("lang");
  window.history.replaceState({}, "", url);
  sites = localizeSites();
  applyPageTranslation();
  renderGroups();
  renderCategories();
  updateRatingLabel();
  renderSites();
}

function toggleCardFlip(card) {
  const flipped = card.classList.toggle("is-flipped");
  card.querySelector(".card-flip-inner").style.transform = flipped ? "rotateY(180deg)" : "";
  card.setAttribute("aria-pressed", String(flipped));
  card.querySelector(".card-front")?.setAttribute("aria-hidden", String(flipped));
  card.querySelector(".card-back")?.setAttribute("aria-hidden", String(!flipped));
}

siteList.addEventListener("click", (event) => {
  const card = event.target.closest(".site-card");
  if (!card || event.target.closest("a, button, input, select, textarea, summary, details")) return;
  toggleCardFlip(card);
});

siteList.addEventListener("keydown", (event) => {
  const card = event.target.closest(".site-card");
  if (!card || event.target !== card || (event.key !== "Enter" && event.key !== " ")) return;
  event.preventDefault();
  toggleCardFlip(card);
});

siteList.addEventListener("toggle", (event) => {
  if (event.target.matches(".report-detail")) scheduleMasonryLayout();
}, true);

window.addEventListener("resize", scheduleMasonryLayout);

languageToggle.addEventListener("click", () => setLanguage(language === "en" ? "zh" : "en"));

bulkOpenButton?.addEventListener("click", openTopRecommendations);

groupSelect.addEventListener("change", (event) => {
  state.group = event.target.value;
  renderSites();
});

categorySelect.addEventListener("change", (event) => {
  state.category = event.target.value;
  renderSites();
});

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderSites();
});

ratingRange.addEventListener("input", (event) => {
  state.minRating = Number(event.target.value);
  updateRatingLabel();
  renderRatingGuide();
  renderSites();
});

document.querySelector("#clear-search").addEventListener("click", () => {
  searchInput.value = "";
  state.search = "";
  searchInput.focus();
  renderSites();
});

document.querySelector("#updates-button").addEventListener("click", () => updateDialog.showModal());
document.querySelector("#close-updates").addEventListener("click", () => updateDialog.close());
updateDialog.addEventListener("click", (event) => {
  if (event.target === updateDialog) updateDialog.close();
});

ratingGuideToggle.addEventListener("click", () => {
  const isOpen = ratingGuide.classList.toggle("is-open");
  ratingGuidePanel.hidden = !isOpen;
  ratingGuideToggle.setAttribute("aria-expanded", String(isOpen));
  ratingGuideToggle.setAttribute("aria-label", isOpen ? t("ratingGuide.close") : t("ratingGuide.open"));
  ratingGuideToggle.querySelector(".rating-guide-toggle-mark").textContent = isOpen ? "−" : "+";
  if (isOpen) ratingGuidePanel.querySelector("button")?.focus();
});

ratingGuidePanel.addEventListener("click", (event) => {
  const anchor = event.target.closest("[data-rating-anchor-jump]");
  const reset = event.target.closest("[data-rating-reset]");
  if (!anchor && !reset) return;
  event.preventDefault();
  if (anchor) {
    state.minRating = Number(anchor.dataset.ratingAnchorJump);
    ratingRange.value = String(state.minRating);
    updateRatingLabel();
    renderRatingGuide();
    renderSites(state.minRating);
  }
  ratingGuide.classList.remove("is-open");
  ratingGuidePanel.hidden = true;
  ratingGuideToggle.setAttribute("aria-expanded", "false");
  ratingGuideToggle.setAttribute("aria-label", t("ratingGuide.open"));
  ratingGuideToggle.querySelector(".rating-guide-toggle-mark").textContent = "+";
  if (reset) {
    state.minRating = 1;
    ratingRange.value = "1";
    updateRatingLabel();
    renderRatingGuide();
    renderSites();
    document.querySelector(".directory")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});

applyPageTranslation();
renderGroups();
renderCategories();
updateRatingLabel();
renderSites();
