import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { SquiggleShape } from '@/assets/illustrations/DecorativeShapes';

export const SecondaryCTA: React.FC = () => {
  return (
    <section className="relative bg-brand-600 text-white overflow-hidden bg-hero-grid py-20 lg:py-28 border-y border-brand-500/20">
      
      {/* Decorative SVGs for the background elements */}
      {/* Top Left Yellow Squiggle */}
      <div className="absolute -top-10 -left-10 lg:top-[-20%] lg:left-[-5%] opacity-90 animate-float pointer-events-none drop-shadow-2xl scale-150 rotate-[-15deg]">
        <SquiggleShape className="w-48 h-20" color="#CCFF00" />
      </div>

      {/* Bottom Right Yellow Squiggle */}
      <div className="absolute -bottom-10 -right-10 lg:bottom-[5%] lg:right-[5%] opacity-90 animate-float-slow pointer-events-none drop-shadow-2xl scale-125 rotate-[15deg]">
        <SquiggleShape className="w-48 h-20" color="#CCFF00" />
      </div>

      {/* Top Right Yellow Triangle/Cone Simulator */}
      <div className="absolute top-[10%] right-[10%] lg:right-[15%] w-24 h-24 lg:w-32 lg:h-32 bg-neon rounded-tl-full rounded-br-full rotate-45 opacity-90 animate-float drop-shadow-2xl" />

      {/* Bottom Left White Cone Simulator */}
      <div className="absolute bottom-[10%] left-[5%] lg:left-[10%] w-20 h-20 lg:w-28 lg:h-28 bg-white rounded-tr-full rounded-bl-full -rotate-12 opacity-90 animate-float-slow drop-shadow-2xl" />

      <div className="relative max-w-5xl mx-auto px-6 text-center space-y-6">
        
        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-display font-bold tracking-tight leading-tight max-w-3xl mx-auto drop-shadow-sm">
          Unlock Your Potential as a<br />Creator with ByteSpace
        </h2>

        <p className="text-[13px] sm:text-sm lg:text-[15px] text-white/95 max-w-[850px] mx-auto font-normal leading-relaxed">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>

        <div className="flex items-center justify-center pt-6">
          <Link to="/register">
            <Button
              variant="neon"
              size="lg"
              className="font-bold px-10 py-6 text-base shadow-neon hover:shadow-neon-lg text-slate-900 rounded-full hover:scale-105 transition-transform"
            >
              Join as Creator
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
};
