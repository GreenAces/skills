// How to create getters and setters with hidden properties:
/* NOTE: a hidden property has a underscore before the name.
 Update: doesn't seem like it makes it hidden tho... maybe it's just me?

  Anyway this code was inspired by the following video:
  https://www.youtube.com/watch?v=IbqCWoFO410
  Date: 8/14/2018 */

let storage = {
  // Every single property inside an object requires a comma.
  _socialSecurity: "123-45-6789",
  _governmentName: "Nick Garden",
  _dateOfBirth: 1966,

    get age() {
    const years = new Date().getFullYear() - this._dateOfBirth;
    return years;

  },

  /* NOTE: Every method inside an object requires a comma. And also every method
     must be of the same style or structure otherwise, you will get a syntax error
     example: if you used let age = function {} it would result in a syntax error
     because it's not the same style as the other functions. */

  get info() {
    return `Name: ${this._governmentName} Age:${storage.age} SSN: ${this._socialSecurity}`;
  },

  set info(_change) {
    this._socialSecurity = _change;

  },


};


// This is how you view the properties for an object:

//var keys = Object.keys(storage);
//console.log(storage);

// This is how you read or get information from a property using the get method:
/*NOTE: if you enter storage.info() it would result in an error "this is not a function" */
console.log(storage.info);

// This is how you change the property with the set info method:
console.log("SSN was changed to the following: " + (storage.info="128-48-7295"));



// Creating an object with a different style structure:
/* NOTE:
 Creating an object in this manner doesn't allow you to create another object
 from it. To do this you will need a contructor. See next line of code for example. */

console.log("-------------------------------------------");
console.log("New line of code starts here: ");
// going to create a function with data and then take that data and transfer it to another function.


console.log("-------------------------------------------");
console.log("New line of code starts here: ");

/* How to create a constructor with methods inside
 NOTE: a constructor is a special type of subroutine called to create an object.
 It prepares the new object for use, often accepting arguments that the
 constructor uses to set required member variables*/

function printMoney(value) {
// It's best to create an empty constructor with no properties.
  return {
    value,
    create: function() {
      console.log('Printing ' + value + " bills...");
    }
  };
}

// Creating new object from older object:

const usd = new printMoney(5);
usd.create();

const yin = new printMoney(10);
yin.create();

// View the directories of the object:
console.dir(usd);

// How to add properties in a new object
   usd.maxSupply = false;
   yin.isValuable = undefined;
console.log(usd); // This object has a max supply property.
console.log(yin); // This object has property isValuable.
console.log(printMoney(4)); // This parent object does not have a property.
