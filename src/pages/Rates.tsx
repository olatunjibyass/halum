import React from 'react';
import { Page } from '../types';
import { COMPANY_INFO } from '../data';
import { Clock, BarChart2, ShieldAlert, BadgeDollarSign, ArrowRight, Phone, CheckCircle } from 'lucide-react';
import QuoteForm from '../components/QuoteForm';
import { motion } from 'motion/react';

interface RatesProps {
  openQuoteModal: () => void;
  setCurrentPage: (page: Page) => void;
}

export default function RatesPage({ openQuoteModal, setCurrentPage }: RatesProps) {
  return (
    <div id="rates-page" className="bg-slate-950 text-slate-100 min-h-screen">
      
      {/* Page Header */}
      <section className="relative py-20 bg-slate-900 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=1200&q=80"
            alt="Aggregates stone"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest block">HAULAGE BILLING MODELS</span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tighter text-white font-display uppercase">Rates & Operations Pricing</h1>
          <p className="text-slate-300 text-base max-w-3xl mx-auto leading-relaxed font-light italic">
            "Transparent pricing models structured to keep your project within budget. We coordinate quotes based on certified scale weights and regional quarry-to-site trucking coordinates."
          </p>
        </div>
      </section>

      {/* Pricing Models Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          
          {/* Model 1: Hourly */}
          <div className="bg-slate-900 border border-white/5 rounded-none p-6 sm:p-8 space-y-6 flex flex-col justify-between hover:border-slate-800 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-emerald-600/15 text-emerald-500 rounded-none border border-white/5">
                  <Clock size={28} />
                </div>
                <div>
                  <h3 className="text-white font-black text-xl font-display uppercase tracking-tight">Hourly Operations</h3>
                  <span className="text-xs text-emerald-500 font-bold uppercase tracking-wider">Shuttle Loops & Site Support</span>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Ideal for local Nova Scotia construction projects requiring continuous hauling between quarries and active job sites, excavation holes, or on-site material relocation.
              </p>
              
              <div className="border-t border-slate-800/80 pt-4 space-y-4">
                <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider">KEY FEATURES & ADVANTAGES:</span>
                <ul className="space-y-3 text-xs">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={15} />
                    <span><strong>Flexible Scheduling:</strong> Trucks are dedicated entirely to your foreman's on-site radio dispatch, adapting instantly to dig speeds.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={15} />
                    <span><strong>Dedicated Truck Allocation:</strong> Keeps a steady row of tri-axles moving back and forth to prevent excavators from idling.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={15} />
                    <span><strong>Efficient Material Movement:</strong> Best suited for deep trenches, watermain operations, and road paving where millings must be cleared instantly.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800/60 mt-6 flex justify-between items-center">
              <span className="text-[10px] font-bold text-slate-500">NSPW Logging Certified</span>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-bold text-xs rounded-none transition-all border-b-2 border-slate-600 cursor-pointer uppercase tracking-wider flex items-center gap-2"
              >
                <Phone size={13} className="text-emerald-500" />
                Call for Hourly Quote
              </a>
            </div>
          </div>

          {/* Model 2: Per-Ton / Per-Load */}
          <div className="bg-slate-900 border border-white/5 rounded-none p-6 sm:p-8 space-y-6 flex flex-col justify-between hover:border-slate-800 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-emerald-600/15 text-emerald-500 rounded-none border border-white/5">
                  <BadgeDollarSign size={28} />
                </div>
                <div>
                  <h3 className="text-white font-black text-xl font-display uppercase tracking-tight">Per-Ton / Per-Load Pricing</h3>
                  <span className="text-xs text-emerald-500 font-bold uppercase tracking-wider">Bulk Aggregates & Supply Chains</span>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Perfect for large-scale commercial developments, public highway works, or landscape grading projects requiring bulk aggregate imports directly from regional quarry depots.
              </p>

              <div className="border-t border-slate-800/80 pt-4 space-y-4">
                <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider">KEY FEATURES & ADVANTAGES:</span>
                <ul className="space-y-3 text-xs">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={15} />
                    <span><strong>Transparent Unit Pricing:</strong> You pay strictly for certified quarry weight tickets, preventing billing surprises.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={15} />
                    <span><strong>Accurate Load Tracking:</strong> Detailed material manifests and scale receipts delivered instantly to your accounts payable.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={15} />
                    <span><strong>Cost-Effective Budgeting:</strong> Eliminates site-delay billing risks. Pay only for the tonnage actively delivered.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800/60 mt-6 flex justify-between items-center">
              <span className="text-[10px] font-bold text-slate-500">Certified Scale Receipts</span>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-none transition-all cursor-pointer border-b-2 border-emerald-800 uppercase tracking-wider flex items-center gap-2"
              >
                <Phone size={13} />
                Call for Per-Ton Quote
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Embedded Calculator Form */}
      <section className="py-20 bg-slate-900/40 border-t border-b border-white/5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest block">HAULAGE CALCULATOR</span>
            <h2 className="text-3xl font-black text-white tracking-tighter uppercase font-display">Request Pricing & Route Assessment</h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Simulate aggregate tons and regional distance metrics below to instantly calculate bulk estimates, or submit to dispatcher to secure our active rates.
            </p>
          </div>

          <QuoteForm />
        </div>
      </section>

      {/* Pricing Surcharge Transparency Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto p-6 bg-slate-900 border border-white/5 rounded-none space-y-4">
          <div className="flex gap-3 items-start">
            <ShieldAlert className="text-emerald-500 shrink-0 mt-0.5" size={20} />
            <div className="space-y-1 text-left">
              <h4 className="text-white font-bold text-sm uppercase tracking-wide font-display">Nova Scotia Hauling Surcharge Transparency</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                We are proud members of the Atlantic trucking trade community. All pricing quotes represent highly competitive base tariffs. Final invoices are fully itemized, including Nova Scotia Public Works safety manifest filings, regional route parameters, and certified quarry weight tickets.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
