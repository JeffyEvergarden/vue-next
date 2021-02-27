/*
Run Rollup in watch mode for development.

To specific the package to watch, simply pass its name and the desired build
formats to watch (defaults to "global"):

```
# name supports fuzzy match. will watch all packages with name containing "dom"
yarn dev dom

# specify the format to output
yarn dev core --formats cjs

# Can also drop all __DEV__ blocks with:
__DEV__=false yarn dev
```
*/

const execa = require('execa') // 命令行工具包
const { fuzzyMatchTarget } = require('./utils')
const args = require('minimist')(process.argv.slice(2))
console.log('打包执行参数')
console.log(process.argv)
// [ 'C:\\Program Files\\nodejs\\node.exe',
//   'E:\\code\\vue-next\\scripts\\dev.js',
//   '--sourcemap' ]
console.log(args)
// { _: [], sourcemap: true }  不加-的都会收录在_的参数
// 目标
const target = args._.length ? fuzzyMatchTarget(args._)[0] : 'vue' // _ 下什么都不输出就默认是vue
// 格式 cjs 、 umd浏览器--->vue取名为global 也就是iife 立即执行函数
const formats = args.formats || args.f // 默认global  -f 就是格式
const sourceMap = args.sourcemap || args.s // 源码的映射
const commit = execa.sync('git', ['rev-parse', 'HEAD']).stdout.slice(0, 7)

execa(
  'rollup',
  [
    '-wc',
    '--environment',
    [
      `COMMIT:${commit}`,
      `TARGET:${target}`,
      `FORMATS:${formats || 'global'}`,
      sourceMap ? `SOURCE_MAP:true` : ``
    ]
      .filter(Boolean)
      .join(',')
  ],
  {
    stdio: 'inherit'
  }
)
