import {defineConfig} from "vitepress";

/**
 * @type {import('vitepress').UserConfig}
 */
export default defineConfig({
    lang: 'en-Us',
    title: 'Wuttyi',
    description: 'Documentation for Wuttyi Language',
    lastUpdated: true,
    themeConfig: {
        siteTitle: 'Wuttyi',
        lastUpdatedText: 'Updated Date',
        nav: [
            {text: 'Guide', link: '/guide'},
            {text: 'Changelog', link: 'https://github.com/...'},
        ],
        socialLinks: [
            {icon: 'github', link: 'https://github.com/amm834/wuttyi-lang'},
        ],
        editLink: {
            pattern: 'https://github.com/amm834/wuttyi-lang/blob/main/docs/:path',
            text: 'Edit this page on GitHub'
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022 Aung Myat Moe all right reserved.'
        }
    }
})

