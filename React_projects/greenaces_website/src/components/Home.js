import React from 'react';
import {Link} from 'react-router-dom';
import GTA6Wallpaper01 from '../assets/images/thumbnails/GTA6-wallpaper-image01.jpg';
import  '../styles/HomePage.css';
import { Helmet } from 'react-helmet';




function Home() {

  return (

    <React.Fragment>
      <br></br>
      <br></br>

      <Helmet>     
      <meta charset="utf-8"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <title>GreenAces | Official Website </title>
     </Helmet>

    <main className='page-content'>

    <div style={{ backgroundImage:`url(${GTA6Wallpaper01})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", 
    height:740,width:950
    }}>
      
    </div>

    

    </main>



    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    
    


</React.Fragment>


  );


}

export default Home;