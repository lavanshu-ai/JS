let arr=[2,33,4]
let i=0
while(i<20){
    arr.push(i*3)
    i++
}
for(const val in arr){
    if(arr[val]>20){
        console.log(`value at ${val} is greater than 20 i.e ${arr[val]}`)

    }
}