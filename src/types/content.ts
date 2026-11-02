export interface Project {
  enabled?: boolean;
  title: string;
  desc: string;
  category?:
    | 'Commercial & Retail'
    | 'Restaurant & Hospitality'
    | 'Industrial & Warehouse'
    | 'Healthcare & Medical'
    | 'Corporate Office'
    | 'Multi-Family Residential'
    | string;
  image?: string | null;
  location?: string;
  scope?: string;
  year?: string;
}

export interface Service {
  enabled?: boolean;
  title: string;
  badge?: string;
  tagline?: string;
  desc: string;
  anchor?: string;
  deliverables?: string[];
  order?: number;
}
