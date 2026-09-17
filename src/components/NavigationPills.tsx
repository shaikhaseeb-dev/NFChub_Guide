import React from 'react';
import { PAGES } from '../data/playbookData';

interface NavigationPillsProps {
  currentPage: number;
  onSelectPage: (pageNumber: number) => void;
}

export const NavigationPills: React.FC<NavigationPillsProps> = ({
  currentPage,
  onSelectPage,
}) => {
  return (
    <nav 
      id="quick-jump-pills"
      className="fixed top-[49px] left-0 right-0 z-40 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800/80 px-3 py-1.5 overflow-x-auto no-scrollbar flex items-center space-x-1.5 text-xs select-none"
    >
      <span className="text-[11px] text-slate-400 font-medium mr-1 uppercase tracking-wider pl-1 flex-shrink-0">
        Page:
      </span>
      {PAGES.map((page) => {
        const isActive = page.pageNumber === currentPage;
        return (
          <button
            key={page.id}
            id={`nav-pill-${page.pageNumber}`}
            onClick={() => onSelectPage(page.pageNumber)}
            className={`px-2.5 py-0.5 rounded-full text-xs transition active:scale-95 whitespace-nowrap flex-shrink-0 ${
              isActive
                ? 'bg-blue-600 text-white font-semibold shadow-sm'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium'
            }`}
          >
            {page.shortTitle}
          </button>
        );
      })}
    </nav>
  );
};
