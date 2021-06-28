/* This will be about if statements. These statements have conditions that must be true or false
before the code is executed. It's the logical part of the code that you write. See below for Basic
examples. This code was inspired by the following youtube video:
https://www.youtube.com/watch?v=vF4b1KFfA3A
Date: 8/24/2018 */

/* NOTE: example 1:
if (true) { // The first if condition(s) MUST be true before the code is executed.
  console.log("I am inside if statement");
  console.log("I am still inside if statement...");
}
*/

// example 2:
/*
if (false) { // NOTE: if the first condition(s) is false, then you must provide the else statement in which the statement is true.
  console.log("I am inside if statement");
  console.log("I am still inside if statement...");
} else { // The following code is implied as 'true' and thus the code is executed.
  console.log("I am now inside the ELSE statement...");
}
*/

// NOTE: example 2 is like saying "if the first condition is false then do this instead."

// example 3: This is a good example of checking multiple conditions. You can keep using else if statements as much as you want.

if (false) { // If the condition is false it will move on to the else if statement.
  console.log("I am inside the first if statement...");
}else if (false) { // NOTE: using the else if as the 2nd statement verifies if the other condition is true or not. You can change code to false to see this in action.
  console.log("I am inside the ELSE if statement...");
}else { // Finally if all statements above are false it will execute the following code instead:
 console.log("Since, both conditions are false, I am inside the else statement.");
}

// NOTE: example 3 is like saying "if the 1st and 2nd conditions are false, then do this action instead."

console.log("New line of code starts here");
console.log("------------------------------------------------");
// practice:

// conditions:
let x = 7;
let = 10;
let = 5;
let = 3;



if (x>=6&&x<=10) { // This means if the condition is in between 6 and 10.
  console.log("Amazing!");
}else if (x===4||5) { // This means if the condition is 4 or 5.
  console.log("Good, work!");
}else if (x===3) { // This means if the condition is the same as as 3.
  console.log("Keep, practicing!");
}else { // If all the conditions are false it will execute this line of code:
  console.log("Better luck next time!");
}

console.log("New line of code starts here:")
console.log("------------------------------------------------");

// conditions:
// NOTE: you can change them to false to see how the if statements behave.
let isVerified = false;
let isLoggedIn = true;
let hasPaymentToken = true;
let isGuest = true;

if (isVerified && isLoggedIn && hasPaymentToken) { // NOTE: ALL conditions must be true for the AND logic
  console.log("Greeting message to user");
  console.log("Grant access to paid course")
}else if (isVerified || isGuest) { // NOTE: Only ONE condition must be true for the OR logic
  console.log("Allow free previews");
}else {
  console.log("MESSAGE: please contact admin.");
}

console.log("New line of code starts here:")
console.log("------------------------------------------------");
