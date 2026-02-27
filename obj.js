
const mysymbol = Symbol("mySymbol");


const objuser = {
    fullname: "John",
    age: 30,
    city: "New York",
    [mysymbol]: "This is a symbol property"
};

// console.log(objuser);
// console.log(objuser); // Accessing the symbol property

// destructuring of objects 
const {fullname:name}= objuser;
console.log(name);
