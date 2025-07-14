function  addnum(num1,num2){
    return (num1+num2)
}
let result = addnum(23,33)
console.log("Result :",result )

function UserLoggedinMessage(username){
    if(!username){
        return ('Please enter a username')
    }
    return `${username} are logged in`
}
//console.log(UserLoggedinMessage());
console.log(UserLoggedinMessage("you"));
