
// creating the object using a factory function (an object wtih 1 or more methods inside) (Method 1)
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log('draw');
    }
  };
}
// creating an object from old object (Method1)
const circle = createCircle(1);
circle.draw();

const circle2 = createCircle(2);
circle.draw();

//calling an object with the constructor function (Method 2)
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}
const another = new Circle(1);
// Understanding primatives and references types
// Primatives = Number, String, Boolean, Symbol, undefined, null
// Objects = Object, Function, Array
// Primatives are copied by their value.
// Objects are copied by their reference.
// EXAMPLE of dependent code
 let number = 10;

 function increase(number) {
   number++;
 }

increase(number);
console.log(number);

// EXAMPLE of independent code
  let obj = {value:10};
  function increase(obj) {
    obj.value++;
  }

  increase(obj);
  console.log(obj);

// Changing the properties of an object (method 1)

  circle.location = {x:1};

  // Changing the properties of an object (method 2)
  //Useful when properties have spaces in their names or hypens eg: eye balls or eye-balls
  circle['location'] = {x:1};

  // How to delete properties for an object using method 2 (Method 2 is the only way to perform this action)
     delete circle['location'];

     // How to display properties for an object without having to type the name of the object in chrome (Method1)
     // This code displays the code for the methods inside an object.
     for (let key in circle) {
       if (typeof circle[key] !== 'funtion')
       console.log (key, circle[key]);
     }
     //This code will display all the properties for an object and puts it in an array format structure.
     const keys = Object.keys(circle);
     console.log(keys);
     //This code will display a property for an object if the the condition is true.
     if ('radius' in circle)
     console.log("Circle has a radius.");

     // abstraction is when you hide details and leave only the important properties for the user to interact with.
     // Best to hide details and show the essentials.
     // Example of complex code (wrong way):
     function Circle(radius) {
       this.radius = radius;
       this.defaultlocation = {x: 0, y: 0};
       this.computeOptimumLocation = function (factor) {
     }

        // Example of simplified code (correct way)
       this.draw = function () {
         this.computeOptimumLocation(0.1);
         console.log('draw');
       };
     }
      const circle8 = new Circle(10);

      circle.draw();
// properties within the Circle function exist in memory.
// but if you created a variables in the draw function it would be limited within its scope.

function Circle(radius) {
  this.radius = radius;
  let defaultlocation = {x: 0, y: 0};
  let computeOptimumLocation = function (factor) {
}


  this.draw = function () {
    computeOptimumLocation(0.1);
    // let x = 1
    // let y = 1
    // You can access other properies here
    // such as defaultlocation
    // or this.radius
  };
}
 const circle9 = new Circle(10);

 circle.draw();

// Use getters and setters to access private properties for an object
// We do this by creating a method within the function method.
function Circle(radius) {
  this.radius = radius;
  let defaultLocation = {x: 0, y: 0};
  // This part is the setter
  this.getDefaultLocation = function() {
    return defaultLocation;
}
};
    const circle10 = new Circle(10);
    // This part is the getter
    circle10.getDefaultLocation();
    circle.draw();
// How to use error messages in console:
// We do this by creating a setters
// Something is wrong with the tags of this code. fix later.
/* Object.defineProperty(this, 'defaultLocation', {

  get: function () {
    return defaultLocation;
  },
  set: function(value) {
    if (!value.x || !value.y)
      throw new Error ('Invalid Location');
    defaultLocation = value;
  }
)};
*/




// error with above code -- maybe something with closing tags?
