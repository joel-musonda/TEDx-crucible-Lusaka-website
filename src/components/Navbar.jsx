
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = ['ABOUT', 'SPEAKERS', 'PROGRAM', 'CONTACT'];

export default function Navbar({ onApplyClick, onLogoClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (event) => {
    setIsMenuOpen(false);

    if (onLogoClick) {
      onLogoClick(event);
    }
  };

  const handleApplyClick = () => {
    setIsMenuOpen(false);

    if (onApplyClick) {
      onApplyClick();
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm"
    >
      {/* Main Navbar */}
      <div className="h-20 px-5 sm:px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <div
          onClick={handleNavigation}
          className="font-extrabold text-xl sm:text-2xl tracking-tighter cursor-pointer select-none"
        >
          TED
          <span className="text-ted-red">x</span>
          <span className="text-white font-semibold">
            CrucibleLusaka
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={handleNavigation}
              className="text-xs font-semibold text-zinc-300 hover:text-white tracking-widest transition-colors duration-200"
            >
              {link}
            </a>
          ))}

          {/* Desktop Apply Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleApplyClick}
            className="bg-ted-red text-white text-xs font-bold px-6 py-3 tracking-widest uppercase hover:bg-[#d00024] transition-colors duration-300 cursor-pointer"
          >
            APPLY TO SPEAK
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          className="md:hidden text-white p-2 cursor-pointer focus:outline-none"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-black border-t border-zinc-800"
          >
            <div className="px-5 py-6 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={handleNavigation}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.2,
                  }}
                  className="py-3 text-sm font-semibold text-zinc-300 hover:text-white tracking-widest transition-colors"
                >
                  {link}
                </motion.a>
              ))}

              {/* Mobile Apply Button */}
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={handleApplyClick}
                className="mt-4 w-full bg-ted-red text-white text-xs font-bold px-6 py-4 tracking-widest uppercase hover:bg-[#d00024] transition-colors cursor-pointer"
              >
                APPLY TO SPEAK
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}