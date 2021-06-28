/* This tutorial explains how to call a function from another function
   This code was inspired by the following youtube vide:
   https://www.youtube.com/watch?v=95mIis5M-gU&index=10&list=WL&t=0s
   Date: 8/22/2018*/

/*

function doFirst() {
  console.log("This action is being done first");
}

function doSecond(){
  console.log("This action is being done after");
}
function start(){
  doFirst();
  doSecond();
}


start();

*/

console.log("new line of code starts here");
console.log("-------------------------------");

/* NOTE: This is how you take data from one function and pass it to another function so that you can perform other task on it.
         The most important concept to remember is using 'let' for all the variables that will be used for all functions because
         They all technically share the same variables.*/

(function stepByStep(){

  let num1, num2, total, product, answer, answer2; // Not global, but available to local functions below:


  function gather(){ // This function doesn't return each value; instead it adds them (i don't want that)
    num1 = 1; num2 = 2;
    return ((num1), (num2));

 }


  function add(){
   total = num1 + num2;
   return total;
  }

  function multiply(){
    if(total >= num1) {
      product = 3;
      answer =  product * total;
      return answer;
    } else if (total= 0 || total <1) {
      product = -3;
      answer2 = product * total;
      return answer2;

    }
  }

  gather();
  add();
  multiply();

//checking work:
console.log(gather());
console.log(add());
console.log(multiply());


})();
