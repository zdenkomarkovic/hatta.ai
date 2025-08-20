"use client";

import Image from "@/node_modules/next/image";
import { motion } from "framer-motion";

const Overview = () => {
  return (
    <section id="overview" className="min-h-screen relative flex items-center">
      {/* Desert background image */}
      <Image
        src={"/hero.jpg"}
        fill
        alt="hatta ai"
        className="absolute inset-0 object-cover bg-center bg-no-repeat"
      />

      {/* Dark overlay for better text readability */}
      {/* <div className="absolute inset-0 bg-gray-900/80" /> */}

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            HATTA.ai
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 leading-relaxed"
          >
            AI consulting company specializing in{" "}
            <span className=" font-semibold">graph machine learning</span> and{" "}
            <span className=" font-semibold">topological deep learning</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className=" mb-12 max-w-3xl mx-auto"
          >
            We work at the frontier of research and consulting, translating
            complex non-Euclidean methods into practical, high-impact business
            solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className=" px-8 py-4 bg-primary rounded-lg font-semibold text-lg hover-glow transition-all"
            >
              Explore Our Services
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border px-8 py-4 rounded-lg font-semibold text-lg transition-all"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default Overview;
