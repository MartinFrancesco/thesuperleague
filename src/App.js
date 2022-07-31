
import './App.css';
import Hero from "./components/hero/Hero" 
import Navbar from './components/navbar/Navbar';
import MainSection from './components/sections/MainSection';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import PressRealese from './components/sections/press/PressRealese';

function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <Navbar />
      {/* <Sidebar /> */}
      <Hero />
      <MainSection />
    </div>
    <Routes>
      <Route path="/pressRealese" element={<PressRealese />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
