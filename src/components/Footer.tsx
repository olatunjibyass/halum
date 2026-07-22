import React from 'react';
import { Page } from '../types';
import { COMPANY_INFO } from '../data';
import { Truck, Phone, Mail, MapPin, Clock, Shield, Award, CheckCircle2 } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const year = new Date().getFullYear();

  return (
    <footer id="app-footer" className="bg-slate-950 text-slate-400 border-t border-slate-900">
      {/* Primary Footer Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Profile */}
          <div className="space-y-4">
            <Logo size="sm" subtext="NOVA SCOTIA BULK LOGISTICS" />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Nova Scotia's choice for reliable heavy-haul, dump truck transportation, and aggregates supply chain. Keeping major infrastructure on time and on budget.
            </p>
            {/* Certifications Row */}
            <div className="pt-2">
              <span className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Compliance & Safety
              </span>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-slate-900 border border-slate-800 text-emerald-400 py-1 px-2.5 rounded-none">
                  <Shield size={12} /> NSTIR Compliant
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-slate-900 border border-slate-800 text-emerald-400 py-1 px-2.5 rounded-none">
                  <Award size={12} /> NSPW Regulated
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-slate-900 border border-slate-800 text-emerald-400 py-1 px-2.5 rounded-none">
                  <CheckCircle2 size={12} /> NSECC Compliant
                </span>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base uppercase tracking-wider border-b border-slate-800 pb-2">
              Get in Touch
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                <span>
                  <strong className="block text-white font-semibold">Business Address</strong>
                  {COMPANY_INFO.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-emerald-500 shrink-0" size={18} />
                <span>
                  <strong className="block text-white font-semibold">24/7 Dispatch Hotline</strong>
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-emerald-500 transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-emerald-500 shrink-0" size={18} />
                <span>
                  <strong className="block text-white font-semibold">Email Sales</strong>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-emerald-500 transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Nav Links */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base uppercase tracking-wider border-b border-slate-800 pb-2">
              Navigations
            </h3>
            <ul className="grid grid-cols-1 gap-2.5 text-sm">
              <li>
                <button onClick={() => handleNavClick(Page.Home)} className="hover:text-white transition-colors cursor-pointer text-left block">
                  Home Dashboard
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick(Page.Services)} className="hover:text-white transition-colors cursor-pointer text-left block">
                  Our Hauling Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick(Page.Industries)} className="hover:text-white transition-colors cursor-pointer text-left block">
                  Industries We Serve
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick(Page.Fleet)} className="hover:text-white transition-colors cursor-pointer text-left block">
                  Modern Fleet Specs
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick(Page.Rates)} className="hover:text-white transition-colors cursor-pointer text-left block">
                  Rates & Per-Load Pricing
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick(Page.About)} className="hover:text-white transition-colors cursor-pointer text-left block">
                  About Our Crew
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick(Page.Contact)} className="hover:text-white transition-colors cursor-pointer text-left block">
                  Contact & Dispatch Info
                </button>
              </li>
            </ul>
          </div>

          {/* Hours & Coverage */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base uppercase tracking-wider border-b border-slate-800 pb-2">
              Business Hours
            </h3>
            <ul className="space-y-3.5 text-sm">
              {COMPANY_INFO.hours.map((h, idx) => (
                <li key={idx} className="flex gap-2.5">
                  <Clock className="text-emerald-500 shrink-0 mt-0.5" size={16} />
                  <div>
                    <span className="block font-semibold text-slate-300">{h.days}</span>
                    <span className="block text-slate-400 text-xs">{h.times}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Nova Scotia Service Map / Coverage visual placeholder */}
        <div className="mt-12 p-6 bg-slate-900 border border-slate-800 rounded-none">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="font-bold text-white text-base flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                Active Nova Scotia Service Coverage Zone
              </h4>
              <p className="text-slate-400 text-sm mt-1 max-w-2xl">
                Serving the Halifax Regional Municipality (HRM) and key infrastructure corridors across Nova Scotia. Including: Halifax, Dartmouth, Bedford, Sackville, Truro, Cape Breton, Sydney, New Glasgow, Amherst, Kentville, and Bridgewater.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 shrink-0">
              <span className="px-2.5 py-1 bg-slate-950 border border-slate-800 rounded-none text-slate-300 text-xs font-medium">HRM & Dartmouth Core</span>
              <span className="px-2.5 py-1 bg-slate-950 border border-slate-800 rounded-none text-slate-300 text-xs font-medium">Truro & Central NS</span>
              <span className="px-2.5 py-1 bg-slate-950 border border-slate-800 rounded-none text-slate-300 text-xs font-medium">Cape Breton</span>
              <span className="px-2.5 py-1 bg-slate-950 border border-slate-800 rounded-none text-slate-300 text-xs font-medium">Annapolis Valley & South Shore</span>
            </div>
          </div>
        </div>

        {/* SEO Disclaimer / Highlights */}
        <div className="mt-8 pt-8 border-t border-slate-900 flex flex-wrap justify-between items-center gap-4 text-xs text-slate-500">
          <div>
            <span className="mr-4"><strong>SEO optimized:</strong> Dump Truck Services Nova Scotia | Aggregate Hauling Halifax | Gravel Delivery Dartmouth | Heavy Earth Moving Nova Scotia</span>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 pt-6 border-t border-slate-900 text-center text-xs text-slate-600 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {year} {COMPANY_INFO.name}. All Rights Reserved. Operations are compliant with NSTIR, NSPW, NSECC, and regional municipal bylaws.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Haulage</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-400 transition-colors">Safety Manual</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
