import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  subtext?: string;
}

export const LogoIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => {
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      {/* Heavy Industrial Badge Background */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_2px_10px_rgba(16,185,129,0.3)]"
      >
        {/* Hexagonal Industrial Shield */}
        <path
          d="M50 5 L88 25 L88 75 L50 95 L12 75 L12 25 Z"
          className="fill-slate-950 stroke-emerald-500"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        {/* Outer Accent Ring */}
        <path
          d="M50 12 L82 29 L82 71 L50 88 L18 71 L18 29 Z"
          className="stroke-emerald-500/30"
          strokeWidth="1.5"
          strokeDasharray="4 2"
        />
        {/* Stylized Heavy Dump Truck Bed / 'H' Silhouette */}
        {/* Dump Bed (Tilted/Elevated Geometry) */}
        <path
          d="M26 38 L62 28 L74 60 L26 60 Z"
          className="fill-emerald-500"
        />
        {/* Truck Chassis / Wheels */}
        <path
          d="M26 62 L74 62 L70 72 L30 72 Z"
          className="fill-slate-200"
        />
        {/* Dual Heavy Wheels */}
        <circle cx="38" cy="73" r="6" className="fill-slate-950 stroke-emerald-400" strokeWidth="2.5" />
        <circle cx="62" cy="73" r="6" className="fill-slate-950 stroke-emerald-400" strokeWidth="2.5" />
        <circle cx="38" cy="73" r="2" className="fill-emerald-400" />
        <circle cx="62" cy="73" r="2" className="fill-emerald-400" />
        {/* Heavy Hydraulics / Cargo Slant Accent */}
        <path
          d="M32 44 L58 36 L62 52 L32 52 Z"
          className="fill-slate-950/40"
        />
      </svg>
    </div>
  );
};

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  subtext = 'NOVA SCOTIA BULK LOGISTICS',
}) => {
  const [imgError, setImgError] = useState(false);

  const sizeClasses = {
    sm: 'h-14 sm:h-16',
    md: 'h-20 sm:h-24 md:h-28',
    lg: 'h-28 sm:h-36 md:h-44',
  };

  const iconSizes = {
    sm: 'w-14 h-14',
    md: 'w-20 h-20 sm:w-24 sm:h-24',
    lg: 'w-28 h-28 sm:w-36 sm:h-36',
  };

  const textSizes = {
    sm: 'text-xl sm:text-2xl',
    md: 'text-2xl sm:text-3xl md:text-4xl',
    lg: 'text-3xl sm:text-4xl md:text-5xl',
  };

  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      {!imgError ? (
        <img
          src="/logo.png"
          alt="HAULM Transport Logo"
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className={`${sizeClasses[size]} w-auto object-contain transition-transform group-hover:scale-105 duration-300 mix-blend-screen filter brightness-110 contrast-105 drop-shadow-[0_4px_14px_rgba(16,185,129,0.4)] shrink-0`}
        />
      ) : (
        <LogoIcon className={iconSizes[size]} />
      )}

      {showText && (
        <div>
          <span
            className={`block font-black ${textSizes[size]} tracking-tighter uppercase italic text-white group-hover:text-emerald-500 transition-colors leading-none font-display`}
          >
            HAULM <span className="text-emerald-500">TRANSPORT</span>
          </span>
          {subtext && (
            <span className="block text-[8px] tracking-[0.35em] text-slate-400 font-bold mt-1 uppercase leading-none">
              {subtext}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
