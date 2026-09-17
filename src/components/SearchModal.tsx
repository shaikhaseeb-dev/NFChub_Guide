import React, { useState, useMemo } from 'react';
import { X, Search, ChevronRight } from 'lucide-react';
import { PAGES } from '../data/playbookData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPage: (pageNumber: number) => void;
}

interface PlaybookSection {
  pageNumber: number;
  title: string;
  category: string;
  keywords: string;
}

const PLAYBOOK_SECTIONS: PlaybookSection[] = [
  { pageNumber: 1, title: 'Reseller Playbook Cover', category: 'Overview', keywords: 'wholesale source sell local digital edition partner' },
  { pageNumber: 2, title: 'How The Model Works', category: 'The Business Model', keywords: 'wholesale supply local business salon gym cafe 5 core steps source client you profit' },
  { pageNumber: 3, title: 'What You Sell & Product Catalog', category: 'Product Catalogue', keywords: 'google review nfc qr card digital business card social media tap stand whatsapp direct contactless menu' },
  { pageNumber: 4, title: 'Where To Sell & High Conversion Niches', category: 'Target Niches', keywords: 'salons barbers gyms cafes restaurants spas wellness clinics hotels boutiques jewellery car detailing pet groomers' },
  { pageNumber: 5, title: 'What To Say & Sales Scripts', category: 'Sales Scripts', keywords: 'script elevator in-person instagram dm whatsapp pitch 10 seconds demo demonstrate first' },
  { pageNumber: 6, title: 'How To Sell & Sales Pipeline', category: 'Sales Process', keywords: 'find contact demo explain follow up sell 60 seconds physical demo custom branding margin calculator pricing' },
  { pageNumber: 7, title: 'How To Fulfil An Order & Checklist', category: 'Fulfilment Checklist', keywords: 'registered name vector logo review link qr code nfc tools app test tap test scan pack deliver' },
  { pageNumber: 8, title: 'Follow Up Without Spamming', category: 'Follow-Up Cadence', keywords: 'day 1 reminder day 3 mockup day 7 final check polite etiquette move on' },
  { pageNumber: 9, title: 'Compliance & Important Rules', category: 'Compliance & Best Practices', keywords: 'google review compliance no incentives no review gating test tap test scan no fake income claims' },
  { pageNumber: 10, title: 'Start Selling Today Action Plan', category: 'Action Plan', keywords: 'find 10 businesses stock wholesale whatsapp conversion cta' },
];

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectPage,
}) => {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    if (!query.trim()) return PLAYBOOK_SECTIONS;
    const q = query.toLowerCase();
    return PLAYBOOK_SECTIONS.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q) ||
        s.keywords.toLowerCase().includes(q)
    );
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-slate-900 border border-slate-700 w-full max-w-md rounded-2xl overflow-hidden shadow-2xl flex flex-col text-white">
        {/* Search Input Bar */}
        <div className="p-3 border-b border-slate-800 flex items-center space-x-2.5 bg-slate-950">
          <Search className="w-4 h-4 text-slate-400 flex-shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search scripts, niches, rules, checklist..."
            className="w-full bg-transparent text-xs text-white placeholder-slate-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="w-6 h-6 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center flex-shrink-0"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-6 text-center text-slate-400 text-xs">
              No sections match &quot;{query}&quot;
            </div>
          ) : (
            filtered.map((item) => (
              <button
                key={item.pageNumber}
                onClick={() => {
                  onSelectPage(item.pageNumber);
                  onClose();
                }}
                className="w-full p-2.5 rounded-xl hover:bg-slate-800/90 text-left flex items-center justify-between group transition active:scale-98 border border-transparent hover:border-slate-700"
              >
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-mono font-bold bg-blue-600/30 text-blue-400 px-1.5 py-0.5 rounded border border-blue-500/30">
                      Page {item.pageNumber}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-slate-400">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs font-bold text-slate-100 mt-1">
                    {item.title}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 transition" />
              </button>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="px-3 py-2 bg-slate-950/70 border-t border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
          <span>Click any topic to navigate immediately</span>
          <span className="font-mono">10 Pages</span>
        </div>
      </div>
    </div>
  );
};
