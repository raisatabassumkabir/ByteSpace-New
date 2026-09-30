import React, { useState, useMemo } from 'react';
import { mockCourses } from '@/features/courses/data/mockCourses';
import { CourseCard } from '@/features/courses/components/CourseCard';
import { cn } from '@/utils/cn';

export const CourseFilterGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Featured');

  // Exact 3 rows of category filter pills from Figma Reference
  const row1 = [
    'Featured',
    'Music',
    'Drawing & Painting',
    'Marketing',
    'Animation',
    'Social Media',
    'UI/UX Design',
    'Creative Marketing',
  ];

  const row2 = [
    'Digital Illustration',
    'Film & Video',
    'Crafts',
    'Freelance & Entrepreneurship',
    'Graphic Design',
    'Photography',
  ];

  const row3 = [
    'Productivity',
    'Web Development',
    'Data Science',
    'Cooking',
    '+ More',
  ];

  const filteredCourses = useMemo(() => {
    if (activeCategory === 'Featured' || activeCategory === '+ More') {
      return mockCourses;
    }
    const filtered = mockCourses.filter(
      (c) =>
        c.category.toLowerCase() === activeCategory.toLowerCase() ||
        c.tags?.some((t) => t.toLowerCase() === activeCategory.toLowerCase())
    );
    return filtered.length > 0 ? filtered : mockCourses;
  }, [activeCategory]);

  const renderPill = (cat: string) => {
    const isSelected = activeCategory === cat;
    const isMore = cat === '+ More';
    
    if (isMore) {
      return (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className="px-2 py-1.5 text-sm font-bold text-brand-600 hover:text-brand-700 hover:underline transition-all duration-200 whitespace-nowrap select-none"
        >
          {cat}
        </button>
      );
    }

    return (
      <button
        key={cat}
        onClick={() => setActiveCategory(cat)}
        className={cn(
          'px-4 py-1.5 rounded-full text-xs transition-all duration-200 whitespace-nowrap select-none font-semibold',
          isSelected
            ? 'bg-neon text-surface-900 shadow-neon-sm scale-102 font-extrabold'
            : 'bg-surface-100 text-surface-700 hover:bg-surface-200 hover:text-surface-900'
        )}
      >
        {cat}
      </button>
    );
  };

  return (
    <section id="courses" className="py-20 bg-white border-b border-surface-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Section Header verbatim from Figma */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-surface-900 tracking-tight leading-tight">
            Discover Your Passion,<br className="hidden sm:inline" /> Build Your Skills
          </h2>
          <p className="text-xs sm:text-sm text-surface-500 max-w-2xl mx-auto leading-relaxed">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* 3 Rows of Category Filter Pills matching Screenshot */}
        <div className="flex flex-col items-center gap-4 lg:gap-5 max-w-5xl mx-auto overflow-x-auto pb-2">
          {/* Row 1 */}
          <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4">
            {row1.map(renderPill)}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4">
            {row2.map(renderPill)}
          </div>

          {/* Row 3 */}
          <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4">
            {row3.map(renderPill)}
          </div>
        </div>

        {/* 6 Course Cards Grid matching Screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};
