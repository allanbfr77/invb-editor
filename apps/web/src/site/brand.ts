import { withBasePath } from "@/utils/base-path";
export const SITE_URL = "https://opencut.app";

export const SITE_INFO = {
	title: "OpenCut",
	description:
		"Editor de vídeo do INVB Studio.",
	url: SITE_URL,
	openGraphImage: withBasePath("/open-graph/default.jpg"),
	twitterImage: withBasePath("/open-graph/default.jpg"),
	favicon: withBasePath("/favicon.ico"),
};

export const DEFAULT_LOGO_URL = withBasePath("/logos/opencut/svg/logo.svg");
