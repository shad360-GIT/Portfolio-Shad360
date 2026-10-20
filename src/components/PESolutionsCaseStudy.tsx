import React from 'react';
import { PE_SOLUTIONS_CASE_STUDY, PE_INTRO_PITCH } from '../data/portfolioData';
import { PEDesignSystemGroup } from './PEDesignSystemGroup';
import {
  Zap,
  Cpu,
  Layers,
  Activity,
  FileCheck2,
  CheckCircle,
  CheckCircle2,
  HelpCircle,
  ChevronRight,
  Sparkles,
  BarChart3,
  Sun,
  BatteryCharging,
  ShieldAlert,
  ArrowRight,
  Users,
  Wrench,
  Compass,
  Workflow,
  Lightbulb,
  Check
} from 'lucide-react';

interface PESolutionsCaseStudyProps {
  onSwitchToDell: () => void;
  onNavigateToContact: () => void;
}

export const PESolutionsCaseStudy: React.FC<PESolutionsCaseStudyProps> = ({
  onSwitchToDell,
  onNavigateToContact,
}) => {
  return (
    <div className="space-y-16 animate-fadeIn">
      {/* Case Study Hero */}
      <section className="bg-[#FAF6ED] border border-[#EAE2B7] rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#F77F00]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE2B7]/60 border border-[#F77F00]/40 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#F77F00]"></span>
            <span className="text-xs uppercase tracking-[0.18em] font-bold text-[#D62828]">
              {PE_SOLUTIONS_CASE_STUDY.eyebrow}
            </span>
          </div>

          <h1 className="font-fraunces font-bold text-3xl sm:text-5xl lg:text-6xl text-[#003049] leading-[1.1] mb-6">
            {PE_SOLUTIONS_CASE_STUDY.title}
          </h1>

          <p className="text-lg sm:text-xl text-[#1F3646] leading-relaxed mb-8 max-w-3xl">
            {PE_SOLUTIONS_CASE_STUDY.summary}
          </p>

          {/* Quick Facts Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-3 rounded-2xl border border-[#EAE2B7] shadow-sm">
            {PE_SOLUTIONS_CASE_STUDY.facts.map((f, i) => (
              <div key={i} className="p-3 sm:p-4 rounded-xl bg-[#FDFBF7] border border-[#EAE2B7]/60">
                <div className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#8C765C] mb-1">
                  {f.label}
                </div>
                <div className="font-fraunces font-bold text-sm sm:text-base text-[#003049]">
                  {f.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Separate Intro Pitch Section */}
      <section className="bg-white border-2 border-[#EAE2B7] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm space-y-10">
        {/* Section Header */}
        <div className="border-b border-[#EAE2B7] pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE2B7]/60 border border-[#D62828]/30 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#D62828]"></span>
            <span className="text-xs uppercase tracking-[0.18em] font-bold text-[#D62828]">
              Executive Intro Pitch &amp; Case Study Brief
            </span>
          </div>
          <h2 className="font-fraunces font-bold text-3xl sm:text-4xl text-[#003049] mb-4">
            Renovating a Fragmented Design System into a Scalable Platform
          </h2>
          <div className="p-6 rounded-2xl bg-[#FAF6ED] border border-[#EAE2B7] text-base sm:text-lg text-[#003049] leading-relaxed">
            <div className="text-xs font-bold uppercase tracking-wider text-[#F77F00] mb-2 font-mono">
              OVERVIEW
            </div>
            {PE_INTRO_PITCH.overview}
          </div>
        </div>

        {/* My Role & The Process & Why a New Design System Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#FDFBF7] border border-[#EAE2B7] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#003049] text-white flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-[#FCBF49]" />
              </div>
              <h3 className="font-fraunces font-bold text-xl text-[#003049] mb-3">
                MY ROLE
              </h3>
              <p className="text-sm text-[#1F3646] leading-relaxed">
                {PE_INTRO_PITCH.myRole}
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#FDFBF7] border border-[#EAE2B7] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#D62828] text-white flex items-center justify-center mb-4">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-fraunces font-bold text-xl text-[#003049] mb-3">
                THE PROCESS
              </h3>
              <p className="text-sm text-[#1F3646] leading-relaxed">
                {PE_INTRO_PITCH.theProcess}
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#FDFBF7] border border-[#EAE2B7] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F77F00] text-white flex items-center justify-center mb-4">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-fraunces font-bold text-xl text-[#003049] mb-3">
                WHY A NEW DESIGN SYSTEM
              </h3>
              <p className="text-sm text-[#1F3646] leading-relaxed mb-3">
                {PE_INTRO_PITCH.whyNewSystem.problem}
              </p>
              <p className="text-sm text-[#003049] font-medium leading-relaxed">
                {PE_INTRO_PITCH.whyNewSystem.solution}
              </p>
            </div>
          </div>
        </div>

        {/* How It Works: The Atomic Review & Shared Library */}
        <div className="bg-[#FAF6ED] border border-[#EAE2B7] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="w-12 h-12 rounded-2xl bg-[#003049] text-white flex items-center justify-center shrink-0">
            <Workflow className="w-6 h-6 text-[#FCBF49]" />
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#D62828] font-mono">
              HOW IT WORKS
            </div>
            <h4 className="font-fraunces font-bold text-xl text-[#003049] mt-0.5 mb-2">
              Atomic Components File &amp; Shared Library
            </h4>
            <p className="text-sm sm:text-base text-[#1F3646] leading-relaxed">
              {PE_INTRO_PITCH.howItWorks}
            </p>
          </div>
        </div>

        {/* Outcomes & Takeaways */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Outcomes */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#FDFBF7] border border-[#EAE2B7]">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5 text-[#0F6F53]" />
              <h3 className="font-fraunces font-bold text-xl text-[#003049]">
                OUTCOMES
              </h3>
            </div>
            <ul className="space-y-3">
              {PE_INTRO_PITCH.outcomes.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#1F3646]">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Takeaways */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#FDFBF7] border border-[#EAE2B7]">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-5 h-5 text-[#F77F00]" />
              <h3 className="font-fraunces font-bold text-xl text-[#003049]">
                TAKEAWAYS
              </h3>
            </div>
            <ul className="space-y-3">
              {PE_INTRO_PITCH.takeaways.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#1F3646]">
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    ★
                  </span>
                  <span className="font-medium text-[#003049]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PE Solutions Design System Group */}
      <PEDesignSystemGroup />

      {/* Section 2: Energy Solutions Ecosystem & Stakeholders */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#FAF6ED] border border-[#EAE2B7] rounded-3xl p-6 sm:p-8">
          <div className="w-10 h-10 rounded-xl bg-[#003049] text-white flex items-center justify-center mb-4">
            <Sun className="w-5 h-5 text-[#FCBF49]" />
          </div>
          <h3 className="font-fraunces font-bold text-xl text-[#003049] mb-2">
            Facility Energy Directors
          </h3>
          <p className="text-sm text-[#1F3646] leading-relaxed">
            Need consolidated situational awareness over commercial campus solar generation, battery storage state of charge, and utility tariff rate schedules.
          </p>
        </div>

        <div className="bg-[#FAF6ED] border border-[#EAE2B7] rounded-3xl p-6 sm:p-8">
          <div className="w-10 h-10 rounded-xl bg-[#D62828] text-white flex items-center justify-center mb-4">
            <BatteryCharging className="w-5 h-5 text-white" />
          </div>
          <h3 className="font-fraunces font-bold text-xl text-[#003049] mb-2">
            Microgrid Operators
          </h3>
          <p className="text-sm text-[#1F3646] leading-relaxed">
            Require automated alert thresholds, sub-second telemetry feeds from inverters, and rapid switchgear isolation triggers to prevent blackout contingencies.
          </p>
        </div>

        <div className="bg-[#FAF6ED] border border-[#EAE2B7] rounded-3xl p-6 sm:p-8">
          <div className="w-10 h-10 rounded-xl bg-[#F77F00] text-white flex items-center justify-center mb-4">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <h3 className="font-fraunces font-bold text-xl text-[#003049] mb-2">
            ESG &amp; Carbon Analysts
          </h3>
          <p className="text-sm text-[#1F3646] leading-relaxed">
            Demand auditable clean megawatt reporting, Scope 1 and 2 greenhouse emissions tracking, and export-ready compliance spreadsheets.
          </p>
        </div>
      </section>

      {/* Section 3: System Blueprint & Telemetry Architecture */}
      <section className="bg-white border border-[#EAE2B7] rounded-3xl p-8 sm:p-10 shadow-sm">
        <div className="max-w-2xl mb-8">
          <div className="text-xs uppercase tracking-[0.16em] font-bold text-[#D62828] mb-2">
            Service Blueprint
          </div>
          <h2 className="font-fraunces font-bold text-2xl sm:text-4xl text-[#003049]">
            Energy Solutions Workflow Architecture
          </h2>
          <p className="text-sm text-[#1F3646] mt-2">
            Structured placeholder mapping the pipeline from edge IoT sensors to operator decision interfaces.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-[#FAF6ED] border border-[#EAE2B7]">
            <span className="text-xs font-mono font-bold text-[#F77F00]">STAGE 01</span>
            <h4 className="font-fraunces font-bold text-lg text-[#003049] mt-2 mb-1">Edge Ingestion</h4>
            <p className="text-xs text-[#1F3646] leading-relaxed">
              Modbus/DNP3 field sensor feeds across distributed solar panels and BESS racks.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#FAF6ED] border border-[#EAE2B7]">
            <span className="text-xs font-mono font-bold text-[#D62828]">STAGE 02</span>
            <h4 className="font-fraunces font-bold text-lg text-[#003049] mt-2 mb-1">State Estimation</h4>
            <p className="text-xs text-[#1F3646] leading-relaxed">
              Edge controller runs telemetry sanitization, anomaly checks, and thermal safety checks.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#FAF6ED] border border-[#EAE2B7]">
            <span className="text-xs font-mono font-bold text-[#003049]">STAGE 03</span>
            <h4 className="font-fraunces font-bold text-lg text-[#003049] mt-2 mb-1">Dispatch Algorithm</h4>
            <p className="text-xs text-[#1F3646] leading-relaxed">
              Automated load curve optimization balancing battery storage discharge with peak grid pricing.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#FAF6ED] border border-[#EAE2B7]">
            <span className="text-xs font-mono font-bold text-[#244B63]">STAGE 04</span>
            <h4 className="font-fraunces font-bold text-lg text-[#003049] mt-2 mb-1">Operator Console</h4>
            <p className="text-xs text-[#1F3646] leading-relaxed">
              Clean responsive UI displaying live megawatt generation, financial yield, and maintenance triggers.
            </p>
          </div>
        </div>
      </section>


      {/* Switch to Dell Case Study CTA */}
      <section className="bg-white border-2 border-dashed border-[#003049]/40 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs uppercase tracking-widest font-bold text-[#003049]">Explore Full Case Study</span>
          <h3 className="font-fraunces font-bold text-2xl text-[#003049] mt-1">
            Tab 2: UX Case Study — Dell Enterprise Services
          </h3>
          <p className="text-sm text-[#1F3646] mt-1 max-w-xl">
            View the live end-to-end service redesign case study from shad360.com with complete user insights, metrics, and workflows.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onSwitchToDell}
            className="px-6 py-3 rounded-full bg-[#003049] hover:bg-[#244B63] text-white font-semibold text-sm transition-all cursor-pointer shadow-md flex items-center gap-2"
          >
            <span>View Dell Case Study</span>
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            onClick={onNavigateToContact}
            className="px-6 py-3 rounded-full bg-[#F77F00] hover:bg-[#db7000] text-white font-semibold text-sm transition-all cursor-pointer shadow-md flex items-center gap-2"
          >
            <span>Send Project Details</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
