import React, { useState } from 'react'
import Earth from '../component/styles/Earth'
import {motion} from 'framer-motion'

export default function Contact() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [subject,setSubject] = useState("")
  const [load,setLoad] = useState("")
  return (
    <div className='w-full min-h-[115vh] tb:min-h-[230vh] lm:min-h-[150vh] flex justify-center'>
        <div className="flex w-[90%] min-h-[108vh] tb:min-h-[155vh] lm:min-h-[150vh] -gap-5 tb:flex-col-reverse tb:items-center">
         
        <div className="flex flex-col w-[45%] h-[110vh] lm:h-[100vh] tb:w-[90%] lm:w-[95%] rounded-lg bg-gradient-to-br from-[rgb(5,8,22)] to-[rgb(32,39,70)] px-[5vw] py-[4vw] mx-[2vw] ">
         <h1 className='uppercase text-gray-400 text-[1.4vw] tb:text-[2vw] font-medium lm:text-[4vw] '>Get in touch</h1>
         <h1 className='text-[5vw] font-bold tb:text-[6.5vw] lm:text-[8vw] bg-gradient-to-r   from-[rgb(233,251,255)] to-[#2496B3] inline-block text-transparent bg-clip-text  '>Contact.</h1>
         
         <form action="" onSubmit={(e)=>e.preventDefault()}>
         <div className="flex flex-col gap-4">
          <label htmlFor="" className='font-normal text-[1.3vw] tb:text-[1.9vw] lm:text-[4vw] '>Your Name*</label>
          <input type="text" placeholder='Aman Gupta' className='px-[2vw] py-[1vw] lm:text-[3.5vw] lm:p-[3vw] rounded-xl bg-[rgb(21,16,48)] text-[1.1vw] tb:py-[2vw] tb:text-[2vw] focus:outline-0' value={name} onChange={(e)=>setName(e.target.value)}/>

          <label htmlFor="" className='font-normal text-[1.3vw] tb:text-[1.9vw] lm:text-[4vw]'>Your Email*</label>
          <input type="text" placeholder='coderamang02@gmail.com' className='px-[2vw] lm:text-[3.5vw] lm:p-[3vw] py-[1vw] rounded-xl bg-[rgb(21,16,48)] tb:text-[2vw] tb:py-[2vw] text-[1.1vw] focus:outline-0' value={email} onChange={(e)=>setEmail(e.target.value)}/>

          <label htmlFor="" className='font-normal text-[1.3vw] tb:text-[1.9vw] lm:text-[4vw]'>Your Message*</label>
          <textarea cols={30} rows={5} placeholder='What do you want to say?' className='px-[2vw] py-[1vw] lm:text-[3.5vw] lm:px-[3vw] rounded-xl tb:text-[2vw] tb:px-[3vw] tb:py-[2vw] bg-[rgb(21,16,48)] text-[1.1vw] focus:outline-0' value={subject} onChange={(e)=>setSubject(e.target.value)}/>
          
          </div>
          <button className='bg-[rgb(21,16,48)] my-[2vw] hover:bg-slate-700 duration-200 transition-all tran lm:w-[25vw] w-[8vw] h-[10vh] tb:w-[12vw] rounded-lg lm:my-[5vw] p-[1vw] text-xl font-medium'>Send</button>
         </form>
         </div>

         <motion.div className='w-[50%] cursor-grab tb:w-[80%] h-[110vh] lm:w-[100%] lm:h-[62vh]'>
           <Earth/>
           </motion.div>
        </div>
    </div>
  )
}
