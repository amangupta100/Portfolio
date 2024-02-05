import React from 'react'
import { useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";

export default function Cursor() {
    const cursor = useRef(null)
  const moveCircle = (e) => {
      gsap.to(cursor.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: Linear.easeNone,
      });
    };
    useEffect(()=>{
     document.addEventListener("mousemove",moveCircle)
    },[])
  return (
    <div>
       <div
        ref={cursor} 
        className="w-12 absolute z-[999] h-12 bg-white rounded-full"
      ></div>
    </div>
  )
}
