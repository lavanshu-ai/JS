const User=function(userName, userAge, userEmail) {
    this.userName = userName;
    this.userAge = userAge;
    this.userEmail = userEmail;
    User.prototype.greetings=   function() {
        console.log(`Hello ${this.userName}`);
    }
}
const Userone=new User('onelv', 20,"xyz@gmail.com" )
const Usertwo=new User('twolv', 21,"xxy@gmail.com")
console.log(Userone);
console.log(Usertwo);
console.log(Userone.greetings());
console.log(Usertwo.greetings());