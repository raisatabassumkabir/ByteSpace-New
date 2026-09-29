import { CreatorProfileData } from '@/types';

export interface CreatorCourse {
  id: string;
  title: string;
  author: string;
  rating: number;
  level: string;
  price: number;
  originalPrice: number;
  thumbnail: string;
  lessons: number;
  duration: string;
  commentsCount: number;
  enrolledStudentsCount: string;
}

export const mockCreatorData: CreatorProfileData = {
  id: 'purepearl-studio',
  name: 'PurePearl Studio',
  badge: 'Creator',
  headline: 'Passionate UI/UX Web designer',
  bio: "Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together.\nDive into my creative portfolio, showcasing a glimpse of my artistic endeavors, from digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
  productsCount: 3,
  followersCount: 12,
};

export const mockCreatorCourses: CreatorCourse[] = [
  {
    id: 'course-c1',
    title: 'Learn Figma from Basic',
    author: 'purepearl studio',
    rating: 4.6,
    level: 'Beginner',
    price: 25,
    originalPrice: 50,
    thumbnail: '/images/wireframe-sketches.png',
    lessons: 17,
    duration: '2 hours 16 mins',
    commentsCount: 59,
    enrolledStudentsCount: '+35k',
  },
  {
    id: 'course-c2',
    title: 'Build Digital Asset',
    author: 'purepearl studio',
    rating: 4.8,
    level: 'Intermediate',
    price: 25,
    originalPrice: 50,
    thumbnail: '/images/icon-design-assets.png',
    lessons: 21,
    duration: '3 hours 10 mins',
    commentsCount: 49,
    enrolledStudentsCount: '+35k',
  },
  {
    id: 'course-c3',
    title: 'The Power of Big Data',
    author: 'purepearl studio',
    rating: 4.8,
    level: 'Beginner',
    price: 25,
    originalPrice: 50,
    thumbnail: '/images/data-analytics-dashboard.png',
    lessons: 18,
    duration: '2 hours 45 mins',
    commentsCount: 32,
    enrolledStudentsCount: '+35k',
  },
  {
    id: 'course-c4',
    title: 'Balancing Productivity and...',
    author: 'purepearl studio',
    rating: 4.6,
    level: 'Beginner',
    price: 25,
    originalPrice: 50,
    thumbnail: '/images/productivity-workstation.png',
    lessons: 14,
    duration: '1 hour 45 mins',
    commentsCount: 24,
    enrolledStudentsCount: '+35k',
  },
  {
    id: 'course-c5',
    title: 'Mastering Money Manage...',
    author: 'purepearl studio',
    rating: 4.5,
    level: 'Beginner',
    price: 25,
    originalPrice: 50,
    thumbnail: '/images/financial-growth-charts.png',
    lessons: 19,
    duration: '2 hours 30 mins',
    commentsCount: 38,
    enrolledStudentsCount: '+35k',
  },
  {
    id: 'course-c6',
    title: 'From Idea to Startup Succ...',
    author: 'purepearl studio',
    rating: 4.9,
    level: 'Beginner',
    price: 25,
    originalPrice: 50,
    thumbnail: '/images/wireframe-sketches.png',
    lessons: 22,
    duration: '3 hours 15 mins',
    commentsCount: 54,
    enrolledStudentsCount: '+35k',
  },
];
