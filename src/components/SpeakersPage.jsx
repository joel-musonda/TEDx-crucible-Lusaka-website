import React from 'react';
import BlueSmoke from './BlueSmoke';
import alinaswePhoto from '../assets/speakers/alinaswe-chifupa.webp';
import christinePhoto from '../assets/speakers/christine-chinyemba.webp';
import fredrickPhoto from '../assets/speakers/fredrick-mukuka.webp';
import hassanPhoto from '../assets/speakers/hassan-badat.webp';
import kondwaniPhoto from '../assets/speakers/kondwani-sampa.webp';
import micahPhoto from '../assets/speakers/micah-mulundu.webp';
import mulengaPhoto from '../assets/speakers/mulenga-chongo.webp';
import rodgersPhoto from '../assets/speakers/rodgers-fyabipa.webp';
import vaughnPhoto from '../assets/speakers/vaughn-lewis.webp';
import eliasPhoto from '../assets/speakers/elias-mwape.webp';

const STUDENT_PORTRAITS = [
  { name: 'Alinaswe Chifupa', photo: alinaswePhoto },
  { name: 'Christine Chinyemba', photo: christinePhoto },
  { name: 'Fredrick Mukuka', photo: fredrickPhoto },
  { name: 'Hassan Badat', photo: hassanPhoto },
  { name: 'Kondwani Sampa', photo: kondwaniPhoto },
  { name: 'Micah Mulundu', photo: micahPhoto },
  { name: 'Mulenga Chongo', photo: mulengaPhoto },
  { name: 'Rodgers Fyabipa', photo: rodgersPhoto },
];

const TEACHERS = [
  {
    id: 'teacher-martin-chishimba',
    name: 'Mr Martin Chishimba',
    role: '',
    talkTitle: '',
    bio: '',
    isGuest: false,
    photo: '',
  },
  {
    id: 'teacher-elias-mwape',
    name: 'Dr Elias Mwape, PhD',
    role: 'Teacher',
    talkTitle: '',
    bio: '',
    isGuest: false,
    photo: eliasPhoto,
  },
];

const DEFAULT_SPEAKERS = [
  {
    id: 'guest-principal',
    name: 'Vaughn Lewis',
    role: 'Principal & Keynote Speaker',
    talkTitle: 'Opening Keynote',
    bio: 'Principal of Crucible Lusaka.',
    isGuest: true,
    photo: vaughnPhoto,
  },
  ...STUDENT_PORTRAITS.map((portrait, i) => {
    const number = String(i + 1).padStart(2, '0');
    return {
      id: `student-${number}`,
      name: portrait.name,
      role: `Student Speaker ${number}`,
      talkTitle: '',
      bio: '',
      isGuest: false,
      photo: portrait.photo,
    };
  }),
  ...TEACHERS,
];

function SpeakerCard({ speaker, index }) {
  const { name, role, talkTitle, bio, isGuest, photo } = speaker;
  const number = String(index + 1).padStart(2, '0');

  return (
    <article
      className={`flex flex-col overflow-hidden rounded-xl border bg-zinc-950/75 transition-colors ${
        isGuest ? 'border-ted-red/60' : 'border-white/10 hover:border-white/25'
      }`}
    >
      <div className="relative aspect-square bg-zinc-950">
        {photo ? (
          <img
            src={photo}
            alt={`${name} portrait`}
            className="h-full w-full object-cover object-top"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-4xl font-black tabular-nums text-white/10">{number}</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-1 border-t border-white/10 p-4">
        {role && (
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-ted-red">
            {role}
          </span>
        )}
        <h3 className="text-base font-bold leading-snug text-white">{name}</h3>
        {talkTitle && <p className="text-xs text-white/55">{talkTitle}</p>}
        {bio && <p className="mt-1 text-xs leading-relaxed text-white/45">{bio}</p>}
      </div>
    </article>
  );
}

export default function SpeakersPage({ speakers = DEFAULT_SPEAKERS }) {
  return (
    <div className="relative min-h-screen overflow-hidden text-white selection:bg-ted-red selection:text-white">
      <BlueSmoke />
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-28 md:px-12 lg:px-16">
        <header className="max-w-3xl space-y-4">
          <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Ideas Worth Spreading From{' '}
            <span className="text-ted-red">Crucible Lusaka.</span>
          </h1>
          <p className="text-sm leading-relaxed text-white/70 md:text-base">
            Meet the guest speaker, teachers, and student speakers taking the stage this year.
          </p>
        </header>

        <section className="mt-14 space-y-8">
          <h2 className="text-2xl font-extrabold tracking-tight md:text-3xl">Speakers</h2>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {speakers.map((speaker, index) => (
              <SpeakerCard key={speaker.id || index} speaker={speaker} index={index} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
