import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  icon: string | LucideIcon;
  title: string;
  description: string;
}

export interface Step {
  number: string;
  label: string;
  title: string;
  description: string;
}

export interface Founder {
  name: string;
  role: string;
  bio: string;
}
