import React, { useState } from 'react';
import { ArrowRight, Check, Calculator } from 'lucide-react';
import { ProfitCalculator } from '../ProfitCalculator';

interface Page6ProcessProps {
  onNext: () => void;
}

export const Page6Process: React.FC<Page6ProcessProps> = ({ onNext }) => {
  const [showCalculator, setShowCalculator] = useState(false);

  return (
    <article
      id="page-6"
      data-page="6"
      data-purpose="pdf-page-sheet"
      className="pdf-page-sheet bg-white rounded-xl shadow-pdfPage border border-slate-200/80 p-5 sm:p-6 flex flex-col justify-between"
    >
      <div>
        {/* Page Header */}
        <div className="flex justify-between items-center border-b border-slate-100 pb-2 mb-4">
          <span className="text-[10px] font-bold tracking-wider uppercase text-blue-600">
            PAGE 06 / 10 • SALES PROCESS
          </span>
          <span className="text-[10px] text-slate-400 font-mono">NFChub Playbook</span>
        </div>

        <h2 className="text-2xl font-black text-slate-900 tracking-tight">HOW TO SELL</h2>
        <p className="text-xs text-slate-500 mt-0.5">The exact pipeline to take a merchant from cold to paid.</p>

        {/* Pipeline Sequence */}
        <div className="mt-3 flex items-center justify-between text-[10px] font-black uppercase text-center bg-slate-900 text-white py-2 px-2.5 rounded-xl">
          <span className="text-blue-400">FIND</span>
          <span className="text-slate-500">→</span>
          <span>CONTACT</span>
          <span className="text-slate-500">→</span>
          <span className="text-emerald-400">DEMO</span>
          <span className="text-slate-500">→</span>
          <span>EXPLAIN</span>
          <span className="text-slate-500">→</span>
          <span className="text-amber-400">FOLLOW UP</span>
          <span className="text-slate-500">→</span>
          <span className="text-blue-400">SELL</span>
        </div>

        {/* Rules & Execution */}
        <div className="mt-4 space-y-2">
          <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
            Execution Rules:
          </span>
          <div className="space-y-1.5 text-xs text-slate-700">
            <div className="p-2 bg-slate-50 rounded-lg border border-slate-200 flex items-center space-x-2">
              <span className="text-emerald-600 font-bold">✓</span>
              <span><strong>Keep under 60 seconds:</strong> Business owners are busy. Cut to the chase.</span>
            </div>
            <div className="p-2 bg-slate-50 rounded-lg border border-slate-200 flex items-center space-x-2">
              <span className="text-emerald-600 font-bold">✓</span>
              <span><strong>Always carry a physical demo:</strong> Never sell from photos alone.</span>
            </div>
            <div className="p-2 bg-slate-50 rounded-lg border border-slate-200 flex items-center space-x-2">
              <span className="text-emerald-600 font-bold">✓</span>
              <span><strong>Demonstrate TAP + SCAN live:</strong> Tap their phone to blow their mind.</span>
            </div>
            <div className="p-2 bg-slate-50 rounded-lg border border-slate-200 flex items-center space-x-2">
              <span className="text-emerald-600 font-bold">✓</span>
              <span><strong>Offer custom branding:</strong> Pitch with their business logo included.</span>
            </div>
          </div>
        </div>

        {/* Pricing Margin Model */}
        <div className="mt-4 p-3.5 bg-blue-50 border border-blue-200 rounded-xl">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-black uppercase tracking-wider text-blue-900">
              PRICING ARCHITECTURE:
            </span>
            <button
              onClick={() => setShowCalculator(!showCalculator)}
              className="text-[10px] text-blue-700 font-bold flex items-center space-x-1 hover:underline cursor-pointer"
            >
              <Calculator className="w-3 h-3" />
              <span>{showCalculator ? 'Hide Calculator' : 'Try Margin Calculator'}</span>
            </button>
          </div>

          <div className="space-y-1 text-xs text-blue-950">
            <div className="flex justify-between font-semibold border-b border-blue-100 pb-1">
              <span>Your NFChub Wholesale Cost</span>
              <span className="font-mono text-slate-600">Base Bulk Price</span>
            </div>
            <div className="flex justify-between font-bold border-b border-blue-100 py-1">
              <span>Your Selling Price to Shop</span>
              <span className="text-blue-700 font-mono">YOU DECIDE (Your Choice)</span>
            </div>
            <div className="flex justify-between font-black text-emerald-700 pt-1">
              <span>Your Net Margin per Card</span>
              <span className="font-mono">100% Retained by You</span>
            </div>
          </div>

          <p className="text-[10px] text-blue-700/80 mt-2 leading-tight">
            *No unrealistic guarantees. Your earnings directly reflect your local hustle, volume, and customer relationships.
          </p>
        </div>

        {/* Optional Interactive Margin Calculator Accordion */}
        {showCalculator && <ProfitCalculator />}
      </div>

      {/* Page Footer */}
      <div className="flex items-center justify-between pt-4 mt-6 border-t border-slate-100 text-[10px] text-slate-400 font-medium">
        <span>PAGE 06 / 10</span>
        <button
          id="btn-goto-page7"
          className="text-blue-600 hover:text-blue-700 font-bold flex items-center space-x-1"
          onClick={onNext}
        >
          <span>Next: Fulfilment Checklist</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </article>
  );
};
