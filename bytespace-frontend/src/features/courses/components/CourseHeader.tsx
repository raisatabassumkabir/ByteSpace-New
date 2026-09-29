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
      {/* Subtle decorative floating sparkles */}
      <div className="absolute top-10 right-1/3 opacity-40 pointer-events-none hidden lg:block">
        <SparkleShape className="w-8 h-8" color="#CCFF00" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Title, Badges, and Video Player (Left 8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Header Top Row with Title & Share Button */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight text-white leading-tight">
                  {courseDetailsData.title}
                </h1>
                <p className="text-sm sm:text-base text-white/80 font-normal">
                  {courseDetailsData.subtitle}
                </p>
                <div className="pt-1">
                  <span className="text-xs text-white/70">by </span>
                  <Link
                    to="/creator"
                    className="text-xs font-bold text-white underline underline-offset-4 hover:text-neon transition-colors"
                  >
                    {courseDetailsData.instructor.username}
                  </Link>
                </div>
              </div>

              {/* Share Button (Neon Pill matching Figma) */}
              <button
                onClick={handleShare}
                className="self-start inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon text-surface-900 text-xs font-bold shadow-neon-sm hover:bg-neon-hover transition-all duration-200 shrink-0"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-surface-900" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copied ? 'Link Copied!' : 'Share'}</span>
              </button>
            </div>

            {/* Badges Row (Intermediate, Rating, Students) */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              {/* Level Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white">
                <BarChart2 className="w-3.5 h-3.5 text-neon" />
                <span>{courseDetailsData.level}</span>
              </div>

              {/* Rating Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="font-bold">{courseDetailsData.rating}</span>
                <span className="text-white/70">({courseDetailsData.reviewCount} reviews)</span>
              </div>

              {/* Students Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white">
                <Users className="w-3.5 h-3.5 text-neon" />
                <span>{courseDetailsData.studentsCount} Students</span>
              </div>
            </div>

            {/* Large Video Player Placeholder */}
            <div className="relative aspect-video w-full rounded-3xl overflow-hidden bg-surface-900 shadow-2xl border border-white/20 group">
              <img
                src={courseDetailsData.videoPoster}
                alt={courseDetailsData.title}
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors" />

              {/* Central Glowing Play Button */}
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 text-surface-900 flex items-center justify-center shadow-2xl backdrop-blur-sm group-hover:scale-110 group-hover:bg-neon transition-all duration-300 ring-8 ring-white/20"
                aria-label="Play course intro trailer"
              >
                <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-surface-900 ml-1 text-surface-900" />
              </button>

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
