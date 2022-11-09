import React from 'react';


export default function Navbar() 
{
    return (
        
        <nav>
        
        
        <img src = "./images/GreenAcesAvatar.png" className="displayPicture"/>
        <h2 id="greenaces-font">GreenAces</h2>
        <h4 id="frontend-font">Frontend Developer</h4>
        <h5 id="website-font"><a href = "#" >website</a></h5>
        <div className="emailBtn">
        <img id="email-logo" src ="./images/mail.png"/>&nbsp;<a href = "#" id="email-Link">Email</a>
        </div>
        <div className="linkinBtn">
        <img id="linkin-logo" src ="./images/linkedin.png"/>&nbsp;<a href = "#" id="linkin-Link">LinkIn</a>
        </div>

        </nav>
    )
}
