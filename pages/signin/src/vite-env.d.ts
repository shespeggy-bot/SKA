/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FIGMA_ASSET_BASE?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
