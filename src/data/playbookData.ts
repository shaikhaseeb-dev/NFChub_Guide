import { PageDefinition, ChecklistItem } from '../types';

export const PAGES: PageDefinition[] = [
  { id: 'page-1', pageNumber: 1, shortTitle: '01 Cover', fullTitle: 'RESELLER PLAYBOOK', category: 'Overview' },
  { id: 'page-2', pageNumber: 2, shortTitle: '02 Model', fullTitle: 'HOW IT WORKS', category: 'The Business Model' },
  { id: 'page-3', pageNumber: 3, shortTitle: '03 Catalog', fullTitle: 'WHAT YOU SELL', category: 'Product Catalogue' },
  { id: 'page-4', pageNumber: 4, shortTitle: '04 Niches', fullTitle: 'WHERE TO SELL', category: 'Target Niches' },
  { id: 'page-5', pageNumber: 5, shortTitle: '05 Scripts', fullTitle: 'WHAT TO SAY', category: 'Sales Scripts' },
  { id: 'page-6', pageNumber: 6, shortTitle: '06 Process', fullTitle: 'HOW TO SELL', category: 'Sales Process' },
  { id: 'page-7', pageNumber: 7, shortTitle: '07 Checklist', fullTitle: 'HOW TO FULFIL AN ORDER', category: 'Fulfilment Checklist' },
  { id: 'page-8', pageNumber: 8, shortTitle: '08 Follow-Up', fullTitle: 'FOLLOW UP WITHOUT SPAMMING', category: 'Follow-Up Cadence' },
  { id: 'page-9', pageNumber: 9, shortTitle: '09 Rules', fullTitle: 'KEEP IT SIMPLE. SELL RESPONSIBLY.', category: 'Compliance & Best Practices' },
  { id: 'page-10', pageNumber: 10, shortTitle: '10 Action', fullTitle: 'START SELLING TODAY', category: 'Action Plan' },
];

export const INITIAL_CHECKLIST: ChecklistItem[] = [
  { id: 1, text: '1. Get business registered name' },
  { id: 2, text: '2. Collect vector or high-res logo file' },
  { id: 3, text: '3. Get Google review short link / destination URL' },
  { id: 4, text: '4. Generate high-contrast QR code' },
  { id: 5, text: '5. Program NFC with URL (via free NFC Tools App)' },
  { id: 6, text: '6. Test NFC tap on your phone (Must load URL)', isImportant: true },
  { id: 7, text: '7. Test QR scan with camera app', isImportant: true },
  { id: 8, text: '8. Inspect printed custom finish & edges' },
  { id: 9, text: '9. Pack neatly & hand-deliver to business' },
];

export const PLAYBOOK_IMAGE_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzga9qU7x4nwHh-j9YUkv3Rr_Q2q37pS41I_CO5cBjlfm8oav8e3kmusZAcFHijlHbuh3EoUU-DlUqZBVQRrBiKEhMK3atY_NH_E3BGu_22BdiLTaJb6NNgCgALIOZ-IYTuBwFNje81Kk_TUXUFq35xrs7MKQqJga3AUn-GMrVj7Ku4ir2QJSjYQ6tBYQ7mZ56jKHd3WxSicu9X9hjCxXlK89E2XgyXyENVWZMwNSb3f8Lk2PotkI';
