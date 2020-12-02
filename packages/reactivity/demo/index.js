const vue = require('../index.js')
const { reactive, effect } = vue

let obj = reactive({ count: 10 })

// 该方法测试lazy为true的时候收集不到依赖
effect(
  () => {
    console.log(obj.count)
  },
  { lazy: true }
)

setTimeout(() => {
  obj.count++
}, 2000)
