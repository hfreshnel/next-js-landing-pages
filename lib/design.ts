export const T = {
  // 5 base colors
  dark:   '#0D0C0A',
  accent: '#C4935A',
  teal:   '#51A3A3',
  light:  '#FBFEFB',
  mid:    '#AEA4BF',
  // Derived (opacity of base colors — not new hues)
  border:   'rgba(174,164,191,0.12)',
  overlay:  'rgba(13,12,10,0.88)',
  heroGlow: '#1b1710',

  // Font families
  serif: "'Cormorant', serif",
  sans:  "'Jost', sans-serif",

  // Font sizes — 3 body sizes + display sizes
  fsSm:      '12px',
  fsBase:    '15px',
  fsLg:      '17px',
  fsLogo:    '24px',
  fsCard:    'clamp(26px, 3vw, 34px)',
  fsModal:   '44px',
  fsSection: 'clamp(40px, 5vw, 60px)',
  fsDisplay: 'clamp(52px, 9vw, 104px)',

  // Spacing — 4 sizes
  spXs: '8px',
  spSm: '16px',
  spMd: '32px',
  spLg: '80px',

  // Layout
  pageX:       '56px',
  maxW:        '1000px',
  maxModal:    '600px',
  maxFaq:      '620px',
  maxHero:     '420px',
  maxForm:     '560px',
  maxConf:     '480px',
  minTextarea: '120px',

  // Breakpoints
  bp768: '768px',
  bp480: '480px',
} as const
