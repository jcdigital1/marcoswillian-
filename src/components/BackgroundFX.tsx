import React from 'react';

export const BackgroundFX: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Top cinematic orange glow apex */}
      <div 
        className="absolute -top-[120px] left-1/2 -translate-x-1/2 w-[340px] sm:w-[500px] h-[340px] rounded-full opacity-25 blur-[90px]"
        style={{
          background: 'radial-gradient(circle, #ff5500 0%, #ff8800 35%, transparent 70%)',
        }}
      />

      {/* Mid-screen ambient glow for TIME MW */}
      <div 
        className="absolute top-[48%] -right-[80px] w-[260px] h-[260px] rounded-full opacity-15 blur-[80px]"
        style={{
          background: 'radial-gradient(circle, #ff5500 0%, transparent 70%)',
        }}
      />

      {/* Bottom subtle rim glow */}
      <div 
        className="absolute -bottom-[80px] left-1/2 -translate-x-1/2 w-[380px] h-[280px] rounded-full opacity-20 blur-[100px]"
        style={{
          background: 'radial-gradient(circle, #ff6a00 0%, transparent 70%)',
        }}
      />

      {/* Very subtle athletic diagonal grid lines */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(45deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px), linear-gradient(-45deg, rgba(255, 85, 0, 0.3) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Floating subtle ember particles */}
      <div className="absolute top-[18%] left-[12%] w-1.5 h-1.5 rounded-full bg-[#ff7700] blur-[0.5px] animate-particle" style={{ animationDelay: '0s', animationDuration: '8s' }} />
      <div className="absolute top-[35%] right-[15%] w-1 h-1 rounded-full bg-[#ffaa33] blur-[0.5px] animate-particle" style={{ animationDelay: '2.5s', animationDuration: '6.5s' }} />
      <div className="absolute top-[62%] left-[18%] w-1.5 h-1.5 rounded-full bg-[#ff5500] blur-[0.5px] animate-particle" style={{ animationDelay: '4s', animationDuration: '9s' }} />
      <div className="absolute top-[82%] right-[22%] w-1 h-1 rounded-full bg-[#ff8800] blur-[0.5px] animate-particle" style={{ animationDelay: '1.2s', animationDuration: '7.5s' }} />
    </div>
  );
};
