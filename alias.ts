import path from 'node:path'
import { fileURLToPath } from 'node:url'

const baseUrl = fileURLToPath(new URL('.', import.meta.url))

export default [
  {
    find: /^th-ui/,
    replacement: path.resolve(baseUrl, 'packages/th-ui/src'),
  },
  {
    find: /^@th-ui\/utils/,
    replacement: path.resolve(baseUrl, 'packages/utils/src'),
  },
  {
    find: /^@th-ui\/icons/,
    replacement: path.resolve(baseUrl, 'packages/icons/src'),
  },
  {
    find: /^@th-ui\/fe/,
    replacement: path.resolve(baseUrl, 'packages/fe'),
  }
]