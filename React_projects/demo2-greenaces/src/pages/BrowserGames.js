import React from 'react';
import  '../styles/HomePage.css';



function BrowserGames(props) {



  return (

    <React.Fragment>

        <main className='page-content'>

                <div className="grid-wrapper">
                
                    
                <div className="grid-item featured-top"><span><p className="game-title">{props.item.title}</p></span>
                
                <span><img src={`../assets/images/thumbnails/${props.item.coverImg}`} className="game-thumbnail"/></span>
                </div>
                
                <div className="grid-item"><p className="game-description">{props.item.description}</p></div>
                

                </div>

        </main>





    </React.Fragment>



  );

}

export default BrowserGames;
