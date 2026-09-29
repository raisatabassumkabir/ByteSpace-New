import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Course } from '@/types';
import { CourseCard } from './CourseCard';

interface CourseCarouselProps {
  courses: Course[];
  title?: string;
  subtitle?: string;
}

export const CourseCarousel: React.FC<CourseCarouselProps> = ({
  courses,
  title,
  subtitle,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full">
      {(title || subtitle) && (
        <div className="flex items-end justify-between mb-6">
          <div>
            {subtitle && (
              <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-2xl lg:text-3xl font-display font-extrabold text-surface-900 mt-1">
                {title}
              </h2>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2.5 rounded-full border border-surface-200 bg-white text-surface-700 hover:bg-surface-100 hover:border-surface-300 transition-all shadow-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2.5 rounded-full border border-surface-200 bg-white text-surface-700 hover:bg-surface-100 hover:border-surface-300 transition-all shadow-sm"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Horizontal Scroll Container */}
      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto pb-4 pt-1 snap-x scrollbar-none scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {courses.map((course) => (
          <div key={course.id} className="min-w-[300px] md:min-w-[340px] flex-shrink-0 snap-start">
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </div>
  );
};
