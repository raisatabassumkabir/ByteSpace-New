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
      {/* Decorative Sparkle */}
      <div className="absolute top-10 right-20 opacity-40 pointer-events-none hidden md:block">
        <SparkleShape className="w-10 h-10" color="#CCFF00" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-start gap-6 lg:gap-8">
          {/* Creator Avatar with Ring */}
          <div className="relative shrink-0">
            <img
              src={mockCreatorData.avatar}
              alt={mockCreatorData.name}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl object-cover ring-4 ring-white/20 shadow-2xl"
            />
          </div>

          {/* Details & Bio */}
          <div className="space-y-4 flex-1">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight">
                {mockCreatorData.name}
              </h1>
              <Badge variant="neon" size="sm" className="font-bold px-3 py-1">
                {mockCreatorData.badge}
              </Badge>
            </div>

            <p className="text-sm font-semibold text-white/90">
              {mockCreatorData.headline}
            </p>

            <p className="text-xs sm:text-sm text-white/80 max-w-3xl leading-relaxed whitespace-pre-line font-normal">
              {mockCreatorData.bio}
            </p>

            {/* Stat Pills & Follow Button */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-3">
                {/* 3 Products Pill */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-surface-900 text-xs font-bold shadow-sm">
                  <Package className="w-3.5 h-3.5 text-brand-600" />
                  <span>{mockCreatorData.productsCount} Products</span>
                </div>

                {/* Followers Pill */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-surface-900 text-xs font-bold shadow-sm">
                  <Users className="w-3.5 h-3.5 text-brand-600" />
                  <span>{followers} Followers</span>
                </div>
              </div>

              {/* Follow Button */}
              <Button
                variant={isFollowing ? 'secondary' : 'neon'}
                size="md"
                onClick={handleFollowToggle}
                className="font-bold text-xs px-6 py-2 shadow-neon-sm"
                leftIcon={isFollowing ? <Check className="w-3.5 h-3.5" /> : <UserPlus className="w-3.5 h-3.5" />}
              >
                {isFollowing ? 'Following' : 'Follow'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
