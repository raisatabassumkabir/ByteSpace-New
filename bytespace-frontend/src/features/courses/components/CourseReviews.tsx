import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { courseDetailsData } from '../data/courseDetailsData';
import { cn } from '@/utils/cn';

export const CourseReviews: React.FC = () => {
  const { reviewsData } = courseDetailsData;
  const [selectedFilter, setSelectedFilter] = useState<number | 'all'>('all');

  const filterOptions: { label: string; value: number | 'all' }[] = [
    { label: 'All rating', value: 'all' },
    { label: '★ 5', value: 5 },
    { label: '★ 4', value: 4 },
    { label: '★ 3', value: 3 },
    { label: '★ 2', value: 2 },
    { label: '★ 1', value: 1 },
  ];

  const filteredReviews = reviewsData.reviewsList.filter((rev) => {
    if (selectedFilter === 'all') return true;
    return rev.rating === selectedFilter;
  });

  return (
    <div className="space-y-10">
      {/* Header Description */}
      <div className="space-y-2">
        <h3 className="text-xl font-display font-extrabold text-surface-900">
          What Learners Are Saying
        </h3>
        <p className="text-xs sm:text-sm text-surface-500 leading-relaxed">
          Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive Guide'. Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
        </p>
      </div>

      {/* Aggregate Rating Component matching Screenshot */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 border border-surface-200/80 shadow-sm flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
        {/* Left: Big Neon Yellow Rating Box */}
        <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl bg-neon text-surface-900 flex flex-col items-center justify-center p-4 shrink-0 shadow-neon-sm text-center">
          <span className="text-[11px] font-bold uppercase tracking-wider text-surface-800">
            Rating
          </span>
          <span className="text-4xl sm:text-5xl font-display font-black leading-none my-1">
            {reviewsData.aggregateRating.toFixed(1)}
          </span>
          <div className="flex items-center gap-0.5 text-surface-900 pt-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-surface-900 text-surface-900" />
            ))}
          </div>
        </div>

        {/* Right: Horizontal Star Distribution Bars */}
        <div className="flex-1 w-full space-y-2">
          {reviewsData.ratingDistribution.map((item) => (
            <div key={item.stars} className="flex items-center gap-3 text-xs">
              {/* Progress bar */}
              <div className="flex-1 h-2 rounded-full bg-surface-100 overflow-hidden relative">
                <div
                  className="h-full bg-neon rounded-full"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>

              {/* Stars Representation */}
              <div className="flex items-center gap-0.5 text-surface-400 shrink-0">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      'w-3 h-3',
                      i < item.stars ? 'fill-surface-800 text-surface-800' : 'text-surface-200'
                    )}
                  />
                ))}
              </div>

              {/* Count */}
              <span className="w-8 text-right font-medium text-surface-500 text-[11px]">
                {item.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Individual Reviews Section */}
      <div className="space-y-6">
        <h4 className="text-sm font-bold uppercase tracking-wider text-surface-900">
          Individual Reviews:
        </h4>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {filterOptions.map((opt) => {
            const isSelected = selectedFilter === opt.value;
            return (
              <button
                key={String(opt.value)}
                onClick={() => setSelectedFilter(opt.value)}
                className={cn(
                  'px-4 py-1.5 rounded-full text-xs font-bold transition-all',
                  isSelected
                    ? 'bg-neon text-surface-900 shadow-sm'
                    : 'bg-white text-surface-600 border border-surface-200 hover:bg-surface-50'
                )}
              >
                {opt.label}
              </button>
            );
          })}
        </div>

        {/* Reviews Cards List */}
        <div className="space-y-4">
          {filteredReviews.length > 0 ? (
            filteredReviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-surface-200/80 shadow-sm space-y-3"
              >
                {/* Author Info & Date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-surface-100"
                    />
                    <div>
                      <h5 className="font-bold text-sm text-surface-900 leading-none">
                        {rev.name}
                      </h5>
                      <span className="text-[11px] text-surface-400 mt-0.5 inline-block">
                        {rev.role}
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] text-surface-400 font-medium">
                    {rev.date}
                  </span>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-0.5 text-surface-800">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-surface-800 text-surface-800" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-surface-600 leading-relaxed font-normal">
                  "{rev.comment}"
                </p>
              </div>
            ))
          ) : (
            <p className="text-xs text-surface-400 italic py-4">
              No reviews matching this rating filter.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
