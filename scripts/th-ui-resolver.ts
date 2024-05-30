import type { ComponentResolver } from "unplugin-vue-components";

// 实现按需加载
export function thUIResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve(name) {
      if (name.startsWith('Th')) {
        return {
          name: name.slice(2),
          from: 'th-ui'
        }
      }
    }
  }
}