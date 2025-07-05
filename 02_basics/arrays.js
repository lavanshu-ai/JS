let arr=[1,23,3.4,5,6,7]
//console.log(arr)
const newarr=arr.splice(0,4)
//console.log(arr)
//console.log(newarr)
arr.push(3)
//console.log(arr)
let arr1=arr.slice(0,3)
console.log(arr1)
arr=arr.concat(arr1,newarr)
console.log(arr)
arr.push([1,[2,[3]]])
console.log(arr)
arr=arr.flat(12)
console.log(arr)
let a=Array.of('lavanshu patidar')
console.log(a)
const aa=Array.from('ajhp38q749vna;skaouru')
console.log(aa)
console.log(aa.indexOf(';'))
console.log(aa.shift())
console.log(aa)










