import React from 'react';
import { PortfolioCaseStudyTab, PageTab } from '../types';
import { DellCaseStudy } from './DellCaseStudy';
import { PESolutionsCaseStudy } from './PESolutionsCaseStudy';
import { Zap, Briefcase, Sparkles } from 'lucide-react';

interface PortfolioViewProps {
  activeCaseStudyTab: PortfolioCaseStudyTab;
  onSelectCaseStudyTab: (tab: PortfolioCaseStudyTab) => void;
  onNavigate: (tab: PageTab) => void;
}

export const PortfolioView: React.FC<PortfolioViewProps> = ({
  activeCaseStudyTab,
  onSelectCaseStudyTab,
  onNavigate,
}) => {
  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

      {/* Tabs Container */}
      <div className="bg-[#FAF6ED] p-2 rounded-2xl sm:rounded-3xl border border-[#EAE2B7] mb-12 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2" role="tablist">
          {/* Tab 1: PE.solutions Energy Solutions */}
          <button
            role="tab"
            aria-selected={activeCaseStudyTab === 'pe-solutions'}
            onClick={() => onSelectCaseStudyTab('pe-solutions')}
            className={`p-4 sm:p-5 rounded-xl sm:rounded-2xl text-left transition-all cursor-pointer flex items-start gap-4 ${
              activeCaseStudyTab === 'pe-solutions'
                ? 'bg-[#003049] text-white shadow-md'
                : 'bg-white/60 hover:bg-white text-[#003049] border border-transparent hover:border-[#EAE2B7]'
            }`}
          >
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-bold ${
                activeCaseStudyTab === 'pe-solutions'
                  ? 'bg-[#F77F00] text-white'
                  : 'bg-[#EAE2B7] text-[#003049]'
              }`}
            >
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span
                  className={`text-[11px] uppercase tracking-wider font-bold ${
                    activeCaseStudyTab === 'pe-solutions'
                      ? 'text-[#FCBF49]'
                      : 'text-[#D62828]'
                  }`}
                >
                  Tab 1 · Open Layout
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-900 font-medium">
                  Ready for details
                </span>
              </div>
              <div className="font-fraunces font-bold text-base sm:text-lg mt-0.5 leading-snug">
                UX Case Study --- PE.solutions Energy Solutions
              </div>
              <div
                className={`text-xs mt-1 line-clamp-1 ${
                  activeCaseStudyTab === 'pe-solutions' ? 'text-[#EAE2B7]/80' : 'text-[#8C765C]'
                }`}
              >
                Smart grid, renewable storage, and asset telemetry platform.
              </div>
            </div>
          </button>

          {/* Tab 2: Dell Enterprise Services */}
          <button
            role="tab"
            aria-selected={activeCaseStudyTab === 'dell-services'}
            onClick={() => onSelectCaseStudyTab('dell-services')}
            className={`p-4 sm:p-5 rounded-xl sm:rounded-2xl text-left transition-all cursor-pointer flex items-start gap-4 ${
              activeCaseStudyTab === 'dell-services'
                ? 'bg-[#003049] text-white shadow-md'
                : 'bg-white/60 hover:bg-white text-[#003049] border border-transparent hover:border-[#EAE2B7]'
            }`}
          >
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-bold ${
                activeCaseStudyTab === 'dell-services'
                  ? 'bg-[#D62828] text-white'
                  : 'bg-[#EAE2B7] text-[#003049]'
              }`}
            >
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span
                  className={`text-[11px] uppercase tracking-wider font-bold ${
                    activeCaseStudyTab === 'dell-services'
                      ? 'text-[#FCBF49]'
                      : 'text-[#003049]'
                  }`}
                >
                  Tab 2 · Original Case Study
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-900 font-medium">
                  Full shad360 content
                </span>
              </div>
              <div className="font-fraunces font-bold text-base sm:text-lg mt-0.5 leading-snug">
                UX Case Study --- Dell Enterprise Services
              </div>
              <div
                className={`text-xs mt-1 line-clamp-1 ${
                  activeCaseStudyTab === 'dell-services' ? 'text-[#EAE2B7]/80' : 'text-[#8C765C]'
                }`}
              >
                Overview — Automated Mail-in-Repairs end-to-end service redesign.
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Render Active Tab Content */}
      <div className="mt-8">
        {activeCaseStudyTab === 'pe-solutions' ? (
          <PESolutionsCaseStudy
            onSwitchToDell={() => onSelectCaseStudyTab('dell-services')}
            onNavigateToContact={() => onNavigate('contact')}
          />
        ) : (
          <DellCaseStudy
            onSwitchToPESolutions={() => onSelectCaseStudyTab('pe-solutions')}
            onNavigateToContact={() => onNavigate('contact')}
          />
        )}
      </div>
    </div>
  );
};
