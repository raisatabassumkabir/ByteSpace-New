import React from 'react';
import { Check, Star, BarChart2 } from 'lucide-react';


export const FeatureHighlights: React.FC = () => {
  const creatorPerks = [
    'Share Your Expertise',
    'Monetize Your Passion',
    'Flexibility and Autonomy',
    'Build a Community',
  ];

  return (
    <section id="about" className="relative py-16 lg:py-32 overflow-hidden bg-slate-50/50">
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">
        {/* Top Left Neon Green Glow (Behind the writing) */}
        <div className="absolute -top-40 -left-40 w-[900px] h-[900px] rounded-full bg-[#B9FF00]/30 blur-[120px]" />
        {/* Middle Left Pale Blue */}
        <div className="absolute top-[30%] -left-40 w-[800px] h-[800px] rounded-full bg-brand-200/30 blur-[120px]" />
        {/* Bottom Left Neon Green */}
        <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] rounded-full bg-[#B9FF00]/20 blur-[120px]" />
        {/* Bottom Right Pale Blue */}
        <div className="absolute -bottom-40 -right-40 w-[800px] h-[800px] rounded-full bg-brand-300/20 blur-[120px]" />
      </div>

      {/* Mobile Background Gradient matching Figma */}
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-[#eafc83]/80 via-[#f4fde1]/60 to-transparent block lg:hidden pointer-events-none" />

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">
        
        {/* =========================================
            1. CUSTOM MOBILE LAYOUT (block lg:hidden)
        ========================================= */}
        <div className="block lg:hidden space-y-16">
          {/* Row 1 Mobile */}
          <div>
            <div className="text-left w-full">
              <h2 className="text-[28px] sm:text-[36px] font-bold leading-[1.1] text-slate-900 tracking-tight">
                Your Path to Professional
                <br />Growth Starts Here!
              </h2>
              <p className="text-[14px] text-slate-500 font-normal leading-[1.6] mt-4">
                Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
              </p>
              
              <div className="flex items-center justify-between pt-8 px-2">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#003be2] tracking-tight">12K</div>
                  <div className="text-[13px] text-slate-500 font-medium mt-0.5">Students</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#003be2] tracking-tight">70+</div>
                  <div className="text-[13px] text-slate-500 font-medium mt-0.5">Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#003be2] tracking-tight">16</div>
                  <div className="text-[13px] text-slate-500 font-medium mt-0.5">Creators</div>
                </div>
              </div>
            </div>

            {/* Main Image with Faded Bottom & Figma Cards */}
            <div className="mt-8">
              <div className="flex justify-center w-full relative px-4">
                <img
                  src="/images/student-hero-portrait.png"
                  alt="Student learning on ByteSpace"
                  className="relative z-10 w-full max-w-[340px] h-auto object-contain object-bottom drop-shadow-[0_20px_25px_rgba(0,0,0,0.15)]"
                  style={{ maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)', WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)' }}
                />
              </div>

              {/* Solid White Figma Cards - Stacked */}
              <div className="relative z-20 mt-2 px-4 w-full max-w-sm mx-auto flex flex-col gap-3">
                <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-[24px] p-5 text-left flex items-center justify-between w-full">
                  <div>
                    <h4 className="text-slate-900 font-bold text-[15px] tracking-tight">Learn Figma</h4>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mt-1.5">BY PUREPEARL STUDIO</p>
                  </div>
                  <div className="text-[#003be2] font-bold text-[22px] tracking-tight">$25</div>
                </div>
                
                <div className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-[24px] p-5 pb-6 text-left w-full">
                  <div className="flex justify-between items-end mb-4">
                    <span className="text-slate-900 font-medium text-[15px] tracking-tight block">Learning Progress</span>
                    <div className="text-black font-bold text-2xl leading-none tracking-tight">55%</div>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-neon h-full rounded-full w-[55%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 Mobile */}
          <div>
            <div className="text-left w-full">
              <h2 className="text-4xl font-bold leading-[1.1] text-slate-900 tracking-tight">
                Create & Manage
                <br />Courses Easily.
              </h2>
              <p className="text-base text-slate-500 font-normal leading-[1.7] mt-6">
                <strong className="text-slate-900 font-bold">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
              </p>
              
              <ul className="space-y-4 pt-8">
                {creatorPerks.map((perk) => (
                  <li key={perk} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-600 flex items-center justify-center text-white shrink-0 shadow-sm">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-[15px] font-bold text-slate-800">{perk}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <div className="flex justify-center w-full relative px-4">
                <img
                  src="/images/female-student-tablet.png"
                  alt="Creator managing educational courses on ByteSpace"
                  className="relative z-10 w-full max-w-[340px] h-auto object-contain object-bottom drop-shadow-[0_20px_25px_rgba(0,0,0,0.15)]"
                  style={{ maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)', WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)' }}
                />
              </div>

              {/* Solid Blue Figma Cards */}
              <div className="relative z-20 mt-4 px-4 w-full max-w-sm mx-auto grid grid-cols-2 gap-3">
                <div className="bg-[#003be2] rounded-[24px] p-5 text-left text-white">
                  <div className="text-[10px] font-semibold text-white/80 uppercase tracking-widest">Total Revenue</div>
                  <div className="text-[26px] font-bold text-white mt-1.5 tracking-tight">$120.29</div>
                </div>
                
                <div className="bg-[#003be2] rounded-[24px] p-5 text-left text-white">
                  <div className="text-[10px] font-semibold text-white/80 uppercase tracking-widest">Year to Date</div>
                  <div className="text-[26px] font-bold text-white mt-1.5 tracking-tight">$1,200.38</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            2. CUSTOM DESKTOP LAYOUT (hidden lg:block)
        ========================================= */}
        <div className="hidden lg:block space-y-20">
          
          {/* Row 1: Text Left, Image Right */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 xl:gap-[200px] 2xl:gap-[250px]">
            {/* Left Column: Heading, Paragraph, Statistics */}
            <div className="text-left w-full lg:max-w-[450px] xl:max-w-[574px] shrink-0">
              <h2 className="text-[48px] lg:text-[56px] font-bold leading-[1.1] text-slate-900 tracking-tight">
                <span className="whitespace-nowrap">Your Path to Professional</span>
                <br />Growth Starts Here!
              </h2>

              <p className="text-[17px] text-slate-500 font-normal leading-[1.7] mt-14">
                Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
              </p>

              {/* Three statistics row: 12K Students, 70+ Courses, 16 Creators */}
              <div className="flex items-center gap-14 pt-8">
                <div>
                  <div className="text-5xl font-bold text-brand-600 tracking-tight">
                    12K
                  </div>
                  <div className="text-sm text-slate-500 font-medium mt-1.5">Students</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-brand-600 tracking-tight">
                    70+
                  </div>
                  <div className="text-sm text-slate-500 font-medium mt-1.5">Courses</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-brand-600 tracking-tight">
                    16
                  </div>
                  <div className="text-sm text-slate-500 font-medium mt-1.5">Creators</div>
                </div>
              </div>
            </div>

            {/* Right Column: Image and UI Cards wrapper */}
            <div className="relative flex justify-center w-full lg:max-w-[450px] xl:max-w-[621px] mx-auto shrink-0 mt-12 lg:mt-0">
              
              {/* Neon Green Squiggle / Spring */}
              <div className="absolute lg:right-[2%] lg:top-[10%] z-40 pointer-events-none animate-float-slow">
                <img src="/images/feature-spiral-1.png" alt="Neon Spiral" className="lg:w-[220px] h-auto drop-shadow-2xl object-contain" />
              </div>              

              {/* Main Image */}
              <img
                src="/images/student-hero-portrait.png"
                alt="Student learning on ByteSpace"
                className="relative z-20 w-full max-w-full h-auto object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.15)] select-none pointer-events-none lg:scale-[1.30] origin-top mx-auto"
              />

              {/* Floating Element 1: Course Card */}
              <div className="absolute lg:top-[1%] lg:left-[-15%] z-10 bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl p-6 lg:w-[380px] text-left animate-float">
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-gray-100">
                  <img
                    src="/images/wireframe-sketches.png"
                    alt="Course Preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 flex items-center gap-1 text-[11px] font-bold text-white/95">
                    <span className="bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full">
                      17 Lessons
                    </span>
                    <span className="bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full">
                      2 hours 16 mins
                    </span>
                  </div>
                </div>

                <div className="mt-5 space-y-2 px-1 text-left">
                  <h4 className="text-base font-bold text-slate-900 leading-tight">
                    Learn Figma from scratch
                  </h4>
                  <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide">
                    by <span className="text-brand-600 font-bold">purepearl studio</span>
                  </p>
                  <div className="flex items-center lg:justify-between pt-3">
                    <span className="inline-flex items-center justify-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-slate-100 text-slate-600">
                      <BarChart2 className="w-3.5 h-3.5 text-brand-600" /> Beginner
                    </span>
                    <div className="text-lg font-bold text-brand-600">
                      $25<span className="text-[11px] font-medium text-slate-400">/lifetime</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Element 2: Learning Progress (55%) */}
              <div className="absolute lg:bottom-[35%] lg:right-[5%] z-30 bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-3xl p-7 lg:w-[260px] text-left animate-float-slow">
                <span className="text-slate-900 font-medium text-[17px] tracking-tight block">
                  Learning Progress
                </span>
                <div className="text-black font-bold text-5xl mt-2 leading-none tracking-tight">
                  55%
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3 mt-3 overflow-hidden">
                  <div className="bg-[#B9FF00] h-full rounded-full w-[55%] transition-all duration-700 ease-out" />
                </div>
              </div>

            </div>
          </div>

          {/* Row 2: Image Left, Text Right */}
          <div className="flex items-center justify-between gap-12 lg:gap-8 xl:gap-[200px] 2xl:gap-[250px] pt-8">
            {/* Left Column: Image and Cards Container */}
            <div className="relative flex justify-center w-full lg:max-w-[450px] xl:max-w-[621px] mx-auto shrink-0 mt-0">
              
              {/* Neon Green Squiggle / Spring */}
              <div className="absolute lg:right-[2%] lg:top-[20%] z-30 pointer-events-none animate-float-slow">
                <img src="/images/feature-spiral-2.png" alt="Neon Spiral" className="lg:w-[220px] h-auto drop-shadow-xl object-contain" />
              </div>

              {/* Image of the female creator */}
              <img
                src="/images/female-student-tablet.png"
                alt="Creator managing educational courses on ByteSpace"
                className="relative z-20 w-full max-w-full h-auto object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.15)] select-none pointer-events-none lg:translate-x-16 mx-auto"
              />

              {/* Floating Element 1: Two Blue Revenue Chart Cards */}
              <div className="absolute lg:top-[10%] lg:left-[0%] z-10 flex flex-col items-start space-y-4 animate-float lg:w-auto">
                {/* Total Revenue Card */}
                <div className="bg-gradient-to-br from-brand-600 to-brand-700 border border-white/10 shadow-lg shadow-brand-900/20 rounded-3xl p-5 text-left lg:w-[300px]">
                  <div className="text-xs font-semibold text-brand-100 uppercase tracking-wide">Total Revenue</div>
                  <div className="text-[11px] text-brand-200 mt-0.5">July 1-28</div>
                  <div className="text-3xl font-bold text-white mt-1.5 tracking-tight">
                    $120.29
                  </div>
                  <div className="w-full bg-brand-800/60 rounded-full h-2 mt-3 overflow-hidden">
                    <div className="bg-[#B9FF00] h-full rounded-full w-[70%]" />
                  </div>
                </div>

                {/* Year to Date Card */}
                <div className="bg-gradient-to-br from-brand-600 to-brand-700 border border-white/10 shadow-lg shadow-brand-900/20 rounded-3xl p-5 text-left lg:w-[190px]">
                  <div className="text-xs font-semibold text-brand-100 uppercase tracking-wide">Year to Date</div>
                  <div className="text-[11px] text-brand-200 mt-0.5">2023</div>
                  <div className="text-3xl font-bold text-white mt-1.5 tracking-tight">
                    $1,200.38
                  </div>
                  <div className="mt-2.5 flex justify-start">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#B9FF00] text-slate-900 font-bold text-[11px]">
                      +12%
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Element 2: Happy Students Card */}
              <div className="absolute lg:bottom-[30%] lg:right-[0%] z-30 bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[20px] p-5 text-left lg:min-w-[260px] lg:w-auto animate-float-slow">
                <h4 className="text-slate-900 font-medium text-[17px] tracking-tight">
                  Happy Students
                </h4>
                <div className="flex items-center justify-start gap-1.5 text-[15px] font-medium mt-0.5">
                  <span className="text-slate-700">4.5</span>
                  <span className="text-slate-400 font-normal">(240)</span>
                  <Star className="w-4 h-4 fill-[#CCFF00] text-[#CCFF00] inline -mt-0.5" />
                </div>
                {/* Overlapping Avatar Stack */}
                <div className="flex items-center justify-start mt-3">
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
            
            {/* Right Column: Heading, Paragraph, 4 Checklist Items */}
            <div className="text-left w-full lg:max-w-[450px] xl:max-w-[574px] shrink-0">
              <h2 className="lg:text-[56px] font-bold leading-[1.1] text-slate-900 tracking-tight">
                Create & Manage
                <br />Courses Easily.
              </h2>

              <p className="lg:text-[17px] text-slate-500 font-normal leading-[1.7] mt-14">
                <strong className="text-slate-900 font-bold">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
              </p>

              {/* Checklist with Blue Circular Checkmark Icons */}
              <ul className="space-y-4 pt-4">
                {creatorPerks.map((perk) => (
                  <li key={perk} className="flex items-center gap-4">
                    <div className="lg:w-7 lg:h-7 rounded-full bg-brand-600 flex items-center justify-center text-white shrink-0 shadow-sm">
                      <Check className="lg:w-4 lg:h-4 stroke-[3]" />
                    </div>
                    <span className="lg:text-[17px] font-bold text-slate-800">
                      {perk}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
