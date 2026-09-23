import type { StageInfo } from '../types';
import { STAGE_1_URL, STAGE_2_URL, STAGE_3_URL } from '../config/siteLinks';

export const STAGES_DATA: StageInfo[] = [
  {
    id: '01',
    number: 'STAGE 01',
    name: 'PRESENCE',
    positioning: 'I need to exist online.',
    tagline: 'Essential Digital Foundation',
    description: 'A clean, modern digital presence for businesses and individuals that need to get online without unnecessary complexity.',
    features: [
      'Single-page website architecture',
      'Responsive layout across all screens',
      'Essential business & contact information',
      'High-converting CTA section',
      'Subtle micro-animations & transitions',
      'Basic interactive UI components',
      'SEO fundamentals & fast load times',
      'Minimal technical overhead'
    ],
    idealFor: ['Startups', 'Freelancers', 'Small Businesses', 'Personal Brands'],
    url: STAGE_1_URL,
    accent: '#f97316'
  },
  {
    id: '02',
    number: 'STAGE 02',
    name: 'GROWTH',
    positioning: 'I need my website to work for my business.',
    tagline: 'Interactive Business Platform',
    description: 'A complete digital business website designed to capture leads, process data, manage content, and automate routine business tasks.',
    features: [
      'Multi-page / multi-section architecture',
      'Custom bespoke UI/UX design system',
      'Dynamic interactive components & forms',
      'Database / CMS content integration',
      'Basic workflow & email automation',
      'Analytics & performance-ready structure',
      'Advanced motion & section transitions',
      'Integrated business functionality'
    ],
    idealFor: ['Growing Businesses', 'Agencies', 'Established Brands', 'Organizations'],
    url: STAGE_2_URL,
    accent: '#fb923c'
  },
  {
    id: '03',
    number: 'STAGE 03',
    name: 'SCALE',
    positioning: 'I need a digital system built around my business.',
    tagline: 'Full Digital System & SaaS Architecture',
    description: 'A comprehensive full-stack digital platform engineered for high-performance scale, custom APIs, AI integration, and automated operations.',
    features: [
      'Full-stack architecture & custom backend',
      'Secure multi-role authentication',
      'Relational / NoSQL database modeling',
      'Custom RESTful & GraphQL API endpoints',
      'AI model & LLM workflow integration',
      'SaaS multi-tenant infrastructure',
      'Interactive executive & admin dashboards',
      'Advanced automated business pipelines'
    ],
    idealFor: ['Scaleups & Tech Startups', 'SaaS Companies', 'Enterprises', 'Digital Platforms'],
    url: STAGE_3_URL,
    accent: '#ff6b00'
  }
];
