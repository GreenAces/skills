import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

// styles
import './App.css'; //needed for GreenAces Navbar
import './AboutGreenAces.css'; //needed for AboutGreenAces.js
import './Footer.css'; //needed for Footer.js

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
