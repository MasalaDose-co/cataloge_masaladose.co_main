export type StageId = '01' | '02' | '03';

export interface StageInfo {
  id: StageId;
  number: string;
  name: string;
  positioning: string;
  tagline: string;
  description: string;
  features: string[];
  idealFor: string[];
  url: string;
  accent: string;
}

export interface CapabilityCategory {
  id: string;
  title: string;
  subtitle: string;
  items: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  details: string[];
}

export interface ComparisonRow {
  feature: string;
  category: 'core' | 'backend' | 'advanced';
  stage1: boolean;
  stage2: boolean;
  stage3: boolean;
  note?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  preferredStage: 'stage-01' | 'stage-02' | 'stage-03' | 'not-sure' | '';
  whatToBuild: string;
  message: string;
}
