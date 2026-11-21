import React from 'react';
import RibbonGlow from './ui/ribbon-glow';

const HERO_RED = '#d90429';
const RIBBON_BLUE_1 = '#2b4c7e';
const RIBBON_BLUE_2 = '#162947';

const DEFAULT_SPEAKERS = [
  {
    id: 'guest-principal',
    name: 'Principal — Guest Speaker',
    role: 'Principal • Crucible Lusaka',
    talkTitle: 'Opening Keynote',
    bio: 'Delivering the guest address on intellectual curiosity, student agency, and shaping tomorrow at Crucible Lusaka.',
    isGuest: true,
    photo: '',
  },
  {
    id: 'speaker-01',
    name: 'Selected Speaker 01',
    role: 'Student Speaker • Economics',
    talkTitle: 'Talk Title Placeholder',
    bio: 'Brief overview of the speaker, their background at Crucible Lusaka, and the core idea behind their talk.',
    photo: '',
  },
  {
    id: 'speaker-02',
    name: 'Selected Speaker 02',
    role: 'Student Speaker • Artificial Intelligence',
    talkTitle: 'Talk Title Placeholder',
    bio: 'Brief overview of the speaker, their background at Crucible Lusaka, and the core idea behind their talk.',
    photo: '',
  },
  {
    id: 'speaker-03',
    name: 'Selected Speaker 03',
    role: 'Student Speaker • Psychology',
    talkTitle: 'Talk Title Placeholder',
    bio: 'Brief overview of the speaker, their background at Crucible Lusaka, and the core idea behind their talk.',
    photo: '',
  },
  {
    id: 'speaker-04',
    name: 'Selected Speaker 04',
    role: 'Student Speaker • Leadership',
    talkTitle: 'Talk Title Placeholder',
    bio: 'Brief overview of the speaker, their background at Crucible Lusaka, and the core idea behind their talk.',
    photo: '',
  },
  {
    id: 'speaker-05',
    name: 'Selected Speaker 05',
    role: 'Student Speaker',
    talkTitle: 'Talk Title Placeholder',
    bio: 'Brief overview of the speaker, their background at Crucible Lusaka, and the core idea behind their talk.',
    photo: '',
  },
  {
    id: 'speaker-06',
    name: 'Selected Speaker 06',
    role: 'Student Speaker',
    talkTitle: 'Talk Title Placeholder',
    bio: 'Brief overview of the speaker, their background at Crucible Lusaka, and the core idea behind their talk.',
    photo: '',
  },
  {
    id: 'speaker-07',
    name: 'Selected Speaker 07',
    role: 'Student Speaker',
    talkTitle: 'Talk Title Placeholder',
    bio: 'Brief overview of the speaker, their background at Crucible Lusaka, and the core idea behind their talk.',
    photo: '',
  },
  {
    id: 'speaker-08',
    name: 'Selected Speaker 08',
    role: 'Student Speaker',
    talkTitle: 'Talk Title Placeholder',
    bio: 'Brief overview of the speaker, their background at Crucible Lusaka, and the core idea behind their talk.',
    photo: '',
  },
  {
    id: 'speaker-09',
    name: 'Selected Speaker 09',
    role: 'Student Speaker',
    talkTitle: 'Talk Title Placeholder',
    bio: 'Brief overview of the speaker, their background at Crucible Lusaka, and the core idea behind their talk.',
    photo: '',
  },
  {
    id: 'speaker-10',
    name: 'Selected Speaker 10',
    role: 'Student Speaker',
    talkTitle: 'Talk Title Placeholder',
    bio: 'Brief overview of the speaker, their background at Crucible Lusaka, and the core idea behind their talk.',
    photo: '',
  },
  {
    id: 'speaker-11',
    name: 'Selected Speaker 11',
    role: 'Student Speaker',
    talkTitle: 'Talk Title Placeholder',
    bio: 'Brief overview of the speaker, their background at Crucible Lusaka, and the core idea behind their talk.',
    photo: '',
  },
];

export default function SpeakersPage({
  videoSrc = '/videos/tedx-speakers-preview.mp4',
  posterSrc = '',
  speakers = DEFAULT_SPEAKERS,
}) {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-[#d90429] selection:text-white overflow-x-clip">
      {/* Subtle Muted Blue RibbonGlow Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30" aria-hidden="true">
        <RibbonGlow
          background="#05070a"
          color1={RIBBON_BLUE_1}
          color2={RIBBON_BLUE_2}
          speed={28}
          size={110}
          angle={-135}
          hover={85}
          reach={240}
          style={{
            minWidth: 0,
            minHeight: 0,
            width: '100%',
            height: '100%',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-28 pb-24 space-y-20">
        {/* Header: Title on left, one sentence on right */}
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.02]">
              Ideas Worth Spreading From{' '}
              <span style={{ color: HERO_RED }}>Crucible Lusaka.</span>
            </h1>
          </div>
          <p className="lg:col-span-5 text-sm md:text-base text-zinc-300 leading-relaxed">
            Twelve student voices and our principal taking the stage to share ideas rooted in Crucible Lusaka.
          </p>
        </header>

        {/* Glassmorphic Feature: Words on left, smaller video on right, nothing below video */}
        <section className="rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 p-6 md:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-3">
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Speaker Reel
              </h2>
              <p className="text-sm text-zinc-300 leading-relaxed">
                A look at the voices, preparation, and perspectives coming to the Crucible Lusaka stage.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="max-w-xl lg:ml-auto rounded-xl overflow-hidden border border-white/15 bg-black/60">
                <div className="aspect-video w-full">
                  <video
                    key={videoSrc}
                    src={videoSrc}
                    poster={posterSrc || undefined}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 12 Selected Speakers + Principal (Guest Speaker) with 3D Hover Flip */}
        <section className="space-y-8">
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">
            Speakers
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {speakers.map((speaker, idx) => (
              <div
                key={speaker.id || idx}
                tabIndex={0}
                className="group h-[410px] [perspective:1200px] focus:outline-none"
              >
                <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]">

                  {/* FRONT FACE */}
                  <div
                    className={`absolute inset-0 rounded-2xl overflow-hidden backdrop-blur-xl border flex flex-col [backface-visibility:hidden] ${
                      speaker.isGuest
                        ? 'bg-white/[0.07] border-[#d90429]/80'
                        : 'bg-white/[0.04] border-white/10'
                    }`}
                  >
                    <div className="flex-1 w-full bg-zinc-950/80 overflow-hidden relative">
                      {speaker.photo ? (
                        <img
                          src={speaker.photo}
                          alt={speaker.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-xs uppercase tracking-[0.2em] text-zinc-500">
                          {String(idx + 1).padStart(2, '0')}
                        </div>
                      )}
                    </div>

                    <div className="p-5 space-y-1 bg-black/70 border-t border-white/10">
                      <p
                        className="text-[11px] font-bold uppercase tracking-[0.2em]"
                        style={{ color: HERO_RED }}
                      >
                        {speaker.isGuest ? 'Guest Speaker • Principal' : speaker.role || 'Selected Speaker'}
                      </p>
                      <h3 className="text-lg font-bold text-white leading-snug">
                        {speaker.name}
                      </h3>
                    </div>
                  </div>

                  {/* BACK FACE (Revealed on Hover) */}
                  <div
                    className={`absolute inset-0 rounded-2xl p-6 backdrop-blur-2xl border flex flex-col justify-between [transform:rotateY(180deg)] [backface-visibility:hidden] ${
                      speaker.isGuest
                        ? 'bg-zinc-950/95 border-[#d90429]'
                        : 'bg-zinc-950/95 border-white/20'
                    }`}
                  >
                    <div className="space-y-4">
                      <span
                        className="text-[10px] font-extrabold uppercase tracking-[0.25em] block"
                        style={{ color: HERO_RED }}
                      >
                        {speaker.isGuest ? 'Guest Speaker' : `Speaker ${String(idx + 1).padStart(2, '0')}`}
                      </span>

                      <div>
                        <h3 className="text-xl font-extrabold text-white leading-tight">
                          {speaker.name}
                        </h3>
                        <p className="text-xs text-zinc-400 mt-1">
                          {speaker.role}
                        </p>
                      </div>

                      {speaker.talkTitle && (
                        <div className="pt-2 border-t border-white/10">
                          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-1">
                            Talk
                          </p>
                          <p className="text-sm font-bold text-zinc-100 leading-snug">
                            “{speaker.talkTitle}”
                          </p>
                        </div>
                      )}

                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {speaker.bio}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                      <span>TEDxCrucibleLusaka</span>
                      <span className="font-bold" style={{ color: HERO_RED }}>2026</span>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}