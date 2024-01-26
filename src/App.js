import './App.css';
import About from './component/About';
import Hero from './component/Hero';
import Navbar from './component/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Project from './component/Project';
import Contact from './component/Contact';
import StarsCanvas from './component/styles/Stars';



function App() {
  return (
    <div className='overflow-x-hidden'>
     <Navbar/>
     <Hero/>
     <About/>
     <Project/>
     <div className="relative z-0">
     <Contact/>
     <StarsCanvas/>
     </div>
    </div>
  );
}

export default App;
