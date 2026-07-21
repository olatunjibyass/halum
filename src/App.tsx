import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/Services';
import IndustriesPage from './pages/Industries';
import FleetPage from './pages/Fleet';
import RatesPage from './pages/Rates';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import QuoteForm from './components/QuoteForm';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  // Sync scroll on page changes
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [currentPage]);

  const renderActivePage = () => {
    switch (currentPage) {
      case Page.Home:
        return <Home setCurrentPage={setCurrentPage} openQuoteModal={() => setQuoteModalOpen(true)} />;
      case Page.Services:
        return <ServicesPage setCurrentPage={setCurrentPage} openQuoteModal={() => setQuoteModalOpen(true)} />;
      case Page.Industries:
        return <IndustriesPage setCurrentPage={setCurrentPage} openQuoteModal={() => setQuoteModalOpen(true)} />;
      case Page.Fleet:
        return <FleetPage setCurrentPage={setCurrentPage} openQuoteModal={() => setQuoteModalOpen(true)} />;
      case Page.Rates:
        return <RatesPage setCurrentPage={setCurrentPage} openQuoteModal={() => setQuoteModalOpen(true)} />;
      case Page.About:
        return <AboutPage setCurrentPage={setCurrentPage} />;
      case Page.Contact:
        return <ContactPage />;
      default:
        return <Home setCurrentPage={setCurrentPage} openQuoteModal={() => setQuoteModalOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col font-sans select-none antialiased">
      {/* Dynamic Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        openQuoteModal={() => setQuoteModalOpen(true)}
      />

      {/* Main Multi-Screen Layout with Smooth Route Fade Transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderActivePage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Corporate Footer with Nova Scotia Coverage Info */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* Global Interactive Quote Estimator Modal */}
      <AnimatePresence>
        {quoteModalOpen && (
          <div
            id="quote-modal-backdrop"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto"
          >
            {/* Modal Container */}
            <motion.div
              id="quote-modal-body"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8"
            >
              {/* Close Button */}
              <button
                id="close-modal-btn"
                onClick={() => setQuoteModalOpen(false)}
                className="absolute right-4 top-4 z-10 p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-full cursor-pointer transition-colors"
                title="Close"
              >
                <X size={18} />
              </button>

              {/* Scrollable Modal Content */}
              <div className="max-h-[85vh] overflow-y-auto">
                <QuoteForm onSuccessSubmit={() => {
                  // Keep it open for 5 seconds so they read the estimate invoice, then they can close it
                }} />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
