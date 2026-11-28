import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function ScrollCue({ label = 'Scroll', className = '' }) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none flex flex-col items-center gap-2.5 text-[9px] font-semibold uppercase tracking-[0.3em] text-white/35 ${className}`}
    >
      <span>{label}</span>
      <span className="relative h-10 w-px overflow-hidden bg-white/15">
        {reduceMotion ? (
          <span className="absolute inset-x-0 top-0 h-1/2 bg-ted-red/70" />
        ) : (
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-ted-red/80"
            animate={{ y: ['-120%', '240%'] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}
      </span>
    </div>
  );
}
