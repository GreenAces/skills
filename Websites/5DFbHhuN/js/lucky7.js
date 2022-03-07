/*
   September 17, 2018*/




//function setups here:
// This generates random number that is range bound from 1 to 10.




// Event listeners
document.getElementById("rollButton").addEventListener("click", allFunctions);




function rollDice() {

  console.log("rollDice function started.");

  //variable declartions
  let number = Math.ceil((Math.random() * 10));
  let mouseClickSound = new Audio('https://greenaces.site/5DFbHhuN/sounds/lucky7/MouseDoubleClick.wav');
  let applauseSound = new Audio('https://greenaces.site/5DFbHhuN/sounds/lucky7/SMALL_CROWD_APPLAUSE.wav');
  mouseClickSound.play();

  if (number === 7) {

    //inform player1 of victory and get feedback
    document.getElementById("InformPlayerWon").innerHTML=("Congratulations you won!!!");
    document.getElementById("InformPlayerWonDetails").innerHTML=("Click the link below to leave feedback: ");
    document.getElementById("sendLink").innerHTML=("https://greenaces.site/lucky7Form.php");

    //play applauseSound if the user won
    applauseSound.play();

    //disable roll button if player won
    document.getElementById("rollButton").disabled = true;

    //Get status of rounds played
    getRounds();

    //reload game can be loaded here



  } else if (!number === 7){

  }

  //enable roll button if player lost
  document.getElementById("rollButton").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/lucky7_game_images/roll_button.png" </img>';

  document.getElementById("InformPlayerLoss").innerHTML=("Better luck next time...");

  document.getElementById("displayRandomNumber").innerHTML = number;

  //give the user the option to start the game over without refreshing the page.




  return number;


}// end of rollButton function

// This function will determine if number is odd or even.

function oddOrEven() {

  console.log("oddOrEven function started.");


  //varible declartions
  let number = play();
  let display;


  if (number === 2 || number === 4 || number === 6 || number === 8 || number === 10) {
   //  document.getElementById("data1").innerHTML = number;
    display = "Even number"

  }else if (number === 1 || number === 3 || number === 5 || number === 7  || number === 9){
  //  document.getElementById("data1").innerHTML = number;
    display = "Odd number"


  }

  document.getElementById("data3").innerHTML = display;



}//end of oddOrEven function



let count = 0; // This variable needs to be kept outside or it will not work properly...

function getRounds() {

       console.log("getRounds function started.");

        //varible declartions
       count = parseInt(count) + parseInt(1);
       let x = document.getElementById("data2");
       x.innerHTML= "Round ("+ count +")";


       if (count == 3) {

          // inform the user first that the game is over.
          document.getElementById("displayGameAlert").innerHTML=("The game is over because you reached the maximum number of rounds " + count);

          // disable button to prevent more mouse clicks.
          document.getElementById("rollButton").disabled = true;

          // give the user the option to start the game over without refreshing the page.
          document.getElementById("PlayAgainButton").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/lucky7_game_images/play-again-button.png" </img>';
        //  document.getElementById("PlayAgainButton").innerHTML = '<button onclick="refreshPage()">Play Again?</button>';

       }


}//end of getRounds function



//calling all functions here
function allFunctions() {

  rollDice();
  oddOrEven();
  getRounds();


}//end of allFunctions
