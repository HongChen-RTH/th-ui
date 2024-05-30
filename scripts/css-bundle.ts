import { fileURLToPath } from "node:url";
import fg from 'fast-glob'
import fs from 'fs-extra'
import path from 'path'
import less from "less";

const thDir = fileURLToPath(new URL('../packages/th-ui', import.meta.url))

const lessFiles = fg.sync([
  'src/**/style/index.less',
  '!src/style'
], { cwd: thDir })

console.log(666, lessFiles); // [ 'src/button/style/index.less', 'src/button/input/style/index.less' ]

async function compile() {
  for (const file of lessFiles) {
    const filePath = path.join(thDir, file)
    const lessCode = fs.readFileSync(filePath, 'utf-8')
    const cssCode = await less.render(lessCode, {
      paths: [path.dirname(filePath)]
    })

    const esDir = path.resolve(thDir, `./es${file.slice(3, file.length - 4)}css`)
    const libDir = path.resolve(thDir, `./lib${file.slice(3, file.length - 4)}css`)
    fs.outputFileSync(esDir, cssCode.css)
    fs.outputFileSync(libDir, cssCode.css)
    console.log(esDir, libDir);
  }
}
compile()