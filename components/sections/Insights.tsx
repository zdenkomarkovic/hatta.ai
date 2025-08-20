"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Insights = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const insights = [
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Research: "bg-blue-900/30 text-blue-300 border-blue-500/20",
      Industry: "bg-green-900/30 text-green-300 border-green-500/20",
      Technical: "bg-purple-900/30 text-purple-300 border-purple-500/20",
      Ethics: "bg-orange-900/30 text-orange-300 border-orange-500/20",
    };
    return colors[category as keyof typeof colors] || colors.Research;
  };

  return (
    <section
      id="insights"
      className="section-padding bg-gradient-to-b from-gray-800 to-gray-900"
    >
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Insights & Research
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with our latest research, industry insights, and
            thought leadership in the world of advanced AI and machine learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-effect rounded-xl p-6 hover-glow transition-all duration-300 cursor-pointer group"
            >
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-300 transition-colors">
                {insight.title}
              </h3>

              <p className=" leading-relaxed mb-4">{insight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
