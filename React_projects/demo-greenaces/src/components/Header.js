import React from 'react';
import Navbar from './Navbar';
import GreenAcesLogo from '../images/GreenAces-logo.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
          <img src={GreenAcesLogo} alt="GreenAces Logo" />
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
