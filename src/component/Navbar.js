import React, { useState } from 'react'
import Logo from "../assests/logo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { Link } from 'react-router-dom';


export default function Navbar() {
  const [vis,setVis] = useState("none")

  return (
    <div className='w-full h-[76px] flex fixed px-[6vw] tb:h-[70px] lm:h-[65px] z-50 justify-between items-center bg-transparent backdrop-blur-[4px] '>
      <div className="flex items-center gap-5">
        <img src={Logo} className='w-10 h-10 rounded-full tb:w-11 tb:h-11' alt="bvv" />
        <Link to="/" className=' text-[1.7vw]  font-semibold tb:text-[2.5vw] lm:text-[4vw]'>Aman Gupta</Link>
        <div className="flex gap-1 lm:hidden">
        <FaLinkedin className='w-7 h-6 cursor-pointer' onClick={()=>window.open("https://www.linkedin.com/in/aman-gupta-721953250/")}/>
        <FaSquareGithub className='w-7 h-6 cursor-pointer' onClick={()=>window.open("https://github.com/amangupta100")}/>
        </div>
      </div>
       <div className="flex gap-8 lm:hidden" onClick={()=>{alert("aam")}} style={{display:vis}}>
       <a href='#' className='tb:text-[2.1vw] text-slate-400 hover:text-white hover:scale-[1.1] transition-all '>About</a>
       <a href='#' className='tb:text-[2.1vw] text-slate-400 hover:text-white hover:scale-[1.1] transition-all '>Project</a>
       <a href='#' className='tb:text-[2.1vw] text-slate-400 hover:text-white hover:scale-[1.1] transition-all '>Contact</a>
       </div>
       <div className="hidden lm:inline-block" onClick={()=>alert("aam")}>
        {/* {vis? <h1>X</h1>:null
         } */}
        <div className="w-[3vw] h-[0.5vw] bg-white my-[1vw]"></div>
        <div className="w-[5.7vw] h-[0.5vw] bg-white my-[1vw]"></div>
        <div className="w-[5.7vw] h-[0.5vw] bg-white my-[1vw] "></div>
       </div>

       

    </div>
  )
}
