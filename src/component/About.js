import React,{useEffect, useRef,useState} from 'react'
import './styles/HomePage.css'
import { Tilt } from 'react-tilt'
import img_div1 from '../assests/creator.png'
import img_div2 from '../assests/backend.png'
import img_div3 from '../assests/web.png'

export default function About() { 
  const [point, setPoint] = useState({ x: 0, y: 0 });
  const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            30,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.04,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }
  const ref = useRef()
  useEffect(()=>{
    window.addEventListener("pointermove",handleMove)
  })
  const handleMove = ({clientX,clientY}) =>{
    const element = ref.current
    const x = clientX - element.offsetLeft - element.offsetWidth / 2;
    const y = clientY - element.offsetTop - element.offsetHeight / 2;
    setPoint({ x, y });
  }
  return (
    <div ref={ref} className='bg-white relative overflow-x-hidden lm:min-h-[258vh] w-full min-h-[125vh] tb:min-h-[160vh] flex items-center justify-center' id='About'>
      <div className="w-[95%] h-[100vh] lm:h-[140vh] flex flex-col justify-center lm:items-center gap-20">

        <div className="flex flex-col w-[75%] tb:w-[90%] lm:w-[100vw] px-[15vh] tb:px-[6vh] lm:py-[4vw] lm:px-[5vw]">
        <h1 className='text-xl text-gray-400 font-medium'>INTRODUCTION</h1>
        <h1 className='text-[5.5vw] font-bold lm:text-[10vw] bg-gradient-to-br to-[rgb(253,80,80)] from-[#ffeb0c] inline-block text-transparent bg-clip-text  '>Overview .</h1>
        <p className='text-xl text-black font-normal'>I am a passionate frontend developer who crafts visually stunning and user-friendly websites. With expertise in creating responsive designs that adapt seamlessly across devices, I bring websites to life with modern aesthetics and captivating animations. I love solving real-world problems and learning along the way. I have currently explored the field of Devops, Frontend and Backend tools and technologies</p>
        </div>
        
        <div  className="flex gap-14 tb:gap-8 w-[90%] px-[15vh] lm:min-h-[150vh] lm: tb:px-[8vh] mx-[4vw] a_container">
          <Tilt options={defaultOptions} >
          <div className="flex flex-col gap-3 border-orange-400 border-2 lm:w-[85vw] items-center justify-center tb:w-[30vw] tb:h-[48vh] w-[19vw] h-[45vh] rounded-[20px] " >
            <img src={img_div1} className='w-[85px] h-[85px] ' alt="" />
            <h1 className='text-xl font-semibold text-black text-center'>Frontend Development</h1>
          </div>
          </Tilt>
         <Tilt options={defaultOptions} > 
         <div className="flex gap-3 flex-col border-2 border-orange-400 lm:w-[85vw] items-center justify-center tb:w-[30vw] tb:h-[48vh] w-[19vw] h-[45vh] rounded-[20px]">
          <img src={img_div2} className='w-[85px] h-[85px]' alt="" />
          <h1 className='text-xl font-semibold text-black'>Problem Solving </h1>
          </div>
          </Tilt>
          <Tilt options={defaultOptions} >
            <div className="flex gap-3 border-2 border-orange-400 lm:w-[85vw] tb:w-[30vw] tb:h-[48vh]  flex-col items-center justify-center w-[19vw] h-[45vh] rounded-[20px]">
            <img src={img_div3} className='w-[85px] h-[85px]' alt="" />
            <h1 className='text-xl text-black font-bold text-center'>Backend Development</h1>
            </div></Tilt>
        </div> 

      </div>
    </div>
  )
}
