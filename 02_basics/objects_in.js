const sym = Symbol('who')

const obj={
    name:'lv',
    'fullname':'lavanshu patidar',
    [sym]:'createdaSymbol'
}
//console.log(obj)
//console.log( obj[sym])
//console.log(obj['fullname'])
const obj1 ={1:'a',2:'c'} 
const obj2 ={3:'a',4:'c'} 
const obj3=Object.assign({},obj1,obj,obj2)
console.log(obj3)
const obj4={...obj1,...obj}
console.log(obj4)
let arr=Object.keys(obj4)
console.log(arr)
arr=Object.values(obj4)
console.log(arr)





