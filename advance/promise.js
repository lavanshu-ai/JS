
const promiseOne=new Promise(function(resolve,reject){
        setInterval(function(){
            const user={
                userName:'lv',
                myid:'9845',
                No_:'29343'
            } 
        let error=true
        if(!error){
            resolve(user);
        }
        else reject();
        })
},1000)
promiseOne.then((user)=>{
  console.log(user)
  return user.userName
}).then((username)=>{
    console.log(username)
})
.catch((error)=>{
    console.log('Something went Wrong:', error);
})
.finally(()=>{
    console.log('Promise is setteled or rejected');
})
console.log('This will run first');
const promiseTwo=new Promise(function(resolve,reject){
        setInterval(function(){
            const user={
                userName:'Echo',
                myid:'985',
                Num:'243'
            } 
        let error=true
        if(error){
            resolve(user);
        }
        else reject();
        })
},2000)
promiseTwo.then((user)=>{
  console.log(user)
  return user.myid
}).then((userid)=>{
    console.log(userid)
})
.catch((error)=>{
    console.log('Something went Wrong:', error);
})
.finally(()=>{
    console.log('Promise is settled or rejected');})