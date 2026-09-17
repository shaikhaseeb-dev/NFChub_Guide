import React from 'react';
import { ChevronLeft, ChevronRight, Download, Volume2, VolumeX } from 'lucide-react';

interface BottomBarProps {
  currentPage: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
  onSavePdf: () => void;
  isSpeaking: boolean;
  onToggleSpeech: () => void;
}

export const BottomBar: React.FC<BottomBarProps> = ({
  currentPage,
  totalPages,
  onPrev,
  onNext,
  onSavePdf,
  isSpeaking,
  onToggleSpeech,
}) => {
  return (
    <footer
      id="mobile-floating-bar"
      data-purpose="mobile-floating-bar"
      className="fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-2.5 px-3 sm:px-4 shadow-xl select-none"
    >
      <div className="max-w-md mx-auto flex items-center justify-between space-x-2">
        {/* Previous Page */}
        <button
          id="btn-prev-page"
          onClick={onPrev}
          disabled={currentPage <= 1}
          className={`px-3 py-2 rounded-lg text-xs font-bold transition active:scale-95 flex items-center space-x-1 ${
            currentPage <= 1
              ? 'bg-slate-800/40 text-slate-500 cursor-not-allowed'
              : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
          }`}
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          <span>Prev</span>
        </button>

        {/* Read Aloud TTS button */}
        <button
          id="btn-speech-read"
          onClick={onToggleSpeech}
          title={isSpeaking ? 'Stop Reading' : 'Read Page Aloud'}
          className={`p-2 rounded-lg border text-xs font-bold transition active:scale-95 flex items-center justify-center ${
            isSpeaking 
              ? 'bg-amber-600 border-amber-500 text-white animate-pulse' 
              : 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-300'
          }`}
        >
          {isSpeaking ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
        </button>

        {/* Download Offline PDF Trigger */}
        <button
          id="btn-save-pdf"
          onClick={onSavePdf}
          className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white py-2 px-2.5 rounded-lg text-xs font-bold transition active:scale-95 flex items-center justify-center space-x-1.5"
          title="Print or Save PDF"
        >
          <Download className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
          <span className="hidden sm:inline">Save PDF</span>
        </button>

        {/* Download Project ZIP Archive */}
        <a
          id="btn-download-zip"
          href="/nfchub-reseller-playbook.zip"
          download="nfchub-reseller-playbook.zip"
          className="flex-1 bg-blue-600 hover:bg-blue-500 text-white py-2 px-2 rounded-lg text-xs font-bold transition active:scale-95 flex items-center justify-center space-x-1.5 truncate shadow"
          title="Download Complete Codebase ZIP"
        >
          <Download className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="truncate">Download ZIP</span>
        </a>

        {/* Next Page */}
        <button
          id="btn-next-page"
          onClick={onNext}
          disabled={currentPage >= totalPages}
          className={`px-3 py-2 rounded-lg text-xs font-bold transition active:scale-95 flex items-center space-x-1 ${
            currentPage >= totalPages
              ? 'bg-slate-800/40 text-slate-500 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-500 text-white shadow-sm'
          }`}
        >
          <span>Next</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
