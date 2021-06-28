/* Creating objects is very simple. The dots or periods are used to access either an attribute or call a method (function) of an object.
 NOTE: for the lastest information on how to create objects, please watch:
   https://www.youtube.com/watch?v=T-HGdc8L-7w&t=0s&index=3&list=PLgsmjN6pq2dS6OxZv06mH7lMaodSEIpKr
   See line 88 for new example of creating objects and classes.*/

   // Old way of creating classes:
   // Problem with this method is that you can't create new objects from that class.
   // Var is global variable so it's best to use the 'let' keyword to limit the variable range.

   var obj = {

     property1: "skillA",
     property2: "skillB",
     property3: "skillC",
   };



var peopleFactory = function(name, age, state){
//The dots or periods are used to access either an attribute or call a method
  var temp = {};

  temp.age = age;
  temp.name = name;
  temp.state = state;

  temp.printPerson = function(){

    console.log(this.name + ", " + this.age + ", " + this.state);

  };

  return temp;

};

var person1 = peopleFactory('Tony', 32, 'WA');
var person2 = peopleFactory('Susan', 21, "NY");

person1.printPerson();
person2.printPerson();

/*What does the return keyword do in JavaScript? value will not be printed but stored in a variable result so you can later reuse it..

so the main difference lies in storing the value in a variable*/

// code without the return keyword
var sum = function(number1, number2) {
    console.log(number1 + number2);
};

result = sum(1,3);

// code with the return keyword

var sum = function(number1, number2) {
    return (number1 + number2);
};

result = sum(1,3);

// Creating objects using the constructor pattern

var peopleConstructor = function(name, age, state) {

  this.name = name;
  this.age = age;
  this.state = state;

  this.printMorePeople = function() {
    console.log(this.name + ", " + this.age + ", " + this.state);
  };

  return this;
};
var  person3 = new peopleConstructor('Jason', 23, 'FL');
var person4 = new peopleConstructor('John', 45, 'CA');

person3.printMorePeople();
person4.printMorePeople();

console.log("New line of code begins here:");
console.log("------------------------------------------------------");

// ES6 version of creating class with contructors inside the objects: (date 8/15/2018)
/* NOTE: 'constructor' is not a keyword -- you can name the method anything you want! */

/* What is a class? It is a template or blue print of an object.
   In other words, it's just an idea, however when you create a object from
   a constructor, you will have the physical object created and it will inherit
   all the properties from that class NOTE: the keyword 'class' */

class bubble {

  constructor() {

    this.y = 200;
    this.x = 150;

  }
};


console.dir(bubble);

// creating a new object from the class (bubble):

let bubble2 = new bubble();

console.dir(bubble2);

// adding a property to the new object (bubble2):

bubble2.z=40;

// bubble2 inherits x and y values from the bubble class but now has a z value.
console.dir(bubble2);

console.log("New line of code begins here:");
console.log("------------------------------------------------------");


class ball {



  // get method used to access properties about the class/object

  constructor(diameter) { // constructor name should be about the objects behavor or algorithem.

    this.radius = diameter / 2;
    this.diameter = diameter; // default values for undeclared values or strings should be kept as 'undefined'. For objects use 'null' instead.
    this.pie = 3.14;


      // function1of2:
      function theDiameter(diameter) {

        let circumferenceTwo = pie*diameter;
        return circumferenceTwo;

      // function2of2
        function theRadius(radius) {

            let circumferenceOne = 2*pie*radius;
            return circumferenceOne;
      

  } // end of theRadius function

} // end of theDiameter function

} // end of ballInfo function

}; // end of class

console.dir(ball);

// creating a new object from the class (ball) with 6 being the parameter because of the constructor created earlier:
let basketBall = new ball(6);

console.dir(basketBall);


// adding a properties to the new object (basketBall):
basketBall.name ="Basket Ball";
basketBall.color ="Orange";

// basketball inherits circumference and radius values from the ball class
// but now has name and color as new values.

console.dir(basketBall);


console.log("New line of code begins here:");
console.log("------------------------------------------------------");
/*NOTE: see index10.js for solution before making modifications here. */
