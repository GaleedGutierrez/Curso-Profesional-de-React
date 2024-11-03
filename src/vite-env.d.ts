/// <reference types="vite/client" />

interface ImportMetaEnvironment {
	readonly VITE_API_KEY_TICKERMASTER: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnvironment;
}
