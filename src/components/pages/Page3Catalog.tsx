import React from 'react';
import { ArrowRight, Smartphone, QrCode, Lightbulb } from 'lucide-react';

interface Page3CatalogProps {
  onNext: () => void;
  onOpenDemo: () => void;
}

export const Page3Catalog: React.FC<Page3CatalogProps> = ({ onNext, onOpenDemo }) => {
  return (
    <article
      id="page-3"
      data-page="3"
      data-purpose="pdf-page-sheet"
      className="pdf-page-sheet bg-white rounded-xl shadow-pdfPage border border-slate-200/80 p-5 sm:p-6 flex flex-col justify-between"
    >
      <div>
        {/* Page Header */}
        <div className="flex justify-between items-center border-b border-slate-100 pb-2 mb-4">
          <span className="text-[10px] font-bold tracking-wider uppercase text-blue-600">
            PAGE 03 / 10 • PRODUCT CATALOGUE
          </span>
          <span className="text-[10px] text-slate-400 font-mono">NFChub Playbook</span>
        </div>

        <h2 className="text-2xl font-black text-slate-900 tracking-tight">WHAT YOU SELL</h2>
        <p className="text-xs text-slate-500 mt-0.5">
          Physical hardware that unlocks digital customer actions.
        </p>

        {/* Flagship Hero Card */}
        <div className="mt-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-xl p-4 border border-slate-800 shadow-md">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                PRIMARY CASH COW (80% SALES)
              </span>
              <h3 className="text-base font-extrabold text-white mt-1.5">
                GOOGLE REVIEW NFC + QR CARD
              </h3>
            </div>
          </div>

          {/* Tap vs Scan Visual Demonstration Box */}
          <div className="grid grid-cols-2 gap-2.5 mt-3 text-center">
            <div 
              onClick={onOpenDemo}
              className="bg-slate-800/90 hover:bg-slate-800 border border-blue-500/30 p-2.5 rounded-lg cursor-pointer transition active:scale-98 group"
            >
              <div className="text-blue-400 text-sm font-black flex items-center justify-center space-x-1">
                <span>⚡ TAP</span>
              </div>
              <p className="text-[10px] text-slate-300 mt-1">
                Tap phone to card → Opens Google Review Page in 1 sec
              </p>
              <span className="inline-block mt-1.5 text-[9px] text-blue-400 underline group-hover:text-blue-300">
                Click to Test Simulator →
              </span>
            </div>

            <div 
              onClick={onOpenDemo}
              className="bg-slate-800/90 hover:bg-slate-800 border border-purple-500/30 p-2.5 rounded-lg cursor-pointer transition active:scale-98 group"
            >
              <div className="text-purple-400 text-sm font-black flex items-center justify-center space-x-1">
                <span>📷 SCAN</span>
              </div>
              <p className="text-[10px] text-slate-300 mt-1">
                Scan printed QR → Opens Google Review Page in 1 sec
              </p>
              <span className="inline-block mt-1.5 text-[9px] text-purple-400 underline group-hover:text-purple-300">
                Click to Test Simulator →
              </span>
            </div>
          </div>

          <p className="text-[11px] text-slate-400 mt-2 text-center italic">
            &ldquo;NFC gives tap option. QR gives scan fallback. Zero friction.&rdquo;
          </p>
        </div>

        {/* Other Product Grid */}
        <div className="mt-4">
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
            OTHER CATALOG PRODUCTS:
          </span>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg hover:border-slate-300 transition">
              <p className="text-xs font-bold text-slate-800">Digital Business Card</p>
              <p className="text-[10px] text-slate-500 mt-0.5">
                Tap to share full vCard, contact info, and website.
              </p>
            </div>
            <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg hover:border-slate-300 transition">
              <p className="text-xs font-bold text-slate-800">Social Media Tap Stand</p>
              <p className="text-[10px] text-slate-500 mt-0.5">
                Instagram follower boost for cafés & boutiques.
              </p>
            </div>
            <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg hover:border-slate-300 transition">
              <p className="text-xs font-bold text-slate-800">WhatsApp Direct Card</p>
              <p className="text-[10px] text-slate-500 mt-0.5">
                One tap customer support and automated chat greeting.
              </p>
            </div>
            <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg hover:border-slate-300 transition">
              <p className="text-xs font-bold text-slate-800">Contactless Menu Stand</p>
              <p className="text-[10px] text-slate-500 mt-0.5">
                Durable acrylic tableside food & beverage menu.
              </p>
            </div>
          </div>
        </div>

        {/* Clean note box */}
        <div className="mt-3.5 p-3 bg-amber-50 border border-amber-200 rounded-lg text-amber-900 text-xs flex items-start space-x-2">
          <Lightbulb className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <strong>Golden Rule:</strong> Focus on the business outcome (getting 5-star Google reviews in 2 seconds), never get bogged down in technical chip specs or frequencies.
          </div>
        </div>
      </div>

      {/* Page Footer */}
      <div className="flex items-center justify-between pt-4 mt-6 border-t border-slate-100 text-[10px] text-slate-400 font-medium">
        <span>PAGE 03 / 10</span>
        <button
          id="btn-goto-page4"
          className="text-blue-600 hover:text-blue-700 font-bold flex items-center space-x-1"
          onClick={onNext}
        >
          <span>Next: Where to Sell</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </article>
  );
};
