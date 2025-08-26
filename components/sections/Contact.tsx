"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [emailList, setEmailList] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-10 ">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center "
        >
          <h2 className="text-5xl md:text-6xl font-normal mb-16 font-garamond">
            Contact Us
          </h2>

          <p className="text-xl text-gray-300 font-garamond">Drop us a line!</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-normal text-gray-300 mb-3 font-garamond"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-black border border-white rounded-none px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-300 focus:bg-black transition-colors font-garamond"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-lg font-normal text-gray-300 mb-3 font-garamond"
              >
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-black border border-white rounded-none px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-300 focus:bg-black transition-colors font-garamond"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-lg font-normal text-gray-300 mb-3 font-garamond"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-black border border-white rounded-none px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-gray-300 focus:bg-black transition-colors resize-none font-garamond"
                placeholder="Tell us about your project..."
              />
            </div>

            <div className="flex md:items-center space-x-3">
              <button
                type="button"
                onClick={() => setEmailList(!emailList)}
                className="mt-1 w-4 h-4 border border-white bg-black flex items-center justify-center transition-colors"
              >
                {emailList && (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="#ffffff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
              <label
                onClick={() => setEmailList(!emailList)}
                className="md:text-lg text-sm text-gray-300 font-garamond leading-relaxed cursor-pointer"
              >
                Sign up for our email list for updates, promotions, and more.
              </label>
            </div>

            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="bg-white text-black py-4 px-8 font-semibold text-lg transition-all font-garamond hover:bg-gray-100"
              >
                SEND
              </motion.button>
            </div>
          </form>

          {/* Contact Information */}
          <div className="mt-16 text-center">
            <h3 className="text-4xl font-normal mb-8 text-gray-300 font-garamond">
              HATTA
            </h3>
            <div className="space-y-4 text-gray-300 font-garamond text-lg md:text-xl">
              <p>78, Avenue des Champs-Élysées, Bureau 326, 75008, Paris</p>
              <p className="mt-8">
                <a
                  href="tel:+377680867818"
                  className="hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer inline-block"
                >
                  Phone number: +377 6 80 86 78 18
                </a>
              </p>
              <p>
                <a
                  href="mailto:contact@hatta.ai"
                  className="hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer inline-block"
                >
                  Email: contact@hatta.ai
                </a>
              </p>
              <p>
                <a
                  href="https://instagram.com/hatta.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer inline-block"
                >
                  Instagram: @hatta.ai
                </a>
              </p>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center text-center gap-2 md:gap-10 border-t border-gray-800 mt-20 pt-8">
          <p className="text-gray-400 font-garamond">
            &copy; 2025 HATTA. All rights reserved.
          </p>
          <a
            href="https://www.manikamwebsolutions.com/"
            target="_blank"
            className="text-gray-400 font-garamond hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer inline-block"
          >
            Website by:{" "}
            <span className="font-semibold"> ManikamWebSolutions</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
