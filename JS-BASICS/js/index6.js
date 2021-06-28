/* This tutorial will focus on the return key statement
   Beginner JavaScript Tutorial - 9 - The return Statement
   https://www.youtube.com/watch?v=AdQcd3sKGC8&index=5&list=WL&t=16s
   Date: 08/12/2018*/

/* The return key saves data from a function so that you
use it later.  See example below */

function addNumbers(a,b) {

  var c = a+b;
  return c;

}

console.log("The sum of a and b is " + addNumbers(6,4) + ".");

/*NOTE: how c does not need to be declared.
However when you request the function, it
gives you the value of c.
This is how the return key works. */

/* How getters and setters work? We use getters
   to access properties. We use setters to change
   properties. */
// First create object:
const person = {

  firstname: 'Jack',
  lastName: 'Daniels',

// Then create a getter:

    get fullName() {
    return `${person.firstName} ${person.lastName}`;
  }, /* <===== NOTE: we use a comma to sepate more than 1 method
         inside another function */

// Then create a setter:
    set fullName(value) {

      const parts = value.split('');
      this.firstName = parts[0];
      this.lastname = parts[1];

  }
};

// We can create a new instance of the object with the following:
//person.fullName = 'Black Mouse';
console.log(person);

//Another object:
const personAge = {

  age: 26

}
// Here a new instance of the object is created again with another object:
console.log (person.fullName='Samantha Armstrong' + " is " + personAge.age + ".");
console.log('========================================'); // line break
console.log("Reusing values from other functions starts here:");



// another function:
