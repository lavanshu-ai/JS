let arr=[34,34,342,26,99,98,76,88966,67.6,86,78,64,999]
arr.forEach((Val,idx,a)=>{
    console.log(idx,a[idx],Val);
})
arr.forEach(function(Val,idx,a){
    console.log(`at ${idx} index in [${a}] the value is ${Val}`);
})
const narr=arr.filter(function(num){
    return num>90
})
console.log(narr)