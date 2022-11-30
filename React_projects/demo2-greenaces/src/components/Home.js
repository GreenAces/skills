import React from 'react';
import {Link} from 'react-router-dom';
import DiceImage from '../assets/images/thumbnails/Lucky7_game_thumnail.jpg';
import PikachuImage from '../assets/images/thumbnails/Pokemon_game_thumbnail.jpg';
import DemoImage from '../assets/images/thumbnails/Demo_game_thumbnail.jpg';
import  '../styles/HomePage.css';

function Home() {

    return (

      <React.Fragment>

            <p><br></br></p>
            <p><br></br></p>
            <p><br></br></p>
            <p><br></br></p>


            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <a href="https://codingbeautydev.com" target="_blank" rel="noreferrer">
    <img src={DiceImage} alt="DiceImage Logo" className="DiceImage-Logo" /></a>    
    
      <div className="carousel-caption d-none d-md-block">
        <h5><Link to="/Lucky7" href="#">Lucky 7</Link></h5>
        <p>Are you feeling lucky? You have 3 chances to roll lucky number 7. Give it a try!</p>
      </div>
    </div>
    <div className="carousel-item">
    <a href="https://codingbeautydev.com" target="_blank" rel="noreferrer">
    <img src={PikachuImage} alt="PikachuImage Logo" className="PikachuImage-Logo" /></a> 
      
      <div className="carousel-caption d-none d-md-block">
        <h5><Link to="/Pokemon" href="#">Pokemon</Link></h5>
        <p>Pick your favorite pokemon and let them duel against your opponent. If all 3 pokemon are dead then you lose!</p>
      </div>
    </div>
    <div className="carousel-item">
    <a href="https://codingbeautydev.com" target="_blank" rel="noreferrer">
        <img src={DemoImage} alt="DemoImage Logo" className="DemoImage-Logo" /></a> 
    
      <div className="carousel-caption d-none d-md-block">
        <h5><Link to="/Demo" href="#">Demo</Link></h5>
        <p>Work in progress</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


           

 
    </React.Fragment>   
    

    );
}

export default Home;