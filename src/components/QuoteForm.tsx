import React, { useState } from 'react';
import { QuoteRequest } from '../types';
import { SERVICES, COMPANY_INFO } from '../data';
import { FileText, Calculator, Navigation, Calendar, Send, CheckCircle2, Copy, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';

interface QuoteFormProps {
  onSuccessSubmit?: (submittedData: QuoteRequest & { id: string; date: string }) => void;
  selectedServiceId?: string;
}

export default function QuoteForm({ onSuccessSubmit, selectedServiceId }: QuoteFormProps) {
  const [formData, setFormData] = useState<QuoteRequest>({
    name: '',
    company: '',
    phone: '',
    email: '',
    serviceType: selectedServiceId || SERVICES[0].id,
    materialType: 'Gravel',
    estimatedVolume: '20',
    pickupLocation: '',
    deliveryLocation: '',
    message: ''
  });

  const [distanceKm, setDistanceKm] = useState<number>(15);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [receipt, setReceipt] = useState<{
    id: string;
    date: string;
    estimatedBasePrice: number;
    estimatedDistanceCost: number;
    totalEstimate: number;
  } | null>(null);

  const materialsMap: Record<string, string[]> = {
    'aggregate-hauling': ['Gravel (Granular A)', 'Gravel (Granular B)', 'Crushed Limestone', 'Concrete Sand', 'Brick Sand', 'Slag'],
    'earth-moving': ['Premium Topsoil', 'Structural Fill Dirt', 'Clay', 'Excavated Rock', 'Clean Fill (Mixed)'],
    'construction-waste': ['Reinforced Concrete Debris', 'Asphalt Millings', 'Demolition Debris', 'Mixed Construction Scrap'],
    'seasonal-services': ['Premium Cedar Mulch', 'Bulk Road Salt (Commercial)', 'Compost Mix'],
    'site-support': ['Excavator Loop Support', 'Trenching Backfill Shuttles', 'Stockpile Relocation']
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const updated = { ...prev, [name]: value };
      // Reset material type if service changes
      if (name === 'serviceType') {
        const matchingMaterials = materialsMap[value] || [];
        updated.materialType = matchingMaterials[0] || 'Gravel';
      }
      return updated;
    });
  };

  // Pricing calculator helper
  const calculateLiveEstimate = () => {
    const tonnage = parseFloat(formData.estimatedVolume || '0') || 10;
    
    let materialBaseRatePerTon = 14; // Default
    if (formData.serviceType === 'construction-waste') materialBaseRatePerTon = 18;
    if (formData.serviceType === 'seasonal-services') materialBaseRatePerTon = 22;
    if (formData.serviceType === 'earth-moving') materialBaseRatePerTon = 12;

    const baseCost = tonnage * materialBaseRatePerTon;
    const distanceCost = distanceKm * 3.5 * (tonnage / 10); // $3.50 per km adjusted for tonnage weight class
    const total = baseCost + distanceCost;

    return {
      baseCost: Math.round(baseCost),
      distanceCost: Math.round(distanceCost),
      total: Math.round(total)
    };
  };

  const liveEstimate = calculateLiveEstimate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      const trackingId = 'HLM-' + Math.floor(100000 + Math.random() * 900000);
      const submissionDate = new Date().toLocaleString();

      const newReceipt = {
        id: trackingId,
        date: submissionDate,
        estimatedBasePrice: liveEstimate.baseCost,
        estimatedDistanceCost: liveEstimate.distanceCost,
        totalEstimate: liveEstimate.total
      };

      setReceipt(newReceipt);

      // Save to localStorage
      const existingQuotes = JSON.parse(localStorage.getItem('haulm_quotes') || '[]');
      const finalSubmission = {
        ...formData,
        id: trackingId,
        date: submissionDate,
        distanceKm,
        estimateDetails: newReceipt
      };
      existingQuotes.unshift(finalSubmission);
      localStorage.setItem('haulm_quotes', JSON.stringify(existingQuotes));

      setSubmitting(false);
      setSubmitted(true);

      if (onSuccessSubmit) {
        onSuccessSubmit(finalSubmission);
      }
    }, 1200);
  };

  const handleReset = () => {
    setSubmitted(false);
    setCopied(false);
    setReceipt(null);
    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      serviceType: SERVICES[0].id,
      materialType: 'Gravel',
      estimatedVolume: '20',
      pickupLocation: '',
      deliveryLocation: '',
      message: ''
    });
    setDistanceKm(15);
  };

  return (
    <div id="quote-request-card" className="bg-slate-900 border border-white/5 rounded-none overflow-hidden shadow-2xl">
      {/* Tab Header */}
      <div className="bg-slate-950 p-6 border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-3 text-left">
          <div className="p-2 bg-emerald-600 rounded-none text-white shrink-0">
            <Calculator size={20} />
          </div>
          <div>
            <h3 className="text-white font-black text-lg uppercase font-display tracking-tight">Instant Hauling & Quote Estimator</h3>
            <p className="text-slate-400 text-xs">Fill out parameters to see Nova Scotia rates projection</p>
          </div>
        </div>
        <span className="hidden sm:inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-none text-emerald-500 text-[11px] font-bold tracking-wider uppercase font-display">
          Free Estimate
        </span>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
          {/* Section 1: Customer Info */}
          <div>
            <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2 font-display">
              <span className="w-1.5 h-1.5 rounded-none bg-emerald-500 font-display"></span> 1. Company & Contact Details
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="text-left">
                <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-1 font-display">Your Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Robert Miller"
                  className="w-full bg-slate-950 border border-white/5 focus:border-emerald-500 text-white rounded-none py-2.5 px-3.5 text-sm outline-none transition-all"
                />
              </div>
              <div className="text-left">
                <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-1 font-display">Company (Optional)</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="e.g. Atlantic Construction Ltd"
                  className="w-full bg-slate-950 border border-white/5 focus:border-emerald-500 text-white rounded-none py-2.5 px-3.5 text-sm outline-none transition-all"
                />
              </div>
              <div className="text-left">
                <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-1 font-display">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="e.g. (902) 210-5062"
                  className="w-full bg-slate-950 border border-white/5 focus:border-emerald-500 text-white rounded-none py-2.5 px-3.5 text-sm outline-none transition-all"
                />
              </div>
              <div className="text-left">
                <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-1 font-display">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="e.g. robert@atlanticconstruction.ca"
                  className="w-full bg-slate-950 border border-white/5 focus:border-emerald-500 text-white rounded-none py-2.5 px-3.5 text-sm outline-none transition-all"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Haulage Parameters */}
          <div className="border-t border-white/5 pt-6">
            <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2 font-display">
              <span className="w-1.5 h-1.5 rounded-none bg-emerald-500"></span> 2. Material & Scope Details
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-left">
                <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-1 font-display">Service Required</label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  className="w-full bg-slate-950 border border-white/5 focus:border-emerald-500 text-white rounded-none py-2.5 px-3.5 text-sm outline-none transition-all cursor-pointer"
                >
                  {SERVICES.map(s => (
                    <option key={s.id} value={s.id}>{s.title}</option>
                  ))}
                </select>
              </div>
              <div className="text-left">
                <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-1 font-display">Material Type</label>
                <select
                  name="materialType"
                  value={formData.materialType}
                  onChange={handleInputChange}
                  className="w-full bg-slate-950 border border-white/5 focus:border-emerald-500 text-white rounded-none py-2.5 px-3.5 text-sm outline-none transition-all cursor-pointer"
                >
                  {(materialsMap[formData.serviceType] || ['Other Material']).map(mat => (
                    <option key={mat} value={mat}>{mat}</option>
                  ))}
                </select>
              </div>
              <div className="text-left">
                <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-1 font-display">Est. Volume / Weight (Metric Tons)</label>
                <div className="relative font-mono">
                  <input
                    type="number"
                    name="estimatedVolume"
                    min="1"
                    max="10000"
                    required
                    value={formData.estimatedVolume}
                    onChange={handleInputChange}
                    className="w-full bg-slate-950 border border-white/5 focus:border-emerald-500 text-white rounded-none py-2.5 px-3.5 text-sm outline-none transition-all"
                  />
                  <span className="absolute right-3.5 top-2.5 text-xs text-slate-500 font-bold font-display uppercase">TONS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Route Details */}
          <div className="border-t border-white/5 pt-6">
            <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2 font-display">
              <span className="w-1.5 h-1.5 bg-emerald-500"></span> 3. Logistics & Location Routing
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="text-left">
                <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-1 font-display">Pickup Address or Quarry Name *</label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-emerald-500"><Navigation size={15} /></span>
                  <input
                    type="text"
                    name="pickupLocation"
                    required
                    value={formData.pickupLocation}
                    onChange={handleInputChange}
                    placeholder="e.g. Rocky Lake Quarry, Bedford, NS"
                    className="w-full bg-slate-950 border border-white/5 focus:border-emerald-500 text-white rounded-none py-2.5 pl-9 pr-3.5 text-sm outline-none transition-all"
                  />
                </div>
              </div>
              <div className="text-left">
                <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-1 font-display">Delivery Site Location *</label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-emerald-500"><Navigation size={15} /></span>
                  <input
                    type="text"
                    name="deliveryLocation"
                    required
                    value={formData.deliveryLocation}
                    onChange={handleInputChange}
                    placeholder="e.g. 1420 Robie St, Halifax, NS"
                    className="w-full bg-slate-950 border border-white/5 focus:border-emerald-500 text-white rounded-none py-2.5 pl-9 pr-3.5 text-sm outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Slider for Simulated Distance */}
            <div className="mt-4 p-4 bg-slate-950 rounded-none border border-white/5 text-left">
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-slate-300 text-xs font-bold uppercase tracking-wide font-display">Estimated Hauling Distance (Between Locations)</label>
                <span className="text-emerald-500 font-extrabold text-sm font-mono">{distanceKm} KM</span>
              </div>
              <input
                type="range"
                min="5"
                max="120"
                step="5"
                value={distanceKm}
                onChange={(e) => setDistanceKm(parseInt(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer h-1.5 bg-slate-850 rounded-none"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1 uppercase font-display tracking-wider">
                <span>Short range (5km)</span>
                <span>Regional (60km)</span>
                <span>Cross-Regional (120km)</span>
              </div>
            </div>
          </div>

          {/* Live Quote Calculation Card */}
          <div className="p-4 rounded-none bg-emerald-600/5 border border-emerald-500/20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="text-left">
              <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider block font-display">PRE-NEGOTIATED RATE ESTIMATE</span>
              <div className="flex items-baseline gap-2 mt-0.5 font-mono">
                <span className="text-3xl font-black text-white">${liveEstimate.total}</span>
                <span className="text-xs text-slate-400 font-semibold uppercase font-display">CAD (Est.)</span>
              </div>
              <p className="text-slate-400 text-xs mt-1 italic text-left">
                "Based on <strong className="text-slate-200">{formData.estimatedVolume} Tons</strong> of {formData.materialType} hauled <strong className="text-slate-200">{distanceKm} km</strong>."
              </p>
            </div>
            <div className="text-xs text-slate-400 space-y-1 bg-slate-950/60 p-3 rounded-none border border-white/5 w-full sm:w-auto font-mono text-left">
              <div className="flex justify-between gap-6">
                <span>Material Base:</span>
                <span className="text-white font-bold">${liveEstimate.baseCost}</span>
              </div>
              <div className="flex justify-between gap-6">
                <span>Distance Fuel:</span>
                <span className="text-white font-bold">${liveEstimate.distanceCost}</span>
              </div>
              <div className="flex justify-between gap-6 pt-1 border-t border-slate-800 text-emerald-400 font-bold">
                <span>Total:</span>
                <span>${liveEstimate.total}</span>
              </div>
            </div>
          </div>

          {/* Section 4: Message */}
          <div className="text-left">
            <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-1 font-display">Project Instructions or Special Equipment Needs</label>
            <textarea
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Please provide details such as tight driveway clearances, tri-axle preference, dumping constraints, or scheduled timing constraints..."
              className="w-full bg-slate-950 border border-white/5 focus:border-emerald-500 text-white rounded-none py-2.5 px-3.5 text-sm outline-none transition-all resize-none font-sans"
            ></textarea>
          </div>

          <div className="text-[11px] text-slate-500 text-center leading-relaxed">
            * Note: This calculation is a regional aggregate rate projection. Final dispatch quote depends on toll routes, certified scale tickets, and current bulk fuel surcharge adjustment variables.
          </div>

          {/* Submit Button */}
          <button
            id="quote-submit-btn"
            type="submit"
            disabled={submitting}
            className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 disabled:text-slate-500 text-white font-bold rounded-none transition-all cursor-pointer border-b-2 border-emerald-800 text-xs uppercase tracking-wider font-display flex items-center justify-center gap-2"
          >
            {submitting ? (
              <>
                <RefreshCw className="animate-spin" size={18} />
                Analyzing Nova Scotia Quarry Tariffs...
              </>
            ) : (
              <>
                <Send size={18} />
                Submit Bid / Book Route
              </>
            )}
          </button>
        </form>
      ) : (
        /* Receipt Success Screen */
        <div className="p-8 sm:p-10 text-center space-y-6">
          <div className="inline-flex items-center justify-center p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 rounded-none mb-2">
            <CheckCircle2 size={44} className="animate-bounce" />
          </div>
          <div>
            <h4 className="text-white font-black text-2xl uppercase tracking-tighter font-display">Quote Request Sent Successfully!</h4>
            <p className="text-slate-400 text-sm mt-1 max-w-lg mx-auto">
              Our dispatch department in Halifax has logged your route project. A certified hauling coordinator will phone you back within 2 hours.
            </p>
          </div>

          {/* Receipt Info Card */}
          <div className="max-w-md mx-auto bg-slate-950 border border-white/5 rounded-none p-5 text-left text-sm font-mono space-y-4 shadow-inner relative">
            {/* Watermark */}
            <div className="absolute right-4 top-4 text-emerald-500/10">
              <FileText size={80} />
            </div>

            <div className="border-b border-dashed border-slate-800 pb-3 flex justify-between items-center">
              <div>
                <span className="block text-slate-500 text-[10px]">MANIFEST ID</span>
                <span className="text-emerald-500 font-bold text-base">{receipt?.id}</span>
              </div>
              <div className="text-right">
                <span className="block text-slate-500 text-[10px]">STATUS</span>
                <span className="text-emerald-500 font-bold text-xs uppercase bg-emerald-500/10 px-2 py-0.5 rounded-none border border-emerald-500/20 font-sans tracking-wide">
                  DISPATCH LOGGED
                </span>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between font-sans">
                <span className="text-slate-500">CLIENT:</span>
                <span className="text-slate-300 font-bold">{formData.name} {formData.company ? `(${formData.company})` : ''}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-sans">PHONE:</span>
                <span className="text-slate-300">{formData.phone}</span>
              </div>
              <div className="flex justify-between font-sans">
                <span className="text-slate-500">SERVICE:</span>
                <span className="text-slate-300 uppercase">{formData.serviceType.replace('-', ' ')}</span>
              </div>
              <div className="flex justify-between font-sans">
                <span className="text-slate-500">MATERIAL:</span>
                <span className="text-slate-300 font-bold">{formData.materialType}</span>
              </div>
              <div className="flex justify-between font-sans">
                <span className="text-slate-500">VOLUME:</span>
                <span className="text-slate-300">{formData.estimatedVolume} Metric Tons</span>
              </div>
              <div className="flex justify-between font-sans">
                <span className="text-slate-300 font-bold text-emerald-500 font-display uppercase tracking-wider">ROUTE RANGE:</span>
                <span className="text-slate-300">{distanceKm} Kilometers</span>
              </div>
              <div className="flex justify-between items-start font-sans">
                <span className="text-slate-500">PICKUP:</span>
                <span className="text-slate-300 text-right truncate max-w-[220px]">{formData.pickupLocation}</span>
              </div>
              <div className="flex justify-between items-start font-sans">
                <span className="text-slate-500">DELIVERY:</span>
                <span className="text-slate-300 text-right truncate max-w-[220px]">{formData.deliveryLocation}</span>
              </div>
            </div>

            <div className="border-t border-dashed border-slate-800 pt-3 space-y-2 text-xs">
              <div className="flex justify-between font-sans">
                <span className="text-slate-500">ESTIMATED BASE TARIFF:</span>
                <span className="text-slate-300">${receipt?.estimatedBasePrice} CAD</span>
              </div>
              <div className="flex justify-between font-sans">
                <span className="text-slate-500">DISTANCE FUEL:</span>
                <span className="text-slate-300">${receipt?.estimatedDistanceCost} CAD</span>
              </div>
              <div className="flex justify-between text-base text-white font-bold pt-2 border-t border-slate-900 font-display">
                <span className="text-emerald-500 uppercase tracking-wide font-display">ESTIMATED BID:</span>
                <span>${receipt?.totalEstimate} CAD</span>
              </div>
            </div>
            
            <div className="text-[10px] text-slate-600 text-center pt-2">
              Printed on {receipt?.date}. Valid for 30 days.
            </div>
          </div>

          {/* Action buttons on receipt */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
            <button
              onClick={() => {
                const infoText = `Haulm Transport Quote Request ${receipt?.id}\nMaterial: ${formData.materialType}\nVolume: ${formData.estimatedVolume} Tons\nTotal Est: $${receipt?.totalEstimate} CAD`;
                navigator.clipboard.writeText(infoText);
                setCopied(true);
                setTimeout(() => setCopied(false), 3000);
              }}
              className="px-6 py-3 rounded-none bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer border border-white/5 uppercase tracking-wider font-display"
            >
              <Copy size={15} />
              {copied ? 'Details Copied!' : 'Copy Manifest Details'}
            </button>
            <button
              onClick={handleReset}
              className="px-6 py-3 rounded-none border border-emerald-500/20 text-emerald-500 hover:text-emerald-400 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer bg-emerald-500/5 hover:bg-emerald-500/10 uppercase tracking-wider font-display"
            >
              <RefreshCw size={15} />
              Estimate New Route
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
