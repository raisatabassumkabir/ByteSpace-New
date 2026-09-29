import React, { useState } from 'react';
import { CourseHeader } from './CourseHeader';
import { CourseEnrollmentSidebar } from './CourseEnrollmentSidebar';
import { CourseTabs, CourseTabType } from './CourseTabs';
import { CourseAbout } from './CourseAbout';
import { CourseLessons } from './CourseLessons';
import { CourseReviews } from './CourseReviews';

interface CourseLayoutProps {
  initialTab?: CourseTabType;
}

export const CourseLayout: React.FC<CourseLayoutProps> = ({ initialTab = 'about' }) => {
  const [activeTab, setActiveTab] = useState<CourseTabType>(initialTab);

  return (
    <div className="w-full">
      {/* Reusable Course Header (Deep Royal Blue) */}
      <CourseHeader />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Tabs & Dynamic Tab Content (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            <CourseTabs activeTab={activeTab} onChange={setActiveTab} />

            {/* Render Active Tab View */}
            {activeTab === 'about' && <CourseAbout />}
            {activeTab === 'lessons' && <CourseLessons />}
            {activeTab === 'reviews' && <CourseReviews />}
          </div>

          {/* Right Column: Floating Enrollment Sidebar Card (4 Cols) */}
          {/* Positioned with sticky top offset to seamlessly bridge header & body */}
          <div className="lg:col-span-4 lg:-mt-72 lg:sticky lg:top-24 z-20">
            <CourseEnrollmentSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};
