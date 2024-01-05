import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
	// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
	author: "Alveek",
	// Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
	title: "Алексей Кудрявцев",
	// Meta property used as the default description meta property
	description: "Блог на около айтишные темы: фронтенд, бэкенд, линукс и тд",
	// HTML lang property, found in src/layouts/Base.astro L:18
	lang: "ru-ru",
	// Meta property, found in src/components/BaseHead.astro L:42
	ogLocale: "ru_RU",
	// Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
	date: {
		locale: "ru-RU",
		options: {
			day: "numeric",
			month: "numeric",
			year: "numeric",
		},
	},
	// Include view-transitions: https://docs.astro.build/en/guides/view-transitions/
	includeViewTransitions: false,
	webmentions: {
		link: "https://webmention.io/astro-cactus.chriswilliams.dev/webmention",
	},
};

// Used to generate links in both the Header & Footer.
export const menuLinks: Array<{ title: string; path: string }> = [
	{
		title: "Главная",
		path: "/",
	},
	{
		title: "Блог",
		path: "/posts/",
	},
	{
		title: "Обо мне",
		path: "/about/",
	},
];
