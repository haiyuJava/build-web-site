1. 注册 Cloudflare：

   打开 Cloudflare 注册页面 (https://dash.cloudflare.com/sign-up)，用邮箱注册并验证。

2. 登录 Wrangler：

npx wrangler login

浏览器会打开 Cloudflare OAuth 授权页面。确认授权后检查登录状态：

npx wrangler whoami

本地手动部署不需要另外创建 API Token；API Token 主要用于 GitHub Actions 等无人值守部署。Wrangler 登录说明 (https://developers.cloudflare.com/workers/wrangler/commands/general/)

3. 构建网站：

npm run build

4. 部署到 Cloudflare Workers：

npx wrangler deploy --config dist/server/wrangler.json

首次部署时，Wrangler 可能让你设置 workers.dev 子域名。部署成功后会显示类似：

https://你的项目名.你的账户名.workers.dev

以后更新网站，只需重复：

npm run build
npx wrangler deploy --config dist/server/wrangler.json

如果需要自己的域名，可以先用免费的 workers.dev 地址验证网站，再进入 Cloudflare 控制台：

Workers & Pages → 选择项目 → Settings → Domains & Routes → Add → Custom Domain

Cloudflare 会自动处理 DNS 记录和 HTTPS 证书，但你需要拥有该域名并将其接入 Cloudflare。自定义域名说明 (https://developers.cloudflare.com/workers/configuration/routing/custom-domains/)

目前我只安装并验证了 Wrangler，没有登录你的账户，也没有执行上线部署。