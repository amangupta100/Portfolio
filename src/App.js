import './App.css';
import About from './component/About';
import Hero from './component/Hero';
import {BrowserRouter} from 'react-router-dom'
import Project from './component/Project';
import Contact from './component/Contact';
import StarsCanvas from './component/styles/Stars'

function App() {
  return (
    <div>
   <BrowserRouter>
     <Hero/>
     <About/>
     <Project/>
     <div className="relative z-0">
      <Contact/>
     <StarsCanvas/>
     </div>

   </BrowserRouter>

    </div>
  );
}

export default App;
