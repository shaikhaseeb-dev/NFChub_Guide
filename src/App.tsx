import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { TopBar } from './components/TopBar';
import { NavigationPills } from './components/NavigationPills';
import { BottomBar } from './components/BottomBar';
import { DemoModal } from './components/DemoModal';
import { SearchModal } from './components/SearchModal';
import { Page1Cover } from './components/pages/Page1Cover';
import { Page2Model } from './components/pages/Page2Model';
import { Page3Catalog } from './components/pages/Page3Catalog';
import { Page4Niches } from './components/pages/Page4Niches';
import { Page5Scripts } from './components/pages/Page5Scripts';
import { Page6Process } from './components/pages/Page6Process';
import { Page7Checklist } from './components/pages/Page7Checklist';
import { Page8FollowUp } from './components/pages/Page8FollowUp';
import { Page9Rules } from './components/pages/Page9Rules';
import { Page10Action } from './components/pages/Page10Action';
import { PAGES, INITIAL_CHECKLIST } from './data/playbookData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [viewMode, setViewMode] = useState<'scroll' | 'single'>('scroll');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isDemoOpen, setIsDemoOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  // Fulfilment Checklist state with localStorage persistence
  const [checkedItems, setCheckedItems] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('nfchub_playbook_checklist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toastTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Save checklist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('nfchub_playbook_checklist', JSON.stringify(checkedItems));
    } catch {
      // Ignore write errors in sandbox
    }
  }, [checkedItems]);

  const handleToggleChecklistItem = (id: number) => {
    setCheckedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleResetChecklist = () => {
    setCheckedItems([]);
    showToast('✓ Fulfilment checklist reset');
  };

  const showToast = (message: string) => {
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
    }
    setToastMessage(message);
    toastTimerRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  // Scroll to page helper
  const scrollToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);

    if (viewMode === 'scroll') {
      const el = document.getElementById(`page-${pageNumber}`);
      if (el) {
        const yOffset = -95;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavigateStep = (direction: number) => {
    let target = currentPage + direction;
    if (target < 1) target = 1;
    if (target > 10) target = 10;
    scrollToPage(target);
  };

  // Copy to clipboard handler
  const handleCopyScript = (text: string) => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text);
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
      } catch (err) {
        console.error('Fallback copy failed', err);
      }
      textArea.remove();
    }
    showToast('✓ Script Copied to Clipboard');
  };

  // Track Visible Page on Scroll in 'scroll' mode
  useEffect(() => {
    if (viewMode !== 'scroll') return;

    const handleScroll = () => {
      const pages = document.querySelectorAll('[data-purpose="pdf-page-sheet"]');
      const scrollPos = window.scrollY + 220;

      pages.forEach((page) => {
        const top = (page as HTMLElement).offsetTop;
        const height = (page as HTMLElement).offsetHeight;
        const pageNum = page.getAttribute('data-page');

        if (scrollPos >= top && scrollPos < top + height && pageNum) {
          setCurrentPage(parseInt(pageNum, 10));
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [viewMode]);

  // Handle PDF Print / Export
  const handlePrint = () => {
    showToast("📥 Opening Print / Save PDF view...");
    setTimeout(() => {
      window.print();
    }, 300);
  };

  // Text-To-Speech Narration for current page
  const handleToggleSpeech = () => {
    if (!('speechSynthesis' in window)) {
      showToast('Text-to-speech not supported in this browser');
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const currentPageObj = PAGES.find((p) => p.pageNumber === currentPage);
    const textToRead = currentPageObj
      ? `Page ${currentPageObj.pageNumber}. ${currentPageObj.fullTitle}. ${currentPageObj.category}. NFChub Reseller Playbook.`
      : 'NFChub Reseller Playbook';

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.rate = 1.0;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  const renderSinglePage = (pageNumber: number) => {
    switch (pageNumber) {
      case 1:
        return <Page1Cover onNext={() => scrollToPage(2)} />;
      case 2:
        return <Page2Model onNext={() => scrollToPage(3)} />;
      case 3:
        return (
          <Page3Catalog
            onNext={() => scrollToPage(4)}
            onOpenDemo={() => setIsDemoOpen(true)}
          />
        );
      case 4:
        return <Page4Niches onNext={() => scrollToPage(5)} />;
      case 5:
        return <Page5Scripts onNext={() => scrollToPage(6)} onCopyScript={handleCopyScript} />;
      case 6:
        return <Page6Process onNext={() => scrollToPage(7)} />;
      case 7:
        return (
          <Page7Checklist
            onNext={() => scrollToPage(8)}
            items={INITIAL_CHECKLIST}
            checkedIds={checkedItems}
            onToggleItem={handleToggleChecklistItem}
            onResetChecklist={handleResetChecklist}
          />
        );
      case 8:
        return <Page8FollowUp onNext={() => scrollToPage(9)} onCopyScript={handleCopyScript} />;
      case 9:
        return <Page9Rules onNext={() => scrollToPage(10)} />;
      case 10:
        return <Page10Action onRestart={() => scrollToPage(1)} />;
      default:
        return <Page1Cover onNext={() => scrollToPage(2)} />;
    }
  };

  return (
    <div className="bg-slate-950 text-slate-800 font-sans antialiased min-h-screen pb-24 select-none">
      {/* Top PDF Bar */}
      <TopBar
        currentPage={currentPage}
        totalPages={PAGES.length}
        viewMode={viewMode}
        onToggleViewMode={() => setViewMode((prev) => (prev === 'scroll' ? 'single' : 'scroll'))}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenDemo={() => setIsDemoOpen(true)}
        onPrint={handlePrint}
      />

      {/* Quick Jump Stepper */}
      <NavigationPills
        currentPage={currentPage}
        onSelectPage={scrollToPage}
      />

      {/* Floating Toast Notification */}
      <div
        id="toast"
        className={`fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-emerald-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg transition-all duration-300 flex items-center space-x-1.5 ${
          toastMessage
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <span>{toastMessage}</span>
      </div>

      {/* Main Multi-Page Container */}
      <main className="max-w-md mx-auto pt-24 px-3 space-y-6 pb-12">
        {viewMode === 'scroll' ? (
          <>
            <Page1Cover onNext={() => scrollToPage(2)} />
            <Page2Model onNext={() => scrollToPage(3)} />
            <Page3Catalog
              onNext={() => scrollToPage(4)}
              onOpenDemo={() => setIsDemoOpen(true)}
            />
            <Page4Niches onNext={() => scrollToPage(5)} />
            <Page5Scripts onNext={() => scrollToPage(6)} onCopyScript={handleCopyScript} />
            <Page6Process onNext={() => scrollToPage(7)} />
            <Page7Checklist
              onNext={() => scrollToPage(8)}
              items={INITIAL_CHECKLIST}
              checkedIds={checkedItems}
              onToggleItem={handleToggleChecklistItem}
              onResetChecklist={handleResetChecklist}
            />
            <Page8FollowUp onNext={() => scrollToPage(9)} onCopyScript={handleCopyScript} />
            <Page9Rules onNext={() => scrollToPage(10)} />
            <Page10Action onRestart={() => scrollToPage(1)} />
          </>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              {renderSinglePage(currentPage)}
            </motion.div>
          </AnimatePresence>
        )}
      </main>

      {/* Sticky Bottom Floating Bar */}
      <BottomBar
        currentPage={currentPage}
        totalPages={PAGES.length}
        onPrev={() => handleNavigateStep(-1)}
        onNext={() => handleNavigateStep(1)}
        onSavePdf={handlePrint}
        isSpeaking={isSpeaking}
        onToggleSpeech={handleToggleSpeech}
      />

      {/* Interactive NFC / QR Simulator Modal */}
      <DemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
      />

      {/* Quick Search across Playbook */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectPage={scrollToPage}
      />
    </div>
  );
}
