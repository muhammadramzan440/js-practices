const user1 = {
    user1_name: 'John',
    user1_age: 30,
    user1_city: 'New York'
};

const user2 = {
    user2_name: 'Jane',
    user2_age: 25,
    user2_city: 'Los Angeles'

}; 
// Object.freeze(user1);
user1.user1_name = ' M Ramzan Abid';
user2.user2_name = ' Hitesh Choudhary';
// Combine the two user objects into a single object
const combinedUser = { ...user1, ...user2 };
// console.log(combinedUser);

// Add a method to the combined object that returns a greeting message using the user's name and age
combinedUser.greeting= function() {
    console.log(`Hello, my name is ${this.user1_name} and I am working with ${this.user2_name} on this project. I am ${this.user1_age} years old and ${this.user2_age} years old.`);
}
user1.user1_name = ' M Ramzan Abid';
user2.user2_name = ' Hitesh Choudhary';

// console.log(combinedUser.greeting());

combinedUser.message = function(){
    console.log(`This message is to learn the functuonality of thsi operator in javascript ${this.user1_name}`);
}
console.log;(combinedUser.message());
const {user1_name:u1name}= user1;
const {user2_name:u2name}= user2;
console.log(u1name);
console.log(u2name);    
const keys = Object.keys(combinedUser);