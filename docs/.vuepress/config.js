module.exports = {
    title: 'WS-TRICKS',
    description: 'Web Scraper 从入门到高手',
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
            'selector',
            'text-selector',
            'link-selector',
            'link-popup-selector',
            'image-selector',
            'table-selector',
            'element-attribute-selector',
            'html-selector',
            'grouped-selector',
            'element-selector',
            'element-scroll-down-selector',
            'element-click-selector',
            'css-selector'
          ],
        '/sitemap/': [
          '',
          'weibo',
          'sogou',
          'bilibili'
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