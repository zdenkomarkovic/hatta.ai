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
      title: "AI Agents",
      description:
        "Our BCG responsible AI consulting team helps organizations execute an strategic approach to responsible ai through a tailored program based on five pillars",
      image: "/hero.jpg",
    },
    {
      title: "Generative AI",
      description:
        "Our BCG responsible AI consulting team helps organizations execute an strategic approach to responsible ai through a tailored program based on five pillars",
      image: "/hero.jpg",
    },
    {
      title: "Responsible AI",
      description:
        "Our BCG responsible AI consulting team helps organizations execute an strategic approach to responsible ai through a tailored program based on five pillars",
      image: "/hero.jpg",
    },
  ];

  return (
    <section id="services" className="section-padding bg-foreground">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-effect rounded-xl hover-glow transition-all duration-300 overflow-hidden group cursor-pointer relative z-10"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  width={800}
                  height={800}
                  alt="hatta ai"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-0"
                />
                <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gray-900/95 z-20">
                  <p className="text-gray-300 leading-relaxed text-center">
                    {service.description}
                  </p>
                </div>
              </div>
              <div className="p-6 bg-gray-900/80">
                <h3 className="text-2xl font-semibold text-white text-center">
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
