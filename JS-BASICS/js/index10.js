class Ball {
  constructor(diameter) {
    this.radius = diameter / 2;
    this.diameter = diameter;
    this.pie = 3.14;
  }

  theDiameter(diameter) {
     let circumferenceTwo = this.pie * this.diameter;
     return circumferenceTwo;
  }

  theRadius(radius) {
     let circumferenceOne = 2 * this.pie * this.radius;
     return circumferenceOne;

     function circumferenceRange() {

     if (this.diameter >= 1 && <= 10) {

       // UPDATE 8/24/18 -- I think you need to compare the condition to a number to remove error. consider using typeof for this.diameter



       /* NOTE: calling this method outside of this class or object
       will give you the 'unexpected identifer error' because it is out of scope!
       */
       console.log("The diameter is in between 1 and 10. ");

       // The fact that it's not outputting the console.log statement implies that the argument is not true for the if statement

     }


     if (this.diameter >= 10 && <= 20) {
         console.log("The diameter is in between 10 and 20 ");
     }

   } // end of circumferenceRange

  } // end of theRadius function

}; // end of class


/*NOTE: when creating the new object you must give it the required parameters as displayed below.
        The newly created BasketBall object has a diameter of 10.*/

let basketBall = new Ball(6);
//circumferenceRange();

console.dir(basketBall); // This will display the basketBall object.

// This is how you call the new object outside of the class.

/*
console.log("The circumference for the ball is (msg1) " + basketBall.theDiameter());
console.log("The circumference for the ball is (msg2) " + basketBall.theRadius());

*/
