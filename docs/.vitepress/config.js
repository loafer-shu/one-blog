export default {
  title: '舒',
  description: 'Just playing around.',
  base: '/one-blog/',
  lastUpdated: true,

  themeConfig: {
    logo: '/img/startup.png',
    siteTitle: 'Loafer-Shu',
    nav: nav(),

    sidebar: {
      '/frontend/': sidebarFrontend(),
      '/backend/': sidebarBackend(),
      '/linux/': sidebarLinux(),
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/loafer-shu' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present shu'
    },

  }

}

function nav() {
  return [{
    text: '前端',
    activeMatch: '/frontend/',
    items: [{
        text: 'vue',
        link: '/frontend/env-starter',
      },
    ]
  },
  {
    text: '后端',
    activeMatch: '/backend/',
    items: [{
        text: 'java',
        link: '/backend/thread',
      },
    ]
  },
  {
    text: 'Linux',
    activeMatch: '/linux/',
    items: [{
      text: 'Manjaro',
      link: '/linux/install-package'
    }]
  },
]
}

function sidebarFrontend() {
  return [
    {
      text: '开始',
      collapsible: true,
      items: [
        { text: '通过工具安装环境', link: '/frontend/env-starter' },
      ]
    },
    {
      text: 'Writing',
      collapsible: true,
      items: [
        { text: 'Markdown', link: '/guide/markdown' },
        { text: 'Asset Handling', link: '/guide/asset-handling' },
        { text: 'Frontmatter', link: '/guide/frontmatter' },
        { text: 'Using Vue in Markdown', link: '/guide/using-vue' },
        { text: 'API Reference', link: '/guide/api' }
      ]
    },
    {
      text: 'Theme',
      collapsible: true,
      items: [
        { text: 'Introduction', link: '/guide/theme-introduction' },
        { text: 'Nav', link: '/guide/theme-nav' },
        { text: 'Sidebar', link: '/guide/theme-sidebar' },
        { text: 'Prev Next Link', link: '/guide/theme-prev-next-link' },
        { text: 'Edit Link', link: '/guide/theme-edit-link' },
        { text: 'Last Updated', link: '/guide/theme-last-updated' },
        { text: 'Layout', link: '/guide/theme-layout' },
        { text: 'Homepage', link: '/guide/theme-homepage' },
        { text: 'Footer', link: '/guide/theme-footer' },
        { text: 'Search', link: '/guide/theme-search' },
        { text: 'Carbon Ads', link: '/guide/theme-carbon-ads' }
      ]
    },
    {
      text: 'Migrations',
      collapsible: true,
      items: [
        {
          text: 'Migration from VuePress',
          link: '/guide/migration-from-vuepress'
        },
        {
          text: 'Migration from VitePress 0.x',
          link: '/guide/migration-from-vitepress-0'
        }
      ]
    }
  ]
}

function sidebarBackend() {
  return [
    {
      text: '多线程',
      items: [
        {
          text: '了解',
          link: '/backend/thread'
        },
        {
          text: 'Migration from VitePress 0.x',
          link: '/guide/migration-from-vitepress-0'
        }
      ]
    }
  ]
}
function sidebarLinux() {
  return [
    {
      text: '应用',
      collapsible: true,
      items: [
        { text: '常用软件', link: '/linux/install-package' },
      ]
    },
    {
      text: 'Writing',
      collapsible: true,
      items: [
        { text: 'Markdown', link: '/guide/markdown' },
        { text: 'Asset Handling', link: '/guide/asset-handling' },
        { text: 'Frontmatter', link: '/guide/frontmatter' },
        { text: 'Using Vue in Markdown', link: '/guide/using-vue' },
        { text: 'API Reference', link: '/guide/api' }
      ]
    },
  ]
}