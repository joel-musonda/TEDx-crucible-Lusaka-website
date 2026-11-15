import React from 'react';
import { motion } from 'framer-motion';
import ParticleDrift from './background';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
      duration: 0.8,
      ease: [0.215, 0.610, 0.355, 1.000],
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.215, 0.610, 0.355, 1.000] 
    },
  },
};

export default function Hero({ onApplyClick }) {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center px-6 md:px-12 overflow-hidden box-border">
      
      {/* BACKGROUND PARTICLE DRIFT ANIMATION WRAPPER */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-auto overflow-hidden">
        <ParticleDrift 
          background="#000000"
          baseColor="#7189ff"
          accentColor="#ff2b06"
          density={250}
          dotSize={6}
          speed={50}
          direction={45}
          hover={150}
          linkDistance={200}
          linkThickness={1}
        />
      </div>

      {/* FOREGROUND CENTERED CONTENT LAYER */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center space-y-6 md:space-y-8 w-full z-10 relative pointer-events-none max-w-4xl mx-auto mt-12"
      >
        
        {/* Category / Subtitle Tracker */}
        <motion.div 
          variants={itemVariants} 
          className="text-[10px] sm:text-xs font-mono tracking-[0.255em] text-zinc-400 uppercase pointer-events-auto text-center px-4"
        >
          ECONOMICS &bull; ARTIFICIAL INTELLIGENCE &bull; PSYCHOLOGY &bull; LEADERSHIP
        </motion.div>

        {/* Massive Centered Title - Scales safely across all laptop resolutions */}
        <motion.h1 
          variants={itemVariants} 
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] text-white uppercase pointer-events-auto text-center"
        >
          <span className="text-ted-red">"</span>
          <span className="text-white">Rethinking</span><br />
          <span className="text-ted-red">Tomorrow</span>
          <span className="text-white">"</span>
        </motion.h1>

        {/* Centered Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 pt-2 pointer-events-auto">
          
          {/* APPLY TO SPEAK BUTTON */}
          <motion.button
            onClick={onApplyClick}
            whileHover={{ scale: 1.04, backgroundColor: '#d00024' }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-2 bg-ted-red text-white text-xs font-bold px-7 py-3.5 md:px-8 md:py-4 tracking-wider uppercase transition-colors duration-200 cursor-pointer shadow-lg"
          >
            Meet Speakers
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2.5} 
              stroke="currentColor" 
              className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </motion.button>

          {/* WATCH VIDEOS BUTTON */}
          <motion.button
            whileHover={{ scale: 1.04, backgroundColor: '#ffffff', color: '#000000' }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-2 bg-white text-black text-xs font-bold px-7 py-3.5 md:px-8 md:py-4 tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-lg"
          >
            WATCH VIDEOS
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-4 h-4 transform transition-transform duration-300 group-hover:scale-115"
            >
              <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
            </svg>
          </motion.button>

        </motion.div>

      </motion.div>

    </section>
  );
}