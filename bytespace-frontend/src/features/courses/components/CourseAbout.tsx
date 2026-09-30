import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { courseDetailsData } from '../data/courseDetailsData';

export const CourseAbout: React.FC = () => {
  const { about } = courseDetailsData;

  return (
    <div className="space-y-10">
      {/* Description Section */}
      <div className="space-y-4">
        <h3 className="text-[15px] sm:text-base font-bold text-surface-900">
          Description
        </h3>
        <div className="space-y-4 text-xs sm:text-sm text-surface-600 leading-relaxed">
          {about.descriptionParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Sneak Peek Gallery */}
      <div className="space-y-4">
        <h3 className="text-[15px] sm:text-base font-bold text-surface-900">
          Sneak Peek
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
          {about.sneakPeekImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-video sm:aspect-square rounded-2xl overflow-hidden bg-surface-100 border border-surface-200 shadow-sm"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
                <span className="text-[11px] font-semibold text-white truncate">
                  {image.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Points */}
      <div className="space-y-4">
        <h3 className="text-[15px] sm:text-base font-bold text-surface-900">
          Key Points
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {about.keyPoints.map((point, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4 text-brand-600 fill-brand-100" />
              </div>
              <span className="text-xs sm:text-sm text-surface-700 font-medium">
                {point}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
