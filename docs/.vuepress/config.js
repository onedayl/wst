module.exports = {
    title: 'WS-TRICKS',
    description: 'Web Scraper 从入门到 666',
    themeConfig: {
      nav: [
        { text: '快速上手', link: '/guide/' },
        { text: '完整教程', link: '/tutorial/' },
        { text: '抓取配置', link: '/sitemap/' },
        { text: '辅助工具', link: '/tool/' },
        { text: 'GitHub', link: 'https://github.com/oneday/wst' },
      ],
      sidebar: {
        '/guide/': [
          '',
        ],
        '/tutorial/': [
            '',
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
      }
    }
}