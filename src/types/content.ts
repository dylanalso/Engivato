export interface Project {
  title: string;
  desc: string;
  category?: 'Commercial & Retail' | 'Restaurant & Hospitality' | 'Industrial & Warehouse' | 'Healthcare & Medical' | 'Corporate Office' | 'Multi-Family Residential' | string;
  image?: string | null;
  location?: string;
  scope?: string;
  year?: string;
}

export interface Service {
  title: string;
  desc: string;
}

export interface Post {
  title: string;
  content: any;
}
