export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  details?: string[];
}

export interface ProjectItem {
  id: string;
  category: string;
  title: string;
  subtitle?: string;
  type: 'dark' | 'light';
  client: string;
  year: string;
  summary: string;
  deliverables: string[];
}

export interface MetricItem {
  value: string;
  label: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  service: string;
  message: string;
}
