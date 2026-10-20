export type PageTab = 'home' | 'portfolio' | 'about' | 'contact';

export type PortfolioCaseStudyTab = 'pe-solutions' | 'dell-services';

export interface TechTool {
  name: string;
  category: 'design' | 'ai' | 'code';
  mark: string;
  bg: string;
  description: string;
}

export interface MetricFact {
  label: string;
  value: string;
  subtext?: string;
}

export interface CaseStudyQuickFact {
  label: string;
  value: string;
}
