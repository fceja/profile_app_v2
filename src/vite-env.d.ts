/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_AXIOS_TIMEOUT: string;
    readonly VITE_APP_EMAILER_API_KEY: string;
    readonly VITE_APP_EMAILER_API_URL: string;
    readonly VITE_APP_GOOGLE_MAPS_API_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
