const fs= require('fs');
fs.readFile('file_system/info.txt', 'utf-8', (err, data) => {
    console.log(data)
    if (err) {
        console.error('Error reading file:', err);
    }
})