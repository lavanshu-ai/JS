function timelimit(fn, ms) {
    return new Promise((resolve) => {
      setTimeout(() => {
       resolve();
      },2000 );
      
})
.then(()=>{
    console.log('1st time out after 2s') 
})
.then(()=>{
     setTimeout(()=>{
       console.log('second timeout after 2 seconds from start');
       },4000)
})
} timelimit();
 