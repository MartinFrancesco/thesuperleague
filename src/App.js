
import './App.css';
import Hero from "./components/hero/Hero" 
import Navbar from './components/navbar/Navbar';
import MainSection from './components/sections/MainSection';

import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PressRealese from './components/sections/press/PressRealese';

function App() {
  const [isHome, setHome] = useState(true);

  return (
  <BrowserRouter>
    <div className="App">
      <Navbar />
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="press" element={<PressRealese />} />
    </Routes>
  </BrowserRouter>
  );
}
export default App;

export function Home() {
  return (
    <>
      <Hero />
      <MainSection />
    </>
  )
}
