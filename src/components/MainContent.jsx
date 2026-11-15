'use client'

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Particles from './Particles';
import logoImg from '../assets/logo.png';
import crucibleBuildingImg from '../assets/crucible.png';
import bg from '../assets/bg.png';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';

export default function MainContent({ onApplyClick }) {
    const sections = [
        {
            id: 1,
            tagline: "About Us",
            title: "Crucible Lusaka",
            description: (
                <>
                  Crucible Lusaka serves as our vibrant intellectual hub where students are challenged to think critically, innovate fearlessly, and develop ideas that extend far beyond traditional boundaries.<br /><br />
                  By providing an empowering environment for young people, the school nurtures the next generation of leaders, thinkers, and changemakers who will shape the future of Zambia and beyond.
                </>
            ),
            imageUrl: crucibleBuildingImg,
            reverse: false
        },
        {
            id: 2,
            tagline: "Our Pitch",
            title: "Why Give A Ted Talk?",
            description: (
                <div className="space-y-4 text-sm">
                  <div className="bg-zinc-900/70 border border-zinc-800 p-4">
                    <strong className="text-white block mb-1 text-base">Encourages critical thinking</strong>
                    <p className="text-zinc-400">The format of TedX Talks encourages critical thinking, as speakers are given limited time to present their ideas engagingly.</p>
                  </div>
                  <div className="bg-zinc-900/90 border-l-4 border-ted-red border-y border-r border-zinc-800 p-4">
                    <strong className="text-white block mb-1 text-base">Helps develop public speaking skills</strong>
                    <p className="text-zinc-400">By hearing how other people deliver their ideas, one can learn how to structure their speeches and presentations.</p>
                  </div>
                </div>
            ),
            imageUrl: bg,
            reverse: true
        },
        {
            id: 3,
            tagline: "THE ROAD TO THE STAGE",
            title: "Selection Process",
            description: (
                <div className="space-y-5 border-l-2 border-zinc-800 pl-4 ml-2">
                  <div>
                    <span className="text-ted-red text-[10px] font-black uppercase tracking-wider block mb-1">Phase 01 — Submission</span>
                    <h4 className="text-base font-bold text-white">Pitch Your Core Concept</h4>
                    <p className="text-zinc-400 text-xs mt-1">Fill out our deep review application stating clearly what your idea worth spreading is.</p>
                  </div>
                  <div>
                    <span className="text-ted-red text-[10px] font-black uppercase tracking-wider block mb-1">Phase 02 — Interview</span>
                    <h4 className="text-base font-bold text-white">Curatorial Review</h4>
                    <p className="text-zinc-400 text-xs mt-1">Shortlisted visionaries deliver a concise 3-minute framework presentation.</p>
                  </div>
                  <div>
                    <span className="text-ted-red text-[10px] font-black uppercase tracking-wider block mb-1">Phase 03 — Forging</span>
                    <h4 className="text-base font-bold text-white">Intensive Scripting Workshops</h4>
                    <p className="text-zinc-400 text-xs mt-1">Work alongside TEDx stage coaches to structure structural transitions and polish delivery.</p>
                  </div>
                </div>
            ),
            imageUrl: image1,
            reverse: false
        },
        {
            id: 4,
            tagline: "TIMELINE & DEADLINES",
            title: "Do You Have an Idea?",
            description: (
                <div className="space-y-6">
                  <p className="text-zinc-300 text-sm">
                    We are looking for the visionaries, the outliers, and the quiet observers who hold a perspective capable of changing how we see the world. Give it a shot!
                  </p>
                  <div className="bg-zinc-900/90 border border-zinc-800 grid grid-cols-2 divide-x divide-zinc-800 p-3 text-left">
                    <div className="px-3">
                      <span className="text-[9px] font-extrabold text-ted-red uppercase block">Deadline</span>
                      <span className="text-base font-black text-white">October 10, 2026</span>
                    </div>
                    <div className="px-3">
                      <span className="text-[9px] font-extrabold text-ted-red uppercase block">Event Date</span>
                      <span className="text-base font-black text-white">Dec 15, 2026</span>
                    </div>
                  </div>
                  <div>
                    <motion.button 
                      whileHover={{ scale: 1.05, backgroundColor: '#d00024' }}
                      whileTap={{ scale: 0.96 }}
                      onClick={onApplyClick}
                      className="bg-ted-red text-white text-xs font-bold px-7 py-3.5 tracking-widest uppercase shadow-lg cursor-pointer"
                    >
                      Meet The Speakers
                    </motion.button>
                  </div>
                </div>
            ),
            imageUrl: image2,
            reverse: true
        }
    ];

    const sectionRefs = sections.map(() => useRef(null));
    
    const scrollYProgress = sections.map((_, index) => {
        return useScroll({
            target: sectionRefs[index],
            offset: ["start end", "center start"]
        }).scrollYProgress;
    });

    const opacityContents = scrollYProgress.map(progress => 
        useTransform(progress, [0, 0.7], [0, 1])
    );
    
    const clipProgresses = scrollYProgress.map(progress => 
        useTransform(progress, [0, 0.7], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"])
    );
    
    const translateContents = scrollYProgress.map(progress => 
        useTransform(progress, [0, 1], [-30, 0])
    );

    return (
        <div className="relative bg-black text-white selection:bg-ted-red selection:text-white overflow-hidden">
            
            {/* Highly Intense Background Particle Engine */}
            <div className="absolute inset-0 z-0 pointer-events-auto">
                <Particles
                    particleCount={300}
                    particleSpread={10}
                    speed={0.2}
                    particleColors={['#ffffff', '#ff2b06', '#ff5c5c', '#8fdcff']}
                    moveParticlesOnHover={true}
                    particleHoverFactor={1.5}
                    alphaParticles={true}
                    particleBaseSize={180}
                    sizeRandomness={1.2}
                    cameraDistance={18}
                    connections={true}
                    connectionDistance={140}
                    hoverEffect="parallax"
                    hoverRadius={180}
                    clickBurst={true}
                    glow={1.2}
                    twinkle={0.6}
                    opacity={1}
                />
            </div>

            {/* Scroll Feature Container */}
            <div className="relative z-10 flex flex-col md:px-16 px-6 max-w-7xl mx-auto py-12">
                {sections.map((section, index) => (
                    <div 
                        key={section.id}
                        ref={sectionRefs[index]} 
                        className={`min-h-screen flex flex-col lg:flex-row items-center justify-center lg:gap-24 gap-12 py-20 ${section.reverse ? 'lg:flex-row-reverse' : ''}`}
                    >
                        {/* Text Block Content with enhanced backdrop contrast */}
                        <motion.div 
                            style={{ y: translateContents[index] }}
                            className="w-full lg:w-1/2 flex flex-col justify-center space-y-4 bg-black/75 backdrop-blur-md p-8 rounded-xl border border-white/10 shadow-2xl"
                        >
                            <span className="text-ted-red text-[10px] font-extrabold tracking-[0.3em] uppercase block">
                                {section.tagline}
                            </span>
                            {section.id === 1 && (
                                <div>
                                    <img src={logoImg} alt="Crucible Lusaka Logo" className="h-12 w-auto object-contain" />
                                </div>
                            )}
                            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                                {section.title}
                            </h2>
                            <div className="text-zinc-200 font-normal leading-relaxed pt-2">
                                {section.description}
                            </div>
                        </motion.div>

                        {/* Parallax / Clip Path Image Box */}
                        <motion.div 
                            style={{ 
                                opacity: opacityContents[index],
                                clipPath: clipProgresses[index],
                            }}
                            className="w-full lg:w-1/2 relative flex justify-center"
                        >
                            <div className="aspect-[4/4] w-full max-w-md overflow-hidden bg-zinc-950/90 backdrop-blur-md border border-zinc-700 shadow-2xl relative group">
                                <img 
                                    src={section.imageUrl} 
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                                    alt={`Section ${section.id}`}
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}