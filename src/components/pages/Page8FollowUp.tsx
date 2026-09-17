import React, { useState } from 'react';
import { ArrowRight, Copy, Check, Clock } from 'lucide-react';

interface Page8FollowUpProps {
  onNext: () => void;
  onCopyScript: (text: string) => void;
}

export const Page8FollowUp: React.FC<Page8FollowUpProps> = ({ onNext, onCopyScript }) => {
  const [copiedDay, setCopiedDay] = useState<number | null>(null);

  const day1Text = 'Hi sir, just following up on the NFC review card I showed you yesterday. 😊';
  const day3Text = 'Would you like me to share a customized sample with your logo for your business?';
  const day7Text = "Hi! Just checking if you'd like to go ahead with the review card. Happy to help if you have any questions.";

  const handleCopy = (day: number, text: string) => {
    onCopyScript(text);
    setCopiedDay(day);
    setTimeout(() => setCopiedDay(null), 2000);
  };

  return (
    <article
      id="page-8"
      data-page="8"
      data-purpose="pdf-page-sheet"
      className="pdf-page-sheet bg-white rounded-xl shadow-pdfPage border border-slate-200/80 p-5 sm:p-6 flex flex-col justify-between"
    >
      <div>
        {/* Page Header */}
        <div className="flex justify-between items-center border-b border-slate-100 pb-2 mb-3">
          <span className="text-[10px] font-bold tracking-wider uppercase text-blue-600">
            PAGE 08 / 10 • FOLLOW-UP CADENCE
          </span>
          <span className="text-[10px] text-slate-400 font-mono">NFChub Playbook</span>
        </div>

        <h2 className="text-2xl font-black text-slate-900 tracking-tight">
          FOLLOW UP WITHOUT SPAMMING
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">Polite, non-intrusive 7-day touchpoint cadence.</p>

        {/* Timeline Scripts */}
        <div className="mt-4 space-y-3">
          {/* Day 1 */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[11px] font-extrabold text-blue-600 uppercase">
                DAY 1 (Next Day Reminder)
              </span>
              <button
                onClick={() => handleCopy(1, day1Text)}
                className={`text-[10px] font-bold px-2 py-0.5 rounded shadow-2xs active:scale-95 transition flex items-center space-x-1 border ${
                  copiedDay === 1
                    ? 'bg-emerald-600 text-white border-emerald-600'
                    : 'bg-white border-slate-300 text-slate-700'
                }`}
              >
                {copiedDay === 1 ? <Check className="w-2.5 h-2.5" /> : <Copy className="w-2.5 h-2.5" />}
                <span>{copiedDay === 1 ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <p className="text-xs text-slate-700 italic bg-white p-2 rounded border border-slate-200/60 font-sans">
              &ldquo;Hi sir, just following up on the NFC review card I showed you yesterday. 😊&rdquo;
            </p>
          </div>

          {/* Day 3 */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[11px] font-extrabold text-indigo-600 uppercase">
                DAY 3 (Value Add Mockup)
              </span>
              <button
                onClick={() => handleCopy(3, day3Text)}
                className={`text-[10px] font-bold px-2 py-0.5 rounded shadow-2xs active:scale-95 transition flex items-center space-x-1 border ${
                  copiedDay === 3
                    ? 'bg-emerald-600 text-white border-emerald-600'
                    : 'bg-white border-slate-300 text-slate-700'
                }`}
              >
                {copiedDay === 3 ? <Check className="w-2.5 h-2.5" /> : <Copy className="w-2.5 h-2.5" />}
                <span>{copiedDay === 3 ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <p className="text-xs text-slate-700 italic bg-white p-2 rounded border border-slate-200/60 font-sans">
              &ldquo;Would you like me to share a customized sample with your logo for your business?&rdquo;
            </p>
          </div>

          {/* Day 7 */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[11px] font-extrabold text-slate-700 uppercase">
                DAY 7 (Final Check-In)
              </span>
              <button
                onClick={() => handleCopy(7, day7Text)}
                className={`text-[10px] font-bold px-2 py-0.5 rounded shadow-2xs active:scale-95 transition flex items-center space-x-1 border ${
                  copiedDay === 7
                    ? 'bg-emerald-600 text-white border-emerald-600'
                    : 'bg-white border-slate-300 text-slate-700'
                }`}
              >
                {copiedDay === 7 ? <Check className="w-2.5 h-2.5" /> : <Copy className="w-2.5 h-2.5" />}
                <span>{copiedDay === 7 ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <p className="text-xs text-slate-700 italic bg-white p-2 rounded border border-slate-200/60 font-sans">
              &ldquo;Hi! Just checking if you&apos;d like to go ahead with the review card. Happy to help if you have any questions.&rdquo;
            </p>
          </div>
        </div>

        {/* Etiquette Note */}
        <div className="mt-4 p-3 bg-slate-900 text-white rounded-xl text-xs space-y-1">
          <p className="font-bold text-amber-400">RESPECTFUL SELLER ETIQUETTE:</p>
          <p className="text-slate-300 leading-relaxed text-[11px]">
            Be polite and professional. Never repeatedly ping or guilt someone who hasn&apos;t shown interest. When a lead goes cold, simply move on to new businesses!
          </p>
        </div>
      </div>

      {/* Page Footer */}
      <div className="flex items-center justify-between pt-4 mt-6 border-t border-slate-100 text-[10px] text-slate-400 font-medium">
        <span>PAGE 08 / 10</span>
        <button
          id="btn-goto-page9"
          className="text-blue-600 hover:text-blue-700 font-bold flex items-center space-x-1"
          onClick={onNext}
        >
          <span>Next: Important Rules</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </article>
  );
};
