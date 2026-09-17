import React, { useState } from 'react';
import { X, Smartphone, QrCode, Star, CheckCircle, Radio, Sparkles, ExternalLink } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'nfc' | 'qr'>('nfc');
  const [isTapping, setIsTapping] = useState(false);
  const [reviewShown, setReviewShown] = useState(false);
  const [rating, setRating] = useState(5);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSimulateTap = () => {
    setIsTapping(true);
    setReviewShown(false);
    setHasSubmitted(false);

    setTimeout(() => {
      setIsTapping(false);
      setReviewShown(true);
    }, 900);
  };

  const handleReset = () => {
    setReviewShown(false);
    setHasSubmitted(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700 w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl flex flex-col text-white max-h-[92vh]">
        {/* Modal Header */}
        <div className="px-4 py-3 border-b border-slate-800 flex items-center justify-between bg-slate-950/80">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center text-white">
              <Smartphone className="w-3.5 h-3.5" />
            </div>
            <div>
              <h3 className="text-xs font-bold leading-tight">Live NFC & QR Simulator</h3>
              <p className="text-[10px] text-slate-400">See what the customer experiences in 1s</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-slate-800 bg-slate-950/40 p-1.5 gap-1.5 text-xs">
          <button
            onClick={() => { setActiveTab('nfc'); handleReset(); }}
            className={`flex-1 py-1.5 rounded-lg font-bold flex items-center justify-center space-x-1.5 transition ${
              activeTab === 'nfc'
                ? 'bg-blue-600 text-white shadow'
                : 'text-slate-400 hover:text-slate-200 bg-slate-800/60'
            }`}
          >
            <Radio className="w-3.5 h-3.5" />
            <span>NFC Tap Demo</span>
          </button>
          <button
            onClick={() => { setActiveTab('qr'); handleReset(); }}
            className={`flex-1 py-1.5 rounded-lg font-bold flex items-center justify-center space-x-1.5 transition ${
              activeTab === 'qr'
                ? 'bg-purple-600 text-white shadow'
                : 'text-slate-400 hover:text-slate-200 bg-slate-800/60'
            }`}
          >
            <QrCode className="w-3.5 h-3.5" />
            <span>QR Scan Demo</span>
          </button>
        </div>

        {/* Phone Simulation Body */}
        <div className="p-4 flex-1 overflow-y-auto space-y-4">
          {!reviewShown ? (
            <div className="flex flex-col items-center justify-center py-6 text-center space-y-4">
              {/* Virtual NFC Card Graphic */}
              <div 
                onClick={handleSimulateTap}
                className={`relative w-56 h-36 rounded-xl bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-800 border-2 ${
                  activeTab === 'nfc' ? 'border-blue-500 shadow-glowBlue' : 'border-purple-500'
                } p-3.5 flex flex-col justify-between cursor-pointer transition transform active:scale-95 group select-none`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black tracking-wider text-blue-400">NFC Review Card</span>
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-[10px] font-bold">
                    ⚡
                  </div>
                </div>

                <div className="text-center my-auto">
                  <p className="text-xs font-bold text-white tracking-wide">TAP PHONE HERE</p>
                  <p className="text-[9px] text-slate-400">or Scan QR Code on back</p>
                </div>

                <div className="flex items-center justify-between text-[8px] text-slate-400">
                  <span>Five Star Reviews</span>
                  <div className="flex text-amber-400">★★★★★</div>
                </div>

                {isTapping && (
                  <div className="absolute inset-0 bg-blue-500/20 rounded-xl flex items-center justify-center backdrop-blur-xs animate-pulse">
                    <span className="text-xs font-black text-white bg-blue-600 px-3 py-1 rounded-full shadow">
                      📡 Reading NFC Tag...
                    </span>
                  </div>
                )}
              </div>

              <div className="space-y-1">
                <p className="text-xs font-bold text-slate-200">
                  {activeTab === 'nfc' ? 'Tap the card above to simulate NFC' : 'Point camera to QR to simulate scan'}
                </p>
                <p className="text-[11px] text-slate-400">
                  {activeTab === 'nfc' 
                    ? 'No apps required. Native iOS and Android detect automatically.' 
                    : 'Universal camera app scan fallback for older phones.'}
                </p>
              </div>

              <button
                onClick={handleSimulateTap}
                className={`w-full py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-md transition ${
                  activeTab === 'nfc' 
                    ? 'bg-blue-600 hover:bg-blue-500 text-white' 
                    : 'bg-purple-600 hover:bg-purple-500 text-white'
                }`}
              >
                {activeTab === 'nfc' ? 'Simulate 1-Second Tap' : 'Simulate Camera Scan'}
              </button>
            </div>
          ) : (
            /* Pop-up Google Review Screen */
            <div className="bg-white text-slate-900 rounded-xl p-4 shadow-lg border border-slate-200 space-y-3 animate-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs">
                    G
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Artisan Salon & Spa</h4>
                    <p className="text-[10px] text-slate-500">Google Business Review</p>
                  </div>
                </div>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">
                  Opened in 0.8s
                </span>
              </div>

              {!hasSubmitted ? (
                <>
                  <div className="text-center py-1">
                    <p className="text-xs font-semibold text-slate-700">Rate your experience:</p>
                    <div className="flex justify-center space-x-1.5 my-2">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <button
                          key={s}
                          onClick={() => setRating(s)}
                          className="text-2xl transition hover:scale-110 active:scale-95 focus:outline-none"
                        >
                          <span className={s <= rating ? 'text-amber-400' : 'text-slate-300'}>★</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <textarea
                    placeholder="Share details of your own experience at this place..."
                    rows={2}
                    defaultValue="Amazing haircut and friendly staff! Loved the contactless check-in card."
                    className="w-full text-xs p-2.5 border border-slate-200 rounded-lg bg-slate-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-800"
                  />

                  <div className="flex space-x-2 pt-1">
                    <button
                      onClick={() => setHasSubmitted(true)}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-2 rounded-lg transition"
                    >
                      Post Review
                    </button>
                    <button
                      onClick={handleReset}
                      className="px-3 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-medium rounded-lg"
                    >
                      Reset
                    </button>
                  </div>
                </>
              ) : (
                <div className="py-4 text-center space-y-2">
                  <CheckCircle className="w-10 h-10 text-emerald-500 mx-auto" />
                  <p className="text-xs font-black text-slate-900">Thank you for your review!</p>
                  <p className="text-[11px] text-slate-500">
                    Your 5-star review is now published on Google Maps for all future customers to see.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-2 text-xs font-bold text-blue-600 hover:underline"
                  >
                    ← Test Again
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-2.5 bg-slate-950 border-t border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
          <span>NFChub Hardware Standard</span>
          <button 
            onClick={onClose}
            className="text-blue-400 hover:text-blue-300 font-bold"
          >
            Close Demo
          </button>
        </div>
      </div>
    </div>
  );
};
