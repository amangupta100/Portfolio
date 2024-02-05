import React from 'react'
import About from './component/About';
import ContactCombo from './component/ContactCombo';
import Hero from './component/Hero';
import Project from './component/Project';
import {Routes,Route} from "react-router-dom"
import Skills from './component/Skills';
import Navbar from './component/Navbar';

export default function Combined() {

  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <ContactCombo/>
    </div>
  )
}
