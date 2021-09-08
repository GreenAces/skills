/* Just a simple program that generates numbers and identifies if it is 7 or not...
   Eventually I want to expand it to identify if the number is odd or even.
   September 17, 2018*/



// This generates random number that is range bound from 1 to 10.

/* NOTE: You do not need to call the function because the button already calls it
   NOTE: No code will be executed after the return keyword. Therefore it is best to keep it at the end of the bracket.
   NOTE: Sometimes the condition in the play() function gets triggered when the number is not 7. don't know why this happens.
*/


function play() {
  let number = Math.ceil((Math.random() * 10));
  let text ="";
  let text2 ="";
  let mouseClickSound = new Audio('http://robert-labonte.great-site.net/JS-BASICS/sounds/lucky7/MouseDoubleClick.wav');
  let applauseSound = new Audio('http://robert-labonte.great-site.net/JS-BASICS/sounds/lucky7/SMALL_CROWD_APPLAUSE.wav');
  mouseClickSound.play();

  if (number == 7) {
    text = "Congratulations you won!!!";

    //play applauseSound if the user won
    applauseSound.play();

    //disable button if player won
    document.getElementById("myBtn").disabled = true;

    //give the user the option to start the game over without refreshing the page.
    document.getElementById("PlayAgainButton").innerHTML = '<button onclick="refreshPage()">Play Again?</button>';

  } else {
    text2 = "Better luck next time...";
  }
  document.getElementById("displayRandomNumber").innerHTML = number;
  document.getElementById("InformPlayerWon").innerHTML = text;
  document.getElementById("InformPlayerLoss").innerHTML = text2;
  return number;
}

// This function will determine if number is odd or even.

function oddOrEven() {
  let number = play();


  let alert;
  if (number == 2 || number == 4 || number == 6 || number == 8 || number == 10) {
   //  document.getElementById("data1").innerHTML = number;
    alert = "Even number"

  }else if (number == 1 || number == 3 || number == 5 || number == 7 || number == 9){
  //  document.getElementById("data1").innerHTML = number;
    alert = "Odd number"


  }

  document.getElementById("data3").innerHTML = alert;



}



let count = 0; // This variable needs to be kept outside or it will not work properly...
function getRounds() {


       count = parseInt(count) + parseInt(1);
       let x = document.getElementById("data2");
       x.innerHTML= "Round ("+ count +")";

       let text="";
       if (count == 3) {
          // inform the user first that the game is over.
          text = "The game is over because you reached the maximum number of rounds ("+ count +")";
          // disable button to prevent more mouse clicks.
          document.getElementById("myBtn").disabled = true;
          // give the user the option to start the game over without refreshing the page.
          document.getElementById("PlayAgainButton").innerHTML = '<button onclick="refreshPage()">Play Again?</button>';
       }

        document.getElementById("displayGameAlert").innerHTML = text;

}

// create a button that refreshes the page as this will be needed to start the game over.

function refreshPage(){

    window.location.reload();
}


// create a function that calls all functions so that the button on the html page can use it.

function callAllFunctions(){
    play();
    oddOrEven();
    getRounds();
}
