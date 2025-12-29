export interface StatItem {
  label: string;
  value: string;
}

export interface ValueItem {
  title: string;
  description: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface AboutPageProps {
  instituteName?: string;
  heroTagline?: string;
  heroSubtext?: string;
  stats?: StatItem[];
  values?: ValueItem[];
  timeline?: TimelineItem[];
  showCallToAction?: boolean;
  primaryActionLabel?: string;
  onPrimaryActionClick?: () => void;
}