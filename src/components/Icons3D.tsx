import React from 'react';

interface Icon3DProps {
  className?: string;
  size?: number;
}

export const WhatsApp3DIcon: React.FC<Icon3DProps> = ({ className = '', size = 28 }) => {
  return (
    <div 
      className={`relative inline-flex items-center justify-center rounded-2xl p-1.5 shadow-[0_4px_16px_rgba(37,211,102,0.35)] transition-transform ${className}`}
      style={{
        background: 'linear-gradient(135deg, #2fe675 0%, #25D366 45%, #128C7E 100%)',
        boxShadow: '0 6px 14px -2px rgba(37,211,102,0.45), inset 0 1px 1px rgba(255,255,255,0.6), inset 0 -2px 3px rgba(0,0,0,0.35)',
        width: size + 14,
        height: size + 14,
      }}
    >
      {/* Top gloss highlight */}
      <div 
        className="absolute inset-x-1.5 top-1 h-[40%] rounded-t-xl opacity-40 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,0))',
        }}
      />
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
      >
        <path
          d="M17.5 6.5C16.05 5.05 14.12 4.25 12.06 4.25C7.8 4.25 4.34 7.71 4.34 11.97C4.34 13.33 4.7 14.66 5.38 15.84L4.25 20L8.52 18.88C9.66 19.5 10.95 19.83 12.06 19.83C16.32 19.83 19.88 16.37 19.88 12.11C19.88 10.05 19.08 8.12 17.5 6.5ZM12.06 18.52C10.9 18.52 9.77 18.21 8.78 17.62L8.55 17.48L6.02 18.14L6.69 15.68L6.54 15.44C5.89 14.41 5.55 13.2 5.55 11.97C5.55 8.38 8.47 5.46 12.06 5.46C13.8 5.46 15.43 6.14 16.66 7.37C17.89 8.6 18.57 10.23 18.57 11.97C18.57 15.57 15.65 18.52 12.06 18.52ZM15.63 13.79C15.43 13.69 14.47 13.22 14.29 13.15C14.11 13.09 13.98 13.06 13.85 13.25C13.72 13.44 13.35 13.88 13.24 14.01C13.12 14.14 13.01 14.16 12.81 14.06C12.61 13.96 11.98 13.75 11.23 13.08C10.65 12.56 10.26 11.92 10.14 11.72C10.03 11.52 10.13 11.41 10.23 11.31C10.32 11.22 10.43 11.08 10.53 10.96C10.64 10.84 10.67 10.76 10.74 10.62C10.8 10.48 10.77 10.36 10.72 10.26C10.67 10.16 10.29 9.24 10.14 8.86C9.99 8.49 9.83 8.54 9.72 8.54C9.62 8.53 9.49 8.53 9.36 8.53C9.23 8.53 9.02 8.58 8.84 8.77C8.66 8.97 8.16 9.44 8.16 10.39C8.16 11.34 8.85 12.26 8.95 12.39C9.05 12.52 10.31 14.47 12.24 15.3C12.7 15.5 13.06 15.62 13.34 15.71C13.95 15.9 14.51 15.87 14.95 15.81C15.44 15.73 16.46 15.19 16.67 14.58C16.89 13.97 16.89 13.45 16.82 13.34C16.76 13.23 16.63 13.17 16.43 13.07L15.63 13.79Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export const Instagram3DIcon: React.FC<Icon3DProps> = ({ className = '', size = 28 }) => {
  return (
    <div 
      className={`relative inline-flex items-center justify-center rounded-2xl p-1.5 shadow-[0_4px_16px_rgba(225,48,108,0.35)] transition-transform ${className}`}
      style={{
        background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
        boxShadow: '0 6px 14px -2px rgba(214,36,159,0.45), inset 0 1px 1px rgba(255,255,255,0.6), inset 0 -2px 3px rgba(0,0,0,0.4)',
        width: size + 14,
        height: size + 14,
      }}
    >
      {/* Gloss overlay */}
      <div 
        className="absolute inset-x-1.5 top-1 h-[40%] rounded-t-xl opacity-35 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.85), rgba(255,255,255,0))',
        }}
      />
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)]"
      >
        <rect
          x="3.5"
          y="3.5"
          width="17"
          height="17"
          rx="5"
          stroke="white"
          strokeWidth="2.2"
        />
        <circle
          cx="12"
          cy="12"
          r="4.2"
          stroke="white"
          strokeWidth="2.2"
        />
        <circle
          cx="16.7"
          cy="7.3"
          r="1.2"
          fill="white"
        />
      </svg>
    </div>
  );
};

export const Dumbbell3DIcon: React.FC<{ size?: number }> = ({ size = 32 }) => {
  return (
    <div
      className="relative flex items-center justify-center rounded-xl p-2.5"
      style={{
        background: 'linear-gradient(135deg, #2a2a34 0%, #15151c 100%)',
        border: '1px solid rgba(255, 85, 0, 0.3)',
        boxShadow: '0 8px 20px -4px rgba(0,0,0,0.8), inset 0 1px 1px rgba(255,255,255,0.2), 0 0 16px rgba(255,85,0,0.15)',
        width: size + 18,
        height: size + 18,
      }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 8V16M20 8V16M1 10V14M23 10V14M7 6V18M17 6V18M7 12H17" stroke="#ff6a00" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="1.5" fill="#ffffff" />
      </svg>
    </div>
  );
};

export const Performance3DIcon: React.FC<{ size?: number }> = ({ size = 32 }) => {
  return (
    <div
      className="relative flex items-center justify-center rounded-xl p-2.5"
      style={{
        background: 'linear-gradient(135deg, #2a2a34 0%, #15151c 100%)',
        border: '1px solid rgba(255, 85, 0, 0.3)',
        boxShadow: '0 8px 20px -4px rgba(0,0,0,0.8), inset 0 1px 1px rgba(255,255,255,0.2), 0 0 16px rgba(255,85,0,0.15)',
        width: size + 18,
        height: size + 18,
      }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="url(#fire_grad)" stroke="#ff8533" strokeWidth="1.2" strokeLinejoin="round" />
        <defs>
          <linearGradient id="fire_grad" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ff9933" />
            <stop offset="1" stopColor="#ff4500" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export const Strategy3DIcon: React.FC<{ size?: number }> = ({ size = 32 }) => {
  return (
    <div
      className="relative flex items-center justify-center rounded-xl p-2.5"
      style={{
        background: 'linear-gradient(135deg, #2a2a34 0%, #15151c 100%)',
        border: '1px solid rgba(255, 85, 0, 0.3)',
        boxShadow: '0 8px 20px -4px rgba(0,0,0,0.8), inset 0 1px 1px rgba(255,255,255,0.2), 0 0 16px rgba(255,85,0,0.15)',
        width: size + 18,
        height: size + 18,
      }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="#555566" strokeWidth="2" />
        <circle cx="12" cy="12" r="5" stroke="#ff6a00" strokeWidth="2" />
        <circle cx="12" cy="12" r="2" fill="#ffffff" />
        <path d="M12 3V6M12 18V21M3 12H6M18 12H21" stroke="#ff7700" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
};
