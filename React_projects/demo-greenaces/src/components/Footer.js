import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (


    <footer id="footer" class="footer-1">
    <div class="main-footer widgets-dark typo-light">
    <div class="container">
    <div class="row">

    <div class="col-xs-12 col-sm-6 col-md-3">
    <div class="widget subscribe no-box">
    <h5 class="widget-title">GreenAces<span></span></h5>
    <p>Awesome games in your hands </p>
    <form action="https://www.paypal.com/donate" method="post" target="_top">
    <input type="hidden" name="hosted_button_id" value="P7VSF439RBSTS" />
    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
    <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
    </form>
    </div>
    </div>



    <div class="col-xs-12 col-sm-6 col-md-3">
    <div class="widget no-box">
    <h5 class="widget-title">Quick Links<span></span></h5>
    <ul class="thumbnail-widget">
    <li>
    <div class="thumb-content"><a href="#.">Docs</a></div>
    </li>
    <li>
    <div class="thumb-content"><a href="#.">Blog</a></div>
    </li>
    <li>
    <div class="thumb-content"><a href="#.">Privacy-Policy</a></div>
    </li>
    <li>
    <div class="thumb-content"><a href="#.">Legal-statement</a></div>
    </li>
    <li>
    <div class="thumb-content"><a href="#.">About</a></div>
    </li>
    </ul>
    </div>
    </div>

    <div class="col-xs-12 col-sm-6 col-md-3">
    <div class="widget no-box">
    <h5 class="widget-title">Newsletter<span></span></h5>
    <p>Get the lastest news delivered right to your inbox.</p>
    <a class="btn" href="https://greenaces.site/newsletter.html" target="_blank">Sign Up</a>
    </div>
    </div>

    <div class="col-xs-12 col-sm-6 col-md-3">

    <div class="widget no-box">
    <h5 class="widget-title">Contact:<span></span></h5>

    <p><a href="mailto:greenaces@greenaces.site" title="glorythemes">greenaces@greenaces.site</a></p>
    <ul class="social-footer2">
    <li class=""><a title="YouTube" target="_blank" href="https://www.youtube.com/channel/UC63jUz00mGHXB7pdtzT-vEw"><img alt="YouTube" width="30" height="30" src="https://greenaces.site/5DFbHhuN/images/other/YouTube_23392.png"/></a></li>
    <li class=""><a href="https://www.tiktok.com/@greenacesgames" target="_blank" title="TikTok"><img alt="TikTok" width="30" height="30" src="https://greenaces.site/5DFbHhuN/images/other/tiktok_logo_icon_187324.png"/></a></li>
    <li class=""><a href="https://twitter.com/GreenAces_" target="_blank" title="Twitter"><img alt="Twitter" width="30" height="30" src="https://greenaces.site/5DFbHhuN/images/other/twitter_logo_icon_187318.png"/></a></li>
    <li class=""><a title="Github" target="_blank" href="https://github.com/GreenAces/skills"><img alt="GitHub" width="30" height="30" src="https://greenaces.site/5DFbHhuN/images/greenaces_logo/github_logo.png"/></a></li>



    </ul>
    </div>
    </div>

    </div>
    </div>
    </div>

    <div class="footer-copyright">
    <div class="container">
    <div class="row">
    <div class="col-md-12 text-center">
    <p>Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved.</p>
    </div>
    </div>
    </div>
    </div>
    </footer>

  );
};

export default Footer;
