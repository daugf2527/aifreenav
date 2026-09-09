(() => {
  const dictionaries = {
    zh: {
      documentTitle: "AI 千里目 | 免费 AI API 与工具导航",
      metaDescription: "AI 千里目收录 130 个 AI API、工具与服务站点，提供注册方式、可得额度、公开页核验与风险提示。",
      socialTitle: "AI 千里目 | 免费 AI API 与工具导航",
      socialImageAlt: "AI 千里目 AI 站点目录",
      brand: "AI 千里目",
      languageToggle: "切换至 English",
      languageShort: "中 / EN",
      search: "查找",
      searchPlaceholder: "名称、域名、额度、注册方式",
      clear: "清空",
      filtersLabel: "站点筛选与排序",
      rating: "星级",
      all: "全部",
      resultUnit: "项",
      group: "分组",
      category: "类型",
      registrationCondition: "注册条件",
      benefit: "权益",
      sort: "排序",
      recommended: "今日推荐",
      quota: "额度优先",
      registration: "门槛优先",
      snapshot: "核验快照",
      snapshotDone: "公开页核验完成",
      bulkOpen: "打开前 20 个推荐",
      bulkOpenProgress: "正在打开 {total} 个推荐",
      bulkOpenDone: "已发起 {count} 个推荐页",
      bulkOpenEmpty: "当前没有可打开的推荐",
      directoryLabel: "AI 站点目录",
      directoryTitle: "全部条目",
      directorySummary: "AFF 固定位保持不变；其余条目按今日公开页核验结果与风险证据排序。",
      methodNote: "前置 AFF 为固定展示位，不参与今日重排；其余条目按公开页可达性、注册门槛、额度性质与风险证据排序。星级不是服务质量保证，历史或活动额度也不等于现在仍能领取。",
      ratingGuide: {
        title: "评价体系",
        tab: "评价体系",
        open: "打开评价体系",
        close: "关闭评价体系",
        subtitle: "按当前证据快速分层，不是永久质量认证。",
        current: "当前站点",
        all: "回到顶部",
        anchorHint: "点击定位到该档起点",
        tiers: {
          top: { label: "夯", stars: "4 星", description: "亮点足，值得优先试" },
          strong: { label: "人上人", stars: "3 星", description: "能用，但仍有门槛或证据缺口" },
          ordinary: { label: "NPC", stars: "2 星", description: "能碰，但不值得主力投入" },
          weak: { label: "拉完了", stars: "1 星", description: "接口、注册、福利或稳定性有硬伤" }
        }
      },
      source: "资料来源：用户核实、站点公开页与 LINUX DO 近期反馈",
      noKeys: "仅整理公开入口与规则；额度、模型与活动以源站当前页面为准",
      updates: "更新提示",
      updatesButton: "查看更新提示",
      closeUpdates: "关闭更新提示",
      updateOne: "本轮已更新 AFF 入口、公开页状态、福利规则与推荐顺序。",
      updateTwo: "站点图标已本地化，首次加载后由浏览器长期缓存。",
      updateThree: "注册、额度与活动规则可能随源站变化，请以站内当前页面为准。",
      groups: {
        all: "全部分组",
        "精选推荐": "精选推荐",
        "公益站": "公益站",
        "付费站点": "付费站点",
        "福利羊毛": "福利羊毛",
        "待重新评估": "待重新评估"
      },
      categories: {
        all: "所有类型",
        "通用 API": "通用 API",
        "生图 / 视频": "生图 / 视频",
        "搜索工具": "搜索工具",
        "工具 / 服务": "工具 / 服务"
      },
      registrationOptions: {
        all: "所有条件",
        open: "可直接注册",
        email: "邮箱 / Google",
        github: "GitHub",
        linuxdo: "LINUX DO",
        invite: "邀请码 / 注册码",
        community: "社群任务 / 回帖",
        phone: "手机号",
        paid: "需充值 / 购买",
        unknown: "规则待核"
      },
      benefitOptions: {
        all: "所有权益",
        signup: "注册送额",
        checkin: "每日签到",
        authorization: "数据授权",
        referral: "拉新奖励",
        community: "回帖 / 社群 / 活动",
        trial: "免注册 / 试用",
        paid: "付费 / 首充",
        unknown: "规则待核"
      },
      statuses: {
        direct: "可直接注册",
        conditional: "有条件",
        closed: "当前不可达",
        restricted: "限定注册"
      },
      offers: {
        affiliate: "注册送额",
        free: "免费 / 赠额",
        paid: "付费 / 条件",
        history: "历史活动",
        unknown: "规则待查"
      },
      creditLabels: {
        signup: "注册",
        checkin: "签到",
        authorization: "授权",
        referral: "拉新",
        community: "条件",
        trial: "试用",
        paid: "付费"
      },
      card: {
        featured: "精选推荐",
        registration: "注册方式",
        eligibility: "获得条件",
        verificationStatus: "核验状态",
        currentBenefit: "当前福利",
        benefitPending: "未确认当前福利",
        statusAvailable: "可注册",
        statusConditional: "需条件",
        statusPending: "规则待核",
        aiSummary: "AI 总结",
        summaryPending: "待人工补充",
        modelProviders: "模型厂商",
        quota: "可得额度",
        details: "注册前说明 / 核对详情",
        detailRisk: "详情 / 风险",
        preRegistration: "注册前说明",
        network: "网络环境",
        verification: "核验口径",
        todayCheck: "今日核验",
        reachability: "可达性",
        usage: "使用建议",
        registrationLink: "注册链接",
        registrationEntry: "注册入口",
        referralDisclosureLabel: "推广说明",
        referralDisclosure: "此入口包含站长的推广参数；如源站规则允许，注册或后续使用可能为站长带来奖励。",
        sourcePost: "原帖地址",
        sourcePostItem: "原帖",
        original: "原始说明",
        open: "打开 ->",
        openReferral: "打开推广链接 ->",
        sourceTag: "原表",
        historyTag: "历史活动",
        reviewTag: "待核",
        price: "参考价格",
        noPrice: "当前未提供参考价格",
        flipHint: "点击卡片返回",
        flipLabel: "点击查看参考价格",
        cloudflare: "Cloudflare 拦截",
        cloudflareTip: "中国大陆 IP 访问受限",
        regionRestricted: "大陆访问受限",
        networkPending: "网络环境待核",
        securityChallenge: "安全验证",
        limited: "限定注册",
        noMatches: "没有匹配的条目，换个关键词试试。"
      },
      summary: {
        normal: "报告 {report} 条 + 用户补充 {supplemental} 条；AFF 固定位保持不变，其余按 2026.09.02 公开页核验结果排序。",
        filtered: "当前筛选：{rating} 星及以上。"
      }
    },
    en: {
      documentTitle: "AI Thousand Eyes | Free AI API & Tool Directory",
        metaDescription: "A bilingual directory of 130 AI APIs, tools, and services with sign-up requirements, available credits, public-page checks, and risk notes.",
      socialTitle: "AI Thousand Eyes | Free AI API & Tool Directory",
      socialImageAlt: "AI Thousand Eyes AI site directory",
      brand: "AI Thousand Eyes",
      languageToggle: "Switch to Chinese",
      languageShort: "EN / ZH",
      search: "Search",
      searchPlaceholder: "Name, domain, credits, registration",
      clear: "Clear",
      filtersLabel: "Site filters and sort order",
      rating: "Rating",
      all: "All",
      resultUnit: "records",
      group: "Group",
      category: "Type",
      registrationCondition: "Sign-up",
      benefit: "Benefits",
      sort: "Sort",
      recommended: "Today’s picks",
      quota: "Credits first",
      registration: "Easiest sign-up",
      snapshot: "Review snapshot",
      snapshotDone: "Public-page checks complete",
      bulkOpen: "Open top 20 picks",
      bulkOpenProgress: "Opening {total} picks",
      bulkOpenDone: "Started {count} recommendation pages",
      bulkOpenEmpty: "No recommendations are available",
      directoryLabel: "AI site directory",
      directoryTitle: "All records",
      directorySummary: "AFF placements remain fixed; the remaining records follow the latest public-page review and risk evidence.",
      methodNote: "Front AFF placements are fixed and excluded from the daily re-rank. Remaining records are ordered by public-page reachability, registration requirements, credit terms, and risk evidence. Ratings do not guarantee service quality; historical or campaign credits may no longer be available.",
      ratingGuide: {
        title: "Rating system",
        tab: "RATING",
        open: "Open rating system",
        close: "Close rating system",
        subtitle: "A quick evidence-based tier, not a permanent quality certificate.",
        current: "Current records",
        all: "Back to top",
        anchorHint: "Click to jump to this tier",
        tiers: {
          top: { label: "Top", stars: "4 stars", description: "Clear upside; worth testing first" },
          strong: { label: "Strong", stars: "3 stars", description: "Usable, but with requirements or evidence gaps" },
          ordinary: { label: "NPC", stars: "2 stars", description: "Worth a look, not a primary channel" },
          weak: { label: "Done", stars: "1 star", description: "Hard issues with access, credits, or stability" }
        }
      },
      source: "Sources: user verification, public site pages, and recent LINUX DO feedback",
      noKeys: "Only public entry points and rules are listed; credits, models, and campaigns follow the source site's current page.",
      updates: "Update log",
      updatesButton: "Open update log",
      closeUpdates: "Close update log",
      updateOne: "This round updates AFF entries, public-page status, benefit rules, and recommendation order.",
      updateTwo: "Site icons are local assets and are cached by the browser after first load.",
      updateThree: "Registration, credits, and campaigns can change at the source site. Check the current on-site rules before use.",
      groups: {
        all: "All groups",
        "精选推荐": "Featured",
        "公益站": "Community",
        "付费站点": "Paid services",
        "福利羊毛": "Perks",
        "待重新评估": "Re-evaluation"
      },
      categories: {
        all: "All types",
        "通用 API": "General API",
        "生图 / 视频": "Image / video",
        "搜索工具": "Search",
        "工具 / 服务": "Tools / services"
      },
      registrationOptions: {
        all: "All sign-up paths",
        open: "Open registration",
        email: "Email / Google",
        github: "GitHub",
        linuxdo: "LINUX DO",
        invite: "Invite / code",
        community: "Community task",
        phone: "Phone number",
        paid: "Top-up / purchase",
        unknown: "Rules pending"
      },
      benefitOptions: {
        all: "All benefits",
        signup: "Sign-up credits",
        checkin: "Daily check-in",
        authorization: "Data authorization",
        referral: "Referral credits",
        community: "Reply / community / campaign",
        trial: "No-sign-up / trial",
        paid: "Paid / top-up",
        unknown: "Rules pending"
      },
      statuses: {
        direct: "Open registration",
        conditional: "Conditional",
        closed: "Currently unavailable",
        restricted: "Limited registration"
      },
      offers: {
        affiliate: "Sign-up credits",
        free: "Free / credits",
        paid: "Paid / conditional",
        history: "Historical offer",
        unknown: "Rules pending"
      },
      creditLabels: {
        signup: "Sign-up",
        checkin: "Check-in",
        authorization: "Authorization",
        referral: "Referral",
        community: "Requirement",
        trial: "Trial",
        paid: "Paid"
      },
      card: {
        featured: "Featured",
        registration: "Sign-up",
        eligibility: "Eligibility",
        verificationStatus: "Verification",
        currentBenefit: "Current benefit",
        benefitPending: "No current benefit confirmed",
        statusAvailable: "Registration open",
        statusConditional: "Requirements apply",
        statusPending: "Rules pending",
        aiSummary: "AI summary",
        summaryPending: "Editorial summary pending",
        modelProviders: "Model providers",
        quota: "Credits",
        details: "Sign-up notes / review details",
        detailRisk: "Details / risk",
        preRegistration: "Before you sign up",
        network: "Network",
        verification: "Verification basis",
        todayCheck: "Latest check",
        reachability: "Reachability",
        usage: "Usage notes",
        registrationLink: "Registration link",
        registrationEntry: "Open sign-up",
        referralDisclosureLabel: "Referral disclosure",
        referralDisclosure: "This entry includes the directory operator's referral parameters. If allowed by the source site's rules, registration or later use may credit the operator.",
        sourcePost: "Source post",
        sourcePostItem: "Post",
        original: "Original notes",
        open: "Open ->",
        openReferral: "Open referral link ->",
        sourceTag: "Source record",
        historyTag: "Historical",
        reviewTag: "Review pending",
        price: "Reference pricing",
        noPrice: "No reference pricing published",
        flipHint: "Click the card to return",
        flipLabel: "Click to view reference pricing",
        cloudflare: "Cloudflare blocked",
        cloudflareTip: "Access is restricted from mainland China IP addresses",
        regionRestricted: "Mainland access restricted",
        networkPending: "Network pending",
        securityChallenge: "Security challenge",
        limited: "Limited registration",
        noMatches: "No matching records. Try a different keyword."
      },
      summary: {
        normal: "{report} report records + {supplemental} supplemental records. AFF placements stay fixed; the remaining records follow the 2026.09.02 public-page review.",
        filtered: "Current filter: {rating} stars and above."
      }
    }
  };

  const validLanguage = (value) => value === "en" || value === "zh";

  function detectLanguage() {
    const params = new URLSearchParams(window.location.search);
    const requested = params.get("lang");
    if (validLanguage(requested)) return requested;

    const routeLanguage = document.documentElement.dataset.language;
    if (validLanguage(routeLanguage)) return routeLanguage;

    const stored = window.localStorage.getItem("ai-thousand-eyes-language");
    if (validLanguage(stored)) return stored;

    const browserLanguage = (navigator.languages || [navigator.language || ""])[0] || navigator.language || "";
    if (/^en\b/i.test(browserLanguage)) return "en";
    if (/^zh\b/i.test(browserLanguage)) return "zh";
    return /^en\b/i.test(document.documentElement.lang || "") ? "en" : "zh";
  }

  function format(template, values = {}) {
    return String(template).replace(/\{(\w+)\}/g, (_, key) => values[key] ?? "");
  }

  window.APP_I18N = { dictionaries, detectLanguage, format };
})();
