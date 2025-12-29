//About.types.ts
export type Stat = {
  label: string;
  value: string;
};

export type ValueItem = {
  title: string;
  description: string;
};

export type Channel = {
  label: string;
  detail: string;
  type?: 'email' | 'phone' | 'chat' | 'helpcenter' | 'other';
};

export type AboutPageProps = {
  companyName: string;
  tagline: string;
  mission: string;
  story: string;
  stats?: Stat[];
  values?: ValueItem[];
  primaryChannels?: Channel[];
  secondaryChannels?: Channel[];
  highlightQuote?: string;
  highlightAuthor?: string;
};