/* NOTE: This code is inspired by the following youtube video:
https://www.youtube.com/watch?v=Ua2WsiycWr4
Following this video will allow you to create a text field on a web page.
Date 9/13/2018*/


// basic example taken from www.w3schools.com



function addNumbers() {

    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    document.getElementById("displayAnswer").innerHTML = ("The answer is " +(parseInt(a) + parseInt(b)) + "."); // ParseInt converts string into interger

  }

function getName() {
  let userInput = document.getElementById("userName").value;
  document.getElementById("displayName").innerHTML = ("You entered  "+ userInput + " as your name.");

}

// This method should be able to reset the input fields


function clear() {
    document.getElementById("form_1").reset();

}
