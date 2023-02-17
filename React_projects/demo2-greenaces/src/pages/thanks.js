import React from 'react';
import ThankyouImg from "../assets/images/other/Thank-You-Image.jpg";
import ThanksPage from  '../styles/Thanks.module.css';


//thanks.js is required for PayPal 


function ThankYou()  {



  return (<React.Fragment>


  <a href="#"><img id={ThanksPage.ThankYouImage001} src={ThankyouImg}  alt="ThankYouImage" title="Thank You!" class="center" /></a>



    
    </React.Fragment>) 


};

export default ThankYou;
