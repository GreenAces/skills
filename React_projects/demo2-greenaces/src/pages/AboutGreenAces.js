import React from 'react';
import Avatar from '../assets/images/logos/GreenAcesAvatar.jpg';
import EmailLogo from '../assets/images/logos/mail.png';
import LinkInLogo from '../assets/images/logos/linkedin.png';
import YouTubeLogo from '../assets/images/logos/YouTube_23392.png';
import TwitterLogo from '../assets/images/logos/twitter_logo_icon_187318.png';
import GithubLogo from '../assets/images/logos/github_logo.png';
import TikTok from '../assets/images/logos/tiktok_logo_icon_187324.png';
import AboutPage from '../styles/AboutGreenAces.module.css';
import { Helmet } from 'react-helmet';




function AboutGreenAces() {


  return (

    <React.Fragment> 

    <Helmet>
    <meta name="author" content="GreenAces" />
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <title>GreenAces | AboutPage</title>
    </Helmet>
    

      <main className={AboutPage.smallBoarderBackground}>

              <div className={AboutPage.insideBox}>

              <div className={AboutPage.blackBorderTop} />

        <nav className={AboutPage.profileFrame}>


        <img src={Avatar} alt="GreenAcesAvatar" className={AboutPage.displayPicture} />
      <h2 className={AboutPage.greenacesText}>GreenAces</h2>
      <h4 className={AboutPage.frontendFont}>Frontend Developer</h4>
      <h5><a href = "https://www.greenaces.site/" target="_blank"  rel="noopener noreferrer" id={AboutPage.GreenAcesLink} >Website</a></h5>
        <br></br>
    
     
      

      <div className={AboutPage.ButtonWrapper}>

        <div className={AboutPage.emailBtn}>
        <img img src={EmailLogo} alt="Email" className={AboutPage.emailLogo} />&nbsp;<a href = "mailto:greenaces@greenaces.site" target="_blank" rel="noopener noreferrer">Email</a>


      </div>
        <div className={AboutPage.linkinBtn}>
        <img img src={LinkInLogo} alt="Email" className={AboutPage.linkinLogo}/>&nbsp;<a href = "https://www.linkedin.com/in/robert-labonte-8b135086?trk=people-guest_people_search-card" target="_blank" rel="noopener noreferrer">LinkIn</a>
      </div>

      </div>

        </nav>


      <section className={AboutPage.primarySection}>
      <p className={AboutPage.aboutMeSection}></p>
      <p className={AboutPage.paragraphOne}></p>

         <div className={AboutPage.AboutSectionContent}>

      <h2 id={AboutPage.AboutHeadline}>About</h2>
      <p id={AboutPage.paragraphOneAlignment}>
      Robert is a dedicated learner with a strong passion for programming. 
      He is particularly focused on expanding his knowledge of React and C#, and is eager to explore new programming
      languages as well. Robert is currently working on building an online business centered around the exciting world 
      of games and the metaverse. He knows that success takes time and effort, and remains committed to achieving his goals
      with a patient, persistent approach.
      </p>
          </div>
      

      <p className={AboutPage.interestSection}></p>
      <p className={AboutPage.paragraphTwo}>
      <h2 id={AboutPage.AboutInterest}>Interest</h2>
      <p className={AboutPage.paragraphTwoAlignment}>
      When he's not hard at work on the computer, Robert enjoys reading, staying up-to-date on the latest developments 
      in cryptocurrency by watching YouTube videos, listening to music, playing video games, and staying active with a 
      regular workout routine.
      </p>

      <p className={AboutPage.ParagraphTwoHighlights}>
      <br></br>
      <br></br>
      <b id={AboutPage.AB}>Favorite book:</b> &nbsp; The 48 Laws of Power by Robert Greene
      <br></br>
      <br></br>
      <b id={AboutPage.ABC}>Favorite crypto:</b> &nbsp; Cardano (ADA)
      <br></br>
      <br></br>
      <b id={AboutPage.ABCD}>Favorite music:</b> &nbsp; Lana Del Rey – Summertime Sadness (Cedric Remix)
      <br></br>
      <br></br>
      <b id={AboutPage.ABCDE}>Favorite game:</b> &nbsp; Snow Runner
      <br></br>
      <br></br>
      <b id={AboutPage.ABCDEF}>Favorite workout:</b> &nbsp; Running on the treadmill
      </p></p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    
      </section>

      
     <section className={AboutPage.rectangle93}>


      <br></br>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <a href= "https://www.youtube.com/channel/UC63jUz00mGHXB7pdtzT-vEw" target="_blank" rel="noopener noreferrer" ><img img src={YouTubeLogo} className={AboutPage.youtubeLogo} alt="YouTube"/></a> &nbsp; &nbsp;
      <a href= "https://www.tiktok.com/@greenacesgames" target="_blank"  rel="noopener noreferrer"><img img src={TikTok} className={AboutPage.tiktokLogo} alt="TikTok"/></a> &nbsp; &nbsp;
      <a href= "https://twitter.com/GreenAces_" target="_blank" rel="noopener noreferrer"><img img src={TwitterLogo} className={AboutPage.twitterLogo} alt="Twitter"/></a> &nbsp; &nbsp;
      <a href= "https://github.com/GreenAces/skills" target="_blank" rel="noopener noreferrer"><img img src={GithubLogo} className={AboutPage.githubLogo} alt="GitHub"/></a> &nbsp; &nbsp;
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
     </section>

            </div>

      </main>


      </React.Fragment>




  )


};

export default AboutGreenAces;
