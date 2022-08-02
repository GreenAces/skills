import React from "react";
import sample from '../src/images/sample.png';

export default function Header() {

  return (

    <header>
    <nav>
    <img src={sample} alt="God of War" className="nav-logo"/>
    <ul className="nav-items">
    <li><a href = "#">Pricing</a></li>
    <li><a href = "#">About</a></li>
    <li><a href = "#">Contact</a></li>
    </ul>
    </nav>
    </header>

  )
}
