import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Share2, Star, Users, BarChart2, Play, Check } from 'lucide-react';
import { courseDetailsData } from '../data/courseDetailsData';
import { SparkleShape } from '@/assets/illustrations/DecorativeShapes';

export const CourseHeader: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative bg-brand-600 bg-hero-grid text-white pt-8 pb-16 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Title, Badges, and Video Player (Left 8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Header Top Row with Title & Share Button */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 lg:gap-12">
                <h1 className="text-[28px] sm:text-[32px] lg:text-[36px] xl:text-[40px] font-bold tracking-tight text-white leading-tight whitespace-nowrap">
                  {courseDetailsData.title}
                </h1>
                {/* Share Button (Neon Pill matching Figma) */}
                <button
                  onClick={handleShare}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-neon text-surface-900 text-sm font-extrabold shadow-neon-sm hover:bg-neon-hover transition-all duration-200 shrink-0"
                >
                  {copied ? <Check className="w-4 h-4 text-surface-900" /> : <Share2 className="w-4 h-4 text-surface-900" />}
                  <span>{copied ? 'Copied!' : 'Share'}</span>
                </button>
              </div>
              <p className="text-sm lg:text-[15px] text-white/90 font-semibold">
                {courseDetailsData.subtitle}
              </p>
              <div className="pt-1">
                <span className="text-xs text-white/70">by </span>
                <Link
                  to="/creator"
                  className="text-xs font-bold text-[#CCFF00] hover:text-white transition-colors"
                >
                  {courseDetailsData.instructor.username}
                </Link>
              </div>
            </div>

            {/* Badges Row (Intermediate, Rating, Students) */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Level Badge */}
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-xs font-bold text-brand-600 shadow-sm">
                <BarChart2 className="w-3.5 h-3.5 text-brand-600" />
                <span>{courseDetailsData.level}</span>
              </div>

              {/* Rating Badge */}
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-xs font-bold text-brand-600 shadow-sm">
                <Star className="w-3.5 h-3.5 fill-brand-600 text-brand-600" />
                <span>{courseDetailsData.rating} ({courseDetailsData.reviewCount} reviews)</span>
              </div>

              {/* Students Badge */}
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-xs font-bold text-brand-600 shadow-sm">
                <Users className="w-3.5 h-3.5 text-brand-600" />
                <span>{courseDetailsData.studentsCount} Students</span>
              </div>
            </div>

            {/* Large Video Player Placeholder */}
            <div 
              className="relative aspect-video w-full rounded-3xl overflow-hidden bg-surface-900 shadow-2xl border border-white/20 group cursor-pointer"
              onClick={() => setIsPlaying(true)}
              role="button"
              tabIndex={0}
              aria-label="Play course intro trailer"
            >
              <img
                src={courseDetailsData.videoPoster}
                alt={courseDetailsData.title}
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors" />

              {/* Trailer Badge */}
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1.5 rounded-full border border-white/10">
                Course Preview • 02:45
              </div>
            </div>
          </div>

          {/* Spacer for Desktop Grid alignment (Sidebar will mount in shared layout) */}
          <div className="hidden lg:block lg:col-span-4" />
        </div>
      </div>

      {/* Video Modal if clicked */}
      {isPlaying && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/20">
            <button
              onClick={() => setIsPlaying(false)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/20 text-white hover:bg-white/40 flex items-center justify-center transition-colors"
            >
              ✕
            </button>
            <iframe
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Course Trailer"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};
