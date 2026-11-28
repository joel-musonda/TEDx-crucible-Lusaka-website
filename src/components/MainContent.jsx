import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import crucibleBuildingImg from '../assets/crucible.png';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';

const PROCESS_STEPS = [
  {
    title: 'Submission',
    body: 'Send the core idea and the argument behind it. Short and specific beats broad and vague.',
  },
  {
    title: 'Interview',
    body: 'Shortlisted speakers present a three-minute outline to the student curatorial team.',
  },
  {
    title: 'Rehearsal',
    body: 'Work with coaches on structure, pacing and delivery, then present to a test audience.',
  },
];

function Eyebrow({ children }) {
  return (
    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-ted-red">{children}</p>
  );
}

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

export default function MainContent({ onApplyClick }) {
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-80px' },
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <div className="relative z-10 text-white selection:bg-ted-red selection:text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        <motion.section
          {...reveal}
          id="about"
          className="scroll-mt-24 grid gap-10 border-t border-white/10 md:scroll-mt-28 py-16 md:py-24 lg:grid-cols-12 lg:items-start lg:gap-16"
        >
          <div className="lg:col-span-5">
            <Eyebrow>About</Eyebrow>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-balance md:text-4xl lg:text-5xl">
              Crucible Lusaka
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-white/60 md:text-base">
              <p>
                Crucible Lusaka is a school in Lusaka, Zambia. TEDx Crucible Lusaka is organised
                by its students: one day of talks, performances and conversation built around
                ideas they believe are worth spreading.
              </p>
              <p>
                The event is independently organised under a licence from TED.
              </p>
            </div>
          </div>

          <figure className="lg:col-span-7">
            <div className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-950">
              <img
                src={crucibleBuildingImg}
                alt="Crucible Lusaka students and faculty at an awards ceremony"
                loading="lazy"
                className="aspect-[3/2] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <figcaption className="mt-3 text-xs text-white/40">
              Students and faculty at Crucible Lusaka.
            </figcaption>
          </figure>
        </motion.section>

        <motion.section
          {...reveal}
          id="why"
          className="scroll-mt-24 grid gap-10 border-t border-white/10 md:scroll-mt-28 py-16 md:py-24 lg:grid-cols-12 lg:items-center lg:gap-16"
        >
          <figure className="lg:col-span-5">
            <div className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-950">
              <img
                src={image2}
                alt="Students in a classroom at Crucible Lusaka"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <figcaption className="mt-3 text-xs text-white/40">
              A workshop session at Crucible Lusaka.
            </figcaption>
          </figure>

          <div className="lg:col-span-7">
            <Eyebrow>Why a TEDx talk</Eyebrow>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-balance md:text-4xl lg:text-5xl">
              An idea, held to a few minutes.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/60 md:text-base">
              A TEDx talk asks you to compress a big idea into a short, clear argument. The
              constraint is the work: you have to find the centre of what you want to say.
            </p>

            <dl className="mt-8 border-t border-white/10">
              <div className="grid gap-1 border-b border-white/10 py-5 sm:grid-cols-[180px_1fr] sm:gap-8">
                <dt className="text-sm font-semibold text-white">Think in public</dt>
                <dd className="text-sm leading-relaxed text-white/55">
                  You get a few minutes to make an idea land. That sharpens how you reason, edit
                  and defend it.
                </dd>
              </div>
              <div className="grid gap-1 border-b border-white/10 py-5 sm:grid-cols-[180px_1fr] sm:gap-8">
                <dt className="text-sm font-semibold text-white">Learn by watching</dt>
                <dd className="text-sm leading-relaxed text-white/55">
                  Rehearsals and the final talks show how other speakers build an argument and
                  hold a room.
                </dd>
              </div>
            </dl>
          </div>
        </motion.section>

        <motion.section
          {...reveal}
          id="program"
          className="scroll-mt-24 grid gap-10 border-t border-white/10 md:scroll-mt-28 py-16 md:py-24 lg:grid-cols-12 lg:items-start lg:gap-16"
        >
          <div className="lg:col-span-5">
            <Eyebrow>Process</Eyebrow>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-balance md:text-4xl lg:text-5xl">
              The road to the stage.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60 md:text-base">
              Every talk goes through the same three stages. Each one is designed to make the
              final idea tighter.
            </p>
          </div>

          <ol className="border-t border-white/10 lg:col-span-7">
            {PROCESS_STEPS.map((step, index) => (
              <li
                key={step.title}
                className="grid gap-2 border-b border-white/10 py-6 sm:grid-cols-[48px_1fr] sm:gap-6"
              >
                <span className="font-mono text-xs text-white/35">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-white">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/55">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </motion.section>

        <motion.section
          {...reveal}
          id="apply"
          className="scroll-mt-24 grid gap-10 border-t border-white/10 md:scroll-mt-28 py-16 md:py-24 lg:grid-cols-12 lg:items-center lg:gap-16"
        >
          <div className="lg:col-span-7">
            <Eyebrow>Apply</Eyebrow>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-balance md:text-4xl lg:text-5xl">
              Do you have an idea?
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/60 md:text-base">
              If you have a perspective you can defend and a story only you can tell, apply. We
              will help you shape it for the stage.
            </p>

            <dl className="mt-8 grid max-w-sm grid-cols-2 gap-6 border-t border-white/10 pt-6">
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                  Applications close
                </dt>
                <dd className="mt-1.5 text-base font-bold text-white">10 October 2026</dd>
              </div>
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                  Event date
                </dt>
                <dd className="mt-1.5 text-base font-bold text-white">15 December 2026</dd>
              </div>
            </dl>

            <button
              type="button"
              onClick={onApplyClick}
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-ted-red px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-ted-red-hover"
            >
              Apply to speak
              <ArrowIcon />
            </button>
          </div>

          <figure className="lg:col-span-5">
            <div className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-950">
              <img
                src={image1}
                alt="A Crucible Lusaka student"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
          </figure>
        </motion.section>
      </div>
    </div>
  );
}
