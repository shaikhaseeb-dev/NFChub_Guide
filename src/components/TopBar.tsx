import React from 'react';
import { 
  FileText, 
  Share2, 
  Search, 
  Smartphone, 
  BookOpen, 
  Layers, 
  Printer 
} from 'lucide-react';

interface TopBarProps {
  currentPage: number;
  totalPages: number;
  viewMode: 'scroll' | 'single';
  onToggleViewMode: () => void;
  onOpenSearch: () => void;
  onOpenDemo: () => void;
  onPrint: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  currentPage,
  totalPages,
  viewMode,
  onToggleViewMode,
  onOpenSearch,
  onOpenDemo,
  onPrint,
}) => {
  const sharePlaybook = () => {
  const whatsappNumber = "917995668417"; // Your WhatsApp number
  const shareUrl = window.location.href;

  const message = encodeURIComponent(
    `Hi! 👋 Check out the official NFChub Reseller Playbook PDF Guide:\n${shareUrl}`
  );

  window.open(
    `https://wa.me/${whatsappNumber}?text=${message}`,
    "_blank"
  );
};

  return (
    <header 
      id="top-pdf-bar"
      className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 px-3 sm:px-4 py-2 flex items-center justify-between text-white shadow-md select-none"
    >
      <div className="flex items-center space-x-2.5 overflow-hidden">
        {/* PDF Document Icon Badge */}
        <div className="w-7 h-8 bg-red-600 rounded flex flex-col items-center justify-center flex-shrink-0 shadow-sm">
          <span className="text-[9px] font-black tracking-tighter uppercase text-white leading-none">PDF</span>
          <span className="h-0.5 w-4 bg-white/70 rounded-full mt-0.5"></span>
        </div>
        <div className="truncate">
          <p className="text-xs font-bold truncate tracking-tight text-white leading-tight">
            NFChub Reseller Playbook
          </p>
          <p className="text-[10px] text-slate-400 font-medium hidden sm:block">
            Digital Edition • Official Guide
          </p>
        </div>
      </div>

      {/* Center/Right Actions */}
      <div className="flex items-center space-x-1.5 sm:space-x-2 flex-shrink-0">
        {/* Interactive NFC Simulator Button */}
        <button
          id="btn-open-demo"
          onClick={onOpenDemo}
          title="Try Live NFC / QR Simulator"
          className="bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-500/30 px-2 py-1 rounded text-xs font-medium flex items-center space-x-1 transition active:scale-95"
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span className="hidden md:inline">Live Demo</span>
        </button>

        {/* Quick Search */}
        <button
          id="btn-open-search"
          onClick={onOpenSearch}
          title="Search Playbook"
          className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition active:scale-95 border border-slate-700/60"
        >
          <Search className="w-3.5 h-3.5" />
        </button>

        {/* View Mode Toggle (Continuous Scroll vs Page by Page) */}
        <button
          id="btn-toggle-view-mode"
          onClick={onToggleViewMode}
          title={viewMode === 'scroll' ? 'Switch to Single Page Mode' : 'Switch to Continuous Scroll'}
          className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition active:scale-95 border border-slate-700/60"
        >
          {viewMode === 'scroll' ? <BookOpen className="w-3.5 h-3.5" /> : <Layers className="w-3.5 h-3.5" />}
        </button>

        {/* Print / Save PDF */}
        <button
          id="btn-print-doc"
          onClick={onPrint}
          title="Print or Save PDF"
          className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition active:scale-95 border border-slate-700/60"
        >
          <Printer className="w-3.5 h-3.5" />
        </button>

        {/* Active Page Indicator */}
        <div 
          id="live-page-counter" 
          className="bg-slate-800 text-slate-200 border border-slate-700 px-2 py-1 rounded text-xs font-mono font-semibold"
        >
          <span>{currentPage}</span>
          <span className="text-slate-500">/{totalPages}</span>
        </div>

        {/* WhatsApp Share Trigger */}
        <button 
          id="btn-whatsapp-share"
          onClick={sharePlaybook}
          aria-label="Share Guide on WhatsApp" 
          className="w-8 h-8 rounded-full bg-emerald-600 hover:bg-emerald-500 flex items-center justify-center text-white transition active:scale-95 shadow"
        >
          <Share2 className="w-3.5 h-3.5" />
        </button>
      </div>
    </header>
  );
};
