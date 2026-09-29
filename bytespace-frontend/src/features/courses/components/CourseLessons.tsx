import React from 'react';
import { Video } from 'lucide-react';
import { courseDetailsData } from '../data/courseDetailsData';

export const CourseLessons: React.FC = () => {
  const { modules } = courseDetailsData;

  return (
    <div className="space-y-10">
      {/* Header Description */}
      <div className="space-y-2">
        <h3 className="text-xl font-display font-extrabold text-surface-900">
          Explore the Modules
        </h3>
        <p className="text-xs sm:text-sm text-surface-500 leading-relaxed">
          Immerse yourself in this course context as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.
        </p>
      </div>

      {/* Lesson List */}
      <div className="space-y-5">
        <h4 className="text-sm font-bold uppercase tracking-wider text-surface-900">
          Lesson List
        </h4>

        <div className="space-y-4">
          {modules.map((mod) => (
            <div
              key={mod.id}
              className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-surface-200/80 shadow-sm hover:border-brand-300 hover:shadow-card transition-all"
            >
              {/* Neon Green Video Camera Icon */}
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-neon text-surface-900 flex items-center justify-center shrink-0 shadow-neon-sm">
                <Video className="w-5 h-5 fill-surface-900" />
              </div>

              {/* Module Details */}
              <div className="space-y-1.5 flex-1">
                <h5 className="font-bold text-sm sm:text-base text-surface-900 leading-snug">
                  {mod.title}
                </h5>
                <p className="text-xs sm:text-sm text-surface-500 leading-relaxed">
                  {mod.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lesson Content Section */}
      <div className="space-y-2 pt-2 border-t border-surface-100">
        <h4 className="text-base font-display font-bold text-surface-900">
          Lesson Content
        </h4>
        <p className="text-xs sm:text-sm text-surface-500 leading-relaxed">
          Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
        </p>
      </div>

      {/* Lesson Progress Tracking */}
      <div className="space-y-3 pt-2">
        <h4 className="text-base font-display font-bold text-surface-900">
          Lesson Progress Tracking
        </h4>
        <p className="text-xs text-surface-500 leading-relaxed">
          Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
        </p>

        {/* Progress Box matching Figma reference */}
        <div className="bg-white rounded-2xl p-5 border border-surface-200 shadow-sm space-y-3">
          <div className="flex items-baseline justify-between">
            <span className="text-xs font-semibold text-surface-600">Learning Progress</span>
            <span className="text-xl font-display font-black text-surface-900">55%</span>
          </div>

          {/* 55% Progress Bar with Neon Green Fill */}
          <div className="w-full h-3 rounded-full bg-surface-100 overflow-hidden relative">
            <div
              className="h-full bg-neon rounded-full shadow-neon-sm transition-all duration-500"
              style={{ width: '55%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
