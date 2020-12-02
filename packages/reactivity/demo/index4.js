const vue = require('../index.js')
const { ref, effect } = vue

let obj = ref({ count: 10 })

// 该方法测试lazy为true的时候收集不到依赖
// effect(() => {
//   console.log(obj.value)
// }, {lazy: true})

setTimeout(() => {
  console.log(obj.value)
}, 2000)
