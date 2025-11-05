import React from 'react';
import {
  MapPin,
  Compass,
  Home,
  Users,
  Calendar,
  Heart,
  Download,
  LifeBuoy,
  Package,
  Wallet,
  Video,
  FileCheck,
} from 'lucide-react';

const features = [
  {
    title: 'Hidden Gems',
    desc: 'Discover local food stalls, cultural spots, and real city experiences — not tourist traps.',
    Icon: MapPin,
    tone: 'from-rose-400/30 to-amber-300/30',
  },
  {
    title: 'Easy Ride',
    desc: 'Smart transport suggestions based on budget, time & weather + scam-free navigation.',
    Icon: Compass,
    tone: 'from-sky-400/30 to-emerald-300/30',
  },
  {
    title: 'Stay Your Way',
    desc: 'Filters for hourly stays, solo-friendly homes, group villas & safe verified hosts.',
    Icon: Home,
    tone: 'from-violet-400/30 to-fuchsia-300/30',
  },
  {
    title: 'TravelMatch',
    desc: 'Meet verified travelers with similar vibes. Build memories, not awkward moments.',
    Icon: Users,
    tone: 'from-amber-400/30 to-rose-300/30',
  },
  {
    title: "What's Happening Around",
    desc: 'Real-time events — gigs, festivals, markets, gatherings, workshops.',
    Icon: Calendar,
    tone: 'from-emerald-400/30 to-lime-300/30',
  },
  {
    title: 'Live Like a Local',
    desc: 'Stay with locals, eat with families, learn culture firsthand.',
    Icon: Heart,
    tone: 'from-rose-400/30 to-orange-300/30',
  },
  {
    title: 'Offline Ready',
    desc: 'Maps, saved videos, guides — works even without network.',
    Icon: Download,
    tone: 'from-slate-400/30 to-sky-300/30',
  },
  {
    title: 'Quick Emergency Access',
    desc: 'SOS contacts, nearest hospitals, police, embassy & safe routes.',
    Icon: LifeBuoy,
    tone: 'from-red-400/30 to-rose-300/30',
  },
  {
    title: 'Pack With Me',
    desc: 'Auto packing suggestions based on city, weather, culture, and itinerary.',
    Icon: Package,
    tone: 'from-amber-400/30 to-yellow-300/30',
  },
  {
    title: 'Expense Tracker',
    desc: 'Track spending, split bills, stay on budget without spreadsheets.',
    Icon: Wallet,
    tone: 'from-emerald-400/30 to-teal-300/30',
  },
  {
    title: 'Reviews & Vlogs',
    desc: 'Real traveler videos + creator content. No fake reviews.',
    Icon: Video,
    tone: 'from-sky-400/30 to-indigo-300/30',
  },
  {
    title: 'Visa Assist',
    desc: 'Instant visa requirements + official application links & reminders.',
    Icon: FileCheck,
    tone: 'from-purple-400/30 to-cyan-300/30',
  },
];

const Features = () => {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="font-manrope text-3xl font-bold text-slate-900 sm:text-4xl">Travel shouldn’t feel like homework</h2>
        <p className="mt-3 text-slate-600">Plan, explore, connect, and stay safe — all in one place. Thoughtful tools with a friendly vibe.</p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ title, desc, Icon, tone }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-2xl bg-white/70 p-5 shadow-sm ring-1 ring-black/5 backdrop-blur transition hover:shadow-xl"
          >
            <div className={`pointer-events-none absolute -inset-20 bg-gradient-to-br ${tone} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-60`} />
            <div className="relative z-10">
              <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-white/80 p-2 shadow ring-1 ring-black/5">
                <Icon className="h-5 w-5 text-slate-800" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
