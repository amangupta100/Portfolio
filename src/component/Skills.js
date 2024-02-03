import React from 'react'
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"

export default function Skills() {
    const [init, setInit] = useState(false);
    useEffect(() => {
        initParticlesEngine(async (engine) => {
          await loadSlim(engine);
        }).then(() => {
          setInit(true);
        });
      }, []);
      const particlesLoaded = (container) => {
        console.log(container);
      };
      const options= useMemo(
        () => ({
          background: {
            color: {
              value: "#050816",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            "shape": {
                "type": "circle",
                "stroke": {
                  "width": 0,
                  "color": "#000000"
                },
                "polygon": {
                  "nb_sides": 3
                },
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
                }
              },
              "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 130,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 120,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "bottom-right",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                "value_area": 800
              },
              value: 199,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 0, max: 5 },
            },
          },
          detectRetina: true,
        }),
        [],
      );
    
    
    
  return (
    <div className='w-full h-[100vh] relative'>
     <div className="absolute  bottom-0 -z-10">
     <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}   style={{ position: "absolute"}}
          />
     </div>
          hello
    </div>
  )
}
