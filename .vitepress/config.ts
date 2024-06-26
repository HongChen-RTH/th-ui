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
      '/components/': [
        {
          text: '按钮',
          link: '/components/button'
        },
        {
          text: '输入框',
          link: '/components/input/',
        },
        {
          text: 'Tooltip',
          link: '/components/tooltip/',
        },
        {
          text: 'Table',
          link: '/components/table/',
        },
      ],
      '/utils/': [
        {
          text: 'genClass',
          link: '/utils/gen-class',
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  base: process.env.NODE_ENV !== 'production' && !process.env.BUILD_VERCEL ? "/th-ui/" : '/',
  rewrites: {
    'docs/(.*)': '(.*)',
    'packages/th-ui/src/:comp/(.*)': 'components/:comp/(.*)',
    'packages/utils/src/(.*)': 'utils/(.*)',
  }
})
