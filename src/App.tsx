import React, { useState, useEffect } from 'react';
import { PageTab, PortfolioCaseStudyTab } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { PortfolioView } from './components/PortfolioView';
import { AboutView } from './components/AboutView';
import { ContactView } from './components/ContactView';

export default function App() {
  const [activeTab, setActiveTab] = useState<PageTab>('home');
  const [activeCaseStudyTab, setActiveCaseStudyTab] =
    useState<PortfolioCaseStudyTab>('pe-solutions');

  // Sync hash and pathname routing safely
  useEffect(() => {
    const handleRouteChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '').trim();
      const pathname = window.location.pathname.replace(/^\//, '').replace(/\/$/, '').trim();
      const target = hash || pathname;

      if (target === 'portfolio') {
        setActiveTab('portfolio');
      } else if (target === 'portfolio-pe-solutions' || target === 'portfolio/pe-solutions') {
        setActiveTab('portfolio');
        setActiveCaseStudyTab('pe-solutions');
      } else if (target === 'portfolio-dell-services' || target === 'portfolio/dell-services') {
        setActiveTab('portfolio');
        setActiveCaseStudyTab('dell-services');
      } else if (target === 'about') {
        setActiveTab('about');
      } else if (target === 'contact') {
        setActiveTab('contact');
      } else {
        setActiveTab('home');
      }
    };

    handleRouteChange();
    window.addEventListener('hashchange', handleRouteChange);
    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('hashchange', handleRouteChange);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const handleNavigate = (
    tab: PageTab,
    caseStudyTab?: PortfolioCaseStudyTab
  ) => {
    setActiveTab(tab);
    if (caseStudyTab) {
      setActiveCaseStudyTab(caseStudyTab);
      window.location.hash = `portfolio-${caseStudyTab}`;
    } else {
      window.location.hash = tab === 'home' ? '' : tab;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCaseStudyTab = (tab: PortfolioCaseStudyTab) => {
    setActiveCaseStudyTab(tab);
    window.location.hash = `portfolio-${tab}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#003049] font-inter">
      {/* Navigation Header */}
      <Header
        activeTab={activeTab}
        onNavigate={handleNavigate}
        activeCaseStudyTab={activeCaseStudyTab}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'home' && <HomeView onNavigate={handleNavigate} />}
        {activeTab === 'portfolio' && (
          <PortfolioView
            activeCaseStudyTab={activeCaseStudyTab}
            onSelectCaseStudyTab={handleSelectCaseStudyTab}
            onNavigate={handleNavigate}
          />
        )}
        {activeTab === 'about' && <AboutView onNavigate={handleNavigate} />}
        {activeTab === 'contact' && <ContactView />}
      </main>

      {/* High-Contrast Accessible Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
