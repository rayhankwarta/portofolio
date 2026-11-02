export interface Project {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  year: string;
  thumbnail: string;
  liveUrl?: string;
  repoUrl?: string;
  // Deep-dive detail fields for /projects/[slug]
  subtitle?: string;
  role?: string;
  client?: string;
  duration?: string;
  impactMetrics?: { label: string; value: string }[];
  problemStatement?: string;
  methodology?: string[];
  keyFindings?: string[];
  techDetails?: { category: string; items: string[] }[];
}
