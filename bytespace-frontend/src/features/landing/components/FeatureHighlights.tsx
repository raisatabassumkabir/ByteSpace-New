import React from 'react';
import { Check, Star, BarChart2 } from 'lucide-react';
import { Neon3DSpring } from '@/assets/illustrations/DecorativeShapes';

export const FeatureHighlights: React.FC = () => {
  const creatorPerks = [
    'Share Your Expertise',
    'Monetize Your Passion',
    'Flexibility and Autonomy',
    'Build a Community',
  ];

  return (
    <section id="about" className="relative py-20 lg:py-32 overflow-hidden bg-slate-50/50">
      {/* Background Gradients matching Figma */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Left Neon Green Glow (Behind the writing) */}
        <div className="absolute -top-40 -left-40 w-[900px] h-[900px] rounded-full bg-[#B9FF00]/30 blur-[120px]" />
        {/* Middle Left Pale Blue */}
        <div className="absolute top-[30%] -left-40 w-[800px] h-[800px] rounded-full bg-brand-200/30 blur-[120px]" />
        {/* Bottom Left Neon Green */}
        <div className="absolute -bottom-20 -left-20 w-[600px] h-[600px] rounded-full bg-[#B9FF00]/20 blur-[120px]" />
        {/* Bottom Right Pale Blue */}
        <div className="absolute -bottom-40 -right-40 w-[800px] h-[800px] rounded-full bg-brand-300/20 blur-[120px]" />
      </div>

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">
        
        {/* Row 1: Text Left, Image Right */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-[200px] xl:gap-[250px]">
          {/* Left Column: Heading, Paragraph, Statistics */}
          <div className="text-left w-full lg:max-w-[574px] shrink-0">
            <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.1] text-slate-900 tracking-tight">
              Your Path to Professional
              <br />Growth Starts Here!
            </h2>

            <p className="text-base lg:text-[17px] text-slate-500 font-normal leading-[1.7] mt-10 lg:mt-14">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            {/* Three statistics row: 12K Students, 70+ Courses, 16 Creators */}
            <div className="flex items-center gap-10 md:gap-14 pt-8">
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-brand-600 tracking-tight">
                  12K
                </div>
                <div className="text-sm text-slate-500 font-medium mt-1.5">Students</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-brand-600 tracking-tight">
                  70+
                </div>
                <div className="text-sm text-slate-500 font-medium mt-1.5">Courses</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-brand-600 tracking-tight">
                  16
                </div>
                <div className="text-sm text-slate-500 font-medium mt-1.5">Creators</div>
              </div>
            </div>
          </div>

          {/* Right Column: Exact 621px Image Container */}
          <div className="relative flex justify-center lg:justify-end w-full lg:max-w-[621px] shrink-0 mt-12 lg:mt-0">
            <div className="relative w-full flex justify-center">
              {/* Neon Green Squiggle / Spring */}
              <div className="absolute -right-4 lg:-right-8 top-[10%] z-0 pointer-events-none opacity-95 animate-float-slow">
                <Neon3DSpring className="w-40 sm:w-48 lg:w-64 h-auto drop-shadow-2xl" />
              </div>
              
              <img
                src="/images/student-hero-portrait.png"
                alt="Student learning on ByteSpace"
                className="relative z-20 w-[95%] lg:w-full h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] select-none pointer-events-none lg:scale-[1.30] origin-top"
              />

              {/* Floating Element 1: Course Card on top-left (Behind the boy) */}
              <div className="absolute top-[1%] left-[0%] lg:left-[-15%] z-10 bg-white rounded-2xl lg:rounded-3xl p-4 lg:p-6 shadow-[0_20px_40px_rgba(0,0,0,0.1)] w-[50%] lg:w-[380px] text-left animate-float">
                <div className="relative rounded-xl lg:rounded-2xl overflow-hidden aspect-[16/10] bg-gray-100">
                  <img
                    src="/images/wireframe-sketches.png"
                    alt="Course Preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 flex items-center gap-1 text-[9px] lg:text-[11px] font-bold text-white/95">
                    <span className="bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full">
                      17 Lessons
                    </span>
                    <span className="bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full">
                      2 hours 16 mins
                    </span>
                  </div>
                </div>

                <div className="mt-3 lg:mt-5 space-y-2 px-1">
                  <h4 className="text-sm lg:text-base font-bold text-slate-900 leading-tight">
                    Learn Figma from scratch
                  </h4>
                  <p className="text-[11px] lg:text-xs text-slate-400 font-medium">
                    by <span className="text-brand-600 font-bold">purepearl studio</span>
                  </p>
                  <div className="flex items-center justify-between pt-1.5 lg:pt-3">
                    <span className="inline-flex items-center gap-1.5 text-[10px] lg:text-xs font-bold px-3 py-1.5 rounded-full bg-slate-100 text-slate-600">
                      <BarChart2 className="w-3.5 h-3.5 text-brand-600" /> Beginner
                    </span>
                    <div className="text-sm lg:text-lg font-bold text-brand-600">
                      $25<span className="text-[9px] lg:text-[11px] font-medium text-slate-400">/lifetime</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Element 2: Learning Progress (55%) card on middle-right (In front of laptop) */}
              <div className="absolute bottom-[35%] right-[0%] lg:right-[5%] z-30 bg-white/95 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-5 lg:p-7 shadow-[0_20px_40px_rgba(0,0,0,0.1)] w-[50%] lg:w-[260px] text-left animate-float-slow">
                <span className="text-slate-900 font-medium text-[17px] tracking-tight block">
                  Learning Progress
                </span>
                <div className="text-black font-bold text-4xl lg:text-5xl mt-2 leading-none">
                  55%
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2.5 lg:h-3 mt-3 overflow-hidden">
                  <div className="bg-[#B9FF00] h-full rounded-full w-[55%] transition-all duration-700 ease-out" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Image Left, Text Right */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-[200px] xl:gap-[250px] pt-8">
          {/* Left Column: Exact 621px Image Container */}
          <div className="relative flex justify-center lg:justify-start w-full lg:max-w-[621px] shrink-0 order-2 lg:order-1 mt-12 lg:mt-0">
            <div className="relative w-full flex justify-center">
              {/* Neon Green Squiggle / Spring */}
              <div className="absolute right-[5%] lg:right-[15%] top-[30%] z-0 pointer-events-none opacity-95 animate-float-slow">
                <Neon3DSpring className="w-40 sm:w-48 lg:w-56 h-auto drop-shadow-xl" />
              </div>

              {/* Image of the female creator */}
              <img
                src="/images/female-student-tablet.png"
                alt="Creator managing educational courses on ByteSpace"
                className="relative z-20 w-[95%] lg:w-full h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] select-none pointer-events-none lg:translate-x-16"
              />

              {/* Floating Element 1: Two Blue Revenue Chart Cards on top-left (Behind her shoulder) */}
              <div className="absolute top-[10%] left-[0%] lg:left-[0%] z-10 flex flex-col space-y-3 lg:space-y-4 animate-float">
                {/* Total Revenue Card */}
                <div className="bg-brand-600 text-white rounded-2xl lg:rounded-3xl p-4 lg:p-5 shadow-2xl text-left w-[200px] lg:w-[300px]">
                  <div className="text-[10px] lg:text-xs font-bold text-brand-100 uppercase tracking-widest">Total Revenue</div>
                  <div className="text-[9px] lg:text-[11px] text-brand-200 mt-0.5">July 1-28</div>
                  <div className="text-2xl lg:text-3xl font-bold text-white mt-1.5 tracking-tight">
                    $120.29
                  </div>
                  <div className="w-full bg-brand-800/60 rounded-full h-1.5 lg:h-2 mt-3 overflow-hidden">
                    <div className="bg-[#B9FF00] h-full rounded-full w-[70%]" />
                  </div>
                </div>

                {/* Year to Date Card */}
                <div className="bg-brand-600 text-white rounded-2xl lg:rounded-3xl p-4 lg:p-5 shadow-2xl text-left w-[150px] lg:w-[190px]">
                  <div className="text-[10px] lg:text-xs font-bold text-brand-100 uppercase tracking-widest">Year to Date</div>
                  <div className="text-[9px] lg:text-[11px] text-brand-200 mt-0.5">2023</div>
                  <div className="text-2xl lg:text-3xl font-bold text-white mt-1.5 tracking-tight">
                    $1,200.38
                  </div>
                  <div className="mt-2.5">
                    <span className="inline-flex items-center px-2 lg:px-3 py-0.5 lg:py-1 rounded-full bg-[#B9FF00] text-slate-900 font-bold text-[9px] lg:text-[11px]">
                      +12%
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Element 2: Happy Students Card on bottom-right */}
              <div className="absolute bottom-[30%] right-[0%] lg:right-[0%] z-30 bg-white/95 backdrop-blur-xl rounded-[20px] p-4 sm:p-5 shadow-[0_20px_40px_rgba(0,0,0,0.1)] text-left min-w-[260px] animate-float-slow">
                <h4 className="text-slate-900 font-medium text-[17px] tracking-tight">
                  Happy Students
                </h4>
                <div className="flex items-center gap-1.5 text-[15px] font-medium mt-0.5">
                  <span className="text-slate-700">4.5</span>
                  <span className="text-slate-400 font-normal">(240)</span>
                  <Star className="w-4 h-4 fill-[#CCFF00] text-[#CCFF00] inline -mt-0.5" />
                </div>
                {/* Overlapping Avatar Stack */}
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

          {/* Right Column: Heading, Paragraph, 4 Checklist Items */}
          <div className="text-left w-full lg:max-w-[574px] shrink-0 order-1 lg:order-2">
            <h2 className="text-4xl lg:text-[56px] font-bold leading-[1.1] text-slate-900 tracking-tight">
              Create & Manage
              <br className="hidden sm:inline" />Courses Easily.
            </h2>

            <p className="text-base lg:text-[17px] text-slate-500 font-normal leading-[1.7] mt-10 lg:mt-14">
              <strong className="text-slate-900 font-bold">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            {/* Checklist with Blue Circular Checkmark Icons */}
            <ul className="space-y-4 pt-4">
              {creatorPerks.map((perk) => (
                <li key={perk} className="flex items-center gap-4">
                  <div className="w-6 h-6 lg:w-7 lg:h-7 rounded-full bg-brand-600 flex items-center justify-center text-white shrink-0 shadow-sm">
                    <Check className="w-3.5 h-3.5 lg:w-4 lg:h-4 stroke-[3]" />
                  </div>
                  <span className="text-[15px] lg:text-[17px] font-bold text-slate-800">
                    {perk}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
