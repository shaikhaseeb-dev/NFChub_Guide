import React from 'react';
import { ArrowRight, ArrowDown, CheckCircle2 } from 'lucide-react';

interface Page2ModelProps {
  onNext: () => void;
}

export const Page2Model: React.FC<Page2ModelProps> = ({ onNext }) => {
  return (
    <article
      id="page-2"
      data-page="2"
      data-purpose="pdf-page-sheet"
      className="pdf-page-sheet bg-white rounded-xl shadow-pdfPage border border-slate-200/80 p-5 sm:p-6 flex flex-col justify-between"
    >
      <div>
        {/* Page Header */}
        <div className="flex justify-between items-center border-b border-slate-100 pb-2 mb-4">
          <span className="text-[10px] font-bold tracking-wider uppercase text-blue-600">
            PAGE 02 / 10 • THE BUSINESS MODEL
          </span>
          <span className="text-[10px] text-slate-400 font-mono">NFChub Playbook</span>
        </div>

        <h2 className="text-2xl font-black text-slate-900 tracking-tight">HOW IT WORKS</h2>
        <p className="text-xs text-slate-500 mt-0.5">Simple, asset-light wholesale to retail model.</p>

        {/* Visual Step Flow Diagram */}
        <div className="my-4 bg-slate-900 rounded-xl p-4 text-white space-y-2.5 shadow-sm">
          {/* Step 1 */}
          <div className="flex items-center justify-between bg-slate-800/90 rounded-lg p-2.5 border border-slate-700">
            <div className="flex items-center space-x-2">
              <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 font-bold text-xs flex items-center justify-center">
                1
              </span>
              <div>
                <p className="text-xs font-bold text-white">NFChub</p>
                <p className="text-[10px] text-slate-400">Wholesale Supply & Customization</p>
              </div>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800">
              SOURCE
            </span>
          </div>

          <div className="flex justify-center">
            <div className="w-5 h-5 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center text-xs font-bold">
              ↓
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-center justify-between bg-blue-600 rounded-lg p-2.5 shadow-md">
            <div className="flex items-center space-x-2">
              <span className="w-6 h-6 rounded-full bg-white text-blue-700 font-bold text-xs flex items-center justify-center">
                2
              </span>
              <div>
                <p className="text-xs font-black text-white">YOU</p>
                <p className="text-[10px] text-blue-100">Reseller / Local Partner</p>
              </div>
            </div>
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-900 bg-white px-2 py-0.5 rounded">
              YOU PROFIT
            </span>
          </div>

          <div className="flex justify-center">
            <div className="w-5 h-5 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center text-xs font-bold">
              ↓
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-center justify-between bg-slate-800/90 rounded-lg p-2.5 border border-slate-700">
            <div className="flex items-center space-x-2">
              <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs flex items-center justify-center">
                3
              </span>
              <div>
                <p className="text-xs font-bold text-white">LOCAL BUSINESS</p>
                <p className="text-[10px] text-slate-400">Salon, Gym, Café, Clinic, Retail</p>
              </div>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
              CLIENT
            </span>
          </div>
        </div>

        {/* Clean Step Bullets */}
        <div className="space-y-2 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
          <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">The 5 Core Steps:</p>
          <ul className="text-xs text-slate-600 space-y-1.5">
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              <span><strong>Buy NFC products</strong> from NFChub at bulk rates</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              <span><strong>Find businesses</strong> with physical checkouts in your area</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              <span><strong>Show them the live product</strong> in under 60 seconds</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              <span><strong>Sell at your own price</strong> and keep your margin</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">•</span>
              <span><strong>Order stock</strong> easily on-demand from NFChub</span>
            </li>
          </ul>
        </div>

        {/* Highlight Card: YOUR RESPONSIBILITY */}
        <div className="mt-3.5 p-3.5 bg-blue-50 border border-blue-200 rounded-xl">
          <span className="text-[11px] font-black uppercase tracking-wider text-blue-900 block mb-1.5">
            YOUR RESPONSIBILITY:
          </span>
          <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-blue-950">
            <div className="flex items-center space-x-1.5 bg-white p-2 rounded-lg border border-blue-100 shadow-xs">
              <span className="text-blue-600 font-bold">→</span>
              <span>Find the business</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-white p-2 rounded-lg border border-blue-100 shadow-xs">
              <span className="text-blue-600 font-bold">→</span>
              <span>Start the chat</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-white p-2 rounded-lg border border-blue-100 shadow-xs">
              <span className="text-blue-600 font-bold">→</span>
              <span>Show the product</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-white p-2 rounded-lg border border-blue-100 shadow-xs">
              <span className="text-blue-600 font-bold">→</span>
              <span>Close the order</span>
            </div>
          </div>
        </div>
      </div>

      {/* Page Footer */}
      <div className="flex items-center justify-between pt-4 mt-6 border-t border-slate-100 text-[10px] text-slate-400 font-medium">
        <span>PAGE 02 / 10</span>
        <button
          id="btn-goto-page3"
          className="text-blue-600 hover:text-blue-700 font-bold flex items-center space-x-1"
          onClick={onNext}
        >
          <span>Next: What You Sell</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </article>
  );
};
