import React, { useState, useEffect } from 'react';
import { PageTab, PortfolioCaseStudyTab } from '../types';
import { TECH_STACK, COUNTERS } from '../data/siteData';
import {
  ArrowRight,
  Sparkles,
  Layers,
  Wrench,
  Bot,
  Code2,
  ExternalLink,
  ChevronRight,
  CheckCircle2,
  Zap,
  Briefcase
} from 'lucide-react';

interface HomeViewProps {
  onNavigate: (tab: PageTab, caseStudyTab?: PortfolioCaseStudyTab) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const [techFilter, setTechFilter] = useState<'all' | 'design' | 'ai' | 'code'>('all');
  const [animatedCounts, setAnimatedCounts] = useState([0, 0, 0]);

  // Animate counters on mount
  useEffect(() => {
    let startTime: number | null = null;
    const duration = 1800; // ms

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutCubic
      const ease = 1 - Math.pow(1 - progress, 3);

      setAnimatedCounts(
        COUNTERS.map((c) => Math.floor(c.target * ease))
      );

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setAnimatedCounts(COUNTERS.map((c) => c.target));
      }
    };

    const animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, []);

  const filteredTools = TECH_STACK.filter((t) => {
    if (techFilter === 'all') return true;
    return t.category === techFilter;
  });

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 sm:pt-20 pb-16 sm:pb-24 border-b border-[#EAE2B7]/60 bg-gradient-to-b from-[#FAF6ED] to-[#FDFBF7]">
        {/* Warm subtle background blobs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#F77F00]/10 blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 -right-24 w-96 h-96 rounded-full bg-[#FCBF49]/15 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#FAF6ED] border border-[#F77F00]/40 shadow-xs mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F77F00] shadow-[0_0_10px_#F77F00] animate-pulse"></span>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#003049]">
                Talented Professional
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-fraunces font-bold text-4xl sm:text-6xl lg:text-7xl leading-[1.06] text-[#003049] tracking-tight mb-8">
              I solve digital problems through{' '}
              <span className="text-[#F77F00] italic font-normal">
                service design
              </span>
              .
            </h1>

            {/* Subtext */}
            <p className="font-inter text-lg sm:text-2xl text-[#1F3646] leading-relaxed max-w-3xl mb-10 font-normal">
              I map the messy space between people, touchpoints, and systems — then redesign it end to end. Blueprints, flows, and interfaces that make complex enterprise services feel effortless, measurable, and human.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('portfolio')}
                className="px-8 py-4 rounded-full bg-[#F77F00] hover:bg-[#db7000] text-white font-semibold text-base transition-all shadow-md hover:shadow-lg hover:scale-102 cursor-pointer flex items-center gap-2.5"
              >
                <span>View Portfolio</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 rounded-full bg-[#003049] hover:bg-[#244B63] text-white font-semibold text-base transition-all shadow-sm hover:scale-102 cursor-pointer"
              >
                Get in touch
              </button>

              <button
                onClick={() => onNavigate('about')}
                className="px-6 py-4 rounded-full bg-white hover:bg-[#FAF6ED] text-[#D62828] border-2 border-[#D62828] font-semibold text-base transition-all cursor-pointer"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* In Context Showcase Cards (Matching Design Specimen ds-layout2.png) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-xs uppercase tracking-[0.2em] font-bold text-[#D62828] mb-4">
          In Context
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Deep Navy Card */}
          <div className="bg-[#003049] text-white p-8 sm:p-10 rounded-3xl relative overflow-hidden flex flex-col justify-between shadow-lg border border-[#002235]">
            <div className="relative z-10">
              <div className="text-xs uppercase tracking-[0.18em] font-bold text-[#FCBF49] mb-4">
                CASE STUDY · TAB 2
              </div>
              <h2 className="font-fraunces font-bold text-3xl sm:text-4xl text-[#EAE2B7] mb-4 leading-tight">
                Rebuilding a brand from the ground up
              </h2>
              <p className="text-base text-[#EAE2B7]/90 leading-relaxed mb-8">
                Dell Automated Mail-in-Repairs: Cream text on navy, orange for the action, yellow for small accents. A complete 6-month enterprise service overhaul.
              </p>
            </div>
            <div className="relative z-10 pt-4">
              <button
                onClick={() => onNavigate('portfolio', 'dell-services')}
                className="px-7 py-3.5 rounded-xl bg-[#F77F00] hover:bg-[#db7000] text-white font-semibold text-sm transition-all shadow-md hover:scale-102 cursor-pointer inline-flex items-center gap-2"
              >
                <span>Read the story</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Pale Cream Card */}
          <div className="bg-[#FAF6ED] text-[#003049] p-8 sm:p-10 rounded-3xl relative overflow-hidden flex flex-col justify-between shadow-sm border border-[#EAE2B7]">
            <div className="relative z-10">
              <div className="text-xs uppercase tracking-[0.18em] font-bold text-[#D62828] mb-4">
                SERVICES &amp; ARCHITECTURE · TAB 1
              </div>
              <h2 className="font-fraunces font-bold text-3xl sm:text-4xl text-[#003049] mb-4 leading-tight">
                Strategy, design, build
              </h2>
              <p className="text-base text-[#1F3646] leading-relaxed mb-8">
                PE.solutions Energy Solutions: Navy text on cream, crimson reserved for large headlines, links, and key accents. Clean energy grid and asset telemetry.
              </p>
            </div>
            <div className="relative z-10 pt-4">
              <button
                onClick={() => onNavigate('portfolio', 'pe-solutions')}
                className="px-7 py-3.5 rounded-xl bg-transparent hover:bg-white text-[#D62828] border-2 border-[#D62828] font-semibold text-sm transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>Our process</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Counters Section (From shad360: 234 Websites, 4,056 Screens, 1,100 Prompts) */}
      <section className="bg-[#FAF6ED] py-16 border-y border-[#EAE2B7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-[#EAE2B7]">
            {COUNTERS.map((counter, idx) => (
              <div key={idx} className="pt-6 sm:pt-0 sm:px-6">
                <div className="font-fraunces font-bold text-5xl sm:text-6xl lg:text-7xl text-[#003049] tracking-tight tabular-nums">
                  {animatedCounts[idx].toLocaleString('en-US')}
                </div>
                <div className="w-12 h-1 bg-[#F77F00] mx-auto rounded-full my-4"></div>
                <div className="text-xs uppercase tracking-[0.2em] font-bold text-[#8C765C]">
                  {counter.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Tech Stack Section (From shad360.com) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#F77F00]">
            Tools of the craft
          </span>
          <h2 className="font-fraunces font-bold text-3xl sm:text-5xl text-[#003049] mt-2 mb-4">
            My Tech Stack
          </h2>
          <p className="text-base text-[#1F3646] leading-relaxed">
            The design, AI, and delivery tools I reach for daily — from research and prototyping to shipping production interfaces.
          </p>

          {/* Filter pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setTechFilter('all')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                techFilter === 'all'
                  ? 'bg-[#003049] text-white shadow-sm'
                  : 'bg-[#FAF6ED] text-[#003049] hover:bg-[#EAE2B7]'
              }`}
            >
              All Tools ({TECH_STACK.length})
            </button>
            <button
              onClick={() => setTechFilter('design')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                techFilter === 'design'
                  ? 'bg-[#003049] text-white shadow-sm'
                  : 'bg-[#FAF6ED] text-[#003049] hover:bg-[#EAE2B7]'
              }`}
            >
              Design &amp; Systems
            </button>
            <button
              onClick={() => setTechFilter('ai')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                techFilter === 'ai'
                  ? 'bg-[#003049] text-white shadow-sm'
                  : 'bg-[#FAF6ED] text-[#003049] hover:bg-[#EAE2B7]'
              }`}
            >
              AI &amp; Reasoning
            </button>
            <button
              onClick={() => setTechFilter('code')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                techFilter === 'code'
                  ? 'bg-[#003049] text-white shadow-sm'
                  : 'bg-[#FAF6ED] text-[#003049] hover:bg-[#EAE2B7]'
              }`}
            >
              Frontend &amp; Ship
            </button>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredTools.map((tool, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#EAE2B7] rounded-2xl p-5 flex flex-col items-center text-center hover:border-[#F77F00] hover:-translate-y-1 transition-all shadow-xs group"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center font-fraunces font-bold text-xl text-white shadow-sm mb-3 group-hover:scale-105 transition-transform"
                style={{ backgroundColor: tool.bg }}
              >
                {tool.mark}
              </div>
              <span className="font-bold text-sm text-[#003049]">{tool.name}</span>
              <span className="text-[11px] text-[#8C765C] mt-1 line-clamp-2 leading-tight">
                {tool.description}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Direct Portfolio Case Studies Gateway */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF6ED] border border-[#EAE2B7] rounded-3xl p-8 sm:p-12">
          <div className="max-w-2xl mb-8">
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#D62828]">
              Portfolio Tabs
            </span>
            <h2 className="font-fraunces font-bold text-3xl sm:text-4xl text-[#003049] mt-1">
              Explore the Two UX Case Studies
            </h2>
            <p className="text-sm text-[#1F3646] mt-2">
              Select any of the two tabs to explore the detailed project layouts, metrics, and service blueprints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tab 1 card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#EAE2B7] hover:border-[#F77F00] transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-wider font-bold text-[#F77F00]">
                    Tab 1 · Open Layout
                  </span>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[#FAF6ED] text-[#003049]">
                    Energy
                  </span>
                </div>
                <h3 className="font-fraunces font-bold text-2xl text-[#003049] mb-3">
                  UX Case Study --- PE.solutions Energy Solutions
                </h3>
                <p className="text-sm text-[#1F3646] leading-relaxed mb-6">
                  Next-generation industrial microgrids, telemetry streaming, and demand response architecture. Structured layout ready for your project objectives.
                </p>
              </div>
              <button
                onClick={() => onNavigate('portfolio', 'pe-solutions')}
                className="w-full py-3 rounded-xl bg-[#FAF6ED] hover:bg-[#003049] text-[#003049] hover:text-white font-semibold text-sm transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Open Tab 1 Layout</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Tab 2 card */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#EAE2B7] hover:border-[#003049] transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-wider font-bold text-[#003049]">
                    Tab 2 · shad360.com Original Content
                  </span>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[#FAF6ED] text-[#003049]">
                    Enterprise
                  </span>
                </div>
                <h3 className="font-fraunces font-bold text-2xl text-[#003049] mb-3">
                  UX Case Study --- Dell Enterprise Services
                </h3>
                <p className="text-sm text-[#1F3646] leading-relaxed mb-6">
                  Automated Mail-in-Repairs end-to-end overhaul. Reduced repeat customer support calls by 38%, boosted CSAT to 4.6/5, and streamlined repair timelines.
                </p>
              </div>
              <button
                onClick={() => onNavigate('portfolio', 'dell-services')}
                className="w-full py-3 rounded-xl bg-[#003049] hover:bg-[#244B63] text-white font-semibold text-sm transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Explore Dell Case Study</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
