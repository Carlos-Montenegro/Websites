
export enum Page {
  Home = 'Home',
  ActingClips = 'ActingClips',
  Gallery = 'Gallery',
  About = 'About',
  Resume = 'Resume',
  Contact = 'Contact',
}

export interface VideoReel {
  id: string;
  title: string;
  description: string;
}

export interface Credit {
  title: string;
  role: string;
  director: string;
  date: string;
}

export interface TrainingItem {
  institution: string;
  course: string;
  years: string;
}

export interface Skill {
  category: string;
  details: string[];
}