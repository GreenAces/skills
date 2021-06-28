/* What are loops? What are 'for loops?' How to write for loops?
Learn Javascript Programming #4: For Loops (Looping Through Numbers, Arrays, Objects)
https://www.youtube.com/watch?v=BxFi7vVZx4s
Last watched: 18:39  */
// How to create a for loop:
/* NOTE: As long as i is less than or equal to 15
  1 will be added to the variable. This is an
  argument that must be true for the loop to excute */
/* Basic critera for the for loop:
    Initialzer or starting point
    Condition for when your loop should end
    Incrementor or decrementor || continus up or down*/
    // NOTE: The only thing that sucks about the for loop is that it only creates the loop once if the condition is true
    // if you wanted to created a loop that keeps on going, you will have to use a while loop. See javascript file (insert number here).




for (let i=0; i<=15; i++) {
  console.log(i);
}
// creating a line break to sepearate new code
console.log("====================================");
// Displaying negative numbers
for (let negNum=-10; negNum<0; negNum++) {
  console.log(negNum);
}
console.log("====================================");
// Practical use-case for a for loop
/* The for loop takes the value from num
and adds it to the total variable.
notice how the variable
is outside the for loop?*/

let total =0;
for (var num=1; num < 11; num++) {

  total = total + num;

}

console.log("The total is: " + total);

console.log("====================================");

// How to create a for loop with an array (static method):
/* The disadvantage of using the static method is having to change
 the for loop condition to reflect the changes that you make on the array list */

var fruits = ["mango", "banana","apple"];

for (var fruitNames=0; fruitNames<3; fruitNames++) {
  console.log(fruits[fruitNames]);
}

//How to create a for loop with an array (dynamic method):
/* When you use the dynamic method, you can simply add more data to the array
without changing the for loop condition. NOTE: pay attention to vegetables.length */
console.log("====================================");

 var vegatables = ["carrot", "broccoli","kale", "spinach", "a", "b", "c"];

for (var veggieNames=0; veggieNames< vegatables.length; veggieNames++ ) {
  console.log(vegatables[veggieNames]);
}

// How to create a for loop with objects and display their properties:
console.log("====================================");

var car = {

  brand:"Honda",
  model: "Civic",
  year: 2008,
  transmission: "Automatic"

}
// This will list only the properties for the object.
console.log("====================================");
for (let carProperties in car) {
  console.log(carProperties);
}
// This will list the properties and value for the object.
console.log("====================================");
for (let carProperties in car) {
  console.log(carProperties, car[carProperties]);
}

console.log("====================================");
console.log("New line of code starts here:");

console.log("====================================");

 var vegatables = ["carrot", "broccoli","kale", "spinach", "a", "b", "c"];

for (var veggieNames=0; veggieNames< vegatables.length; veggieNames++ ) {
  console.log(vegatables[veggieNames]);
}

/*NOTE: You have to keep using the for loop to display the contents in console. */
// How to add items to an array:

vegatables.push("Water"); // This will add water to the array list. This item is index 7 (note: index starts @ zero NOT 1)
console.log("====================================");
for (var veggieNames=0; veggieNames< vegatables.length; veggieNames++ ) {
  console.log(vegatables[veggieNames]);
}
// How to remove items from an array:
/* NOTE: array.splice(index, howmany, item1, ....., itemX)
  "howmany" is optional. The number of items to be removed. If set to 0, no items will be removed
   Splice can also be used to add items to an array. See example below*/

vegatables.splice(4,0, "new item"); // new item is now idex 4
console.log("====================================");
for (var veggieNames=0; veggieNames< vegatables.length; veggieNames++ ) {
  console.log(vegatables[veggieNames]);
}
console.log("====================================");

// removing a,b, and c from array:
vegatables.splice(5,3,); // NOTE: if you don't want to remove anything don't add any quotes...
console.log("====================================");
for (var veggieNames=0; veggieNames< vegatables.length; veggieNames++ ) {
  console.log(vegatables[veggieNames]);
}
console.log("====================================");
console.log("New line of code starts here");


var ammoCount = 15;

function isOdd() { // make the gun fire if the generated number is odd.
  let x = Math.floor((Math.random() * 10) + 1);
  return x;

  if (x === 1, 3, 5, 7, 9) {

    function fire() {

      let difference = (ammoCount-1);
      return difference;
      console.log("Current Ammo: " + (difference));

    } // end of fire method

  }// end of if statement

  else if (x === 2, 4, 6, 8, 10) { // Should not fire if x values are even
    console.log("Can't fire gun because x values are even");
  }

} // End of isOdd function

// NOTE: I'm having trouble with logic part of the code. I can't seem to find a way to make it output the console statments.

console.log(isOdd());

/*class gun {

    mechanism() {
      this.ammo = ammo;
      this.triggerPull = true;
      this.safety = false;
      this.reload = reload;

    } // end of mechanism method

} // end of gun class */
