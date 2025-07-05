const sym = Symbol('who')

const obj={
    name:'lv',
    'fullname':'lavanshu patidar',
    [sym]:'createdaSymbol'
}
console.log(obj)
console.log( obj[sym])
console.log(obj['fullname'])
