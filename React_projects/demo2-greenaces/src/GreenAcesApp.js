import logo from './greenAcesLogo.png';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Lucky7 from './pages/Lucky7';
import Pokemon from './pages/Pokemon';
import Demo from './pages/Demo';
import AboutGreenAces from './pages/AboutGreenAces';
import NotFound from './pages/NotFound';
import {Routes, Route} from 'react-router-dom';



function GreenAcesApp() {
  return (
    
    <div className="GreenAcesApp">
      
      <Header />

          <Routes>

            
            <Route index element={<Home />} />
            <Route path={"/Lucky7"} element={<Lucky7 />} /> 
            <Route path={"/Pokemon"} element={<Pokemon />} /> 
            <Route path={"/Demo"} element={<Demo />} /> 
            <Route path={"/AboutGreenAces"} element={<AboutGreenAces />} /> 
            <Route path="*" element={<NotFound />} />
      
          </Routes>
          
          <Footer />
        
    </div>
   
   );

}

export default GreenAcesApp;
