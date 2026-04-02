# SKA 活动页面（四页分包）

本仓库按页面拆分 **4 套独立可运行的 Vite + React + TypeScript + Tailwind** 工程，便于单独接入与发布。

| 目录 | 说明 | 开发端口（默认） |
|------|------|------------------|
| `pages/activity` | 活动主页 | 5173 |
| `pages/signin` | 签到弹层 | 5174 |
| `pages/prize-won` | 抽中奖品 | 5175 |
| `pages/store-list` | 门店列表弹层 | 5176 |

## 切图资源

各页所需静态资源放在对应目录的 **`public/assets/`**（文件名与 Figma MCP 导出一致）。

在本机打开 Figma 桌面设计文件并保证资源服务可用时，可在仓库根目录执行：

```bash
node scripts/fetch-figma-assets.mjs
```

也可设置自定义基地址：

```bash
FIGMA_ASSET_BASE=https://你的CDN/assets node scripts/fetch-figma-assets.mjs
```

## 本地开发

```bash
cd pages/activity   # 或 signin / prize-won / store-list
npm install
npm run dev
```

## 构建

```bash
cd pages/<页面目录>
npm install
npm run build
```

构建产物在各自目录下的 `dist/`。
