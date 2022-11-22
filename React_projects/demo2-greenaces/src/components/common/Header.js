import React from 'react';
import {Link} from 'react-router-dom';

function Header() {

    return (
        <React.Fragment>
                  <div id="header">

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<div className="container">
<Link to="/" className="navbar-brand" href="https://greenaces.site"><img id="GreenAcesNavbarBrand" src = "https://greenaces.site/5DFbHhuN/images/greenaces_logo/GreenAces-logo.jpg" alt= "GreenAces-logo"></img></Link>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownProjects" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Projects
      </a>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdownProjects">
        <li><a className="dropdown-item" href="#"><b>Browser Games</b></a></li>
        
        <li><a className="dropdown-item" href="https://greenaces.site/lucky7.html">Lucky 7</a></li>
        <li><a className="dropdown-item" href="https://greenaces.site/pokemon.html">Pokemon</a></li>
      </ul>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownAndroid" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Andriod
      </a>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdownProjects">
        <li><a className="dropdown-item" href="#"><b>Apps</b></a></li>
        
        <li><a className="dropdown-item" href="#">App 1</a></li>
        <li><a className="dropdown-item" href="#">App 2</a></li>
      </ul>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownOther" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Other
      </a>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdownOther">
        <li><Link to="/AboutGreenAces"className="dropdown-item" href="#">About GreenAces</Link></li>
        
        <li><a className="dropdown-item" href="https://greenaces.site/practice.html">Test 2</a></li>
        
        <li><a className="dropdown-item" href="https://greenaces.site/pokemonForm.php">Test 3</a></li>
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