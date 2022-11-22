import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../routes/Home';
import AboutGreenAces from '../routes/AboutGreenAces';
import Lucky7 from '../routes/Lucky7';
import Pokemon from '../routes/Pokemon';
import UnityGame1 from '../routes/UnityGame1';
import UnityGame2 from '../routes/UnityGame2';
import AndriodGame1 from '../routes/AndriodGame1';
import AndriodGame2 from '../routes/AndriodGame2';
import Layout from './Layout';




const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="GreenAces" element={<AboutGreenAces />} />
          <Route path="Lucky7" element={<Lucky7 />} />
          <Route path="Pokemon" element={<Pokemon />} />
          <Route path="Game1" element={<UnityGame1 />} />
          <Route path="Game2" element={<UnityGame2 />} />
          <Route path="Game3" element={<AndriodGame1 />} />
          <Route path="Game4" element={<AndriodGame2 />} />
         <Route path="*" element={<p>Not found!</p>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
