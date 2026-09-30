import React from 'react';

export const LogoPartner: React.FC = () => {
  return (
    <section className="w-full bg-[#F5F5F6] border-b border-[#E6E7E9] py-10 md:py-14">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24">
        {/* Figma #2007:2614: Logo_Partner - 5 Logoipsum partner logos */}
        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-x-8 gap-y-10 sm:gap-12 lg:gap-[72px]">
          
          <img src="/images/logos/logoipsum-1.png" alt="Logoipsum Partner 1" className="h-7 sm:h-9 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 object-contain" />
          <img src="/images/logos/logoipsum-2.png" alt="Logoipsum Partner 2" className="h-7 sm:h-9 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 object-contain" />
          <img src="/images/logos/logoipsum-3.png" alt="Logoipsum Partner 3" className="h-7 sm:h-9 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 object-contain" />
          <img src="/images/logos/logoipsum-4.png" alt="Logoipsum Partner 4" className="h-7 sm:h-9 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 object-contain" />
          <img src="/images/logos/logoipsum-5.png" alt="Logoipsum Partner 5" className="h-7 sm:h-9 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 object-contain" />

        </div>
      </div>
    </section>
  );
};
