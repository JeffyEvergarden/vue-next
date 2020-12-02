const hasOwnProperty = Object.prototype.hasOwnProperty
const hasOwn = (val, key) => hasOwnProperty.call(val, key)

let obj = { a: 10, b: { c: 10 } }

let obj2 = Object.create(obj)
let obj3 = Object.create(obj2)
obj3.c = 40
let proxy = new Proxy(obj3, {
  get(target, key, value, receiver) {
    console.log('get')
    return Reflect.get(target, key)
  },
  set(target, key, value, receiver) {
    console.log('set')
    const res = Reflect.set(target, key, value, receiver)
    return true
  }
})

// target只为代理的对象 target === obj   => true
proxy.b.c = 20
