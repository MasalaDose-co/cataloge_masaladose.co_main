import type { ComparisonRow } from '../types';

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    feature: 'Website Architecture',
    category: 'core',
    stage1: true, // Single Page
    stage2: true, // Multi Page
    stage3: true, // Full Platform
    note: 'S1: Single-Page / S2: Multi-Page / S3: Full App Platform'
  },
  {
    feature: 'Responsive UI/UX System',
    category: 'core',
    stage1: true,
    stage2: true,
    stage3: true,
    note: 'Bespoke design across all screen sizes'
  },
  {
    feature: 'Multi-Page Layout',
    category: 'core',
    stage1: false,
    stage2: true,
    stage3: true
  },
  {
    feature: 'Interactive Forms & Lead Capture',
    category: 'core',
    stage1: true, // Basic
    stage2: true,
    stage3: true
  },
  {
    feature: 'Database / Headless CMS',
    category: 'backend',
    stage1: false,
    stage2: true,
    stage3: true
  },
  {
    feature: 'Basic Business Automation',
    category: 'backend',
    stage1: false,
    stage2: true,
    stage3: true
  },
  {
    feature: 'User Authentication & Multi-Role',
    category: 'backend',
    stage1: false,
    stage2: false,
    stage3: true
  },
  {
    feature: 'Custom RESTful / GraphQL APIs',
    category: 'backend',
    stage1: false,
    stage2: false,
    stage3: true
  },
  {
    feature: 'AI Model & Agent Integration',
    category: 'advanced',
    stage1: false,
    stage2: false,
    stage3: true
  },
  {
    feature: 'SaaS Architecture & Subscription Engine',
    category: 'advanced',
    stage1: false,
    stage2: false,
    stage3: true
  },
  {
    feature: 'Custom Dashboards & Analytics',
    category: 'advanced',
    stage1: false,
    stage2: false,
    stage3: true
  },
  {
    feature: 'Advanced Custom Workflow Pipelines',
    category: 'advanced',
    stage1: false,
    stage2: false,
    stage3: true
  }
];
