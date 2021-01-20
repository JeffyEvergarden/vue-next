import { compile } from '@vue/compiler-dom'

const template = '<p>{{state.kkb}}</p>'
const { ast, code } = compile(template)
console.log('ast:----')
console.log(ast)
console.log('code:----')
console.log(code)
