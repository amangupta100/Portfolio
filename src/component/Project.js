import React from 'react'
import pr1 from '../assests/Screenshot (9).png'
import pr2 from '../assests/Screenshot (8).png'
import pr3 from '../assests/Screenshot (10).png'
import { Tilt } from 'react-tilt'
import github from '../assests/github-3b4e1609 (1).png'
import see from '../assests/see.png'
import './styles/HomePage.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Project() {
  const defaultOptions = {
    reverse:        true,  // reverse the tilt direction
    max:            15,     // max tilt rotation (degrees)
    scale:1,
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
    <div className='bg-[rgb(5,8,22)] flex items-center relative justify-center w-full h-[150vh] lm:h-[300vh] overflow-x-hidden'>
      <div className="w-[100%] min-h-[98vh] flex flex-col  px-[8vw] py-[15vh] lm:px-[3vw]">
      <h1 className='text-[1.7vw] font-normal text-gray-400 lm:text-[4.8vw] lm:mx-[20px]'>My Work</h1>
        <h1 className='text-[5vw] font-extrabold lm:text-[8vw] lm:mx-[20px] bg-gradient-to-r   from-[rgb(233,251,255)] to-[#2496B3] inline-block text-transparent bg-clip-text  '>Projects.</h1>

        <div className="my-8 relative grid grid-cols-3 lm:grid-cols-1 gap-4 lm:mx-[10px]">

      <Tilt options={defaultOptions}>
      <div className="w-[26vw] h-[63vh] tb:w-[38vw]  lm:w-[90vw] lm:px-[2vw] lm:h-[70vh] tb:h-[65vh]  relative flex flex-col gap-3  bg-[rgb(57,50,98)] rounded-2xl p-[1.3vw] ">
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

      <Tilt options={defaultOptions}>
      <div className="w-[26vw] h-[63vh] bg-[rgb(57,50,98)] tb:w-[38vw] lm:w-[90vw] lm:px-[2vw] lm:h-[70vh] relative tb:h-[65vh] flex flex-col gap-3 rounded-2xl p-[1.3vw] ">
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

          <Tilt options={defaultOptions}>
          <div className="w-[26vw] h-[63vh] bg-[rgb(57,50,98)] tb:w-[38vw] lm:w-[90vw] lm:px-[2vw] lm:h-[70vh] relative  tb:h-[65vh] rounded-2xl p-[1.3vw] flex flex-col gap-3">
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
         <a className='jsx-b3386ba24cce00ed text-[1.4vw] lm:text-[4.2vw] cursor-pointer translate-x-[80vh] lm:translate-x-[21vh] my-[3vw] w-fit  flex gap-x-2 rounded-full border-2 bg-none px-4 py-2 font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base border-orange-500 ring-orange-500' onClick={()=>window.open("https://github.com/amangupta100")}>More Project</a>
      </div>
    </div>
  )
}