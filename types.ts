import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  id: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  date?: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export type UserRole = 'guest' | 'parent';

export interface StudentStats {
  attendance: number;
  grade: string;
  nextFeeDate: string;
}