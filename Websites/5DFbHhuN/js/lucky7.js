/*
   September 17, 2018*/




// Event listeners
document.getElementById("rollButton").addEventListener("click", allFunctions);
document.getElementById("PlayAgainButton").addEventListener("click", reload);




// Each dice is range bound from 1 to 6.
function rollDice() {

  console.log("rollDice function started.");

  //variable declartions
  count = parseInt(count) + parseInt(1);
  let x = document.getElementById("data2");
   x.innerHTML= "Round#" + count;
  let dice1 = Math.ceil((Math.random() * 6));
  let dice2 = Math.ceil((Math.random() * 6));
  let mouseClickSound = new Audio('https://greenaces.site/5DFbHhuN/sounds/lucky7/MouseDoubleClick.wav');
  let applauseSound = new Audio('https://greenaces.site/5DFbHhuN/sounds/lucky7/SMALL_CROWD_APPLAUSE.wav');
  mouseClickSound.play();

  //logic for diceImages here:

  //logic for dice1
  if (dice1 === 1) {

    // remove previous dice image

    let elem =  document.createElement("img");
    elem.src ="";
    document.getElementById("dice1").appendChild(elem);
    document.getElementById("dice1").style.width = 95;
    document.getElementById("dice1").style.height = 71;

    // load new dice image
    document.getElementById("dice1").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/lucky7_game_images/dice1.png" </img>';
    document.getElementById("dice1").style.width = 95;
    document.getElementById("dice1").style.height = 71;

  }

  if (dice1 === 2) {

    // remove previous dice image

    let elem =  document.createElement("img");
    elem.src ="";
    document.getElementById("dice1").appendChild(elem);
    document.getElementById("dice1").style.width = 95;
    document.getElementById("dice1").style.height = 71;

    // load new dice image
    document.getElementById("dice1").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/lucky7_game_images/dice2.png" </img>';
    document.getElementById("dice1").style.width = 95;
    document.getElementById("dice1").style.height = 71;

  }

  if (dice1 === 3) {

    // remove previous dice image

    let elem =  document.createElement("img");
    elem.src ="";
    document.getElementById("dice1").appendChild(elem);
    document.getElementById("dice1").style.width = 95;
    document.getElementById("dice1").style.height = 71;

    // load new dice image
    document.getElementById("dice1").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/lucky7_game_images/dice3.png" </img>';
    document.getElementById("dice1").style.width = 95;
    document.getElementById("dice1").style.height = 71;

  }

  if (dice1 === 4) {

    // remove previous dice image

    let elem =  document.createElement("img");
    elem.src ="";
    document.getElementById("dice1").appendChild(elem);
    document.getElementById("dice1").style.width = 95;
    document.getElementById("dice1").style.height = 71;

    // load new dice image
    document.getElementById("dice1").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/lucky7_game_images/dice4.png" </img>';
    document.getElementById("dice1").style.width = 95;
    document.getElementById("dice1").style.height = 71;

  }

  if (dice1 === 5) {

    // remove previous dice image

    let elem =  document.createElement("img");
    elem.src ="";
    document.getElementById("dice1").appendChild(elem);
    document.getElementById("dice1").style.width = 95;
    document.getElementById("dice1").style.height = 71;

    // load new dice image
    document.getElementById("dice1").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/lucky7_game_images/dice5.png" </img>';
    document.getElementById("dice1").style.width = 95;
    document.getElementById("dice1").style.height = 71;

  }

  if (dice1 === 6) {

    // remove previous dice image

    let elem =  document.createElement("img");
    elem.src ="";
    document.getElementById("dice1").appendChild(elem);
    document.getElementById("dice1").style.width = 95;
    document.getElementById("dice1").style.height = 71;

    // load new dice image
    document.getElementById("dice1").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/lucky7_game_images/dice6.png" </img>';
    document.getElementById("dice1").style.width = 95;
    document.getElementById("dice1").style.height = 71;

  }

  //logic for dice2
  if (dice2 === 1) {

    // remove previous dice image

    let elem =  document.createElement("img");
    elem.src ="";
    document.getElementById("dice2").appendChild(elem);
    document.getElementById("dice2").style.width = 95;
    document.getElementById("dice2").style.height = 71;

    // load new dice image
    document.getElementById("dice2").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/lucky7_game_images/dice1.png" </img>';
    document.getElementById("dice2").style.width = 95;
    document.getElementById("dice2").style.height = 71;

  }

  if (dice2 === 2) {

    // remove previous dice image

    let elem =  document.createElement("img");
    elem.src ="";
    document.getElementById("dice2").appendChild(elem);
    document.getElementById("dice2").style.width = 95;
    document.getElementById("dice2").style.height = 71;

    // load new dice image
    document.getElementById("dice2").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/lucky7_game_images/dice2.png" </img>';
    document.getElementById("dice2").style.width = 95;
    document.getElementById("dice2").style.height = 71;

  }

  if (dice2 === 3) {

    // remove previous dice image

    let elem =  document.createElement("img");
    elem.src ="";
    document.getElementById("dice2").appendChild(elem);
    document.getElementById("dice2").style.width = 95;
    document.getElementById("dice2").style.height = 71;

    // load new dice image
    document.getElementById("dice2").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/lucky7_game_images/dice3.png" </img>';
    document.getElementById("dice2").style.width = 95;
    document.getElementById("dice2").style.height = 71;

  }

  if (dice2 === 4) {

    // remove previous dice image

    let elem =  document.createElement("img");
    elem.src ="";
    document.getElementById("dice2").appendChild(elem);
    document.getElementById("dice2").style.width = 95;
    document.getElementById("dice2").style.height = 71;

    // load new dice image
    document.getElementById("dice2").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/lucky7_game_images/dice4.png" </img>';
    document.getElementById("dice2").style.width = 95;
    document.getElementById("dice2").style.height = 71;

  }

  if (dice2 === 5) {

    // remove previous dice image

    let elem =  document.createElement("img");
    elem.src ="";
    document.getElementById("dice2").appendChild(elem);
    document.getElementById("dice2").style.width = 95;
    document.getElementById("dice2").style.height = 71;

    // load new dice image
    document.getElementById("dice2").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/lucky7_game_images/dice5.png" </img>';
    document.getElementById("dice2").style.width = 95;
    document.getElementById("dice2").style.height = 71;

  }

  if (dice2 === 6) {

    // remove previous dice image

    let elem =  document.createElement("img");
    elem.src ="";
    document.getElementById("dice2").appendChild(elem);
    document.getElementById("dice2").style.width = 95;
    document.getElementById("dice2").style.height = 71;

    // load new dice image
    document.getElementById("dice2").innerHTML = '<img src ="https://greenaces.site/5DFbHhuN/images/lucky7_game_images/dice6.png" </img>';
    document.getElementById("dice2").style.width = 95;
    document.getElementById("dice2").style.height = 71;

  }



//logic for generating numbers for each dice



  if (dice1 + dice2 === 7) {

    //inform player1 of victory and get feedback
    document.getElementById("displayRandomNumber").innerHTML = dice1+dice2;
    document.getElementById("InformPlayerWon").innerHTML=("Congratulations you won!!!");
    document.getElementById("InformPlayerWonDetails").innerHTML=("Click the link below to leave feedback: ");
    document.getElementById("sendLink").innerHTML = "Give feedback";
    document.getElementById("sendLink").href = "https://greenaces.site/lucky7Form.php";
    document.getElementById("sendLink").target = "_blank";


    //play applauseSound if the user won
    applauseSound.play();

    //disable roll button if player won
    document.getElementById("rollButton").disabled = true;

    //debugging here:
    console.log("dice1: " +dice1);
    console.log("dice2: " +dice2);

    //allow player to play again without refreshing the page
    document.getElementById("PlayAgainButton").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/lucky7_game_images/play-again-button.png" </img>';
    document.getElementById("PlayAgainButton").style.width = 160;
    document.getElementById("PlayAgainButton").style.height = 77;



    return dice1+dice2;

  }


  //inform player of loss if these conditions are true
  if (dice1 + dice2 < 7 || dice1 + dice2 > 7) {

    document.getElementById("InformPlayerLoss").innerHTML=("Better luck next time...");

  }





  if (!dice1 + dice2 === 7) {

    //enable roll button if player lost
    document.getElementById("rollButton").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/lucky7_game_images/roll_button.png" </img>';

    document.getElementById("displayRandomNumber").innerHTML = dice1+dice2;

    //give the user the option to start the game over without refreshing the page.


    //debugging here:
    console.log("dice1*: " +dice1);
    console.log("dice2*: " +dice2);


    return dice1+dice2;


  }





}// end of rollButton function




//count the number of rounds -- game ends when round is 3

let count = 0; // keep this varible outside getRounds function

function getRounds() {


  if (count == 3) {

    console.log("getRounds function started.")

     // inform the user first that the game is over.
     document.getElementById("displayGameAlert").innerHTML=("The game is over because you reached the maximum number of rounds. " + "(" + count + ")");

     // disable button to prevent more mouse clicks.
     document.getElementById("rollButton").disabled = true;

     // give the user the option to start the game over without refreshing the page.
     document.getElementById("PlayAgainButton").innerHTML='<img src ="https://greenaces.site/5DFbHhuN/images/lucky7_game_images/play-again-button.png" </img>';
     document.getElementById("PlayAgainButton").style.width = 160;
     document.getElementById("PlayAgainButton").style.height = 77;

     //reset count to zero
     count = 0;


  }

  //remove comment regarding "Better Luck Next Time" when player wins on the 3rd round.
  if (dice1 + dice2 < 7 && count === 3 || dice1 + dice2 > 7 && count === 3 ) {

    document.getElementById("InformPlayerLoss").innerHTML=("");

  }



}//end of getRounds function



//This is the function for the PlayAgainButton
//It simply reloads the page

function reload() {


  console.log("reload function started.");

  window.location.reload();


}//end of reload function



//All functions are called here:
function allFunctions() {

  rollDice();
  getRounds();


}//end of allFunctions
