#!/usr/bin/env node
/**
 * 从本机 Figma 桌面 MCP 资源服务拉取切图到各页 `public/assets/`。
 * 使用前在 Figma 桌面版打开设计文件，确保 http://127.0.0.1:3845 可访问。
 *
 *   node scripts/fetch-figma-assets.mjs
 *   FIGMA_ASSET_BASE=https://cdn.example.com/assets node scripts/fetch-figma-assets.mjs
 */
import { writeFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const BASE = (process.env.FIGMA_ASSET_BASE || "http://127.0.0.1:3845/assets").replace(/\/$/, "");

const pages = {
  activity: [
    "3185fdf1095b7d4bf78dc9e368d4065ad04301e4.png",
    "9ff14a462fe32040e76da4276eeda5da784898b9.png",
    "0131d60a28bdc015f03a0ab42cef74123b4a52f6.png",
    "b62eaa2425b1c3a463e3f073f99f23ff8e0e8d6b.png",
    "a19dc06f0de560d2acc564f0068800a540283717.png",
    "7cbbe1480c97cf53c58361dd6433fee69773c75c.png",
    "e9f2f6493eca919a04902a533539c43bdc1c924f.png",
    "5ee520a22a991f53b83c6f056cdabbe67b609f9b.png",
    "2a8420b13434b831a21ca037a7df39278eb7ab75.png",
    "172450a8b5b3e12d55ebf3d1802e7a9776486064.png",
    "57d1e1c49bf4311a1854ad16da7f06184f2089a0.png",
    "4e139bbf6cd4a6b9fb3aa97d1ce339709067c5c8.png",
    "b372f0a207621701e0d3a39dc251ed6bc986305f.svg",
    "e6a0604e8f8456afc258cbabe4402fd2200f69d4.svg",
    "f2568e1d2f106aaba4baa1e856c997a122e879d1.svg",
    "c65fb20e1cd2b54e24b0dff14f8691259e998c76.svg",
    "72e223c535bbdbe23cbcbdf13e9a0b8346140b50.svg",
    "3134a773852b4fd9b4bfc4368bf76c6f6dec02a1.svg",
    "de2ef77ab965036ae9243b512c0e837a7e190320.svg",
    "cee61d1944555b73168f95f348447472eaed83ba.svg",
    "a291c407f8bab427eae8f8d732c292af59d44695.svg",
    "f500f570edaddef24592bbd0542376bb496b02a2.svg",
    "f2d51f4ed36be8353e9564eb08186fffb2a5eaf6.svg",
    "e6715f069170d20c8f46b6908b3d825fd61d0cf8.svg",
    "f7ca262d309ad6eb8ed3336ead6be2136cedcf4d.svg",
    "3a3647fcbb3ca42e4ab823c5e468a27c87154edc.svg",
    "6feea50e7455bce8963c96635ae1d3d8152fa6ec.svg",
    "e0d5a0841bad26ab55acfeee051bc1f2fcf756b8.svg",
  ],
  signin: [
    "318c91abd2a2c27de93e84f650c973d3f40b49f1.png",
    "86da98be8130ff6f5a1153ba046a615d521b6cd2.png",
    "c619052252f66444ea32021c63ff9eaf5cad9c0a.png",
    "fda2c034cb113ef89a2cb5735458069f36af84e5.png",
    "bc26fde5cfa50cf1c61d03a1dd04c25f42632624.png",
    "e9f2f6493eca919a04902a533539c43bdc1c924f.png",
    "3fc4de2a3c40e626110400646014b381aaef2834.png",
    "70e16851aabd0ec3c31c7bc9c71f5505720c4297.png",
    "7afc9eb640bf27e0c5ebdfa06be7491c00cba1d5.svg",
    "c88244b022003a4dfc913114fa47a3fb9d008b39.svg",
    "20c4121af816b02fa46ce026413e95b6d005c3a9.svg",
    "b6b08b9c98a2b7515f3547e961ee44cb4dbc4972.svg",
  ],
  "prize-won": [
    "318c91abd2a2c27de93e84f650c973d3f40b49f1.png",
    "3fc4de2a3c40e626110400646014b381aaef2834.png",
    "fda2c034cb113ef89a2cb5735458069f36af84e5.png",
    "a1a00ca7e4aab954425bee486cdc0afc7e8e00ab.png",
    "86da98be8130ff6f5a1153ba046a615d521b6cd2.png",
    "c619052252f66444ea32021c63ff9eaf5cad9c0a.png",
    "bc26fde5cfa50cf1c61d03a1dd04c25f42632624.png",
    "163aa44f1e2b53534e45876764edb96a9c29c40e.png",
    "7afc9eb640bf27e0c5ebdfa06be7491c00cba1d5.svg",
    "c88244b022003a4dfc913114fa47a3fb9d008b39.svg",
    "20c4121af816b02fa46ce026413e95b6d005c3a9.svg",
    "b6b08b9c98a2b7515f3547e961ee44cb4dbc4972.svg",
  ],
  "store-list": [
    "318c91abd2a2c27de93e84f650c973d3f40b49f1.png",
    "27c4b381f461d988e00367dd56bb60ef63bc07b5.png",
    "e6cea04507ccdc03a53663bf5dfd495f4696c941.svg",
  ],
};

async function main() {
  let ok = 0;
  let fail = 0;
  for (const [page, files] of Object.entries(pages)) {
    const dir = join(ROOT, "pages", page, "public", "assets");
    await mkdir(dir, { recursive: true });
    for (const f of files) {
      const url = `${BASE}/${f}`;
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(String(res.status));
        const buf = Buffer.from(await res.arrayBuffer());
        await writeFile(join(dir, f), buf);
        console.log("ok", page, f);
        ok++;
      } catch (e) {
        console.error("fail", page, f, e?.message || e);
        fail++;
      }
    }
  }
  console.log(`\nDone: ${ok} ok, ${fail} failed`);
  if (fail > 0) process.exitCode = 1;
}

main();
