import React from 'react';
import { COMPANY_INFO } from '../data';
import { Page } from '../types';
import { ShieldCheck, Truck, Users, Award, Calendar, Landmark, MapPin, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { Logo } from '../components/Logo';

interface AboutProps {
  setCurrentPage: (page: Page) => void;
}

export default function AboutPage({ setCurrentPage }: AboutProps) {
  const values = [
    { title: 'Safety Uncompromised', desc: 'Every truck undergoes thorough circle checks daily, maintaining clean NSTIR logs and NSPW standing.', icon: ShieldCheck },
    { title: 'Experienced Team', desc: 'Our operators have decades of heavy-dump experience navigating tight Nova Scotia site lanes.', icon: Users },
    { title: 'On-Time Integrity', desc: 'We respect project timelines. If an excavator is digging, our trucks are queued and ready.', icon: Truck },
    { title: 'Community Built', desc: 'Halifax-rooted operations actively supporting local civil developments and local jobs.', icon: Landmark },
  ];

  return (
    <div id="about-page" className="bg-slate-950 text-slate-100 min-h-screen">
      
      {/* Page Header */}
      <section className="relative py-20 bg-slate-900 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80"
            alt="Safety meeting"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest block">MEET THE TEAM</span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tighter text-white font-display uppercase">About Haulm Transport</h1>
          <p className="text-slate-300 text-base max-w-3xl mx-auto leading-relaxed">
            Founded with a commitment to reliability, safety, and efficiency, we keep Nova Scotia’s construction and infrastructure projects moving forward.
          </p>
        </div>
      </section>

      {/* Corporate Mission Statement Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="bg-slate-900 border border-white/5 rounded-none p-8 sm:p-12 space-y-6 shadow-xl relative overflow-hidden">
          {/* Accent light decoration */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600"></div>
          
          {/* Logo element for brand representation */}
          <div className="flex justify-center pt-2 mb-2">
            <Logo size="lg" showText={false} />
          </div>

          <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest block">OUR CORPORATE MISSION</span>
          <h2 className="text-2xl sm:text-4xl font-black text-white italic tracking-tight leading-tight font-display">
            "To provide safe, reliable, and efficient bulk material transportation solutions that keep construction and infrastructure projects moving forward."
          </h2>
          <div className="w-16 h-1 bg-emerald-600 mx-auto"></div>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed">
            We understand that delays in material delivery can idle entire excavation and paving crews. That is why we treat our schedule as an absolute contract.
          </p>
        </div>
      </section>

      {/* Company History & Timeline */}
      <section className="bg-slate-900/30 border-t border-b border-white/5 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest block">OUR HISTORY</span>
            <h2 className="text-3xl font-black text-white tracking-tighter uppercase font-display">Halifax-Rooted, Nova Scotia-Wide Logistics</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Haulm Transport started as a single dump truck operations service out of Halifax, Nova Scotia. Recognizing a severe gap in reliable, on-time bulk logistics support for local contractors, we expanded our fleet year-over-year.
            </p>
            <p className="text-slate-400 text-xs leading-relaxed">
              Today, we serve the entire province of Nova Scotia, supplying thousands of tons of aggregates, sand, and soil daily. We maintain solid supply contracts with the region’s premier limestone quarries, allowing us to source materials with highly competitive terms for our partners.
            </p>
            
            <div className="grid grid-cols-2 gap-4 text-left pt-2">
              <div className="p-4 bg-slate-900 rounded-none border border-white/5">
                <span className="text-2xl font-black text-emerald-500 font-mono">1M+</span>
                <span className="block text-[10px] text-slate-400 mt-1 uppercase font-semibold tracking-wider">Tons Hauled Safely</span>
              </div>
              <div className="p-4 bg-slate-900 rounded-none border border-white/5">
                <span className="text-2xl font-black text-white font-mono">80+</span>
                <span className="block text-[10px] text-slate-400 mt-1 uppercase font-semibold tracking-wider">Sourced Quarries</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative rounded-none overflow-hidden h-96 border border-white/5 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80"
              alt="Haulm dump truck fleet parked"
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
          </div>

        </div>
      </section>

      {/* Pillars of Operations Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest block">HAULM PILLARS</span>
          <h2 className="text-3xl font-black text-white tracking-tighter uppercase font-display">Our Safety Commitment & Certifications</h2>
          <p className="text-slate-400 text-sm">
            Bulk material transport requires highly managed operations. We maintain absolute compliance records to protect our crew and your job site.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, id) => {
            const Icon = val.icon;
            return (
              <div key={id} className="p-6 bg-slate-900 border border-white/5 rounded-none hover:border-slate-800 transition-colors space-y-4 text-left">
                <div className="p-3 bg-slate-950 rounded-none text-emerald-500 border border-white/5 w-12 h-12 flex items-center justify-center">
                  <Icon size={22} />
                </div>
                <h3 className="text-white font-bold text-base tracking-tight uppercase font-display">{val.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{val.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Community Involvement section */}
      <section className="bg-slate-900/40 border-t border-b border-white/5 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-4 p-6 bg-emerald-600/5 border border-white/5 rounded-none flex flex-col justify-center items-center text-center h-full">
            <Heart size={44} className="text-emerald-500 animate-pulse mb-3" />
            <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider block">Nova Scotia Proud</span>
            <h3 className="text-white font-black text-lg mt-1 tracking-tight uppercase font-display">Community Investment</h3>
          </div>
          
          <div className="md:col-span-8 space-y-4 text-left">
            <h4 className="text-white font-black text-xl tracking-tighter uppercase font-display">Supporting Halifax, Dartmouth & Nova Scotia Development</h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              We believe in giving back to the regions that keep us operating. Haulm Transport actively sponsors local Nova Scotia youth sports leagues, contributes bulk compost and gravel to community park trail expansions, and partners with regional trade colleges to offer apprenticeships for heavy equipment logistics.
            </p>
            <p className="text-slate-400 text-xs leading-relaxed">
              Our safety teams also participate in municipal public road safety demonstrations, helping educate local high school students and drivers on how to share roads safely with heavy multi-axle commercial dump trucks.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
