import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '@/types';

export const TestimonialGrid: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 'test-1',
      name: 'Jessica Vance',
      role: 'Senior Frontend Engineer',
      company: 'Linear',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      content:
        'The Next.js 14 and TypeScript tracks were instrumental in landing my current role. The instructor gave specific code review notes on my GitHub repo that I still reference today.',
      courseTaken: 'Next.js 14 Masterclass',
    },
    {
      id: 'test-2',
      name: 'Marcus Sterling',
      role: 'Staff Product Designer',
      company: 'Figma Community',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      content:
        'I have taken courses on virtually every online platform, but ByteSpace is the first that actually feels like modern product engineering. The Figma Design Systems course is worth 10x the price.',
      courseTaken: 'UI/UX Design Systems',
    },
    {
      id: 'test-3',
      name: 'Amara Nwosu',
      role: 'Full-Stack Developer',
      company: 'Monzo Bank',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
      rating: 5,
      content:
        'The 1-on-1 mentorship aspect makes all the difference. When I hit a blocker with state orchestration, a Staff Engineer stepped through my PR in real-time and explained best practices.',
      courseTaken: 'Modern Full-Stack React',
    },
  ];

  return (
    <section className="py-20 bg-surface-50 border-t border-surface-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-600 bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-200 inline-block">
            Student Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-surface-900 tracking-tight">
            Discover What Our Community Is Saying
          </h2>
          <p className="text-sm sm:text-base text-surface-500">
            Real outcomes from ambitious developers, designers, and tech leaders worldwide.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-8 border border-surface-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Star Rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-surface-700 text-sm leading-relaxed mb-6 font-normal">
                  "{t.content}"
                </p>
              </div>

              {/* Author Meta */}
              <div className="pt-4 border-t border-surface-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-brand-100"
                  />
                  <div>
                    <h4 className="font-bold text-sm text-surface-900 leading-snug">
                      {t.name}
                    </h4>
                    <p className="text-[11px] text-surface-500">
                      {t.role} • <span className="font-semibold text-brand-600">{t.company}</span>
                    </p>
                  </div>
                </div>

                <div className="hidden sm:block text-neon-dark bg-neon/30 px-2 py-1 rounded-md text-[10px] font-bold">
                  Verified
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
