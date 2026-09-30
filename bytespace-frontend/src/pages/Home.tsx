import React from 'react';
import { Navbar, Footer } from '@/components/layout';
import {
  Hero,
  CourseFilterGrid,
  FeatureHighlights,
  SecondaryCTA,
  TestimonialGrid,
  LearningPaths,
  LogoPartner,
} from '@/features/landing/components';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-surface-50 font-sans selection:bg-neon selection:text-surface-900 overflow-x-hidden">
      {/* Integrated Royal Blue Hero Section with Navbar */}
      <div className="bg-brand-600 bg-hero-grid text-white relative">
        <Navbar variant="transparent-on-blue" />
        <Hero />
      </div>

      {/* Main Landing Page Sections */}
      <main className="flex-1">
        <LogoPartner />
        <CourseFilterGrid />
        <LearningPaths />
        <FeatureHighlights />
        <SecondaryCTA />
        <TestimonialGrid />
      </main>

      {/* Multi-Column Footer */}
      <Footer />
    </div>
  );
};

export default Home;
