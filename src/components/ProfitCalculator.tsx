import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign } from 'lucide-react';

export const ProfitCalculator: React.FC = () => {
  const [wholesaleCost, setWholesaleCost] = useState<number>(150);
  const [retailPrice, setRetailPrice] = useState<number>(599);
  const [cardsPerMonth, setCardsPerMonth] = useState<number>(25);

  const profitPerCard = Math.max(0, retailPrice - wholesaleCost);
  const marginPercentage = retailPrice > 0 ? ((profitPerCard / retailPrice) * 100).toFixed(0) : '0';
  const monthlyProfit = profitPerCard * cardsPerMonth;

  return (
    <div className="mt-3 p-3.5 bg-blue-50/90 border border-blue-200 rounded-xl space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1.5">
          <Calculator className="w-4 h-4 text-blue-700" />
          <span className="text-[11px] font-black uppercase tracking-wider text-blue-900">
            Interactive Margin Calculator
          </span>
        </div>
        <span className="text-[10px] bg-blue-200/70 text-blue-900 px-2 py-0.5 rounded-full font-bold">
          {marginPercentage}% Margin
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 text-xs">
        <div>
          <label className="block text-[10px] font-semibold text-slate-600 mb-1">
            Wholesale Cost (Buy):
          </label>
          <div className="relative">
            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-500 font-bold text-xs">₹</span>
            <input
              type="number"
              value={wholesaleCost}
              onChange={(e) => setWholesaleCost(Number(e.target.value) || 0)}
              className="w-full pl-6 pr-2 py-1.5 text-xs bg-white border border-slate-300 rounded-lg text-slate-900 font-bold focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-[10px] font-semibold text-slate-600 mb-1">
            Shop Price (Sell):
          </label>
          <div className="relative">
            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-500 font-bold text-xs">₹</span>
            <input
              type="number"
              value={retailPrice}
              onChange={(e) => setRetailPrice(Number(e.target.value) || 0)}
              className="w-full pl-6 pr-2 py-1.5 text-xs bg-white border border-slate-300 rounded-lg text-slate-900 font-bold focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between text-[10px] font-semibold text-slate-600 mb-1">
          <span>Sales Volume:</span>
          <span className="font-bold text-blue-800">{cardsPerMonth} cards / month</span>
        </div>
        <input
          type="range"
          min="5"
          max="100"
          step="5"
          value={cardsPerMonth}
          onChange={(e) => setCardsPerMonth(Number(e.target.value))}
          className="w-full accent-blue-600 cursor-pointer h-1.5 bg-slate-200 rounded-lg"
        />
      </div>

      <div className="grid grid-cols-2 gap-2 pt-1 border-t border-blue-200/70">
        <div className="bg-white p-2 rounded-lg border border-blue-100 text-center">
          <span className="block text-[9px] text-slate-500 uppercase font-semibold">Net Profit / Card</span>
          <span className="text-sm font-black text-emerald-600">₹{profitPerCard.toLocaleString()}</span>
        </div>
        <div className="bg-white p-2 rounded-lg border border-blue-100 text-center">
          <span className="block text-[9px] text-slate-500 uppercase font-semibold">Est. Monthly Profit</span>
          <span className="text-sm font-black text-blue-700">₹{monthlyProfit.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};
