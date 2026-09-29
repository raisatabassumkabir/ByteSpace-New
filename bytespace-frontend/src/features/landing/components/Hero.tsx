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
      {/* 1. Top Left Neon Spring */}
      <div className="absolute -left-10 lg:-left-20 top-[15%] lg:top-[12%] pointer-events-none z-10 hidden sm:block -rotate-45 animate-float-slow">
        <Neon3DSpring className="w-32 sm:w-40 lg:w-56 h-auto drop-shadow-2xl" />
      </div>
      {/* 2. Mid Left White Spring */}
      <div className="absolute left-[8%] lg:left-[16%] top-[45%] pointer-events-none z-10 hidden md:block rotate-[30deg] animate-float">
        <White3DSpring className="w-20 sm:w-24 lg:w-28 h-auto drop-shadow-xl" />
      </div>
      {/* 3. Bottom Left White Torus */}
      <div className="absolute -left-12 lg:-left-24 bottom-[-5%] sm:bottom-0 lg:bottom-[2%] pointer-events-none z-10 hidden sm:block -rotate-[15deg] animate-float">
        <White3DTorus className="w-48 sm:w-56 lg:w-[320px] h-auto drop-shadow-2xl" />
      </div>
      {/* 4. Top Right Neon Cylinder */}
      <div className="absolute -right-10 lg:-right-20 top-[15%] lg:top-[10%] pointer-events-none z-10 hidden sm:block rotate-[25deg] animate-float-slow">
        <Neon3DCylinder className="w-32 sm:w-44 lg:w-64 h-auto drop-shadow-2xl" />
      </div>
      {/* 5. Mid Right White Pyramid */}
      <div className="absolute right-[8%] lg:right-[15%] top-[40%] pointer-events-none z-10 hidden md:block -rotate-[30deg] animate-float">
        <White3DPyramid className="w-24 sm:w-28 lg:w-36 h-auto drop-shadow-xl" />
      </div>
      {/* 6. Bottom Right White Spring */}
      <div className="absolute -right-4 lg:-right-8 bottom-[5%] lg:bottom-[10%] pointer-events-none z-10 hidden sm:block rotate-[60deg] animate-float">
        <White3DSpring className="w-32 sm:w-40 lg:w-52 h-auto drop-shadow-2xl" />
      </div>

      {/* Main Content & Search */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-sans font-bold tracking-tight text-white leading-[1.12]">
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>

        <p className="mt-4 text-sm sm:text-base md:text-lg text-white/85 max-w-4xl mx-auto font-normal leading-relaxed">
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
          <div className="absolute left-[5%] sm:left-[9%] md:left-[13%] lg:left-[10%] top-[30%] sm:top-[23%] z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/80 min-w-[148px] sm:min-w-[180px] text-left animate-float">
            <h4 className="text-slate-900 font-bold text-xs sm:text-sm tracking-tight">UI/UX Design</h4>
            <p className="text-slate-400 text-[10px] sm:text-xs font-medium mt-1">
              200 Courses &bull; 1000+ Students
            </p>
          </div>

          {/* Card 2: Learning Progress 55% — Middle-Right */}
          <div className="absolute right-[10%] sm:right-[5%] md:right-[15%] lg:right-[15%] top-[32%] sm:top-[30%] z-20 bg-white/95 backdrop-blur-md rounded-2xl p-5 sm:p-7 shadow-2xl border border-white/80 min-w-[220px] sm:min-w-[260px] text-left animate-float-slow">
            <span className="text-slate-900 font-medium text-[17px] tracking-tight block">
              Learning Progress
            </span>
            <div className="text-black font-bold text-3xl sm:text-4xl mt-2 leading-none tracking-tight">
              55%
            </div>
            <div className="w-full bg-slate-100 rounded-full h-3 mt-3 overflow-hidden">
              <div className="bg-neon h-full rounded-full w-[55%] transition-all duration-700 ease-out" />
            </div>
          </div>

          {/* Card 3: Happy Students — Bottom-Left */}
          <div className="absolute left-[-15%] sm:left-[5%] md:left-[11%] lg:left-[5%] bottom-[10%] sm:bottom-[20%] z-20 bg-white/95 backdrop-blur-md rounded-[20px] p-4 sm:p-5 shadow-2xl border border-white/80 min-w-[260px] text-left animate-float">
            <h4 className="text-slate-900 font-medium text-[17px] tracking-tight">Happy Students</h4>
            <div className="flex items-center gap-1.5 text-[15px] font-medium mt-0.5">
              <span className="text-slate-700">4.5</span>
              <span className="text-slate-400 font-normal">(240)</span>
              <Star className="w-4 h-4 fill-[#CCFF00] text-[#CCFF00] inline -mt-0.5" />
            </div>
            <div className="flex items-center mt-3">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Student 1" className="w-10 h-10 rounded-full object-cover shadow-sm" />
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Student 2" className="w-10 h-10 rounded-full object-cover shadow-sm -ml-3.5 relative z-[1]" />
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Student 3" className="w-10 h-10 rounded-full object-cover shadow-sm -ml-3.5 relative z-[2]" />
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Student 4" className="w-10 h-10 rounded-full object-cover shadow-sm -ml-3.5 relative z-[3]" />
              <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80" alt="Student 5" className="w-10 h-10 rounded-full object-cover shadow-sm -ml-3.5 relative z-[4]" />
              <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&q=80" alt="Student 6" className="w-10 h-10 rounded-full object-cover shadow-sm -ml-3.5 relative z-[5]" />
              <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=100&q=80" alt="Student 7" className="w-10 h-10 rounded-full object-cover shadow-sm -ml-3.5 relative z-[6]" />
              <div className="w-10 h-10 rounded-full bg-[#CCFF00] text-slate-900 font-bold text-xs flex items-center justify-center -ml-3.5 relative z-[7] shadow-sm">
                2K+
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
