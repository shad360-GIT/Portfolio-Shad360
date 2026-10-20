export interface ColorToken {
  name: string;
  hex: string;
  textDark?: boolean;
}

export interface SemanticTokenRow {
  group: 'background' | 'layer' | 'field' | 'border' | 'text' | 'icon' | 'interactive';
  token: string;
  lightHex: string;
  darkHex: string;
  description?: string;
}

export interface ContrastAuditRow {
  pair: string;
  use: string;
  needs: string;
  lightRatio: string;
  lightPass: boolean;
  darkRatio: string;
  darkPass: boolean;
  notes?: string;
}

export interface TypographyTokenRow {
  token: string;
  fontFamily: string;
  weight: string;
  size: string;
  lineHeight: string;
  tracking: string;
  sample: string;
}

export interface SpacingTokenRow {
  token: string;
  px: number;
}

export interface RadiusTokenRow {
  token: string;
  value: string;
}

export const DESIGN_SYSTEM_STATUS = [
  {
    tag: 'VERIFIED',
    bg: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    desc: 'Taken from the live pe.solutions pages (product taxonomy, enfiniti feature list, navigation).',
  },
  {
    tag: 'CARBON REFERENCE',
    bg: 'bg-blue-100 text-blue-900 border-blue-300',
    desc: 'Standard Carbon values or naming; confirm against @carbon/* release in use.',
  },
  {
    tag: 'PROPOSED',
    bg: 'bg-amber-100 text-amber-900 border-amber-300',
    desc: 'PE-specific recommendation (brand ramp, chart tokens, radii). Not yet validated with users or brand owners.',
  },
];

export const TOKEN_TIERS = [
  {
    tier: 'TIER 1 · Primitives',
    count: '35 color variables',
    details: 'Raw palette: gray, brand, blue, red, green, yellow, orange, cyan, purple. Scope: hidden (not offered in pickers).',
    collection: 'Primitives',
  },
  {
    tier: 'TIER 2 · Semantic',
    count: '38 tokens × Light + Dark',
    details: 'Carbon token names (layer-01, text-primary, border-subtle-01, button-primary...). Alias primitives. Code syntax: var(--cds-<name>).',
    collection: 'Color Light · Color Dark',
  },
  {
    tier: 'TIER 2 · Layout',
    count: '13 spacing + 5 radius',
    details: 'Carbon 2x spacing scale (spacing-01...13: 2–160px). Radius tokens PROPOSED.',
    collection: 'Spacing · Radius',
  },
  {
    tier: 'TIER 3 · Type styles',
    count: '15 text styles',
    details: 'Carbon productive type tokens in IBM Plex Sans / Mono. Structured for enterprise dashboards.',
    collection: 'Carbon/*',
  },
];

export const NAMING_RULES = [
  {
    rule: 'Primitives are never applied directly to components.',
    guideline: 'Use semantic tokens so theme and brand swaps are a one-place change.',
  },
  {
    rule: 'Semantic token = Carbon name.',
    guideline: 'Figma: layer/layer-01 · CSS: var(--cds-layer-01). Group prefix is Figma-only.',
  },
  {
    rule: 'Light and Dark are separate collections.',
    guideline: 'Figma Starter limits collections to 1 mode. On a paid plan, merge into one collection with two modes without renaming tokens.',
  },
  {
    rule: 'Layer tokens stack logically.',
    guideline: 'Page = background; cards = layer-01; nested content = layer-02; third level = layer-03.',
  },
  {
    rule: 'Color is never the only signal.',
    guideline: 'Status and chart series pair color with an icon, label or pattern (see contrast audit failures).',
  },
];

export const GRAY_PRIMITIVES: ColorToken[] = [
  { name: 'gray/10', hex: '#F4F4F4', textDark: true },
  { name: 'gray/20', hex: '#E0E0E0', textDark: true },
  { name: 'gray/30', hex: '#C6C6C6', textDark: true },
  { name: 'gray/40', hex: '#A8A8A8', textDark: true },
  { name: 'gray/50', hex: '#8D8D8D', textDark: false },
  { name: 'gray/60', hex: '#6F6F6F', textDark: false },
  { name: 'gray/70', hex: '#525252', textDark: false },
  { name: 'gray/80', hex: '#393939', textDark: false },
  { name: 'gray/90', hex: '#262626', textDark: false },
  { name: 'gray/100', hex: '#161616', textDark: false },
];

export const BRAND_PRIMITIVES: ColorToken[] = [
  { name: 'brand/10', hex: '#E9F7F2', textDark: true },
  { name: 'brand/20', hex: '#C4EADB', textDark: true },
  { name: 'brand/30', hex: '#94D8BF', textDark: true },
  { name: 'brand/40', hex: '#5CC0A0', textDark: true },
  { name: 'brand/50', hex: '#2FA582', textDark: false },
  { name: 'brand/60', hex: '#1A8A69', textDark: false },
  { name: 'brand/70', hex: '#0F6F53', textDark: false },
  { name: 'brand/80', hex: '#0A5540', textDark: false },
  { name: 'brand/90', hex: '#063D2D', textDark: false },
  { name: 'brand/100', hex: '#032519', textDark: false },
];

export const ACCENT_SUPPORT_PRIMITIVES: ColorToken[] = [
  { name: 'white', hex: '#FFFFFF', textDark: true },
  { name: 'black', hex: '#000000', textDark: false },
  { name: 'blue/50', hex: '#4589FF', textDark: false },
  { name: 'blue/60', hex: '#0F62FE', textDark: false },
  { name: 'blue/70', hex: '#0043CE', textDark: false },
  { name: 'red/40', hex: '#FA4D56', textDark: false },
  { name: 'red/60', hex: '#DA1E28', textDark: false },
  { name: 'green/40', hex: '#42BE65', textDark: true },
  { name: 'green/50', hex: '#24A148', textDark: false },
  { name: 'yellow/30', hex: '#F1C21B', textDark: true },
  { name: 'orange/40', hex: '#FF832B', textDark: true },
  { name: 'cyan/40', hex: '#33B1FF', textDark: true },
  { name: 'cyan/50', hex: '#1192E8', textDark: false },
  { name: 'purple/50', hex: '#A56EFF', textDark: false },
  { name: 'purple/60', hex: '#8A3FFC', textDark: false },
];

export const SEMANTIC_TOKENS: SemanticTokenRow[] = [
  { group: 'background', token: 'background/background', lightHex: '#FFFFFF', darkHex: '#161616', description: 'Base page canvas background' },
  { group: 'layer', token: 'layer/layer-01', lightHex: '#F4F4F4', darkHex: '#262626', description: 'Container cards and elevated surfaces' },
  { group: 'layer', token: 'layer/layer-02', lightHex: '#FFFFFF', darkHex: '#393939', description: 'Nested cards inside layer-01' },
  { group: 'layer', token: 'layer/layer-03', lightHex: '#F4F4F4', darkHex: '#525252', description: 'Deeply nested tables or flyouts' },
  { group: 'layer', token: 'layer/layer-accent-01', lightHex: '#E0E0E0', darkHex: '#393939', description: 'Accent layer dividers and badges' },
  { group: 'field', token: 'field/field-01', lightHex: '#F4F4F4', darkHex: '#262626', description: 'Input fields placed on page background' },
  { group: 'field', token: 'field/field-02', lightHex: '#FFFFFF', darkHex: '#393939', description: 'Input fields placed inside layer-01 card' },
  { group: 'border', token: 'border/border-subtle-01', lightHex: '#C6C6C6', darkHex: '#393939', description: 'Subtle separators and dividers' },
  { group: 'border', token: 'border/border-strong-01', lightHex: '#8D8D8D', darkHex: '#6F6F6F', description: 'Form input outline and tab borders' },
  { group: 'border', token: 'border/border-interactive', lightHex: '#0F6F53', darkHex: '#5CC0A0', description: 'Interactive active border' },
  { group: 'text', token: 'text/text-primary', lightHex: '#161616', darkHex: '#F4F4F4', description: 'Main headlines and high-priority body text' },
  { group: 'text', token: 'text/text-secondary', lightHex: '#525252', darkHex: '#C6C6C6', description: 'Subheaders, table headers, metadata' },
  { group: 'text', token: 'text/text-placeholder', lightHex: '#A8A8A8', darkHex: '#6F6F6F', description: 'Form placeholder text' },
  { group: 'text', token: 'text/text-helper', lightHex: '#6F6F6F', darkHex: '#A8A8A8', description: 'Contextual field helper text' },
  { group: 'text', token: 'text/text-on-color', lightHex: '#FFFFFF', darkHex: '#FFFFFF', description: 'Text overlaid on solid dark/color buttons' },
  { group: 'text', token: 'text/text-on-brand', lightHex: '#FFFFFF', darkHex: '#161616', description: 'Text on primary brand button' },
  { group: 'text', token: 'text/text-error', lightHex: '#DA1E28', darkHex: '#FA4D56', description: 'Validation errors and critical alerts' },
  { group: 'text', token: 'text/link-primary', lightHex: '#0F6F53', darkHex: '#5CC0A0', description: 'Interactive links and inline anchors' },
  { group: 'icon', token: 'icon/icon-primary', lightHex: '#161616', darkHex: '#F4F4F4', description: 'Primary action and navigational icons' },
  { group: 'icon', token: 'icon/icon-secondary', lightHex: '#525252', darkHex: '#C6C6C6', description: 'Secondary status indicators' },
  { group: 'icon', token: 'icon/icon-on-color', lightHex: '#FFFFFF', darkHex: '#FFFFFF', description: 'Icons inside colored badges' },
  { group: 'interactive', token: 'interactive/interactive', lightHex: '#0F6F53', darkHex: '#5CC0A0', description: 'Primary interactive button/toggle state' },
  { group: 'interactive', token: 'interactive/focus', lightHex: '#0F62FE', darkHex: '#FFFFFF', description: 'WCAG keyboard focus ring outline' },
];

export const CONTRAST_AUDIT: ContrastAuditRow[] = [
  { pair: 'text/text-primary on background/background', use: 'Body text', needs: '4.5:1', lightRatio: '18.10:1', lightPass: true, darkRatio: '16.45:1', darkPass: true },
  { pair: 'text/text-secondary on background/background', use: 'Secondary text', needs: '4.5:1', lightRatio: '7.81:1', lightPass: true, darkRatio: '10.59:1', darkPass: true },
  { pair: 'text/text-helper on background/background', use: 'Helper text', needs: '4.5:1', lightRatio: '5.02:1', lightPass: true, darkRatio: '7.61:1', darkPass: true },
  { pair: 'text/text-placeholder on background/background', use: 'Placeholder (never a label substitute)', needs: '4.5:1', lightRatio: '2.38:1', lightPass: false, darkRatio: '3.60:1', darkPass: false, notes: 'Design decision: Placeholders are de-emphasized; never use as label substitute.' },
  { pair: 'text/link-primary on background/background', use: 'Links', needs: '4.5:1', lightRatio: '6.14:1', lightPass: true, darkRatio: '8.19:1', darkPass: true },
  { pair: 'text/text-error on background/background', use: 'Error text', needs: '4.5:1', lightRatio: '5.00:1', lightPass: true, darkRatio: '5.40:1', darkPass: true },
  { pair: 'text/text-on-brand on button/button-primary', use: 'Primary button label', needs: '4.5:1', lightRatio: '6.14:1', lightPass: true, darkRatio: '8.19:1', darkPass: true },
  { pair: 'text/text-on-color on button/button-secondary', use: 'Secondary button label', needs: '4.5:1', lightRatio: '11.55:1', lightPass: true, darkRatio: '5.02:1', darkPass: true },
  { pair: 'text/text-on-color on button/button-danger', use: 'Danger button label', needs: '4.5:1', lightRatio: '5.00:1', lightPass: true, darkRatio: '5.00:1', darkPass: true },
  { pair: 'border/border-strong-01 on background/background', use: 'Input border', needs: '3:1', lightRatio: '3.32:1', lightPass: true, darkRatio: '3.60:1', darkPass: true },
  { pair: 'interactive/focus on background/background', use: 'Focus ring', needs: '3:1', lightRatio: '5.00:1', lightPass: true, darkRatio: '18.10:1', darkPass: true },
  { pair: 'support/support-success on background/background', use: 'Success status mark', needs: '3:1', lightRatio: '3.35:1', lightPass: true, darkRatio: '7.57:1', darkPass: true },
  { pair: 'support/support-error on background/background', use: 'Error status mark', needs: '3:1', lightRatio: '5.00:1', lightPass: true, darkRatio: '5.40:1', darkPass: true },
  { pair: 'support/support-warning on background/background', use: 'Warning status mark', needs: '3:1', lightRatio: '1.68:1', lightPass: false, darkRatio: '10.75:1', darkPass: true, notes: 'Warning mark pairs color with an icon and label to prevent color-only signaling.' },
  { pair: 'chart/chart-electricity on background/background', use: 'Chart: electricity', needs: '3:1', lightRatio: '5.00:1', lightPass: true, darkRatio: '5.41:1', darkPass: true },
  { pair: 'chart/chart-gas on background/background', use: 'Chart: gas', needs: '3:1', lightRatio: '2.46:1', lightPass: false, darkRatio: '7.35:1', darkPass: true, notes: 'Paired with distinctive dashed stroke pattern and value tooltips in light mode.' },
  { pair: 'chart/chart-water on background/background', use: 'Chart: water', needs: '3:1', lightRatio: '3.33:1', lightPass: true, darkRatio: '7.65:1', darkPass: true },
  { pair: 'chart/chart-evc on background/background', use: 'Chart: EVC', needs: '3:1', lightRatio: '4.30:1', lightPass: true, darkRatio: '8.19:1', darkPass: true },
  { pair: 'chart/chart-payments on background/background', use: 'Chart: payments', needs: '3:1', lightRatio: '5.00:1', lightPass: true, darkRatio: '5.41:1', darkPass: true },
];

export const TYPOGRAPHY_SCALE: TypographyTokenRow[] = [
  { token: 'Carbon/heading-07', fontFamily: 'IBM Plex Sans', weight: 'Light 300', size: '54px', lineHeight: '64px', tracking: '0px', sample: 'Energy intelligence' },
  { token: 'Carbon/heading-06', fontFamily: 'IBM Plex Sans', weight: 'Light 300', size: '42px', lineHeight: '50px', tracking: '0px', sample: 'Energy intelligence' },
  { token: 'Carbon/heading-05', fontFamily: 'IBM Plex Sans', weight: 'Regular 400', size: '32px', lineHeight: '40px', tracking: '0px', sample: 'Real-time analytics & consumption' },
  { token: 'Carbon/heading-04', fontFamily: 'IBM Plex Sans', weight: 'Regular 400', size: '28px', lineHeight: '36px', tracking: '0px', sample: 'Bespoke personalised dashboards' },
  { token: 'Carbon/heading-03', fontFamily: 'IBM Plex Sans', weight: 'Regular 400', size: '20px', lineHeight: '28px', tracking: '0px', sample: 'Consumption overview' },
  { token: 'Carbon/heading-02', fontFamily: 'IBM Plex Sans', weight: 'SemiBold 600', size: '16px', lineHeight: '22px', tracking: '0px', sample: 'Electricity · all sites' },
  { token: 'Carbon/heading-01', fontFamily: 'IBM Plex Sans', weight: 'SemiBold 600', size: '14px', lineHeight: '18px', tracking: '0.16px', sample: 'Electricity · all sites' },
  { token: 'Carbon/body-02', fontFamily: 'IBM Plex Sans', weight: 'Regular 400', size: '16px', lineHeight: '24px', tracking: '0px', sample: 'View live resources and granular business intelligence across utilities and services.' },
];

export const SPACING_TOKENS: SpacingTokenRow[] = [
  { token: 'spacing-01', px: 2 },
  { token: 'spacing-02', px: 4 },
  { token: 'spacing-03', px: 8 },
  { token: 'spacing-04', px: 12 },
  { token: 'spacing-05', px: 16 },
  { token: 'spacing-06', px: 24 },
  { token: 'spacing-07', px: 32 },
  { token: 'spacing-08', px: 40 },
  { token: 'spacing-09', px: 48 },
  { token: 'spacing-10', px: 64 },
  { token: 'spacing-11', px: 80 },
  { token: 'spacing-12', px: 96 },
  { token: 'spacing-13', px: 160 },
];

export const RADIUS_TOKENS: RadiusTokenRow[] = [
  { token: 'radius-none', value: '0px' },
  { token: 'radius-sm', value: '2px' },
  { token: 'radius-md', value: '4px' },
  { token: 'radius-lg', value: '8px' },
  { token: 'radius-full', value: '9999px (pill)' },
];

export const GRID_BREAKPOINTS = [
  { name: 'sm', minWidth: '320px', columns: 4, use: 'Mobile (customer app)' },
  { name: 'md', minWidth: '672px', columns: 8, use: 'Tablet' },
  { name: 'lg', minWidth: '1056px', columns: 16, use: 'Desktop enfiniti dashboard' },
  { name: 'xl', minWidth: '1312px', columns: 16, use: 'Wide control room displays' },
  { name: 'max', minWidth: '1584px', columns: 16, use: 'Ultra-wide monitoring consoles' },
];

export const DESIGN_SYSTEM_ATTACHMENTS = [
  {
    id: 'tokens-overview',
    title: 'Design Tokens & Variables Architecture',
    subtitle: 'PE Solutions foundations for enfiniti dashboards and web presence',
    src: '/assets/aistudio/ds1_e0cfd784.png',
  },
  {
    id: 'color-primitives',
    title: 'Color System: Primitives & Ramps',
    subtitle: 'Gray scale, Brand emerald ramp, and Carbon support primitives',
    src: '/assets/aistudio/ScreenShot_Tool_-20261020085331_737a68d7.png',
  },
  {
    id: 'semantic-tokens',
    title: 'Semantic Tokens: Carbon White vs Dark G100',
    subtitle: 'Dual-theme surface, layer, border, text, and interactive mappings',
    src: '/assets/aistudio/ScreenShot_Tool_-20261020085413_92f6dce3.png',
  },
  {
    id: 'contrast-audit',
    title: 'WCAG 2.2 AA Contrast Audit Matrix',
    subtitle: 'Contrast verification and color-independence design decisions',
    src: '/assets/aistudio/ScreenShot_Tool_-20261020085542_9dc6187c.png',
  },
  {
    id: 'typography-scale',
    title: 'Typography Scale: IBM Plex Productive Hierarchy',
    subtitle: 'Specimen from heading-07 (54px) to body-02 (16px)',
    src: '/assets/aistudio/ScreenShot_Tool_-20261020085631_1f4ff0f8.png',
  },
  {
    id: 'spacing-radius-grid',
    title: 'Spacing, Radius & Layout Grid',
    subtitle: 'Carbon 2x scale (2px-160px), 5 radius tokens, and responsive breakpoints',
    src: '/assets/aistudio/ScreenShot_Tool_-20261020085714_07f35717.png',
  },
];
