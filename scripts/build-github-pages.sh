#!/usr/bin/env bash
# 构建四页并写入 docs/（供 GitHub Pages：/SKA/ 下的多子路径 + 根 index Tab 壳）
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DOCS="$ROOT/docs"

rm -rf "$DOCS/activity" "$DOCS/signin" "$DOCS/prize-won" "$DOCS/store-list" "$DOCS/assets"
mkdir -p "$DOCS/activity" "$DOCS/signin" "$DOCS/prize-won" "$DOCS/store-list"

for name in activity signin prize-won store-list; do
  echo ">>> build pages/$name"
  (cd "$ROOT/pages/$name" && npm run build)
  cp -R "$ROOT/pages/$name/dist/." "$DOCS/$name/"
done

touch "$DOCS/.nojekyll"
echo ">>> done. Open file://$DOCS/index.html or deploy docs/ to GitHub Pages."
