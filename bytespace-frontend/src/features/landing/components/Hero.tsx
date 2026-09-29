import React, { useState } from 'react';
import { Search, Star } from 'lucide-react';
import {
  Neon3DSpring,
  White3DSpring,
  White3DTorus,
  White3DPyramid,
  Neon3DCylinder,
} from '@/assets/illustrations/DecorativeShapes';
import { useUIStore } from '@/store';

export const Hero: React.FC = () => {
  const { searchQuery, setSearchQuery } = useUIStore();
  const [localQuery, setLocalQuery] = useState(searchQuery);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(localQuery);
    const element = document.getElementById('courses');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-brand-600 bg-hero-grid text-white pt-4 md:pt-8 pb-0">
      {/* 3D Abstract Shapes pinned to far screen edges */}
      <div className="absolute -left-3 sm:left-2 lg:left-6 top-[20%] pointer-events-none z-10 hidden sm:block animate-float-slow">
        <Neon3DSpring className="w-24 sm:w-32 lg:w-40 h-auto drop-shadow-2xl" />
      </div>
      <div className="absolute left-6 sm:left-12 lg:left-20 top-[50%] pointer-events-none z-10 hidden md:block -rotate-12 animate-float">
        <White3DSpring className="w-16 sm:w-20 lg:w-26 h-auto drop-shadow-xl" />
      </div>
      <div className="absolute -left-6 sm:-left-2 lg:left-4 bottom-2 sm:bottom-4 pointer-events-none z-10 hidden sm:block animate-float">
        <White3DTorus className="w-36 sm:w-48 lg:w-64 h-auto drop-shadow-2xl" />
      </div>
      <div className="absolute -right-6 sm:right-0 lg:right-6 top-[18%] pointer-events-none z-10 hidden sm:block animate-float-slow">
        <Neon3DCylinder className="w-28 sm:w-38 lg:w-48 h-auto drop-shadow-2xl" />
      </div>
      <div className="absolute right-8 sm:right-14 lg:right-22 top-[44%] pointer-events-none z-10 hidden md:block rotate-12 animate-float">
        <White3DPyramid className="w-18 sm:w-24 lg:w-32 h-auto drop-shadow-xl" />
      </div>
      <div className="absolute -right-4 sm:right-2 lg:right-8 bottom-4 sm:bottom-6 pointer-events-none z-10 hidden sm:block animate-float">
        <White3DSpring className="w-24 sm:w-32 lg:w-42 h-auto drop-shadow-2xl" />
      </div>

      {/* Main Content & Search */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-sans font-bold tracking-tight text-white leading-[1.12]">
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>

        <p className="mt-4 text-sm sm:text-base md:text-lg text-white/85 max-w-2xl mx-auto font-normal leading-relaxed">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        <form
          onSubmit={handleSearchSubmit}
          className="mt-6 max-w-xl mx-auto bg-white rounded-full p-2 pl-6 flex items-center shadow-2xl border border-white/60 focus-within:ring-2 focus-within:ring-neon transition-all"
        >
          <Search className="w-5 h-5 text-slate-400 shrink-0 mr-3" />
          <input
            type="text"
            placeholder="Course, topic, creator"
            value={localQuery}
            onChange={(e) => setLocalQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-neon hover:bg-[#b8e600] text-slate-950 font-bold text-sm px-7 py-2.5 rounded-full transition-all active:scale-95 shadow-sm shrink-0"
          >
            Search
          </button>
        </form>

        {/*
         * 1. THE CENTERPIECE WRAPPER — Strict bounding box.
         *    - The height matches the half-circle height exactly, so it ends flush at the baseline
         */}
        <div className="relative w-full max-w-5xl mx-auto mt-6 sm:mt-8 h-[280px] sm:h-[350px] md:h-[440px] lg:h-[580px] xl:h-[620px] overflow-visible">

          {/*
           * 2. THE GREEN CIRCLE — Natively a Half-Circle.
           *    - using rounded-t-full and exactly half the height of the width
           *    - sits completely flush on bottom-0 with zero overflow or clipping needed
           */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[-20px] sm:bottom-[-30px] md:bottom-[-40px] lg:bottom-[-50px] xl:bottom-[-60px] w-[600px] h-[280px] sm:w-[730px] sm:h-[350px] md:w-[900px] md:h-[440px] lg:w-[1160px] lg:h-[580px] xl:w-[1260px] xl:h-[620px] rounded-t-full rounded-b-none bg-[#ccff00] shadow-[0_0_100px_rgba(204,255,0,0.30)] z-0" />

          {/*
           * 3. THE BOY IMAGE
           *    - Sits flush on bottom-0
           *    - Scaled to fit perfectly inside the half-circle (head below the top edge)
           */}
          <img
            src="/images/student-hero-portrait.png"
            alt="ByteSpace student smiling with headphones and laptop"
            className="absolute left-1/2 -translate-x-1/2 bottom-[-90px] sm:bottom-[-90px] md:bottom-[-120px] lg:bottom-[-150px] xl:bottom-[-180px] z-10 h-[400px] sm:h-[480px] md:h-[600px] lg:h-[780px] xl:h-[840px] w-auto max-w-none object-contain object-bottom pointer-events-auto"
            loading="eager"
          />

          {/*
           * 4. FLOATING UI CARDS — z-20, absolute, relative to wrapper.
           *    Independent of the boy image flow. Overlap both circle and blue grid.
           */}

          {/* Card 1: UI/UX Design — Middle-Left */}
          <div className="absolute left-[5%] sm:left-[9%] md:left-[13%] lg:left-[15%] top-[30%] sm:top-[32%] z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/80 min-w-[148px] sm:min-w-[180px] text-left animate-float">
            <h4 className="text-slate-900 font-bold text-xs sm:text-sm tracking-tight">UI/UX Design</h4>
            <p className="text-slate-400 text-[10px] sm:text-xs font-medium mt-1">
              200 Courses &bull; 1000+ Students
            </p>
          </div>

          {/* Card 2: Learning Progress 55% — Middle-Right */}
          <div className="absolute right-[5%] sm:right-[9%] md:right-[13%] lg:right-[15%] top-[32%] sm:top-[34%] z-20 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-2xl border border-white/80 min-w-[150px] sm:min-w-[190px] text-left animate-float-slow">
            <span className="text-slate-500 text-[10px] sm:text-xs font-semibold uppercase tracking-wider block">
              Learning Progress
            </span>
            <div className="text-slate-900 font-black text-2xl sm:text-3xl mt-1 leading-none tracking-tight">
              55%
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2 mt-2.5 overflow-hidden">
              <div className="bg-neon h-full rounded-full w-[55%] transition-all duration-700 ease-out" />
            </div>
          </div>

          {/* Card 3: Happy Students — Bottom-Left */}
          <div className="absolute left-[3%] sm:left-[7%] md:left-[11%] lg:left-[13%] bottom-[10%] sm:bottom-[12%] z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/80 text-left animate-float">
            <h4 className="text-slate-900 font-bold text-xs sm:text-sm tracking-tight">Happy Students</h4>
            <div className="flex items-center gap-1 text-[11px] sm:text-xs text-slate-500 font-semibold mt-0.5">
              <span>4.5</span>
              <span>(240)</span>
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400 inline" />
            </div>
            <div className="flex items-center mt-2.5">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" alt="Student 1" className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-sm" />
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" alt="Student 2" className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-sm -ml-2" />
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80" alt="Student 3" className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-sm -ml-2" />
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80" alt="Student 4" className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-sm -ml-2" />
              <div className="w-7 h-7 rounded-full border-2 border-white bg-neon text-slate-950 font-black text-[10px] flex items-center justify-center -ml-2 shadow-sm">
                2K+
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
