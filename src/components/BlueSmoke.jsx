import React from 'react';
import { useReducedMotion } from 'framer-motion';
import Particles from './Particles';
import useMediaQuery from '../hooks/useMediaQuery';
import { PARTICLE_BLUE } from '../theme';

const BLOBS = [
  'blue-smoke__blob blue-smoke__blob--one',
  'blue-smoke__blob blue-smoke__blob--two',
  'blue-smoke__blob blue-smoke__blob--three',
  'blue-smoke__blob blue-smoke__blob--four',
  'blue-smoke__blob blue-smoke__blob--five',
  'blue-smoke__blob blue-smoke__blob--six',
];

export default function BlueSmoke() {
  const reduceMotion = useReducedMotion();
  const compact = useMediaQuery('(max-width: 640px)');

  return (
    <div aria-hidden="true" className="blue-smoke">
      {!reduceMotion && (
        <div className="blue-smoke__particles">
          <Particles
            particleCount={compact ? 45 : 90}
            particleSpread={compact ? 14 : 20}
            speed={0.07}
            particleColors={['#B9E2FF', PARTICLE_BLUE]}
            moveParticlesOnHover={false}
            particleHoverFactor={0}
            alphaParticles
            particleBaseSize={compact ? 210 : 320}
            sizeRandomness={1.4}
            cameraDistance={18}
            connections={false}
            clickBurst={false}
            glow={1.4}
            twinkle={0.2}
            depthOfField={0.55}
            drift="up"
            driftSpeed={0.5}
            intro={false}
            opacity={0.5}
            pixelRatio={1.25}
          />
        </div>
      )}
      <div className="blue-smoke__field">
        {BLOBS.map((className) => (
          <span key={className} className={className} />
        ))}
      </div>
    </div>
  );
}
