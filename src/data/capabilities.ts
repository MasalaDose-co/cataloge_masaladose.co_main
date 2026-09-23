import type { CapabilityCategory } from '../types';

export const CAPABILITIES_DATA: CapabilityCategory[] = [
  {
    id: 'web',
    title: 'WEB',
    subtitle: 'High-performance web presence & custom editorial interfaces',
    items: [
      'Websites',
      'Landing Pages',
      'Portfolios',
      'E-commerce Systems',
      'Business Platforms'
    ]
  },
  {
    id: 'product',
    title: 'PRODUCT',
    subtitle: 'Scalable web applications and custom software products',
    items: [
      'SaaS Architectures',
      'Admin Dashboards',
      'Web Applications',
      'Customer Portals',
      'Digital Platforms'
    ]
  },
  {
    id: 'ai',
    title: 'AI',
    subtitle: 'Next-generation AI features and intelligent agent integration',
    items: [
      'AI-Powered Websites',
      'Custom AI Assistants',
      'LLM & API Integrations',
      'AI Business Automation',
      'Intelligent Workflows'
    ]
  },
  {
    id: 'automation',
    title: 'AUTOMATION',
    subtitle: 'Streamlined backend operations and custom data pipelines',
    items: [
      'Workflow Automation',
      'API Integrations',
      'Business Operations',
      'Data Pipelines',
      'Custom Internal Tools'
    ]
  },
  {
    id: 'design',
    title: 'DESIGN',
    subtitle: 'Bespoke UI/UX design systems built for clarity and engagement',
    items: [
      'UI/UX Product Design',
      'Design Systems',
      'Interactive Prototypes',
      'Product Architecture',
      'Brand Digital Experiences'
    ]
  }
];

export const WHAT_WE_DO_ITEMS = [
  { title: 'WEB DEVELOPMENT', desc: 'Fast, accessible, and responsive web foundations built with modern frameworks.' },
  { title: 'FULL STACK', desc: 'End-to-end frontend and robust backend systems tailored to your business logic.' },
  { title: 'AI WEB', desc: 'Embedding natural language interfaces, smart search, and generative AI features into the web.' },
  { title: 'SAAS', desc: 'Multi-tenant cloud platform development from subscriber portals to metered APIs.' },
  { title: 'AUTOMATION', desc: 'Connecting databases, third-party APIs, and internal tools to replace manual work.' },
  { title: 'UI / UX', desc: 'Clean, modern typography-first design systems built for intuitive customer workflows.' },
  { title: 'DIGITAL SYSTEMS', desc: 'Unifying websites, platforms, data stores, and automations into a single engine.' }
];
