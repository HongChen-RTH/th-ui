import { defineConfig } from 'vitepress'
import { head, nav, sidebar, algolia } from './configs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TH UI",
  head: [['link', { rel: 'icon', href: process.env.NODE_ENV === 'production' && !process.env.BUILD_VERCEL ? "/th-ui/vite.svg" : '/vite.svg' }]],
  description: "A VitePress Site",
  base: process.env.NODE_ENV === 'production' && !process.env.BUILD_VERCEL ? "/th-ui/" : '/',
  rewrites: {
    'docs/(.*)': '(.*)',
    'packages/th-ui/src/:comp/(.*)': 'components/:comp/(.*)',
    'packages/utils/src/(.*)': 'utils/(.*)',
    'packages/icons/docs/(.*)': 'components/icons/(.*)',
    'packages/fe/src/(.*)': 'fe/src/(.*)',
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,
    //   [

    //   { text: '首页', link: '/' },
    //   { text: '介绍', link: '/introduce' },
    //   { text: '组件', link: '/components/' },
    //   { text: '工具', link: '/utils/' },
    // ],

    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
