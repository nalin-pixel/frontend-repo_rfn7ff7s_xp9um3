import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import SocialProof from './components/SocialProof';
import FooterCTA from './components/FooterCTA';

const App = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(255,200,150,0.15),transparent_60%)]">
      <header className="sticky top-0 z-50 w-full backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-amber-400 to-rose-400 shadow" />
            <span className="font-manrope text-lg font-extrabold tracking-tight text-slate-900">Wayv</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-700 sm:flex">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#get-started" className="hover:text-slate-900">Get the app</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <SocialProof />
        <FooterCTA />
      </main>

      <footer className="border-t border-slate-200/60 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-600 sm:flex-row">
          <p>© {new Date().getFullYear()} Wayv — Travel, but smarter.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
