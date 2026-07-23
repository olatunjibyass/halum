import React, { useState } from 'react';
import { COMPANY_INFO, FAQS } from '../data';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ChevronDown, MessageSquare, ShieldAlert, Award, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactPage() {
  const [selectedZone, setSelectedZone] = useState<string>('hrm_core');
  
  // Contact Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Bulk Aggregate Quote');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);

  // FAQ Expandable State
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0);

  const zones = {
    hrm_core: {
      name: 'Halifax Regional Municipality (HRM) Core',
      source: 'Rocky Lake, Bedford, and Dartmouth Quarries',
      transit: '15 - 45 Minutes',
      desc: 'Our central dispatch hub. Immediate mobilization for paving support, watermain excavation loops, and site preparation across Halifax and Dartmouth.',
      hubs: ['Halifax', 'Dartmouth', 'Bedford', 'Sackville', 'Cole Harbour', 'Lower Sackville']
    },
    central_ns: {
      name: 'Central Nova Scotia & Truro Corridor',
      source: 'Milford, Truro, and Elmsdale Pit Depots',
      transit: '30 - 60 Minutes',
      desc: 'Direct routes along Highway 102 and Highway 104. Excellent supply chain connectivity for commercial developments and civil roadwork.',
      hubs: ['Truro', 'Elmsdale', 'Enfield', 'Stewiacke', 'Shubenacadie', 'New Glasgow']
    },
    south_shore: {
      name: 'Annapolis Valley & South Shore',
      source: 'Kentville, Windsor, and Chester Pit Depots',
      transit: '45 - 90 Minutes',
      desc: 'Serving commercial sites, agricultural projects, and infrastructure upgrades along Highways 101 and 103.',
      hubs: ['Windsor', 'Kentville', 'Wolfville', 'Chester', 'Bridgewater', 'Lunenburg']
    },
    cape_breton: {
      name: 'Cape Breton & Eastern Shore',
      source: 'Sydney and Port Hawkesbury aggregate transfer stations',
      transit: '60 - 120 Minutes',
      desc: 'Tri-axle and tandem delivery logistics for major regional developments, road building, and structural backfills.',
      hubs: ['Sydney', 'Glace Bay', 'Port Hawkesbury', 'Antigonish', 'Baddeck', 'North Sydney']
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);
    
    setTimeout(() => {
      setFormSubmitting(false);
      setFormSubmitted(true);
      
      // Save submission locally
      const submissions = JSON.parse(localStorage.getItem('haulm_contact_messages') || '[]');
      submissions.unshift({
        name, email, phone, subject, message, date: new Date().toLocaleString()
      });
      localStorage.setItem('haulm_contact_messages', JSON.stringify(submissions));

      // Reset
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 1000);
  };

  return (
    <div id="contact-page" className="bg-slate-950 text-slate-100 min-h-screen">
      
      {/* Header Banner */}
      <section className="relative py-20 bg-slate-900 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
            alt="Halifax dispatch"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest block">HAULM CENTRAL</span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tighter text-white font-display uppercase">Contact Our Dispatch Center</h1>
          <p className="text-slate-300 text-base max-w-3xl mx-auto leading-relaxed font-light italic">
            "Get a Free Quote Within 24 Hours. Call our Halifax-based dispatcher hotline for aggregate inquiries, tandem leasing, or active project route bookings."
          </p>
        </div>
      </section>

      {/* Main Form & Contact Card layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Contact Details & Service Area map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-black text-white tracking-tighter uppercase font-display">Direct Dispatch Info</h2>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed text-left">
                We respond to telephone calls instantly and process digital bid proposals within 2 hours during standard business operational intervals.
              </p>
            </div>

            {/* Address cards */}
            <div className="space-y-4 bg-slate-900 border border-white/5 rounded-none p-6 shadow text-left">
              <div className="flex gap-4">
                <MapPin className="text-emerald-500 shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="text-white font-bold text-xs uppercase tracking-wider font-display">Business Headquarters</h4>
                  <p className="text-slate-300 text-xs sm:text-sm font-medium mt-1 leading-relaxed">{COMPANY_INFO.address}</p>
                </div>
              </div>
              <div className="flex gap-4 border-t border-slate-800 pt-4">
                <MapPin className="text-emerald-500/70 shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="text-white font-bold text-xs uppercase tracking-wider font-display">Primary Coverage Area</h4>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed">{COMPANY_INFO.serviceArea}</p>
                </div>
              </div>
              <div className="flex gap-4 border-t border-slate-800 pt-4">
                <Phone className="text-emerald-500 shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="text-white font-bold text-xs uppercase tracking-wider font-display">24Hr Dispatch Hotline</h4>
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-emerald-500 hover:underline text-sm font-extrabold mt-1 block">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>
              <div className="flex gap-4 border-t border-slate-800 pt-4">
                <Mail className="text-emerald-500 shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="text-white font-bold text-xs uppercase tracking-wider font-display">Operations & Estimating Email</h4>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-300 hover:text-emerald-500 text-xs sm:text-sm mt-1 block transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Interactive Coverage Sourcing Map */}
            <div className="bg-slate-900 border border-white/5 rounded-none p-6 space-y-4 text-left">
              <h3 className="text-white font-black text-xs uppercase tracking-wider font-display flex items-center gap-2">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Nova Scotia Sourcing Interactive Map
              </h3>
              <p className="text-slate-400 text-xs">
                Select your job location below to view local quarry transit schedules and nearest aggregate depots:
              </p>

              {/* Regional selection row */}
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(zones).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedZone(key)}
                    className={`p-2.5 rounded-none text-left border cursor-pointer transition-all uppercase tracking-wider text-[10px] ${
                      selectedZone === key
                        ? 'bg-emerald-600/10 border-emerald-500 text-emerald-500 font-bold'
                        : 'bg-slate-950 border-white/5 text-slate-400 hover:border-slate-800 hover:text-white'
                    }`}
                  >
                    <span className="block text-xs font-bold font-display">{value.name.split(' (')[0]}</span>
                  </button>
                ))}
              </div>

              {/* Zone Details */}
              <div className="p-4 bg-slate-950 rounded-none border border-white/5 space-y-2 text-left font-mono text-xs">
                <div>
                  <span className="text-slate-500 block uppercase text-[9px]">Active Sourcing Pit Depots</span>
                  <span className="text-slate-200 font-bold">{zones[selectedZone as keyof typeof zones].source}</span>
                </div>
                <div>
                  <span className="text-slate-500 block uppercase text-[9px]">Est. Truck Transit Time</span>
                  <span className="text-emerald-500 font-extrabold">{zones[selectedZone as keyof typeof zones].transit}</span>
                </div>
                <div className="border-t border-white/5 pt-2 text-slate-400 leading-normal text-[11px] font-sans">
                  {zones[selectedZone as keyof typeof zones].desc}
                </div>
                <div className="pt-2 flex flex-wrap gap-1.5 font-sans">
                  {zones[selectedZone as keyof typeof zones].hubs.map((hub, hid) => (
                    <span key={hid} className="bg-slate-900 border border-white/5 text-slate-400 text-[10px] py-0.5 px-2 rounded-none font-medium">
                      {hub}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Column 2: Digital Form */}
          <div className="lg:col-span-7 bg-slate-900 border border-white/5 rounded-none p-6 sm:p-8 space-y-6">
            <div className="space-y-1.5 text-left">
              <span className="text-emerald-500 text-xs font-bold uppercase tracking-wider block">FAST RESPONSE CONTACT</span>
              <h2 className="text-2xl font-black text-white tracking-tighter uppercase font-display">Submit Route Inquiry</h2>
              <p className="text-slate-400 text-xs">Fill out details below and a regional operations dispatcher will phone you back.</p>
            </div>

            {!formSubmitted ? (
              <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-1 font-display">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="e.g. Kenneth Brown"
                      className="w-full bg-slate-950 border border-white/5 focus:border-emerald-500 text-white rounded-none py-2.5 px-3.5 text-xs sm:text-sm outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-1 font-display">Active Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      placeholder="e.g. (905) 555-0192"
                      className="w-full bg-slate-950 border border-white/5 focus:border-emerald-500 text-white rounded-none py-2.5 px-3.5 text-xs sm:text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-1 font-display">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="e.g. kenneth@brownbuilding.ca"
                    className="w-full bg-slate-950 border border-white/5 focus:border-emerald-500 text-white rounded-none py-2.5 px-3.5 text-xs sm:text-sm outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-1 font-display">Inquiry Subject</label>
                  <select
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                    className="w-full bg-slate-950 border border-white/5 focus:border-emerald-500 text-white rounded-none py-2.5 px-3.5 text-xs sm:text-sm outline-none transition-all cursor-pointer"
                  >
                    <option value="Bulk Aggregate Quote">Bulk Sourced Aggregate Quote</option>
                    <option value="Excavation Hauling Loop">Excavation Hauling Shuttle loop</option>
                    <option value="Tandem Dump Truck Leasing">Tandem / Tri-axle leasing contract</option>
                    <option value="Public Civil Tender Bid">Public/Municipal civil tender bidding</option>
                    <option value="General Logistics Inquiry">General Logistics / Surcharge inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-1 font-display">Your Detailed Message *</label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="Provide details about your delivery point, material tonnage required, and start date..."
                    className="w-full bg-slate-950 border border-white/5 focus:border-emerald-500 text-white rounded-none py-2.5 px-3.5 text-xs sm:text-sm outline-none transition-all resize-none"
                  />
                </div>

                <div className="flex items-start gap-2.5 p-3.5 bg-slate-950 rounded-none border border-white/5">
                  <ShieldAlert className="text-emerald-500 shrink-0 mt-0.5" size={16} />
                  <p className="text-[11px] text-slate-400 leading-normal text-left">
                    <strong>Notice:</strong> Submitting this digital dispatch request initiates a certified Atlantic CRM logging ticket. Our Halifax coordinators will phone you to finalize transport rates before trucks roll.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={formSubmitting}
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-none transition-all cursor-pointer flex items-center justify-center gap-1.5 border-b-2 border-emerald-800 uppercase tracking-wider font-display"
                >
                  {formSubmitting ? 'Analyzing route distances...' : 'Send Message To Halifax Dispatch'}
                  <Send size={14} />
                </button>
              </form>
            ) : (
              <div className="p-8 text-center space-y-4">
                <div className="inline-flex items-center justify-center p-3.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-none">
                  <CheckCircle2 size={32} />
                </div>
                <div>
                  <h3 className="text-white font-black text-xl font-display uppercase tracking-tighter">Inquiry Received!</h3>
                  <p className="text-slate-400 text-xs mt-1 max-w-md mx-auto">
                    Thank you. Your message has been routed to our primary Halifax estimating office. We will call you or send an email within 24 hours.
                  </p>
                </div>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-3 border border-white/5 bg-slate-950 text-slate-400 hover:text-white rounded-none text-xs uppercase tracking-wider"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Accordion FAQ section */}
      <section className="bg-slate-900/30 border-t border-white/5 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest block">HAULING INTELLIGENCE</span>
            <h2 className="text-3xl font-black text-white tracking-tighter uppercase font-display">Frequently Asked Questions</h2>
            <p className="text-slate-400 text-sm">
              Common answers regarding quarry transport tariffs, licensing, tipping procedures, and bulk ordering.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-slate-900 border border-white/5 rounded-none overflow-hidden text-left"
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                  className="w-full p-5 font-black text-xs sm:text-sm text-white flex items-center justify-between text-left cursor-pointer transition-colors hover:bg-slate-800/40 uppercase tracking-wider font-display"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={16}
                    className={`text-emerald-500 transition-transform ${expandedFAQ === idx ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {expandedFAQ === idx && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="p-5 pt-0 text-slate-400 text-xs sm:text-sm leading-relaxed border-t border-white/5 font-light">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
