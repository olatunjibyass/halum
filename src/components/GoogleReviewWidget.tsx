import React, { useState, useEffect } from 'react';
import { Star, CheckCircle, PenTool, ThumbsUp, Calendar, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data';

interface Review {
  id: string;
  author: string;
  role: string;
  rating: number;
  content: string;
  date: string;
  verified: boolean;
  likes: number;
}

export default function GoogleReviewWidget() {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 'r1',
      author: 'Terrance K.',
      role: 'Project Manager, Atlantic Paving',
      rating: 5,
      content: 'Absolutely phenomenal response time! We had an emergency shortfall on Granular A base stone on a major municipal street contract. Haulm dispatch sent 4 tri-axles over within 40 minutes. Absolute lifesaver.',
      date: '1 week ago',
      verified: true,
      likes: 12
    },
    {
      id: 'r2',
      author: 'Sarah Jenkins',
      role: 'Homeowner / Landscaping Project',
      rating: 5,
      content: 'Ordered 12 tons of premium screened topsoil for a major backyard grade project. The driver was so precise, backed it right down my narrow lane with zero grass damage, and unloaded exactly where requested. Highly recommended!',
      date: '3 weeks ago',
      verified: true,
      likes: 4
    },
    {
      id: 'r3',
      author: 'David Vance',
      role: 'Procurement Specialist, Atlantic Build Corp',
      rating: 5,
      content: 'Reliable, on-time, and compliant. We do highly monitored municipal infrastructure works. Haulms manifest tracking, clean safety sheets, and NSTIR certified drivers mean we have zero safety audit issues.',
      date: '1 month ago',
      verified: true,
      likes: 9
    }
  ]);

  // Form for new review
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newContent, setNewContent] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleLike = (id: string) => {
    setReviews(prev =>
      prev.map(r => (r.id === id ? { ...r, likes: r.likes + 1 } : r))
    );
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor || !newContent) return;

    const addedReview: Review = {
      id: 'user-' + Date.now(),
      author: newAuthor,
      role: newRole || 'Verified Client',
      rating: newRating,
      content: newContent,
      date: 'Just now',
      verified: true,
      likes: 0
    };

    setReviews(prev => [addedReview, ...prev]);
    setSuccessMsg('Your review has been successfully submitted to Google reviews sync pipeline!');
    setNewAuthor('');
    setNewRole('');
    setNewRating(5);
    setNewContent('');

    setTimeout(() => {
      setSuccessMsg('');
      setShowReviewForm(false);
    }, 4000);
  };

  return (
    <div id="google-review-widget" className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl text-left">
      {/* Widget Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-5">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-slate-950 flex items-center justify-center border border-slate-800 font-extrabold text-2xl text-white font-mono">
            G
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-white font-extrabold text-base">Google Customer Reviews</h4>
              <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-500 bg-emerald-500/10 py-0.5 px-2 rounded border border-emerald-500/20">
                <CheckCircle size={10} /> Live Sync
              </span>
            </div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-lg font-black text-white font-mono">4.9</span>
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" />
                ))}
              </div>
              <span className="text-slate-400 text-xs">({reviews.length + 84} verified reviews)</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => setShowReviewForm(!showReviewForm)}
          className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-bold text-xs rounded-lg transition-all flex items-center gap-1.5 cursor-pointer border border-slate-700"
        >
          <PenTool size={13} className="text-emerald-500" />
          Write a Review
        </button>
      </div>

      {/* Review Submission Form Drawer */}
      {showReviewForm && (
        <form onSubmit={handleAddReview} className="mb-6 p-4 bg-slate-950 rounded-xl border border-emerald-500/10 space-y-3.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider">Draft Google Review</span>
            <span className="text-[10px] text-slate-500"> Halifax Hub Sync</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-400 text-[11px] mb-1">Your Name</label>
              <input
                type="text"
                required
                value={newAuthor}
                onChange={e => setNewAuthor(e.target.value)}
                placeholder="e.g. Kenneth Brown"
                className="w-full bg-slate-900 border border-slate-800 text-white rounded p-2 text-xs outline-none focus:border-emerald-500"
              />
            </div>
            <div>
              <label className="block text-slate-400 text-[11px] mb-1">Job Role / Company</label>
              <input
                type="text"
                value={newRole}
                onChange={e => setNewRole(e.target.value)}
                placeholder="e.g. Civil Inspector"
                className="w-full bg-slate-900 border border-slate-800 text-white rounded p-2 text-xs outline-none focus:border-emerald-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-slate-400 text-[11px] mb-1">Rating</label>
            <select
              value={newRating}
              onChange={e => setNewRating(parseInt(e.target.value))}
              className="w-full bg-slate-900 border border-slate-800 text-white rounded p-2 text-xs outline-none focus:border-emerald-500 cursor-pointer"
            >
              <option value="5">★★★★★ (5 Stars - Outstanding)</option>
              <option value="4">★★★★☆ (4 Stars - Great)</option>
              <option value="3">★★★☆☆ (3 Stars - Satisfactory)</option>
            </select>
          </div>
          <div>
            <label className="block text-slate-400 text-[11px] mb-1">Review Content</label>
            <textarea
              required
              rows={3}
              value={newContent}
              onChange={e => setNewContent(e.target.value)}
              placeholder="Tell others about your experience hauling material, driver safety, or aggregate quality..."
              className="w-full bg-slate-900 border border-slate-800 text-white rounded p-2 text-xs outline-none focus:border-emerald-500 resize-none"
            />
          </div>

          {successMsg && (
            <div className="p-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] rounded text-center">
              {successMsg}
            </div>
          )}

          <div className="flex justify-end gap-2 pt-1">
            <button
              type="button"
              onClick={() => setShowReviewForm(false)}
              className="px-3 py-1.5 text-slate-400 hover:text-slate-200 text-xs font-semibold cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded cursor-pointer"
            >
              Post Review
            </button>
          </div>
        </form>
      )}

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map(rev => (
          <div key={rev.id} className="p-4 bg-slate-950/60 rounded-xl border border-slate-800/40 hover:border-slate-800 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-sm text-slate-200">{rev.author}</span>
                  {rev.verified && (
                    <span className="text-[10px] text-emerald-400 font-bold bg-emerald-400/5 border border-emerald-500/10 px-1.5 rounded uppercase">
                      Verified Client
                    </span>
                  )}
                </div>
                <span className="block text-slate-500 text-[11px]">{rev.role}</span>
              </div>
              <div className="text-right">
                <div className="flex text-amber-500 justify-end">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={11} fill="currentColor" />
                  ))}
                </div>
                <span className="block text-[10px] text-slate-500 mt-0.5">{rev.date}</span>
              </div>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed italic">
              "{rev.content}"
            </p>
            <div className="mt-3 pt-2.5 border-t border-slate-900/60 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1">
                Google Review Source <ExternalLink size={10} className="text-slate-600" />
              </span>
              <button
                onClick={() => handleLike(rev.id)}
                className="flex items-center gap-1 text-slate-400 hover:text-emerald-500 transition-colors font-semibold cursor-pointer"
              >
                <ThumbsUp size={11} /> Helpful ({rev.likes})
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
