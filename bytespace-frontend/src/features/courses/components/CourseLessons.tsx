import React from 'react';
import { Video } from 'lucide-react';
import { courseDetailsData } from '../data/courseDetailsData';

export const CourseLessons: React.FC = () => {
  const { modules } = courseDetailsData;

  return (
    <div className="space-y-10">
      {/* Header Description */}
      <div className="space-y-4">
        <h3 className="text-[15px] sm:text-base font-bold text-surface-900">
          Explore the Modules
        </h3>
        <p className="text-[13px] sm:text-sm text-surface-600 leading-relaxed">
          Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.
        </p>
      </div>

      {/* Lesson List */}
      <div className="space-y-5">
        <h4 className="text-[15px] font-bold text-surface-900">
          Lesson List
        </h4>

        <div className="space-y-4">
          {modules.map((mod) => (
            <div
              key={mod.id}
              className="flex items-start gap-4 py-3"
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
      <div className="space-y-4 pt-6">
        <h4 className="text-[15px] sm:text-base font-bold text-surface-900">
          Lesson Content
        </h4>
        <p className="text-[13px] sm:text-sm text-surface-600 leading-relaxed">
          Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
        </p>
      </div>

      {/* Lesson Progress Tracking */}
      <div className="space-y-4 pt-6">
        <h4 className="text-[15px] sm:text-base font-bold text-surface-900">
          Lesson Progress Tracking
        </h4>
        <p className="text-[13px] sm:text-sm text-surface-600 leading-relaxed">
          Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
        </p>

        {/* Progress Box matching Figma reference */}
        <div className="bg-white rounded-[16px] p-5 sm:p-6 border border-surface-200 shadow-sm flex flex-col gap-1.5">
          <span className="text-[11px] font-bold text-surface-900">Learning Progress</span>
          <span className="text-[28px] font-black text-surface-900 leading-none tracking-tight">55%</span>

          {/* 55% Progress Bar with Neon Green Fill */}
          <div className="w-full h-2 rounded-full bg-surface-100 overflow-hidden relative mt-3">
            <div
              className="h-full bg-[#CCFF00] rounded-full transition-all duration-500"
              style={{ width: '55%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
