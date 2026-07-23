import React from 'react';
import { INDUSTRIES, COMPANY_INFO } from '../data';
import { Page } from '../types';
import { Building2, Users, Briefcase, Trees, HardHat, Map, Construction, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { motion } from 'motion/react';

interface IndustriesProps {
  openQuoteModal: () => void;
  setCurrentPage: (page: Page) => void;
}

export default function IndustriesPage({ openQuoteModal, setCurrentPage }: IndustriesProps) {

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="h-6 w-6 text-emerald-500" />;
      case 'Users': return <Users className="h-6 w-6 text-emerald-500" />;
      case 'Briefcase': return <Briefcase className="h-6 w-6 text-emerald-500" />;
      case 'Trees': return <Trees className="h-6 w-6 text-emerald-500" />;
      case 'HardHat': return <HardHat className="h-6 w-6 text-emerald-500" />;
      case 'Map': return <Map className="h-6 w-6 text-emerald-500" />;
      default: return <Construction className="h-6 w-6 text-emerald-500" />;
    }
  };

  const industryLogistics: Record<string, string[]> = {
    'construction': [
      'High-tonnage foundational sand deliveries',
      'Continuous aggregate supply loops for active concrete pours',
      'Coordinated stockpile management and storage logistics'
    ],
    'general-contractors': [
      'Flexible, multi-phase delivery schedules',
      'Complete invoice and manifest synchronization',
      'Small and large load tandem capacity for residential slots'
    ],
    'municipal': [
      'Full compliance with NSTIR & NSPW safety requirements',
      '24 winter emergency road salt stockpiling support',
      'Watermain excavation trenching soil removal loops'
    ],
    'landscaping': [
      'Premium screened topsoil and decorative mulch haulage',
      'Sub-base gravel supply for retaining walls and driveways',
      'On-time delivery to prevent staging workspace clutter'
    ],
    'developers': [
      'Mass earthworks and site clearing logistics',
      'Pond clay delivery and landscape contouring support',
      'Subdivision gravel foundation loop synchronization'
    ],
    'road-builders': [
      'Asphalt millings transport to regional recycling plants',
      'Synchronized gravel spreading for sub-base grading',
      'Night-shift paving support and continuous highway shuttle runs'
    ],
    'excavation': [
      'High-frequency dumper loop to clear soil, clay, and fractured rock',
      'Fast turnaround scale ticket tracking',
      'Experienced backing operators near active excavator buckets'
    ]
  };

  return (
    <div id="industries-page" className="bg-slate-950 text-slate-100 min-h-screen">
      
      {/* Hero Header */}
      <section className="relative py-20 bg-slate-900 border-b border-slate-800 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80"
            alt="Infrastructure construction site"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest block">WHO WE WORK WITH</span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">Industries We Serve</h1>
          <p className="text-slate-300 text-base max-w-3xl mx-auto leading-relaxed">
            Haulm Transport coordinates robust, safety-certified material hauling logistics custom-tailored for civil contractors, private developers, municipalities, and builders across Nova Scotia.
          </p>
        </div>
      </section>

      {/* Industry Grid Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.id}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700/80 transition-all flex flex-col md:flex-row shadow-lg animate-fade-in"
            >
              <div className="md:w-2/5 h-48 md:h-auto overflow-hidden relative">
                <img
                  src={ind.image}
                  alt={ind.name}
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
              </div>
              
              <div className="p-6 md:w-3/5 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-950 rounded border border-slate-800 text-emerald-500 shrink-0">
                      {getIndustryIcon(ind.iconName)}
                    </div>
                    <h3 className="text-white font-extrabold text-lg tracking-tight leading-tight">
                      {ind.name}
                    </h3>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {ind.description}
                  </p>
                  
                  {/* Detailed Logistics bullet points */}
                  <div className="pt-2">
                    <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                      SPECIFIC SUPPORT LOGISTICS:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {(industryLogistics[ind.id] || []).map((bullet, bid) => (
                        <li key={bid} className="flex items-start gap-1.5">
                          <CheckCircle size={12} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span className="leading-tight text-slate-300">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex justify-between items-center">
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="text-xs font-bold text-emerald-500 hover:text-emerald-400 transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <Phone size={12} />
                    Call Dispatch
                  </a>
                  <span className="text-[10px] font-semibold text-slate-500">NSPW Compliant</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Large Industry Callout */}
      <section className="bg-slate-900/40 border-t border-slate-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Need dedicated dump truck supply chain for public bids?</h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            We provide official bid submission documents, certified aggregate test specs, NSTIR safety records, and clean-soil manifest declarations required for high-monitoring municipal and infrastructure tenders.
          </p>
          <div className="pt-4">
            <button
              onClick={() => {
                setCurrentPage(Page.Contact);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs rounded-xl transition-all hover:scale-105 cursor-pointer"
            >
              Contact our Halifax Estimating Team
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
