import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80 dark:from-slate-900/70 dark:via-slate-900/30 dark:to-slate-900/80" />
      <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(60% 60% at 50% 10%, rgba(255,255,255,0.7), rgba(255,255,255,0) 60%)' }} />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
          <Sparkles className="h-4 w-4 text-amber-500" />
          Find vibes, not just locations.
        </div>
        <h1 className="text-balance font-manrope text-4xl font-extrabold leading-tight text-slate-900 drop-shadow-sm sm:text-5xl md:text-6xl">
          One app for everything travel
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-base text-slate-700 sm:text-lg">
          Plan smarter, explore deeper, and experience cities like a local. Trustworthy tools and an adventurous spirit — Notion × Airbnb × Headout.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-white shadow-lg shadow-slate-900/10 transition hover:scale-[1.02] hover:bg-slate-800 active:scale-[0.99]"
          >
            <Rocket className="h-5 w-5" />
            Start planning
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-xl bg-white/70 px-5 py-3 text-slate-800 shadow-lg shadow-slate-900/5 backdrop-blur transition hover:scale-[1.02] active:scale-[0.99]"
          >
            See what’s inside
          </a>
        </div>

        <p className="mt-4 text-xs text-slate-600">Your trip, your pace, your vibe.</p>
      </div>
    </section>
  );
};

export default Hero;
