import React from 'react';
import { ArrowRight, Sparkles, MapPin } from 'lucide-react';

interface Page4NichesProps {
  onNext: () => void;
}

export const Page4Niches: React.FC<Page4NichesProps> = ({ onNext }) => {
  return (
    <article
      id="page-4"
      data-page="4"
      data-purpose="pdf-page-sheet"
      className="pdf-page-sheet bg-white rounded-xl shadow-pdfPage border border-slate-200/80 p-5 sm:p-6 flex flex-col justify-between"
    >
      <div>
        {/* Page Header */}
        <div className="flex justify-between items-center border-b border-slate-100 pb-2 mb-4">
          <span className="text-[10px] font-bold tracking-wider uppercase text-blue-600">
            PAGE 04 / 10 • TARGET NICHES
          </span>
          <span className="text-[10px] text-slate-400 font-mono">NFChub Playbook</span>
        </div>

        <h2 className="text-2xl font-black text-slate-900 tracking-tight">WHERE TO SELL</h2>
        <p className="text-xs text-slate-500 mt-0.5">
          High-conversion niches with billing counters and customer dwell time.
        </p>

        {/* Tier 1: START WITH */}
        <div className="mt-4">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-black uppercase tracking-wider text-emerald-700 flex items-center">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1.5"></span>
              START WITH (Priority 1 — High Footfall)
            </span>
            <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">
              Highest Win-Rate
            </span>
          </div>

          <div className="grid grid-cols-2 gap-1.5 text-xs text-slate-700 font-semibold">
            <div className="p-2 bg-emerald-50/50 border border-emerald-100 rounded-lg flex items-center space-x-1.5">
              <span>✂️</span> <span>Salons & Barbers</span>
            </div>
            <div className="p-2 bg-emerald-50/50 border border-emerald-100 rounded-lg flex items-center space-x-1.5">
              <span>🏋️</span> <span>Gyms & Fitness Studios</span>
            </div>
            <div className="p-2 bg-emerald-50/50 border border-emerald-100 rounded-lg flex items-center space-x-1.5">
              <span>☕</span> <span>Cafés & Bakeries</span>
            </div>
            <div className="p-2 bg-emerald-50/50 border border-emerald-100 rounded-lg flex items-center space-x-1.5">
              <span>🍕</span> <span>Restaurants & Bars</span>
            </div>
            <div className="p-2 bg-emerald-50/50 border border-emerald-100 rounded-lg flex items-center space-x-1.5 col-span-2">
              <span>💆</span> <span>Spas, Massages & Wellness Centers</span>
            </div>
          </div>
        </div>

        {/* Tier 2: ALSO TRY */}
        <div className="mt-4">
          <span className="text-xs font-black uppercase tracking-wider text-slate-700 flex items-center mb-1.5">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-1.5"></span>
            ALSO TRY (Priority 2)
          </span>
          <div className="grid grid-cols-3 gap-1.5 text-[11px] text-slate-600 font-medium">
            <div className="p-1.5 bg-slate-50 border border-slate-200 rounded text-center">Dentists & Clinics</div>
            <div className="p-1.5 bg-slate-50 border border-slate-200 rounded text-center">Hotels & Resorts</div>
            <div className="p-1.5 bg-slate-50 border border-slate-200 rounded text-center">Fashion Boutiques</div>
            <div className="p-1.5 bg-slate-50 border border-slate-200 rounded text-center">Jewellery Shops</div>
            <div className="p-1.5 bg-slate-50 border border-slate-200 rounded text-center">Car Detailing</div>
            <div className="p-1.5 bg-slate-50 border border-slate-200 rounded text-center">Pet Groomers</div>
          </div>
        </div>

        {/* Discovery Channels */}
        <div className="mt-4 p-3 bg-slate-900 rounded-xl text-white">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
            WHERE TO FIND THEM:
          </span>
          <p className="text-xs font-semibold text-blue-300">
            Google Maps • Instagram Local Search • Main Commercial Streets • Weekend Markets • Personal Network
          </p>
        </div>

        {/* Simple Process Visual */}
        <div className="mt-3.5 bg-blue-50/80 p-2.5 rounded-lg border border-blue-200 flex items-center justify-between text-center text-[10px] font-bold text-blue-900">
          <span>FIND BUSINESS</span>
          <span>→</span>
          <span className="text-blue-700">SHORTLIST (Low Reviews)</span>
          <span>→</span>
          <span>CONTACT & DEMO</span>
        </div>
      </div>

      {/* Page Footer */}
      <div className="flex items-center justify-between pt-4 mt-6 border-t border-slate-100 text-[10px] text-slate-400 font-medium">
        <span>PAGE 04 / 10</span>
        <button
          id="btn-goto-page5"
          className="text-blue-600 hover:text-blue-700 font-bold flex items-center space-x-1"
          onClick={onNext}
        >
          <span>Next: What to Say</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </article>
  );
};
