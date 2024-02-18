import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import {Tilt} from 'react-tilt'
import github from '../assests/github-3b4e1609 (1).png'
import see from '../assests/see.png'
import data from "./ProjectData";

const Example = () => {
  return (
    <div className="bg-[rgb(5,8,22)] w-full h-[100%] ">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-80%"]);
  const defaultOptions = {
    reverse:        true,  // reverse the tilt direction
    max:            20,     // max tilt rotation (degrees)
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
    <section ref={targetRef} className="relative h-[300vh] py-[4vw] lm:py-[10vw] bg-[rgb(5,8,22)]">
      
          <h1 className="text-[2vw] mx-[4vw] lm:text-[4.5vw] font-medium text-gray-400 ">Projects</h1>
          <h1 className="text-[4vw] mx-[4.7vw] lm:text-[8vw] font-bold bg-gradient-to-r   from-[rgb(233,251,255)] to-[#2496B3] inline-block text-transparent bg-clip-text  ">My Work</h1>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className=" relative flex  gap-11 mx-[3vw] ">

         {
            data.map((elem)=>{
            return(
             <Tilt options={defaultOptions}>
                 <div key={elem.id} className="w-[370px] border-2 border-gray-800 group overflow-hidden relative rounded-2xl h-[420px] shadow-xl hover:shadow-xl hover:shadow-slate-700 flex flex-col gap-2 p-[0.6vw] lm:p-[0.9vw]">
                 <img src={elem.url} className='w-[25vw] h-[30vh] lm:h-[34vh] lm:w-[86vw] tb:w-[35vw] tb:h-[35vh] rounded-2xl'  alt="" />
            <h1 className='text-2xl font-bold'> {elem.name} </h1>
            <p className='text-[1vw] text-gray-300 tb:text-[1.8vw] lm:text-[4vw] '> {elem.description} </p>
            <h1 className='text-gray-400 text-base font-semibold'> {elem.hashTag} </h1>

            <div className="w-10 h-10 absolute right-5 top-6 bg-black cursor-pointer rounded-full flex items-center justify-center" id='div1' onClick={(e)=>githubBtn(e.currentTarget.id)}>
            <img src={github} className='w-6 h-6' alt="" />
            </div>
            <div className="w-10 h-10 absolute right-[75px] top-6 bg-black cursor-pointer rounded-full flex items-center justify-center" id='web1' onClick={(e)=>webLink(e.currentTarget.id)}>
            <img src={see} className='w-6 h-6' alt="" />
            </div>
            </div>
             </Tilt>
            )
            })
         }
        </motion.div>
      </div>
    </section>
  );
};



export default Example;

