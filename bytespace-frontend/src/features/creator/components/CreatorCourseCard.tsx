import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { CreatorCourse } from '../data/mockCreator';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface CreatorCourseCardProps {
  course: CreatorCourse;
}

export const CreatorCourseCard: React.FC<CreatorCourseCardProps> = ({ course }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-surface-200/80 shadow-card hover:shadow-card-hover hover:border-brand-200 transition-all duration-300 flex flex-col">
      {/* Thumbnail with 3 Glass Pills at the bottom matching reference */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-100">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Dark subtle gradient behind pills */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

        {/* 3 Translucent Frosted Glass Pills (Lessons, Duration, Comments) */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-1.5 pointer-events-none">
          <div className="bg-white/40 backdrop-blur-md text-surface-900 font-bold text-[10px] px-2.5 py-0.5 rounded-full shadow-sm">
            {course.lessons} Lessons
          </div>
          <div className="bg-white/40 backdrop-blur-md text-surface-900 font-bold text-[10px] px-2.5 py-0.5 rounded-full shadow-sm">
            {course.duration}
          </div>
          <div className="bg-white/40 backdrop-blur-md text-surface-900 font-bold text-[10px] px-2.5 py-0.5 rounded-full shadow-sm">
            {course.commentsCount} Comments
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 space-y-3">
        {/* Title & Rating */}
        <div className="flex items-start justify-between gap-2">
          <Link
            to="/course-details"
            className="font-display font-bold text-sm sm:text-base text-surface-900 group-hover:text-brand-600 transition-colors line-clamp-1"
          >
            {course.title}
          </Link>
          <div className="flex items-center gap-1 text-xs font-bold text-surface-900 shrink-0">
            <span>{course.rating.toFixed(1)}</span>
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          </div>
        </div>

        {/* Author */}
        <p className="text-xs text-surface-400 -mt-1">
          by <span className="font-semibold text-brand-600 hover:underline">{course.author}</span>
        </p>

        {/* Level Badge & Students Avatar Stack */}
        <div className="flex items-center justify-between pt-1">
          {/* Level Pill */}
          <Badge variant="outline" size="sm" className="font-semibold text-surface-600 border-surface-200">
            {course.level}
          </Badge>

          {/* Overlapping Avatar Stack with Neon Badge */}
          <div className="flex items-center">
            <div className="flex -space-x-1.5 overflow-hidden">
              <img
                className="inline-block h-5 w-5 rounded-full ring-2 ring-white object-cover"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
                alt="Student 1"
              />
              <img
                className="inline-block h-5 w-5 rounded-full ring-2 ring-white object-cover"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"
                alt="Student 2"
              />
              <img
                className="inline-block h-5 w-5 rounded-full ring-2 ring-white object-cover"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80"
                alt="Student 3"
              />
            </div>
            <span className="ml-1.5 bg-neon text-surface-900 text-[9px] font-black px-1.5 py-0.5 rounded-full">
              {course.enrolledStudentsCount}
            </span>
          </div>
        </div>

        {/* Price & Action Button */}
        <div className="flex items-center justify-between pt-3 border-t border-surface-100 mt-auto">
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-display font-extrabold text-brand-600">
              ${course.price}
            </span>
            <span className="text-xs text-surface-400 line-through">
              ${course.originalPrice}/lifetime
            </span>
          </div>

          <Link to="/course-details">
            <Button
              variant="outline"
              size="sm"
              className="text-xs font-bold px-3 py-1 hover:bg-neon hover:text-surface-900 hover:border-neon transition-all"
            >
              View Course
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
