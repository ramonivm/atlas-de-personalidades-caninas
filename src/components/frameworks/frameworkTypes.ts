import { Framework, FrameworkSection } from '../../types';
import { LucideIcon } from 'lucide-react';

export interface ParsedFrameworkSection {
  rawTitle: string;
  cleanTitle: string;
  description: string;
  signal: string | null;
  index: number;
  descriptor?: string;
  icon?: LucideIcon;
}

export interface FrameworkMetaConfig {
  id: string;
  number: number;
  verb: string;
  conceptTitle: string;
  iconName: string;
  patternDescriptors: Record<number, string>;
}
