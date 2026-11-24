# autoreply

节日祝福自动回复助手（`my-app/`）：按关键词识别春节、中秋、国庆、生日等场景并匹配祝福模板的响应式 Web 应用。

## 用途与 Target 判定

| 平台 | 需要? | 方式 |
|------|-------|------|
| 移动端 | 可选 | 当前为响应式 Web/PWA（`my-app/`）；独立 APK 可选 |
| 智能硬件 | 不适用 | 文本模板与消息管理，非体感穿戴场景 |

## 命令

```bash
npm test
npm start
# 或直接预览静态页：open my-app/index.html
```

## Harness / Loop（助手）

- 遵循根 `/Users/skat/AGENTS.md` Harness + Loop 规则
- Guide = 本文件；Sensor = `npm test`（覆盖模板筛选、分类映射、手机号校验与静态资源结构）
- 同类失误第二次 → 沉淀规则或补自动化测试（棘轮）

## 验证环 / Done

```bash
npm test
node --check my-app/app.js
node --check my-app/server.js
```

**Done 示例**：核心脚本语法无误，本地静态页或 `server.js` 可正常预览模板与统计面板。
