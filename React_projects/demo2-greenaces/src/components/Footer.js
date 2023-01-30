import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/FooterNav.css';
import { useLocation } from "react-router-dom";

function Footer() {

    const { pathname } = useLocation();
    console.log(pathname);
    // removes the footer component if the pathname matches
    if (pathname === "/AboutGreenAces" ||
        pathname === "/Lucky7" ||
        pathname === "/Pokemon" ||
        pathname === "/Demo"
        ) return null;

    return (
        <React.Fragment>



    <footer id="footer" className="footer-1">
    <div className="main-footer widgets-dark typo-light">
    <div className="container">
    <div className="row">

    <div className="col-xs-12 col-sm-6 col-md-3">
    <div className="widget subscribe no-box">
    <h5 className="widget-title">GreenAces<span></span></h5>
    <p>Awesome games in your hands </p>
    <form action="https://www.paypal.com/donate" method="post" target="_top">
    <input type="hidden" name="hosted_button_id" value="P7VSF439RBSTS" />
    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
    <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
    </form>
    </div>
    </div>



    <div className="col-xs-12 col-sm-6 col-md-3">
    <div className="widget no-box">
    <h5 className="widget-title">Quick Links<span></span></h5>
    <ul className="thumbnail-widget">
    <li>
    <div className="thumb-content"><a href="#. "target="_blank" rel="noreferrer">Docs</a></div>
    </li>
    <li>
    <div className="thumb-content"><a href="#." target="_blank" rel="noreferrer">Blog</a></div>
    </li>
    <li>
    <div className="thumb-content"><a href="#." target="_blank" rel="noreferrer">Privacy-Policy</a></div>
    </li>
    <li>
    <div className="thumb-content"><a href="#." target="_blank" rel="noreferrer">Legal-statement</a></div>
    </li>
    <li>
    <div className="thumb-content"><Link to="/AboutGreenAces" href="#." target="_blank" rel="noreferrer">About</Link></div>
    </li>
    </ul>
    </div>
    </div>

    <div className="col-xs-12 col-sm-6 col-md-3">
    <div className="widget no-box">
    <h5 className="widget-title">Newsletter<span></span></h5>
    <p>Get the lastest news delivered right to your inbox.</p>
    <button className="myButtonNews"><a className="signupNewsButton" href="https://greenaces.site/newsletter.html" target="_blank"></a>Sign Up</button>
    </div>
    </div>

    <div className="col-xs-12 col-sm-6 col-md-3">

    <div className="widget no-box">
    <h5 className="widget-title">Contact:<span></span></h5>

    <p className="GreenAcesMailTag"><a className="greenAcesEmailContact" href="mailto:greenaces@greenaces.site" title="Send Email to GreenAces">greenaces@greenaces.site</a></p>
    <ul className="social-footer2">
    <li className=""><a title="YouTube" target="_blank" href="https://www.youtube.com/channel/UC63jUz00mGHXB7pdtzT-vEw"><img alt="YouTube" width="30" height="30" src="https://greenaces.site/5DFbHhuN/images/other/YouTube_23392.png"/></a></li>
    <li className=""><a href="https://www.tiktok.com/@greenacesgames" target="_blank" title="TikTok"><img alt="TikTok" width="30" height="30" src="https://greenaces.site/5DFbHhuN/images/other/tiktok_logo_icon_187324.png"/></a></li>
    <li className=""><a href="https://twitter.com/GreenAces_" target="_blank" title="Twitter"><img alt="Twitter" width="30" height="30" src="https://greenaces.site/5DFbHhuN/images/other/twitter_logo_icon_187318.png"/></a></li>
    <li className=""><a title="Github" target="_blank" href="https://github.com/GreenAces/skills"><img alt="GitHub" width="30" height="30" src="https://greenaces.site/5DFbHhuN/images/greenaces_logo/github_logo.png"/></a></li>



    </ul>
    </div>
    </div>

    </div>
    </div>
    </div>

    <div className="footer-copyright">
    <div className="container">
    <div className="row">
    <div className="col-md-12 text-center">
    <p>Copyright &copy; {(new Date().getFullYear())} All rights reserved.</p>
    </div>
    </div>
    </div>
    </div>
    </footer>

        </React.Fragment>

    );
}

export default Footer;