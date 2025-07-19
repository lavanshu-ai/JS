let arr=[2,3,98,223,456,43,433,54,415,425,6,2,5,334]
console.log(arr)
const arrSum=arr.reduce(function(acc,curr){
return acc+curr
},0)
console.log(arrSum)