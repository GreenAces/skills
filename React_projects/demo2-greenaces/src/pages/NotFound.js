import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorLogo from '../assets/images/logos/GreenAces-404Page.jpg';
import ErrorStyle from '../styles/GreenAces404Page.module.css';


function NotFound()  {

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate("/")

        }, 2000)
    }, [])



  return (

    <React.Fragment>
        
        <br />
        <section className={ErrorStyle.section}>
            <title>404 Page Not Found</title>   
            <h2 className={ErrorStyle.h2}>404 Page Not Found</h2>
            <b><p className={ErrorStyle.text}>Opps something went wrong...</p></b>
            <img src={ErrorLogo} alt="404 Page Logo" className={ErrorStyle.logo} />
            
        </section>
 
    </React.Fragment>

  );


}

export default NotFound;
