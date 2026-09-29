// Human-reviewed card summaries and filter facets for every currently displayed record.
window.MANUAL_CARD_FACTS = {
  "公益站-1": { registrationDisplay: "GitHub 或邮箱注册", quotaDisplay: "注册 $100；签到 $25/天", registrationTags: ["open", "email", "github"], benefitTags: ["signup", "checkin"], modelProviders: ["anthropic", "openai", "deepseek", "google"], summary: "2026-09-06 实测：12 个 Claude，最高至 claude-opus-4-7 与 claude-fable-5-1；未见 Opus 5、Sonnet 5。" },
  "公益站-2": { registrationDisplay: "限量注册码；LDC 或站方批次发放", quotaDisplay: "无固定白票；签到规则看控制台", registrationTags: ["invite", "community"], benefitTags: ["community", "unknown"] },
  "公益站-3": { registrationDisplay: "开放注册；LDC 可获取额度", quotaDisplay: "签到、游戏或 LDC 获取额度", registrationTags: ["open", "invite", "paid"], benefitTags: ["checkin", "paid"] },
  "公益站-5": { registrationDisplay: "LINUX DO Connect；新账号先完成签到", quotaDisplay: "签到后逐步解锁权限；奖励金额未公开", registrationTags: ["linuxdo", "community"], benefitTags: ["checkin", "unknown"] },
  "公益站-6": { registrationDisplay: "LINUX DO 登录；兑换码或充值", quotaDisplay: "当前可用 DS / MiniMax / GLM 分组；未见固定赠额", registrationTags: ["linuxdo", "invite", "paid"], benefitTags: ["paid", "unknown"] },
  "公益站-8": { registrationDisplay: "LINUX DO Connect；福利站重新认证", quotaDisplay: "公益额度已减半；随机签到与等级福利，金额每日变化", registrationTags: ["linuxdo", "community"], benefitTags: ["checkin", "unknown"] },
  "公益站-9": { registrationDisplay: "邮箱验证码注册", quotaDisplay: "额度与分组以控制台为准", registrationTags: ["open", "email"], benefitTags: ["unknown"] },
  "公益站-10": { registrationDisplay: "需邀请码；LDC 商店获取", quotaDisplay: "签到额度可用，但未承诺固定数额", registrationTags: ["invite", "paid"], benefitTags: ["checkin", "unknown"] },
  "公益站-13": { registrationDisplay: "新注册状态未见近期开放证据", quotaDisplay: "签到、充值关闭；旧用户接口亦有低速反馈", registrationTags: ["unknown"], benefitTags: ["unknown"], cardStatus: "pending" },
  "公益站-14": { registrationDisplay: "LINUX DO 授权；填写邀请码", quotaDisplay: "签到 $3", registrationTags: ["linuxdo", "invite"], benefitTags: ["checkin"] },
  "公益站-16": { registrationDisplay: "开放注册；LDC / 兑换码", quotaDisplay: "LDC 获取额度；历史门槛约 5 LDC", registrationTags: ["open", "invite", "paid"], benefitTags: ["paid", "unknown"] },
  "公益站-17": { registrationDisplay: "邀请制；LINUX DO Connect", quotaDisplay: "近期 GPT 线路报 401；当前赠额未核实", registrationTags: ["linuxdo", "invite", "unknown"], benefitTags: ["unknown"] },
  "公益站-21": { registrationDisplay: "公开注册；按充值分组使用", quotaDisplay: "近期特惠模型分组；无注册赠额证据", registrationTags: ["open", "paid"], benefitTags: ["paid", "unknown"] },
  "公益站-22": { registrationDisplay: "仅 LINUX DO 登录", quotaDisplay: "Grok Free 共用池；按并发、RPM、RPD 与 Token 限额使用", registrationTags: ["linuxdo"], benefitTags: ["unknown"] },
  "公益站-23": { registrationDisplay: "仅向 LINUX DO 1 级用户开放；当前注册已收口", quotaDisplay: "2 级才可签到；旧兑换码与注册额不再承诺", registrationTags: ["linuxdo", "community", "unknown"], benefitTags: ["checkin", "unknown"] },
  "公益站-25": { registrationDisplay: "公开演示或自行部署；创作积分需签到、反馈或 CDK", quotaDisplay: "无固定测试额度；CDK 为购买项，签到/反馈奖励按平台规则", registrationTags: ["open", "community", "paid"], benefitTags: ["checkin", "community", "paid"] },
  "公益站-26": { registrationDisplay: "0 级开放注册", quotaDisplay: "签到 20 刀/天；1 刀约 1 张图", registrationTags: ["open"], benefitTags: ["checkin"] },
  "公益站-28": { registrationDisplay: "注册码限量发放；使用部分分组另有 LDC 门槛", quotaDisplay: "当前仅见少量 0x 模型；未核实固定注册或签到额度", registrationTags: ["invite", "paid", "unknown"], benefitTags: ["paid", "unknown"] },
  "公益站-29": { registrationDisplay: "邀请码分批发放；近期要求 L3 且社区分数 70", quotaDisplay: "50 美元券已领完；不保留为当前福利", registrationTags: ["invite", "community", "unknown"], benefitTags: ["community", "unknown"] },
  "公益站-31": { registrationDisplay: "限量邀请码；社区分数至少 30 + 1 LDC", quotaDisplay: "签到改为当天有效的限时额度；旧注册 $30 不作当前福利", registrationTags: ["invite", "community", "paid"], benefitTags: ["checkin", "unknown"] },
  "公益站-32": { registrationDisplay: "服务已关闭", quotaDisplay: "不展示历史额度", registrationTags: ["unknown"], benefitTags: ["unknown"] },
  "公益站-33": { registrationDisplay: "LINUX DO 登录", quotaDisplay: "新用户 20 刀；旧站激活用户历史 120 刀", registrationTags: ["linuxdo"], benefitTags: ["signup", "unknown"] },
  "公益站-34": { registrationDisplay: "LINUX DO Connect；入口受大陆网络限制", quotaDisplay: "GLM 5.3 Flash 当前暂停；近期亦有 403 反馈", registrationTags: ["linuxdo", "unknown"], benefitTags: ["unknown"] },
  "公益站-37": { registrationDisplay: "LINUX DO Connect", quotaDisplay: "Qwen3Guard 提示词审计；约 3 万次/天，按容量调度", registrationTags: ["linuxdo"], benefitTags: ["unknown"] },
  "公益站-38": { registrationDisplay: "LINUX DO Connect；需 30 社区分领取限量码", quotaDisplay: "本轮邀请码已发完；历史签到和 $30 不作承诺", registrationTags: ["linuxdo", "invite", "community", "unknown"], benefitTags: ["community", "unknown"] },
  "公益站-39": { registrationDisplay: "LINUX DO 登录；购买短期 API Key", quotaDisplay: "2 / 4 / 8 LDC 购买约 $10 / $25 / $60 Key", registrationTags: ["linuxdo", "paid"], benefitTags: ["paid"] },
  "公益站-40": { registrationDisplay: "LINUX DO Connect；大陆入口受限", quotaDisplay: "无注册赠额或签到；近期有 404、余额不足反馈", registrationTags: ["linuxdo", "unknown"], benefitTags: ["unknown"], summary: "2026-09-06 实测：API 返回 Cloudflare Just a moment... 挑战页，非浏览器客户端不可用。" },
  "公益站-41": { registrationDisplay: "需不定期 CDK", quotaDisplay: "近期出现 503 无可用账号；历史签到不作当前福利", registrationTags: ["invite", "unknown"], benefitTags: ["unknown"] },
  "公益站-42": { registrationDisplay: "LINUX DO TL1 登录", quotaDisplay: "公益 Tavily / Serper；共享 Exa 容量可能耗尽，未承诺固定日额度", registrationTags: ["linuxdo", "community"], benefitTags: ["unknown"] },
  "公益站-47": { registrationDisplay: "LINUX DO 登录；首轮 1000 名已满", quotaDisplay: "沉浸式翻译服务；首发 CDK 已结束", registrationTags: ["linuxdo", "community", "unknown"], benefitTags: ["community", "unknown"] },
  "公益站-48": { registrationDisplay: "通过站内游戏取得注册码", quotaDisplay: "可借最高 $18.88 余额，4 天内需归还；闲置号会清理", registrationTags: ["invite", "community", "unknown"], benefitTags: ["community", "unknown"] },
  "公益站-49": { registrationDisplay: "OAuth 直接注册；无需门槛", quotaDisplay: "无注册赠额；近免费线路不稳定", registrationTags: ["open"], benefitTags: ["unknown"] },
  "公益站-50": { registrationDisplay: "LINUX DO 登录；最低 1 LDC 充值", quotaDisplay: "当前 GLM 公钥活动受地区限制；不作账户赠额", registrationTags: ["linuxdo", "paid", "unknown"], benefitTags: ["paid", "unknown"] },
  "公益站-51": { registrationDisplay: "LINUX DO 登录；注册码分批发放", quotaDisplay: "非模型 API 的节点订阅；不计入 API 额度", registrationTags: ["linuxdo", "invite", "unknown"], benefitTags: ["unknown"] },
  "公益站-52": { registrationDisplay: "服务当前不开放", quotaDisplay: "不展示历史注册与余额规则", registrationTags: ["unknown"], benefitTags: ["unknown"] },

  "高级推广-1": { registrationDisplay: "按站内商品规则购买", quotaDisplay: "数字商品渠道；不提供通用 API 赠额", registrationTags: ["paid"], benefitTags: ["paid", "unknown"] },
  "高级推广-2": { registrationDisplay: "账号密码注册", quotaDisplay: "历史抽奖 / 回帖活动；当前额度待核", registrationTags: ["open", "community"], benefitTags: ["community", "unknown"] },
  "高级推广-3": { registrationDisplay: "服务已关闭", quotaDisplay: "不展示历史回帖赠额", registrationTags: ["unknown"], benefitTags: ["unknown"] },
  "高级推广-4": { registrationDisplay: "公开注册路由异常；当前规则待核", quotaDisplay: "未核实固定额度", registrationTags: ["unknown"], benefitTags: ["unknown"], cardStatus: "pending" },
  "高级推广-5": { registrationDisplay: "注册路径待核", quotaDisplay: "未核实固定额度", registrationTags: ["unknown"], benefitTags: ["unknown"], cardStatus: "pending" },
  "高级推广-6": { registrationDisplay: "注册路由异常；当前规则待核", quotaDisplay: "未核实固定额度", registrationTags: ["unknown"], benefitTags: ["unknown"], cardStatus: "pending" },
  "高级推广-7": { registrationDisplay: "邮箱注册；LINUX DO 授权登录", quotaDisplay: "注册 $3.8（帖子称）；首充 $66→$200 或 $119→$335，套餐有期限和分区", registrationTags: ["email", "linuxdo", "paid"], benefitTags: ["signup", "paid", "unknown"], modelProviders: ["anthropic", "openai", "xai"], summary: "2026-09-08 活动帖称 GPT-6 Astra、Claude Fable 5.1 已上线；新用户赠额、套餐库存和余额分区均需按当前页面核对。" },
  "高级推广-8": { registrationDisplay: "邮箱注册", quotaDisplay: "不再发放账户额度；现以 Grok 官转为主", registrationTags: ["email", "paid"], benefitTags: ["paid", "unknown"] },
  "高级推广-9": { registrationDisplay: "LINUX DO 登录；需同意条款", quotaDisplay: "历史签到不作当前福利；退款按充值减赠金与消耗计算", registrationTags: ["linuxdo", "unknown"], benefitTags: ["unknown"] },
  "高级推广-10": { registrationDisplay: "评论站内 ID", quotaDisplay: "历史 Codex 体验日卡；已过期", registrationTags: ["community"], benefitTags: ["community", "unknown"] },
  "高级推广-11": { registrationDisplay: "按当期活动或站内入口开通", quotaDisplay: "低倍率线路有不稳定反馈；无固定福利", registrationTags: ["community", "unknown"], benefitTags: ["unknown"] },
  "高级推广-12": { registrationDisplay: "按控制台规则注册；活动帖评论数字 ID", quotaDisplay: "注册 $5；活动回帖 $30（以当期帖为准）", registrationTags: ["open", "community"], benefitTags: ["signup", "community"] },
  "高级推广-13": { registrationDisplay: "当前未见可用入口", quotaDisplay: "不展示历史活动额度", registrationTags: ["unknown"], benefitTags: ["unknown"] },
  "高级推广-14": { registrationDisplay: "注册路径待核", quotaDisplay: "历史抽奖 $1 余额", registrationTags: ["unknown"], benefitTags: ["community", "unknown"] },
  "高级推广-15": { registrationDisplay: "客户端存在隐私与安全争议", quotaDisplay: "不展示历史赠品", registrationTags: ["unknown"], benefitTags: ["unknown"] },
  "高级推广-16": { registrationDisplay: "评论用户 ID 或注册邮箱", quotaDisplay: "历史 5U 套餐；抽奖 $20 / $50", registrationTags: ["email", "community"], benefitTags: ["community", "unknown"] },
  "高级推广-17": { registrationDisplay: "大学生认证；回帖 ID 或进 QQ 群", quotaDisplay: "活动 $5–$50；QQ群体验 $2", registrationTags: ["community", "unknown"], benefitTags: ["community", "unknown"] },
  "高级推广-18": { registrationDisplay: "当前未见可用入口", quotaDisplay: "不展示历史活动额度", registrationTags: ["unknown"], benefitTags: ["unknown"] },
  "高级推广-19": { registrationDisplay: "公开注册；回帖用户名或联系站方", quotaDisplay: "注册 $10；回帖 / 联系再得 $10", registrationTags: ["open", "community"], benefitTags: ["signup", "community"] },
  "高级推广-20": { registrationDisplay: "注册并加入 QQ 群；大陆访问受限", quotaDisplay: "9 月 2 日充值返利活动已截止", registrationTags: ["community", "paid", "unknown"], benefitTags: ["paid", "unknown"] },
  "高级推广-21": { registrationDisplay: "邀请链接注册；回帖后联系站方", quotaDisplay: "注册 + 回帖 + 联系后领 $10", registrationTags: ["invite", "community"], benefitTags: ["community"] },
  "高级推广-22": { registrationDisplay: "先注册；提交使用场景与论坛用户名", quotaDisplay: "无当前固定赠额；历史 Starter 抽奖不展示", registrationTags: ["community"], benefitTags: ["community", "unknown"] },
  "高级推广-23": { registrationDisplay: "评论 UID 或 QQ 群提交 UID", quotaDisplay: "未找到当前福利或官方活动规则；旧 $5 不展示", registrationTags: ["community", "unknown"], benefitTags: ["unknown"] },
  "高级推广-24": { registrationDisplay: "LINUX DO 注册；回帖用户名；首次进群", quotaDisplay: "注册 $2；回帖 $3；进群 $5", registrationTags: ["linuxdo", "community"], benefitTags: ["signup", "community"] },
  "高级推广-25": { registrationDisplay: "邮箱或 LINUX DO 登录；回帖数字 ID", quotaDisplay: "活动 $3；按批次核对", registrationTags: ["email", "linuxdo", "community"], benefitTags: ["community", "unknown"] },
  "高级推广-26": { registrationDisplay: "按当前站内规则注册", quotaDisplay: "免费市场仍有活动；旧公钥已耗尽", registrationTags: ["open", "unknown"], benefitTags: ["unknown"] },
  "高级推广-27": { registrationDisplay: "LINUX DO 登录", quotaDisplay: "注册 $5；邀请奖励金额待核", registrationTags: ["linuxdo"], benefitTags: ["signup", "referral", "unknown"], modelProviders: ["anthropic"], summary: "2026-09-06 实测：8 个 Claude，含 Opus 5 与 Sonnet 5。" },
  "高级推广-28": { registrationDisplay: "LINUX DO 用户；回帖 ID 或邮箱", quotaDisplay: "注册 $1；回帖 $3；首充优惠待核", registrationTags: ["linuxdo", "email", "community", "paid"], benefitTags: ["signup", "community", "paid", "unknown"] },
  "高级推广-29": { registrationDisplay: "LINUX DO 注册；回帖后向客服发截图", quotaDisplay: "注册自动 $5；回帖 / 客服再领 $3", registrationTags: ["linuxdo", "community"], benefitTags: ["signup", "community"] },
  "高级推广-30": { registrationDisplay: "LINUX DO Connect；邮箱验证", quotaDisplay: "无当前固定赠额；旧前 500 名活动已结束", registrationTags: ["linuxdo", "email"], benefitTags: ["unknown"] },
  "高级推广-32": { registrationDisplay: "开放注册；邮箱、QQ 邮箱或 LINUX DO", quotaDisplay: "站内试用；历史评论 $3", registrationTags: ["open", "email", "linuxdo"], benefitTags: ["community", "unknown"] },
  "高级推广-33": { registrationDisplay: "邮箱或 WeChat 注册", quotaDisplay: "注册 3 天 Pro", registrationTags: ["open", "email"], benefitTags: ["signup"] },
  "高级推广-35": { registrationDisplay: "按站内规则注册；活动帖评论", quotaDisplay: "注册 $0.25；评论 $0.50；部分分组需充值 $20 解锁", registrationTags: ["open", "community", "paid"], benefitTags: ["signup", "community", "paid"] },
  "高级推广-36": { registrationDisplay: "注册后在活动帖评论申请", quotaDisplay: "评论 $1；DeepSeek V4 享 0.01 折优惠", registrationTags: ["open", "community"], benefitTags: ["community"] },

  "富可敌国-1": { registrationDisplay: "回帖 TorchAI ID；入 QQ 群联系客服", quotaDisplay: "活动 $3–$6；特定职业 / 学生额度", registrationTags: ["community", "unknown"], benefitTags: ["community", "unknown"] },
  "富可敌国-2": { registrationDisplay: "注册后可取得推广链接", quotaDisplay: "无当前固定福利；历史回帖 AFF 已失效", registrationTags: ["open", "unknown"], benefitTags: ["unknown"] },
  "富可敌国-3": { registrationDisplay: "LinuxDO、Google、GitHub、邮箱或邀请码", quotaDisplay: "未核实当前免费额度", registrationTags: ["open", "email", "github", "linuxdo", "invite"], benefitTags: ["unknown"] },
  "富可敌国-4": { registrationDisplay: "购买激活套餐", quotaDisplay: "未记录免费赠额", registrationTags: ["paid"], benefitTags: ["paid", "unknown"] },
  "富可敌国-5": { registrationDisplay: "用户名 / 密码注册或 LINUX DO", quotaDisplay: "近期仅见付费稳定性反馈；无当前免费额度", registrationTags: ["open", "linuxdo", "paid"], benefitTags: ["paid", "unknown"] },
  "富可敌国-6": { registrationDisplay: "用户名 / 密码注册", quotaDisplay: "近期付费使用推荐；无当前免费额度", registrationTags: ["open", "paid"], benefitTags: ["paid", "unknown"] },
  "富可敌国-7": { registrationDisplay: "常规注册；充值使用", quotaDisplay: "未定位免费额度活动", registrationTags: ["open", "paid"], benefitTags: ["paid", "unknown"] },
  "富可敌国-9": { registrationDisplay: "用户名、密码、邮箱验证或 GitHub", quotaDisplay: "未找到近期运营信息或免费额度规则", registrationTags: ["open", "email", "github", "unknown"], benefitTags: ["unknown"] },
  "富可敌国-10": { registrationDisplay: "账号注册；GitHub 或 LINUX DO", quotaDisplay: "未找到当前免费额度或活动规则", registrationTags: ["open", "github", "linuxdo", "unknown"], benefitTags: ["unknown"] },
  "富可敌国-11": { registrationDisplay: "当前未见可用注册表单", quotaDisplay: "不展示历史福利", registrationTags: ["unknown"], benefitTags: ["unknown"] },
  "富可敌国-12": { registrationDisplay: "当前未见可用注册表单", quotaDisplay: "不展示历史福利", registrationTags: ["unknown"], benefitTags: ["unknown"] },
  "富可敌国-15": { registrationDisplay: "公开注册；评论 UID", quotaDisplay: "注册 $2；评论 $10", registrationTags: ["open", "community"], benefitTags: ["signup", "community"] },
  "富可敌国-16": { registrationDisplay: "LINUX DO 注册；活动帖评论数字 ID", quotaDisplay: "评论可获额度；每满 10 楼抽 3 人各 $5", registrationTags: ["linuxdo", "community"], benefitTags: ["community"] },
  "富可敌国-18": { registrationDisplay: "邀请链接注册；QQ 群暗号", quotaDisplay: "签到随机余额；首调 $0.5；问卷 $0.2；首充加赠", registrationTags: ["invite", "community"], benefitTags: ["checkin", "community", "paid"] },
  "富可敌国-20": { registrationDisplay: "站内注册", quotaDisplay: "当前无固定福利；旧抽奖不展示", registrationTags: ["open"], benefitTags: ["unknown"] },
  "富可敌国-21": { registrationDisplay: "公开注册；充值后使用", quotaDisplay: "GPT/Grok 充值后 0.4x；Claude（Kiro）0.8x；历史新用户赠额已结束", registrationTags: ["open", "paid"], benefitTags: ["paid", "unknown"], modelProviders: ["openai", "xai", "anthropic"], summary: "2026-09-09 V2EX 更新称 GPT 线路恢复、GPT-6 Astra 和 Grok 上线、Claude Kiro 缓存恢复；具体模型和充值活动以控制台为准。" },
  "富可敌国-22": { registrationDisplay: "公开注册；按充值分组使用", quotaDisplay: "近期有运营主题与用户注册反馈；无当前固定免费额度", registrationTags: ["open", "paid"], benefitTags: ["paid", "unknown"] },
  "富可敌国-24": { registrationDisplay: "邀请链接注册；回帖 ID、进官方群", quotaDisplay: "回帖 + 进群 $8", registrationTags: ["invite", "community"], benefitTags: ["community"], modelProviders: ["anthropic"], summary: "2026-09-06 实测：12 个 Claude，含 Opus 5、Sonnet 5、Fable 5 与 Fable 5.1。" },

  "福利羊毛-1": { registrationDisplay: "AMD 开发者平台活动页领取", quotaDisplay: "每日免费 600M；DeepSeek-V4-Flash、GLM-5.3-Flash、Qwen3.8-Flash-Next", registrationTags: ["open"], benefitTags: ["checkin"], modelProviders: ["deepseek", "zhipu", "qwen"] },
  "福利羊毛-3": { registrationDisplay: "GitHub 注册；账号约需满 30 天", quotaDisplay: "14 天 Pro 试用；约 $20 模型信用（论坛反馈）", registrationTags: ["github"], benefitTags: ["trial", "unknown"] },
  "福利羊毛-4": { registrationDisplay: "按免费层与登录页规则", quotaDisplay: "每日约 100 刀；以当前页面为准", registrationTags: ["unknown"], benefitTags: ["checkin", "unknown"] },
  "福利羊毛-5": { registrationDisplay: "免注册试用", quotaDisplay: "试用 20 刀；每次生成消耗 10 刀", registrationTags: ["open"], benefitTags: ["trial"] },
  "福利羊毛-8": { registrationDisplay: "迁移至 image.mlgb7.com；LINUX DO Connect", quotaDisplay: "注册 500 积分；签到 100–300 积分/天；10 分/图", registrationTags: ["linuxdo"], benefitTags: ["signup", "checkin"] },
  "福利羊毛-9": { registrationDisplay: "邮件注册；LINUX DO Connect 暂时故障", quotaDisplay: "300 个 NVIDIA Free Key 为限量活动；不承诺账户额度", registrationTags: ["email", "unknown"], benefitTags: ["community", "unknown"] },
  "福利羊毛-10": { registrationDisplay: "LINUX DO Connect", quotaDisplay: "首页彩蛋可领积分；视频生成功能暂停", registrationTags: ["linuxdo"], benefitTags: ["community", "unknown"] },
  "福利羊毛-11": { registrationDisplay: "LINUX DO 二级登录", quotaDisplay: "每日生图上限随号池调度；未承诺固定积分", registrationTags: ["linuxdo", "community"], benefitTags: ["unknown"] },
  "福利羊毛-12": { registrationDisplay: "公开注册", quotaDisplay: "注册 20 刀", registrationTags: ["open"], benefitTags: ["signup"] },

  "aff-gorouter": { registrationDisplay: "GitHub 直接注册", quotaDisplay: "注册 $120；签到 10 以内", registrationTags: ["github"], benefitTags: ["signup", "checkin"], modelProviders: ["anthropic"], summary: "2026-09-05 实测：API 可用、延迟正常，但按次计费约 $0.30/次，单次成本远高于同类站点，且不支持 prompt caching。建议仅作灾备通道。" },
  "aff-just-worker": { registrationDisplay: "GitHub 账号需满 1 年", quotaDisplay: "注册 70 刀；邀请 20 刀；签到 25–30 刀/天", registrationTags: ["github"], benefitTags: ["signup", "checkin", "referral"], modelProviders: ["openai"], summary: "用户 2026-09-07 报告已恢复，但当前只有 GPT 通道；历史低成本实测保留，模型库存和长期可用性仍以控制台为准。" },
  "aff-agent-router": { registrationDisplay: "GitHub 账号需满 1 年", quotaDisplay: "注册 50 刀；签到 25 刀/天", registrationTags: ["github"], benefitTags: ["signup", "checkin"], modelProviders: ["openai", "deepseek", "anthropic", "zhipu"], summary: "用户 2026-09-07 报告已恢复；当前卡片按要求统一标记 Cloudflare 拦截，模型全量和非浏览器客户端可用性仍需实际调用确认。" },
  "aff-tabitoken": { registrationDisplay: "GitHub 直接注册", quotaDisplay: "注册 $120；签到随机额度", registrationTags: ["github"], benefitTags: ["signup", "checkin"], modelProviders: ["anthropic"], summary: "2026-09-05 实测：单次成本与延迟同为同类最低一档。需注意 key 余额不足时返回的 403 文案指向模型路由或预扣费，不会明说余额问题，排查时先核对余额。" },
  "aff-univibe": { registrationDisplay: "邀请链接注册；需手机号", quotaDisplay: "积分价格与消耗缺乏透明规则", registrationTags: ["invite", "phone"], benefitTags: ["unknown"], modelProviders: ["anthropic", "openai"] },
  "aff-moyuu": { registrationDisplay: "邀请链接注册", quotaDisplay: "注册 $1；后续需充值", registrationTags: ["invite"], benefitTags: ["signup", "paid"] },
  "aff-gemai": { registrationDisplay: "邀请链接注册；当前门槛以页面为准", quotaDisplay: "当前赠额与签到规则未复核", registrationTags: ["invite"], benefitTags: ["unknown"], cardStatus: "available", modelProviders: ["anthropic"], summary: "2026-09-06 实测：288 个模型、90 个 Claude，含 [free]claude-opus-5；按免费、官、特价和限时福利等分组。" },
  "aff-freemodel": { registrationDisplay: "Google 登录或邮箱验证码；无需信用卡", quotaDisplay: "首次充值双方各 $10", registrationTags: ["open", "email"], benefitTags: ["paid"] },
  "aff-kktoken": { registrationDisplay: "GitHub 账号需满 1 年", quotaDisplay: "注册 75 刀；邀请 25 刀；签到 20 刀/天", registrationTags: ["github"], benefitTags: ["signup", "checkin", "referral"], modelProviders: ["anthropic"], summary: "2026-09-05 实测：API 可用、延迟正常，但单次成本约 $0.06，是同类最低一档的十余倍；货架上多出的 claude-opus-4-8 档位实际返回的 model 字段仍是 claude-opus-5。建议作备用。" },
  "aff-seekai": { registrationDisplay: "GitHub 直接注册", quotaDisplay: "注册 $200", registrationTags: ["github"], benefitTags: ["signup"], modelProviders: ["anthropic"], summary: "2026-09-05 实测：Claude 系模型三轮请求全部 502，25 分钟内未恢复，响应体为裸 502；能连通的 DeepSeek 模型自报上游为第三方服务商。另有每分钟 5 次限流（失败也计入）。注册额度虽高，当前不建议作 Claude 通道。" },
  "pcore-ai": { registrationDisplay: "官网注册", quotaDisplay: "按站内套餐 / 价格使用", registrationTags: ["open"], benefitTags: ["paid"] },
  "aff-lconai": { registrationDisplay: "邀请链接注册；身份门槛与开放状态待核", quotaDisplay: "未提供可核实的赠额或签到规则", registrationTags: ["invite", "unknown"], benefitTags: ["unknown"] },
  "aff-nova": { registrationDisplay: "邀请链接注册；进 QQ、TG 或 Discord 群", quotaDisplay: "邀请双方各 1U；进群 10U 周卡；邀 20 人可申请 10U 日卡", registrationTags: ["invite", "community"], benefitTags: ["referral", "community"] },
  "aff-vibe-code": { registrationDisplay: "直接注册", quotaDisplay: "每日签到 $100；仅限 ChatGPT 或 Codex 客户端", registrationTags: ["open"], benefitTags: ["checkin"], modelProviders: ["openai"], summary: "使用要求：必须使用 ChatGPT 客户端或 Codex 客户端。" },
  "aff-gls-api": { registrationDisplay: "直接注册", quotaDisplay: "注册 $10；每日签到 $10 以内", registrationTags: ["open"], benefitTags: ["signup", "checkin"], modelProviders: ["openai", "deepseek", "xiaomi", "zhipu", "xai", "minimax", "moonshotai", "anthropic"] },
  "aff-yesnovelai": { registrationDisplay: "直接注册", quotaDisplay: "注册 $150；每日签到 $32", registrationTags: ["open"], benefitTags: ["signup", "checkin"], modelProviders: ["novelai"], summary: "明确为绘图站点：专注 NovelAI 图像生成，支持文生图、图生图、局部重绘、Vibe Transfer 与角色参考。" },
  "aff-nailao-api": { registrationDisplay: "直接注册；QQ 群签到", quotaDisplay: "注册 $10.5；每日签到 $2 以内", registrationTags: ["open", "community"], benefitTags: ["signup", "checkin", "community"], modelProviders: ["iflytek", "qwen", "deepseek", "minimax", "zhipu"] },
  "aff-futureppo": { registrationDisplay: "GitHub 满 5 年；或 edu.cn 邮箱、LINUX DO", quotaDisplay: "注册 100+；每日签到 50", registrationTags: ["github", "email", "linuxdo"], benefitTags: ["signup", "checkin"], modelProviders: ["openai", "deepseek", "zhipu", "minimax"] },
  "aff-motomoto": { registrationDisplay: "邮箱邀请注册", quotaDisplay: "注册约 $30；签到约 $10/天；授权当天约 $50；邀请未到账", registrationTags: ["open", "email", "invite"], benefitTags: ["signup", "checkin", "authorization"], modelProviders: ["openai"], summary: "用户反馈完成拉新后未收到邀请奖励，当前不将邀请返利作为权益展示。" },
  "aff-tokenforge": { registrationDisplay: "邀请链接注册；当前入口打不开", quotaDisplay: "历史注册 $90；签到 $20/天；邀请 $40（当前待核）", registrationTags: ["invite"], benefitTags: ["unknown"], modelProviders: ["deepseek", "xai", "zhipu", "anthropic", "openai"], summary: "当前邀请入口打不开，已隐藏；历史注册、签到、邀请额度和五家模型支持均暂不作为当前推荐，恢复后再核验。" },
  "aff-camel-hub": { registrationDisplay: "邮箱验证码；邀请链接 / 邀请码", quotaDisplay: "当前赠额、签到与模型清单待核", registrationTags: ["email", "invite"], benefitTags: ["unknown"], summary: "入口能开不等于额度和 API 稳；当前只确认注册表单和邀请参数，模型、赠额、签到与接口可用性均待控制台核验。" },
  "aff-aipm": { registrationDisplay: "用户名 / 密码；GitHub 或 LinuxDO", quotaDisplay: "历史 $200-$1,000 公益额度（当前待核）", registrationTags: ["open", "github", "linuxdo"], benefitTags: ["unknown"], modelProviders: ["openai", "google"], summary: "历史帖子曾发过大额公益 API，但额度和模型会随时间失效；当前只确认注册入口，余额到账、模型库存和 API 稳定性仍待验证。" },
  "aff-zebra-api": { registrationDisplay: "邀请链接；先通过 Cap 人机验证", quotaDisplay: "拉新 1 小时体验卡（对象与到账待核）", registrationTags: ["invite", "unknown"], benefitTags: ["referral"], summary: "拉新福利明确但缺少独立到账证据；先确认体验卡对象、有效期和可用模型，别把注册页能开当成权益已到账。" },
  "aff-kscsnkli": { registrationDisplay: "邀请链接注册", quotaDisplay: "注册 $646,006.31；签到 $6/天", registrationTags: ["invite"], benefitTags: ["signup", "checkin"], modelProviders: ["deepseek", "xai", "zhipu", "openai"], summary: "注册赠额数额异常高，未独立复核；建议先以小额调用确认余额和模型可用性。" },
  "aff-workbuddy": { registrationDisplay: "邀请链接注册；下载客户端或使用网页", quotaDisplay: "邀请人 50 + 100 积分；受邀 2,000；付费升级双方各 500", registrationTags: ["invite"], benefitTags: ["signup", "referral", "community"], summary: "AI 办公工作台：可写方案、做 PPT、数据分析、生成软件和制作音视频；邀请活动截至 2026-09-30。" },
  "aff-doubao-pro": { registrationDisplay: "电脑打开邀请页并下载客户端", quotaDisplay: "电脑版 Pro 高级权益试用", registrationTags: ["invite"], benefitTags: ["signup", "trial"], modelProviders: ["bytedance"], summary: "终端用户的豆包电脑版 Pro 邀请试用入口；必须使用电脑打开并完成客户端下载。" },
  "aff-aliyun-aistar": { registrationDisplay: "活动页登录或注册", quotaDisplay: "1 亿+ 免费 tokens；部分产品最长 12 个月试用；邀新最高 1000 元", registrationTags: ["open"], benefitTags: ["signup", "trial", "referral"], modelProviders: ["qwen", "deepseek", "zhipu"], summary: "阿里云 AI 权益集合，覆盖千问、DeepSeek、GLM 及图像/视频等多类 AI 产品。" },
  "aff-columbina": { registrationDisplay: "邀请链接注册", quotaDisplay: "签到 $100-$200/天；仅 Grok；默认 0.001 倍率", registrationTags: ["invite"], benefitTags: ["checkin"], modelProviders: ["xai"], summary: "仅提供 Grok，默认倍率 0.001；签到赠额未独立核验，建议先用小额请求确认。" },
  "aff-onekeyallmodels": { registrationDisplay: "邀请注册；联系 QQ 群客服", quotaDisplay: "社群领取 Codex 新手卡 $20", registrationTags: ["invite", "community"], benefitTags: ["community"], modelProviders: ["openai"] },
  "aff-tokenrhythm": { registrationDisplay: "邀请链接注册；受邀方需用 OpenSquilla 调用", quotaDisplay: "注册 68；邀请奖励金额未公开", registrationTags: ["open", "invite"], benefitTags: ["signup", "referral", "unknown"], modelProviders: ["deepseek", "zhipu", "qwen"] },
  "aff-fuka-api": { registrationDisplay: "邀请注册；仅 QQ 邮箱", quotaDisplay: "注册 100 点；邀请双方各 50 点", registrationTags: ["invite", "email"], benefitTags: ["signup", "referral"], modelProviders: ["anthropic", "google", "openai", "deepseek", "zhipu"] },
  "aff-juziai": { registrationDisplay: "QQ 邮箱注册", quotaDisplay: "注册 $100；调用满 5 次后签到 5-20", registrationTags: ["open", "email"], benefitTags: ["signup", "checkin"], modelProviders: ["deepseek", "zhipu", "qwen"] },
  "aff-api520": { registrationDisplay: "QQ 邮箱注册", quotaDisplay: "注册 100 次；邀请双方各 100 次", registrationTags: ["open", "email"], benefitTags: ["signup", "referral"], modelProviders: ["openai", "deepseek", "zhipu", "xai", "minimax", "moonshotai", "anthropic"], summary: "2026-09-06 实测：142 个模型、62 个 Claude；站方模型名自标官方、限时官 key、逆向与 Kiro 转售，逆向线路可能中断。" },
  "aff-tencent-wego": { registrationDisplay: "腾讯开发者小程序活动申请；需排队审核", quotaDisplay: "GLM 5.2、DeepSeek-V4-Flash 免费调用；一次仅开一个会话", registrationTags: ["community", "unknown"], benefitTags: ["trial"], modelProviders: ["zhipu", "deepseek"] },
  "aff-sensenova": { registrationDisplay: "公开注册", quotaDisplay: "公测免费 SenseNova-6.8-Flash-Lite、DeepSeek-V4-Flash；按 Token 消耗", registrationTags: ["open"], benefitTags: ["trial"], modelProviders: ["sensetime", "deepseek"] },
  "aff-iceberg": { registrationDisplay: "LINUX DO 信任等级 ≥1；注册需约 $5", quotaDisplay: "约 $10,000 等效额度/日（帖子称）；5 RPM；注册 / 社区兑换码", registrationTags: ["linuxdo", "paid"], benefitTags: ["signup", "community"], modelProviders: ["openai"], summary: "额度宣传较高，但有 LINUX DO 等级和付费门槛；长期稳定性与兑换码规则未独立核验，建议先小额测试。" },
  "aff-mofas": { registrationDisplay: "注册方式未明确", quotaDisplay: "约 200 并发（帖子称）；固定注册赠额和签到未明确", registrationTags: ["unknown"], benefitTags: ["unknown"], modelProviders: ["xai"], summary: "支持 Grok-4.6 与 Composer-2.5；并发、注册和福利规则均需以当前控制台为准。" },
  "aff-noah-daycard": { registrationDisplay: "购买 LDC 日卡；非长期账号", quotaDisplay: "24 小时有效；约 5 LDC / $5；每日发卡地址可能变化", registrationTags: ["paid", "community"], benefitTags: ["paid", "community"], modelProviders: ["openai"], summary: "GPT-5.6-Luna 24 小时日卡，适合临时体验，不建议当作长期公益站。" },
  "aff-zerocat": { registrationDisplay: "站内注册；提交评论 ID；绑定 Telegram", quotaDisplay: "连续 7 天每天免费调用 200 次国产大模型（帖子称）；旧评论 $5 福利待核", registrationTags: ["open", "community"], benefitTags: ["community", "trial"], modelProviders: ["openai", "anthropic", "google", "xai", "deepseek", "zhipu"], summary: "2026-09-08 更新帖称连续 7 天每天可免费调用 200 次国产大模型；活动和其他模型库存仍需现场确认。" },
  "aff-dkby": { registrationDisplay: "注册方式未明确；回帖用户名后领取活动额度", quotaDisplay: "评论用户名送 $3；专属 Pro 约 0.08 倍率；GPT-6 说法待核", registrationTags: ["unknown", "community"], benefitTags: ["community"], modelProviders: ["openai"], summary: "GPT 系列和 Pro 池较有吸引力，但 GPT-6、倍率和实际模型库存均以控制台为准。" },
  "aff-acsgateway": { registrationDisplay: "站内注册；5 元起充；回帖用户 ID / Telegram", quotaDisplay: "新用户回帖送 $2；Telegram 签到；GPT-6 Astra 已上线（帖子称）", registrationTags: ["open", "paid", "community"], benefitTags: ["checkin", "community"], modelProviders: ["openai", "google", "anthropic"], summary: "2026-09-07 更新帖称已上线 GPT-6 Astra，新用户回帖可领 $2；倍率和调用能力未独立 API 核验。" },
  "aff-token-x": { registrationDisplay: "注册方式未明确", quotaDisplay: "9 月 7 日抽奖已截止；当前邀请、注册和赠额待核", registrationTags: ["unknown"], benefitTags: ["unknown"], modelProviders: ["openai"], summary: "原活动帖的 10 份 100 元抽奖已于 2026-09-07 截止，不再作为当前福利展示。" },
  "aff-ghostinterview": { registrationDisplay: "开放注册；免费试用，无需信用卡", quotaDisplay: "coding、system design、OOD；试用次数未公开；活动抽 Pro 会员", registrationTags: ["open"], benefitTags: ["trial", "community"], summary: "技术面试练习工具，支持 coding、系统设计和 OOD；不是通用 API。" },
  "aff-apevon": { registrationDisplay: "教育邮箱或企业邮箱；内测资格审核", quotaDisplay: "Claude / GPT + GPU / CPU 科研执行环境；具体额度未公开", registrationTags: ["email"], benefitTags: ["unknown"], modelProviders: ["anthropic", "openai"], summary: "面向科研任务的 AI 执行环境，支持 Claude / GPT 与 GPU / CPU；目前仍是内测。" },
  "aff-memorax-code": { registrationDisplay: "邀请码注册；完成首次安装和激活", quotaDisplay: "新老用户各 $10 API 兑换券；累计邀请最高 $400", registrationTags: ["invite", "community"], benefitTags: ["community", "referral"], summary: "Coding Agent 记忆插件；V2EX 2026-09-09 主题称新老用户各得 $10 API 兑换券，邀请奖励需完成安装、激活并保持 1 天活跃。" },
  "aff-soleapi": { registrationDisplay: "Google/GitHub 授权登录或公开注册", quotaDisplay: "注册 $1；评论并加群再送 $5（帖子称），固定福利每人一次", registrationTags: ["open", "community"], benefitTags: ["signup", "community", "unknown"], modelProviders: ["openai", "anthropic", "google", "deepseek", "xai"], summary: "新发现的多模型统一网关；官网称支持 OpenAI/Anthropic 协议、智能路由、限流和透明计费，Linux.do 活动福利与实际模型库存仍需按当前页面核对。" },
  "aff-rsiai": { registrationDisplay: "公开注册；充值后创建 API key", quotaDisplay: "首充双倍到账（帖子称）；具体活动和余额待核", registrationTags: ["open", "paid"], benefitTags: ["paid", "unknown"], modelProviders: ["openai", "anthropic"], summary: "新发现的付费多模型网关；官网文档提供注册、充值、创建 key 流程，首充双倍和模型库存尚未独立 API 核验。" },
  "aff-linkagi": { registrationDisplay: "邮箱验证注册；无需 ChatGPT 账号", quotaDisplay: "注册赠 ¥0.2 试用额度；价格以实时页面为准", registrationTags: ["open", "email"], benefitTags: ["signup", "trial"], modelProviders: ["openai", "anthropic", "google"], summary: "面向 Codex、Claude Code、Gemini CLI 的统一 API 服务；官方状态页明确无 key 的 401 不代表模型调用成功。" },
  "aff-nexavlinks": { registrationDisplay: "LINUX DO OAuth；帖子称 TL1 才能 OAuth", quotaDisplay: "试营业 OAuth 送 2 额度；前 200 位评论另送 10，截止 2026-09-10 12:00", registrationTags: ["linuxdo", "community"], benefitTags: ["signup", "community"], modelProviders: ["openai"], summary: "新发现的 GPT Astra/Sol 商业中转活动；帖子明确不保证完全不降智、部分账号有风控，订阅才能解锁低价分组。" },
  "aff-bai": { registrationDisplay: "通过邀请链接访问；登录 / 注册限制未核实", quotaDisplay: "限免：GLM-5.3-Flash、DeepSeek-V4-Flash-Vision-Exp；有效期与次数未公开", registrationTags: ["invite", "unknown"], benefitTags: ["trial"], modelProviders: ["zhipu", "deepseek"], summary: "B.AI 网页聊天工具提供 GLM-5.3-Flash 与 DeepSeek-V4-Flash-Vision-Exp 限免；具体次数和有效期未公开。" }
};

// English copy for the 2026-09-06 model-inventory summaries.
window.MANUAL_CARD_FACTS_EN = {
  "公益站-1": { summary: "Tested 2026-09-06: 12 Claude models, topping out at claude-opus-4-7 and claude-fable-5-1; no Opus 5 or Sonnet 5." },
  "公益站-40": { summary: "Tested 2026-09-06: the API returned Cloudflare's Just a moment... challenge page; non-browser API clients cannot use it." },
  "高级推广-7": { summary: "Tested 2026-09-06: 14 Claude models, including Opus 5, Sonnet 5, and Fable 5.1; stronger inventory than its current two-star rating suggests." },
  "高级推广-27": { summary: "Tested 2026-09-06: 8 Claude models, including Opus 5 and Sonnet 5." },
  "富可敌国-24": { summary: "Tested 2026-09-06: 12 Claude models, including Opus 5, Sonnet 5, Fable 5, and Fable 5.1." },
  "aff-gemai": { summary: "Tested 2026-09-06: 288 models and 90 Claude models, including [free]claude-opus-5; grouped as free, official, discounted, and limited-time offers." },
  "aff-api520": { summary: "Tested 2026-09-06: 142 models and 62 Claude models. Names label official, time-limited official key, reverse-engineered, and Kiro resale routes; reverse-engineered routes may break." },
  "aff-vibe-code": { summary: "Client requirement: use ChatGPT or Codex only." },
  "aff-yesnovelai": { summary: "An image-generation site focused on NovelAI, with text-to-image, image-to-image, inpainting, Vibe Transfer, and character reference." },
  "aff-motomoto": { summary: "A user reported that referral rewards were not credited after a successful referral, so referral rewards are not presented as a current benefit." },
  "aff-tokenforge": { registration: "Invite link registration; the current entry does not open.", quota: "Historical sign-up $90, check-in $20/day, and referral $40; currently unverified.", summary: "The current invite entry does not open, so this record is hidden. Historical credits and five-provider support are not presented as current benefits." },
  "aff-kscsnkli": { summary: "The reported sign-up balance is unusually high and has not been independently verified; confirm balance and model availability with a small request first." }
  ,"aff-workbuddy": { summary: "AI office workspace for plans, presentations, data analysis, software generation, and media creation; invitation campaign runs through September 30, 2026." }
  ,"aff-doubao-pro": { summary: "Consumer-facing Doubao desktop Pro trial; open the invitation on a computer and download the desktop client." }
  ,"aff-aliyun-aistar": { summary: "Alibaba Cloud AI benefits hub covering Qwen, DeepSeek, GLM, and image/video products, with eligibility varying by product and campaign." }
  ,"aff-columbina": { summary: "Grok-only service with a reported default 0.001 multiplier; check-in credits are unverified, so confirm with a small request first." },
  "aff-agent-router": { registration: "A GitHub account aged 1+ years.", quota: "Sign-up 50 points; check-in 25 points/day.", summary: "The current card is marked Cloudflare blocked consistently with the related entries; model inventory and non-browser client availability still require an actual call." },
  "aff-camel-hub": { registration: "Email verification; invite link or invite code.", quota: "Current sign-up credits, check-in rewards, and model list are unverified.", summary: "The entry opens, but credits and API stability are unverified. Only the sign-up form and invite parameter have been confirmed." },
  "aff-aipm": { registration: "Username/password; GitHub or LinuxDO sign-in.", quota: "Historical $200-$1,000 public API credits; currently unverified.", summary: "Historical posts shared large public API balances, but those terms may expire. The current page is reachable; balance, model inventory, and API stability remain unverified." },
  "aff-zebra-api": { registration: "Invite link with a prefilled invite code; Cap human verification.", quota: "Referral reward: 1-hour trial card; recipient and delivery terms are unverified.", summary: "The referral benefit is reported but has not been independently confirmed as credited. Check the recipient, expiry, and eligible models before relying on it." }
};

// Network labels are separate from model/provider labels. Only explicit current
// evidence gets the Cloudflare-blocked badge.
window.MANUAL_NETWORK_STATUS = {
  "公益站-1": "cloudflare_blocked",
  "公益站-34": "cloudflare_blocked",
  "公益站-39": "cloudflare_blocked",
  "公益站-40": "cloudflare_blocked",
  "公益站-50": "cloudflare_blocked",
  "高级推广-11": "region_restricted",
  "高级推广-20": "region_restricted",
  "高级推广-26": "region_restricted",
  "aff-gorouter": "network_pending",
  "aff-tabitoken": "network_pending",
  "aff-seekai": "network_pending",
  "aff-just-worker": "cloudflare_blocked",
  "aff-agent-router": "cloudflare_blocked"
};

// Human-reviewed front-card state overrides for low-confidence records.
window.MANUAL_CARD_STATUSES = {
  "公益站-13": "conditional", "公益站-22": "conditional", "公益站-23": "conditional", "公益站-25": "conditional", "公益站-29": "conditional", "公益站-34": "conditional", "公益站-37": "conditional", "公益站-40": "conditional", "公益站-41": "conditional", "公益站-47": "conditional", "公益站-48": "conditional", "公益站-49": "available", "公益站-52": "conditional",
  "高级推广-4": "conditional", "高级推广-5": "conditional", "高级推广-6": "conditional", "高级推广-7": "available", "高级推广-9": "conditional", "高级推广-11": "conditional", "高级推广-13": "conditional", "高级推广-14": "conditional", "高级推广-17": "conditional", "高级推广-18": "conditional", "高级推广-20": "conditional", "高级推广-22": "conditional", "高级推广-23": "conditional", "高级推广-26": "conditional", "高级推广-30": "conditional",
  "富可敌国-2": "available", "富可敌国-7": "conditional", "富可敌国-11": "conditional", "富可敌国-12": "conditional", "富可敌国-20": "available", "富可敌国-21": "conditional", "富可敌国-22": "conditional", "富可敌国-24": "conditional",
  "福利羊毛-1": "conditional", "福利羊毛-8": "conditional", "福利羊毛-9": "available", "福利羊毛-10": "conditional", "福利羊毛-11": "conditional",
  "aff-lconai": "conditional", "aff-moyuu": "conditional", "pcore-ai": "conditional"
};

// Default recommendation order for three-star cards.  This is an editorial,
// per-card review order: no runtime score is calculated from benefits or tags.
// Lower number means a clearer current benefit with fewer registration steps.
window.MANUAL_RECOMMENDATION_RANKS = {
  "福利羊毛-5": 301, // PhotoEditorAI: no-registration trial
  "福利羊毛-4": 302, // Krea: current free tier / daily credit
  "公益站-26": 303, // 咕嘎咕嘎: open registration + daily credit
  "福利羊毛-12": 304, // 栖影: open registration credit
  "高级推广-19": 305, // 快跑 AI: open registration credit
  "高级推广-12": 306, // ooioo: registration credit; comment bonus is secondary
  "富可敌国-15": 307, // Unity2: registration credit; comment bonus is secondary
  "高级推广-24": 308, // GateAI: LDO registration, then optional tasks
  "公益站-33": 309, // 喵的画布: LDO login + registration credit
  "福利羊毛-3": 310, // Zed: substantial trial, but GitHub age gate
  "高级推广-33": 311, // Gank Interview: simple email/WeChat trial
  "高级推广-32": 312, // CodeRelay: open registration; current trial rules in console
  "高级推广-27": 313, // 福星 AI: LDO registration credit
  "公益站-14": 314, // CoeeApi: LDO + invite, confirmed check-in credit
  "福利羊毛-8": 315, // 噜皮: LDO + registration code, high but conditional credit
  "aff-tencent-wego": 316, // Tencent activity: free but subject to application queue
  "公益站-22": 317, // X-API: LDO free shared pool, no fixed credit
  "公益站-9": 318, // picpi: simple email registration, no fixed credit
  "公益站-25": 319, // 影策: LDO login, trial amount unverified
  "公益站-2": 320, // Ark: limited code / LDC route
  "公益站-3": 321, // Elysia: open registration but quota needs LDC/game
  "公益站-16": 322, // PrismAI: LDC / redemption code
  "公益站-6": 323, // 霸气: code or recharge, no fixed credit
  "公益站-42": 324, // Searchix: LDO login, daily quota amount unverified
  "高级推广-17": 325, // 4Router: university/community campaign
  "高级推广-21": 326, // 一叶知秋: invite + reply + manual contact
  "富可敌国-24": 327, // PQH: invite + reply + group
  "富可敌国-1": 328, // TorchAI: reply + group + manual claim
  "高级推广-23": 329, // AtlasCode: UID / QQ group task
  "高级推广-25": 330, // 嘀嘀嘀 AI: reply task
  "高级推广-36": 331, // TeamoRouter: reply application
  "富可敌国-16": 332, // 4SAPI: lottery rather than guaranteed credit
  "高级推广-29": 307.5, // FastAI: LDO registration $5 + reply/manual claim $3
  "高级推广-16": 334, // Krill: historical comment activity, current rule unconfirmed
  "高级推广-35": 335, // Modelflare: very small credit; paid unlock
  "高级推广-2": 336, // Xychatai: current credit unconfirmed
  "富可敌国-22": 337, // 元流: historical activity / manual contact
  "高级推广-10": 338, // 合租巴士: historical day-card expired
  "aff-gemai": 339, // current benefit and model availability unverified
  "公益站-8": 340, // New API: LDO level gate; quota unverified
  "公益站-31": 341, // luckyg: invite/code; quota unverified
  "aff-nova": 342, // invite + community/retention tasks
  "富可敌国-5": 343, // IKunCode: no current free-credit evidence
  "富可敌国-6": 344, // OAIPro: no current free-credit evidence
  "富可敌国-9": 345, // MKEAI: no current free-credit evidence
  "富可敌国-10": 346, // NekoAPI: free-credit/activity rule unverified
  "aff-futureppo": 322.5, // high credit, but GitHub 5-year / edu.cn / LDO gate
  "aff-freemodel": 347, // first-deposit rebate, not a free registration credit
  "aff-dawcode": 314.5,
  "aff-universe-federation": 320.5,
  "aff-xiaobai-code": 330.5,
  "aff-token-harbor": 341.5,
  "aff-zero-zero": 343.5,
  "aff-worldclawpro": 345.5
};

// Human-reviewed benefit text for cards without an explicit current benefit badge.
window.MANUAL_CARD_BENEFITS = {
  "公益站-5": "签到解锁权限，金额未公开", "公益站-6": "免费分组可用，固定赠额未公开", "公益站-10": "未核实固定福利", "公益站-13": "新用户福利已关闭", "公益站-17": "近期线路异常，赠额未核实", "公益站-22": "Grok Free 共用池，按限流使用", "公益站-23": "2 级才可签到；新注册已收口", "公益站-29": "限量券已领完", "公益站-34": "当前模型暂停", "公益站-37": "提示词审计工具，无账户赠额", "公益站-38": "邀请码本轮已发完", "公益站-40": "未提供当前额度或签到规则", "公益站-41": "近期无可用账号反馈", "公益站-47": "首轮名额已满", "公益站-48": "游戏取码；借用余额须归还", "公益站-49": "无注册赠额；线路不稳定", "公益站-51": "节点订阅，非 API 赠额", "公益站-52": "限量开放已结束",
  "高级推广-4": "非模型 API，无额度", "高级推广-5": "非模型 API，无额度", "高级推广-6": "基础设施账户，额度待核", "高级推广-7": "8 月限时活动已结束", "高级推广-8": "已停止赠额，转为付费官转", "高级推广-9": "当前福利待核，旧签到规则不作承诺", "高级推广-11": "线路不稳定，未见固定福利", "高级推广-13": "未核实固定福利", "高级推广-14": "当前福利待核，历史抽奖不适用", "高级推广-18": "当前福利待核", "高级推广-20": "已结束的返利活动不展示", "高级推广-22": "当前福利待核，历史抽奖不适用", "高级推广-26": "免费市场活动，旧公钥已耗尽", "高级推广-30": "当前福利待核，旧前 500 名活动结束",
  "富可敌国-2": "当前福利待核，历史 AFF 已失效", "富可敌国-3": "免费额度待核", "富可敌国-11": "免费额度与活动待核", "富可敌国-12": "免费额度与活动待核", "富可敌国-20": "未见当前可核实福利", "aff-lconai": "未提供可核实的赠额或签到规则",
  "aff-mofas": "固定注册赠额和签到未明确", "aff-apevon": "内测资格与资源额度未公开", "aff-memorax-code": "帖子称最高 $400 API 福利，具体条件待核"
};

// Human-reviewed, card-facing credit labels. No amounts are inferred at render time.
window.MANUAL_CREDIT_BADGES = {
  "公益站-1": [{ type: "signup", value: "$100" }, { type: "checkin", value: "$25/天" }],
  "公益站-14": [{ type: "checkin", value: "$3" }],
  "公益站-26": [{ type: "checkin", value: "$20/天" }],
  "公益站-33": [{ type: "signup", value: "$20" }],
  "公益站-39": [{ type: "paid", value: "短期 Key $10 / $25 / $60" }],
  "公益站-50": [{ type: "signup", value: "$5" }],
  "高级推广-1": [{ type: "paid", value: "数字商品购买" }],
  "高级推广-21": [{ type: "community", value: "回帖 / 联系 $10" }],
  "高级推广-12": [{ type: "signup", value: "$5" }, { type: "community", value: "评论 $30" }],
  "高级推广-17": [{ type: "community", value: "限时活动；免费 Qwen" }],
  "高级推广-19": [{ type: "signup", value: "$10" }],
  "高级推广-23": [{ type: "community", value: "活动 $5" }],
  "高级推广-24": [{ type: "signup", value: "$2" }, { type: "community", value: "回帖 $3；进群 $5" }],
  "高级推广-25": [{ type: "community", value: "活动 $3" }],
  "高级推广-27": [{ type: "signup", value: "$5" }],
  "高级推广-33": [{ type: "signup", value: "3 天 Pro" }],
  "高级推广-35": [{ type: "signup", value: "$0.25" }, { type: "community", value: "评论 $0.50" }, { type: "paid", value: "解锁分组需充值 $20" }],
  "高级推广-36": [{ type: "community", value: "评论 $1" }],
  "富可敌国-21": [{ type: "signup", value: "$20" }],
  "富可敌国-1": [{ type: "community", value: "活动 $3–$6" }],
  "富可敌国-4": [{ type: "paid", value: "购买激活套餐" }],
  "富可敌国-7": [{ type: "paid", value: "充值后使用" }],
  "富可敌国-15": [{ type: "signup", value: "$2" }, { type: "community", value: "评论 $10" }],
  "富可敌国-16": [{ type: "community", value: "每 10 楼抽 3 人各 $5" }],
  "富可敌国-18": [{ type: "checkin", value: "随机余额" }, { type: "community", value: "群暗号 $0.3" }, { type: "community", value: "首调 $0.5 / 问卷 $0.2" }, { type: "paid", value: "首充加赠" }],
  "富可敌国-24": [{ type: "community", value: "回帖 + 进群 $8" }],
  "福利羊毛-1": [{ type: "checkin", value: "600M/天" }],
  "福利羊毛-3": [{ type: "trial", value: "14 天 Pro" }, { type: "trial", value: "约 $20 信用" }],
  "福利羊毛-4": [{ type: "checkin", value: "约 $100/天" }],
  "福利羊毛-5": [{ type: "trial", value: "$20 试用" }],
  "福利羊毛-8": [{ type: "signup", value: "500 积分" }, { type: "checkin", value: "100–300 积分/天" }],
  "福利羊毛-9": [{ type: "community", value: "限量 NVIDIA Free Key" }],
  "福利羊毛-10": [{ type: "community", value: "首页彩蛋积分" }],
  "福利羊毛-12": [{ type: "signup", value: "$20" }],
  "aff-zero-zero": [{ type: "paid", value: "0.03（待核）" }],
  "aff-token-harbor": [{ type: "referral", value: "充值返利 16.6%" }],
  "aff-universe-federation": [{ type: "referral", value: "邀请得初始额度" }],
  "aff-aerolink": [{ type: "signup", value: "$35" }, { type: "trial", value: "Starter 1 周" }],
  "aff-dawcode": [{ type: "signup", value: "$5" }, { type: "checkin", value: "$0-$1/天" }],
  "aff-worldclawpro": [{ type: "paid", value: "0.03（待核）" }],
  "aff-bluesminds": [{ type: "signup", value: "约 $100" }],
  "aff-rrr-api": [{ type: "signup", value: "$100" }, { type: "referral", value: "邀请再加 $10" }],
  "aff-xiaobai-code": [{ type: "checkin", value: "约 $0.25/天" }, { type: "community", value: "进群 / 学生 / 发图各 $2" }],
  "aff-gorouter": [{ type: "signup", value: "$120" }, { type: "checkin", value: "10 以内" }],
  "aff-just-worker": [{ type: "signup", value: "$70" }, { type: "referral", value: "$20" }, { type: "checkin", value: "$25–$30/天" }],
  "aff-agent-router": [{ type: "signup", value: "$50" }, { type: "checkin", value: "$25/天" }],
  "aff-tabitoken": [{ type: "signup", value: "$120" }, { type: "checkin", value: "随机额度" }],
  "aff-moyuu": [{ type: "signup", value: "$1" }, { type: "paid", value: "后续需充值" }],
  "aff-freemodel": [{ type: "paid", value: "首次充值双方各 $10" }],
  "aff-kktoken": [{ type: "signup", value: "$75" }, { type: "referral", value: "$25" }, { type: "checkin", value: "$20/天" }],
  "aff-seekai": [{ type: "signup", value: "$200" }],
  "pcore-ai": [{ type: "paid", value: "按站内套餐使用" }],
  "aff-vibe-code": [{ type: "checkin", value: "$100/天" }],
  "aff-gls-api": [{ type: "signup", value: "$10" }, { type: "checkin", value: "$10 以内/天" }],
  "aff-yesnovelai": [{ type: "signup", value: "$150" }, { type: "checkin", value: "$32/天" }],
  "aff-nailao-api": [{ type: "signup", value: "$10.5" }, { type: "checkin", value: "$2 以内/天（QQ群）" }],
  "aff-futureppo": [{ type: "signup", value: "100+" }, { type: "checkin", value: "50/天" }],
  "aff-motomoto": [{ type: "signup", value: "约 $30" }, { type: "checkin", value: "约 $10/天" }, { type: "authorization", value: "当天约 $50" }],
  "aff-tokenforge": [{ type: "signup", value: "$90" }, { type: "checkin", value: "$20/天" }, { type: "referral", value: "$40" }],
  "aff-kscsnkli": [{ type: "signup", value: "$646,006.31" }, { type: "checkin", value: "$6/天" }],
  "aff-workbuddy": [{ type: "signup", value: "受邀 2,000 积分" }, { type: "referral", value: "邀请 50+100 积分" }, { type: "referral", value: "升级双方各 500" }],
  "aff-doubao-pro": [{ type: "trial", value: "电脑版 Pro 高级权益" }],
  "aff-aliyun-aistar": [{ type: "trial", value: "1 亿+ 免费 tokens" }, { type: "referral", value: "邀新最高 1000 元" }],
  "aff-columbina": [{ type: "checkin", value: "$100-$200/天" }],
  "aff-zebra-api": [{ type: "referral", value: "1 小时体验卡" }],
  "aff-onekeyallmodels": [{ type: "community", value: "联系客服领 $20" }],
  "aff-tokenrhythm": [{ type: "signup", value: "68 额度" }, { type: "referral", value: "完成 OpenSquilla 调用触发" }],
  "aff-fuka-api": [{ type: "signup", value: "100 点" }, { type: "referral", value: "双方各 50 点" }],
  "aff-juziai": [{ type: "signup", value: "$100" }, { type: "checkin", value: "满 5 次调用后 5-20" }],
  "aff-api520": [{ type: "signup", value: "100 次" }, { type: "referral", value: "双方各 100 次" }],
  "aff-tencent-wego": [{ type: "trial", value: "免费调用" }],
  "aff-sensenova": [{ type: "trial", value: "公测免费模型" }],
  "aff-iceberg": [{ type: "signup", value: "约 $10,000 等效/日（帖子称）" }, { type: "community", value: "兑换码（待核）" }],
  "aff-noah-daycard": [{ type: "paid", value: "24 小时 / 约 5 LDC" }, { type: "community", value: "LDC 日卡" }],
  "aff-zerocat": [{ type: "trial", value: "7 天 × 每天 200 次国产模型（帖子称）" }],
  "aff-dkby": [{ type: "community", value: "$3（评论用户名）" }],
  "aff-acsgateway": [{ type: "community", value: "新用户回帖 $2" }, { type: "checkin", value: "Telegram 签到" }],
  "aff-token-x": [{ type: "unknown", value: "9 月 7 日活动已截止" }],
  "aff-ghostinterview": [{ type: "trial", value: "免费试用" }, { type: "community", value: "Pro 抽奖" }],
  "aff-bai": [{ type: "trial", value: "2 个模型限免" }],
  "aff-soleapi": [{ type: "trial", value: "试用额度（待核）" }],
  "aff-rsiai": [{ type: "paid", value: "首充双倍（帖子称）" }],
  "aff-linkagi": [{ type: "signup", value: "¥0.2 试用" }],
  "aff-nexavlinks": [{ type: "signup", value: "OAuth 送 2 额度" }, { type: "community", value: "前 200 评论送 10" }],
  "aff-nova": [{ type: "referral", value: "双方各 1U" }, { type: "community", value: "进群 10U 周卡" }, { type: "referral", value: "邀 20 人领 10U 日卡" }]
};
