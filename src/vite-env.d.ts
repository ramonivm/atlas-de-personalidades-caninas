/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MAPS_API_KEY?: string;
  readonly VITE_GOOGLE_MAPS_API_KEY?: string;
  readonly VITE_MAPS_MAP_ID?: string;
  readonly APP_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
