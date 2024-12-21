import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
	title: 'Amichain doc',
	tagline: 'Amichain documentation',
	favicon: 'img/favicon.png',

	url: 'https://doc.amichain.com',
	baseUrl: '/',

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'classic',
			{
				docs: {
					routeBasePath: '/',
					sidebarPath: './sidebars.ts',
				},
				theme: {
					customCss: './src/css/custom.css',
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		navbar: {
			title: 'Amichain Doc',
			logo: {
				alt: 'Amichain Logo',
				src: 'img/logo.png',
			},
			items: [
				{
					href: 'https://github.com/amichain',
					label: 'GitHub',
					position: 'right',
				},
				{
					href: 'https://amiavax.com/',
					label: 'Website',
					position: 'right',
				},
			],
		},
		/*footer: {
			style: 'dark',
			links: [
				{
					title: 'Community',
					items: [
						{
							label: 'GitHub',
							href: 'https://github.com/amichain',
						},
						{
							label: 'X',
							href: 'https://twitter.com/amiavax',
						},
						// @TODO...
					],
				},
			],
		},*/
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
