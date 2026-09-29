import React from 'react';
import { Navbar, Footer } from '@/components/layout';
import { CreatorHeader, CreatorCourseGrid } from '@/features/creator';

export const CreatorProfile: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-surface-50 font-sans selection:bg-neon selection:text-surface-900">
      {/* Top Navbar integrated with Royal Blue Creator Header */}
      <div className="bg-brand-600 bg-hero-grid text-white relative">
        <Navbar variant="transparent-on-blue" />
      </div>

      {/* Main Content Area */}
      <main className="flex-1">
        <CreatorHeader />
        <CreatorCourseGrid />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default CreatorProfile;
