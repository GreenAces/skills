/*
   September 17, 2018*/




//function setups here:
// This generates random number that is range bound from 1 to 10.




function rollDice() {

  console.log("roll button clicked.");

  //variable declartions

  let number = Math.ceil((Math.random() * 10));
  let text ="";
  let text2 ="";
  let text3 ="";
  let mouseClickSound = new Audio('https://greenaces.site/5DFbHhuN/sounds/lucky7/MouseDoubleClick.wav');
  let applauseSound = new Audio('https://greenaces.site/5DFbHhuN/sounds/lucky7/SMALL_CROWD_APPLAUSE.wav');
  mouseClickSound.play();

  if (number === 7) {



    text = "Congratulations you won!!!";
    text2 = "Click the link below to leave feedback."
    text3 = "https://greenaces.site/lucky7Form.php"

    //play applauseSound if the user won
    applauseSound.play();

    //disable roll button if player won
    document.getElementById("rollButton").disabled = true;

    //give the user the option to start the game over without refreshing the page.
    getRounds();



  } else {

  }

  //enable roll button if player lost
  document.getElementById("rollButton").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/lucky7_game_images/roll_button.png" </img>';

  text2 = "Better luck next time...";

  document.getElementById("displayRandomNumber").innerHTML = number;
  document.getElementById("InformPlayerWon").innerHTML = text;
  document.getElementById("InformPlayerLoss").innerHTML = text2;
  return number;


}// end of rollButton function

// This function will determine if number is odd or even.

function oddOrEven() {
  let number = play();


  let alert;
  if (number === 2 || number === 4 || number === 6 || number === 8 || number === 10) {
   //  document.getElementById("data1").innerHTML = number;
    alert = "Even number"

  }else if (number === 1 || number === 3 || number === 5 || number === 7  || number === 9){
  //  document.getElementById("data1").innerHTML = number;
    alert = "Odd number"


  }

  document.getElementById("data3").innerHTML = alert;



}//end of oddOrEven function



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
          document.getElementById("PlayAgainButton").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/lucky7_game_images/play-again-button.png" </img>';
        //  document.getElementById("PlayAgainButton").innerHTML = '<button onclick="refreshPage()">Play Again?</button>';

       }

        document.getElementById("displayGameAlert").innerHTML = text;

}//end of getRounds function




 // Event listeners
document.getElementById("rollButton").addEventListener("click", rollButton);



//calling all functions here



function rollButton() {

  rollDice();


}
