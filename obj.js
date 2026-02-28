/*
in this section i have practiced with objects in JavaScript.
i have learned
1. how to create an object using object literal syntax
2. how to access and modify object properties
3. how to use computed property names
4. how to use symbols as object keys
5. how to destructure objects
6. how to combine objects using Object.assign() and spread operator
7. how to extract keys and values from an object using Object.keys() and Object.values() methods
8. how to check if a property exists in an object using hasOwnProperty() method





*/
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
// console.log(name);
 // defining another object 

const objuser2 = {


};
 objuser2.fullname = "Jane";
 objuser2.age = 25;
 objuser2.city = "Los Angeles";
//  console.log(objuser2);
 

 // combining two objects using Object.assign() method
 const combinedObj = Object.assign({}, objuser, objuser2);
 console.log(combinedObj);

//  using spread operator 
const combinedObj2 = {...objuser,...objuser2};
// console.log(combinedObj2);



//extracting keys and values from an object using Object.keys() and Object.values() methods
const keys = Object.keys(objuser);
const values = Object.values(objuser);
console.log(keys);
console.log(values);

// checking if a property exists in an object using hasOwnProperty() method
// console.log(objuser.hasOwnProperty("fullname")); // true
// console.log(objuser.hasOwnProperty("email")); // false