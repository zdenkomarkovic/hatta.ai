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
        particlesDiv.style.position = "absolute";
        particlesDiv.style.top = "0";
        particlesDiv.style.left = "0";
        particlesDiv.style.width = "100%";
        particlesDiv.style.height = "88vh";
        particlesDiv.style.zIndex = "0";
        particlesDiv.style.pointerEvents = "none";
        particlesDiv.style.transition = "opacity 0.3s ease, visibility 0.3s ease";
        particlesDiv.style.overflow = "hidden";
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

    const updateParticlesStyle = () => {
      const particlesDiv = document.getElementById("particles-js");
      if (!particlesDiv) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const heroHeight = windowHeight * 0.88; // 88vh kao u hero sekciji

      if (scrollY < heroHeight) {
        // Na hero sekciji - ukosi efekat na desnoj strani, ali vidljiv na vrhu i dnu
        particlesDiv.style.left = "50%";
        particlesDiv.style.width = "50%";
        // Clip-path koji omogućava particles na vrhu i dnu, samo leva strana se krije
        particlesDiv.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
      } else {
        // Van hero sekcije - particles se ne vide jer su ograničeni na hero visinu
        particlesDiv.style.left = "50%";
        particlesDiv.style.width = "50%";
        particlesDiv.style.clipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
      }
    };

    const initParticles = () => {
      // Proveri da li je particles.js učitana
      if (typeof window.particlesJS === 'function') {
        console.log("Initializing particles");
        window.particlesJS("particles-js", {
          particles: {
            number: {
              value: 100, // Vraćam na 100 jer sada pokriva celu stranicu
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

        // Inicijalno postavi stil
        updateParticlesStyle();

        // Dodaj scroll event listener
        window.addEventListener('scroll', updateParticlesStyle);
      } else {
        console.log("Particles.js not loaded yet, retrying...");
        // Pokušaj ponovo za 100ms
        setTimeout(initParticles, 100);
      }
    };

    loadParticles();

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', updateParticlesStyle);
      const particlesDiv = document.getElementById("particles-js");
      if (particlesDiv) {
        particlesDiv.remove();
      }
    };
  }, []);

  return null;
};

export default ParticlesBackground;
