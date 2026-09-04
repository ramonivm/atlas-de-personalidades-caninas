import React from 'react';

// aloneTime: short
export const IconSunMorning = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="8 8 48 48" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="32" cy="32" r="10"/>
    <line x1="32" y1="12" x2="32" y2="17"/>
    <line x1="32" y1="47" x2="32" y2="52"/>
    <line x1="12" y1="32" x2="17" y2="32"/>
    <line x1="47" y1="32" x2="52" y2="32"/>
    <line x1="18" y1="18" x2="22" y2="22"/>
    <line x1="42" y1="42" x2="46" y2="46"/>
    <line x1="18" y1="46" x2="22" y2="42"/>
    <line x1="42" y1="22" x2="46" y2="18"/>
  </svg>
);

// mentalTime: low
export const IconHourglass = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="8 8 48 48" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 12h32"/>
    <path d="M16 52h32"/>
    <path d="M20 12c0 14 12 16 12 20s-12 6-12 20"/>
    <path d="M44 12c0 14-12 16-12 20s12 6 12 20"/>
    <path d="M26 44h12" strokeDasharray="2 2"/>
  </svg>
);

// mentalTime: very_high
export const IconTarget = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="8 8 48 48" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="32" cy="32" r="20"/>
    <circle cx="32" cy="32" r="13" strokeDasharray="3 3"/>
    <circle cx="32" cy="32" r="6"/>
    <circle cx="32" cy="32" r="1.5" fill="currentColor"/>
  </svg>
);

// mentalTime: high
export const IconSparkles = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="8 8 48 48" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M32 12l3.5 12.5L48 28l-12.5 3.5L32 44l-3.5-12.5L16 28l12.5-3.5z"/>
    <path d="M46 12l1.5 4.5L52 18l-4.5 1.5L46 24l-1.5-4.5L40 18l4.5-1.5z"/>
    <circle cx="20" cy="44" r="1.5" fill="currentColor"/>
  </svg>
);

// environment: quiet_apartment
export const IconBuildingCompact = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="8 8 48 48" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="22" y="14" width="20" height="38" rx="3"/>
    <rect x="27" y="20" width="10" height="6" rx="1"/>
    <line x1="32" y1="44" x2="32" y2="44.01" strokeWidth="6"/>
  </svg>
);

// aloneTime: rarely
export const IconHouseInhabited = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="8 8 48 48" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14 28l18-14 18 14v22a2 2 0 01-2 2H16a2 2 0 01-2-2V28z"/>
    <path d="M26 50V36h12v14"/>
  </svg>
);

// mentalTime: moderate
export const IconBrainNotebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="8 8 48 48" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M24 16c-3 0-6 2.5-6 6 0 1.5.5 3 1.5 4-2.5 1-4.5 3.5-4.5 6.5 0 2.5 1.5 5 3.5 6-.5 1-.5 2-.5 3 0 4 3.5 7.5 7.5 7.5h2"/>
    <path d="M31 16v33.5"/>
    <rect x="31" y="16" width="19" height="33.5" rx="3"/>
    <line x1="37" y1="24" x2="44" y2="24"/>
    <line x1="37" y1="32" x2="44" y2="32"/>
    <line x1="37" y1="40" x2="42" y2="40"/>
  </svg>
);

// environment: urban_flexible
export const IconBuildingComplex = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="8 8 48 48" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="20" y="16" width="24" height="36" rx="2"/>
    <line x1="26" y1="22" x2="28" y2="22"/>
    <line x1="36" y1="22" x2="38" y2="22"/>
    <line x1="26" y1="28" x2="28" y2="28"/>
    <line x1="36" y1="28" x2="38" y2="28"/>
    <line x1="26" y1="34" x2="28" y2="34"/>
    <line x1="36" y1="34" x2="38" y2="34"/>
    <line x1="26" y1="40" x2="28" y2="40"/>
    <line x1="36" y1="40" x2="38" y2="40"/>
    <rect x="29" y="46" width="6" height="6"/>
  </svg>
);

// aloneTime: full_day
export const IconMoon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="8 8 48 48" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M42 38a18 18 0 01-20-20 18 18 0 1020 20z"/>
  </svg>
);

// environment: residential_house
export const IconHouseResidential = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="8 8 48 48" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 28l20-15 20 15v23a2 2 0 01-2 2H14a2 2 0 01-2-2V28z"/>
    <path d="M26 53V37h12v16"/>
    <polyline points="40 19 40 14 46 14 46 23"/>
  </svg>
);

// environment: rural
export const IconMountains = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="8 8 48 48" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 48l16-22 10 14 8-10 12 18H12z"/>
    <path d="M38 48v-8c0-2 2-4 4-4s4 2 4 4v8"/>
    <circle cx="42" cy="32" r="6"/>
  </svg>
);

// aloneTime: half_day
export const IconClock = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="8 8 48 48" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="32" cy="32" r="20"/>
    <polyline points="32 20 32 32 42 32"/>
  </svg>
);
