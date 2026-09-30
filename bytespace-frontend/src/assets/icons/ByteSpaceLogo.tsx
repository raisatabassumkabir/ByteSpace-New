import React from 'react';

interface ByteSpaceLogoProps {
  variant?: 'light' | 'dark' | 'on-blue';
  className?: string;
  showText?: boolean;
}

export const ByteSpaceLogo: React.FC<ByteSpaceLogoProps> = ({
  variant = 'on-blue',
  className = '',
  showText = true,
}) => {
  const isDark = variant === 'dark';
  const textColor = isDark ? 'text-[#040819]' : 'text-[#F5F5F6]';

  return (
    <div className={`inline-flex items-center gap-[9px] select-none ${className}`}>
      {/* Exact Stylized 'b' Brand Icon from User Uploaded Spec */}
      <img
        src="/images/bytespace-b-mark.png"
        alt="ByteSpace"
        className="w-[28.88px] h-[31.5px] object-contain shrink-0"
        loading="eager"
      />

      {showText && (
        <span
          className={`text-[24px] leading-none font-bold tracking-tight ${textColor}`}
          style={{ fontFamily: "'Clash Display', 'Poppins', 'Plus Jakarta Sans', sans-serif" }}
        >
          ByteSpace
        </span>
      )}
    </div>
  );
};


