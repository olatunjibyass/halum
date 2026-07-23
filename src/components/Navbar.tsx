import React, { useState } from 'react';
import { Page } from '../types';
import { COMPANY_INFO } from '../data';
import { Truck, Phone, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  openQuoteModal: () => void;
}

export default function Navbar({ currentPage, setCurrentPage, openQuoteModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', page: Page.Home },
    { label: 'Services', page: Page.Services },
    { label: 'Industries We Serve', page: Page.Industries },
    { label: 'Our Fleet', page: Page.Fleet },
    { label: 'Rates & Operations', page: Page.Rates },
    { label: 'About Us', page: Page.About },
    { label: 'Contact', page: Page.Contact },
  ];

  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header id="app-header" className="sticky top-0 z-50 w-full bg-slate-900 border-b border-slate-800 shadow-lg">
      {/* Top Banner - Utility Bar */}
      <div className="bg-slate-950 text-slate-400 text-xs py-2 px-4 sm:px-6 lg:px-8 flex justify-between items-center border-b border-slate-900">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            24/7 Operations Support
          </span>
          <span className="hidden md:inline-block">|</span>
          <span className="hidden md:inline-block">Serving HRM & Across Nova Scotia</span>
        </div>
        <div className="flex items-center gap-4">
          <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-emerald-500 hover:text-emerald-400 font-semibold flex items-center gap-1 transition-colors">
            <Phone size={13} />
            {COMPANY_INFO.phone}
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 min-h-[6.5rem] sm:min-h-[7rem]">
          {/* Logo Brand Link - Editorial Style */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick(Page.Home)}
            className="flex items-center gap-3 cursor-pointer group text-left animate-fade-in"
          >
            <Logo size="md" />
          </button>

          {/* Desktop Nav Links - Editorial Style */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.page}
                id={`nav-${item.page}`}
                onClick={() => handleNavClick(item.page)}
                className={`px-3 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer ${
                  currentPage === item.page
                    ? 'text-emerald-500 border-b-2 border-emerald-500'
                    : 'text-slate-300 hover:text-white hover:border-b-2 hover:border-slate-500'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Buttons - Desktop - Editorial Style */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              id="header-call-btn"
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex flex-col items-end group"
            >
              <span className="text-[9px] text-emerald-400 uppercase font-black tracking-[0.2em] leading-none">Emergency Dispatch</span>
              <span className="text-lg font-bold text-white group-hover:text-emerald-500 transition-colors mt-1">{COMPANY_INFO.phone}</span>
            </a>
            
            <a
              id="header-quote-btn"
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2.5 font-bold uppercase tracking-widest text-xs transition-colors cursor-pointer border-b-4 border-emerald-800 active:border-b-0 flex items-center justify-center gap-2"
            >
              <Phone size={14} />
              Call to request a Quote
            </a>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="p-2.5 rounded-lg bg-slate-800 text-emerald-500 border border-slate-700"
              title="Call Dispatch"
            >
              <Phone size={18} />
            </a>
            <button
              id="hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-slate-900 border-t border-slate-800 overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  id={`mobile-nav-${item.page}`}
                  onClick={() => handleNavClick(item.page)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base font-bold transition-colors block ${
                    currentPage === item.page
                      ? 'bg-emerald-600 text-white'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="w-full text-center py-3 rounded-lg border border-slate-700 text-slate-200 font-bold text-sm bg-slate-800/50 flex items-center justify-center gap-2"
                >
                  <Phone size={16} className="text-emerald-500" />
                  Call Dispatch Now
                </a>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3 rounded-lg bg-emerald-600 text-white font-bold text-sm shadow-md hover:bg-emerald-500 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Phone size={15} />
                  Call to request a Quote
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
