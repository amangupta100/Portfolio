import React from 'react'
import bg from "../assests/herobg.png"
import "./styles/HomePage.css"
import Computer from '../component/styles/Computers'
import { motion } from "framer-motion"



export default function Hero() {
  return (
    <div className='cont py-[9vw] px-[12vw] flex flex-col tb:px-[6vw] lm:h-[110vh] w-full' style={{
        backgroundImage:`url(${bg})`,backgroundPosition:"center",backgroundSize:"cover" }}>


     
     <div className="flex gap-10 align-baseline w-[50%]  tb:my-[10vw] tb:w-[85%]  lm:gap-5 lm:h-[45vw] lm:my-[18vw]">
      <div className="design flex flex-col">
        <div className="w-6 h-6 bg-violet-500 rounded-full tb:w-5 tb:h-5"></div>
        <div className="w-[3px] mx-[10px] tb:mx-[9px] h-[350px] bg-gradient-to-b from-violet-600  rounded-full"></div>
      </div>
      <div className="name">
        <h1 className='text-[5vw] font-[700] lm:text-[6.5vw] '> Hi,I'm Aman</h1>
        <p className='text-[1.8vw] font-[400] tb:text-[3vw] lm:text-[4vw] '>I develop responsive user interfaces , web applications and 3d visuals</p>
      </div>
     </div>

     <div className="w-[100%] h-[500px] tb:-my-[70vw] lm:hidden -my-[25vw] lm:none flex items-center justify-center">
    <Computer/>
    </div>

    
    
    <div className="w-[31px] h-[58px] border-[3.4px] flex items-center justify-center absolute bottom-4 left-[50%] rounded-t-full rounded-b-full">
      <motion.div animate={{y:[0,17,0]}} transition={{duration:1.5,repeat:Infinity,repeatType:"mirror"}} className="w-[8px] h-[11px] rounded-full bg-slate-400"></motion.div>
    </div>
   
    </div>
  )
}
