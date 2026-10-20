import { CaseStudyQuickFact } from '../types';

export const DELL_CASE_STUDY = {
  title: 'Overview — Automated Mail-in-Repairs',
  eyebrow: 'UX Case Study · Dell Enterprise Services',
  summary:
    'Redesigned the complete service experience end to end. Identified duplicate customer inquiries, personalized packaging guidance for confusing instructions, and meticulously assembled the small pieces into a live repair timeline.',
  facts: [
    { label: 'Client', value: 'Dell — Consumer Support' },
    { label: 'Timeline', value: '6 months' },
    { label: 'Team', value: '9 teammates · 12 users' },
    { label: 'Focus', value: 'End-to-end service design' },
  ] as CaseStudyQuickFact[],
  theProject:
    "Dell's desktop Mail-in-Repairs application took six months to complete. I collaborated and ideated the design with nine teammates and twelve end users — spanning PM, SMEs, business analysts, a UX researcher, a copywriter and backend engineers.",
  myRole:
    'To lead the extensive overhaul of the existing Automated Mail-in-Repairs experience — resolving fundamental flaws in the end-to-end product process, from request submission through delivery.',
  businessProblem:
    'Redesign the end-to-end service landscape — improving request submission mechanics, optimizing shipping coordination, delivering clear repair-status transparency, and raising overall customer confidence while unlocking core operational efficiencies.',
  userPersona: {
    title: 'Remote Professional',
    subtitle: 'Primary mail-in repair user',
    needs: 'Fast repair, transparent tracking, minimal downtime, clear return expectations.',
    painPoints: 'Lost productivity, opaque depot delays, unclear packaging instructions, repetitive support status calls.',
  },
  metrics: [
    { value: '38%', label: 'Reduction in repeat customer support tickets', detail: 'Fewer follow-up calls querying status' },
    { value: '4.6/5', label: 'Customer satisfaction post-launch', detail: 'Significant jump from baseline NPS' },
    { value: '65%', label: 'Faster repair status lookups', detail: 'Instant timeline access without phone agent' },
    { value: '22%', label: 'Drop in return-to-depot errors', detail: 'Reduced missing accessories and improper boxes' },
  ],
  contributions: [
    { title: 'Service Blueprints', desc: 'Mapped front-stage user touchpoints with back-stage depot repair mechanics and courier API triggers.' },
    { title: 'Interactive Wireframes & Prototyping', desc: 'Crafted high-fidelity desktop and mobile wireframes validated through rapid testing rounds.' },
    { title: 'Customer Journey Mapping', desc: 'Audited friction points across intake, packaging, drop-off, repair diagnostics, and return delivery.' },
    { title: 'Design System Alignment', desc: 'Integrated Dell Design System components ensuring accessible WCAG AA contrast and responsiveness.' },
    { title: 'Stakeholder Workshops', desc: 'Facilitated cross-functional alignment sessions between engineering, logistics, and executive sponsors.' },
    { title: 'Usability Testing Protocols', desc: 'Conducted moderated sessions with 12 enterprise and consumer end users across repair scenarios.' },
  ],
};

export const PE_SOLUTIONS_CASE_STUDY = {
  title: 'UX Case Study — PE.solutions Energy Solutions',
  eyebrow: 'Smart Grid & Renewable Energy Management Platform',
  summary:
    'End-to-end UX architecture and design system for next-generation clean energy distribution, commercial microgrid monitoring, and real-time power analytics. Ready for detailed project objectives integration.',
  facts: [
    { label: 'Client', value: 'PE.solutions Energy Solutions' },
    { label: 'Platform', value: 'enfiniti Energy Intelligence' },
    { label: 'Design System', value: 'IBM Carbon Token Architecture' },
    { label: 'Status', value: 'Design System Group Complete' },
  ] as CaseStudyQuickFact[],
};

export const PE_INTRO_PITCH = {
  overview:
    'PE Solutions needed more than a refreshed UI kit. It needed a shared design language that product, UX, and engineering could all build on. I led the renovation of its fragmented design system into a scalable, reusable component library that raised consistency across the product suite and sped up the way designers work. Along the way I joined a global design team, set up new processes and tools, and laid the foundation for the system that followed.',
  myRole:
    'I owned the audit of the existing UI and the design of the component library: a set of reusable, customizable components that designers use to build interactions and interfaces. I partnered with engineers, senior interaction designers, and the visual design lead to take the system from concept to delivery.',
  theProcess:
    "I began with research: competitor analysis, target audiences, and industry trends. In parallel, I audited the existing interface to surface pain points and inconsistencies. This groundwork directly informed the early direction for PE Solutions' new brand and visual identity, a key input for a full rebrand and redesign of both product and platform.",
  whyNewSystem: {
    problem:
      'Before the update, PE Solutions had no single, unified design system. What existed was fragmented, inconsistent, and partly outdated, and its documentation left too much to interpretation. Product, UX, and engineering had no common foundation for process, design language, guidelines, or UI patterns.',
    solution:
      'The new system set out to fix that: bring consistency to the product suite, refresh the color palette, typography, and iconography for web and mobile, and give the organization a way to scale design without losing quality. The result is a clearer path from design to delivery.',
  },
  howItWorks:
    'Every component goes through review. Once approved in Figma, it moves into the Atomic Components file, a shared library the whole team can pull from and drag into their designs. One source of truth, one place to look.',
  outcomes: [
    'Audited components across the product, then designed and built them into the library.',
    'Delivered core product components to interaction designers as a ready-to-use library, improving designer productivity.',
    'Improved the product\'s consistency and overall experience.',
    'Ran training and testing sessions so designers could adopt the system with confidence.',
  ],
  takeaways: [
    'Designing and managing a system at scale',
    'Balancing speed with craft',
    'Gathering feedback and iterating on it',
  ],
};
