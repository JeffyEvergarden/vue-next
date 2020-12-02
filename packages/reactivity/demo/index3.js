const isSymbol = val => typeof val === 'symbol'

const builtInSymbols = new Set(
  Object.getOwnPropertyNames(Symbol)
    .map(key => Symbol[key])
    .filter(isSymbol)
)

console.log(builtInSymbols)
