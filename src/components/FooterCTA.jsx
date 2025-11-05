import React from 'react';
import { Compass } from 'lucide-react';

const FooterCTA = () => {
  return (
    <section id="get-started" className="relative mx-auto max-w-7xl px-6 pb-20">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-rose-100 via-amber-100 to-emerald-100 p-1 ring-1 ring-black/5 dark:from-slate-800 dark:via-slate-800 dark:to-slate-800">
        <div className="rounded-[22px] bg-white/70 p-8 shadow-sm backdrop-blur sm:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <h4 className="font-manrope text-2xl font-bold text-slate-900 sm:text-3xl">Ready to travel like a local?</h4>
            <p className="mt-3 text-slate-600">Build your itinerary in minutes, connect with travelers, and keep everything offline-ready. No spreadsheets, no stress.</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-white shadow-lg shadow-slate-900/10 transition hover:scale-[1.02] hover:bg-slate-800 active:scale-[0.99]">
                <Compass className="h-5 w-5" />
                Get the app
              </button>
              <a href="#features" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-slate-800 shadow ring-1 ring-black/5 transition hover:scale-[1.02] active:scale-[0.99]">
                Explore features
              </a>
            </div>
            <p className="mt-3 text-xs text-slate-500">No sign-up required to try the planner.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
