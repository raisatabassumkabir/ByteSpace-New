import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Navbar, Footer } from '@/components/layout';
import { CourseLayout, CourseTabType } from '@/features/courses';

export const CourseDetails: React.FC = () => {
  const [searchParams] = useSearchParams();
  const tabParam = searchParams.get('tab') as CourseTabType | null;
  const initialTab: CourseTabType = tabParam === 'lessons' || tabParam === 'reviews' ? tabParam : 'about';

  return (
    <div className="min-h-screen flex flex-col bg-surface-50 font-sans selection:bg-neon selection:text-surface-900">
      {/* Top Navbar integrated seamlessly with the Royal Blue Course Header */}
      <div className="bg-brand-600 bg-hero-grid text-white relative">
        <Navbar variant="transparent-on-blue" />
      </div>

      {/* Main Course Details Layout with Tabs & Sticky Sidebar */}
      <main className="flex-1">
        <CourseLayout initialTab={initialTab} />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default CourseDetails;
