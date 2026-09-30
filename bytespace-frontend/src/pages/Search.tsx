import React, { useState } from 'react';
import { Navbar, Footer } from '@/components/layout';
import { Search as SearchIcon, ChevronDown, Filter, Layers, Folder, ChevronLeft, ChevronRight } from 'lucide-react';
import { CourseCard } from '@/features/courses/components/CourseCard';
import { mockCourses } from '@/features/courses/data/mockCourses';
import { cn } from '@/utils/cn';

export const Search: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Featured');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'Featured',
    'Music',
    'Drawing & Painting',
    'Marketing',
    'Animation',
    'Social Media',
    'UI/UX Design',
    'Creative Marketing',
    'Cooking',
  ];

  // We duplicate mock courses just to show 12 items for the grid design if needed, 
  // but mockCourses likely has enough items. We'll just slice the first 12 for the demo.
  const displayCourses = [...mockCourses, ...mockCourses, ...mockCourses].slice(0, 12);

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans selection:bg-neon selection:text-surface-900">
      {/* 1. Header Area with Hero Grid */}
      <div className="bg-brand-600 bg-hero-grid text-white relative border-b border-brand-500/30">
        <Navbar variant="transparent-on-blue" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Find Your Next Course
          </h1>
          
          <form 
            onSubmit={(e) => e.preventDefault()}
            className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-3 justify-center"
          >
            <div className="flex items-center flex-1 w-full bg-white rounded-full px-6 py-3.5 shadow-2xl focus-within:ring-2 focus-within:ring-neon transition-all">
              <SearchIcon className="w-5 h-5 text-slate-400 shrink-0 mr-3" />
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
              />
            </div>
            <button
              type="button"
              className="bg-neon hover:bg-[#b8e600] text-slate-950 font-bold text-base px-8 py-3.5 rounded-full shadow-2xl flex items-center gap-2 shrink-0 transition-all active:scale-95 w-full sm:w-auto justify-center"
            >
              Courses
              <ChevronDown className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* 2. Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        
        {/* Filters Top Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          {/* Left Side Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-surface-200 bg-white text-xs font-semibold text-surface-700 hover:bg-surface-50 transition-colors">
              <Filter className="w-3.5 h-3.5" /> Filter
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-surface-200 bg-white text-xs font-semibold text-surface-700 hover:bg-surface-50 transition-colors">
              <Layers className="w-3.5 h-3.5" /> Level
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-surface-200 bg-white text-xs font-semibold text-surface-700 hover:bg-surface-50 transition-colors">
              <Folder className="w-3.5 h-3.5" /> Category
            </button>
          </div>
          
          {/* Right Side Button */}
          <div>
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-surface-200 bg-white text-xs font-semibold text-surface-700 hover:bg-surface-50 transition-colors">
              Most relevant <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                'px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200',
                activeCategory === cat
                  ? 'bg-neon text-surface-900 shadow-sm'
                  : 'bg-surface-100 text-surface-600 hover:bg-surface-200 text-surface-900'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {displayCourses.map((course, index) => (
            <CourseCard key={`${course.id}-${index}`} course={course} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-16 flex items-center justify-center gap-2">
          <button className="w-8 h-8 flex items-center justify-center rounded-full border border-surface-200 text-surface-400 hover:bg-surface-50 transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </button>
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={cn(
                'w-8 h-8 flex items-center justify-center rounded-full text-xs font-bold transition-colors',
                page === 1
                  ? 'bg-surface-100 text-surface-900'
                  : 'text-surface-600 hover:bg-surface-100'
              )}
            >
              {page}
            </button>
          ))}
          <button className="w-8 h-8 flex items-center justify-center rounded-full border border-surface-200 text-surface-600 hover:bg-surface-50 transition-colors">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Search;
