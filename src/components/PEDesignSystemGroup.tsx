import React, { useState } from 'react';
import {
  DESIGN_SYSTEM_STATUS,
  TOKEN_TIERS,
  NAMING_RULES,
  GRAY_PRIMITIVES,
  BRAND_PRIMITIVES,
  ACCENT_SUPPORT_PRIMITIVES,
  SEMANTIC_TOKENS,
  CONTRAST_AUDIT,
  TYPOGRAPHY_SCALE,
  SPACING_TOKENS,
  RADIUS_TOKENS,
  GRID_BREAKPOINTS,
  DESIGN_SYSTEM_ATTACHMENTS,
} from '../data/designSystemData';
import {
  Layers,
  Palette,
  Type,
  Maximize2,
  CheckCircle2,
  XCircle,
  Copy,
  Check,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  Sliders,
  Eye,
  FileCode2,
  Info
} from 'lucide-react';

export const PEDesignSystemGroup: React.FC = () => {
  const [activeGroupTab, setActiveGroupTab] = useState<
    'architecture' | 'colors' | 'semantic' | 'contrast' | 'typography' | 'spacing' | 'artifacts'
  >('architecture');

  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [selectedArtifactIndex, setSelectedArtifactIndex] = useState<number | null>(null);
  const [typographySampleText, setTypographySampleText] = useState<string>('Energy intelligence across utilities & microgrids');

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedHex(text);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <section className="bg-white border-2 border-[#EAE2B7] rounded-3xl p-6 sm:p-10 shadow-sm space-y-10">
      {/* Design System Header */}
      <div className="border-b border-[#EAE2B7] pb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE2B7]/60 border border-[#F77F00]/40">
            <Layers className="w-4 h-4 text-[#D62828]" />
            <span className="text-xs uppercase tracking-[0.18em] font-bold text-[#D62828]">
              Design System Group · PE Solutions Foundations
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#8C765C]">
            <span>Foundation: IBM Carbon Structure</span>
            <span>·</span>
            <span>Product: enfiniti Dashboards</span>
          </div>
        </div>

        <h2 className="font-fraunces font-bold text-3xl sm:text-4xl text-[#003049] mb-3">
          Design Tokens &amp; Design System Group
        </h2>
        <p className="text-base text-[#1F3646] max-w-3xl leading-relaxed">
          The verified design token architecture powering PE Solutions' <em>enfiniti</em> industrial dashboards and digital energy presence. Structure and token names adhere strictly to IBM Carbon guidelines with multi-tiered semantic abstraction.
        </p>

        {/* Status Indicators (from ds1_e0cfd784.png) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
          {DESIGN_SYSTEM_STATUS.map((st, i) => (
            <div key={i} className={`p-3.5 rounded-xl border text-xs leading-relaxed ${st.bg}`}>
              <div className="font-bold tracking-wider uppercase mb-1 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-current"></span>
                <span>{st.tag}</span>
              </div>
              <p className="opacity-90">{st.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Group Navigation Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-[#EAE2B7] pb-4">
        {[
          { id: 'architecture', label: '1. Architecture & Rules', icon: Layers },
          { id: 'colors', label: '2. Color Primitives', icon: Palette },
          { id: 'semantic', label: '3. Semantic Tokens', icon: Sliders },
          { id: 'contrast', label: '4. Contrast Audit (WCAG)', icon: ShieldCheck },
          { id: 'typography', label: '5. Typography Scale', icon: Type },
          { id: 'spacing', label: '6. Spacing & Grid', icon: Maximize2 },
          { id: 'artifacts', label: '7. Source Artifacts (6)', icon: Eye },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeGroupTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveGroupTab(tab.id as any)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 border ${
                isActive
                  ? 'bg-[#003049] text-white border-[#003049] shadow-sm'
                  : 'bg-[#FAF6ED] text-[#003049] border-[#EAE2B7] hover:bg-[#EAE2B7]'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-[#FCBF49]' : 'text-[#F77F00]'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Sub-Tab 1: Architecture & Rules */}
      {activeGroupTab === 'architecture' && (
        <div className="space-y-8 animate-fadeIn">
          <div>
            <h3 className="font-fraunces font-bold text-2xl text-[#003049] mb-2">
              Token Architecture &amp; Tiers
            </h3>
            <p className="text-sm text-[#1F3646]">
              Structured in four distinct collections to separate raw primitive values from component-level semantic intent.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TOKEN_TIERS.map((tier, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#FAF6ED] border border-[#EAE2B7] flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#D62828] mb-1">
                    {tier.tier}
                  </div>
                  <div className="font-fraunces font-bold text-xl text-[#003049] mb-2">
                    {tier.count}
                  </div>
                  <p className="text-xs text-[#1F3646] leading-relaxed mb-4">
                    {tier.details}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#EAE2B7]/70 text-[11px] font-mono text-[#8C765C]">
                  Collection: <strong className="text-[#003049]">{tier.collection}</strong>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[#EAE2B7]">
            <h4 className="font-fraunces font-bold text-xl text-[#003049] mb-4">
              Naming and Usage Rules
            </h4>
            <div className="divide-y divide-[#EAE2B7] bg-[#FDFBF7] rounded-2xl border border-[#EAE2B7] overflow-hidden">
              {NAMING_RULES.map((rule, idx) => (
                <div key={idx} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-6">
                  <div className="font-bold text-sm text-[#003049] sm:w-1/3">
                    {rule.rule}
                  </div>
                  <div className="text-xs sm:text-sm text-[#1F3646] sm:w-2/3 leading-relaxed">
                    {rule.guideline}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Sub-Tab 2: Color Primitives */}
      {activeGroupTab === 'colors' && (
        <div className="space-y-8 animate-fadeIn">
          <div>
            <h3 className="font-fraunces font-bold text-2xl text-[#003049] mb-2">
              Color Primitives &amp; Swatches
            </h3>
            <p className="text-sm text-[#1F3646]">
              Click any color swatch to copy its exact HEX code. Raw palette values are hidden from component pickers and bound to semantic alias tokens.
            </p>
          </div>

          {/* Brand Emerald Ramp */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-sm text-[#003049] uppercase tracking-wider">
                Brand Ramp (PROPOSED — Emerald Energy Identity)
              </h4>
              <span className="text-xs font-mono text-[#8C765C]">brand/10 to brand/100</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2">
              {BRAND_PRIMITIVES.map((color, i) => (
                <button
                  key={i}
                  onClick={() => copyToClipboard(color.hex)}
                  className="p-3 rounded-xl border border-black/10 flex flex-col items-center text-center transition-transform hover:scale-105 cursor-pointer relative group"
                  style={{ backgroundColor: color.hex }}
                  title={`Click to copy ${color.name} (${color.hex})`}
                >
                  <span className={`text-[11px] font-mono font-bold ${color.textDark ? 'text-black' : 'text-white'}`}>
                    {color.name}
                  </span>
                  <span className={`text-[10px] font-mono opacity-80 mt-1 ${color.textDark ? 'text-black' : 'text-white'}`}>
                    {color.hex}
                  </span>
                  {copiedHex === color.hex && (
                    <span className="absolute inset-0 bg-black/80 rounded-xl text-white text-[10px] font-bold flex items-center justify-center">
                      Copied!
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Gray Reference Scale */}
          <div className="space-y-3 pt-4 border-t border-[#EAE2B7]">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-sm text-[#003049] uppercase tracking-wider">
                Gray Scale (Carbon Reference)
              </h4>
              <span className="text-xs font-mono text-[#8C765C]">gray/10 to gray/100</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2">
              {GRAY_PRIMITIVES.map((color, i) => (
                <button
                  key={i}
                  onClick={() => copyToClipboard(color.hex)}
                  className="p-3 rounded-xl border border-black/10 flex flex-col items-center text-center transition-transform hover:scale-105 cursor-pointer relative group"
                  style={{ backgroundColor: color.hex }}
                  title={`Click to copy ${color.name} (${color.hex})`}
                >
                  <span className={`text-[11px] font-mono font-bold ${color.textDark ? 'text-black' : 'text-white'}`}>
                    {color.name}
                  </span>
                  <span className={`text-[10px] font-mono opacity-80 mt-1 ${color.textDark ? 'text-black' : 'text-white'}`}>
                    {color.hex}
                  </span>
                  {copiedHex === color.hex && (
                    <span className="absolute inset-0 bg-black/80 rounded-xl text-white text-[10px] font-bold flex items-center justify-center">
                      Copied!
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Accent & Support Primitives */}
          <div className="space-y-3 pt-4 border-t border-[#EAE2B7]">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-sm text-[#003049] uppercase tracking-wider">
                Accent &amp; Support Primitives + Neutrals
              </h4>
              <span className="text-xs font-mono text-[#8C765C]">Carbon references</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-2">
              {ACCENT_SUPPORT_PRIMITIVES.map((color, i) => (
                <button
                  key={i}
                  onClick={() => copyToClipboard(color.hex)}
                  className="p-3 rounded-xl border border-black/10 flex flex-col items-center text-center transition-transform hover:scale-105 cursor-pointer relative group"
                  style={{ backgroundColor: color.hex }}
                  title={`Click to copy ${color.name} (${color.hex})`}
                >
                  <span className={`text-[11px] font-mono font-bold ${color.textDark ? 'text-black' : 'text-white'}`}>
                    {color.name}
                  </span>
                  <span className={`text-[10px] font-mono opacity-80 mt-1 ${color.textDark ? 'text-black' : 'text-white'}`}>
                    {color.hex}
                  </span>
                  {copiedHex === color.hex && (
                    <span className="absolute inset-0 bg-black/80 rounded-xl text-white text-[10px] font-bold flex items-center justify-center">
                      Copied!
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Sub-Tab 3: Semantic Tokens (Carbon White vs Carbon Dark G100) */}
      {activeGroupTab === 'semantic' && (
        <div className="space-y-6 animate-fadeIn">
          <div>
            <h3 className="font-fraunces font-bold text-2xl text-[#003049] mb-2">
              Semantic Tokens Comparison (Light vs Dark)
            </h3>
            <p className="text-sm text-[#1F3646]">
              Side-by-side mapping between <strong>Light — Carbon White</strong> and <strong>Dark — Carbon G100</strong> collections following IBM Carbon token syntax.
            </p>
          </div>

          <div className="overflow-x-auto border border-[#EAE2B7] rounded-2xl">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#FAF6ED] border-b border-[#EAE2B7] text-xs font-bold uppercase tracking-wider text-[#003049]">
                <tr>
                  <th className="p-3.5">Semantic Token</th>
                  <th className="p-3.5">Category</th>
                  <th className="p-3.5">Light (Carbon White)</th>
                  <th className="p-3.5">Dark (Carbon G100)</th>
                  <th className="p-3.5">Purpose / Usage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EAE2B7] bg-white font-mono text-xs">
                {SEMANTIC_TOKENS.map((tok, idx) => (
                  <tr key={idx} className="hover:bg-[#FAF6ED]/50 transition-colors">
                    <td className="p-3 font-semibold text-[#003049]">{tok.token}</td>
                    <td className="p-3 capitalize text-[#8C765C]">{tok.group}</td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-4 h-4 rounded-md border border-black/20 shrink-0"
                          style={{ backgroundColor: tok.lightHex }}
                        ></span>
                        <span>{tok.lightHex}</span>
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-4 h-4 rounded-md border border-black/20 shrink-0"
                          style={{ backgroundColor: tok.darkHex }}
                        ></span>
                        <span>{tok.darkHex}</span>
                      </div>
                    </td>
                    <td className="p-3 font-sans text-xs text-[#1F3646]">{tok.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Sub-Tab 4: Contrast Audit (WCAG 2.2 AA) */}
      {activeGroupTab === 'contrast' && (
        <div className="space-y-6 animate-fadeIn">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-[#D62828] mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span>WCAG 2.2 AA Contrast Verification</span>
            </div>
            <h3 className="font-fraunces font-bold text-2xl text-[#003049] mb-2">
              Accessibility Audit Matrix
            </h3>
            <p className="text-sm text-[#1F3646]">
              Target: 4.5:1 for body text, 3:1 for UI components. Failures are documented intentionally as design decisions with secondary non-color indicators (icons, labels, dash patterns).
            </p>
          </div>

          <div className="overflow-x-auto border border-[#EAE2B7] rounded-2xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#FAF6ED] border-b border-[#EAE2B7] text-[11px] font-bold uppercase tracking-wider text-[#003049]">
                <tr>
                  <th className="p-3.5">Pair (Foreground on Background)</th>
                  <th className="p-3.5">Use</th>
                  <th className="p-3.5">Target</th>
                  <th className="p-3.5">Light Ratio</th>
                  <th className="p-3.5">Dark Ratio</th>
                  <th className="p-3.5">Notes / Mitigation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EAE2B7] bg-white">
                {CONTRAST_AUDIT.map((item, idx) => (
                  <tr key={idx} className="hover:bg-[#FAF6ED]/40 transition-colors">
                    <td className="p-3 font-mono font-medium text-[#003049]">{item.pair}</td>
                    <td className="p-3 text-[#1F3646]">{item.use}</td>
                    <td className="p-3 font-mono text-[#8C765C]">{item.needs}</td>
                    <td className="p-3">
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md font-mono text-[11px] font-bold ${
                        item.lightPass ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                      }`}>
                        {item.lightPass ? <CheckCircle2 className="w-3 h-3 text-emerald-600" /> : <XCircle className="w-3 h-3 text-rose-600" />}
                        {item.lightRatio} {item.lightPass ? 'Pass' : 'Fail'}
                      </span>
                    </td>
                    <td className="p-3">
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md font-mono text-[11px] font-bold ${
                        item.darkPass ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                      }`}>
                        {item.darkPass ? <CheckCircle2 className="w-3 h-3 text-emerald-600" /> : <XCircle className="w-3 h-3 text-rose-600" />}
                        {item.darkRatio} {item.darkPass ? 'Pass' : 'Fail'}
                      </span>
                    </td>
                    <td className="p-3 text-[11px] text-[#8C765C] max-w-xs">{item.notes || '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Sub-Tab 5: Typography Scale */}
      {activeGroupTab === 'typography' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h3 className="font-fraunces font-bold text-2xl text-[#003049] mb-1">
                Typography Scale: IBM Plex Productive Hierarchy
              </h3>
              <p className="text-sm text-[#1F3646]">
                Product UI and enfiniti dashboards use Carbon productive type styles in IBM Plex Sans (and Mono for telemetry values).
              </p>
            </div>
            <div className="w-full sm:w-72">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#003049] mb-1">
                Test Custom Sample String:
              </label>
              <input
                type="text"
                value={typographySampleText}
                onChange={(e) => setTypographySampleText(e.target.value)}
                className="w-full p-2 rounded-lg border border-[#EAE2B7] text-xs bg-[#FAF6ED]"
              />
            </div>
          </div>

          <div className="overflow-x-auto border border-[#EAE2B7] rounded-2xl">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#FAF6ED] border-b border-[#EAE2B7] text-xs font-bold uppercase tracking-wider text-[#003049]">
                <tr>
                  <th className="p-3.5 w-48">Token</th>
                  <th className="p-3.5 w-56">Spec</th>
                  <th className="p-3.5">Sample Rendering</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EAE2B7] bg-white">
                {TYPOGRAPHY_SCALE.map((typ, idx) => (
                  <tr key={idx} className="hover:bg-[#FAF6ED]/40 transition-colors">
                    <td className="p-3.5 font-mono text-xs font-semibold text-[#003049]">
                      {typ.token}
                    </td>
                    <td className="p-3.5 text-xs text-[#8C765C] font-mono leading-relaxed">
                      {typ.fontFamily} {typ.weight}
                      <br />
                      {typ.size} / {typ.lineHeight} · tr {typ.tracking}
                    </td>
                    <td className="p-3.5 text-[#003049]">
                      <div
                        style={{
                          fontSize: typ.size,
                          lineHeight: typ.lineHeight,
                          fontFamily: `'IBM Plex Sans', -apple-system, sans-serif`,
                          letterSpacing: typ.tracking,
                          fontWeight: typ.weight.includes('Light')
                            ? 300
                            : typ.weight.includes('SemiBold')
                            ? 600
                            : 400,
                        }}
                        className="truncate max-w-xl"
                      >
                        {typographySampleText || typ.sample}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Sub-Tab 6: Spacing & Grid */}
      {activeGroupTab === 'spacing' && (
        <div className="space-y-8 animate-fadeIn">
          <div>
            <h3 className="font-fraunces font-bold text-2xl text-[#003049] mb-2">
              Spacing, Radius &amp; Layout Grid
            </h3>
            <p className="text-sm text-[#1F3646]">
              Spacing adheres strictly to the Carbon 2x scale (2px to 160px). All padding, margin, and gap values in enfiniti are bound to these tokens.
            </p>
          </div>

          {/* Spacing Bars */}
          <div className="bg-[#FAF6ED] border border-[#EAE2B7] rounded-2xl p-6">
            <h4 className="font-bold text-sm text-[#003049] uppercase tracking-wider mb-4">
              Carbon 2x Spacing Scale
            </h4>
            <div className="space-y-2.5">
              {SPACING_TOKENS.map((sp, i) => (
                <div key={i} className="flex items-center gap-4 text-xs font-mono">
                  <span className="w-24 text-[#003049] font-bold">{sp.token}</span>
                  <span className="w-14 text-[#8C765C]">{sp.px}px</span>
                  <div
                    className="h-4 bg-[#0F6F53] rounded-xs"
                    style={{ width: `${Math.min(sp.px * 3, 480)}px` }}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          {/* Radius Tokens */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {RADIUS_TOKENS.map((rad, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white border border-[#EAE2B7] text-center">
                <div
                  className="w-16 h-16 bg-[#FAF6ED] border-2 border-[#0F6F53] mx-auto mb-3"
                  style={{ borderRadius: rad.value === '9999px (pill)' ? '9999px' : rad.value }}
                ></div>
                <div className="font-mono font-bold text-xs text-[#003049]">{rad.token}</div>
                <div className="text-[11px] text-[#8C765C] mt-0.5">{rad.value}</div>
              </div>
            ))}
          </div>

          {/* Grid Breakpoints */}
          <div className="border border-[#EAE2B7] rounded-2xl overflow-hidden">
            <div className="p-3.5 bg-[#FAF6ED] border-b border-[#EAE2B7] text-xs font-bold uppercase tracking-wider text-[#003049]">
              Carbon 2x Layout Grid Breakpoints
            </div>
            <div className="divide-y divide-[#EAE2B7] bg-white text-xs">
              {GRID_BREAKPOINTS.map((bp, i) => (
                <div key={i} className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="font-mono font-bold text-[#003049]">Breakpoint {bp.name}</span>
                  <span className="font-mono text-[#8C765C]">Min width: {bp.minWidth}</span>
                  <span className="font-mono text-[#0F6F53] font-semibold">{bp.columns} Columns</span>
                  <span className="text-[#1F3646]">{bp.use}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Sub-Tab 7: Source Artifacts Gallery (User's 6 Screenshots) */}
      {activeGroupTab === 'artifacts' && (
        <div className="space-y-6 animate-fadeIn">
          <div>
            <h3 className="font-fraunces font-bold text-2xl text-[#003049] mb-1">
              Source Design System Artifacts
            </h3>
            <p className="text-sm text-[#1F3646]">
              High-resolution captures from the PE Solutions Figma design system file. Click any artifact to open in full inspect mode.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DESIGN_SYSTEM_ATTACHMENTS.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setSelectedArtifactIndex(idx)}
                className="bg-[#FAF6ED] border border-[#EAE2B7] rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-[#F77F00] transition-all cursor-pointer group flex flex-col"
              >
                <div className="aspect-video overflow-hidden bg-white relative">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 bg-[#003049] text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-md transition-opacity flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-[#FCBF49]" />
                      <span>Inspect Artifact</span>
                    </span>
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-fraunces font-bold text-base text-[#003049] group-hover:text-[#D62828] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#8C765C] mt-1 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-[#EAE2B7] text-[10px] font-mono text-[#8C765C] flex items-center justify-between">
                    <span>Artifact {idx + 1} of 6</span>
                    <span className="text-[#0F6F53] font-semibold">Click to zoom</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Full Screen Modal */}
          {selectedArtifactIndex !== null && (
            <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-8 animate-fadeIn">
              <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl border border-white/20">
                <div className="p-4 sm:p-5 bg-[#FAF6ED] border-b border-[#EAE2B7] flex items-center justify-between">
                  <div>
                    <h3 className="font-fraunces font-bold text-lg text-[#003049]">
                      {DESIGN_SYSTEM_ATTACHMENTS[selectedArtifactIndex].title}
                    </h3>
                    <p className="text-xs text-[#8C765C]">
                      {DESIGN_SYSTEM_ATTACHMENTS[selectedArtifactIndex].subtitle}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedArtifactIndex(null)}
                    className="p-2 rounded-xl bg-white hover:bg-[#EAE2B7] text-[#003049] cursor-pointer font-bold text-sm"
                  >
                    ✕ Close
                  </button>
                </div>
                <div className="p-4 sm:p-6 overflow-auto flex-1 bg-[#161616]">
                  <img
                    src={DESIGN_SYSTEM_ATTACHMENTS[selectedArtifactIndex].src}
                    alt={DESIGN_SYSTEM_ATTACHMENTS[selectedArtifactIndex].title}
                    className="w-full h-auto object-contain mx-auto rounded-lg shadow-lg"
                  />
                </div>
                <div className="p-3 bg-[#FAF6ED] border-t border-[#EAE2B7] flex items-center justify-between text-xs">
                  <button
                    disabled={selectedArtifactIndex === 0}
                    onClick={() => setSelectedArtifactIndex(selectedArtifactIndex - 1)}
                    className="px-4 py-1.5 rounded-lg bg-white border border-[#EAE2B7] disabled:opacity-40 cursor-pointer"
                  >
                    ← Previous Artifact
                  </button>
                  <span className="font-mono text-[#8C765C]">
                    {selectedArtifactIndex + 1} / {DESIGN_SYSTEM_ATTACHMENTS.length}
                  </span>
                  <button
                    disabled={selectedArtifactIndex === DESIGN_SYSTEM_ATTACHMENTS.length - 1}
                    onClick={() => setSelectedArtifactIndex(selectedArtifactIndex + 1)}
                    className="px-4 py-1.5 rounded-lg bg-white border border-[#EAE2B7] disabled:opacity-40 cursor-pointer"
                  >
                    Next Artifact →
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
};
