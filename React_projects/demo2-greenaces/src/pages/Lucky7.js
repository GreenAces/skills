import React from 'react';
import  '../styles/Lucky7Game.css';
import blackbackground from "../assets/images/lucky7_game_images/Black-wallpapers-33.jpg";
import lucky7Font from "../assets/images/lucky7_game_images/lucky7_logo.png";
import orangeButton from '../assets/images/lucky7_game_images/roll_button.png';
import tryAgain from '../assets/images/lucky7_game_images/play-again-button.png';
import dice1Gif from '../assets/images/lucky7_game_images/dice1_gif.gif';
import dice1 from '../assets/images/lucky7_game_images/dice1.png';
import dice2Gif from '../assets/images/lucky7_game_images/dice2_gif.gif';
import dice2 from '../assets/images/lucky7_game_images/dice2.png';
import dice3 from '../assets/images/lucky7_game_images/dice3.png';
import dice4 from '../assets/images/lucky7_game_images/dice4.png';
import dice5 from '../assets/images/lucky7_game_images/dice5.png';
import dice6 from '../assets/images/lucky7_game_images/dice6.png';




function Lucky7()  {

  /* work on this part later */





  return (


    

    <React.Fragment>


   

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
<h3 className= "displayRandomNumber"></h3>
</div>

<div className="GameButtonAndText">
<input className="rollButton" type="image" src={orangeButton}  width="105" height="90" alt="Roll dice!" />

  

  <div className="container">
    <div className="row">
      <div className="col-6 col-sm-4"><p className="dice1"></p></div>
      <div className="col-6 col-sm-4"><p className="dice2"></p></div>

    
      <div className="w-100 d-none d-md-block"></div>

      <div className="col-6 col-sm-4"></div>
      <div className="col-6 col-sm-4"></div>
    </div>
  </div>


  /* work on lines 66-75 later */

<p className= "displayGameAlert"></p>
<p className= "InformPlayerLoss"></p>
<br></br>
<p className= "InformPlayerWon"></p>
<p className="InformPlayerWonDetails"></p><a className="sendLink" href="#"></a>
<br></br>
<p id="PlayAgainButton" src={tryAgain} />
</div>

</div>


<div className="col align-self-end">


      <table className="t01">
        <tr>
        <th className="table-table-type">Data Type:</th>
        <th className="table-status-type" >Status:</th>
          </tr>
          <tr>
          <td classname="table-rounds-type"># of Rounds:</td>
          <td className = "data2"></td>
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
