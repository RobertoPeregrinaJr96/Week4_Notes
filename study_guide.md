- Difference between static and instance methods (when to use and what they are called on)
     -   **static methods:**
        - static methods : a method that belongs to and invoked in the class ,also called class methods

     -   **instance methods:**  
        - instance methods : a method that belongs to instances of a class,not the class itself

- Types of Errors you may see in JavaScript code and what would cause them to be thrown
     -   **TypeError:**
         -   Operation that is attached the operand is of the wrong
         type.

         -   Re-assign a const variable;

         -   When trying to invoke a method that doesn't exist an object

     -   **ReferenceError:**
         -   Calling variables or methods that have not been declared or are misspelled _(attempting to reference something that has not been defined)._

          -   i.e typo in variable name or invoking a function that has not been declared.

     -   **SyntaxError:**
          -   Occur during parsing time (when code is broken into meaningful chunks (tokens). First thing that happens when code is run, occurs before compilation time).

           -   i.e.: misspell a keyword, or have an extra/missing token. (think '}')

- How to make a child class and how it differs in syntax from its parent
```js
class Parent {
	constructor() {}
}

class Child extends Parent {
	constructor() {
		super();
	}
}
```

- Explain polymorphism, encapsulation, and inheritance and how they contribute to OOP
 -   **Encapsulation:**
    -   grouping data and functions together behind an API that hides implementation details from the user.
        > "It works, but you don't have to worry about why it works" - Dorkus.
    -   Encapsulation is what leads some behavior/data to be **public** and some **private**

-   **Inheritance:**
    -   A child class can use any properties and methods of a parent class, but not the reverse.
    -   Javascript uses **implementation inheritance**, which means that the properties and methods defined on the parent class are available on objects created from classes that inherit from those parent classes.
    -   Javascript **_DOES NOT_** support **multiple inheritance** (where classes can have more then one parent).

-   **Polymorphism:**
    -   The child class can manipulate what it inherits from the parent class.
    -   **Overriding** is when a child class has a different implementation of an inherited method with an equivalent result.
        > 'Same result with a different how'
    -   **Overloading** (not supported in JS) is passing a different number or type of parameters to a particular method when it is inherited from the parent class.


- Explain both DRY coding and coding that meets the principle of SRP
-   **Dry Coding:**

    > "Don't Repeat Yourself"

    -   If logic is being done multiple times, maybe it should be a helper function.
    -   When applied successfully a modification of any single element of a system does not require a change in other logically unrelated elements, and any logically related elements all change in a predictable and uniform manner.

-   **SRP- Single Responsibility Principle:**

    -   a class or function/method should do one thing, and do it well.


- Be able to explain what makes arrow functions special and where they may cause problems

-   **Arrow functions :)**

    -   Arrow functions' 'this' is lexically bound. Meaning, it inherits it's scope/context from whatever code contains it, not calls it.
        -   Lexical Scoping defines how variable names are resolved in nested functions: inner functions contain the scope of parent functions even if the parent function has returned.
    -   Arrow functions can omit the _return_ keyword and {} if they consist of a single expression (implicit return).
    -   Arrow functions can also omit the parameter () if there is only a single parameter. _If there are no parameters the () must be included._
    -   Arrow functions are generally anonymous.


- Explain context and identify the keyword that represents an object's context
-   **Context**
    -   context refers to the value of the this keyword when code is executed.


- Be able to identify key ideas of OOP
-   **OOP**
    -   Eliminate unnecessary repetition with inheritance, and design classes with intuitive classes (blueprints)
    - Be able to look at a block of test code and describe the best description of the function it tests

- Explain the benefits of TDD
-   **TDD benefits**
    -   Creating test specs that describe the functionality of code to be written and then writing code to meet those tests.
    -   It allows you to write only that is needed.
    -

- Be able to identify when bind, call or apply may correct an error in code
-   Both `call()` and `apply()` allow a function/method belonging to one object to be assigned and called for a different object because they provide a new value of 'this' to the function/method.

-   `apply()`: Argument being passed must be a single [array] or array-like object (meaning it has a length property and integer index that starts at 0 but does not share all the array methods.

    -   It also allows an array-literal or an Array object to be passed as an argument.

    -   it can also be used to append arrays together. In other words it can 'spread' the elements of one array into another in place

    ```js
    // syntax to append two arrays in place
    const array = ['a', 'b'];
    const ele = [0, 1, 2];
    array.push.apply(array, ele); // ['a', 'b', 0, 1, 2]

    // general apply() syntax
    const appliedFunc = this.function.apply(context, ...array);
    ```

    -   `call()`: Arguments/parameters being passed must consist of a comma separated list.

    ```js
    //general call() syntax
    const calledfunc = this.function.call(context, comma, separated, args) (Invoked once immediately)
    ```

    -   `bind()`: every time boundFunc is called, it is bound with the context or 'this' it is given.

    ```js
    // general bind() syntax
    const boundFunc = this.function.bind(context, ...args);
    ```
//------------------- for coding problems --------------------------------

- Reading specs and writing code based on the test code

- Writing parent and child classes, including their constructors and setting up instance variables, both ones that are immediately/default set upon instantiation and those created by passing in variables in the constructor.
```js
class Parent {
    constructor(name, age, food) {
        this.name = name;
        this.age = age;
        this.food = food;
    }
}

class Child extends Parent {
    constructor(name, age, food) {
        super(name, age, food);
    }
}
```
- Importing and exporting modules using module.exports (HINT!!: pay attention to how files are pulled into the spec file to tell you how to export them)
```js
module.exports = Child;
const Child = require('relativePath');

module.exports = {
    Child,
};
const { Child } = require('relativePath');

module.exports = [Child];
const [Child] = require('relativePath');

```
- Writing instance methods that access properties of instances of a class within another class
```js
// parent class
class Customer {
    // what arguments the class accepts
    constructor(name, phoneNumber, cart = []) {
        //the arguments are set to this context
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.cart = cart;
    }
}
// A child class that can inheret its parents properties
class Member extends Customer {
    constructor(name, phoneNumber, cart = []) {
        // by using the *super* keyword it inheret's its parents (name,phoneNumber,cart) properties
        super(name, phoneNumber, cart);
    }
}

class Item {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Transactions {
    constructor(cust, sale = true, refund = false, items = []) {
        this.cust = cust;
        this.sale = sale;
        this.refund = refund;
        this.discount = 0;
        this.items = items;
    }
// an instance method that belongs to the class
    makeSale(cust) {
        if (cust instanceof Member) {
            this.discount = 5;
        }
        let total = 0;

        this.items.forEach((item) => {
            total += item.cost;
        });

        return total - this.discount;
    }
}
// make a new Item class named apple
let apple = new Item('apple', 3);
// make a new Item class named petfood
let petfood = new Item('petfood', 5);
// make a new Item class named booze
let booze = new Item('booze', 2);

// make a new Customer class cust 
let cust = new Customer('idiot mcdumdum', 4443333, [apple, petfood, booze]);
// make a new transaction class 
let transaction = new Transactions(cust, true, false, cust.cart);

let member = new Member('Soggy McMoist', 5559876, [apple, petfood, booze]);
let memberTransaction = new Transactions(member, true, false, member.cart);

// initalize the saleFunc by assigning it the function makeSale that is the method of the transaction class
let saleFunc = transaction.makeSale;
// after the function is italized we have to .bind the context to the transaction class to be used outside the class
let boundSaleFunc = saleFunc.bind(transaction);
// we can now invoke the function outside the class
boundSaleFunc(); //stores return value of makeSale function into a variable so we can call the variable instead of keep having to call the instance object function
console.log(boundSaleFunc());
```
Above, we instantiate a new Transaction. In the parameters, we pass an instance of Customer class named 'cust'.
Because we've passed this instance into the Transaction class our this.cust is now equal to the instance of Customer we created.
This allows us to access all of the properties and methods of this instantiated class, including their cart array. With this information,
we're able to iterate through this particular instance of Customer's cart to tally a total cost.

! ALSO..... STUDY THIS PROGRAM!!!! VERY IMPORTANT!!!!!! This will be close to what the coding section is like.
- Using instanceOf to see if something is a child of a parent class

Inside of an if conditional, we are checking to see if the current instance of Customer is also an instance of Member. instanceof returns a boolean.
If the current customer, is also a member, they are rewarded with a discount on their total cost.

- Throwing errors if a condition is not met
```js
class LOLError extends Error {
    constructor(...params) {
        super(...params);
        this.name = 'LOLError';
        //optional: this will show you the stack trace (or AKA all of the info of where the error occured)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, LOLError);
        }
    }
}

if (true) {
    throw new LOLError('LOLOL haha..... loser.');
}
```