import React from 'react';
import { ArrowRight, ShieldCheck, AlertTriangle } from 'lucide-react';

interface Page9RulesProps {
  onNext: () => void;
}

export const Page9Rules: React.FC<Page9RulesProps> = ({ onNext }) => {
  return (
    <article
      id="page-9"
      data-page="9"
      data-purpose="pdf-page-sheet"
      className="pdf-page-sheet bg-white rounded-xl shadow-pdfPage border border-slate-200/80 p-5 sm:p-6 flex flex-col justify-between"
    >
      <div>
        {/* Page Header */}
        <div className="flex justify-between items-center border-b border-slate-100 pb-2 mb-3">
          <span className="text-[10px] font-bold tracking-wider uppercase text-blue-600">
            PAGE 09 / 10 • COMPLIANCE & BEST PRACTICES
          </span>
          <span className="text-[10px] text-slate-400 font-mono">NFChub Playbook</span>
        </div>

        <h2 className="text-2xl font-black text-slate-900 tracking-tight">
          KEEP IT SIMPLE. SELL RESPONSIBLY.
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">
          Protect yourself and your merchant clients with ethical guidelines.
        </p>

        {/* Google Review Compliance Box */}
        <div className="mt-3 bg-red-50 border border-red-200 rounded-xl p-3.5 space-y-2">
          <div className="flex items-center space-x-1.5 text-red-700">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-xs font-black uppercase tracking-wider">
              GOOGLE REVIEW COMPLIANCE (STRICT):
            </span>
          </div>
          <ul className="text-xs text-red-950 space-y-1 font-medium">
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-1.5">•</span>
              <span>Ask for genuine, uncoerced customer reviews.</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-1.5">•</span>
              <span><strong>NO INCENTIVES:</strong> Do not offer discounts, free gifts, or lotteries for reviews.</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-1.5">•</span>
              <span><strong>NO REVIEW GATING:</strong> Do not filter happy vs unhappy customers before linking to Google.</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 font-bold mr-1.5">•</span>
              <span>Never ask customers or merchants to delete authentic feedback.</span>
            </li>
          </ul>
        </div>

        {/* Product Operational Rule */}
        <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-xl">
          <span className="text-xs font-black uppercase tracking-wider text-blue-900 block mb-1">
            HARDWARE PRODUCT RULE:
          </span>
          <p className="text-xs text-blue-950 font-medium">
            <strong>ALWAYS TEST NFC + QR BEFORE HANDOVER.</strong> Double check that both the contactless tap and the printed QR resolve straight to their public Google listing.
          </p>
        </div>

        {/* Sales Promise Rule */}
        <div className="mt-3 p-3 bg-slate-100 border border-slate-200 rounded-xl">
          <span className="text-xs font-black uppercase tracking-wider text-slate-800 block mb-1">
            NO FAKE INCOME CLAIMS:
          </span>
          <p className="text-xs text-slate-700">
            <strong>DON&apos;T PROMISE GUARANTEED PROFITS.</strong> Tell resellers and partners the truth: results solely depend on how many business owners you meet and pitch in your local market.
          </p>
        </div>
      </div>

      {/* Page Footer */}
      <div className="flex items-center justify-between pt-4 mt-6 border-t border-slate-100 text-[10px] text-slate-400 font-medium">
        <span>PAGE 09 / 10</span>
        <button
          id="btn-goto-page10"
          className="text-blue-600 hover:text-blue-700 font-bold flex items-center space-x-1"
          onClick={onNext}
        >
          <span>Next: Start Today</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </article>
  );
};
