import {defineConfig} from "vitepress";

const ogDescription = 'LISP like multi paradigms supported tiny programming language'
const ogImage = '/white.png'
const ogTitle = 'Wuttyi'
const ogUrl = 'https://wuttyi.vercel.app'

export default defineConfig({
    lang: 'en-Us',
    title: 'Wuttyi',
    description: 'Documentation for Wuttyi Programming Language',


    head: [
        ['link', {rel: 'icon', type: 'image/svg+xml', href: '/logo.svg'}],
        ['meta', {property: 'og:type', content: 'website'}],
        ['meta', {property: 'og:title', content: ogTitle}],
        ['meta', {property: 'og:image', content: ogImage}],
        ['meta', {property: 'og:url', content: ogUrl}],
        ['meta', {property: 'og:description', content: ogDescription}],
        ['meta', {name: 'twitter:card', content: 'summary_large_image'}],
        ['meta', {name: 'twitter:site', content: '@_amm834'}],
        ['meta', {name: 'theme-color', content: '#646cff'}]
    ],


    lastUpdated: true,
    cleanUrls: 'with-subfolders',

    themeConfig: {
        siteTitle: 'Wuttyi',

        lastUpdatedText: 'Updated Date',

        logo: '/logo.svg',

        // algolia: {
        //     appId: '7H67QR5P0A',
        //     apiKey: 'deaab78bcdfe96b599497d25acc6460e',
        //     indexName: 'vitejs',
        //     searchParameters: {
        //         facetFilters: ['tags:en']
        //     }
        // },

        nav: [
            {text: 'Documentation', link: '/docs/expression'},
            {text: 'Download', link: '/getting-started/download'},
            {
                text: 'v1.0.0',
                items: [
                    {text: 'Changelog', link: 'https://github.com/amm834/wuttyi-lang/blob/main/CHANGELOG.md'},
                    {text: 'Contributing', link: 'https://github.com/amm834/wuttyi-lang/blob/main/CONTRIBUTING.md'},
                ]
            }
        ],
        socialLinks: [
            {icon: 'github', link: 'https://github.com/amm834/wuttyi-lang'},
            {icon: 'linkedin', link: 'https://www.linkedin.com/in/aungmyatmoe/'},
        ],
        editLink: {
            pattern: 'https://github.com/amm834/wuttyi-lang/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },
        sidebar: [
            {
                text: 'Getting Started',
                collapsible: true,
                items: [
                    {text: 'Introduction', link: '/getting-started/introduction'},
                    {text: 'Download', link: '/getting-started/download'},
                    {text: 'Usage', link: '/getting-started/cli-usage'},
                ]
            },
            {
                text: 'Documentation',
                collapsible: true,
                items: [
                    {text: 'Expression', link: '/docs/expression'},
                    {text: 'String Concat', link: '/docs/string-concat'},
                    {text: 'Print', link: '/docs/print'},
                    {text: 'Variable', link: '/docs/variable'},
                    {text: 'Operators', link: '/docs/operators'},
                    {text: 'Control Flows', link: '/docs/control-flows'},
                    {text: 'Function', link: '/docs/function'},
                    {text: 'Scope', link: '/docs/scope'},
                    {text: 'Lambda', link: '/docs/lambda'},
                    {text: 'Module', link: '/docs/module'},
                    {text: 'OOP', link: '/docs/class'},
                ]
            },
            {
                text: 'Developer',
                collapsible: true,
                items: [
                    {text: 'Team', link: '/developer/team'},
                    {text: 'Contributing', link: '/developer/contributing'},
                ]
            },
            {
                text: 'Resources',
                collapsible: true,
                items: [
                    {text: 'Calculator Lang', link: '/resources/create-a-programming-language'},
                    {text: 'Further Reading', link: '/resources/further-reading'},
                ]
            },
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022 Aung Myat Moe all right reserved.'
        }
    }
})

