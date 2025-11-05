import React from 'react';
import { Users, Globe, Star, Play } from 'lucide-react';

const creators = [
  { name: 'Nomad Nia', tag: '@nomadnia' },
  { name: 'CityLens', tag: '@citylens' },
  { name: 'TrailTales', tag: '@trailtales' },
];

const SocialProof = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 ring-1 ring-emerald-200">
            <Users className="h-4 w-4" />
            Trusted by a growing travel community
          </div>
          <h3 className="font-manrope text-3xl font-bold text-slate-900 sm:text-4xl">Real people. Real trips. Real vibes.</h3>
          <p className="mt-3 text-slate-600">“I stopped Googling. This app literally planned and guided my entire trip.”</p>
          <div className="mt-6 flex items-center gap-4 text-slate-700">
            <div className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow ring-1 ring-black/5">
              <Globe className="h-4 w-4" />
              <span className="text-sm">Local-first insights</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow ring-1 ring-black/5">
              <Star className="h-4 w-4 text-amber-500" />
              <span className="text-sm">Creator-powered reviews</span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {creators.map((c) => (
              <div key={c.tag} className="rounded-xl bg-white/80 px-4 py-3 shadow-sm ring-1 ring-black/5 backdrop-blur">
                <div className="text-sm font-semibold text-slate-900">{c.name}</div>
                <div className="text-xs text-slate-500">{c.tag}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500/20 via-sky-400/20 to-emerald-300/20 p-3">
            <div className="aspect-video w-full overflow-hidden rounded-xl bg-white/70 ring-1 ring-black/5 backdrop-blur">
              {/* UGC style content preview */}
              <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-6 text-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs text-slate-700 ring-1 ring-black/5">
                  <Play className="h-4 w-4" />
                  Traveler vlogs & short guides
                </div>
                <p className="max-w-sm text-sm text-slate-600">
                  Snackable tips from creators and locals. Save for offline and watch on the go.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
