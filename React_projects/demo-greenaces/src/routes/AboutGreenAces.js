import React from 'react';
import Avatar from '../images/GreenAcesAvatar.png';
import EmailLogo from '../images/mail.png';
import LinkInLogo from '../images/linkedin.png';
import YouTubeLogo from '../images/YouTube_23392.png';
import TwitterLogo from '../images/twitter_logo_icon_187318.png';
import GithubLogo from '../images/github_logo.png';
import TikTok from '../images/tiktok_logo_icon_187324.png';



const AboutGreenAces = () => {


  return (

      <main className="boarder-background">

              <div className="inside-box">

        <nav className="profile-frame">


        <img src={Avatar} alt="GreenAcesAvatar" className="displayPicture" />
      <h2 className="greenaces-font">GreenAces</h2>
      <h4 className="frontend-font">Frontend Developer</h4>
      <h5 className="website-font"><a href = "#" >website</a></h5>
        <div className="emailBtn">
        <img img src={EmailLogo} alt="Email" className="email-logo" />&nbsp;<a href = "#" >Email</a>


      </div>
        <div className="linkinBtn">
        <img img src={LinkInLogo} alt="Email" className="linkin-logo"/>&nbsp;<a href = "#">LinkIn</a>
      </div>

        </nav>


      <section className="recntangle91">
      <p className="about-me-section"><b>About</b></p>
      <p className="paragraph1">Hello Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
      <br></br>
      <p className="interest-section"><b>Interest</b></p>
      <p className="paragraph2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
      <br></br>
      <br></br>
      </section>


     <section className="rectangle93">

      <br></br>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <a href= "#" ><img img src={YouTubeLogo} alt="Email" className="youtube-logo" alt ="YouTube"/></a> &nbsp; &nbsp;
      <a href= "#" ><img img src={TikTok} alt="Email" className="tiktok-logo" alt ="TikTok"/></a> &nbsp; &nbsp;
      <a href= "#" ><img img src={TwitterLogo} alt="Email" className="twitter-logo" alt ="Twitter"/></a> &nbsp; &nbsp;
      <a href= "#" ><img img src={GithubLogo} alt="Email" className="github-logo" alt ="GitHub"/></a>

     </section>

            </div>

      </main>




  )


};

export default AboutGreenAces;
