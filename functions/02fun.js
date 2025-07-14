function handleObject(obj){
    console.log (` username is ${obj.name} and has ${obj.owns}`)
}
handleObject({
    name : "lv",
    owns :"nothing"
})

const myarry=[12,22,33,44,22,134,32422,33]

function returnfifthvalue(anyarr){
    return anyarr[4]
}

console.log(returnfifthvalue(myarry))