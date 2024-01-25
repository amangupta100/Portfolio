import React, { useState } from 'react'
import Logo from "../assests/logo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";


export default function Navbar(props) {
  const [vis,setVis] = useState(null)
  return (
    <div className='w-full h-[80px] flex fixed px-[6vw] tb:h-[70px] lm:h-[60px] z-50 overflow-x-hidden justify-between items-center bg-transparent backdrop-blur-[6px] '>
      <div className="flex items-center gap-5">
        <img src={Logo} className='w-10 h-10 rounded-full tb:w-11 tb:h-11' alt="bvv" />
        <a className=' text-[1.7vw]  font-semibold tb:text-[2.5vw] lm:text-[4vw]' href="#">Aman Gupta</a>
        <div className="flex gap-1 lm:hidden">
        <FaLinkedin className='w-7 h-6 cursor-pointer'/>
        <FaSquareGithub className='w-7 h-6 cursor-pointer'/>
        </div>
      </div>
       <div className="flex gap-8 lm:hidden">
       <a href="" className='tb:text-[2.1vw] '>About</a>
       <a href="" className='tb:text-[2.1vw] '>Project</a>
       <a href="" className='tb:text-[2.1vw] '>Contact</a>
       </div>
       <div className="hidden lm:inline-block" onClick={()=>alert("aam")}>
        <div className="w-[3vw] h-[0.5vw] bg-white my-[1vw]"></div>
        <div className="w-[5.7vw] h-[0.5vw] bg-white my-[1vw]"></div>
        <div className="w-[5.7vw] h-[0.5vw] bg-white my-[1vw] "></div>
       </div>

    </div>
  )
}
