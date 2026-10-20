import React from 'react';
import { PageTab } from '../types';
import { PILLARS, SKILLS_LIST } from '../data/siteData';
import { ArrowRight, BookOpen, Sparkles, MapPin, Award, CheckCircle } from 'lucide-react';

interface AboutViewProps {
  onNavigate: (tab: PageTab) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Hero / Bio Introduction */}
      <section className="bg-[#FAF6ED] border border-[#EAE2B7] rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F77F00]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D62828]/25 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#D62828]"></span>
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#D62828]">
              About Shad Haque
            </span>
          </div>

          <h1 className="font-fraunces font-bold text-3xl sm:text-5xl lg:text-6xl text-[#003049] leading-[1.1] mb-6">
            Designer, listener, rapid iterator.
          </h1>

          <div className="flex items-center gap-2 text-sm text-[#F77F00] font-semibold mb-8">
            <MapPin className="w-4 h-4" />
            <span>Based between Massachusetts and New York</span>
          </div>

          <div className="space-y-6 text-base sm:text-lg text-[#1F3646] leading-relaxed">
            <p>
              I live between Massachusetts and New York. Formally educated as a computer science engineer, and vocationally trained at The Interaction Design Foundation (IDF) — with a steady habit of attending UX-matters seminars.
            </p>
            <p>
              Eager to learn more, good at listening, and open to suggestions. Quick at rapid iterations, slow at jumping to conclusions, and always working hard to be a genuine team player.
            </p>
            <p>
              Over 14+ years of hands-on UX and UI design have exposed me to web application design, mobile solutions, mental models, responsive design, A/B testing, and the craft of turning complex enterprise problems into calm, usable products.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-[#EAE2B7] flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="font-fraunces font-bold text-xl text-[#003049]">
                Shad Haque
              </div>
              <div className="text-xs uppercase tracking-wider font-semibold text-[#8C765C]">
                Product Designer · Researcher · Writer · Advertiser
              </div>
            </div>

            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-full bg-[#003049] hover:bg-[#244B63] text-white text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 shadow-sm"
            >
              <span>Get in touch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 3 Pillars Section */}
      <section>
        <div className="text-xs uppercase tracking-[0.18em] font-bold text-[#D62828] mb-4">
          Core Pillars
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map((p, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#EAE2B7] rounded-3xl p-8 hover:border-[#F77F00] transition-colors shadow-xs"
            >
              <div className="font-fraunces font-bold text-4xl sm:text-5xl text-[#F77F00] mb-4">
                {p.number}
              </div>
              <h3 className="font-fraunces font-bold text-xl text-[#003049] mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-[#1F3646] leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stacks & Core Competencies (From shad360.com) */}
      <section className="bg-[#FAF6ED] border border-[#EAE2B7] rounded-3xl p-8 sm:p-12">
        <div className="max-w-2xl mb-8">
          <div className="text-xs uppercase tracking-[0.18em] font-bold text-[#F77F00] mb-2">
            Skill Landscape
          </div>
          <h2 className="font-fraunces font-bold text-2xl sm:text-4xl text-[#003049]">
            My Tech Stacks &amp; Methodologies
          </h2>
          <p className="text-sm text-[#1F3646] mt-2">
            Enterprise design methodologies, analytical instruments, and full-stack frameworks.
          </p>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {SKILLS_LIST.map((skill, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full bg-white border border-[#EAE2B7] text-[#003049] hover:border-[#F77F00] hover:text-[#D62828] text-xs sm:text-sm font-semibold tracking-wide transition-colors shadow-2xs"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};
