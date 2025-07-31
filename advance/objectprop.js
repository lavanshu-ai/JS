 const headphones = {
    company: 'jbl',
    model: 't450bt',
    color: 'black',
    price: 6150.0,
    count:4,
    inStock: function (count)   {
        return count > 0 ? 'In Stock' : 'Out of Stock';
    }

 }
 Object.getOwnPropertyDescriptor(headphones, 'count');
 Object.defineProperty(headphones, 'count', {
    writable: false,
    enumerable: false,
    configurable: false
 });  
 headphones.count = 5; // Update count propert
 for (let key in headphones) {
    if(typeof headphones[key] != 'function') {
    console.log(`${key}: ${headphones[key]}`); } 
 }
    console.log(headphones.inStock(headphones.count)); // In Stock