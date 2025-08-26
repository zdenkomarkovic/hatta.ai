"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import SearchOverlay from "./SearchOverlay";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeSection] = useState("");

  const navItems = useMemo(() => [
    { id: "overview", label: "Overview" },
    { id: "about", label: "Our Approach" },
    { id: "services", label: "Services" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
  ], []);

  useEffect(() => {
    // Add any useEffect logic here if needed
  }, []);

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
        className="header-bar"
        style={{
          background: '#ffffff',
          width: '100%',
          padding: '20px 0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottom: '1px solid #f0f0f0',
          position: 'sticky',
          top: 0,
          zIndex: 1000
        }}
      >
        <div style={{
          width: '100%',
          maxWidth: '1200px',
          padding: '0 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/* Hamburger Menu Button */}
          <motion.div
            whileTap={{ scale: 0.95 }}
            onClick={toggleMobileMenu}
            className="menu-btn"
            style={{
              fontSize: '20px',
              color: '#111111',
              cursor: 'pointer',
              userSelect: 'none'
            }}
          >
            &#9776;
          </motion.div>

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="logo"
            onClick={() => scrollToSection("overview")}

          >
            H A T T A
          </motion.div>

          {/* Search Button */}
          <motion.div
            whileTap={{ scale: 0.95 }}
            className="search-btn"
            onClick={() => setIsSearchOpen(true)}
            style={{
              cursor: 'pointer',
              userSelect: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" 
                stroke="#111111" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
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
        className={`fixed top-0 right-0 h-full w-full bg-gray-900/95 backdrop-blur-lg z-40 lg:hidden ${
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
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
        />
      )}

      {/* Desktop Sidebar - Hidden on Mobile */}
      <motion.div
        initial={{ opacity: 0, x: "-100%" }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          x: isMobileMenuOpen ? "0%" : "-100%"
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900/95 backdrop-blur-lg z-40 hidden lg:block ${
          isMobileMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-start justify-start h-full px-6 py-8 space-y-6">
          {/* Close Button */}
          <button
            onClick={toggleMobileMenu}
            className="self-end text-white text-2xl hover:text-gray-300 transition-colors mb-8"
          >
            ✕
          </button>
          
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                x: isMobileMenuOpen ? 0 : -20
              }}
              transition={{ 
                duration: 0.3, 
                delay: isMobileMenuOpen ? index * 0.1 : 0 
              }}
              onClick={() => scrollToSection(item.id)}
              className={`text-2xl font-semibold transition-colors hover:text-[#C8A951] text-left w-full ${
                activeSection === item.id ? "text-[#C8A951]" : "text-white"
              }`}
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Search Overlay */}
      <SearchOverlay 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
    </>
  );
};

export default Navigation;
