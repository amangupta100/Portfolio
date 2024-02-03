import './App.css';
import About from './component/About';
import ContactCombo from './component/ContactCombo';
import Hero from './component/Hero';
import Project from './component/Project';
import {Routes,Route} from "react-router-dom"
import Skills from './component/Skills';


function App() {
  return (
    <div className='overflow-x-hidden'>
  
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <ContactCombo/>
  
    </div>
  );
}

export default App;
