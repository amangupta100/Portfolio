import './App.css';
import Hero from './component/Hero';
import About from './component/About';
import ContactCombo from './component/ContactCombo';
import Skills from './component/Skills';
import Project from './component/Project'
import { useEffect, useState } from 'react';
import {motion} from 'framer-motion'

function App() {
  const [pos,setPos] = useState({x:0,y:0})
  useEffect(()=>{
    document.addEventListener("mousemove",(e)=>{
      setPos({ x: e.clientX+10, y: e.clientY+10 });
    })
  })
  return (
    <div>
      <motion.div transition={{duration:0.6,delay:0.4}}  className="w-[35px] h-[35px] bg-slate-400 backdrop-blur-[3px] mix-blend-difference fixed pointer-events-none z-[9999999] rounded-full lm:hidden" style={{left:`${pos.x}px`,top:`${pos.y}px`}} >
      </motion.div>
    <Hero/>
    <About/>
    <Skills/>
    <Project/>
    <ContactCombo/>
    </div>
  );
}

export default App;
