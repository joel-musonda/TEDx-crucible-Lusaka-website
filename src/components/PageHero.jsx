import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import ScrollCue from './ui/ScrollCue';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function PageHero({ eyebrow, title, description, actions, meta, background = 'bg-black', children }) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className={`relative flex min-h-svh flex-col overflow-hidden text-white ${background}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 38%, rgba(0,0,0,0.72) 100%)',
        }}
      />

      <div className="hero-shell relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-6 pb-24 pt-28 sm:pb-28 sm:pt-32 md:px-12 md:pb-32 md:pt-36 lg:px-16">
        <motion.div
          variants={containerVariants}
          initial={reduceMotion ? false : 'hidden'}
          animate="visible"
          className="max-w-4xl"
        >
          {eyebrow && (
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <span className="h-px w-8 bg-ted-red" aria-hidden="true" />
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-ted-red">
                {eyebrow}
              </p>
            </motion.div>
          )}

          <motion.h1
            variants={itemVariants}
            className="page-hero-title mt-6 text-balance text-[clamp(2.15rem,5.5vw,4.75rem)] font-black leading-[0.98] tracking-[-0.03em]"
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              variants={itemVariants}
              className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60 md:mt-6 md:text-base"
            >
              {description}
            </motion.p>
          )}

          {actions && (
            <motion.div
              variants={itemVariants}
              className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center md:mt-9"
            >
              {actions}
            </motion.div>
          )}

          {children}

          {meta && (
            <motion.div
              variants={itemVariants}
              className="hide-on-short mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 md:mt-20"
            >
              {meta}
            </motion.div>
          )}
        </motion.div>
      </div>

      <div className="hero-scroll-cue">
        <ScrollCue />
      </div>
    </section>
  );
}
