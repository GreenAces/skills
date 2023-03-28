import React from 'react';
import ThankyouImg from "../assets/images/other/Thank-You-Image.jpg";
import ThanksPage from  '../styles/Thanks.module.css';
import { Helmet } from 'react-helmet';


//thanks.js is required for PayPal 


function ThankYou()  {



  return (<React.Fragment>

      <Helmet>
        <meta charset="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
     </Helmet>


  <a href="#"><img id={ThanksPage.ThankYouImage001} src={ThankyouImg}  alt="ThankYouImage" title="Thank You!" class="center" /></a>



    
    </React.Fragment>) 


};

export default ThankYou;
