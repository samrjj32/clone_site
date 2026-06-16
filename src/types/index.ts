export interface NavLink {
  label: string;
  href: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  variant: "blue" | "white";
}

export interface UndetectableFeature {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export interface ToolLogo {
  name: string;
  src: string;
}

export interface Stat {
  value: string;
  label: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FooterColumn {
  heading: string;
  links: Array<{ label: string; href: string; badge?: string }>;
}
