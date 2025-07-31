class user{
    #name;
    #age;
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }
    
    get name() {
        return this.#name;
    }
    
    set name(newName) {
        this.#name = newName;
    }
    
    get age() {
        return this.#age;
    }
    
    set age(age) {
        if (age > 0) {
        this.#age = age;
        } else {
        console.log("Please enter a valid age.");
        }
    }
}
 const user1=new user('lv',21);
console.log(user1); // Output: lv
user1.name = 'lv2';
console.log(user1.name); // Output: lv2
user1.age = 25;
console.log(user1.age); // Output: 25