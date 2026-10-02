'use client';

import FaultyTerminal from './FaultyTerminal';
import './HeroBackground.css';

export default function HeroBackground() {
  return (
    <div className="hero-background" aria-hidden="true">
      <div className="hero-background-terminal">
        <FaultyTerminal
          scale={1.5}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={0.5}
          pause={false}
          scanlineIntensity={0.5}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0.1}
          tint="#A7EF9E"
          mouseReact={false}
          mouseStrength={0.5}
          pageLoadAnimation
          brightness={0.6}
        />
      </div>
    </div>
  );
}
