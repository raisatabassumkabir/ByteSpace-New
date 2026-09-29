export interface Instructor {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio?: string;
  rating?: number;
  totalStudents?: number;
}

export type CourseLevel = 'All Levels' | 'Beginner' | 'Intermediate' | 'Advanced';

export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  level: CourseLevel;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  studentsCount: number;
  duration: string;
  lessonsCount: number;
  instructor: Instructor;
  thumbnail: string;
  badge?: string;
  featured?: boolean;
  tags?: string[];
  updatedAt?: string;
}

export interface ModuleItem {
  id: string;
  number: number;
  title: string;
  description: string;
  duration?: string;
}

export interface CourseReview {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
}

export interface CreatorProfileData {
  id: string;
  name: string;
  badge: string;
  headline: string;
  bio: string;
  avatar: string;
  productsCount: number;
  followersCount: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  courseTaken?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  courseCount: number;
  slug: string;
}
