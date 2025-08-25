"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    particlesJS: (elementId: string, config: object) => void;
  }
}

const ParticlesBackground = () => {
  useEffect(() => {
    const loadParticles = () => {
      // Kreiraj particles-js div ako ne postoji
      let particlesDiv = document.getElementById("particles-js");
      if (!particlesDiv) {
        particlesDiv = document.createElement("div");
        particlesDiv.id = "particles-js";
        particlesDiv.style.position = "fixed";
        particlesDiv.style.top = "0";
        particlesDiv.style.left = "0";
        particlesDiv.style.width = "100%";
        particlesDiv.style.height = "100%";
        particlesDiv.style.zIndex = "0";
        particlesDiv.style.pointerEvents = "none";
        document.body.appendChild(particlesDiv);
      }

      // Učitaj particles.js script
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
      script.onload = () => {
        console.log("Particles.js loaded");
        initParticles();
      };
      script.onerror = () => {
        console.error("Failed to load particles.js");
      };
      document.head.appendChild(script);
    };

    const initParticles = () => {
      // Proveri da li je particles.js učitana
      if (typeof window.particlesJS === 'function') {
        console.log("Initializing particles");
        window.particlesJS("particles-js", {
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#dcdbda"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#dcdbda"
              },
            },
            opacity: {
              value: 0.7,
              random: false,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.3,
                sync: false,
              },
            },
            size: {
              value: 4,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0.5,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#dcdbda",
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 200,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 300,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 150,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
            },
          },
          retina_detect: true,
        });
      } else {
        console.log("Particles.js not loaded yet, retrying...");
        // Pokušaj ponovo za 100ms
        setTimeout(initParticles, 100);
      }
    };

    // Proveri da li je particles.js već učitan
    if (typeof window.particlesJS !== 'undefined') {
      initParticles();
    } else {
      loadParticles();
    }

    return () => {
      // Cleanup
      const particlesDiv = document.getElementById("particles-js");
      if (particlesDiv) {
        particlesDiv.remove();
      }

      // Ukloni script
      const scripts = document.querySelectorAll('script[src*="particles"]');
      scripts.forEach((script) => script.remove());
    };
  }, []);

  return null; // Ne renderujemo ništa jer kreiramo div programski
};

export default ParticlesBackground;
