// Best practice is to use let instead of var to create variables
//let firstName ='Kevin';
//let lastName ='Dorjeta';
//let number ="1";
//console.log(firstName+" "+lastName);
//console.log(number);
//const interestRate = 0.3;
//interestRate =1;
//console.log(interestRate);
//let name = 'Mosh';          // example of declearing a string
//let age ='30';             // example of declearing a variable that can change
//let isApproved = false;   // example of boolean
//let LastName = undefined; // example of primatives when creating strings
//let selectedColor = null; // exaple of primatives when creating objects
// HOW TO CREATE OBJECTS:
//let car = {
  //brand: 'honda',
//  color: 'blue',
  //firstGear: 60,
  //secondGear: 120,
  //thirdGear: 180,
  //maxGear: 240,
//}; //
//console.log(car);
// create new objects from previous ones
//car.brand = 'ford';
//console.log(car.brand); // the ford object has the same properties as the honda object!
// HOW TO CREATE ARRAYS:
//let selectedColors = ['blue', 'brown', 'black', 'yellow', 'white', 'red', 'purple'];
//console.log(selectedColors[2]); //specify the index of the array
//selectedColors[8]='tan'; //add more items to an array
//console.log(selectedColors[8]);
//HOW TO CREATE FUNCTIONS OR METHODS
function greet () {       // this function has no parameters inside parenthesis
console.log ('Hello world!');
}
greet (); // delare the function
// FUNCTION WITH PARAMETERS:
function compare (insertNumber) {

 let y = -1;

 if (insertNumber+y>=1) {

   console.log('X plus Y are greater than or equal to 1 because '+ insertNumber + " is a postive number.")
 }  else (insertNumber+y<1); {
     console.log ("X plus Y are NOT greater than or equal to 1 because " + insertNumber + " is a negative number.");
}
 }

// declearing the function with the argument inside parenthesis
compare(5);

// Calculating a value with a FUNCTION

function square (number) {
  return number * number;
}

let number = square(16n);
console.log(number);
