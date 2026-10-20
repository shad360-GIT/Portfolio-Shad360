import React, { useState } from 'react';
import { PageTab, PortfolioCaseStudyTab } from '../types';
import { Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  activeTab: PageTab;
  onNavigate: (tab: PageTab, caseStudyTab?: PortfolioCaseStudyTab) => void;
  activeCaseStudyTab?: PortfolioCaseStudyTab;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onNavigate,
  activeCaseStudyTab,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPortfolioDropdown, setShowPortfolioDropdown] = useState(false);

  const handleNav = (tab: PageTab, caseStudyTab?: PortfolioCaseStudyTab) => {
    onNavigate(tab, caseStudyTab);
    setMobileMenuOpen(false);
    setShowPortfolioDropdown(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#EAE2B7]/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo and Brand */}
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
          aria-label="Go to homepage"
        >
          <div className="w-11 h-11 rounded-full bg-[#003049] flex items-center justify-center text-white font-fraunces font-bold text-lg tracking-wider shadow-sm group-hover:scale-105 transition-transform border border-[#EAE2B7]">
            <span className="text-[#F77F00]">S</span>H
          </div>
          <div>
            <span className="block font-fraunces font-bold text-xl tracking-tight text-[#003049] group-hover:text-[#D62828] transition-colors">
              SHAD HAQUE
            </span>
            <span className="block text-xs uppercase tracking-[0.14em] font-semibold text-[#F77F00]">
              Service Design for Digital Products
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">

          {/* Portfolio with Tab Switcher trigger */}
          <div
            className="relative"
            onMouseEnter={() => setShowPortfolioDropdown(true)}
            onMouseLeave={() => setShowPortfolioDropdown(false)}
          >
            <button
              onClick={() => handleNav('portfolio')}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'portfolio'
                  ? 'bg-[#003049] text-white shadow-sm'
                  : 'text-[#003049] hover:bg-[#EAE2B7]/50 hover:text-[#003049]'
              }`}
            >
              Portfolio
            </button>

            {/* Dropdown for the 2 UX Case Studies */}
            {showPortfolioDropdown && (
              <div className="absolute top-full left-0 w-80 bg-[#FAF6ED] rounded-2xl shadow-xl border border-[#EAE2B7] p-2 mt-1 z-50 animate-fadeIn">
                <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#D62828] border-b border-[#EAE2B7]/70">
                  UX Case Studies
                </div>
                <button
                  onClick={() => handleNav('portfolio', 'pe-solutions')}
                  className={`w-full text-left p-3 rounded-xl transition-all cursor-pointer flex flex-col mt-1 ${
                    activeTab === 'portfolio' && activeCaseStudyTab === 'pe-solutions'
                      ? 'bg-[#003049] text-white'
                      : 'hover:bg-[#EAE2B7]/60 text-[#003049]'
                  }`}
                >
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#F77F00]">Tab 1 · Open Layout</span>
                  <span className="text-sm font-fraunces font-bold mt-0.5">PE.solutions Energy Solutions</span>
                </button>

                <button
                  onClick={() => handleNav('portfolio', 'dell-services')}
                  className={`w-full text-left p-3 rounded-xl transition-all cursor-pointer flex flex-col mt-1 ${
                    activeTab === 'portfolio' && activeCaseStudyTab === 'dell-services'
                      ? 'bg-[#003049] text-white'
                      : 'hover:bg-[#EAE2B7]/60 text-[#003049]'
                  }`}
                >
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#FCBF49]">Tab 2 · Original Case Study</span>
                  <span className="text-sm font-fraunces font-bold mt-0.5">Dell Enterprise Services</span>
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNav('about')}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'about'
                ? 'bg-[#003049] text-white shadow-sm'
                : 'text-[#003049] hover:bg-[#EAE2B7]/50 hover:text-[#003049]'
            }`}
          >
            About
          </button>

          <button
            onClick={() => handleNav('contact')}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'contact'
                ? 'bg-[#003049] text-white shadow-sm'
                : 'text-[#003049] hover:bg-[#EAE2B7]/50 hover:text-[#003049]'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => handleNav('contact')}
            className="px-5 py-2.5 rounded-full bg-[#F77F00] hover:bg-[#db7000] text-white text-sm font-semibold transition-all shadow-md hover:shadow-lg hover:scale-102 cursor-pointer flex items-center gap-2"
          >
            <span>Start a project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-[#FAF6ED] border border-[#EAE2B7] text-[#003049] hover:bg-[#EAE2B7] transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#EAE2B7] bg-[#FAF6ED] px-4 pt-4 pb-6 space-y-3">
          <div className="space-y-1">
            <div className="p-2 rounded-xl bg-[#FDFBF7] border border-[#EAE2B7]">
              <div className="px-2 py-1 text-xs uppercase font-bold tracking-wider text-[#D62828]">
                Portfolio Tabs
              </div>
              <button
                onClick={() => handleNav('portfolio', 'pe-solutions')}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium mt-1 ${
                  activeTab === 'portfolio' && activeCaseStudyTab === 'pe-solutions'
                    ? 'bg-[#003049] text-white'
                    : 'text-[#003049] hover:bg-[#EAE2B7]'
                }`}
              >
                ⚡ Tab 1: PE.solutions Energy Solutions
              </button>
              <button
                onClick={() => handleNav('portfolio', 'dell-services')}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium mt-1 ${
                  activeTab === 'portfolio' && activeCaseStudyTab === 'dell-services'
                    ? 'bg-[#003049] text-white'
                    : 'text-[#003049] hover:bg-[#EAE2B7]'
                }`}
              >
                💼 Tab 2: Dell Enterprise Services
              </button>
            </div>

            <button
              onClick={() => handleNav('about')}
              className={`w-full text-left px-4 py-3 rounded-xl font-semibold text-base flex items-center justify-between ${
                activeTab === 'about' ? 'bg-[#003049] text-white' : 'text-[#003049] hover:bg-[#EAE2B7]/70'
              }`}
            >
              <span>About</span>
            </button>

            <button
              onClick={() => handleNav('contact')}
              className={`w-full text-left px-4 py-3 rounded-xl font-semibold text-base flex items-center justify-between ${
                activeTab === 'contact' ? 'bg-[#003049] text-white' : 'text-[#003049] hover:bg-[#EAE2B7]/70'
              }`}
            >
              <span>Contact</span>
            </button>
          </div>

          <div className="pt-2">
            <button
              onClick={() => handleNav('contact')}
              className="w-full py-3 px-4 rounded-full bg-[#F77F00] text-white font-semibold text-center flex items-center justify-center gap-2 shadow-md"
            >
              <span>Start a project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
