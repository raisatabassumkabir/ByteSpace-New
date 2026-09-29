import React from 'react';
import { cn } from '@/utils/cn';

export type CourseTabType = 'about' | 'lessons' | 'reviews';

interface CourseTabsProps {
  activeTab: CourseTabType;
  onChange: (tab: CourseTabType) => void;
  className?: string;
}

export const CourseTabs: React.FC<CourseTabsProps> = ({
  activeTab,
  onChange,
  className,
}) => {
  const tabs: { id: CourseTabType; label: string }[] = [
    { id: 'about', label: 'About' },
    { id: 'lessons', label: 'Lessons' },
    { id: 'reviews', label: 'Reviews' },
  ];

  return (
    <div className={cn('flex items-center gap-3 select-none pb-6', className)}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={cn(
              'px-6 py-2 rounded-full text-xs transition-all duration-200 tracking-wide',
              isActive
                ? 'bg-neon text-surface-900 font-extrabold shadow-sm scale-102'
                : 'bg-white text-surface-600 font-semibold border border-surface-200 hover:bg-surface-100 hover:text-surface-900'
            )}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};
