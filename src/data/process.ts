import type { ProcessStep } from '../types';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'DISCOVER',
    tagline: 'Idea & Requirements Mapping',
    description: 'We align deeply with your business strategy, market audience, functional requirements, and growth roadmap.',
    details: [
      'Business model & goals audit',
      'Target user persona mapping',
      'Technical architecture selection',
      'Scope definition & stage recommendation'
    ]
  },
  {
    number: '02',
    title: 'DESIGN',
    tagline: 'UI/UX & System Blueprints',
    description: 'We craft the visual design system, interaction patterns, user journeys, and component blueprints.',
    details: [
      'Wireframing & user flows',
      'High-fidelity editorial UI design',
      'Interactive micro-prototype',
      'Design system specification'
    ]
  },
  {
    number: '03',
    title: 'BUILD',
    tagline: 'Frontend, Backend & AI Engineering',
    description: 'We engineer your digital product using modular, scalable frontend and backend codebases built for speed.',
    details: [
      'Clean component development',
      'Database schema & API build',
      'AI & automation pipeline setup',
      'Performance & security testing'
    ]
  },
  {
    number: '04',
    title: 'LAUNCH',
    tagline: 'Deployment, Automation & Scale',
    description: 'We deploy to production infrastructure, configure analytics, activate automations, and prepare for growth.',
    details: [
      'Zero-downtime production deployment',
      'SEO & analytics initialization',
      'Workflow & alert verification',
      'Handoff & ongoing evolution'
    ]
  }
];
