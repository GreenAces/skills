import React, { useState, useRef } from "react";
import  '../styles/Lucky7Game.css';
import blackbackground from "../assets/images/lucky7_game_images/Black-wallpapers-33.jpg";
import lucky7Font from "../assets/images/lucky7_game_images/lucky7_logo.png";
import orangeButton from '../assets/images/lucky7_game_images/roll_button.png';
import tryAgain from '../assets/images/lucky7_game_images/play-again-button.png';
import dice1Gif from '../assets/images/lucky7_game_images/dice1_gif.gif';
import dice_1 from '../assets/images/lucky7_game_images/dice1.png';
import dice2Gif from '../assets/images/lucky7_game_images/dice2_gif.gif';
import dice_2 from '../assets/images/lucky7_game_images/dice2.png';
import dice_3 from '../assets/images/lucky7_game_images/dice3.png';
import dice_4 from '../assets/images/lucky7_game_images/dice4.png';
import dice_5 from '../assets/images/lucky7_game_images/dice5.png';
import dice_6 from '../assets/images/lucky7_game_images/dice6.png';
import mouseClickSound from '../assets/sounds/lucky7/MouseDoubleClick.wav';
import applauseSound  from '../assets/sounds/lucky7/RollDiceSound.wav';
import diceSound from '../assets/sounds/lucky7/SMALL_CROWD_APPLAUSE.wav';







function Lucky7()  {

  //variable declartions
  const [displayRandomNumber, setDisplayRandomNumber] = useState(0);
  const [diceOne, setDiceOne] = useState([]);
  const [diceTwo, setDiceTwo] = useState([]);
  const [informPlayerLoss, setInformPlayerLoss] = useState("");
  const [informPlayerWon, setInformPlayerWon] = useState("");
  const [winDetails, setWinDetails] = useState("");
  const [sendLink, setSendLink] = useState("");

  
  
  const [displayRounds, setDisplayRounds] = useState(1);
  const [counter, setCounter] = useState(1);
  const [displayGameAlert, setDisplayGameAlert] = useState("");
  const [playAgainButton, setPlayAgainButton] = useState([]);


  const mainButton = useRef(false);
 

  //functions are listed below

  const playMouseClicking = () => {

    new Audio (mouseClickSound).play();

  }

  const playApplauseSound = () => {

    new Audio (applauseSound).play();

  }

  const playDiceSound = () => {

    new Audio (diceSound).play();

  }


  //Each dice has a range from 1 to 6.
  const rollDice = () => {

  console.log("rollDice function started.");


  //variable declartions II (keep inside function)
  let dice1 = Math.ceil((Math.random() * 6));
  let dice2 = Math.ceil((Math.random() * 6));

  console.log("rollDice function started.");


  //play mouse clicking sound when user clicks roll button
  playMouseClicking();

  
  
  
  //load dice animation here:
  setTimeout(function() {

      //play dice sound
      playDiceSound();


      // load dice animation for gif 1 and gif 2
      setDiceOne(<img src={dice1Gif} />);
      setDiceTwo(<img src={dice2Gif} />);
      
      




  }, 5000);//gif animation starts in 5 second.



  //logic for diceImages here:

  //logic for dice1
  if (dice1 === 1) {

    // remove previous dice image
    setDiceOne([]);

    // load new dice image
    setDiceOne(<img src={dice_1} />);

  }

  if (dice1 === 2) {

    // remove previous dice image
    setDiceOne([]);

    // load new dice image
    setDiceOne(<img src={dice_2} />);

  }

  if (dice1 === 3) {


    // remove previous dice image
    setDiceOne([]);

    // load new dice image
    setDiceOne(<img src={dice_3} />);

  }

  if (dice1 === 4) {


    // remove previous dice image
    setDiceOne([]);

    // load new dice image
    setDiceOne(<img src={dice_4} />);

  }

  if (dice1 === 5) {


    // remove previous dice image
    setDiceOne([]);

    // load new dice image
    setDiceOne(<img src={dice_5} />);

  }

  if (dice1 === 6) {

    // remove previous dice image
    setDiceOne([]);

    // load new dice image
    setDiceOne(<img src={dice_6} />);

  }

  //logic for dice2
  if (dice2 === 1) {


    // remove previous dice image
    setDiceTwo([]);

    // load new dice image
    setDiceTwo(<img src={dice_1} />);

  }

  if (dice2 === 2) {


    // remove previous dice image
    setDiceTwo([]);

    // load new dice image
    setDiceTwo(<img src={dice_2} />);

  }

  if (dice2 === 3) {

    // remove previous dice image
    setDiceTwo([]);

    // load new dice image
    setDiceTwo(<img src={dice_3} />);

  }

  if (dice2 === 4) {


    // remove previous dice image
    setDiceTwo([]);

    // load dice animation or gif
    setDiceTwo(<img src={dice_4} />);

  }

  if (dice2 === 5) {


    // remove previous dice image
    setDiceTwo([]);

    // load new dice image
    setDiceTwo(<img src={dice_5} />);

  }

  if (dice2 === 6) {

    // remove previous dice image
    setDiceTwo([]);

    // load new dice image
    setDiceTwo(<img src={dice_6} />);

  }



  //remove comment regarding "Better Luck Next Time" when player wins during round 1, 2, or 3.
  if (dice1 + dice2 === 7 && counter === 3 || dice1 + dice2 === 7 && counter === 2 || dice1 + dice2 === 7 && counter === 1) {

    setInformPlayerLoss("");

  }


  //inform player1 of victory and get feedback
  if (dice1 + dice2 === 7) {


    setDisplayRandomNumber(dice1+dice2);
    setInformPlayerWon("Congratulations you won!!!");
    setWinDetails("Click the link below to leave feedback:");
    setSendLink("https://greenaces.site/lucky7Form.php");


    //play applauseSound if the user won
    playApplauseSound();


    //disable roll button if player won
     mainButton.current.disabled = true;


    //debugging here:
    console.log("dice1: " +dice1);
    console.log("dice2: " +dice2);

    //allow player to play again without refreshing the page
    setPlayAgainButton(<img src={tryAgain} />);



    return dice1+dice2;

  }



  //inform player of loss if these conditions are true
  if (dice1 + dice2 != 7) {

    //enable roll button if player lost
    mainButton.current.disabled = false;

    setInformPlayerLoss("Better luck next time...");

    setDisplayRandomNumber(dice1+dice2);

    
    //debugging here:
    console.log("dice1*: " +dice1);
    console.log("dice2*: " +dice2);


    return dice1+dice2;


  }


  }//end of rollDice



  //calculates the number of rounds 
  const getRounds = () => {

    console.log("getRounds function started.");

   

    setCounter(counter + 1);
    setDisplayRounds(displayRounds + 1);
    


    if (counter == 3) {
  
      console.log("getRounds function started (2).")

       // inform the user first that the game is over.
          setDisplayGameAlert("The game is over because you reached the maximum number of rounds. " + "(" + `${counter}` + ")");
  
       // disable button to prevent mouse clicks.
          mainButton.current.disabled = true;
        
       // give the user the option to start the game over without refreshing the page.
          setPlayAgainButton(<img src={tryAgain} />);
  
       // reset counter & displayRounds to zero (on table)
          setCounter(0);
          setDisplayRounds(0);
      
       
  
  
    }



  }//end of getRounds




  const allFunctions = () => {

    rollDice();
    getRounds();

    

  }//end of allFunctions

  const reload = () => {

    console.log("reload function started.");

    window.location.reload();

  }//end of reload 
  




  return (


    

    <React.Fragment>


  <meta name="author" content="GreenAces" />
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>GreenAces Lucky7 Game || Are you feeling lucky? You have 3 chances to roll lucky number 7. Give it a try!</title>

<div  style={{ backgroundImage: `url(${blackbackground})` }}>




<div className="container">
<div className="row">
<div className="col align-self-start"></div>


<div className="GameInfo">

<p>Click the button to win lucky number 7!</p>
<p>You're given 3 rounds before the game ends.</p>
<p>Are you feeling lucky?</p>
</div>
</div>

<div className="col align-self-center">
<div className="GameNumberFont">
</div>

<div className="GameLogo">
<img src={lucky7Font} className="logo1"></img>
<h3 className= "displayRandomNumber"> {displayRandomNumber} </h3>
</div>

<div className="GameButtonAndText">
<input className="rollButton" type="image"  src={orangeButton}  width="105" height="90" alt="Roll dice!" 
onClick={() => allFunctions()}  ref={mainButton} />

  

  <div className="container">
    <div className="row">
      <div className="diceBoxOne"><p className="dice1"> {diceOne} </p></div>
      <div className="diceBoxTwo"><p className="dice2"> {diceTwo} </p></div>

    
      <div className="w-100 d-none d-md-block"></div>

      <div className="col-6 col-sm-4"></div>
      <div className="col-6 col-sm-4"></div>
    </div>
  </div>


  
<p className= "displayGameAlert"> {displayGameAlert} </p>
<p className= "InformPlayerLoss">  {informPlayerLoss} </p>
<br></br>
<p className= "InformPlayerWon"> {informPlayerWon} </p>
<p className= "InformPlayerWonDetails"> {winDetails} </p>
<a className= "sendLink" target = "_blank" href="https://greenaces.site/lucky7Form.php"> {sendLink} </a>
<br></br>
<br></br>
<p className= "PlayAgainButton" onClick={() => reload()}> {playAgainButton} </p>
</div>

</div>




<div className="col align-self-end">


      <table className="t01">
        <tr>
        <th className="table-table-type">Data Type:</th>
        <th className="table-status-type" >Status:</th>
          </tr>
          <tr>
          <td className="table-rounds-type"># of Rounds:</td>
          <td className = "data2"> {displayRounds}  </td>
          </tr>
        </table> 



        <br></br>

</div>
</div>



</div>









    </React.Fragment>


  );




}

export default Lucky7;
