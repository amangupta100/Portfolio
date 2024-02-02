import React,{useState} from 'react'
import bg from "../assests/herobg.png"
import "./styles/HomePage.css"
import Computer from '../component/styles/Computers'
import { motion } from "framer-motion"
import Typewriter from 'typewriter-effect';
import Logo from "../assests/logo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { Link } from 'react-router-dom';



export default function Hero() {
  const [vis,setVis] = useState("hidden")
  const showMenu = () =>{
    setVis(!vis)
  }
  return (
    <div className='cont flex flex-col lm:h-[110vh] w-full' style={{
        backgroundImage:`url(${bg})`,backgroundPosition:"center",backgroundSize:"cover" }}>
   

          <div className="w-full h-[76px] flex fixed px-[6vw] tb:h-[70px] lm:h-[65px] z-50 justify-between items-center bg-transparent backdrop-blur-[4px] ">
          <div className="flex items-center gap-5">
        <img src={Logo} className='w-10 h-10 rounded-full tb:w-11 tb:h-11' alt="bvv" />
        <Link to="/" className=' text-[1.7vw]  font-semibold tb:text-[2.5vw] lm:text-[4vw]'>Aman Gupta</Link>
        <div className="flex gap-1 lm:hidden">
        <FaLinkedin className='w-7 h-6 cursor-pointer' onClick={()=>window.open("https://www.linkedin.com/in/aman-gupta-721953250/")}/>
        <FaSquareGithub className='w-7 h-6 cursor-pointer' onClick={()=>window.open("https://github.com/amangupta100")}/>
        </div>
      </div>
       {
        vis?<div className="hidden lm:inline-block" onClick={()=>showMenu()}>
        <div className="w-[3vw] h-[0.5vw] bg-white my-[1vw]"></div>
        <div className="w-[5.7vw] h-[0.5vw] bg-white my-[1vw]"></div>
        <div className="w-[5.7vw] h-[0.5vw] bg-white my-[1vw] "></div>
       </div>:
       <button className='text-[6vw] ' onClick={()=>showMenu()}>X</button>
       }
       
          </div>
    
    <div className="py-[9vw] px-[12vw] flex flex-col tb:px-[6vw]">
    <div className="flex gap-10 align-baseline w-[72%]  tb:my-[10vw] tb:w-[85%]  lm:gap-5 lm:h-[45vw] lm:my-[25vw]">
      <div className="design flex flex-col">
        <div className="w-6 h-6 bg-violet-500 rounded-full tb:w-5 tb:h-5"></div>
        <div className="w-[3px] mx-[10px] tb:mx-[9px] h-[350px] bg-gradient-to-b from-violet-600 lm:rounded-full  rounded-full"></div>
      </div>
      <div >
      <h1 className='text-[5vw] font-[700] lm:text-[8vw] ' id='name'> <label htmlFor="" className='text-[5vw] font-semibold tb:text-[3.8vw] lm:text-[5vw] inline-block'><Typewriter
  options={{
    strings: ['Hello', 'नमस्ते'],
    autoStart: true,
    loop: true,
  }}
/></label> , I'm Aman</h1>
        <p className='text-[1.8vw] font-[400] tb:text-[3vw] lm:text-[4.8vw] '>I develop responsive user interfaces , web applications and 3d visuals</p>
      </div>
     </div>

     <div className="w-[60%] h-[550px] tb:-my-[70vw] lm:-my-[62vw] lm:w-[120%] lm:-mx-[18vw] lm:h-[370px] mx-[15vw] -my-[27vw] flex items-center justify-center">
    <Computer/>
    </div>
    </div>
    


    <div className="w-[31px] h-[58px] border-[3.4px] flex items-center justify-center absolute bottom-4 left-[50%] rounded-t-full rounded-b-full">
      <motion.div animate={{y:[0,17,0]}} transition={{duration:1.5,repeat:Infinity,repeatType:"mirror"}} className="w-[8px] h-[11px] rounded-full bg-slate-400"></motion.div>
    </div>
 
    <div className="flex flex-col items-center justify-center opacity-0 z-100000 lm:opacity-[1] absolute lm:visible backdrop-blur-[10px] top-[65px] right-0 w-[100%] h-[100%]" style={{visibility:vis?"hidden":"visible"}}>
    <a  href=""  className='text-[5.7vw] '>About</a>
     <a href="" className='text-[5.7vw] '>Contact</a>
     <a href="" className='text-[5.7vw] '>Project</a>
     <a href="" className='text-[5.7vw] '>Testimonials</a>
    </div>

    </div>
  )
}
