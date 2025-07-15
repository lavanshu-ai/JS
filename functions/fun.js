function checking (){
    let username="batman"
    console.log(this.username) 
}
checking()

//this not work inn function
let tika=function(){
     let username="batman"
    console.log(this.username) 
}
tika()