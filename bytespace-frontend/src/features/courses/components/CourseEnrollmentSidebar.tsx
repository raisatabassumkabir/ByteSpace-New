import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Video, Award, MessageSquare, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { courseDetailsData } from '../data/courseDetailsData';

export const CourseEnrollmentSidebar: React.FC = () => {
  const [enrolled, setEnrolled] = useState(false);

  const iconMap: Record<string, React.ReactNode> = {
    BookOpen: <BookOpen className="w-4 h-4 text-brand-600 shrink-0" />,
    Video: <Video className="w-4 h-4 text-brand-600 shrink-0" />,
    Award: <Award className="w-4 h-4 text-brand-600 shrink-0" />,
    MessageSquare: <MessageSquare className="w-4 h-4 text-brand-600 shrink-0" />,
  };

  return (
    <aside className="w-full bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-surface-200/80 space-y-6">
      {/* 112 Lessons Header & Mini Syllabus */}
      <div className="space-y-4 pb-5 border-b border-surface-100">
        <h3 className="text-base font-display font-extrabold text-surface-900">
          {courseDetailsData.lessonsCount} Lessons ({courseDetailsData.duration})
        </h3>

        {/* Mini Preview Syllabus Items */}
        <div className="space-y-3">
          {courseDetailsData.sidebarPreviewLessons.map((lesson) => (
            <div
              key={lesson.number}
              className="flex items-center justify-between text-xs py-1.5 hover:bg-surface-50 px-2 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-2.5 max-w-[210px]">
                <span className="font-bold text-surface-900">{lesson.number}</span>
                <span className="text-surface-700 font-medium truncate">{lesson.title}</span>
              </div>
              <span className="text-brand-600 font-semibold text-[11px] shrink-0">
                {lesson.duration}
              </span>
            </div>
          ))}
        </div>

        <p className="text-[11px] text-surface-400 font-medium pt-1">
          99 more videos available upon enrollment
        </p>
      </div>

      {/* Pricing & CTA */}
      <div className="space-y-4">
        <p className="text-xs text-surface-500 leading-snug">
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>

        <div className="flex items-baseline gap-1">
          <span className="text-3xl sm:text-4xl font-display font-black text-brand-600">
            ${courseDetailsData.price}
          </span>
          <span className="text-[11px] text-surface-400 font-medium">
            /lifetime
          </span>
        </div>

        <Button
          variant="neon"
          size="lg"
          onClick={() => setEnrolled(!enrolled)}
          className="w-full font-bold text-sm tracking-wide shadow-neon hover:shadow-neon-lg"
        >
          {enrolled ? 'Enrolled! Go to Classroom' : 'Enroll Now'}
        </Button>
      </div>

      {/* This Course Include Section */}
      <div className="space-y-3 pt-2">
        <h4 className="text-[15px] font-bold text-surface-900 tracking-tight">
          This course include
        </h4>
        <ul className="space-y-2.5">
          {courseDetailsData.inclusions.map((item) => (
            <li key={item.label} className="flex items-center gap-2.5 text-xs text-surface-600">
              {iconMap[item.icon] || <Check className="w-4 h-4 text-brand-600" />}
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Creator Mini Card */}
      <div className="pt-4 border-t border-surface-100 space-y-4">
        <div className="flex items-center gap-3">
          <img
            src={courseDetailsData.instructor.avatar}
            alt={courseDetailsData.instructor.name}
            className="w-11 h-11 rounded-full object-cover ring-2 ring-brand-100"
          />
          <div>
            <h5 className="font-bold text-sm text-surface-900 leading-none">
              {courseDetailsData.instructor.name}
            </h5>
            <p className="text-xs text-surface-400 mt-1">
              {courseDetailsData.instructor.role}
            </p>
          </div>
        </div>

        <p className="text-xs text-surface-500 leading-relaxed">
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>

        <Link to="/creator" className="inline-block mt-1">
          <Button
            variant="outline"
            className="text-[11px] px-6 py-2.5 font-semibold hover:border-brand-600 hover:text-brand-600 rounded-full text-surface-900 border-surface-200"
          >
            See Full Profile
          </Button>
        </Link>
      </div>
    </aside>
  );
};
