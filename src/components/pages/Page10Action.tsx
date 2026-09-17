import React from 'react';
import { ArrowRight, Sparkles, Send, ShoppingBag } from 'lucide-react';

interface Page10ActionProps {
  onRestart: () => void;
}

export const Page10Action: React.FC<Page10ActionProps> = ({ onRestart }) => {
  return (
    <article
      id="page-10"
      data-page="10"
      data-purpose="pdf-page-sheet"
      className="pdf-page-sheet bg-white rounded-xl shadow-pdfPage border border-slate-200/80 p-5 sm:p-6 flex flex-col justify-between"
    >
      <div>
        {/* Page Header */}
        <div className="flex justify-between items-center border-b border-slate-100 pb-2 mb-3">
          <span className="text-[10px] font-bold tracking-wider uppercase text-blue-600">
            PAGE 10 / 10 • ACTION PLAN
          </span>
          <span className="text-[10px] text-slate-400 font-mono">NFChub Playbook</span>
        </div>

        <h2 className="text-2xl font-black text-slate-900 tracking-tight">
          START SELLING TODAY 🚀
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">Execution beats overthinking. Here is your day-one drill.</p>

        {/* Your First Action Box */}
        <div className="mt-4 bg-blue-50 border-2 border-blue-600 rounded-2xl p-4 text-center">
          <span className="text-[11px] font-black uppercase tracking-widest text-blue-700">
            YOUR FIRST MILESTONE:
          </span>
          <p className="text-xl font-black text-slate-900 mt-1">FIND 10 LOCAL BUSINESSES TODAY.</p>
          <div className="mt-2.5 flex items-center justify-center space-x-1 text-[11px] font-bold text-slate-600">
            <span className="text-blue-600">FIND</span>
            <span>→</span>
            <span>CONTACT</span>
            <span>→</span>
            <span className="text-emerald-600">DEMO</span>
            <span>→</span>
            <span>FOLLOW UP</span>
            <span>→</span>
            <span className="text-blue-600">SELL</span>
          </div>
        </div>

        {/* Statement Banner */}
        <div className="mt-4 bg-slate-900 text-white rounded-xl p-3.5 text-center shadow-xs">
          <p className="text-xs font-black uppercase tracking-wider text-emerald-400">REMEMBER</p>
          <p className="text-sm font-black mt-0.5 tracking-tight">
            &ldquo;DON&apos;T JUST SELL THE CARD. SELL THE USE CASE.&rdquo;
          </p>
        </div>

        {/* Big CTAs */}
        <div className="mt-5 space-y-2.5" data-purpose="primary-conversion-actions">
          <a
            id="btn-get-stock"
            className="w-full bg-blue-600 hover:bg-blue-700 active:scale-98 text-white font-black py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider text-center shadow-lg shadow-blue-600/30 flex items-center justify-center space-x-2 transition"
            href="https://nfchub.in/reseller"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>GET NFCHUB STOCK NOW</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            id="btn-chat-whatsapp"
            className="w-full bg-emerald-600 hover:bg-emerald-500 active:scale-98 text-white font-black py-3 px-4 rounded-xl text-xs uppercase tracking-wider text-center shadow-md shadow-emerald-600/30 flex items-center justify-center space-x-2 transition"
            href="https://api.whatsapp.com/send?phone=919999999999&text=Hi%20NFChub%20Team!%20I%20have%20read%20the%20Reseller%20Playbook%20and%20want%20to%20order%20reseller%20stock."
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.001.547 1.77.848 2.806.848 3.181 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.767-5.767-5.767zm0 10.373c-.927 0-1.745-.279-2.477-.732l-.178-.105-1.566.411.418-1.527-.116-.184c-.528-.841-.784-1.579-.784-2.47 0-2.54 2.067-4.606 4.608-4.606 2.54 0 4.606 2.067 4.607 4.607 0 2.54-2.067 4.606-4.607 4.606zm3.327-3.468c-.182-.091-1.077-.531-1.244-.592-.167-.061-.289-.091-.41.091-.122.182-.471.592-.577.714-.107.121-.213.136-.395.045-.182-.091-.77-.284-1.467-.905-.542-.484-.908-1.082-1.015-1.264-.106-.182-.011-.28.08-.37.082-.082.182-.213.273-.319.091-.106.121-.182.182-.303.061-.122.03-.228-.015-.319-.046-.091-.41-.988-.562-1.353-.148-.356-.299-.307-.41-.313l-.35-.006c-.121 0-.319.045-.486.228-.167.182-.638.623-.638 1.519 0 .897.653 1.763.744 1.884.091.121 1.285 1.962 3.113 2.751.435.188.774.3 1.039.385.437.139.835.119 1.149.072.35-.052 1.077-.44 1.229-.866.152-.426.152-.791.107-.866-.046-.076-.168-.122-.35-.213z" />
            </svg>
            <span>CHAT ON WHATSAPP WITH NFCHUB</span>
          </a>
        </div>
      </div>

      {/* Page Footer */}
      <div className="pt-4 mt-6 border-t border-slate-100 text-[10px] text-slate-400 font-medium space-y-1">
        <div className="flex items-center justify-between">
          <span>PAGE 10 / 10 (FINAL)</span>
          <button
            onClick={onRestart}
            className="font-bold text-blue-600 hover:underline"
          >
            ← Back to Cover
          </button>
        </div>
        <p className="text-center text-slate-500 pt-1">
          NFChub • BUY WHOLESALE → SELL LOCAL • partner@nfchub.in
        </p>
      </div>
    </article>
  );
};
