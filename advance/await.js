
const lastpromise=new Promise(function(resolve,reject){
        setInterval(function(){
            const user={
                userName:'Echo',
            } 
        let error=false
        if(!error){
            resolve(user);
        }
        else reject();
        })
},1000)
 async function consumelastPromise() {
    try {
        const response = await lastpromise;
        console.log(response);
     }
        catch (error) {
            console.log('JS wet wrong:', error);
        }   
    }
    consumelastPromise();