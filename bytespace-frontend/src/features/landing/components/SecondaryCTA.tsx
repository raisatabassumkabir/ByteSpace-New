import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

export const SecondaryCTA: React.FC = () => {
  return (
    <section className="relative bg-brand-600 text-white overflow-hidden bg-hero-grid py-24 lg:py-36 border-y border-brand-500/20">
      
      {/* Decorative SVGs and Images for the background elements */}
      
      {/* Top Left: Huge Neon Spiral & Small White Spring */}
      <img
        src="/images/cta-neon-spiral-1.png"
        alt=""
        className="absolute -top-16 -left-12 lg:top-[0%] lg:left-[0%] w-48 lg:w-[300px] animate-float pointer-events-none drop-shadow-2xl z-10"
      />
      <img
        src="/images/white-spiral-1.png"
        alt=""
        className="absolute top-[20%] left-[12%] lg:top-[10%] lg:left-[10%] w-16 lg:w-[200px] animate-float-slow pointer-events-none drop-shadow-xl z-0 -rotate-12"
      />

      {/* Bottom Left: White Cone & Neon Torus */}
      <img
        src="/images/cta-white-cone.png"
        alt=""
        className="absolute bottom-[10%] left-[-2%] lg:bottom-[10%] lg:left-[0%] w-32 lg:w-48 animate-float pointer-events-none drop-shadow-2xl z-10"
      />
      <img
        src="/images/cta-neon-torus.png"
        alt=""
        className="absolute -bottom-10 left-[10%] lg:-bottom-3 lg:left-[8%] w-36 lg:w-[450px] animate-float-slow pointer-events-none drop-shadow-2xl z-0"
      />

      {/* Top Right: Neon Pyramid & Huge White Cylinder */}
      <img
        src="/images/cta-neon-pyramid.png"
        alt=""
        className="absolute top-[5%] right-[25%] lg:top-[5%] lg:right-[15%] w-24 lg:w-[250px] animate-float-slow pointer-events-none drop-shadow-2xl z-10"
      />
      <img
        src="/images/cta-white-cylinder.png"
        alt=""
        className="absolute -top-[-1%] -right-16 lg:-top-35 lg:-right-10 w-56 lg:w-[320px] animate-float pointer-events-none drop-shadow-2xl z-0"
      />

      {/* Bottom Right: Neon Spring */}
      <img
        src="/images/cta-neon-spiral-2.png"
        alt=""
        className="absolute -bottom-4 right-[5%] lg:-bottom-[2%] lg:right-[5%] w-32 lg:w-[350px] animate-float pointer-events-none drop-shadow-2xl z-10"
      />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        
        <h2 className="text-[32px] sm:text-[40px] lg:text-[46px] font-display font-bold tracking-tight leading-[1.2] max-w-3xl mx-auto drop-shadow-sm">
          Unlock Your Potential as a<br />Creator with ByteSpace
        </h2>

        <p className="mt-8 lg:mt-12 text-[14px] sm:text-[15px] lg:text-[16px] text-white/80 max-w-[850px] mx-auto font-normal leading-[2] sm:leading-[2.2] lg:leading-[2.4]">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and join a community of over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>

        <div className="flex items-center justify-center pt-10 lg:pt-14">
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
