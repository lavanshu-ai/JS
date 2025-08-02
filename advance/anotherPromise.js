function getInfo(){
    console.log('Fetching info...');//1
    return new Promise((resolve) => {
    console.log('inside promise ...'); //2
    // Simulating an asynchronous operation
        const fs = require('fs');

        fs.readFile('file_system/info.txt', 'utf-8', (err, data) => {
            console.log('file read');
                resolve(data);
        });
})
    }
  function  printdata(data){
    console.log(data);
    }
let a=getInfo()
console.log(a);
a.then(printdata)
console.log('# check mark');