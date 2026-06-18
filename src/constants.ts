// Color configuration constants
export const COLORS = {
  orange: {
    accent: '#ff6b35',
    glow: '#ff8c00',
  },
  cyan: {
    accent: '#00d4ff',
    glow: '#00b8e6',
  },
  green: {
    safe: '#00ff88',
    glow: '#00e67a',
  },
  red: {
    alert: '#ff3d3d',
  },
  background: {
    primary: '#0b0f19',
    surface: '#121827',
    light: '#1a2235',
  },
  text: {
    primary: '#ffffff',
    secondary: '#94a3b8',
    muted: '#64748b',
  },
};

// Navigation links
export const NAV_LINKS = [
  { name: 'Features', href: '#features' },
  { name: 'How It Works', href: '#dataflow' },
  { name: 'Tech Stack', href: '#techstack' },
  { name: 'Dashboard', href: '#dashboard' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
];

// Pricing plans
export const PRICING_PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small residential properties',
    price: 'PHP 5,999',
    period: '/month',
    popular: false,
    features: [
      '1 IoT Device',
      'Real-time SMS alerts',
      'Email notifications',
      'Basic dashboard',
      'Email support',
      '3 months data history',
    ],
    cta: 'Start Free Trial',
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Ideal for growing businesses',
    price: 'PHP 12,999',
    period: '/month',
    popular: true,
    features: [
      'Up to 5 IoT Devices',
      'WhatsApp Voice + SMS alerts',
      'GPS coordinates tracking',
      'Advanced analytics',
      'Priority support',
      '1 year data history',
      'API access',
      'Team dashboard',
    ],
    cta: 'Get Started',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For large organizations',
    price: 'Custom',
    period: '',
    popular: false,
    features: [
      'Unlimited IoT Devices',
      'Custom alert routing',
      'Integration APIs',
      'Dedicated account manager',
      '24/7 phone support',
      'Unlimited data history',
      'Custom SLAs',
      'On-premise options',
    ],
    cta: 'Contact Sales',
  },
];

// Site metadata
export const SITE_META = {
  title: 'FireSmart - IoT Fire Safety Solutions',
  description: 'Advanced IoT fire safety solutions with real-time smoke detection and instant emergency alerts.',
  keywords: 'fire safety, IoT, smoke detector, emergency alerts, home protection',
  author: 'FireSmart IoT Solutions',
  ogImage: '/og-image.png',
  url: 'https://firesmart.io',
};

// Feature items
export const FEATURES = [
  {
    icon: 'Eye',
    title: 'SENSE',
    accentColor: 'orange',
    description: 'Advanced smoke and heat sensors monitor your environment 24/7.',
    stats: [
      { label: 'Detection Speed', value: '<2s' },
      { label: 'Accuracy Rate', value: '99.9%' },
    ],
  },
  {
    icon: 'Cloud',
    title: 'SYNC',
    accentColor: 'cyan',
    description: 'Instantaneous cloud logging via WebSockets for real-time data.',
    stats: [
      { label: 'Sync Latency', value: '<100ms' },
      { label: 'Data Retention', value: 'Forever' },
    ],
  },
  {
    icon: 'BellRing',
    title: 'ALERT',
    accentColor: 'red',
    description: 'Automated broadcast system triggers instant notifications.',
    stats: [
      { label: 'Alert Speed', value: '<5s' },
      { label: 'Response Rate', value: '100%' },
    ],
  },
];
