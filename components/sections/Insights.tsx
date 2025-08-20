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
      type: "Podcast",
      title: "The Future of Graph Neural Networks",
      description: "Exploring the latest developments in GNN architectures and their applications in real-world scenarios.",
      date: "March 2024",
      readTime: "45 min listen",
      category: "Research"
    },
    {
      type: "Article",
      title: "Topological Deep Learning in Finance",
      description: "How topological methods are revolutionizing risk assessment and fraud detection in financial services.",
      date: "February 2024",
      readTime: "8 min read",
      category: "Industry"
    },
    {
      type: "Whitepaper",
      title: "Non-Euclidean AI: A Comprehensive Guide",
      description: "A deep dive into the mathematical foundations and practical applications of non-Euclidean machine learning.",
      date: "January 2024",
      readTime: "25 min read",
      category: "Technical"
    },
    {
      type: "Podcast",
      title: "AI Ethics in Complex Systems",
      description: "Discussing the ethical implications of advanced AI systems and responsible development practices.",
      date: "December 2023",
      readTime: "38 min listen",
      category: "Ethics"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Research: "bg-blue-900/30 text-blue-300 border-blue-500/20",
      Industry: "bg-green-900/30 text-green-300 border-green-500/20",
      Technical: "bg-purple-900/30 text-purple-300 border-purple-500/20",
      Ethics: "bg-orange-900/30 text-orange-300 border-orange-500/20"
    };
    return colors[category as keyof typeof colors] || colors.Research;
  };

  return (
    <section id="insights" className="section-padding bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Insights & Research
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with our latest research, industry insights, and thought leadership 
            in the world of advanced AI and machine learning.
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
              <div className="flex items-start justify-between mb-4">
                <span className="bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/20">
                  {insight.type}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm border ${getCategoryColor(insight.category)}`}>
                  {insight.category}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-300 transition-colors">
                {insight.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed mb-4">
                {insight.description}
              </p>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{insight.date}</span>
                <span>{insight.readTime}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass-effect rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-300 mb-6">
              Get the latest insights and research updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Insights;