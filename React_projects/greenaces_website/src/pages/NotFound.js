import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorLogo from '../assets/images/logos/GreenAces-404Page.jpg';
import ErrorStyle from '../styles/GreenAces404Page.module.css';
import { Helmet } from 'react-helmet';


function NotFound()  {

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate("/")

        }, 5000) // 5 second waiting time before page redircts user to homepage
    }, [])



  return (

    <React.Fragment>

    <Helmet>
      <meta charset="utf-8"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
   </Helmet>
        
        <br />
        <section className={ErrorStyle.section}>
            <h3 className={ErrorStyle.h3}>404 Page Not Found</h3>   
            <b><p className={ErrorStyle.text}>Opps something went wrong...</p></b>
            <img src={ErrorLogo} alt="404 Page Logo" className={ErrorStyle.logo} />
        </section>
 
    </React.Fragment>

  );


}

export default NotFound;
