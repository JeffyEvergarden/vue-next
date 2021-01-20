import { compile as baseCompile } from '@vue/compiler-dom'

const template = '<div>{{fake}}</div>'
const { ast, code } = baseCompile(template)
console.log('ast')
console.log(ast)
console.log('ast')
console.log(code)
