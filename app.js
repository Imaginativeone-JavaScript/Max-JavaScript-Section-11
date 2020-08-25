// class Person {
//     name = 'Max';

//     constructor() {
//         this.age = 30;
//     }

//     greet() {
//         console.log('Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.');
//     }
// }

// Constructor Function
function Person() {

    // this = {} // Effectively happening with "new", behind the scenes

    this.age = 30;
    this.name = "Max";
    this.greet = function() {
        console.log('Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.');
    };

    // return this; // Effectively happening with "new", behind the scenes
}

const person = new Person(); // No "return" is necessary, "new" handles that.

person.greet();
