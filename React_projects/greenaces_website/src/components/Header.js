import React from 'react';
import {Link} from 'react-router-dom';
import GreenAcesImage from '../assets/images/logos/Watermark.png';
import '../styles/HeaderNav.css';

function Header() {

    return (


        <React.Fragment>

<div id="header">
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<div className="container-fluid">
<Link to="/" className="navbar-brand"><img id="GreenAcesNavbarBrand" src = {GreenAcesImage} alt= "GreenAces-logo"></img></Link>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownProjects" role="button" data-bs-toggle="dropdown" aria-expanded="false">
       GTA
      </a>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdownProjects">
        <li><a className="dropdown-item"  id="label-row-browser-games"><b>Games</b></a></li>
        
       
      </ul>
    </li>

    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownOther" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Other
      </a>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdownOther">
        <li><a className="dropdown-item" id="label-row-Stuff" ><b>Stuff</b></a></li>



      </ul>
    </li>
  </ul>
</div>
</div>
</nav>

</div>


        </React.Fragment>

    );
}

export default Header;