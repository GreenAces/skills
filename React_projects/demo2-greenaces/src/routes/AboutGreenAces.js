import React from 'react';
import Avatar from '../images/logos/GreenAcesAvatar.png';
import EmailLogo from '../images/logos/mail.png';
import LinkInLogo from '../images/logos/linkedin.png';
import YouTubeLogo from '../images/logos/YouTube_23392.png';
import TwitterLogo from '../images/logos/twitter_logo_icon_187318.png';
import GithubLogo from '../images/logos/github_logo.png';
import TikTok from '../images/logos/tiktok_logo_icon_187324.png';
//import GreenAcesAboutCSS'./AboutGreenAces.module.css';




const AboutGreenAces = () => {


  return (

      <main className="boarder-background">

              <div className="inside-box">

        <nav className="profile-frame">


        <img src={Avatar} alt="GreenAcesAvatar" className="displayPicture" />
      <h2 className="greenaces-font">GreenAces</h2>
      <h4 className="frontend-font">Frontend Developer</h4>
        <br></br>
      <h5><a href = "https://www.greenaces.site/" target="_blank" id="GreenAces-link" >Website</a></h5>
        <div className="emailBtn">
        <img img src={EmailLogo} alt="Email" className="email-logo" />&nbsp;<a href = "mailto:greenaces@greenaces.site" target="_blank" >Email</a>


      </div>
        <div className="linkinBtn">
        <img img src={LinkInLogo} alt="Email" className="linkin-logo"/>&nbsp;<a href = "https://www.linkedin.com/in/robert-labonte-8b135086?trk=people-guest_people_search-card" target="_blank">LinkIn</a>
      </div>

        </nav>


      <section>
      <p className="about-me-section"></p>
      <p className="paragraph1">
      <h2 id="About-headline">About</h2>
      <p className="paragraph1-alignment">
      Robert spends most of his time learning about React and C# and is willing to learn about other programming
      languages as well. He wants to grow an online business pertaining to games and the metaverse,
      but when asked how long it takes to accomplish his goal, he simply laughed and said “Rome, wasn’t built in a day!”
      </p></p>

      <p className="interest-section"></p>
      <p className="paragraph2">
      <h2 id="About-Interest">Interest</h2>
      <p className="paragraph2-alignment">
      When Robert is not geeking around on the computer, he enjoys reading, watching YouTube videos related
      to cryptocurrencies, listening to music, playing video games, and working out.
      <br></br>
      <br></br>
      <b id="x0">Favorite book:</b> &nbsp; The 48 Laws of Power by Robert Greene
      <br></br>
      <br></br>
      <b id="x1">Favorite crypto:</b> &nbsp; Cardano (ADA)
      <br></br>
      <br></br>
      <b id="x2">Favorite music:</b> &nbsp; Lana Del Rey – Summertime Sadness (Cedric Remix)
      <br></br>
      <br></br>
      <b id="x3">Favorite game:</b> &nbsp; Snow Runner
      <br></br>
      <br></br>
      <b id="x4">Favorite workout:</b> &nbsp; Running on the treadmill
      </p></p>
      <br></br>
    
      </section>


     <section className="rectangle93">


      <br></br>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <a href= "https://www.youtube.com/channel/UC63jUz00mGHXB7pdtzT-vEw" target="_blank" ><img img src={YouTubeLogo} alt="Email" className="youtube-logo" alt ="YouTube"/></a> &nbsp; &nbsp;
      <a href= "https://www.tiktok.com/@greenacesgames" target="_blank" ><img img src={TikTok} alt="Email" className="tiktok-logo" alt ="TikTok"/></a> &nbsp; &nbsp;
      <a href= "https://twitter.com/GreenAces_" target="_blank" ><img img src={TwitterLogo} alt="Email" className="twitter-logo" alt ="Twitter"/></a> &nbsp; &nbsp;
      <a href= "https://github.com/GreenAces/skills" target="_blank" ><img img src={GithubLogo} alt="Email" className="github-logo" alt ="GitHub"/></a> &nbsp; &nbsp;
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
     </section>

            </div>

      </main>




  )


};

export default AboutGreenAces;
