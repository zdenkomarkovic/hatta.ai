"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const approaches = [
    {
      title: "Graph Neural Networks",
      description: "Leveraging the power of graph structures to model complex relationships and dependencies in your data.",
      icon: "🕸️"
    },
    {
      title: "Topological Data Analysis",
      description: "Uncovering hidden patterns and structures in high-dimensional data using advanced topological methods.",
      icon: "🔍"
    },
    {
      title: "Non-Euclidean Learning",
      description: "Applying cutting-edge techniques that go beyond traditional machine learning approaches.",
      icon: "🌐"
    },
    {
      title: "Research-Driven Solutions",
      description: "Translating the latest academic research into practical, scalable business applications.",
      icon: "🔬"
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Our Approach
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We combine cutting-edge research with practical implementation to deliver 
            AI solutions that push the boundaries of what's possible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {approaches.map((approach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-effect rounded-xl p-6 hover-glow transition-all duration-300"
            >
              <div className="text-4xl mb-4">{approach.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {approach.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {approach.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass-effect rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Why Choose HATTA.ai?
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our team bridges the gap between academic research and industry application. 
              We don't just implement existing solutions – we pioneer new approaches that 
              give your business a competitive edge in the AI landscape.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;