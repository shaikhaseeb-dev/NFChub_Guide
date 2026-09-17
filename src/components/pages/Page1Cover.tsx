import React from 'react';
import { ArrowRight, Radio } from 'lucide-react';
import { PLAYBOOK_IMAGE_URL } from '../../data/playbookData';

interface Page1CoverProps {
  onNext: () => void;
}

export const Page1Cover: React.FC<Page1CoverProps> = ({ onNext }) => {
  return (
    <article
      id="page-1"
      data-page="1"
      data-purpose="pdf-page-sheet"
      className="pdf-page-sheet bg-white rounded-xl shadow-pdfPage border border-slate-200/80 p-5 sm:p-6 flex flex-col justify-between overflow-hidden relative"
    >
      {/* Top Decorative Accent */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500" />

      {/* Header Section */}
      <div className="space-y-3 sm:space-y-4 pt-1">
        <div className="flex items-center justify-between">
          {/* Brand with NFC Icon */}
          <div className="flex items-center space-x-1.5">
            <span className="text-blue-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" viewBox="0 0 24 24">
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
              </svg>
            </span>
            <span className="font-extrabold tracking-tight text-xl text-slate-900">
              NFC<span className="text-blue-600">hub</span>
            </span>
          </div>
          <span className="bg-blue-50 text-blue-700 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-blue-100">
            Official 2025 Edition
          </span>
        </div>

        <div className="pt-1">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Official Reseller Handbook
          </p>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight leading-none mt-1">
            RESELLER PLAYBOOK
          </h1>
          <div className="inline-flex items-center space-x-1.5 bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-md mt-2 tracking-wide">
            <span>BUY WHOLESALE</span>
            <span className="text-blue-400">→</span>
            <span>SELL LOCAL</span>
          </div>
          <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
            A simple guide to finding local businesses, selling NFC products, and growing your reseller business.
          </p>
        </div>
      </div>

      {/* Hero Visual */}
      <div className="my-3.5 relative">
        <div className="rounded-xl overflow-hidden shadow-md border border-slate-200 bg-slate-100 relative group">
          <img
            src={PLAYBOOK_IMAGE_URL}
            alt="A sleek matte black NFC tap card and wooden stand with electric blue wave icon and QR code"
            className="w-full h-44 object-cover object-center"
            loading="eager"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-2 left-2 right-2 bg-slate-900/85 backdrop-blur-md rounded-lg px-2.5 py-1.5 text-white flex items-center justify-between text-[11px] border border-white/10">
            <span className="font-medium text-slate-200">Google Review Tap Stand</span>
            <span className="text-emerald-400 font-bold">Best-Seller ★★★★★</span>
          </div>
        </div>
      </div>

      {/* Quick Document Specs Pills */}
      <div className="grid grid-cols-3 gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-center">
        <div>
          <span className="block text-[10px] text-slate-500 uppercase">Length</span>
          <span className="text-xs font-bold text-slate-800">10 Pages</span>
        </div>
        <div className="border-x border-slate-200">
          <span className="block text-[10px] text-slate-500 uppercase">Read Time</span>
          <span className="text-xs font-bold text-slate-800">5 Mins</span>
        </div>
        <div>
          <span className="block text-[10px] text-slate-500 uppercase">Format</span>
          <span className="text-xs font-bold text-emerald-600">WhatsApp PDF</span>
        </div>
      </div>

      {/* Action Button & Cover Footer */}
      <div className="pt-3.5 space-y-3">
        <button
          id="btn-start-reading"
          onClick={onNext}
          className="w-full bg-blue-600 hover:bg-blue-700 active:scale-98 text-white font-bold py-3 px-4 rounded-xl text-sm shadow-md shadow-blue-500/20 flex items-center justify-center space-x-2 transition"
        >
          <span>START READING (Page 2)</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[10px] text-slate-400 font-medium">
          <span>PAGE 01 / 10</span>
          <span>NFChub Wholesale Partner Network</span>
        </div>
      </div>
    </article>
  );
};
