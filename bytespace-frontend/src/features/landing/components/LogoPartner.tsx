import React from 'react';

export const LogoPartner: React.FC = () => {
  return (
    <section className="w-full bg-[#F5F5F6] border-b border-[#E6E7E9] py-12 md:py-16">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24">
        {/* Figma #2007:2614: Logo_Partner - 5 partner logos with 72px gap, height 41-42px */}
        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-8 sm:gap-12 lg:gap-[72px] opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
          
          {/* Logo 1: Google */}
          <div className="h-[41px] flex items-center justify-center">
            <svg className="h-8 w-auto fill-current text-[#696E76]" viewBox="0 0 120 40" fill="currentColor">
              <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fontFamily="'Poppins', sans-serif" fontWeight="700" fontSize="26" letterSpacing="-0.5px">Google</text>
            </svg>
          </div>

          {/* Logo 2: Slack */}
          <div className="h-[41px] flex items-center justify-center">
            <svg className="h-8 w-auto fill-current text-[#696E76]" viewBox="0 0 120 40" fill="currentColor">
              <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fontFamily="'Poppins', sans-serif" fontWeight="700" fontSize="26" letterSpacing="-0.5px">Slack</text>
            </svg>
          </div>

          {/* Logo 3: Amazon */}
          <div className="h-[41px] flex items-center justify-center">
            <svg className="h-8 w-auto fill-current text-[#696E76]" viewBox="0 0 130 40" fill="currentColor">
              <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fontFamily="'Poppins', sans-serif" fontWeight="700" fontSize="26" letterSpacing="-0.5px">amazon</text>
            </svg>
          </div>

          {/* Logo 4: Spotify */}
          <div className="h-[41px] flex items-center justify-center">
            <svg className="h-8 w-auto fill-current text-[#696E76]" viewBox="0 0 130 40" fill="currentColor">
              <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fontFamily="'Poppins', sans-serif" fontWeight="700" fontSize="26" letterSpacing="-0.5px">Spotify</text>
            </svg>
          </div>

          {/* Logo 5: Microsoft */}
          <div className="h-[42px] flex items-center justify-center">
            <svg className="h-8 w-auto fill-current text-[#696E76]" viewBox="0 0 140 40" fill="currentColor">
              <text x="50%" y="58%" dominantBaseline="middle" textAnchor="middle" fontFamily="'Poppins', sans-serif" fontWeight="700" fontSize="24" letterSpacing="-0.5px">Microsoft</text>
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
};
