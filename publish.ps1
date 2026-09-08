param([switch]$CheckOnly)
$ErrorActionPreference = 'Stop'
$projectRoot = $PSScriptRoot
$previewRoot = Join-Path $projectRoot 'layout-preview'
$publicRoot = Join-Path $projectRoot 'static-site/public'
$configPath = Join-Path $projectRoot 'static-site/wrangler.json'
$wranglerPath = Join-Path $projectRoot 'personal-website/node_modules/wrangler/bin/wrangler.js'
if (-not (Test-Path -LiteralPath $wranglerPath)) { throw 'Wrangler is missing. Restore personal-website dependencies with npm ci first.' }
$files = @('index.html', 'styles.css', 'script.js', 'assets/wechat-qr.jpg')
foreach ($file in $files) {
  $sourcePath = Join-Path $previewRoot $file
  if (-not (Test-Path -LiteralPath $sourcePath)) { throw "Missing source file: $file" }
}
New-Item -ItemType Directory -Path (Join-Path $publicRoot 'assets') -Force | Out-Null
foreach ($file in $files) {
  Copy-Item -LiteralPath (Join-Path $previewRoot $file) -Destination (Join-Path $publicRoot $file) -Force
}
& node --check (Join-Path $publicRoot 'script.js')
if ($LASTEXITCODE -ne 0) { throw 'JavaScript validation failed.' }
Write-Host 'Publishing only index.html, styles.css, script.js and the original QR image.'
if ($CheckOnly) {
  & node $wranglerPath deploy --config $configPath --dry-run
} else {
  & node $wranglerPath deploy --config $configPath
}
if ($LASTEXITCODE -ne 0) { throw 'Wrangler failed. See the error above; deployment was not confirmed.' }
