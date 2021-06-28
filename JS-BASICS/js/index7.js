/* Javascript Closure tutorial ( Closures Explained )
   https://www.youtube.com/watch?v=71AtaJpJHw0
   Closures are data that is preserved from a different function.
   "whenever you declare a function inside another function,
   the inside function(s) is/are recreated again each time the outside function is called"

  "Closures are functions that refer to independent (free) variables.
   In other words, the function defined in the closure 'remembers' the environment in which it was created."
   Date: 8/13/2018 */

/*NOTE: Closures is a composition of functions or f(g(x)) whereas
        first you start with the inner function g(x) and finish with f(x)
        but with JavaScript, you can't call an inner function because it is
        out of scope. They only way you can access it is by calling the outter function. */

let addTo = function(outter) {
  let add = function(inner) {
    return outter + inner;
  };
    return add;
};

// How to view the properties of an object:
// This actually allows you to see the directory of the object.
console.dir(addTo);

// Creating a new object from an older object:
/*NOTE: This also creates a new variable */

let addThree = new addTo(3);
let addFour =  new addTo(4);

console.log("=================================");
console.log("New line of code is written here:");
