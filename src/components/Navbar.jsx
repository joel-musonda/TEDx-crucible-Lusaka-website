import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = ['SPEAKERS', 'PROGRAM', 'CONTACT'];

export default function Navbar({ onViewSpeakers, onViewContact, onLogoClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (event, link) => {
    setIsMenuOpen(false);

    if (link === 'SPEAKERS') {
      event.preventDefault();
      if (onViewSpeakers) {
        onViewSpeakers();
      }
      return;
    }

    if (link === 'CONTACT') {
      event.preventDefault();
      if (onViewContact) {
        onViewContact();
      }
      return;
    }

    if (onLogoClick) {
      onLogoClick(event);
    }
  };

  const handleLogoClick = (event) => {
    setIsMenuOpen(false);
    if (onLogoClick) {
      onLogoClick(event);
    }
  };

  const handleMeetSpeakersClick = () => {
    setIsMenuOpen(false);
    if (onViewSpeakers) {
      onViewSpeakers();
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed top-0 left-0 w-full z-50 py-3 px-4 md:px-8 flex justify-center"
    >
      {/* Permanent Floating Glass Pill Navbar */}
      <div className="w-full max-w-6xl bg-zinc-950/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] rounded-full px-6 md:px-10 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div
          onClick={handleLogoClick}
          className="font-extrabold text-xl sm:text-2xl tracking-tighter cursor-pointer select-none"
        >
          TED
          <span className="text-ted-red">x</span>
          <span className="text-white font-semibold">
            Crucible Lusaka
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={(e) => handleLinkClick(e, link)}
              className="text-xs font-semibold text-zinc-300 hover:text-white tracking-widest transition-colors duration-200"
            >
              {link}
            </a>
          ))}

          {/* Desktop Meet Speakers Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleMeetSpeakersClick}
            className="bg-ted-red text-white text-xs font-bold px-5 py-2.5 tracking-widest uppercase rounded-full hover:bg-[#d00024] transition-all duration-200 cursor-pointer"
          >
            MEET SPEAKERS
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

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2 overflow-hidden bg-zinc-950/95 backdrop-blur-2xl border border-zinc-800 rounded-2xl shadow-2xl"
          >
            <div className="px-6 py-6 flex flex-col gap-3">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) => handleLinkClick(e, link)}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.03,
                    duration: 0.15,
                  }}
                  className="py-3 text-sm font-semibold text-zinc-300 hover:text-white tracking-widest border-b border-zinc-900 transition-colors"
                >
                  {link}
                </motion.a>
              ))}

              {/* Mobile Meet Speakers Button */}
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={handleMeetSpeakersClick}
                className="mt-2 w-full bg-ted-red text-white text-xs font-bold px-6 py-4 tracking-widest uppercase hover:bg-[#d00024] transition-colors cursor-pointer rounded-xl shadow-lg"
              >
                MEET SPEAKERS
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}