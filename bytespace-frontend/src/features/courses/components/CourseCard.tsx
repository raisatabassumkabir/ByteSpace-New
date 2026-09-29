import React from 'react';
import { Link } from 'react-router-dom';
import { Star, BarChart2 } from 'lucide-react';
import { Course } from '@/types';

interface CourseCardProps {
  course: Course;
  className?: string;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, className = '' }) => {
  return (
    <div
      className={`group flex flex-col bg-white rounded-3xl p-3.5 sm:p-4 border border-surface-200/90 shadow-sm hover:shadow-card-hover hover:border-brand-200 transition-all duration-300 ${className}`}
    >
      {/* Thumbnail Container with 3 Frosted Glass Pills */}
      <Link
        to="/course-details"
        className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-surface-100 block mb-3.5"
      >
        <img
          src={course.thumbnail}
          alt={course.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

        {/* 3 Translucent Frosted Glass Pills matching Figma Reference */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1 pointer-events-none">
          <span className="bg-white/40 backdrop-blur-md text-surface-900 font-bold text-[10px] px-2 py-0.5 rounded-full shadow-sm">
            {course.lessonsCount} Lessons
          </span>
          <span className="bg-white/40 backdrop-blur-md text-surface-900 font-bold text-[10px] px-2 py-0.5 rounded-full shadow-sm">
            {course.duration}
          </span>
          <span className="bg-white/40 backdrop-blur-md text-surface-900 font-bold text-[10px] px-2 py-0.5 rounded-full shadow-sm">
            59 Comments
          </span>
        </div>
      </Link>

      {/* Content Container */}
      <div className="flex flex-col flex-1 space-y-2.5">
        {/* Title & Rating */}
        <div className="flex items-start justify-between gap-2">
          <Link
            to="/course-details"
            className="font-display font-bold text-sm sm:text-base text-surface-900 group-hover:text-brand-600 transition-colors line-clamp-1 flex-1"
          >
            {course.title}
          </Link>
          <div className="flex items-center gap-1 text-xs font-bold text-surface-900 shrink-0">
            <span>{course.rating.toFixed(1)}</span>
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          </div>
        </div>

        {/* Author Line */}
        <p className="text-xs text-surface-400 -mt-1">
          by{' '}
          <Link
            to="/creator"
            className="font-semibold text-brand-600 hover:underline transition-colors"
          >
            {course.instructor.name}
          </Link>
        </p>

        {/* Level Badge & Overlapping Avatar Stack */}
        <div className="flex items-center justify-between pt-1">
          {/* Level Pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-surface-200 bg-surface-50 text-xs font-medium text-surface-700">
            <BarChart2 className="w-3 h-3 text-surface-400" />
            <span>{course.level}</span>
          </div>

          {/* Overlapping Avatar Stack with Neon 26+ Badge */}
          <div className="flex items-center">
            <div className="flex -space-x-1.5 overflow-hidden">
              <img
                className="inline-block h-5 w-5 rounded-full ring-2 ring-white object-cover"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
                alt="Student"
              />
              <img
                className="inline-block h-5 w-5 rounded-full ring-2 ring-white object-cover"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"
                alt="Student"
              />
              <img
                className="inline-block h-5 w-5 rounded-full ring-2 ring-white object-cover"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80"
                alt="Student"
              />
              <img
                className="inline-block h-5 w-5 rounded-full ring-2 ring-white object-cover"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80"
                alt="Student"
              />
            </div>
            <span className="ml-1 bg-neon text-surface-900 text-[9px] font-black px-1.5 py-0.5 rounded-full">
              26+
            </span>
          </div>
        </div>

        {/* Price Line */}
        <div className="pt-2 border-t border-surface-100 flex items-baseline gap-1 mt-auto">
          <span className="text-xl font-display font-black text-brand-600">
            ${course.price}
          </span>
          <span className="text-xs text-surface-400 font-normal">
            /lifetime
          </span>
        </div>
      </div>
    </div>
  );
};
