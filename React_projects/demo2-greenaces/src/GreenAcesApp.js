import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Lucky7 from './pages/Lucky7';
import PokemonGame from './pages/PokemonGame';
import Demo from './pages/Demo';
import PrivacyPolicy from './pages/GreenAcesPrivacyPolicy';
import LegalStatement from './pages/GreenAcesLegalStatement';
import AboutGreenAces from './pages/AboutGreenAces';
import Thanks from './pages/thanks';
import NotFound from './pages/NotFound';
import {Routes, Route} from 'react-router-dom';



function GreenAcesApp() {
 


  return (
    
    <div className="GreenAcesApp">
      
      <Header />

          <Routes>

          
            <Route index element={<Home />} /> 
            <Route path={"/Lucky7"} element={<Lucky7 />} /> 
            <Route path={"/PokemonGame"} element={<PokemonGame />} /> 
            <Route path={"/Demo"} element={<Demo />} /> 
            <Route path={"/PrivacyPolicy"} element={<PrivacyPolicy />} /> 
            <Route path={"/LegalStatement"} element={<LegalStatement />} /> 
            <Route path={"/AboutGreenAces"} element={<AboutGreenAces />} />
            <Route path={"/Thanks"} element={<Thanks />} />  
            <Route path="*" element={<NotFound />} />
      
          </Routes>
          
          <Footer />
        
    </div>
   
   );

}

export default GreenAcesApp;
