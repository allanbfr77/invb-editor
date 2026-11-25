import type { Metadata } from "next";
import { SITE_INFO, SITE_URL } from "@/site/brand";
import { withBasePath } from "@/utils/base-path";

export const baseMetaData: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: SITE_INFO.title,
	description: SITE_INFO.description,
	openGraph: {
		title: SITE_INFO.title,
		description: SITE_INFO.description,
		url: SITE_URL,
		siteName: SITE_INFO.title,
		locale: "pt_BR",
		type: "website",
		images: [
			{
				url: SITE_INFO.openGraphImage,
				width: 1200,
				height: 630,
				alt: "OpenCut Wordmark",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: SITE_INFO.title,
		description: SITE_INFO.description,
		creator: "@opencutapp",
		images: [SITE_INFO.twitterImage],
	},
	pinterest: {
		richPin: false,
	},
	robots: {
		index: true,
		follow: true,
	},
	// Mesmo ícone do INVB Studio (public/img/nv-v.png), para a aba do editor ser reconhecida como parte do app.
	icons: {
		icon: [{ url: withBasePath("/icons/invb.png"), type: "image/png" }],
		apple: [{ url: withBasePath("/icons/invb.png"), type: "image/png" }],
		shortcut: [withBasePath("/icons/invb.png")],
	},
	appleWebApp: {
		capable: true,
		title: SITE_INFO.title,
	},
	manifest: withBasePath("/manifest.json"),
	other: {
		"msapplication-config": withBasePath("/browserconfig.xml"),
	},
};
