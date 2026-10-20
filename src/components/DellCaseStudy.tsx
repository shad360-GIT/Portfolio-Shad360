import React, { useState } from 'react';
import { DELL_CASE_STUDY } from '../data/portfolioData';
import {
  Clock,
  Users,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Layers,
  ArrowRight,
  Shield,
  Truck,
  Wrench,
  Package,
  Search,
  Sparkles,
  ChevronRight,
  MonitorCheck,
  FileText,
  Workflow
} from 'lucide-react';

interface DellCaseStudyProps {
  onSwitchToPESolutions: () => void;
  onNavigateToContact: () => void;
}

export const DellCaseStudy: React.FC<DellCaseStudyProps> = ({
  onSwitchToPESolutions,
  onNavigateToContact,
}) => {
  const [activeWorkflowStage, setActiveWorkflowStage] = useState<number>(2);

  const workflowStages = [
    {
      step: '01',
      title: 'Smart Intake & Diagnostic',
      icon: Search,
      desc: 'Customer enters Service Tag. Automated diagnostic logic checks warranty and pre-qualifies issue without phone agent friction.',
      before: 'Lengthy phone support script, repetitive serial questions.',
      after: 'Instant serial lookup with pre-filled hardware profile.',
    },
    {
      step: '02',
      title: 'Pre-paid Box Dispatch',
      icon: Package,
      desc: 'Specialized tamper-evident packaging dispatched to user with customized packing checklist for their exact laptop model.',
      before: 'Generic packaging booklet; customers sent wrong power adapters.',
      after: 'Model-specific visual folding guide and checklist.',
    },
    {
      step: '03',
      title: 'Depot Intake & Triage',
      icon: Truck,
      desc: 'Automated barcode scan on arrival notifies customer within 2 minutes. Hardware technician assigned with live status tag.',
      before: '3 to 5 days of silence leaving customers anxious.',
      after: 'Immediate notification: "Device arrived safely at Nashville Depot".',
    },
    {
      step: '04',
      title: 'Bench Repair & Testing',
      icon: Wrench,
      desc: 'Component replacement and multi-point automated hardware stress test with transparent technician inspection notes.',
      before: 'Unexplained delays when waiting for replacement parts.',
      after: 'Live part delivery tracker and estimated test completion.',
    },
    {
      step: '05',
      title: 'QA & Express Return',
      icon: MonitorCheck,
      desc: 'Final operating system and sensor signoff, packaged in clean anti-static wrap with tracking details pushed to SMS and email.',
      before: 'Surprise delivery requiring signature with no prior alert.',
      after: 'Pre-delivery SMS with 2-hour courier window and signature option.',
    },
  ];

  return (
    <div className="space-y-16 animate-fadeIn">
      {/* Case Study Hero */}
      <section className="bg-[#FAF6ED] border border-[#EAE2B7] rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#FCBF49]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE2B7]/60 border border-[#D62828]/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#D62828]"></span>
            <span className="text-xs uppercase tracking-[0.18em] font-bold text-[#D62828]">
              {DELL_CASE_STUDY.eyebrow}
            </span>
          </div>

          <h1 className="font-fraunces font-bold text-3xl sm:text-5xl lg:text-6xl text-[#003049] leading-[1.1] mb-6">
            {DELL_CASE_STUDY.title}
          </h1>

          <p className="text-lg sm:text-xl text-[#1F3646] leading-relaxed mb-8 max-w-3xl">
            {DELL_CASE_STUDY.summary}
          </p>

          {/* Quick Facts Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-3 rounded-2xl border border-[#EAE2B7] shadow-sm">
            {DELL_CASE_STUDY.facts.map((f, i) => (
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

      {/* Two Column: The Project & My Role */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#FDFBF7] border border-[#EAE2B7] rounded-3xl p-8 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-[#003049] text-white flex items-center justify-center mb-6">
            <Users className="w-6 h-6 text-[#F77F00]" />
          </div>
          <h2 className="font-fraunces font-bold text-2xl sm:text-3xl text-[#003049] mb-4">
            The Project
          </h2>
          <p className="text-base text-[#1F3646] leading-relaxed">
            {DELL_CASE_STUDY.theProject}
          </p>
        </div>

        <div className="bg-[#FDFBF7] border border-[#EAE2B7] rounded-3xl p-8 shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-[#D62828] text-white flex items-center justify-center mb-6">
            <Wrench className="w-6 h-6 text-[#FCBF49]" />
          </div>
          <h2 className="font-fraunces font-bold text-2xl sm:text-3xl text-[#003049] mb-4">
            My Role
          </h2>
          <p className="text-base text-[#1F3646] leading-relaxed">
            {DELL_CASE_STUDY.myRole}
          </p>
        </div>
      </section>

      {/* The Business Problem */}
      <section className="bg-[#003049] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden">
        <div className="max-w-3xl relative z-10">
          <div className="text-xs uppercase tracking-[0.18em] font-bold text-[#FCBF49] mb-3">
            Strategic Alignment
          </div>
          <h2 className="font-fraunces font-bold text-3xl sm:text-4xl text-white mb-6">
            The Business Problem
          </h2>
          <p className="text-lg text-[#EAE2B7] leading-relaxed">
            {DELL_CASE_STUDY.businessProblem}
          </p>
        </div>
      </section>

      {/* Interactive Service Blueprint & Live Repair Timeline */}
      <section className="bg-white border border-[#EAE2B7] rounded-3xl p-6 sm:p-10 shadow-sm">
        <div className="max-w-3xl mb-8">
          <div className="text-xs uppercase tracking-[0.16em] font-bold text-[#D62828] mb-2">
            Service Blueprinting
          </div>
          <h2 className="font-fraunces font-bold text-2xl sm:text-4xl text-[#003049] mb-4">
            Operational Workflow: 5-Stage Service Architecture
          </h2>
          <p className="text-[#1F3646] text-base leading-relaxed">
            Click across each service touchpoint to examine the front-stage customer experience and back-stage operational synchronization.
          </p>
        </div>

        {/* Workflow Timeline Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-8">
          {workflowStages.map((st, idx) => {
            const Icon = st.icon;
            const isSelected = activeWorkflowStage === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveWorkflowStage(idx)}
                className={`p-4 rounded-2xl text-left transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-[#003049] text-white border-[#003049] shadow-md scale-102'
                    : 'bg-[#FAF6ED] text-[#003049] border-[#EAE2B7] hover:bg-[#EAE2B7]/60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold ${isSelected ? 'text-[#FCBF49]' : 'text-[#8C765C]'}`}>
                    {st.step}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-[#F77F00]' : 'text-[#003049]'}`} />
                </div>
                <div className="font-fraunces font-bold text-sm leading-snug">
                  {st.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Deep Dive Card */}
        {(() => {
          const current = workflowStages[activeWorkflowStage];
          const Icon = current.icon;
          return (
            <div className="bg-[#FDFBF7] border border-[#EAE2B7] rounded-2xl p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#F77F00] text-white flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider font-bold text-[#D62828]">
                    Phase {current.step} Touchpoint
                  </div>
                  <h3 className="font-fraunces font-bold text-2xl text-[#003049]">
                    {current.title}
                  </h3>
                  <p className="text-[#1F3646] text-base mt-2 leading-relaxed">
                    {current.desc}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#EAE2B7]">
                <div className="p-4 rounded-xl bg-[#D62828]/10 border border-[#D62828]/20">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#D62828] mb-1">
                    Previous Friction Point (Before)
                  </div>
                  <div className="text-sm text-[#5C1616] font-medium">{current.before}</div>
                </div>

                <div className="p-4 rounded-xl bg-[#003049]/5 border border-[#003049]/20">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#003049] mb-1">
                    Service Redesign Solution (After)
                  </div>
                  <div className="text-sm text-[#003049] font-medium">{current.after}</div>
                </div>
              </div>
            </div>
          );
        })()}
      </section>

      {/* UX Research & User Persona */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Persona Card */}
        <div className="lg:col-span-5 bg-[#FAF6ED] border border-[#EAE2B7] rounded-3xl p-8">
          <div className="text-xs uppercase tracking-[0.16em] font-bold text-[#D62828] mb-2">
            Target User Archetype
          </div>
          <h3 className="font-fraunces font-bold text-2xl text-[#003049] mb-1">
            {DELL_CASE_STUDY.userPersona.title}
          </h3>
          <div className="text-xs uppercase tracking-wider text-[#F77F00] font-semibold mb-6">
            {DELL_CASE_STUDY.userPersona.subtitle}
          </div>

          <div className="space-y-5">
            <div className="bg-white p-4 rounded-xl border border-[#EAE2B7]">
              <div className="text-xs font-bold text-[#003049] uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#F77F00]" />
                Primary Needs
              </div>
              <p className="text-sm text-[#1F3646] leading-relaxed">
                {DELL_CASE_STUDY.userPersona.needs}
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl border border-[#EAE2B7]">
              <div className="text-xs font-bold text-[#D62828] uppercase tracking-wider flex items-center gap-1.5 mb-1.5">
                <AlertCircle className="w-4 h-4 text-[#D62828]" />
                Critical Pain Points
              </div>
              <p className="text-sm text-[#1F3646] leading-relaxed">
                {DELL_CASE_STUDY.userPersona.painPoints}
              </p>
            </div>
          </div>
        </div>

        {/* Research Insights Breakdown */}
        <div className="lg:col-span-7 bg-[#FDFBF7] border border-[#EAE2B7] rounded-3xl p-8 space-y-6">
          <div>
            <div className="text-xs uppercase tracking-[0.16em] font-bold text-[#F77F00] mb-2">
              Empirical Findings
            </div>
            <h3 className="font-fraunces font-bold text-2xl sm:text-3xl text-[#003049] mb-3">
              UX Research &amp; User Insights
            </h3>
            <p className="text-sm text-[#1F3646] leading-relaxed">
              Through contextual inquiries with 12 end users and support call transcript clustering, three structural breakdown areas emerged:
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex gap-4 p-4 rounded-2xl bg-white border border-[#EAE2B7]">
              <div className="w-8 h-8 rounded-full bg-[#003049] text-white flex items-center justify-center shrink-0 font-fraunces font-bold text-sm">
                1
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#003049]">Status Invisibility Triggered Redundant Contact</h4>
                <p className="text-xs sm:text-sm text-[#1F3646] mt-1 leading-relaxed">
                  Over 60% of all follow-up inbound support calls were simply users asking "Did you receive my laptop?" because carrier drop-offs lacked immediate depot intake receipts.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-2xl bg-white border border-[#EAE2B7]">
              <div className="w-8 h-8 rounded-full bg-[#D62828] text-white flex items-center justify-center shrink-0 font-fraunces font-bold text-sm">
                2
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#003049]">Cognitive Overload in Packing Materials</h4>
                <p className="text-xs sm:text-sm text-[#1F3646] mt-1 leading-relaxed">
                  Customers received generic 12-page packaging booklets with warnings for desktop towers when repairing 13-inch ultrabooks, leading to improper foam placement and delayed shipments.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-2xl bg-white border border-[#EAE2B7]">
              <div className="w-8 h-8 rounded-full bg-[#F77F00] text-white flex items-center justify-center shrink-0 font-fraunces font-bold text-sm">
                3
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#003049]">Disjointed Out-of-Warranty Quote Approvals</h4>
                <p className="text-xs sm:text-sm text-[#1F3646] mt-1 leading-relaxed">
                  When repairs required additional fee authorization, users were emailed complex PDF invoices that had to be approved via telephone, stalling bench technician work for up to 96 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="bg-[#FAF6ED] border border-[#EAE2B7] rounded-3xl p-8 sm:p-12">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs uppercase tracking-[0.18em] font-bold text-[#D62828] mb-2">
            Measurable Outcomes
          </div>
          <h2 className="font-fraunces font-bold text-3xl sm:text-4xl text-[#003049]">
            Proven Business &amp; Operational Impact
          </h2>
          <p className="text-sm sm:text-base text-[#1F3646] mt-3">
            Realized metrics validated post-deployment across regional repair depots and consumer support channels.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DELL_CASE_STUDY.metrics.map((m, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#EAE2B7] rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="font-fraunces font-bold text-4xl sm:text-5xl text-[#003049] tracking-tight mb-2">
                {m.value}
              </div>
              <div className="w-10 h-1 bg-[#F77F00] mx-auto rounded-full mb-3"></div>
              <div className="font-bold text-sm text-[#003049] mb-1">
                {m.label}
              </div>
              <div className="text-xs text-[#8C765C]">
                {m.detail}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* My Contributions */}
      <section className="bg-white border border-[#EAE2B7] rounded-3xl p-8 sm:p-12 shadow-sm">
        <div className="max-w-2xl mb-8">
          <div className="text-xs uppercase tracking-[0.16em] font-bold text-[#F77F00] mb-2">
            Core Competencies Applied
          </div>
          <h2 className="font-fraunces font-bold text-2xl sm:text-4xl text-[#003049]">
            My Contributions
          </h2>
          <p className="text-sm sm:text-base text-[#1F3646] mt-2">
            Leading cross-functional synthesis across design, user testing, product requirements, and engineering integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DELL_CASE_STUDY.contributions.map((c, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#FDFBF7] border border-[#EAE2B7] hover:border-[#F77F00] transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#003049] text-white flex items-center justify-center font-bold text-sm mb-4 group-hover:bg-[#F77F00] transition-colors">
                0{i + 1}
              </div>
              <h3 className="font-fraunces font-bold text-lg text-[#003049] mb-2">
                {c.title}
              </h3>
              <p className="text-sm text-[#1F3646] leading-relaxed">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation to PE.solutions Case Study & Contact Banner */}
      <section className="bg-[#FAF6ED] border-2 border-dashed border-[#F77F00]/60 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs uppercase tracking-widest font-bold text-[#D62828]">Next Case Study</span>
          <h3 className="font-fraunces font-bold text-2xl text-[#003049] mt-1">
            UX Case Study — PE.solutions Energy Solutions
          </h3>
          <p className="text-sm text-[#1F3646] mt-1 max-w-xl">
            Switch tabs to inspect the smart grid and renewable energy management platform layout structure.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onSwitchToPESolutions}
            className="px-6 py-3 rounded-full bg-[#003049] hover:bg-[#244B63] text-white font-semibold text-sm transition-all cursor-pointer shadow-sm flex items-center gap-2"
          >
            <span>Open Tab 1 Layout</span>
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            onClick={onNavigateToContact}
            className="px-6 py-3 rounded-full bg-[#F77F00] hover:bg-[#db7000] text-white font-semibold text-sm transition-all cursor-pointer shadow-md flex items-center gap-2"
          >
            <span>Let's talk</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
