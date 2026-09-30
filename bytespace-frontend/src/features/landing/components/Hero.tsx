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
    <section className="relative w-full overflow-x-clip overflow-y-visible bg-brand-600 bg-hero-grid text-white pt-4 md:pt-8 pb-0">
      {/* 3D Abstract Shapes pinned to far screen edges - scaling down fluidly for mobile */}
      {/* 1. Top Left Neon Spring */}
      <div className="absolute -left-10 lg:-left-[8%] top-[20%] lg:top-[-5%] pointer-events-none z-[5] hidden lg:block animate-float-slow">
        <img src="/images/neon-spiral.png" alt="Neon Spiral" className="w-16 sm:w-32 lg:w-[450px] h-auto drop-shadow-2xl object-contain" />
      </div>
      {/* 2. Mid Left White Spring */}
      <div className="absolute left-[8%] lg:left-[12%] top-[25%] pointer-events-none z-[5] hidden lg:block animate-float">
        <img src="/images/white-spiral-1.png" alt="White Spiral" className="w-10 sm:w-16 lg:w-[220px] h-auto drop-shadow-xl object-contain" />
      </div>
      {/* 3. Bottom Left White Torus */}
      <div className="absolute left-[-8%] lg:left-[9%] bottom-[15%] lg:bottom-[2%] pointer-events-none z-[15] hidden lg:block animate-float">
        <img src="/images/hero-white-torus.png" alt="White Torus" className="w-16 sm:w-32 lg:w-[380px] h-auto drop-shadow-2xl object-contain" />
      </div>
      {/* 4. Top Right Neon Cylinder */}
      <div className="absolute -right-10 lg:-right-[9%] top-[15%] lg:top-[2%] pointer-events-none z-[5] hidden lg:block animate-float-slow">
        <img src="/images/neon-cylinder.png" alt="Neon Cylinder" className="w-16 sm:w-32 lg:w-[400px] h-auto drop-shadow-2xl object-contain" />
      </div>
      {/* 5. Mid Right White Pyramid */}
      <div className="absolute right-[8%] lg:right-[12%] top-[40%] lg:top-[30%] pointer-events-none z-[5] hidden lg:block animate-float">
        <img src="/images/white-pyramid.png" alt="White Pyramid" className="w-12 sm:w-20 lg:w-[200px] h-auto drop-shadow-xl object-contain rotate-[3deg]" />
      </div>
      {/* 6. Bottom Right White Spring */}
      <div className="absolute right-[-8%] lg:-right-[-6%] bottom-[20%] lg:bottom-[0%] pointer-events-none z-[20] hidden lg:block animate-float">
        <img src="/images/white-spiral-2.png" alt="White Spiral" className="w-14 sm:w-24 lg:w-[380px] h-auto drop-shadow-2xl object-contain" />
      </div>

      {/* Main Content & Search Wrapper */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 pb-16 lg:pb-0">
        
        {/* =========================================
            1. CUSTOM MOBILE LAYOUT (block lg:hidden)
            Clean, vertical flow without absolute cards
        ========================================= */}
        <div className="block lg:hidden">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl font-sans font-bold tracking-tight text-white leading-[1.12]">
            Get Access to Hundreds
            <br />
            Courses Available
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-sm sm:text-base text-white/85 max-w-lg mx-auto font-normal leading-relaxed">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          {/* Search Bar */}
          <form
            onSubmit={handleSearchSubmit}
            className="mt-8 w-full max-w-sm mx-auto flex flex-col gap-3"
          >
            <div className="flex items-center w-full bg-white rounded-full px-6 py-3.5 shadow-2xl focus-within:ring-2 focus-within:ring-neon transition-all">
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
              className="bg-neon hover:bg-[#b8e600] text-slate-950 font-bold text-base px-8 py-3.5 rounded-full shadow-lg shadow-black/10 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 w-full"
            >
              Search
            </button>
          </form>

          {/* Main Image with Faded Bottom & Figma Bento Grid */}
          <div className="mt-8">
            <div className="flex justify-center w-full relative px-4">
              <img
                src="/images/student-hero-portrait.png"
                alt="ByteSpace student smiling with headphones and laptop"
                className="relative z-10 w-full max-w-[340px] h-auto object-contain object-bottom drop-shadow-[0_20px_25px_rgba(0,0,0,0.15)]"
                loading="eager"
                style={{ maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)', WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)' }}
              />
            </div>

            {/* Solid White Figma Grid - No Overlap */}
            <div className="relative z-20 mt-4 px-4 w-full max-w-sm mx-auto grid grid-cols-2 gap-3">
              {/* Box 1: UI/UX Design */}
              <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-[24px] p-5 text-left flex flex-col justify-center">
                <h4 className="text-slate-900 font-bold text-[15px] tracking-tight">UI/UX Design</h4>
                <p className="text-slate-400 text-[11px] uppercase font-bold tracking-wider mt-1.5">
                  200 Courses
                </p>
              </div>
              
              {/* Box 2: Happy Students */}
              <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-[24px] p-5 text-left flex flex-col justify-center">
                <h4 className="text-slate-900 font-bold text-[15px] tracking-tight">Happy Students</h4>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <Star className="w-4 h-4 fill-[#CCFF00] text-[#CCFF00]" />
                  <span className="text-slate-900 font-bold text-[13px]">4.5</span>
                  <span className="text-slate-400 text-[11px] font-medium">(240)</span>
                </div>
              </div>

              {/* Box 3: Progress - Full Width */}
              <div className="col-span-2 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-[24px] p-5 pb-6 text-left flex items-center justify-between">
                <span className="text-slate-900 font-medium text-[15px] tracking-tight">
                  Learning Progress
                </span>
                <div className="flex items-center gap-4 w-[50%]">
                  <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-neon h-full rounded-full w-[55%]" />
                  </div>
                  <div className="text-black font-bold text-2xl leading-none tracking-tight">
                    55%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            2. CUSTOM DESKTOP LAYOUT (hidden lg:block)
            The exact complex overlapping design
        ========================================= */}
        <div className="hidden lg:block">
          <h1 className="text-[68px] font-sans font-bold tracking-tight text-white leading-[1.12]">
            Get Access to Hundreds
            <br />
            Courses Available
          </h1>

          <p className="mt-4 text-lg text-white/85 max-w-4xl mx-auto font-normal leading-relaxed">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          <form
            onSubmit={handleSearchSubmit}
            className="mt-6 max-w-2xl mx-auto flex items-center gap-3 justify-center"
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
              className="bg-neon hover:bg-[#b8e600] text-slate-950 font-bold text-base px-8 py-3.5 rounded-full shadow-lg shadow-black/10 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 shrink-0"
            >
              Search
            </button>
          </form>

          {/* Desktop Aspect Ratio Container */}
          <div className="relative w-full max-w-6xl mx-auto mt-16 aspect-[2.25/1] z-10">
            {/* Desktop SVG Arch */}
            <div className="absolute inset-0 w-full h-full mx-auto z-0">
              <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full drop-shadow-[0_0_80px_rgba(204,255,0,0.30)]">
                <path d="M 0 50 A 50 50 0 0 1 100 50 L 67 50 A 17 17 0 0 0 33 50 Z" fill="#ccff00" />
              </svg>
            </div>

            <div className="absolute inset-0 w-full h-full z-10">
              {/* Boy Image */}
              <img
                src="/images/student-hero-portrait.png"
                alt="ByteSpace student smiling with headphones and laptop"
                className="absolute left-1/2 -translate-x-[46%] bottom-[-30.5%] z-10 w-auto h-[145%] object-contain object-bottom pointer-events-auto drop-shadow-[0_20px_25px_rgba(0,0,0,0.15)]"
                loading="eager"
              />

              {/* Card 1: UI/UX Design */}
              <div className="absolute left-[18%] top-[15%] z-20 bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-4 text-left animate-float w-[220px]">
                <h4 className="text-slate-900 font-bold text-sm tracking-tight">UI/UX Design</h4>
                <p className="text-slate-400 text-xs font-semibold uppercase tracking-wide mt-1">
                  200 Courses &bull; 1000+ Students
                </p>
              </div>

              {/* Card 2: Learning Progress 55% */}
              <div className="absolute right-[18%] top-[15%] z-20 bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-6 text-left animate-float-slow w-[260px]">
                <span className="text-slate-900 font-medium text-[17px] tracking-tight block">
                  Learning Progress
                </span>
                <div className="text-black font-bold text-4xl mt-2 leading-none tracking-tight">
                  55%
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3 mt-3 overflow-hidden">
                  <div className="bg-neon h-full rounded-full w-[55%] transition-all duration-700 ease-out" />
                </div>
              </div>

              {/* Card 3: Happy Students */}
              <div className="absolute left-[15%] bottom-[15%] z-20 bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-3.5 text-left animate-float w-[220px]">
                <h4 className="text-slate-900 font-medium text-base tracking-tight">Happy Students</h4>
                <div className="flex items-center justify-start gap-1.5 text-sm font-medium mt-0">
                  <span className="text-slate-700">4.5</span>
                  <span className="text-slate-400 font-normal">(240)</span>
                  <Star className="w-3.5 h-3.5 fill-[#CCFF00] text-[#CCFF00] inline -mt-0.5" />
                </div>
                <div className="flex items-center justify-start mt-1.5">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Student 1" className="w-8 h-8 rounded-full object-cover shadow-sm" />
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Student 2" className="w-8 h-8 rounded-full object-cover shadow-sm -ml-2.5 relative z-[1]" />
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="Student 3" className="w-8 h-8 rounded-full object-cover shadow-sm -ml-2.5 relative z-[2]" />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Student 4" className="w-8 h-8 rounded-full object-cover shadow-sm -ml-2.5 relative z-[3]" />
                  <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80" alt="Student 5" className="w-8 h-8 rounded-full object-cover shadow-sm -ml-2.5 relative z-[4]" />
                  <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&q=80" alt="Student 6" className="w-8 h-8 rounded-full object-cover shadow-sm -ml-2.5 relative z-[5]" />
                  <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=100&q=80" alt="Student 7" className="w-8 h-8 rounded-full object-cover shadow-sm -ml-2.5 relative z-[6]" />
                  <div className="w-8 h-8 rounded-full bg-[#CCFF00] text-slate-900 font-bold text-[10px] flex items-center justify-center -ml-2.5 relative z-[7] shadow-sm">
                    2K+
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
