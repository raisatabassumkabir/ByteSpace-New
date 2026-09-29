import React, { useState } from 'react';
import { Package, Users, Check, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { mockCreatorData } from '../data/mockCreator';
import { SparkleShape } from '@/assets/illustrations/DecorativeShapes';

export const CreatorHeader: React.FC = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followers, setFollowers] = useState(mockCreatorData.followersCount);

  const handleFollowToggle = () => {
    if (isFollowing) {
      setIsFollowing(false);
      setFollowers((prev) => prev - 1);
    } else {
      setIsFollowing(true);
      setFollowers((prev) => prev + 1);
    }
  };

  return (
    <section className="relative bg-brand-600 bg-hero-grid text-white pt-8 pb-16 overflow-hidden">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start gap-6 lg:gap-8">
          {/* Creator Avatar with Ring */}
          <div className="relative shrink-0">
            <img
              src={mockCreatorData.avatar}
              alt={mockCreatorData.name}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-[28px] object-cover shadow-sm"
            />
          </div>

          {/* Details & Bio */}
          <div className="space-y-4 flex-1">
            <div className="flex flex-wrap items-center gap-4">
              <h1 className="text-[32px] sm:text-4xl font-bold text-white tracking-tight">
                {mockCreatorData.name}
              </h1>
              <Badge variant="neon" size="md" className="font-bold px-4 py-1.5 text-surface-900 bg-neon">
                {mockCreatorData.badge}
              </Badge>
            </div>

            <p className="text-[15px] font-normal text-surface-100">
              {mockCreatorData.headline}
            </p>

            <p className="text-[15px] text-white/90 max-w-5xl leading-[1.8] whitespace-pre-wrap font-normal">
              {mockCreatorData.bio}
            </p>

            {/* Stat Pills & Follow Button */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
              <div className="flex items-center gap-4">
                {/* 3 Products Pill */}
                <div className="inline-flex items-center gap-1.5 px-6 py-2 rounded-full bg-white shadow-sm">
                  <span className="text-brand-600 text-[15px] font-medium">{mockCreatorData.productsCount}</span>
                  <span className="text-surface-900 text-[15px] font-medium">Products</span>
                </div>

                {/* Followers Pill */}
                <div className="inline-flex items-center gap-1.5 px-6 py-2 rounded-full bg-white shadow-sm">
                  <span className="text-brand-600 text-[15px] font-medium">{followers}</span>
                  <span className="text-surface-900 text-[15px] font-medium">Followers</span>
                </div>
              </div>

              {/* Follow Button */}
              <button
                onClick={handleFollowToggle}
                className="inline-flex items-center justify-center px-8 py-2.5 rounded-full bg-neon text-surface-900 text-[15px] font-medium hover:bg-neon-hover transition-colors"
              >
                {isFollowing ? 'Following' : 'Follow'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
