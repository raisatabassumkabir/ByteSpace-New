import React from 'react';

export const SparkleShape: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-6 h-6',
  color = '#CCFF00',
}) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M24 0C24 13.2548 34.7452 24 48 24C34.7452 24 24 34.7452 24 48C24 34.7452 13.2548 24 0 24C13.2548 24 24 13.2548 24 0Z"
      fill={color}
    />
  </svg>
);

export const SquiggleShape: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-16 h-8',
  color = '#CCFF00',
}) => (
  <svg
    viewBox="0 0 100 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M5 20C15 5 25 35 35 20C45 5 55 35 65 20C75 5 85 35 95 20"
      stroke={color}
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SpringRibbon: React.FC<{ className?: string }> = ({
  className = 'w-14 h-14',
}) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <ellipse cx="32" cy="16" rx="20" ry="10" stroke="#CCFF00" strokeWidth="4" />
    <path
      d="M12 16C12 28 52 24 52 36C52 48 12 44 12 56"
      stroke="#ffffff"
      strokeWidth="4"
      strokeLinecap="round"
      opacity="0.85"
    />
  </svg>
);

/* 3D Stylized Geometric Shapes from Figma Home Hero Reference */

export const Neon3DSpring: React.FC<{ className?: string }> = ({
  className = 'w-24 h-40',
}) => (
  <svg
    viewBox="0 0 120 230"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="neonSpringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EAFF66" />
        <stop offset="45%" stopColor="#CCFF00" />
        <stop offset="100%" stopColor="#88B800" />
      </linearGradient>
      <filter id="neonShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="8" stdDeviation="6" floodColor="#000000" floodOpacity="0.25" />
      </filter>
    </defs>
    <path
      d="M30 20 C60 10, 100 25, 95 45 C90 65, 25 60, 25 80 C25 100, 95 95, 90 115 C85 135, 25 130, 25 150 C25 170, 95 165, 90 185 C85 205, 30 200, 20 215"
      stroke="url(#neonSpringGrad)"
      strokeWidth="26"
      strokeLinecap="round"
      filter="url(#neonShadow)"
    />
  </svg>
);

export const White3DSpring: React.FC<{ className?: string }> = ({
  className = 'w-24 h-36',
}) => (
  <svg
    viewBox="0 0 100 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="whiteSpringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="60%" stopColor="#E2E8F0" />
        <stop offset="100%" stopColor="#94A3B8" />
      </linearGradient>
      <filter id="whiteShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="6" stdDeviation="5" floodColor="#000000" floodOpacity="0.2" />
      </filter>
    </defs>
    <path
      d="M25 15 C55 10, 85 20, 80 40 C75 60, 20 55, 20 75 C20 95, 80 90, 75 110 C70 128, 30 125, 20 132"
      stroke="url(#whiteSpringGrad)"
      strokeWidth="18"
      strokeLinecap="round"
      filter="url(#whiteShadow)"
    />
  </svg>
);

export const White3DTorus: React.FC<{ className?: string }> = ({
  className = 'w-32 h-32',
}) => (
  <svg
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <radialGradient id="torusGrad" cx="35%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="50%" stopColor="#F1F5F9" />
        <stop offset="80%" stopColor="#CBD5E1" />
        <stop offset="100%" stopColor="#94A3B8" />
      </radialGradient>
      <filter id="torusShadow" x="-25%" y="-25%" width="150%" height="150%">
        <feDropShadow dx="6" dy="12" stdDeviation="8" floodColor="#051759" floodOpacity="0.35" />
      </filter>
    </defs>
    <g transform="rotate(-25 80 80)" filter="url(#torusShadow)">
      {/* Real donut with transparent inner hole */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M 80 20 C 115 20 144 47 144 80 C 144 113 115 140 80 140 C 45 140 16 113 16 80 C 16 47 45 20 80 20 Z M 80 50 C 97 50 110 63 110 80 C 110 97 97 110 80 110 C 63 110 50 97 50 80 C 50 63 63 50 80 50 Z"
        fill="url(#torusGrad)"
      />
    </g>
  </svg>
);

export const White3DPyramid: React.FC<{ className?: string }> = ({
  className = 'w-24 h-28',
}) => (
  <svg
    viewBox="0 0 100 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="pyrLight" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#E2E8F0" />
      </linearGradient>
      <linearGradient id="pyrDark" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#CBD5E1" />
        <stop offset="100%" stopColor="#64748B" />
      </linearGradient>
      <filter id="pyrShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="3" dy="8" stdDeviation="6" floodColor="#000000" floodOpacity="0.25" />
      </filter>
    </defs>
    <g filter="url(#pyrShadow)">
      {/* Front Face */}
      <polygon points="50,15 15,95 65,105" fill="url(#pyrLight)" />
      {/* Side Face */}
      <polygon points="50,15 65,105 92,80" fill="url(#pyrDark)" />
    </g>
  </svg>
);

export const Neon3DCylinder: React.FC<{ className?: string }> = ({
  className = 'w-28 h-40',
}) => (
  <svg
    viewBox="0 0 110 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="cylBody" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#CCFF00" />
        <stop offset="60%" stopColor="#B2E000" />
        <stop offset="100%" stopColor="#6E8E00" />
      </linearGradient>
      <linearGradient id="cylTop" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F4FF80" />
        <stop offset="100%" stopColor="#CCFF00" />
      </linearGradient>
      <filter id="cylShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="5" dy="10" stdDeviation="7" floodColor="#000000" floodOpacity="0.3" />
      </filter>
    </defs>
    <g transform="rotate(-15 55 80)" filter="url(#cylShadow)">
      {/* Cylinder body */}
      <path d="M20 40 L85 40 L85 130 C85 145 20 145 20 130 Z" fill="url(#cylBody)" />
      {/* Cylinder top ellipse */}
      <ellipse cx="52.5" cy="40" rx="32.5" ry="14" fill="url(#cylTop)" />
    </g>
  </svg>
);
