import React, { useState } from 'react';
import { SERVICES, COMPANY_INFO } from '../data';
import { Page } from '../types';
import { CheckCircle, Truck, Layers, Calendar, ChevronRight, HelpCircle, Phone, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesPageProps {
  openQuoteModal: () => void;
  setCurrentPage: (page: Page) => void;
}

export default function ServicesPage({ openQuoteModal, setCurrentPage }: ServicesPageProps) {
  const [activeTab, setActiveTab] = useState<string>(SERVICES[0].id);

  const currentService = SERVICES.find(s => s.id === activeTab) || SERVICES[0];

  return (
    <div id="services-page" className="bg-slate-950 text-slate-100 min-h-screen">
      
      {/* Page Header */}
      <section className="relative py-20 bg-slate-900 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
            alt="Aggregate pile background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest block">HAULM LOGISTICS</span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tighter text-white font-display uppercase">Our Hauling & Transportation Services</h1>
          <p className="text-slate-300 text-base max-w-3xl mx-auto leading-relaxed font-light italic">
            "From single-load residential grading to multi-thousand ton highway aggregate links, Haulm Transport operates Nova Scotia's most reliable dump truck dispatch."
          </p>
        </div>
      </section>

      {/* Services Tabs Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Navigation Sidebar / Tabs */}
          <div className="lg:col-span-4 space-y-3">
            <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2 pl-3">
              SELECT A SERVICE LOGISTIC
            </span>
            <div className="flex flex-col gap-2">
              {SERVICES.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`w-full text-left p-4 rounded-none font-bold transition-all flex items-center justify-between border cursor-pointer uppercase tracking-wider ${
                    activeTab === service.id
                      ? 'bg-emerald-600 text-white border-emerald-500 border-b-4 border-emerald-800'
                      : 'bg-slate-900 text-slate-300 border-white/5 hover:border-slate-800 hover:text-white hover:bg-slate-900/50'
                  }`}
                >
                  <span className="text-xs sm:text-sm font-display font-black">{service.title}</span>
                  <ChevronRight size={16} className={activeTab === service.id ? 'text-white' : 'text-slate-600'} />
                </button>
              ))}
            </div>

            {/* Quick dispatch note */}
            <div className="p-5 rounded-none bg-slate-900 border border-white/5 text-xs space-y-3 mt-6">
              <h4 className="text-white font-bold flex items-center gap-2 uppercase tracking-wider font-display">
                <Truck size={14} className="text-emerald-500" />
                Halifax Dispatch Desk
              </h4>
              <p className="text-slate-400 leading-relaxed">
                Need continuous back-to-back haul cycles? We sync directly with on-site foreman radios to maintain aggregate supply flow.
              </p>
              <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="block text-emerald-500 font-bold hover:underline">
                Call {COMPANY_INFO.phone}
              </a>
            </div>
          </div>

          {/* Service Details Card View */}
          <div className="lg:col-span-8 bg-slate-900 border border-white/5 rounded-none overflow-hidden shadow-xl p-6 sm:p-8 space-y-8">
            <div className="h-64 sm:h-80 overflow-hidden rounded-none relative">
              <img
                src={currentService.image}
                alt={currentService.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-slate-950/80 backdrop-blur-sm border border-white/5 rounded-none text-emerald-500 text-xs font-bold uppercase tracking-wider">
                  Verified Operation
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tighter uppercase font-display">
                {currentService.title} Details
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                {currentService.description} We work hand-in-hand with municipal yards, local private quarries, and regional contractors to ensure your transport loops are safe, manifest-compliant, and optimized for site entry.
              </p>
            </div>

            {/* Full Details List */}
            <div className="space-y-4 border-t border-b border-white/5 py-6">
              <h3 className="text-slate-200 font-bold text-xs uppercase tracking-wider font-display">
                What We Transport & Support:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {currentService.fullDetails.map((detail, index) => (
                  <div key={index} className="flex items-start gap-2.5 p-3 bg-slate-950/40 rounded-none border border-white/5">
                    <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={14} />
                    <span className="text-slate-300 text-xs font-semibold leading-tight">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dispatch details & CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 bg-slate-950/40 p-5 rounded-none border border-white/5">
              <div className="space-y-1 text-left">
                <span className="text-[10px] font-bold text-slate-500 uppercase">DISPATCH TURNAROUND</span>
                <p className="text-slate-300 text-xs">Certified tri-axle and tandem routes available across Halifax & Nova Scotia.</p>
              </div>
              <div className="shrink-0 w-full sm:w-auto">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-none transition-all cursor-pointer flex items-center justify-center gap-2 border-b-2 border-emerald-800 uppercase tracking-wider"
                >
                  <Phone size={14} />
                  Call Dispatch ({COMPANY_INFO.phone})
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Fleet Standards Section on Services */}
      <section className="bg-slate-900/40 border-t border-b border-white/5 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest block">OPERATING STANDARDS</span>
            <h2 className="text-3xl font-black text-white tracking-tighter uppercase font-display">Nova Scotia Public Works Safety Compliance</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Every single load transported by Haulm Transport follows strict compliance procedures set by Nova Scotia Public Works (NSPW), NSTIR, and Nova Scotia Environment (NSECC).
            </p>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-emerald-500" />
                Electronic Manifest Logging for clean soil & clean fill transfer.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-emerald-500" />
                Asphalt-grade heavy protective tarps standard on all vehicles.
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-emerald-500" />
                Regular multi-point safety & weight inspections.
              </li>
            </ul>
            <div className="pt-2">
              <button
                onClick={() => {
                  setCurrentPage(Page.Fleet);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-none border-b-2 border-slate-600 transition-all cursor-pointer inline-flex items-center gap-2 uppercase tracking-wider"
              >
                Inspect our Fleet Spec Sheets
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/earth_moving.jpg?v=1"
              alt="Dump truck on construction road site"
              className="rounded-none shadow-xl border border-white/5"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
