import logo from './greenAcesLogo.png';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutGreenAces from './routes/AboutGreenAces';
import {Routes, Route} from 'react-router-dom';

function GreenAcesApp() {
  return (
    <div className="GreenAcesApp">
      <Header />

          <Routes>

            
            <Route index element={<Home />} />
            <Route path="AboutGreenAces" element={<AboutGreenAces />} />
            <Route path="*" element={<p>Not found!</p>} />
      
          </Routes>

      <Footer />
    </div>
   
  );
}

export default GreenAcesApp;
