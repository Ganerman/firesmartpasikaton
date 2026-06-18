// TypeScript types and interfaces

export interface NavLink {
  name: string;
  href: string;
}

export interface Feature {
  icon: string;
  title: string;
  accentColor: 'orange' | 'cyan' | 'red' | 'green';
  description: string;
  stats: Array<{
    label: string;
    value: string;
  }>;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  period?: string;
  popular?: boolean;
  features: string[];
  cta: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface LogEntry {
  id: number;
  timestamp: string;
  source: string;
  message: string;
  type: 'info' | 'warning' | 'critical' | 'success';
}

export type AnimationVariant = 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface SectionHeaderProps {
  badge: string;
  badgeColor: 'orange' | 'cyan' | 'green' | 'red';
  title: string;
  subtitle?: string;
  description?: string;
}
