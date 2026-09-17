import React from 'react';
import { ArrowRight, RotateCcw, CheckCircle2 } from 'lucide-react';
import { ChecklistItem } from '../../types';

interface Page7ChecklistProps {
  onNext: () => void;
  items: ChecklistItem[];
  checkedIds: number[];
  onToggleItem: (id: number) => void;
  onResetChecklist: () => void;
}

export const Page7Checklist: React.FC<Page7ChecklistProps> = ({
  onNext,
  items,
  checkedIds,
  onToggleItem,
  onResetChecklist,
}) => {
  const completedCount = checkedIds.length;
  const totalCount = items.length;
  const progressPct = Math.round((completedCount / totalCount) * 100);

  return (
    <article
      id="page-7"
      data-page="7"
      data-purpose="pdf-page-sheet"
      className="pdf-page-sheet bg-white rounded-xl shadow-pdfPage border border-slate-200/80 p-5 sm:p-6 flex flex-col justify-between"
    >
      <div>
        {/* Page Header */}
        <div className="flex justify-between items-center border-b border-slate-100 pb-2 mb-3">
          <span className="text-[10px] font-bold tracking-wider uppercase text-blue-600">
            PAGE 07 / 10 • FULFILMENT CHECKLIST
          </span>
          <span className="text-[10px] text-slate-400 font-mono">NFChub Playbook</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">
              HOW TO FULFIL AN ORDER
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Tap the checklist items below on your phone as you complete orders.
            </p>
          </div>
        </div>

        {/* Progress Tracker */}
        <div className="mt-3 p-2 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold text-slate-800">Progress:</span>
            <span className="text-xs font-black text-blue-600 font-mono">
              {completedCount} of {totalCount} Done ({progressPct}%)
            </span>
          </div>
          {completedCount > 0 && (
            <button
              onClick={onResetChecklist}
              className="text-[10px] text-slate-500 hover:text-red-600 font-semibold flex items-center space-x-1"
            >
              <RotateCcw className="w-2.5 h-2.5" />
              <span>Reset</span>
            </button>
          )}
        </div>

        {/* Interactive Checklist Items */}
        <div className="mt-2.5 space-y-1.5" data-purpose="interactive-checklist">
          {items.map((item) => {
            const isChecked = checkedIds.includes(item.id);
            const isImportant = item.isImportant;

            return (
              <label
                key={item.id}
                className={`flex items-center space-x-2.5 p-2 rounded-lg cursor-pointer transition active:scale-98 select-none border ${
                  isImportant
                    ? isChecked
                      ? 'bg-blue-100/70 border-blue-300'
                      : 'bg-blue-50/70 border-blue-200 hover:bg-blue-100'
                    : isChecked
                    ? 'bg-slate-100/90 border-slate-300'
                    : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => onToggleItem(item.id)}
                  className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300 cursor-pointer"
                />
                <span
                  className={`text-xs ${
                    isImportant ? 'font-bold text-blue-900' : 'font-medium text-slate-700'
                  } ${isChecked ? 'line-through text-slate-400' : ''}`}
                >
                  {item.text}
                </span>
              </label>
            );
          })}
        </div>

        {/* Crucial Highlight Banner */}
        <div className="mt-3.5 bg-red-600 text-white text-center py-2.5 px-3 rounded-xl shadow-xs">
          <p className="text-[10px] font-black uppercase tracking-widest text-red-200">
            NON-NEGOTIABLE QUALITY CHECK
          </p>
          <p className="text-xs font-extrabold mt-0.5">
            ⚡ ALWAYS TEST TAP + SCAN BEFORE DELIVERY.
          </p>
        </div>
      </div>

      {/* Page Footer */}
      <div className="flex items-center justify-between pt-4 mt-6 border-t border-slate-100 text-[10px] text-slate-400 font-medium">
        <span>PAGE 07 / 10</span>
        <button
          id="btn-goto-page8"
          className="text-blue-600 hover:text-blue-700 font-bold flex items-center space-x-1"
          onClick={onNext}
        >
          <span>Next: Quick Follow-Up</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </article>
  );
};
