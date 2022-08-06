
import './App.css';
import Hero from "./components/hero/Hero" 
import Navbar from './components/navbar/Navbar';
import MainSection from './components/sections/MainSection';
import PressRealese from './components/sections/press/PressRealese';
import Albo from './components/sections/albo/Albo';

import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  { BreakpointProvider } from 'react-socks';

function App() {

  return (
  <BrowserRouter>
    <div className="App">
      <Navbar />
      <Home />
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="press" element={<PressRealese />} />
      <Route path="albo" element={<Albo />} />
    </Routes>
  </BrowserRouter>
  );
}
export default App;

export function Home() {
  return (
    <>
      <BreakpointProvider>
        <Hero />
        <MainSection />
      </BreakpointProvider>
    </>
  )
}
