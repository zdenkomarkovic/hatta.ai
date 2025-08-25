"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection] = useState("");

  const navItems = useMemo(() => [
    { id: "overview", label: "Overview" },
    { id: "about", label: "Our Approach" },
    { id: "services", label: "Services" },
    { id: "insights", label: "Podcast" },
    { id: "contact", label: "Contact" },
  ], []);

  useEffect(() => {
    // Add any useEffect logic here if needed
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className=""
        style={{
          background: '#FFFFFF',
          color: '#111111',
          borderBottom: '1px solid #EDEDED',
          position: 'sticky',
          top: 0,
          zIndex: 1000
        }}
      >
        <div className="container mx-auto" style={{ 
          padding: '1rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold cursor-pointer"
            onClick={() => scrollToSection("overview")}
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: 800,
              color: '#111111'
            }}
          >
            HATTA.AI
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center text-xl">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
               className={`relative px-4 py-2 transition-colors border-b-2 ${
                 activeSection === item.id ? "border-[#C8A951]" : "border-transparent"
               }`}
                style={{ 
                  marginLeft: '1.5rem',
                  color: '#111111',
                  textDecoration: 'none',
                  fontFamily: 'Inter, sans-serif',
                 fontWeight: 500
                }}
                onMouseEnter={(e) => {
                 e.currentTarget.style.borderBottomColor = '#C8A951';
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== item.id) {
                   e.currentTarget.style.borderBottomColor = 'transparent';
                  }
                }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-black focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-current mb-1 origin-center transition-all duration-300"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-current mb-1 transition-all duration-300"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-current origin-center transition-all duration-300"
              />
            </div>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          x: isMobileMenuOpen ? "0%" : "100%"
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 right-0 h-full w-full bg-gray-900/95 backdrop-blur-lg z-40 md:hidden ${
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                y: isMobileMenuOpen ? 0 : 20
              }}
              transition={{ 
                duration: 0.3, 
                delay: isMobileMenuOpen ? index * 0.1 : 0 
              }}
              onClick={() => scrollToSection(item.id)}
              className={`text-2xl font-semibold transition-colors hover:border-b-2 hover:border-[#C8A951] ${
                activeSection === item.id ? "text-[#C8A951] border-b-2 border-[#C8A951]" : "text-white"
              }`}
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Mobile Menu Background Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={toggleMobileMenu}
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
        />
      )}
    </>
  );
};

export default Navigation;
