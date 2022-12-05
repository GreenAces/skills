import React from 'react';
import {Link} from 'react-router-dom';
import DiceImage from '../assets/images/thumbnails/Lucky7_game_thumbnail.jpg';
import PikachuImage from '../assets/images/thumbnails/Pokemon_game_thumbnail.jpg';
import DemoImage from '../assets/images/thumbnails/Demo_game_thumbnail.jpg';
import  '../styles/HomePage.css';
import BrowserGames from '../pages/BrowserGames';
import GamesData from '../pages/GamesData';

function Home() {

  const displayGames = GamesData.map (item => {

    return (
      
       <BrowserGames
       key={item.id}
       item={item}
        />
    )
})


    return (

      <React.Fragment>


        {displayGames}
           

 
    </React.Fragment>   
    

    );
}

export default Home;