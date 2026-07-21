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
    sm: 'h-8',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
  };

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10 sm:w-12 sm:h-12',
    lg: 'w-14 h-14 sm:w-16 sm:h-16',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {!imgError ? (
        <img
          src="/logo-clean.png"
          alt="HAULM Transport Logo"
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className={`${sizeClasses[size]} w-auto object-contain transition-transform group-hover:scale-105 duration-300 filter drop-shadow-[0_2px_8px_rgba(16,185,129,0.25)]`}
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
