import React from 'react'
import StarsCanvas from './styles/Stars'
import Project from './Project'

export default function ProjectCombo() {
  return (
    <div>
      <div className="relative z-50" id='Project'>
      <Project/>
     <StarsCanvas/>
     </div>
    </div>
  )
}
