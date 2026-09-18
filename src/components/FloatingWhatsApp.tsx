import React from 'react';
import { APP_LINKS } from '../types';
import { WhatsApp3DIcon } from './Icons3D';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Suporte WhatsApp" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <a
        id="floating-whatsapp-btn"
        href={APP_LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com Marcos Willian no WhatsApp"
        className="group relative flex items-center justify-center p-1 rounded-full transition-transform duration-300 active:scale-95"
      >
        {/* Soft rhythmic pulse glow ring (very gentle, not blinking) */}
        <div 
          className="absolute inset-0 rounded-full animate-pulse-subtle pointer-events-none opacity-60"
          style={{
            background: 'radial-gradient(circle, rgba(37,211,102,0.35) 0%, rgba(37,211,102,0) 70%)',
          }}
        />

        {/* Compact 3D WhatsApp Button */}
        <div className="relative transform group-hover:scale-108 transition-transform duration-300 drop-shadow-[0_6px_18px_rgba(0,0,0,0.85)]">
          <WhatsApp3DIcon size={26} />
        </div>
      </a>
    </aside>
  );
};
