- [ ] 11 01:13:12 | Deep Dive: Constructor Functions & Prototypes  
	- [ ] 265 01 Module Introduction | 01:34
	  - The "class" feature/keyword is relatively new
	  - How we did classes in the past
	  - What happens behind the scenes of classes and objects?
	  - Constructor functions (without classes)
	  - Prototypes and Prototypical Inheritance
	- [ ] 266 02 Introducing Constructor Functions | 04:02  
	  - Constructor Functions (instead of classes)
	  - Blueprint for Objects
	  - Properties and Methods
	  - Can be created with the "new" keyword

	  ```javascript
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
	  ```

	- [ ] 267 03 Constructor Functions vs Classes & Understanding "new" | 04:17  
	- [ ] 268 04 Introducing Prototypes | 16:46
	  - "extends"
	- [ ] 269 05 Prototypes - Summary | 00:59
	- [ ] 270 06 Working with Prototypes | 05:19
	  - super() creates the Base Class first, then make the extending Object a prototype
	- [ ] 271 07 The Prototype Chain and the Global "Object" | 08:26
	  - I can access various properties in the prototype hierarchy
	  - The prototype chain does not end with my default prototype
	  - The fallback object of ALL OBJECTS is Object.prototype, NOT Object.
	    - This is where the prototype chain ends.
	- [ ] 272 08 Classes & Prototypes | 05:24
	- [ ] 273 09 Methods in Classes & In Constructors | 10:16
	
	  ```javascript
	  class AgedPerson {
	    printAge() {
	      console.log(this.age);
	    }
	  }
	  
	  class Person extends AgedPerson {
	    name = 'Max';
	    
	    constructor() {
	      super();
	      this.age = 30;
	      // this.name = 'Max' // is equivalent to the name property. However, METHODS are different
	    }
	    
	    // Here, one function is shared across all instances.
	    greet() {
	      console.log('Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.');
	    }
	  }
	  ```
	  The method is part of the prototype.
	  
	  ```javascript
	    Person.prototype.greet() = function() {
	      console.log('Hi, I am ' + this.name + ' and I am ' + this.age + ' years old.');
	    }
	  ```
	  
	- [ ] 274 10 Built-in Prototypes in JavaScript | 02:12
	- [ ] 275 11 Setting & Getting Prototypes | 10:58
	  - Changing the prototype of an existing object
	  - getPrototypeOf()
	  - setPrototypeOf()
	  - Object.create() // Parameter is set as a prototype
	- [ ] 276 12 Wrap Up | 02:49
	- [ ] 277 13 Useful Resources & Links | 00:09
