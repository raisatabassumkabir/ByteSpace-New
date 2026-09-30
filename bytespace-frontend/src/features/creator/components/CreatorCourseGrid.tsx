import React, { useState, useMemo } from 'react';
import { Filter, BarChart2, Shapes } from 'lucide-react';
import { mockCreatorCourses } from '../data/mockCreator';
import { CreatorCourseCard } from './CreatorCourseCard';
import { cn } from '@/utils/cn';

export const CreatorCourseGrid: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'relevant' | 'rating' | 'price'>('relevant');
  const [showLevelMenu, setShowLevelMenu] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);

  const filteredCourses = useMemo(() => {
    let list = [...mockCreatorCourses];
    if (selectedLevel !== 'All') {
      list = list.filter((c) => c.level === selectedLevel);
    }
    if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'price') {
      list.sort((a, b) => a.price - b.price);
    }
    return list;
  }, [selectedLevel, sortBy]);

  return (
    <section className="py-12 bg-surface-50 border-t border-surface-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Filter and Sort Bar matching Screenshot */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-2">
          {/* Left: Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Filter icon button */}
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-surface-200 text-surface-700 text-sm font-semibold hover:bg-surface-50 shadow-sm transition-all">
              <Filter className="w-4 h-4 text-surface-500" />
              <span>Filter</span>
            </button>

            {/* Level Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowLevelMenu(!showLevelMenu)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-surface-200 text-surface-700 text-sm font-semibold hover:bg-surface-50 shadow-sm transition-all"
              >
                <BarChart2 className="w-4 h-4 text-surface-500" />
                <span>Level</span>
              </button>

              {showLevelMenu && (
                <div className="absolute left-0 mt-2 w-40 bg-white rounded-2xl shadow-xl border border-surface-200 p-1.5 z-20 space-y-1">
                  {['All', 'Beginner', 'Intermediate'].map((lvl) => (
                    <button
                      key={lvl}
                      onClick={() => {
                        setSelectedLevel(lvl);
                        setShowLevelMenu(false);
                      }}
                      className={cn(
                        'w-full text-left px-3 py-1.5 rounded-xl text-xs font-medium transition-colors',
                        selectedLevel === lvl
                          ? 'bg-neon text-surface-900 font-bold'
                          : 'text-surface-700 hover:bg-surface-100'
                      )}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Category Button */}
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-surface-200 text-surface-700 text-sm font-semibold hover:bg-surface-50 shadow-sm transition-all">
              <Shapes className="w-4 h-4 text-surface-500" />
              <span>Category</span>
            </button>
          </div>

          {/* Right: Sort Button */}
          <div className="relative">
            <button
              onClick={() => setShowSortMenu(!showSortMenu)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-surface-200 text-surface-700 text-sm font-semibold hover:bg-surface-50 shadow-sm transition-all"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-4 h-4 text-surface-500"
              >
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="12" x2="14" y2="12"></line>
                <line x1="4" y1="18" x2="8" y2="18"></line>
              </svg>
              <span>Most relevant</span>
            </button>

            {showSortMenu && (
              <div className="absolute right-0 mt-2 w-44 bg-white rounded-2xl shadow-xl border border-surface-200 p-1.5 z-20 space-y-1">
                {[
                  { id: 'relevant', label: 'Most relevant' },
                  { id: 'rating', label: 'Highest Rated' },
                  { id: 'price', label: 'Lowest Price' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setSortBy(item.id as 'relevant' | 'rating' | 'price');
                      setShowSortMenu(false);
                    }}
                    className={cn(
                      'w-full text-left px-3 py-1.5 rounded-xl text-xs font-medium transition-colors',
                      sortBy === item.id
                        ? 'bg-neon text-surface-900 font-bold'
                        : 'text-surface-700 hover:bg-surface-100'
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 6 Courses Grid matching Screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCourses.map((course) => (
            <CreatorCourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};
