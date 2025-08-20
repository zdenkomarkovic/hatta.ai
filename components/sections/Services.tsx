"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: "Graph ML Consulting",
      description:
        "Custom graph neural network solutions for complex relational data problems.",
      features: [
        "Network Analysis",
        "Recommendation Systems",
        "Fraud Detection",
        "Knowledge Graphs",
      ],
      icon: "🔗",
    },
    {
      title: "Topological Deep Learning",
      description:
        "Advanced topological methods for understanding data structure and patterns.",
      features: [
        "Persistent Homology",
        "Mapper Algorithm",
        "Topological Autoencoders",
        "Shape Analysis",
      ],
      icon: "🌊",
    },
    {
      title: "Research & Development",
      description:
        "Collaborative research projects to push the boundaries of AI capabilities.",
      features: [
        "Academic Partnerships",
        "Patent Development",
        "Publication Support",
        "Innovation Labs",
      ],
      icon: "🧪",
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
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI solutions tailored to your unique challenges and
            objectives.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-effect rounded-xl p-8 hover-glow transition-all duration-300"
            >
              <div className="flex items-start mb-6">
                <div className="text-4xl mr-4">{service.icon}</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="bg-purple-900/30 rounded-lg px-3 py-2 text-sm text-purple-300 border border-purple-500/20"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
