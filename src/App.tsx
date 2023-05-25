import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './page/Home';
import { Nav } from './components/Nav';
import { Story } from './page/Story';
import { About } from './page/About';
import { LookBook } from './page/LookBook';

export const App:FC = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/about" element={<About />} />
        <Route path="/lookbook" element={<LookBook />} />
      </Routes>
    </div>
  );
};