
import './App.css';
import Hero from "./components/hero/Hero" 
import Navbar from './components/navbar/Navbar';
import MainSection from './components/sections/MainSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <MainSection />
    </div>
  );
}

export default App;
