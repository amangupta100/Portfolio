import React from 'react'
import Contact from './Contact';
import StarsCanvas from './styles/Stars'

export default function ContactCombo() {
  return (
    <div>
       <div className="relative z-0" id='Contact'>
      <Contact/>
     <StarsCanvas/>
     </div>
    </div>
  )
}
