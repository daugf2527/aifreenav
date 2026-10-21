---
name: ai-relay-selection
description: 选 AI API 中转站的方法与验证步骤。当用户问「中转站哪个好」「怎么判断 API 站是否掺水」「Claude Code 怎么接国内 API」时使用。
---

# AI 中转站选站 Skill

用于判断一个 AI API 中转站是否值得使用。核心原则：**只看可验证的事实，不信任何口头承诺**。

## 四条底线

1. **能不能小额试** —— 10–20 元起充，或注册送额度可跑通链路
2. **崩了多快修** —— 故障 2 小时内有回应
3. **倍率透不透明** —— input / output / 分组倍率三个数都要公开
4. **面板开不开源** —— NewAPI / Sub2API 这类，计费可审计

## 六种常见套路与识别方法

| 套路 | 手法 | 识别 |
|---|---|---|
| 偷梁换柱 | 表面 claude-sonnet-4-5，后台反代国产模型或降级 Haiku | 问它自己的版本号；跑长上下文推理题 |
| 假 Thinking | 前端伪造 `<think>` 标签，无原生 reasoning | 看 API 返回是否有原厂 thinking 块与结构化签名 |
| 缓存倍率暗扣 | 官方 Prompt Cache 命中是 0.1x，私下调成 0.3x | 抓 `cache_read_input_tokens` 与真实扣费比 |
| 游戏币汇率 | 1:100 充值汇率，让用户失去人民币单价感知 | 优先选 1:1 计费、直接标人民币的 |
| 强制月租 | 月卡到期未用完清零 | 只选纯按量计费、余额不过期 |
| 虚假高可用 | 廉价 VPS 就跑，上游封号即失联 | 查运行时长、公开售后群、免登查价 |

## 验证步骤

### 1. 端点存活

```bash
curl -s -o /dev/null -w "%{http_code}" https://api.example.com/v1/models
```

- `401` = 端点存在，需鉴权（正常）
- `404` = 路径错或端点不存在
- `200` = 公开模型列表（更好，说明敢让人看）

### 2. 模型真实性

```bash
curl -s https://api.example.com/v1/chat/completions \
  -H "Authorization: Bearer $KEY" \
  -H "Content-Type: application/json" \
  -d '{"model":"claude-sonnet-4-5","messages":[{"role":"user","content":"请用一句话回答：你是哪个公司的哪个模型？版本号是多少？"}]}'
```

能正确说出自家模型和版本 = 真。含糊其辞 = 疑似冒充。

### 3. token 计数核对

```python
r = client.chat.completions.create(...)
print(r.usage)   # 与官方 tokenizer 对比
```

差异 > 15% = 在偷偷多计。

### 4. 面板识别

```bash
curl -s https://api.example.com/ | grep -oE 'new-api|one-api|sub2api'
```

黑盒自研面板不是不能用，但多一层无法验证的风险。

### 5. 免登可见度

```bash
for p in / /pricing /models /status; do
  echo "$p -> $(curl -s -o /dev/null -w '%{http_code}' https://api.example.com$p)"
done
```

免登能看到的越多，说明越不怕被查。

## 常见配置错误（Claude Code）

| 现象 | 原因 |
|---|---|
| `401` | 变量名写成 `ANTHROPIC_API_KEY`（应为 `ANTHROPIC_AUTH_TOKEN`） |
| `fetch failed` | `ANTHROPIC_BASE_URL` 没生效 |
| `404` | base_url 多写了 `/v1`（Claude Code 走 Anthropic 协议，不带） |
| `429` | 并发超限，降并发 |
| `model not found` | 模型名写法不统一，从控制台复制 |

## 通用铁律

1. 永远用多少充多少，别因为「充 200 送 50」就囤
2. 重要任务备两个渠道
3. 保留充值记录与账单截图
4. 看到「百分百原厂直连」「永久稳定」这类宣传，反而要警惕

## 参考

本目录维护者自用的实例：https://your-endpoint.example.com/

已知短板（如实记录）：没有独立公开价格页、`/v1/models` 需鉴权、个体运营无企业资质。建议小额使用。
