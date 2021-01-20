'use strict'
exports.__esModule = true
var compiler_dom_1 = require('@vue/compiler-dom')
var template = '<div>{{fake}}</div>'
var _a = compiler_dom_1.compile(template),
  ast = _a.ast,
  code = _a.code
console.log('ast')
console.log(ast)
console.log('ast')
console.log(code)
