import React from 'react';
import { useReducedMotion } from 'framer-motion';
import Particles from './Particles';
import useMediaQuery from '../hooks/useMediaQuery';
import { PARTICLE_BLUE } from '../theme';

const maskImage =
  'radial-gradient(ellipse 90% 86% at 50% 45%, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.78) 55%, rgba(0,0,0,0.95) 86%, #000 100%)';

export default function HomeAmbient() {
  const reduceMotion = useReducedMotion();
  const compact = useMediaQuery('(max-width: 640px)');
  const [heroVisible, setHeroVisible] = React.useState(true);

  React.useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) return undefined;
    const observer = new IntersectionObserver(([entry]) => setHeroVisible(entry.isIntersecting));
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  if (reduceMotion || heroVisible) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ maskImage, WebkitMaskImage: maskImage }}
    >
      <Particles
        particleCount={compact ? 55 : 130}
        particleSpread={compact ? 12 : 16}
        speed={0.11}
        particleColors={['#DCEBFF', PARTICLE_BLUE]}
        moveParticlesOnHover={false}
        particleHoverFactor={0}
        alphaParticles
        particleBaseSize={compact ? 115 : 160}
        sizeRandomness={1}
        cameraDistance={22}
        connections={!compact}
        connectionDistance={compact ? 80 : 110}
        clickBurst={false}
        glow={1.0}
        twinkle={0.4}
        depthOfField={0.15}
        drift="up"
        driftSpeed={0.6}
        intro={false}
        opacity={0.8}
        pixelRatio={1.25}
      />
    </div>
  );
}
