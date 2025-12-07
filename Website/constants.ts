import { VideoReel, Credit, TrainingItem, Skill } from './types';

export const HEADSHOT_IMAGES: string[] = [
  'https://i.ibb.co/5xBtGYDq/IMG-9274.jpg',
  'https://i.ibb.co/xqhm4ktS/IMG-9269.jpg',
  'https://i.ibb.co/G35fZvXZ/IMG-9272.jpg',
];

export const VIDEO_REELS: VideoReel[] = [
  { id: 'oHzc9SkSUhI', title: 'Demo Reel', description: '' },
  { id: 'Cojc1PG8X0k', title: 'The Jar (Short film)', description: 'Role: Eren' },
  { id: 'O0euKcCKSXE', title: 'Dreamtime (Short film)', description: 'Role: Ben' },
  { id: 'OwJWLqYt4BA', title: 'Mates (Short film)', description: 'Role: Paul' },
  { id: '0sDZcHhUZ08', title: 'Monologue Showcase', description: '' },
];

export const FILM_CREDITS: Credit[] = [
    { title: 'Dreamtime (Short film)', role: 'Ben', director: 'Tommaso Maistri', date: 'Nov 2024' },
    { title: 'Cul de sac (Short film)', role: 'Thomas', director: 'Stefan de Vilder', date: 'Sep 2024' },
    { title: 'Mates (Short film)', role: 'Paul', director: 'Carlos Montenegro', date: 'Jun 2024' },
    { title: 'The Jar (Short film)', role: 'Eren', director: 'Gianmarco Della Calce', date: 'Mar 2024' },
];

export const TRAINING: TrainingItem[] = [
    { institution: 'Mulholland Academy (Amsterdam)', course: 'Acting for the camera course', years: '2023, 2024, 2025' },
    { institution: 'CREA (Amsterdam)', course: 'Acting II', years: '2023' },
    { institution: 'CREA (Amsterdam)', course: 'Film: Make a short', years: '2024, 2025' },
    { institution: 'Masterclass.com', course: 'Acting masterclass with Samuel L. Jackson', years: '2024' },
    { institution: 'Masterclass.com', course: 'Acting masterclass with Hellen Mirren', years: '2023' },
    { institution: 'Masterclass.com', course: 'Acting masterclass with Natalie Portman', years: '2022' },
];

export const SKILLS: Skill[] = [
    { category: 'Languages', details: ['Spanish', 'English', 'Dutch', 'French'] },
    { category: 'Acting', details: ['Screen Acting'] },
    { category: 'Union Status', details: ['Non-union'] },
    { category: 'Self Recording', details: ['Panasonic Lumix DMC-GH4 (4k)', 'Davinci Resolve', 'iMovie'] },
    { category: 'Other', details: ['Has a Passport'] },
];