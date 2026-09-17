export interface PageDefinition {
  id: string;
  pageNumber: number;
  shortTitle: string;
  fullTitle: string;
  category: string;
}

export interface ChecklistItem {
  id: number;
  text: string;
  isImportant?: boolean;
}

export interface SearchResult {
  pageNumber: number;
  pageId: string;
  title: string;
  snippet: string;
}
