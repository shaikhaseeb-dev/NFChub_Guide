import React, { useState } from 'react';
import { ArrowRight, Copy, Check, MessageSquare, UserCheck } from 'lucide-react';

interface Page5ScriptsProps {
  onNext: () => void;
  onCopyScript: (text: string) => void;
}

export const Page5Scripts: React.FC<Page5ScriptsProps> = ({ onNext, onCopyScript }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const script1 = `Hi sir, can I show you something for 10 seconds?

[Show the NFC card]

This lets your customers tap or scan and immediately open your Google review page.

Would this be useful for your business?`;

  const script2 = `Hi! 👋 We provide customized NFC + QR cards for local businesses. Customers can simply tap or scan to access your review page in 2 seconds. Can I send you a quick 10-second demo?`;

  const handleCopy = (index: number, text: string) => {
    onCopyScript(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <article
      id="page-5"
      data-page="5"
      data-purpose="pdf-page-sheet"
      className="pdf-page-sheet bg-white rounded-xl shadow-pdfPage border border-slate-200/80 p-5 sm:p-6 flex flex-col justify-between"
    >
      <div>
        {/* Page Header */}
        <div className="flex justify-between items-center border-b border-slate-100 pb-2 mb-3">
          <span className="text-[10px] font-bold tracking-wider uppercase text-blue-600">
            PAGE 05 / 10 • SALES SCRIPTS
          </span>
          <span className="text-[10px] text-slate-400 font-mono">NFChub Playbook</span>
        </div>

        <h2 className="text-2xl font-black text-slate-900 tracking-tight">WHAT TO SAY</h2>

        {/* Principle Banner */}
        <div className="bg-blue-600 text-white text-center py-2 px-3 rounded-lg my-2.5 shadow-xs">
          <p className="text-[11px] font-black uppercase tracking-wider">⚡ THE GOLDEN RULE OF CLOSING</p>
          <p className="text-xs font-bold mt-0.5">&ldquo;DON&apos;T EXPLAIN FIRST. DEMONSTRATE FIRST.&rdquo;</p>
        </div>

        {/* Script 1: In-Person Script */}
        <div className="mt-3 bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs font-black uppercase tracking-wider text-slate-800 flex items-center">
              <span className="mr-1">🚶</span> IN-PERSON ELEVATOR SCRIPT
            </span>
            <button
              onClick={() => handleCopy(1, script1)}
              className={`text-[11px] font-bold px-2.5 py-1 rounded shadow-2xs active:scale-95 transition flex items-center space-x-1 border ${
                copiedIndex === 1
                  ? 'bg-emerald-600 text-white border-emerald-600'
                  : 'bg-white border-slate-300 hover:border-blue-500 text-slate-700'
              }`}
            >
              {copiedIndex === 1 ? (
                <>
                  <Check className="w-3 h-3" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copy Script</span>
                </>
              )}
            </button>
          </div>
          <div className="text-xs text-slate-700 space-y-1.5 italic bg-white p-2.5 rounded-lg border border-slate-200/70 font-sans">
            <p>&ldquo;Hi sir, can I show you something for 10 seconds?&rdquo;</p>
            <p className="text-blue-600 font-semibold not-italic text-[10px]">
              [Pull out your sample card and hand it over]
            </p>
            <p>&ldquo;This lets your customers tap or scan and open your review page instantly.&rdquo;</p>
            <p className="text-blue-600 font-semibold not-italic text-[10px]">
              [Then immediately ask:]
            </p>
            <p className="font-medium text-slate-900">&ldquo;Would this be useful for your business?&rdquo;</p>
          </div>
        </div>

        {/* Script 2: Instagram DM / WhatsApp Script */}
        <div className="mt-3 bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs font-black uppercase tracking-wider text-slate-800 flex items-center">
              <span className="mr-1">📱</span> INSTAGRAM DM / WHATSAPP INTRO
            </span>
            <button
              onClick={() => handleCopy(2, script2)}
              className={`text-[11px] font-bold px-2.5 py-1 rounded shadow-2xs active:scale-95 transition flex items-center space-x-1 border ${
                copiedIndex === 2
                  ? 'bg-emerald-600 text-white border-emerald-600'
                  : 'bg-white border-slate-300 hover:border-blue-500 text-slate-700'
              }`}
            >
              {copiedIndex === 2 ? (
                <>
                  <Check className="w-3 h-3" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copy Script</span>
                </>
              )}
            </button>
          </div>
          <div className="text-xs text-slate-700 italic bg-white p-2.5 rounded-lg border border-slate-200/70 font-sans">
            <p>
              &ldquo;Hi! 👋 We provide customized NFC + QR cards for local businesses. Customers can simply tap or scan to access your review page. Can I send you a quick demo?&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Page Footer */}
      <div className="flex items-center justify-between pt-4 mt-6 border-t border-slate-100 text-[10px] text-slate-400 font-medium">
        <span>PAGE 05 / 10</span>
        <button
          id="btn-goto-page6"
          className="text-blue-600 hover:text-blue-700 font-bold flex items-center space-x-1"
          onClick={onNext}
        >
          <span>Next: How to Sell</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </article>
  );
};
