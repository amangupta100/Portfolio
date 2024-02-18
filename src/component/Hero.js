import React,{useState} from 'react'
import bg from "../assests/herobg.png"
import "./styles/HomePage.css"
import Computer from '../component/styles/Computers'
import { motion } from "framer-motion"
import Typewriter from 'typewriter-effect';
import Logo from "../assests/logo.png"
import {Link} from "react-scroll"
import { NavLink } from 'react-router-dom'

export default function Hero() {
  const [vis,setVis] = useState("hidden")
  const showMenu = () =>{
    setVis(!vis)
  }
  const handleActive = (name) =>{
console.log(name)
  }
  return (
    <div className='cont flex flex-col lm:h-[105vh] w-full' style={{
        backgroundImage:`url(${bg})`,backgroundPosition:"center",backgroundSize:"cover" }} id='Home'>

<div className="w-full h-[76px] flex fixed px-[6vw] tb:h-[70px] lm:h-[65px] z-[99999] justify-between items-center bg-transparent backdrop-blur-[4px] ">
          <div className="flex items-center gap-5">
       <div className="flex items-center gap-3">
       <img src={Logo} className='w-10 h-10 rounded-full tb:w-11 tb:h-11' alt="bvv" />
        <Link to="Home"  className=' text-[1.7vw]  font-normal tb:text-[2.5vw] lm:text-[4vw] cursor-pointer'>Aman Gupta</Link>
       </div>
      
       
      </div>
      <div className="flex gap-8 lm:hidden">
        <Link to='About'     className=" relative cursor-pointer text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-slate-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right">About</Link>
        <Link to='Skills'   className=" relative cursor-pointer text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-slate-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right">Skills</Link>
        <Link to='Project' className=" relative cursor-pointer text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-slate-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right">Project</Link>
        <Link to='Contact' className=" relative text-xl w-fit cursor-pointer block after:block after:content-[''] after:absolute after:h-[3px] after:bg-slate-400 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-right">Contact</Link>
      </div>
       {
        vis?<div className="hidden lm:inline-block duration-500" onClick={()=>showMenu()}>
        <div className="w-[3vw] h-[0.5vw] bg-white my-[1vw]"></div>
        <div className="w-[5.7vw] h-[0.5vw] bg-white my-[1vw]"></div>
        <div className="w-[5.7vw] h-[0.5vw] bg-white my-[1vw] "></div>
       </div>:
       <button className='text-[6vw] ' onClick={()=>showMenu()}>X</button>
       }
       
          </div>

          <div className="flex flex-col justify-center fixed gap-3 top-[40%] right-[1.5%] lm:hidden z-[999] ">
          <svg onClick={()=>window.open("https://www.linkedin.com/in/aman-gupta-721953250/","_blank")} width="36" className='hover:-translate-x-[8px] cursor-pointer duration-300 transition-all' height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path className="fill" d="M20 0C8.95599 0 0 8.95599 0 20C0 31.044 8.95599 40 20 40C31.044 40 40 31.044 40 20C40 8.95599 31.044 0 20 0ZM14.1882 30.2344H9.31732V15.5801H14.1882V30.2344ZM11.7529 13.5791H11.7212C10.0867 13.5791 9.02954 12.4539 9.02954 11.0477C9.02954 9.60968 10.119 8.51562 11.7853 8.51562C13.4515 8.51562 14.4769 9.60968 14.5087 11.0477C14.5087 12.4539 13.4515 13.5791 11.7529 13.5791ZM31.7517 30.2344H26.8814V22.3947C26.8814 20.4245 26.1761 19.0808 24.4138 19.0808C23.0682 19.0808 22.2668 19.9872 21.9147 20.8621C21.7859 21.1752 21.7545 21.6129 21.7545 22.0508V30.2344H16.8839C16.8839 30.2344 16.9476 16.955 16.8839 15.5801H21.7545V17.655C22.4017 16.6565 23.5599 15.2362 26.1441 15.2362C29.3488 15.2362 31.7517 17.3306 31.7517 21.8317V30.2344Z" fill="white"/>
</svg>
<svg onClick={()=>window.open("https://github.com/amangupta100","_blank")} width="36" height="36" className='hover:-translate-x-[8px] cursor-pointer duration-300 transition-all' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 0C8.95667 0 0 8.955 0 20C0 28.8367 5.73 36.3333 13.6783 38.9783C14.6767 39.1633 15 38.5433 15 38.0167V34.2933C9.43667 35.5033 8.27833 31.9333 8.27833 31.9333C7.36833 29.6217 6.05667 29.0067 6.05667 29.0067C4.24167 27.765 6.195 27.7917 6.195 27.7917C8.20333 27.9317 9.26 29.8533 9.26 29.8533C11.0433 32.91 13.9383 32.0267 15.08 31.515C15.2583 30.2233 15.7767 29.34 16.35 28.8417C11.9083 28.3333 7.23833 26.6183 7.23833 18.9567C7.23833 16.7717 8.02 14.9883 9.29833 13.5883C9.09167 13.0833 8.40667 11.0483 9.49333 8.295C9.49333 8.295 11.1733 7.75833 14.995 10.345C16.59 9.90167 18.3 9.68 20 9.67167C21.7 9.68 23.4117 9.90167 25.01 10.345C28.8283 7.75833 30.505 8.295 30.505 8.295C31.5933 11.05 30.9083 13.085 30.7017 13.5883C31.985 14.9883 32.76 16.7733 32.76 18.9567C32.76 26.6383 28.0817 28.33 23.6283 28.825C24.345 29.445 25 30.6617 25 32.5283V38.0167C25 38.5483 25.32 39.1733 26.335 38.9767C34.2767 36.3283 40 28.8333 40 20C40 8.955 31.045 0 20 0Z" fill="white"/>
</svg>
<svg width="36" height="36" onClick={()=>window.open("https://twitter.com/AmanGup15595253","_blank")} className='hover:-translate-x-[8px] cursor-pointer duration-300 transition-all' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="fill" d="M20 0C8.96552 0 0 8.96552 0 20C0 31.0345 8.96552 40 20 40C31.0345 40 40 31.0345 40 20.0406C40 9.00609 31.0345 0.040568 20 0ZM24.2191 10.4665C24.1785 10.5071 24.1379 10.5071 24.1379 10.4665C24.1785 10.4665 24.2191 10.4665 24.2191 10.4665ZM31.6024 12.7789C31.6024 12.8195 31.6024 12.9817 31.4807 13.144C30.9128 13.8742 30.3448 14.5233 29.6146 15.0913C29.4929 15.1724 29.3306 15.2536 29.3306 15.4158C29.3306 19.2698 28.357 23.1237 25.5578 25.9229C21.9878 29.4929 16.5923 30.426 11.8458 29.1278C10.9533 28.8844 10.0609 28.5193 9.20893 28.073C8.92495 27.9107 8.68154 27.7485 8.39757 27.5862C8.31643 27.5051 8.27586 27.4645 8.31643 27.4239C8.39757 27.3834 8.43813 27.3834 8.64097 27.4239C9.97972 27.5456 11.359 27.3428 12.6166 26.8966C13.3063 26.6531 14.7667 26.1663 15.213 25.5172C15.213 25.4767 15.2535 25.4767 15.2535 25.4767C15.0913 25.4361 14.8884 25.4361 14.7262 25.3955C13.428 25.0304 11.7241 24.3813 10.9128 22.1907C10.8316 22.069 10.9128 21.9878 11.0345 22.0284C12.0892 22.1095 12.4949 22.069 12.86 21.9878C12.6572 21.9473 12.4544 21.8661 12.2515 21.785C10.6288 21.1765 9.41177 19.5538 9.20893 17.8499C9.16836 17.6471 9.16836 17.4848 9.16836 17.2819C9.16836 17.1602 9.20893 17.1197 9.33063 17.2819C10.1826 17.7282 11.1156 17.8093 11.1968 17.8093C10.9533 17.6471 10.7911 17.4442 10.5882 17.2819C9.20893 15.9432 8.64097 13.2252 9.77688 11.5213C9.89858 11.3996 9.93915 11.3996 10.0609 11.5213C12.6572 14.4828 15.8215 15.8621 19.6755 16.43C19.7566 16.43 19.7566 16.43 19.7566 16.3083C19.6349 15.6187 19.6349 14.929 19.7972 14.2799C19.9594 13.5903 20.284 12.9412 20.7302 12.3732C21.1765 11.8458 21.7039 11.3996 22.3124 11.0751C22.9209 10.7505 23.6105 10.5477 24.3002 10.5071C24.9899 10.4665 25.7201 10.5477 26.3692 10.8316C26.856 11.0345 27.3022 11.2779 27.7079 11.643C27.789 11.7241 27.8702 11.8053 27.9513 11.8864C28.0325 11.927 28.073 11.9675 28.1542 11.927C29.1278 11.6836 30.0609 11.359 30.9533 10.8722C30.9939 10.8722 31.0345 10.8316 31.0751 10.8722C31.1156 10.9128 31.1156 10.9533 31.0751 10.9939C30.9128 11.5213 30.6288 12.0081 30.3043 12.4138C30.0609 12.6978 29.4929 13.3469 29.1278 13.428C29.9391 13.2657 30.7505 13.0629 31.4807 12.7383C31.6024 12.6978 31.6024 12.6572 31.6024 12.7383V12.7789Z" fill="white"/>
</svg>
<svg onClick={()=>window.open("","_blank")} width="36" height="36" className='hover:-translate-x-[8px] cursor-pointer duration-300 transition-all' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="fill" d="M23.8281 20C23.8281 22.1143 22.1143 23.8281 20 23.8281C17.8857 23.8281 16.1719 22.1143 16.1719 20C16.1719 17.8857 17.8857 16.1719 20 16.1719C22.1143 16.1719 23.8281 17.8857 23.8281 20Z" fill="white"/>
<path class="fill" d="M28.9529 13.2269C28.7689 12.7283 28.4753 12.2769 28.0938 11.9064C27.7233 11.525 27.2723 11.2314 26.7733 11.0474C26.3687 10.8902 25.7607 10.7031 24.6411 10.6522C23.4298 10.5969 23.0667 10.585 20.0002 10.585C16.9335 10.585 16.5704 10.5966 15.3594 10.6519C14.2397 10.7031 13.6315 10.8902 13.2272 11.0474C12.7282 11.2314 12.2769 11.525 11.9067 11.9064C11.5252 12.2769 11.2316 12.728 11.0473 13.2269C10.8901 13.6316 10.7031 14.2398 10.6521 15.3595C10.5969 16.5704 10.585 16.9336 10.585 20.0003C10.585 23.0667 10.5969 23.4299 10.6521 24.6411C10.7031 25.7608 10.8901 26.3687 11.0473 26.7734C11.2316 27.2723 11.5249 27.7234 11.9064 28.0939C12.2769 28.4753 12.7279 28.7689 13.2269 28.9529C13.6315 29.1104 14.2397 29.2975 15.3594 29.3484C16.5704 29.4037 16.9332 29.4153 19.9999 29.4153C23.067 29.4153 23.4301 29.4037 24.6407 29.3484C25.7604 29.2975 26.3687 29.1104 26.7733 28.9529C27.7749 28.5666 28.5665 27.775 28.9529 26.7734C29.11 26.3687 29.2971 25.7608 29.3484 24.6411C29.4036 23.4299 29.4152 23.0667 29.4152 20.0003C29.4152 16.9336 29.4036 16.5704 29.3484 15.3595C29.2974 14.2398 29.1104 13.6316 28.9529 13.2269ZM20.0002 25.8972C16.7431 25.8972 14.1027 23.2571 14.1027 20C14.1027 16.7429 16.7431 14.1028 20.0002 14.1028C23.2571 14.1028 25.8975 16.7429 25.8975 20C25.8975 23.2571 23.2571 25.8972 20.0002 25.8972ZM26.1306 15.2478C25.3695 15.2478 24.7524 14.6307 24.7524 13.8696C24.7524 13.1085 25.3695 12.4915 26.1306 12.4915C26.8917 12.4915 27.5088 13.1085 27.5088 13.8696C27.5085 14.6307 26.8917 15.2478 26.1306 15.2478Z" fill="white"/>
<path class="fill" d="M20 0C8.95599 0 0 8.95599 0 20C0 31.044 8.95599 40 20 40C31.044 40 40 31.044 40 20C40 8.95599 31.044 0 20 0ZM31.4151 24.7348C31.3596 25.9573 31.1652 26.792 30.8813 27.5226C30.2847 29.0652 29.0652 30.2847 27.5226 30.8813C26.7923 31.1652 25.9573 31.3593 24.7351 31.4151C23.5104 31.4709 23.1192 31.4844 20.0003 31.4844C16.8811 31.4844 16.4902 31.4709 15.2652 31.4151C14.043 31.3593 13.208 31.1652 12.4777 30.8813C11.7111 30.593 11.0172 30.141 10.4434 29.5566C9.85931 28.9832 9.40735 28.2889 9.11896 27.5226C8.83514 26.7923 8.64075 25.9573 8.58521 24.7351C8.52875 23.5101 8.51562 23.1189 8.51562 20C8.51562 16.8811 8.52875 16.4899 8.5849 15.2652C8.64044 14.0427 8.83453 13.208 9.11835 12.4774C9.40674 11.7111 9.85901 11.0168 10.4434 10.4434C11.0168 9.85901 11.7111 9.40704 12.4774 9.11865C13.208 8.83484 14.0427 8.64075 15.2652 8.5849C16.4899 8.52905 16.8811 8.51562 20 8.51562C23.1189 8.51562 23.5101 8.52905 24.7348 8.58521C25.9573 8.64075 26.792 8.83484 27.5226 9.11835C28.2889 9.40674 28.9832 9.85901 29.5569 10.4434C30.141 11.0172 30.5933 11.7111 30.8813 12.4774C31.1655 13.208 31.3596 14.0427 31.4154 15.2652C31.4713 16.4899 31.4844 16.8811 31.4844 20C31.4844 23.1189 31.4713 23.5101 31.4151 24.7348Z" fill="white"/>
</svg>
          </div>
    
    <div className="py-[9vw] px-[12vw] flex flex-col tb:px-[6vw]">
    <div className="flex gap-10 align-baseline w-[95%] lm:w-[100%] tb:my-[10vw] tb:w-[85%]  lm:gap-5 lm:h-[45vw] lm:my-[25vw]">
      <div className="design flex flex-col">
        <div className="w-6 h-6 bg-violet-500 rounded-full tb:w-5 tb:h-5"></div>
        <div className="w-[3px] mx-[10px] tb:mx-[9px] h-[350px] bg-gradient-to-b from-violet-600 lm:rounded-full  rounded-full"></div>
      </div>
      <div >
      <h1 className='text-[5vw] font-[700] lm:text-[8vw] bg-gradient-to-r from-[rgb(233,251,255)] to-[#2496B3] inline-block text-transparent bg-clip-text' id='name'> Hii, I'm Aman</h1>
        <p className='text-[1.8vw] font-[400] tb:text-[3vw] lm:text-[4.8vw] '>I , <label htmlFor="" className='text-[1.8vw] font-[400] tb:text-[3vw] lm:text-[4.8vw] inline-block'>
        <Typewriter
  options={{
    strings: ['design responsive user interfaces', 'develop modern frontend webApps','design dynamic user experience'],
    autoStart: true,
    loop: true,
  }}
/>
          </label></p>
      </div>
     </div>

     <div className="w-[60%] h-[550px] tb:-my-[70vw] lm:-my-[65vw] lm:w-[120%] lm:-mx-[20vw] lm:h-[370px] mx-[15vw] -my-[27vw] flex items-center justify-center">
    <Computer/>
    </div>
    </div>
    


    <div className="w-[31px] h-[58px] border-[3.4px] flex items-center justify-center absolute bottom-4 left-[50%] rounded-t-full rounded-b-full">
      <motion.div animate={{y:[0,17,0]}} transition={{duration:1.5,repeat:Infinity,repeatType:"mirror"}} className="w-[7px] h-[12px] rounded-full bg-slate-400"></motion.div>
    </div>
 
    <div className="flex flex-col items-center justify-center opacity-0 lm:z-[9999] lm:opacity-[1] fixed lm:visible backdrop-blur-[10px] top-[65px] right-0 w-[100%] h-[100%]" style={{visibility:vis?"hidden":"visible"}}>
     <NavLink className='text-[5.7vw]'>About</NavLink>
     <NavLink className='text-[5.7vw] '>Skills</NavLink>
     <NavLink className='text-[5.7vw] '>Project</NavLink>
     <NavLink className='text-[5.7vw] '>Contact</NavLink>
     <div className="flex items-center z-[999] gap-4 translate-y-[360%] ">
     <svg onClick={()=>window.open("https://www.linkedin.com/in/aman-gupta-721953250/","_blank")} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="fill" d="M20 0C8.95599 0 0 8.95599 0 20C0 31.044 8.95599 40 20 40C31.044 40 40 31.044 40 20C40 8.95599 31.044 0 20 0ZM14.1882 30.2344H9.31732V15.5801H14.1882V30.2344ZM11.7529 13.5791H11.7212C10.0867 13.5791 9.02954 12.4539 9.02954 11.0477C9.02954 9.60968 10.119 8.51562 11.7853 8.51562C13.4515 8.51562 14.4769 9.60968 14.5087 11.0477C14.5087 12.4539 13.4515 13.5791 11.7529 13.5791ZM31.7517 30.2344H26.8814V22.3947C26.8814 20.4245 26.1761 19.0808 24.4138 19.0808C23.0682 19.0808 22.2668 19.9872 21.9147 20.8621C21.7859 21.1752 21.7545 21.6129 21.7545 22.0508V30.2344H16.8839C16.8839 30.2344 16.9476 16.955 16.8839 15.5801H21.7545V17.655C22.4017 16.6565 23.5599 15.2362 26.1441 15.2362C29.3488 15.2362 31.7517 17.3306 31.7517 21.8317V30.2344Z" fill="royalblue"/>
</svg>
<svg onClick={()=>window.open("https://github.com/amangupta100","_blank")} width="40" height="40" viewBox="0 0 40 40" fill="violet" xmlns="http://www.w3.org/2000/svg">
<path d="M20 0C8.95667 0 0 8.955 0 20C0 28.8367 5.73 36.3333 13.6783 38.9783C14.6767 39.1633 15 38.5433 15 38.0167V34.2933C9.43667 35.5033 8.27833 31.9333 8.27833 31.9333C7.36833 29.6217 6.05667 29.0067 6.05667 29.0067C4.24167 27.765 6.195 27.7917 6.195 27.7917C8.20333 27.9317 9.26 29.8533 9.26 29.8533C11.0433 32.91 13.9383 32.0267 15.08 31.515C15.2583 30.2233 15.7767 29.34 16.35 28.8417C11.9083 28.3333 7.23833 26.6183 7.23833 18.9567C7.23833 16.7717 8.02 14.9883 9.29833 13.5883C9.09167 13.0833 8.40667 11.0483 9.49333 8.295C9.49333 8.295 11.1733 7.75833 14.995 10.345C16.59 9.90167 18.3 9.68 20 9.67167C21.7 9.68 23.4117 9.90167 25.01 10.345C28.8283 7.75833 30.505 8.295 30.505 8.295C31.5933 11.05 30.9083 13.085 30.7017 13.5883C31.985 14.9883 32.76 16.7733 32.76 18.9567C32.76 26.6383 28.0817 28.33 23.6283 28.825C24.345 29.445 25 30.6617 25 32.5283V38.0167C25 38.5483 25.32 39.1733 26.335 38.9767C34.2767 36.3283 40 28.8333 40 20C40 8.955 31.045 0 20 0Z" fill="white"/>
</svg>
<svg onClick={()=>window.open("https://twitter.com/AmanGup15595253","_blank")} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="fill" d="M20 0C8.96552 0 0 8.96552 0 20C0 31.0345 8.96552 40 20 40C31.0345 40 40 31.0345 40 20.0406C40 9.00609 31.0345 0.040568 20 0ZM24.2191 10.4665C24.1785 10.5071 24.1379 10.5071 24.1379 10.4665C24.1785 10.4665 24.2191 10.4665 24.2191 10.4665ZM31.6024 12.7789C31.6024 12.8195 31.6024 12.9817 31.4807 13.144C30.9128 13.8742 30.3448 14.5233 29.6146 15.0913C29.4929 15.1724 29.3306 15.2536 29.3306 15.4158C29.3306 19.2698 28.357 23.1237 25.5578 25.9229C21.9878 29.4929 16.5923 30.426 11.8458 29.1278C10.9533 28.8844 10.0609 28.5193 9.20893 28.073C8.92495 27.9107 8.68154 27.7485 8.39757 27.5862C8.31643 27.5051 8.27586 27.4645 8.31643 27.4239C8.39757 27.3834 8.43813 27.3834 8.64097 27.4239C9.97972 27.5456 11.359 27.3428 12.6166 26.8966C13.3063 26.6531 14.7667 26.1663 15.213 25.5172C15.213 25.4767 15.2535 25.4767 15.2535 25.4767C15.0913 25.4361 14.8884 25.4361 14.7262 25.3955C13.428 25.0304 11.7241 24.3813 10.9128 22.1907C10.8316 22.069 10.9128 21.9878 11.0345 22.0284C12.0892 22.1095 12.4949 22.069 12.86 21.9878C12.6572 21.9473 12.4544 21.8661 12.2515 21.785C10.6288 21.1765 9.41177 19.5538 9.20893 17.8499C9.16836 17.6471 9.16836 17.4848 9.16836 17.2819C9.16836 17.1602 9.20893 17.1197 9.33063 17.2819C10.1826 17.7282 11.1156 17.8093 11.1968 17.8093C10.9533 17.6471 10.7911 17.4442 10.5882 17.2819C9.20893 15.9432 8.64097 13.2252 9.77688 11.5213C9.89858 11.3996 9.93915 11.3996 10.0609 11.5213C12.6572 14.4828 15.8215 15.8621 19.6755 16.43C19.7566 16.43 19.7566 16.43 19.7566 16.3083C19.6349 15.6187 19.6349 14.929 19.7972 14.2799C19.9594 13.5903 20.284 12.9412 20.7302 12.3732C21.1765 11.8458 21.7039 11.3996 22.3124 11.0751C22.9209 10.7505 23.6105 10.5477 24.3002 10.5071C24.9899 10.4665 25.7201 10.5477 26.3692 10.8316C26.856 11.0345 27.3022 11.2779 27.7079 11.643C27.789 11.7241 27.8702 11.8053 27.9513 11.8864C28.0325 11.927 28.073 11.9675 28.1542 11.927C29.1278 11.6836 30.0609 11.359 30.9533 10.8722C30.9939 10.8722 31.0345 10.8316 31.0751 10.8722C31.1156 10.9128 31.1156 10.9533 31.0751 10.9939C30.9128 11.5213 30.6288 12.0081 30.3043 12.4138C30.0609 12.6978 29.4929 13.3469 29.1278 13.428C29.9391 13.2657 30.7505 13.0629 31.4807 12.7383C31.6024 12.6978 31.6024 12.6572 31.6024 12.7383V12.7789Z" fill="white"/>
</svg>
<svg onClick={()=>window.open("","_blank")} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="fill" d="M23.8281 20C23.8281 22.1143 22.1143 23.8281 20 23.8281C17.8857 23.8281 16.1719 22.1143 16.1719 20C16.1719 17.8857 17.8857 16.1719 20 16.1719C22.1143 16.1719 23.8281 17.8857 23.8281 20Z" fill="white"/>
<path class="fill" d="M28.9529 13.2269C28.7689 12.7283 28.4753 12.2769 28.0938 11.9064C27.7233 11.525 27.2723 11.2314 26.7733 11.0474C26.3687 10.8902 25.7607 10.7031 24.6411 10.6522C23.4298 10.5969 23.0667 10.585 20.0002 10.585C16.9335 10.585 16.5704 10.5966 15.3594 10.6519C14.2397 10.7031 13.6315 10.8902 13.2272 11.0474C12.7282 11.2314 12.2769 11.525 11.9067 11.9064C11.5252 12.2769 11.2316 12.728 11.0473 13.2269C10.8901 13.6316 10.7031 14.2398 10.6521 15.3595C10.5969 16.5704 10.585 16.9336 10.585 20.0003C10.585 23.0667 10.5969 23.4299 10.6521 24.6411C10.7031 25.7608 10.8901 26.3687 11.0473 26.7734C11.2316 27.2723 11.5249 27.7234 11.9064 28.0939C12.2769 28.4753 12.7279 28.7689 13.2269 28.9529C13.6315 29.1104 14.2397 29.2975 15.3594 29.3484C16.5704 29.4037 16.9332 29.4153 19.9999 29.4153C23.067 29.4153 23.4301 29.4037 24.6407 29.3484C25.7604 29.2975 26.3687 29.1104 26.7733 28.9529C27.7749 28.5666 28.5665 27.775 28.9529 26.7734C29.11 26.3687 29.2971 25.7608 29.3484 24.6411C29.4036 23.4299 29.4152 23.0667 29.4152 20.0003C29.4152 16.9336 29.4036 16.5704 29.3484 15.3595C29.2974 14.2398 29.1104 13.6316 28.9529 13.2269ZM20.0002 25.8972C16.7431 25.8972 14.1027 23.2571 14.1027 20C14.1027 16.7429 16.7431 14.1028 20.0002 14.1028C23.2571 14.1028 25.8975 16.7429 25.8975 20C25.8975 23.2571 23.2571 25.8972 20.0002 25.8972ZM26.1306 15.2478C25.3695 15.2478 24.7524 14.6307 24.7524 13.8696C24.7524 13.1085 25.3695 12.4915 26.1306 12.4915C26.8917 12.4915 27.5088 13.1085 27.5088 13.8696C27.5085 14.6307 26.8917 15.2478 26.1306 15.2478Z" fill="white"/>
<path class="fill" d="M20 0C8.95599 0 0 8.95599 0 20C0 31.044 8.95599 40 20 40C31.044 40 40 31.044 40 20C40 8.95599 31.044 0 20 0ZM31.4151 24.7348C31.3596 25.9573 31.1652 26.792 30.8813 27.5226C30.2847 29.0652 29.0652 30.2847 27.5226 30.8813C26.7923 31.1652 25.9573 31.3593 24.7351 31.4151C23.5104 31.4709 23.1192 31.4844 20.0003 31.4844C16.8811 31.4844 16.4902 31.4709 15.2652 31.4151C14.043 31.3593 13.208 31.1652 12.4777 30.8813C11.7111 30.593 11.0172 30.141 10.4434 29.5566C9.85931 28.9832 9.40735 28.2889 9.11896 27.5226C8.83514 26.7923 8.64075 25.9573 8.58521 24.7351C8.52875 23.5101 8.51562 23.1189 8.51562 20C8.51562 16.8811 8.52875 16.4899 8.5849 15.2652C8.64044 14.0427 8.83453 13.208 9.11835 12.4774C9.40674 11.7111 9.85901 11.0168 10.4434 10.4434C11.0168 9.85901 11.7111 9.40704 12.4774 9.11865C13.208 8.83484 14.0427 8.64075 15.2652 8.5849C16.4899 8.52905 16.8811 8.51562 20 8.51562C23.1189 8.51562 23.5101 8.52905 24.7348 8.58521C25.9573 8.64075 26.792 8.83484 27.5226 9.11835C28.2889 9.40674 28.9832 9.85901 29.5569 10.4434C30.141 11.0172 30.5933 11.7111 30.8813 12.4774C31.1655 13.208 31.3596 14.0427 31.4154 15.2652C31.4713 16.4899 31.4844 16.8811 31.4844 20C31.4844 23.1189 31.4713 23.5101 31.4151 24.7348Z" fill="white"/>
</svg>
     </div>
    </div>
     
   <div className="w-60 h-60 absolute z-[40] bottom-1 left-1 flex items-center justify-center lm:hidden">
   <svg className='w-[10.4vmax] z-[40] lm:w-[18vmax] animate-spin-slow absolute bottom-6 left-8 overflow-visible' fill='#ffffff' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path id="circlePath" fill="none" className='duration-200' strokeWidth="4"  d="
          M 10, 50
          a 40,40 0 1,1 80,0
          a 40,40 0 1,1 -80,0
        " />
    <text id="text" fontFamily="monospace" className='text-white' font-color="white" fontSize="12.5" font-weight="semi-bold" fill="var(--text-1)">
      <textPath id="textPath" href="#circlePath" className='text-white'>Frontend Developer . Backend Developer .</textPath>
    </text>
  </svg>
  <a href='' download="  let navigate = useNavigate(); " target='_blank' className='cursor-pointer w-[84px] h-[84px] flex items-center justify-center text-black bg-white hover:bg-black hover:text-white lm:w-[62px] lm:h-[60px] duration-500 rounded-full absolute z-[999] lm:bottom-[55px] lm:left-[55px] bottom-[64px] left-[73px]'>Hire Me</a>
   </div>
  
    </div>
  )
}
