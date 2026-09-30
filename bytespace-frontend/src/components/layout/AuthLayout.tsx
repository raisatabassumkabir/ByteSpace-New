import React from 'react';
import { Link } from 'react-router-dom';
import { ByteSpaceLogo } from '@/assets/icons/ByteSpaceLogo';

interface AuthLayoutProps {
  children: React.ReactNode;
  mode?: 'login' | 'register';
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  mode = 'login',
}) => {
  const isLogin = mode === 'login';

  return (
    <div className="min-h-screen w-full bg-[#003BE2] bg-hero-grid text-white relative flex flex-col justify-start overflow-x-hidden selection:bg-neon selection:text-surface-900">
      
      {/* Figma Header_Frame: x: 0, y: 0, h: 120. Logo at x: 122, y: 35, w: 171, h: 37 */}
      <header className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-28 pt-8 lg:pt-9 pb-2 flex items-center z-20">
        <Link to="/" className="inline-block hover:opacity-95 transition-opacity" title="ByteSpace Home">
          <ByteSpaceLogo variant="on-blue" />
        </Link>
      </header>

      {/* Main 1440px Canvas Layout */}
      <main className="flex-1 max-w-[1440px] w-full mx-auto px-6 sm:px-12 lg:px-28 py-2 lg:py-4 z-10 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start w-full">
          
          {/* Left Side: Headline, Subtitle, and Pixel-Exact Composition from Figma & Reference Picture */}
          <div className="hidden lg:flex lg:col-span-6 xl:col-span-7 flex-col space-y-4 relative">
            
            {/* Text Frame verbatim from Figma (Heading XS: 20px Poppins SemiBold, Body L: 18px Satoshi Regular) */}
            <div className="space-y-3 max-w-[475px]">
              <h1 className="text-[20px] font-display font-semibold text-[#F5F5F6] tracking-tight leading-snug">
                {isLogin ? 'Sign in with ease' : 'Sign up and come in'}
              </h1>
              <p className="text-[18px] text-[#F5F5F6]/90 leading-[1.6] font-normal">
                {isLogin
                  ? 'Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.'
                  : 'The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost'}
              </p>
            </div>

            {/* Visual Artboard: Exact Figma Coordinates calibrated from Node IDs #2007:493, #2007:524, #2007:555, #2007:572, #2007:577, #2007:582 */}
            <div className="relative w-[540px] h-[650px] select-none pointer-events-none mt-1">
              
              {/* 1. White Card: "Build Digital Asset" (#2007:493: x: 122, y: 394 -> left: 0px, top: 104px, z-10 BEHIND) */}
              <div className="absolute left-0 top-[104px] w-[373px] h-[384px] z-10 drop-shadow-xl">
                <img
                  src="/images/auth/card-build-digital-asset.png"
                  alt="Build Digital Asset Course Card"
                  className="w-full h-auto object-contain rounded-[24px]"
                />
              </div>

              {/* 2. Black Card: "the Power of Big Data" (#2007:524: x: 233, y: 305 -> left: 111px, top: 15px, z-20 IN FRONT) */}
              <div className="absolute left-[111px] top-[15px] w-[373px] h-[384px] z-20 drop-shadow-2xl">
                <img
                  src="/images/auth/card-power-of-big-data.png"
                  alt="the Power of Big Data Course Card"
                  className="w-full h-auto object-contain rounded-[24px]"
                />
              </div>

              {/* 3. Happy Students Card: (#2007:555: x: 348, y: 740 -> left: 226px, top: 450px, w: 258px, z-30) Flush with black card right edge */}
              <div className="absolute left-[226px] top-[450px] z-30 bg-[#D4FB20] text-[#242528] rounded-[16px] p-4 shadow-2xl border border-black/5 flex flex-col gap-2 w-[258px] backdrop-blur-[10px]">
                <div className="space-y-0.5">
                  <span className="text-[16px] font-medium text-[#242528] block">Happy Students</span>
                  <div className="flex items-center gap-1 font-bold text-xs text-[#242528]">
                    <span>4.5</span>
                    <span className="text-[#4B4C53] font-normal">(240)</span>
                    <span className="text-[#003BE2] font-black text-sm ml-0.5">★</span>
                  </div>
                </div>
                <div className="flex items-center -space-x-1.5 pt-0.5 overflow-hidden">
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#D4FB20] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80" alt="" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#D4FB20] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80" alt="" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#D4FB20] object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80" alt="" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#D4FB20] object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80" alt="" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#D4FB20] object-cover" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=80&q=80" alt="" />
                  <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#D4FB20] object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80" alt="" />
                  <span className="bg-[#242528] text-white text-[11px] font-bold px-2 py-1.5 rounded-full shrink-0 flex items-center justify-center ring-2 ring-[#D4FB20]">
                    2K+
                  </span>
                </div>
              </div>

              {/* 4. 3D Elements: ALL IN FRONT OF EVERYTHING (z-50) */}
              
              {/* Neon Ring: at top-left (#2007:577 position: x: 151, y: 320 -> left: 29px, top: 30px, w: 146px, h: 146px, z-50) */}
              <img
                src="/images/auth/shape-neon-torus.png"
                alt="Neon Ring"
                className="absolute left-[29px] top-[30px] w-[146px] h-[146px] object-contain z-50 drop-shadow-2xl -rotate-12 animate-float-slow"
              />

              {/* Neon Pyramid: at bottom-left (#2007:582 position: x: 97, y: 702 -> left: -25px, top: 412px, w: 188px, h: 188px, z-50) */}
              <img
                src="/images/auth/shape-neon-pyramid.png"
                alt="Neon Pyramid"
                className="absolute -left-[25px] top-[412px] w-[188px] h-[188px] object-contain z-50 drop-shadow-2xl animate-float"
              />

              {/* White Spring (Spiral): at right flank (#2007:572 position: x: 470, y: 626 -> left: 348px, top: 336px, w: 175px, h: 175px, z-50) */}
              <img
                src="/images/auth/shape-white-spiral.png"
                alt="White Spring"
                className="absolute left-[348px] top-[336px] w-[175px] h-[175px] object-contain z-50 drop-shadow-2xl rotate-12 animate-float-slow"
              />

            </div>

          </div>

          {/* Right Side: The White Form Card */}
          <div className="lg:col-span-6 xl:col-span-5 w-full flex justify-center lg:justify-end pb-8">
            <div className="w-full max-w-[500px] bg-white rounded-[24px] p-8 sm:p-12 shadow-2xl border border-surface-200/50 text-[#242528]">
              {children}
            </div>
          </div>

        </div>
      </main>

    </div>
  );
};
