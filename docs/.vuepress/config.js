module.exports = {
    title: 'WS-TRICKS',
    description: 'Web Scraper 从入门到 666',
    head: [
      ['link', { rel: 'icon', href: '/favicons.png'}]
    ],
    ga: 'UA-69830079-2',
    themeConfig: {
      nav: [
        { text: '快速上手', link: '/guide/' },
        { text: '完整教程', link: '/tutorial/' },
        { text: '抓取配置', link: '/sitemap/' },
        { text: '辅助工具', link: '/tool/' },
        { text: 'GitHub', link: 'https://github.com/onedayl/wst' },
      ],
      sidebar: {
        '/guide/': [
          '',
        ],
        '/tutorial/': [
            '',
            'selector'
          ],
        '/sitemap/': [
          '',
          'weibo'
        ],
        '/tool/': [
          ''
        ],
        '/': [
          ''
        ]
      },
      sidebarDepth: 2
    }
}