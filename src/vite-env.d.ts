/// <reference types="vite/client" />

// eslint-disable-next-line unicorn/prevent-abbreviations
interface ImportMetaEnv {
	readonly VITE_API_KEY_TICKERMASTER: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
