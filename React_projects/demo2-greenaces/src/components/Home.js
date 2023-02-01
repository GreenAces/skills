import React from 'react';
import {Link} from 'react-router-dom';
import DiceImage from '../assets/images/thumbnails/Lucky7_game_thumbnail.jpg';
import PikachuImage from '../assets/images/thumbnails/Pokemon_game_thumbnail.jpg';
import  '../styles/HomePage.css';




function Home() {

  return (

    <React.Fragment>
      <br></br>
      <br></br>

    <main className='page-content'>


    <div className="flex-wrapper">
<div className="container" id="content">

  <p><br></br></p>


  <div className="container overflow-hidden">
<div className="row gy-5">
<div className="col-6">
  <div className="p-3 border bg-light">
    <p className="game-description">Are you feeling lucky? You have 3 chances to roll lucky number 7. Give it a try!</p>
  </div>
</div>
<div className="col-6">
  <div className="p-3 border bg-light">
    <p className="game-description">Pick your favorite pokemon and let them duel against your opponent. If all 3 pokemon are dead then you lose!</p>
  </div>
</div>
<div className="col-6">
  <div className="p-3 border bg-light">
  <Link to="/Lucky7"><img src={DiceImage} 
className="game-thumbnail" alt="Lucky 7" title="Lucky 7"/></Link>
  </div>
</div>
<div className="col-6">
  <div className="p-3 border bg-light">
  <Link to="/PokemonGame"><img src={PikachuImage} 
className="game-thumbnail" alt="Pokemon Game" title="Pokemon Game"/></Link>
  </div>
</div>
</div>
</div>


  <p><br></br></p>

  </div>
  </div>


    </main>



    <br></br>
    <br></br>
    
    


</React.Fragment>


  );


}

export default Home;