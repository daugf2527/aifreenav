# AI 千里目 · AI FreeNav

[![Stars](https://img.shields.io/github/stars/daugf2527/aifreenav?style=flat-square&label=stars)](https://github.com/daugf2527/aifreenav/stargazers)
[![Forks](https://img.shields.io/github/forks/daugf2527/aifreenav?style=flat-square&label=forks)](https://github.com/daugf2527/aifreenav/network/members)
[![License](https://img.shields.io/github/license/daugf2527/aifreenav?style=flat-square)](LICENSE)
[![Last commit](https://img.shields.io/github/last-commit/daugf2527/aifreenav?style=flat-square)](https://github.com/daugf2527/aifreenav/commits/main)
[![Online demo](https://img.shields.io/badge/online%20demo-aifreenav.pages.dev-1565c0?style=flat-square)](https://aifreenav.pages.dev/)

一个持续维护的 AI 站点目录，集中整理 AI API 中转、公益站、模型工具和限时福利入口。

**在线体验：[aifreenav.pages.dev](https://aifreenav.pages.dev/)**

![AI 千里目](https://aifreenav.pages.dev/social-card.png)

如果这个目录帮你节省了查找时间，欢迎在 GitHub 点一个 Star，并反馈已经失效或值得补充的站点。

## 这是什么

AI 千里目是一个面向开发者和 AI 用户的 **AI API directory / AI API 导航**。它把分散在公开网页、社区反馈和站点公告里的入口与规则整理到一处，帮助你快速比较：

- 免费 AI API、AI API gateway、LLM API proxy 和 API 聚合服务
- Claude、OpenAI、Gemini、DeepSeek、Qwen、Kimi、GLM、Grok 等模型入口
- OpenAI-compatible API、Anthropic-compatible API 和其他统一协议服务
- 公益站、AI relay、中转站、注册赠额、签到额度、试用和限时活动
- 注册条件、模型能力、更新时间、公开页核验和风险提示

## 核心功能

- 130+ 个 AI API、工具与服务站点
- 中英文界面、站内搜索、分组和星级筛选
- 注册条件、可得额度、模型能力和风险提示分开整理
- 公开页核验记录与更新时间，区分“可达”和“可用”
- 一键打开前 20 个推荐站点
- 新鲜度标记：新条目显示 `NEW`，超过 7 天自动移除
- 仅展示公开入口；不收录 API key、Cookie、卡密或临时 token

## 评价口径

星级是编辑排序信号，不是服务质量保证，也不代表长期稳定性。评分会综合公开可验证信息、注册门槛、权益时效、模型/接口线索和近期反馈：

- 4 星：当前信息完整、门槛和权益相对清晰，适合作为优先候选
- 3 星：有明确价值，但存在条件、证据或稳定性限制
- 2 星：可以观察或尝试，关键信息仍需到源站确认
- 1 星：仅保留少量弱证据条目；关闭、不可达或明确风险的条目不作为推荐

Cloudflare 挑战、单次 502、邀请码耗尽或活动过期不会被直接等同为服务关闭；活动只写宣传不等于当前仍有效。

## 数据与更新

维护时参考站点公开页、V2EX、Linux.do、Reddit 等公开讨论和近期反馈。每条记录尽量保留来源、核验日期与限制说明；新站点优先采用近期证据，过期活动不会继续当作当前福利展示。

站点规则、额度、模型库存和活动可能随源站变化。使用前请回到源站确认，并自行评估隐私、稳定性和合规风险。

## 本地查看

这是一个无需打包工具的静态站点。克隆后在仓库根目录运行：

```bash
python3 -m http.server 8080
```

然后打开 <http://localhost:8080/>。也可以直接用任意静态文件服务器托管根目录。

## 维护入口

- `supplemental-sites.js`：新增站点、公开入口、来源和站点说明
- `manual-card-facts.js`：卡片展示文本、注册/权益标签和能力标签
- `manual-ratings.js`：最终星级与推荐排序
- `site-review.js`、`site-browser-review.js`：公开核验说明
- `site-data.js`、`site-en.js`：当前中英文目录数据

## 参与维护

欢迎通过 [Issues](https://github.com/daugf2527/aifreenav/issues) 提交新站点、过期规则和错误链接。请附上公开来源、核验日期和可复现的页面信息；不要提交 API key、Cookie、密码或私人账号资料。

To contribute, open an [Issue](https://github.com/daugf2527/aifreenav/issues) with the public source, check date, and reproducible page details. Never include API keys, cookies, passwords, or private account data.

## English

AI FreeNav is a maintained **AI API directory** for developers and AI users. It organizes public entry points and current notes for free AI APIs, AI API gateways, LLM API proxies, AI relay sites, public-benefit services, model tools, and time-limited offers.

The directory covers common provider keywords such as Claude, OpenAI, Gemini, DeepSeek, Qwen, Kimi, GLM, and Grok, as well as OpenAI-compatible API and Anthropic-compatible API services. Each record separates sign-up requirements, available credits, model capabilities, freshness, public-page verification, and risk notes.

The interface supports Chinese and English, search, groups, rating filters, freshness labels, and one-click opening for the top 20 recommendations.

If AI FreeNav saves you time, consider starring the repository and reporting outdated links or useful additions.

Rules, credits, model inventory, and campaigns can change at the source site. Always verify the current source page before use. A rating is an editorial discovery signal, not a guarantee of availability or service quality.

## Disclaimer

本项目只做公开信息整理与入口导航，不代表任何被收录站点，也不保证其可用性、额度、模型库存、接口兼容性或活动持续时间。项目维护者不要求用户提交账号、密码、Cookie 或 API key。

This project is an index of public information and links. It does not represent or guarantee any listed service, quota, model inventory, API compatibility, availability, or campaign duration. Never submit private credentials to this repository or to an unverified service.

部分入口可能包含推广参数；如有推广关系，会在站内标注。请勿为领取未经核实的福利进行大额充值。

Some links may contain referral parameters and are labeled in the site where applicable. Do not make a large payment for an unverified promotion.

## License

代码和整理内容以 [MIT License](LICENSE) 发布。站点名称、Logo 和第三方内容归其各自权利人所有。
