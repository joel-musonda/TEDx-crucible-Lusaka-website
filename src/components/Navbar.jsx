import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = ['SPEAKERS', 'PROGRAM', 'CONTACT'];

export default function Navbar({ onViewSpeakers, onViewContact, onLogoClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (event, link) => {
    setIsMenuOpen(false);

    if (link === 'SPEAKERS') {
      event.preventDefault();
      onViewSpeakers?.();
      return;
    }

    if (link === 'CONTACT') {
      event.preventDefault();
      onViewContact?.();
      return;
    }

    onLogoClick?.(event);
  };

  const handleLogoClick = (event) => {
    setIsMenuOpen(false);
    onLogoClick?.(event);
  };

  const handleMeetSpeakersClick = () => {
    setIsMenuOpen(false);
    onViewSpeakers?.();
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-2 md:px-6 md:pt-3">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full border border-white/10 bg-[#0B0B0B]/90 px-4 shadow-[0_10px_34px_rgba(0,0,0,0.38)] backdrop-blur-xl md:h-16 md:px-6">
        <button
          type="button"
          onClick={handleLogoClick}
          aria-label="TEDx Crucible Lusaka home"
          className="text-left text-base font-extrabold tracking-tight select-none sm:text-lg md:text-xl"
        >
          TED
          <span className="text-ted-red">x</span>
          <span className="font-semibold text-white">Crucible Lusaka</span>
        </button>

        <div className="hidden items-center gap-6 lg:flex lg:gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={(event) => handleLinkClick(event, link)}
              className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/70 transition-colors hover:text-white"
            >
              {link}
            </a>
          ))}

          <button
            type="button"
            onClick={handleMeetSpeakersClick}
            className="rounded-full bg-ted-red px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-ted-red-hover"
          >
            Meet speakers
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          className="-mr-1.5 p-1.5 text-white lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5"
            aria-hidden="true"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute inset-x-4 top-full mt-2 overflow-hidden rounded-3xl border border-white/10 bg-[#0B0B0B]/95 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col px-6 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={(event) => handleLinkClick(event, link)}
                  className="border-b border-white/10 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/70 transition-colors hover:text-white"
                >
                  {link}
                </a>
              ))}
              <button
                type="button"
                onClick={handleMeetSpeakersClick}
                className="mt-4 w-full rounded-full bg-ted-red py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-ted-red-hover"
              >
                Meet speakers
              </button>
              <p className="pt-6 text-[11px] uppercase tracking-[0.18em] text-white/40">
                15 December 2026 · Crucible Lusaka
              </p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
