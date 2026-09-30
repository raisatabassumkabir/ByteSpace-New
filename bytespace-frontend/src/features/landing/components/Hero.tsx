import React, { useState } from 'react';
import { Search, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useUIStore } from '@/store';

export const Hero: React.FC = () => {
  const { searchQuery, setSearchQuery } = useUIStore();
  const [localQuery, setLocalQuery] = useState(searchQuery);
  const navigate = useNavigate();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(localQuery);
    
    if (localQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(localQuery)}`);
    } else {
      navigate('/search');
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-brand-600 bg-hero-grid text-white pt-4 md:pt-8 pb-0">
      {/* 3D Abstract Shapes pinned to far screen edges */}
      {/* 1. Top Left Neon Spring */}
      <div className="absolute -left-10 lg:-left-[5%] top-[15%] lg:top-[-5%] pointer-events-none z-10 hidden sm:block animate-float-slow">
        <img src="/images/neon-spiral.png" alt="Neon Spiral" className="w-48 sm:w-64 lg:w-[450px] h-auto drop-shadow-2xl object-contain" />
      </div>
      {/* 2. Mid Left White Spring */}
      <div className="absolute left-[8%] lg:left-[16%] top-[20%] pointer-events-none z-10 hidden md:block animate-float">
        <img src="/images/white-spiral-1.png" alt="White Spiral" className="w-20 sm:w-24 lg:w-[220px] h-auto drop-shadow-xl object-contain" />
      </div>
      {/* 3. Bottom Left White Torus */}
      <div className="absolute -left-0 lg:-left-[-8%] bottom-[-5%] sm:bottom-0 lg:bottom-[2%] pointer-events-none z-30 hidden sm:block animate-float">
        <img src="/images/hero-white-torus.png" alt="White Torus" className="w-48 sm:w-56 lg:w-[380px] h-auto drop-shadow-2xl object-contain" />
      </div>
      {/* 4. Top Right Neon Cylinder */}
      <div className="absolute -right-10 lg:-right-[9%] top-[15%] lg:top-[2%] pointer-events-none z-10 hidden sm:block animate-float-slow">
        <img src="/images/neon-cylinder.png" alt="Neon Cylinder" className="w-48 sm:w-64 lg:w-[400px] h-auto drop-shadow-2xl object-contain" />
      </div>
      {/* 5. Mid Right White Pyramid */}
      <div className="absolute right-[8%] lg:right-[12%] top-[40%] lg:top-[30%] pointer-events-none z-10 hidden md:block animate-float">
        <img src="/images/white-pyramid.png" alt="White Pyramid" className="w-32 sm:w-40 lg:w-[220px] h-auto drop-shadow-xl object-contain rotate-[3deg]" />
      </div>
      {/* 6. Bottom Right White Spring */}
      <div className="absolute -right-4 lg:-right-[-10%] bottom-[5%] lg:bottom-[0%] pointer-events-none z-30 hidden sm:block animate-float">
        <img src="/images/white-spiral-2.png" alt="White Spiral" className="w-32 sm:w-40 lg:w-[380px] h-auto drop-shadow-2xl object-contain" />
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
          className="mt-6 max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-3 justify-center"
        >
          <div className="flex flex-1 items-center w-full bg-white rounded-full px-6 py-3.5 shadow-2xl focus-within:ring-2 focus-within:ring-neon transition-all">
            <Search className="w-5 h-5 text-slate-400 shrink-0 mr-3" />
            <input
              type="text"
              placeholder="Course, topic, creator"
              value={localQuery}
              onChange={(e) => setLocalQuery(e.target.value)}
              className="w-full bg-transparent text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-neon hover:bg-[#b8e600] text-slate-950 font-bold text-base px-8 py-3.5 rounded-full shadow-2xl transition-all active:scale-95 shrink-0 w-full sm:w-auto"
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
           * 2. THE GREEN CIRCLE ARCH — Natively a Half-Ring (SVG).
           *    - using an SVG path to perfectly render the donut shape across all browsers
           *    - sits completely flush on bottom-0 with zero overflow or clipping needed
           */}
          <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="absolute left-1/2 -translate-x-1/2 bottom-[-20px] sm:bottom-[-30px] md:bottom-[-40px] lg:bottom-[-50px] xl:bottom-[-60px] w-[600px] h-[280px] sm:w-[730px] sm:h-[350px] md:w-[900px] md:h-[440px] lg:w-[1160px] lg:h-[580px] xl:w-[1260px] xl:h-[620px] z-0 drop-shadow-[0_0_80px_rgba(204,255,0,0.30)]">
            <path d="M 0 50 A 50 50 0 0 1 100 50 L 70 50 A 20 20 0 0 0 30 50 Z" fill="#ccff00" />
          </svg>

          {/*
           * 3. THE BOY IMAGE
           *    - Sits flush on bottom-0
           *    - Scaled to fit perfectly inside the half-circle (head below the top edge)
           */}
          <img
            src="/images/student-hero-portrait.png"
            alt="ByteSpace student smiling with headphones and laptop"
            className="absolute left-1/2 -translate-x-[46%] bottom-[-90px] sm:bottom-[-90px] md:bottom-[-120px] lg:bottom-[-150px] xl:bottom-[-180px] z-10 h-[400px] sm:h-[480px] md:h-[600px] lg:h-[780px] xl:h-[840px] w-auto max-w-none object-contain object-bottom pointer-events-auto"
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
