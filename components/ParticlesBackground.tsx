"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    particlesJS: any;
  }
}

const ParticlesBackground = () => {
  useEffect(() => {
    // Check if particles.js is already loaded
    if (window.particlesJS) {
      initParticles();
    } else {
      // Dinamički učitaj particles.js
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
      script.onload = () => {
        initParticles();
      };
      document.head.appendChild(script);
    }

    function initParticles() {
      if (window.particlesJS) {
        window.particlesJS('particles-js', {
          particles: {
            number: {
              value: 120,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "#a855f7"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000"
              }
            },
            opacity: {
              value: 0.6,
              random: false,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: true,
                speed: 40,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#a855f7",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "grab"
              },
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 200,
                line_linked: {
                  opacity: 0.8
                }
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
              },
              repulse: {
                distance: 150,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true
        });
      }
    }

    return () => {
      // Cleanup particles
      const canvas = document.querySelector('#particles-js canvas');
      if (canvas) {
        canvas.remove();
      }
    };
  }, []);

  return (
    <div 
      id="particles-js" 
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default ParticlesBackground;