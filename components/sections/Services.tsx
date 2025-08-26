"use client";

import Image from "@/node_modules/next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: "Bespoke AI solutions",
      description: [
        "We build advanced AI systems – from geometric to generative models – designed to scale.",
        "Every pipeline is engineered for measurable outcomes: better performance, lower costs and faster results.",
      ],
      image: "/image_1-min.png",
    },
    {
      title: "AI Project Oversight",
      description: [
        "We supervise AI projects end-to-end, ensuring they are well-designed, correctly implemented, and deliver real results. From scoping to delivery, we reduce risks and guarantee that execution matches ambition.",
      ],
      image: "/image_2-min.jpg",
    },
    {
      title: "C-Level Strategy & Education",
      description: [
        "True transformation starts at the top. We teach boards and executives about the frontier of AI and how it creates value in their business. The outcome: leaders who are aligned and confident to set direction.",
      ],
      image: "/image_3-min.jpg",
    },
  ];

  return (
    <section id="services" className="section-padding bg-white min-h-screen">
      <div className="container mx-auto px-2">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-normal leading-tight text-black">
            Our Services
          </h2>
          <p className="text-base md:text-2xl font-normal leading-tight -mt-2 italic text-black">
            Implement. Govern. Inspire
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="   transition-all duration-300  group cursor-pointer relative z-10"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  width={800}
                  height={800}
                  alt="hatta ai"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-0"
                />
                <div className="absolute inset-0  p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-primary-foreground">
                  {service.description.map((item, index) => (
                    <p
                      key={index}
                      className="text-xl font-normal leading-tight text-center text-primary"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
              <div className="py-3 bg-primary-foreground">
                <h3 className="text-3xl font-semibold text-primary  text-center">
                  {service.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
