import React from 'react'
import pr1 from '../assests/Screenshot (9).png'
import pr2 from '../assests/Screenshot (8).png'
import pr3 from '../assests/Screenshot (10).png'
import { Tilt } from 'react-tilt'
import github from '../assests/github-3b4e1609 (1).png'
import see from '../assests/see.png'
import './styles/HomePage.css'

export default function Project() {
  const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            10,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:1,
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }
  const githubBtn = (btnValue) =>{
  if(btnValue==="div1"){
    window.open("https://github.com/amangupta100/Cara.git")
  }
  else if(btnValue==="div2"){
   window.open("https://github.com/amangupta100/iphone-pro.git")
  }
  else{
      window.open("https://github.com/amangupta100/xypo.github.io.git") 
  }
  }
  const webLink = (btnValue) =>{

    if(btnValue==="web1"){
      window.open("https://cara-ecommerceplatform.netlify.app/")
    }
    else if(btnValue==="web2"){
      window.open("https://project-iphone.netlify.app/")
    }
    else{
      window.open("https://amangupta100.github.io/xypo.github.io/")
    }
    
  }
  return (
    <div className='bg-[rgb(5,8,22)] flex items-center relative justify-center w-full min-h-[100vh] overflow-x-hidden'>
      <div className="w-[95%] min-h-[98vh] flex flex-col px-[8vw] py-[15vh] p_maincont">
        <h1 className='text-[1.7vw] font-normal text-gray-400 lm:text-[4vw] '>My Work</h1>
        <h1 className='text-[5vw] font-extrabold lm:text-[7vw] '>Projects.</h1>
        
        <div className="my-8 relative p_cont">
          <Tilt options={defaultOptions} >
          <div className="w-[26vw] h-[63vh] tb:w-[38vw] lm:w-[90vw] lm:px-[2vw] lm:h-[70vh] tb:h-[65vh]  relative flex flex-col gap-3 bg-[rgb(21,16,48)] rounded-2xl p-[1.3vw] ">
            <img src={pr1} className='w-[25vw] h-[30vh] lm:h-[34vh] lm:w-[86vw] tb:w-[35vw] tb:h-[35vh] rounded-2xl'  alt="" />
            <h1 className='text-2xl font-bold'>Cara</h1>
            <p className='text-[1vw] text-gray-300 tb:text-[1.8vw] lm:text-[4vw] '>Cara, our avant-garde ecommerce platform, is a captivating destination where style meets convenience and website include animation and much more interactive effects</p>
            <h1 className='text-gray-400 text-base font-semibold'>#frontend  #javascript #developer</h1>

            <div className="w-10 h-10 absolute right-5 top-6 bg-black cursor-pointer rounded-full flex items-center justify-center" id='div1' onClick={(e)=>githubBtn(e.currentTarget.id)}>
            <img src={github} className='w-6 h-6' alt="" />
            </div>
            <div className="w-10 h-10 absolute right-[75px] top-6 bg-black cursor-pointer rounded-full flex items-center justify-center" id='web1' onClick={(e)=>webLink(e.currentTarget.id)}>
            <img src={see} className='w-6 h-6' alt="" />
            </div>
            
          </div>
          </Tilt>

          <Tilt options={defaultOptions} >
          <div className="w-[26vw] h-[63vh] tb:w-[38vw] lm:w-[90vw] lm:px-[2vw] lm:h-[70vh] relative tb:h-[65vh] bg-[rgb(21,16,48)] flex flex-col gap-3 rounded-2xl p-[1.3vw] ">
          <img src={pr2} className='w-[25vw] h-[30vh] lm:h-[34vh] lm:w-[86vw] tb:w-[35vw] tb:h-[33vh] rounded-2xl'  alt="" />
            <h1 className='text-2xl font-bold'>iPhone-Landing Page</h1>
            <p className='text-[1vw] text-gray-300 tb:text-[1.8vw] lm:text-[4vw] '>Created a iphone 13 pro landing page with phone 3d model and nice scroll-based animations. This website is responsive as well.</p>
            <h1 className='text-gray-400 text-base font-semibold'>#frontend  #react #3dmodel #react-three-fiber</h1>
            <div className="w-10 h-10 absolute right-5 top-6 bg-black rounded-full flex cursor-pointer items-center justify-center" id='div2' onClick={(e)=>githubBtn(e.currentTarget.id)}>
            <img src={github} className='w-6 h-6' alt="" />
            </div>
            <div className="w-10 h-10 absolute right-[75px]  top-6 bg-black cursor-pointer rounded-full flex items-center justify-center" id='web2' onClick={(e)=>webLink(e.currentTarget.id)}>
            <img src={see} className='w-6 h-6' alt="" />
            </div>
          </div>
          </Tilt>

          <Tilt options={defaultOptions} >
          <div className="w-[26vw] h-[63vh] tb:w-[38vw] lm:w-[90vw] lm:px-[2vw] lm:h-[70vh] relative  tb:h-[65vh] bg-[rgb(21,16,48)]  rounded-2xl p-[1.3vw] flex flex-col gap-3">
          <img src={pr3} className='w-[25vw] h-[30vh] lm:h-[34vh] lm:w-[86vw] tb:w-[35vw] tb:h-[35vh]  rounded-2xl'  alt="" />
            <h1 className='text-2xl font-bold'>Xypo</h1>
            <p className='text-[1vw] text-gray-300 tb:text-[1.8vw] lm:text-[4vw]'>Xypo is a educational website that allows users to upload study materials and much more thing .</p>
            <h1 className='text-gray-400 text-base font-semibold'>#frontend  #javascript #developer</h1>
            <div className="w-10 h-10 absolute right-5 top-6 bg-black cursor-pointer rounded-full flex items-center justify-center" id='div3' onClick={(e)=>githubBtn(e.currentTarget.id)}>
            <img src={github} className='w-6 h-6' alt="" />
            </div>
            <div className="w-10 h-10 absolute right-[75px] top-6 bg-black cursor-pointer rounded-full flex items-center justify-center" id='web3' onClick={(e)=>webLink(e.currentTarget.id)}>
            <img src={see} className='w-6 h-6' alt="" />
            </div>
          </div>
          </Tilt>
        </div>
         <button className='bg-[rgb(21,16,48)] translate-x-[35vw] lm:w-[40vw] lm:translate-x-[20vw] lm:my-[10vw] w-[12vw] h-[10vh] tb:w-[20vw] my-[3vw] text-xl p-[1vw] font-medium' onClick={()=>window.open("https://github.com/amangupta100")}>More Project</button>
      </div>
    </div>
  )
}
