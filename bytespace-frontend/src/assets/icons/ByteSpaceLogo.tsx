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
  const textColor = isDark ? 'text-surface-900' : 'text-white';

  return (
    <div className={`flex items-center gap-2.5 font-display font-extrabold select-none ${className}`}>
      {/* Dynamic Geometric Brand Icon */}
      <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-neon text-surface-900 shadow-neon-sm transition-transform duration-300 hover:scale-105">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 text-surface-900"
        >
          {/* Stylized code brackets with neon space block */}
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="12" y1="9" x2="12" y2="15" strokeWidth="3" />
        </svg>
      </div>

      {showText && (
        <span className={`text-2xl font-black tracking-tight ${textColor}`}>
          Byte<span className="text-neon">Space</span>
        </span>
      )}
    </div>
  );
};
