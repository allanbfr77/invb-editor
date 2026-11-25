/**
 * Prefixo do editor quando ele roda dentro do INVB Studio (/editor-avancado). Vazio no `bun dev:web`.
 * `next/link` e o router já aplicam o basePath sozinhos; arquivos de `public/` buscados por caminho absoluto
 * (fetch, <img>, new Image(), metadata) não, e passam por `withBasePath`.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string, base: string = BASE_PATH): string {
	if (!base || !path.startsWith("/") || path.startsWith("//")) return path;
	return `${base}${path}`;
}
