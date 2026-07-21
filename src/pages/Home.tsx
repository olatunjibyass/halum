import React from 'react';
import { Page, ServiceItem, ProjectItem } from '../types';
import { SERVICES, PROJECTS, TESTIMONIALS, COMPANY_INFO } from '../data';
import { Truck, ShieldCheck, Award, Users, CheckCircle, ArrowRight, Phone, ShieldAlert, Zap, Calendar, Star, Layers, TrendingDown, Trash2, CloudSnow } from 'lucide-react';
import GoogleReviewWidget from '../components/GoogleReviewWidget';
import { motion } from 'motion/react';

interface HomeProps {
  setCurrentPage: (page: Page) => void;
  openQuoteModal: () => void;
}

export default function Home({ setCurrentPage, openQuoteModal }: HomeProps) {
  const stats = [
    { label: '24/7 Availability', desc: 'Continuous night paving & emergency dispatch support', icon: Award },
    { label: 'Fully Licensed & Insured', desc: 'NSTIR, NSPW registered and NSECC compliant operators', icon: ShieldCheck },
    { label: 'Experienced Operators', desc: 'Halifax-based safety trained professional truck drivers', icon: Users },
    { label: 'Commercial & Civil Projects', desc: 'Equipped for heavy mass excavation and highway links', icon: Truck },
  ];

  const whyChooseUs = [
    { title: 'Reliable Scheduling', desc: 'Precision tracking ensuring our trucks arrive exactly when scheduled.' },
    { title: 'Competitive Bulk Pricing', desc: 'Pre-negotiated quarry rates passed directly down to contractors.' },
    { title: 'Safety Focused Operations', desc: 'Daily inspections, certified scale compliance, and safe unloading protocols.' },
    { title: 'Modern Fleet Class', desc: 'High-spec Tri-Axles and Tandems outfitted with dynamic asphalt-tarps.' },
    { title: 'Experienced Drivers', desc: 'Local Nova Scotia union-trained operators with complete safety training.' },
    { title: 'On-Time Deliveries', desc: 'Continuous loops ensuring materials keep shovels and paving equipment moving.' },
  ];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return <Layers className="h-6 w-6 text-emerald-500" />;
      case 'TrendingDown': return <TrendingDown className="h-6 w-6 text-emerald-500" />;
      case 'Trash2': return <Trash2 className="h-6 w-6 text-emerald-500" />;
      case 'CloudSnow': return <CloudSnow className="h-6 w-6 text-emerald-500" />;
      default: return <Truck className="h-6 w-6 text-emerald-500" />;
    }
  };

  const handleNavigateToService = (serviceId: string) => {
    setCurrentPage(Page.Services);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  return (
    <div id="home-page" className="bg-slate-950 text-slate-100">
      
      {/* 1. Hero Banner Section - Editorial split layout */}
      <section className="relative min-h-[90vh] flex items-stretch overflow-hidden bg-slate-950 border-b border-white/5">
        {/* Background Image with Rich Deep Tint Overlay */}
        <div className="absolute inset-0 z-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1920&q=80"
            alt="Heavy Dump Truck Fleet"
            className="w-full h-full object-cover object-center animate-pulse"
            style={{ animationDuration: '8s' }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-slate-900/50"></div>
          {/* Subtle Grid Accent */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch">
          {/* Left: Editorial Hero Column */}
          <div className="w-full lg:w-3/5 flex flex-col justify-center px-6 sm:px-12 py-16 sm:py-24 space-y-8 relative overflow-hidden">
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block px-3 py-1 bg-emerald-600 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-6"
              >
                Premium Hauling Solutions
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tighter uppercase mb-6 text-white text-left font-display"
              >
                Reliable <span className="text-emerald-500 italic">Dump Truck</span><br />Hauling Services
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-lg sm:text-xl text-slate-300 max-w-lg mb-8 leading-relaxed font-light italic text-left"
              >
                "We safely transport aggregates, soil, and demolition materials with dependable service across Nova Scotia and surrounding Atlantic regions."
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  id="hero-quote-btn"
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="bg-white text-slate-950 px-8 py-4 font-bold uppercase tracking-widest text-xs sm:text-sm border-b-4 border-slate-400 hover:bg-slate-100 transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <Phone size={16} className="text-emerald-600" />
                  Call to request a Quote
                </a>
                <button
                  id="hero-fleet-btn"
                  onClick={() => {
                    setCurrentPage(Page.Fleet);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="border border-white/30 text-white px-8 py-4 font-bold uppercase tracking-widest text-xs sm:text-sm hover:bg-white/10 transition-colors cursor-pointer"
                >
                  Our Fleet Specs
                </button>
              </motion.div>
            </div>
          </div>

          {/* Right: High-Density Info Panel Column */}
          <div className="w-full lg:w-2/5 bg-slate-900/90 border-t lg:border-t-0 lg:border-l border-white/5 p-6 sm:p-10 flex flex-col justify-between gap-10 backdrop-blur-sm">
            {/* Stats Grid */}
            <div>
              <div className="text-[10px] text-emerald-500 font-bold uppercase tracking-[0.2em] mb-6">Operation Metrics</div>
              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-2 border-emerald-500 pl-4 py-1">
                  <div className="text-2xl sm:text-3xl font-black font-display text-white">24/7</div>
                  <div className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold">Availability</div>
                </div>
                <div className="border-l-2 border-emerald-500 pl-4 py-1">
                  <div className="text-2xl sm:text-3xl font-black font-display text-white">100%</div>
                  <div className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold">Licensed & Insured</div>
                </div>
                <div className="border-l-2 border-emerald-500 pl-4 py-1">
                  <div className="text-2xl sm:text-3xl font-black font-display text-white">15+</div>
                  <div className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold">Years Experience</div>
                </div>
                <div className="border-l-2 border-emerald-500 pl-4 py-1">
                  <div className="text-2xl sm:text-3xl font-black font-display text-white">0</div>
                  <div className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold">Safety Incidents</div>
                </div>
              </div>
            </div>

            {/* Why Choose Us List */}
            <div>
              <div className="text-[10px] text-emerald-500 font-bold uppercase tracking-[0.2em] mb-6">The Haulm Advantage</div>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-left">
                  <div className="w-5 h-5 flex items-center justify-center bg-white rounded-full text-slate-900 text-xs font-bold shrink-0">✓</div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-200 tracking-tight">Reliable Scheduling & On-Time Delivery</span>
                </li>
                <li className="flex items-center gap-3 text-left">
                  <div className="w-5 h-5 flex items-center justify-center bg-white rounded-full text-slate-900 text-xs font-bold shrink-0">✓</div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-200 tracking-tight">Competitive Pricing Models (Hourly/Ton)</span>
                </li>
                <li className="flex items-center gap-3 text-left">
                  <div className="w-5 h-5 flex items-center justify-center bg-white rounded-full text-slate-900 text-xs font-bold shrink-0">✓</div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-200 tracking-tight">Modern Fleet: Tri-Axle & Tandem</span>
                </li>
                <li className="flex items-center gap-3 text-left">
                  <div className="w-5 h-5 flex items-center justify-center bg-white rounded-full text-slate-900 text-xs font-bold shrink-0">✓</div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-200 tracking-tight">Certified Professional Operators</span>
                </li>
              </ul>
            </div>

            {/* Industries Ticker */}
            <div>
              <div className="text-[9px] text-slate-500 font-bold uppercase tracking-[0.2em] mb-3">Industries We Serve</div>
              <div className="flex flex-wrap gap-2 justify-start">
                <span className="px-2.5 py-1 bg-slate-800 text-[10px] text-slate-300 font-bold uppercase tracking-wider">Municipal</span>
                <span className="px-2.5 py-1 bg-slate-800 text-[10px] text-slate-300 font-bold uppercase tracking-wider">Infrastructure</span>
                <span className="px-2.5 py-1 bg-slate-800 text-[10px] text-slate-300 font-bold uppercase tracking-wider">Landscaping</span>
                <span className="px-2.5 py-1 bg-slate-800 text-[10px] text-slate-300 font-bold uppercase tracking-wider">Road Building</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Bottom Service Strip */}
      <section className="w-full bg-slate-950 border-y border-slate-800/80 shadow-2xl relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-800/80">
          <div
            onClick={() => handleNavigateToService('aggregate_hauling')}
            className="group relative p-6 sm:p-7 flex flex-col justify-between bg-slate-950 hover:bg-slate-900/90 transition-all duration-300 cursor-pointer min-h-[145px] border-t-2 border-emerald-500 hover:shadow-[0_10px_30px_rgba(16,185,129,0.15)]"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300 rounded-lg">
                <Layers className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold tracking-widest text-emerald-500 uppercase opacity-0 group-hover:opacity-100 transition-opacity">Explore &rarr;</span>
            </div>
            <div>
              <h3 className="font-black uppercase tracking-tight text-base sm:text-lg text-white group-hover:text-emerald-400 transition-colors font-display">
                Aggregate Hauling
              </h3>
              <p className="text-[11px] text-emerald-400/90 uppercase font-bold tracking-wider mt-1">
                Gravel • Stone • Sand • Slag
              </p>
            </div>
          </div>

          <div
            onClick={() => handleNavigateToService('earth_moving')}
            className="group relative p-6 sm:p-7 flex flex-col justify-between bg-slate-950 hover:bg-slate-900/90 transition-all duration-300 cursor-pointer min-h-[145px] border-t-2 border-emerald-500/60 hover:border-emerald-500 hover:shadow-[0_10px_30px_rgba(16,185,129,0.15)]"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300 rounded-lg">
                <Truck className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold tracking-widest text-emerald-500 uppercase opacity-0 group-hover:opacity-100 transition-opacity">Explore &rarr;</span>
            </div>
            <div>
              <h3 className="font-black uppercase tracking-tight text-base sm:text-lg text-white group-hover:text-emerald-400 transition-colors font-display">
                Earth Moving
              </h3>
              <p className="text-[11px] text-emerald-400/90 uppercase font-bold tracking-wider mt-1">
                Topsoil • Dirt • Excavated Rock
              </p>
            </div>
          </div>

          <div
            onClick={() => handleNavigateToService('demolition_hauling')}
            className="group relative p-6 sm:p-7 flex flex-col justify-between bg-slate-950 hover:bg-slate-900/90 transition-all duration-300 cursor-pointer min-h-[145px] border-t-2 border-emerald-500/60 hover:border-emerald-500 hover:shadow-[0_10px_30px_rgba(16,185,129,0.15)]"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300 rounded-lg">
                <Trash2 className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold tracking-widest text-emerald-500 uppercase opacity-0 group-hover:opacity-100 transition-opacity">Explore &rarr;</span>
            </div>
            <div>
              <h3 className="font-black uppercase tracking-tight text-base sm:text-lg text-white group-hover:text-emerald-400 transition-colors font-display">
                Construction Waste
              </h3>
              <p className="text-[11px] text-emerald-400/90 uppercase font-bold tracking-wider mt-1">
                Concrete • Asphalt • Debris
              </p>
            </div>
          </div>

          <div
            onClick={() => handleNavigateToService('seasonal_hauling')}
            className="group relative p-6 sm:p-7 flex flex-col justify-between bg-slate-950 hover:bg-slate-900/90 transition-all duration-300 cursor-pointer min-h-[145px] border-t-2 border-emerald-500/60 hover:border-emerald-500 hover:shadow-[0_10px_30px_rgba(16,185,129,0.15)]"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300 rounded-lg">
                <CloudSnow className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold tracking-widest text-emerald-500 uppercase opacity-0 group-hover:opacity-100 transition-opacity">Explore &rarr;</span>
            </div>
            <div>
              <h3 className="font-black uppercase tracking-tight text-base sm:text-lg text-white group-hover:text-emerald-400 transition-colors font-display">
                Seasonal Services
              </h3>
              <p className="text-[11px] text-emerald-400/90 uppercase font-bold tracking-wider mt-1">
                Snow Removal • Road Salt • Mulch
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/40 relative">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest block">HAULING EXPERTISE</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">Heavy-Duty Materials Haulage Services</h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Equipped with heavy-duty tandem and tri-axle vehicles to safely dispatch and unload loose bulk aggregates, materials, and debris.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 4).map((service) => (
              <div
                key={service.id}
                className="bg-slate-900 border border-slate-800/80 rounded-2xl overflow-hidden hover:border-slate-700 transition-all group flex flex-col h-full"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 opacity-85"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                  <div className="absolute top-4 right-4 p-2 bg-slate-950/80 backdrop-blur-sm border border-slate-800 rounded-lg">
                    {getServiceIcon(service.iconName)}
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-3.5">
                    <h3 className="text-white font-bold text-lg group-hover:text-emerald-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {service.fullDetails.slice(0, 3).map((item, idy) => (
                        <li key={idy} className="flex items-center gap-2">
                          <CheckCircle size={12} className="text-emerald-500 shrink-0" />
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-6 border-t border-slate-800 mt-6 flex justify-between items-center">
                    <button
                      onClick={() => handleNavigateToService(service.id)}
                      className="text-xs font-bold text-emerald-500 hover:text-emerald-400 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      Full Scope details
                      <ArrowRight size={12} />
                    </button>
                    <a
                      href={`tel:${COMPANY_INFO.phoneRaw}`}
                      className="text-xs font-bold text-slate-400 hover:text-white transition-all cursor-pointer flex items-center gap-1"
                    >
                      <Phone size={12} className="text-emerald-500" />
                      Call Dispatch
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Quick Pricing Card to fill the grid slot */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-500/10 rounded-2xl p-8 flex flex-col justify-between h-full relative overflow-hidden">
              <div className="absolute right-[-40px] bottom-[-40px] text-emerald-500/5">
                <Truck size={180} />
              </div>
              <div className="space-y-4">
                <span className="inline-block px-2.5 py-1 bg-emerald-500/10 rounded text-emerald-500 text-[10px] font-bold uppercase tracking-wider">
                  Bulk Operations
                </span>
                <h3 className="text-white font-extrabold text-xl">Need customized high-tonnage hauling contracts?</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  For continuous multi-mile roadway construction, quarry shuttle supply loops, or large site developments, we offer customized per-ton and per-load pricing arrangements.
                </p>
              </div>
              <div className="space-y-4 pt-6">
                <button
                  onClick={() => {
                    setCurrentPage(Page.Rates);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-bold text-xs rounded-xl transition-all cursor-pointer border border-slate-700 flex items-center justify-center gap-1.5"
                >
                  View Operations & Rates
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-b border-slate-900 relative bg-slate-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest block">HAULM STANDARDS</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">Why General Contractors Choose Us</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Moving bulk materials requires flawless scheduling, high safety standards, and reliable logistics capacity. At Haulm Transport, we pride ourselves on absolute transparency and compliance.
            </p>
            <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl flex gap-3">
              <Award className="text-emerald-500 shrink-0 mt-1" size={22} />
              <div>
                <h4 className="text-white font-bold text-sm">Provincially Compliant Haulage</h4>
                <p className="text-slate-400 text-xs mt-0.5">We maintain rigid NSTIR certificates, Nova Scotia Public Works oversight audits, and safety logs.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="p-5 bg-slate-900 border border-slate-800/80 rounded-xl space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-emerald-500 shrink-0" size={16} />
                  <h3 className="text-white font-bold text-sm">{item.title}</h3>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Featured Projects Gallery */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/20">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-slate-800 pb-6">
            <div>
              <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest block">ON THE FIELD</span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mt-1">Featured Hauling Operations</h2>
            </div>
            <button
              onClick={() => {
                setCurrentPage(Page.About);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-sm font-bold text-emerald-500 hover:text-emerald-400 transition-colors flex items-center gap-1 cursor-pointer"
            >
              Learn about our history
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group relative bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg h-80">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 opacity-60 group-hover:opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5 space-y-1">
                  <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">
                    {project.category}
                  </span>
                  <h3 className="text-white font-bold text-base tracking-tight leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-xs flex items-center gap-1">
                    📍 {project.location}
                  </p>
                  <div className="pt-2">
                    <span className="inline-block text-[10px] font-bold bg-slate-950/80 border border-slate-800 text-slate-300 py-1 px-2.5 rounded">
                      {project.stats}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials and Google reviews widget */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Column 1: Standard Testimonials */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest block">CLIENT STORIES</span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">What Our Partners Say</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                From municipal infrastructure directors to private residential excavators, we ensure safe and efficient bulk material delivery on every project.
              </p>
            </div>

            <div className="space-y-6">
              {TESTIMONIALS.slice(0, 2).map((t) => (
                <div key={t.id} className="p-6 bg-slate-900 rounded-2xl border border-slate-800/80 space-y-4 relative">
                  <div className="absolute top-6 right-6 text-emerald-500/10 text-6xl font-serif font-black select-none leading-none">“</div>
                  <div className="flex text-amber-500 gap-0.5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-slate-300 text-xs italic leading-relaxed">
                    "{t.content}"
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-800/60">
                    <div>
                      <h4 className="text-white font-bold text-sm">{t.name}</h4>
                      <span className="text-slate-500 text-[11px]">{t.role}, <strong className="text-slate-400">{t.company}</strong></span>
                    </div>
                    <span className="text-slate-500 text-[10px] font-mono">{t.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Interactive Google Review Widget */}
          <div className="lg:col-span-6">
            <GoogleReviewWidget />
          </div>
        </div>
      </section>

      {/* 7. Action CTA Banner */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-900 border-t border-slate-800">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80"
            alt="Excavator site work"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-950/90"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Need Material Delivered or Removed?</h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            Get instant aggregate volume assessments, exact quarry quotes, and direct truck routing for your commercial or residential project.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm rounded-xl transition-all hover:scale-105 cursor-pointer shadow-lg shadow-emerald-950/20 flex items-center justify-center gap-2"
            >
              <Phone size={16} />
              Call to request a Quote
            </a>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="w-full sm:w-auto px-8 py-3.5 bg-slate-950 border border-slate-800 text-slate-200 hover:text-white font-bold text-sm rounded-xl transition-colors flex items-center justify-center gap-2 hover:border-slate-700"
            >
              <Phone size={15} className="text-emerald-500" />
              Call Dispatch Hotline
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
