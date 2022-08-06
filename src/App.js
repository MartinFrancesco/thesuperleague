
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import PressRealese from './components/sections/press/PressRealese';
import Albo from './components/sections/albo/Albo';

import React from 'react';
import { BrowserRouter, Route, Routes, Navigate, Link } from "react-router-dom";
import  { BreakpointProvider } from 'react-socks';

function App() {

  return (

    <div className="App">
      <BrowserRouter>
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="press" element={<PressRealese />} />
              <Route path="albo" element={<Albo />} />

              {/* White Card / pag 404 component */}
              <Route 
                path="/"
                element={
                  <Navigate to="/" />
                }
              />
              {/* Regola pagina di Default sito */}
              <Route 
                path="*"
                element={
                  <div>
                    <p>This page does not exist</p>
                    <Link to="/">Go to Homepage</Link>
                  </div>
                }
              />
            </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
