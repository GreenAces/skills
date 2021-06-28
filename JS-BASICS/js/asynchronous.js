/* This code was inspired by the following youtube video
https://www.youtube.com/watch?v=_IGIQ10yX1o
Date: 10/24/2018 */
"use strict"; // this prevents poor javascript coding. very useful if you're coding on the fly ;)

// NOTE: Problem with code #1 is you have to click the alert before JavaScript can execute the next line of code.

// code #1

let test = function () {
console.log('Start of code');
alert('Notice Me!');
console.log('End of code');
};

let test2 = function () {
console.log('Now I get attention.');
};

// test();
// test2();


// NOTE: With code #2 we set a callback function so that it can re-run the code in the given amount of time (seconds).
// code# 2

let test3 = function () {

  setTimeout(function() { // This is an anonymous callback function
    console.log('Start of code');
    alert('Notice Me!');
    console.log('End of code');
  }, 5000);

};

let test4 = function () {
console.log('Now I get attention.');
};

test3();
test4();

/* CONCLUSION: Asynchronous javascript allows many different functions to execute at the same time without having to wait
for the other function to finish. */
