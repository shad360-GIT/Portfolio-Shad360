import React from 'react';
import { PageTab, PortfolioCaseStudyTab } from '../types';
import { ArrowUpRight, Mail, Linkedin, Heart, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: PageTab, caseStudyTab?: PortfolioCaseStudyTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#003049] text-[#EAE2B7] border-t-4 border-[#F77F00]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#EAE2B7]/20">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F77F00] flex items-center justify-center text-white font-fraunces font-bold text-lg shadow-sm">
                SH
              </div>
              <div>
                <span className="font-fraunces font-bold text-2xl text-white tracking-tight">
                  SHAD HAQUE
                </span>
                <span className="block text-xs uppercase tracking-[0.16em] text-[#FCBF49] font-medium">
                  Service Design for Digital Products
                </span>
              </div>
            </div>
            <p className="text-sm text-[#EAE2B7]/80 leading-relaxed max-w-sm pt-2">
              Mapping the messy space between people, touchpoints, and systems — then redesigning it end to end. Blueprints, flows, and interfaces for complex enterprise services.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#FCBF49]">
              <span className="inline-block w-2 h-2 rounded-full bg-[#F77F00] animate-pulse"></span>
              <span>Available for enterprise service design consultations</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.18em] font-bold text-[#FCBF49]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => { onNavigate('home'); scrollToTop(); }}
                  className="text-[#EAE2B7] hover:text-[#F77F00] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('portfolio', 'pe-solutions'); scrollToTop(); }}
                  className="text-[#EAE2B7] hover:text-[#F77F00] transition-colors cursor-pointer text-left"
                >
                  UX Case Study: PE.solutions Energy
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('portfolio', 'dell-services'); scrollToTop(); }}
                  className="text-[#EAE2B7] hover:text-[#F77F00] transition-colors cursor-pointer text-left"
                >
                  UX Case Study: Dell Enterprise
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('about'); scrollToTop(); }}
                  className="text-[#EAE2B7] hover:text-[#F77F00] transition-colors cursor-pointer"
                >
                  About Shad Haque
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('contact'); scrollToTop(); }}
                  className="text-[#EAE2B7] hover:text-[#F77F00] transition-colors cursor-pointer"
                >
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.18em] font-bold text-[#FCBF49]">
              Direct Inquiries
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:info@shad360.com"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#F77F00] text-white hover:text-[#F77F00] transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#D62828] flex items-center justify-center text-white">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-[#EAE2B7]/70">Email directly</div>
                  <div className="text-sm font-semibold tracking-wide">info@shad360.com</div>
                </div>
                <ArrowUpRight className="w-4 h-4 ml-auto opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href="https://www.linkedin.com/in/shadhaque/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#F77F00] text-white hover:text-[#F77F00] transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-[#0A66C2] flex items-center justify-center text-white">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-[#EAE2B7]/70">Connect professionally</div>
                  <div className="text-sm font-semibold tracking-wide">LinkedIn / shadhaque</div>
                </div>
                <ArrowUpRight className="w-4 h-4 ml-auto opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#EAE2B7]/70 gap-4">
          <p>© {new Date().getFullYear()} Shad Haque. All rights reserved. Clean light theme with Ember Dusk palette.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FCBF49]" />
              Accessible WCAG AA Contrast
            </span>
            <span>Massachusetts &amp; New York</span>
            <button
              onClick={scrollToTop}
              className="text-[#FCBF49] hover:underline cursor-pointer"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
