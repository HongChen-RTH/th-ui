import { purple, green, gold, red } from '@ant-design/colors';
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

let colors = ''
purple.forEach((item: any, index: number) => {
  colors += `--th-color-primary-${index + 1}: ${item};\n`
});

colors += `\n`

green.forEach((item: any, index: number) => {
  colors += `--th-color-success-${index + 1}: ${item};\n`
});
colors += `\n`

gold.forEach((item: any, index: number) => {
  colors += `--th-color-warning-${index + 1}: ${item};\n`
});

colors += `\n`
red.forEach((item: any, index: number) => {
  colors += `--th-color-error-${index + 1}: ${item};\n`
});

const baseUrl = fileURLToPath(new URL('../', import.meta.url))
const cssFile = path.resolve(baseUrl, 'packages/th-ui/src/style/theme/colors.css')
fs.writeFileSync(cssFile, `:root{\n${colors}\n}`)
console.log('success')

console.log(colors);
