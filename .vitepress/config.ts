import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TH UI",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '介绍', link: '/introduce' },
      { text: '组件', link: '/components/' },
      { text: '工具', link: '/utils/' },


    ],

    sidebar: {
      '/components/': [{
        text: '按钮',
        link: '/components/button'
      }]
    },
    //   [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   },

    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  rewrites: {
    'docs/(.*)': '(.*)',
    'packages/th-ui/src/:comp/(.*)': 'components/:comp/(.*)'
  }
})
