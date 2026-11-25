import type { NextConfig } from "next";

// INVB_STUDIO_EXPORT=1 (bun run build:studio): o editor vira arquivos estáticos servidos pelo INVB Studio em
// /editor-avancado. As rotas de servidor ficam em arquivos route.server.ts, que só existem fora desse modo.
const STUDIO_EXPORT = process.env.INVB_STUDIO_EXPORT === "1";
const STUDIO_BASE_PATH = "/editor-avancado";

const remotePatterns: NonNullable<NextConfig["images"]>["remotePatterns"] = [
	{ protocol: "https", hostname: "plus.unsplash.com" },
	{ protocol: "https", hostname: "images.unsplash.com" },
	{ protocol: "https", hostname: "images.marblecms.com" },
	{ protocol: "https", hostname: "lh3.googleusercontent.com" },
	{ protocol: "https", hostname: "avatars.githubusercontent.com" },
	{ protocol: "https", hostname: "api.iconify.design" },
	{ protocol: "https", hostname: "api.simplesvg.com" },
	{ protocol: "https", hostname: "api.unisvg.com" },
	{ protocol: "https", hostname: "cdn.brandfetch.io" },
];

const nextConfig: NextConfig = {
	compiler: {
		removeConsole: process.env.NODE_ENV === "production",
	},
	reactStrictMode: true,
	...(STUDIO_EXPORT
		? {
				output: "export",
				basePath: STUDIO_BASE_PATH,
				trailingSlash: false,
				productionBrowserSourceMaps: false,
				pageExtensions: ["tsx", "ts"],
				env: { NEXT_PUBLIC_BASE_PATH: STUDIO_BASE_PATH },
				images: { unoptimized: true, remotePatterns },
			}
		: {
				output: "standalone",
				productionBrowserSourceMaps: true,
				pageExtensions: ["tsx", "ts", "server.ts"],
				images: { remotePatterns },
			}),
};

export default nextConfig;
