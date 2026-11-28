import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import ParticleDrift from './background';
import useMediaQuery from '../hooks/useMediaQuery';
import { BRAND_RED, PARTICLE_BLUE } from '../theme';

const EVENT_DETAILS = [
  { label: 'Date', value: '15 December 2026' },
  { label: 'Venue', value: 'Crucible Lusaka' },
  { label: 'City', value: 'Lusaka, Zambia' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
      className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

export default function Hero({ onApplyClick, onViewSpeakers }) {
  const reduceMotion = useReducedMotion();
  const compact = useMediaQuery('(max-width: 640px)');

  return (
    <section id="hero" className="relative isolate flex min-h-[calc(100svh-5rem)] items-center overflow-hidden bg-black text-white">
      {!reduceMotion && (
        <div aria-hidden="true" className="hero-blue-drift">
          <ParticleDrift
            background="transparent"
            baseColor={PARTICLE_BLUE}
            accentColor={BRAND_RED}
            density={compact ? 95 : 165}
            dotSize={compact ? 2.3 : 2.8}
            speed={compact ? 12 : 17}
            direction={35}
            hover={compact ? 110 : 150}
            linkDistance={compact ? 120 : 155}
            linkThickness={0.9}
            style={{ minWidth: 0, minHeight: 0, width: '100%', height: '100%' }}
          />
        </div>
      )}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.18) 40%, rgba(0,0,0,0) 76%)',
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-28 text-center md:px-12">
        <motion.div
          variants={containerVariants}
          initial={reduceMotion ? false : 'hidden'}
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-[clamp(3rem,10vw,7.75rem)] font-black uppercase leading-[0.86] tracking-[-0.045em]"
          >
            <span className="mr-1 text-ted-red" aria-hidden="true">
              “
            </span>
            Rethinking
            <br />
            <span className="text-ted-red">Tomorrow</span>
            <span className="ml-1 text-ted-red" aria-hidden="true">
              ”
            </span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <button
              type="button"
              onClick={onViewSpeakers}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-none bg-ted-red px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-ted-red-hover sm:w-auto"
            >
              Meet the speakers
              <ArrowIcon />
            </button>
            <button
              type="button"
              onClick={onApplyClick}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-none border border-white bg-white px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.16em] text-black transition-colors hover:bg-white/90 sm:w-auto"
            >
              Apply to speak
              <ArrowIcon />
            </button>
          </motion.div>

          <motion.dl
            variants={itemVariants}
            className="mx-auto mt-14 flex max-w-2xl flex-wrap items-start justify-center gap-x-10 gap-y-5 border-t border-white/10 pt-6"
          >
            {EVENT_DETAILS.map((detail) => (
              <div key={detail.label} className="text-center">
                <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
                  {detail.label}
                </dt>
                <dd className="mt-1.5 text-sm font-semibold text-white">{detail.value}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </div>
    </section>
  );
}
