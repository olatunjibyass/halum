import React from 'react';
import { FLEET, COMPANY_INFO } from '../data';
import { Page } from '../types';
import { Check, ShieldCheck, Hammer, HardHat, ShieldAlert, FileText, ArrowRight, Truck, Phone } from 'lucide-react';
import { motion } from 'motion/react';

interface FleetProps {
  openQuoteModal: () => void;
  setCurrentPage: (page: Page) => void;
}

export default function FleetPage({ openQuoteModal, setCurrentPage }: FleetProps) {
  const safetySpecs = [
    { title: 'Mandatory Operator Circle Checks', desc: 'Drivers complete full visual and mechanical inspections before departing our Halifax base every morning.' },
    { title: 'Provincial regular audits', desc: 'Complete adherence to Nova Scotia Public Works and NSTIR vehicle safety log books.' },
    { title: 'Asphalt-grade automated tarps', desc: 'Prevents flying particles on public roads. Full lock down on stone, dirt, and debris loads.' },
    { title: 'Electronic spill-guards', desc: 'Heavy-duty rubber mudguards and tailgate tensioners prevent accidental micro-leaks.' },
  ];

  return (
    <div id="fleet-page" className="bg-slate-950 text-slate-100 min-h-screen">
      
      {/* Page Header */}
      <section className="relative py-20 bg-slate-900 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80"
            alt="Trucking line"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest block">HAULM RIGS</span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tighter text-white font-display uppercase">Our Modern Heavy Fleet</h1>
          <p className="text-slate-300 text-base max-w-3xl mx-auto leading-relaxed font-light italic">
            "We operate fully certified tandem, tri-axle, and multi-axle heavy-haul configurations to support any residential or massive civic excavation footprint."
          </p>
        </div>
      </section>

      {/* Fleet Grid Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-16">
          {FLEET.map((vehicle, idx) => (
            <div
              key={vehicle.id}
              className={`bg-slate-900 border border-white/5 rounded-none overflow-hidden flex flex-col lg:flex-row shadow-xl ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Vehicle Image */}
              <div className="lg:w-1/2 h-72 sm:h-96 relative rounded-none overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900 via-transparent to-transparent"></div>
              </div>

              {/* Vehicle Specifications */}
              <div className="lg:w-1/2 p-6 sm:p-10 flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <span className="inline-block px-2.5 py-1 bg-emerald-500/10 rounded-none text-emerald-500 text-[10px] font-bold uppercase tracking-wider mb-2">
                      Payload Class: {vehicle.capacity}
                    </span>
                    <h3 className="text-white font-black text-2xl sm:text-3xl tracking-tighter uppercase font-display">
                      {vehicle.name}
                    </h3>
                    <p className="text-slate-400 text-sm mt-1 italic">
                      "{vehicle.tagline}"
                    </p>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed text-left">
                    <strong className="text-slate-200">Best utilized for: </strong>
                    {vehicle.bestFor}
                  </p>

                  {/* Specs Table */}
                  <div className="bg-slate-950/60 rounded-none p-4 border border-white/5 space-y-2.5 text-left">
                    <h4 className="text-white font-bold text-xs uppercase tracking-wider border-b border-slate-800/80 pb-1.5 flex items-center gap-1.5 font-display">
                      <FileText size={12} className="text-emerald-500" />
                      Technical Spec Sheet
                    </h4>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs font-mono">
                      <div>
                        <span className="text-slate-500 block uppercase text-[10px]">Max Payload Weight</span>
                        <span className="text-slate-300 font-bold">{vehicle.specifications.payloadCapacity}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block uppercase text-[10px]">Axle Configuration</span>
                        <span className="text-slate-300 font-bold">{vehicle.specifications.axleConfig}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block uppercase text-[10px]">Box Cubic Volume</span>
                        <span className="text-slate-300 font-bold">{vehicle.specifications.volumeCapacity}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block uppercase text-[10px]">Primary Materials</span>
                        <span className="text-slate-300 font-bold">{vehicle.specifications.materialType}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800 mt-6 flex flex-col sm:flex-row gap-3 items-center justify-between">
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-none transition-all cursor-pointer flex items-center justify-center gap-2 border-b-2 border-emerald-800 uppercase tracking-wider"
                  >
                    <Phone size={13} />
                    Call Dispatch ({COMPANY_INFO.phone})
                  </a>
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                    Halifax Dispatch Active
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Maintenance & Safety Section */}
      <section className="bg-slate-900/40 border-t border-b border-white/5 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest block">ZERO TOLERANCE SAFETY</span>
            <h2 className="text-3xl font-black text-white tracking-tighter uppercase font-display">Our Preventative Maintenance Program</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              We manage a state-of-the-art service facility in Halifax, ensuring our trucks are safe, reliable, and compliant to prevent breakdown delays on your job site.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Maintenance card */}
            <div className="bg-slate-900 border border-white/5 rounded-none p-6 sm:p-8 space-y-6 text-left">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-slate-950 rounded-none text-emerald-500 border border-white/5">
                  <Hammer size={24} />
                </div>
                <div>
                  <h3 className="text-white font-black text-lg uppercase font-display tracking-tight">Continuous Servicing Guidelines</h3>
                  <p className="text-slate-500 text-xs">Keeping hydraulic lifters and brakes at 100%</p>
                </div>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                Our heavy-haul dump truck structures take major wear and tear during aggregate tipping and concrete dumping. To combat this, we run rigorous mechanical sweeps:
              </p>
              <ul className="space-y-3 text-xs text-slate-400">
                <li className="flex gap-2.5">
                  <span className="text-emerald-500 font-bold font-mono">1.</span>
                  <span><strong>Weekly Hydraulic Pressure Sweeps:</strong> Prevents piston or hydraulic line failure during heavy clay or concrete unloads.</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="text-emerald-500 font-bold font-mono">2.</span>
                  <span><strong>Bi-Weekly Commercial Brake Checks:</strong> All tandem and multi-axle braking systems undergo high-load threshold adjustments.</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="text-emerald-500 font-bold font-mono">3.</span>
                  <span><strong>Tire Load Inspections:</strong> To prevent highway blowouts, tires are continuously scanned for deep aggregate incisions.</span>
                </li>
              </ul>
            </div>

            {/* Operator Safety Card */}
            <div className="bg-slate-900 border border-white/5 rounded-none p-6 sm:p-8 space-y-6 text-left">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-slate-950 rounded-none text-emerald-500 border border-white/5">
                  <HardHat size={24} />
                </div>
                <div>
                  <h3 className="text-white font-black text-lg uppercase font-display tracking-tight">Operator & Safety Standards</h3>
                  <p className="text-slate-500 text-xs">NSTIR & NSPW licensed safety certified professionals</p>
                </div>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                A dump truck is only as safe as its operator. Our drivers are local Nova Scotia experts who undergo high-intensity site training:
              </p>
              <div className="space-y-4">
                {safetySpecs.map((spec, idx) => (
                  <div key={idx} className="flex gap-3">
                    <ShieldCheck className="text-emerald-500 shrink-0 mt-0.5" size={16} />
                    <div>
                      <h4 className="text-slate-200 font-bold text-xs uppercase tracking-wide font-display">{spec.title}</h4>
                      <p className="text-slate-400 text-xs mt-0.5">{spec.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
