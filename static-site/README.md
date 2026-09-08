# 新版静态网站发布

正式发布目录：`public/`。源文件仍在 `../layout-preview/`；修改源文件后，发布脚本自动复制 HTML、CSS、JavaScript 和真实二维码到正式目录，不上传预览截图、文档或浏览器数据。

在仓库根目录的 PowerShell 中运行：

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\publish.ps1
```

只检查文件与部署配置，不发布：

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\publish.ps1 -CheckOnly
```

使用原项目已安装的 Wrangler，不新增前端依赖。若提示尚未登录，执行：

```powershell
node .\personal-website\node_modules\wrangler\bin\wrangler.js login
```

固定发布到当前账号的 `sites-project`，网址为 https://sites-project.hello-ai.workers.dev 。以后更新新版不要再执行旧项目的 `npm run build` 和 `dist/server/wrangler.json` 部署命令，否则会覆盖回旧网站。

新增其他图片时，需要将路径添加到 `publish.ps1` 的 `$files` 列表中。当前网站无需构建命令或后端。
