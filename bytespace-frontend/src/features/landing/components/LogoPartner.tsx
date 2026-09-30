import React from 'react';

const LogoipsumItem = ({ children }: { children: React.ReactNode }) => (
  <svg height="32" viewBox="0 0 160 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 sm:h-8 w-auto text-[#8A8F98] opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
    <g transform="translate(0,0)">
      {children}
    </g>
    <text x="42" y="23" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="21" fill="currentColor" letterSpacing="-0.3">Logoipsum</text>
  </svg>
);

export const LogoPartner: React.FC = () => {
  return (
    <section className="w-full bg-[#F5F5F6] border-b border-[#E6E7E9] py-10 md:py-14">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24">
        {/* Figma #2007:2614: Logo_Partner - 5 Logoipsum partner logos */}
        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-x-8 gap-y-10 sm:gap-12 lg:gap-[72px]">
          
          {/* Logo 1: Waves in circle */}
          <LogoipsumItem>
            <path d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 29c-7.18 0-13-5.82-13-13 0-1.63.3-3.19.85-4.63C7.54 14.53 11.53 16 16 16c4.66 0 8.84-1.9 11.85-4.93.84 1.48 1.32 3.16 1.32 4.93 0 7.18-5.82 13-13 13z" fill="currentColor" />
          </LogoipsumItem>

          {/* Logo 2: Starburst */}
          <LogoipsumItem>
            <circle cx="16" cy="16" r="5" fill="currentColor"/>
            <path d="M16 0v7m0 18v7m16-16h-7M7 16H0m27.314-11.314l-4.95 4.95m-12.728 12.728l-4.95 4.95m17.678 0l-4.95-4.95M11.95 11.95L7 7" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"/>
          </LogoipsumItem>

          {/* Logo 3: Lightning in circle */}
          <LogoipsumItem>
            <circle cx="16" cy="16" r="16" fill="currentColor"/>
            <path d="M18 6L9 18h6l-2 8 9-12h-6l2-8z" fill="#F5F5F6"/>
          </LogoipsumItem>

          {/* Logo 4: Clover / Four dots */}
          <LogoipsumItem>
            <path d="M16 3A13 13 0 1016 29A13 13 0 1016 3Z" stroke="currentColor" strokeWidth="4"/>
            <path d="M16 9A7 7 0 1016 23A7 7 0 1016 9Z" fill="currentColor"/>
          </LogoipsumItem>

          {/* Logo 5: Concentric lines/Globe */}
          <LogoipsumItem>
            <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2.5"/>
            <circle cx="16" cy="16" r="9" stroke="currentColor" strokeWidth="2.5"/>
            <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="2.5"/>
          </LogoipsumItem>

        </div>
      </div>
    </section>
  );
};
