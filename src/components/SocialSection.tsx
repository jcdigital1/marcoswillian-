import React from 'react';
import { motion } from 'motion/react';
import { APP_LINKS } from '../types';
import { Instagram3DIcon } from './Icons3D';

export const SocialSection: React.FC = () => {
  return (
    <section className="relative px-4 py-8 flex flex-col items-center text-center">
      {/* Subtle separator */}
      <div className="flex items-center gap-3 w-full max-w-xs mb-8 opacity-70">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-700 to-neutral-600" />
        <div className="w-1.5 h-1.5 rotate-45 bg-[#ff6a00] shadow-[0_0_8px_#ff5500]" />
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-neutral-700 to-neutral-600" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-6 max-w-sm"
      >
        <span className="block text-[11px] font-bold tracking-[0.25em] text-[#ff6a00] uppercase mb-1">
          BASTIDORES & ROTINA
        </span>
        <h2 
          id="social-section-title"
          className="text-2xl sm:text-3xl font-black tracking-tight text-white font-heading uppercase leading-tight"
        >
          ACOMPANHE O DIA A DIA <br />
          <span className="text-[#ff6a00] drop-shadow-[0_2px_12px_rgba(255,85,0,0.3)]">
            DO TIME MW
          </span>
        </h2>
      </motion.div>

      {/* Large Social Profile Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md glass-panel-3d relative overflow-hidden rounded-3xl p-6 sm:p-7 flex flex-col items-center text-center border border-neutral-800 shadow-[0_16px_36px_-6px_rgba(0,0,0,0.85)] hover:border-[#E1306C]/40 transition-all duration-300"
      >
        {/* Soft Instagram ambient glow in background */}
        <div 
          className="absolute -top-12 -right-12 w-36 h-36 rounded-full opacity-20 blur-2xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #E1306C 0%, #833AB4 60%, transparent 80%)',
          }}
        />

        {/* 3D Instagram Icon */}
        <div className="mb-4 transform hover:scale-105 transition-transform duration-300">
          <Instagram3DIcon size={36} />
        </div>

        {/* Handle */}
        <span className="text-base sm:text-lg font-extrabold text-white font-heading tracking-wide">
          {APP_LINKS.instagramHandle}
        </span>

        <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-xs leading-relaxed">
          Rotina de treinos, técnicas de execução, mentalidade e atualizações diárias dos alunos.
        </p>

        {/* Action Button: [ VER INSTAGRAM ] */}
        <div className="w-full mt-6">
          <a
            id="instagram-action-btn"
            href={APP_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-metallic group relative flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#833ab4]/80 via-[#fd1d1d]/80 to-[#fcb045]/80 text-white font-bold text-xs sm:text-sm uppercase tracking-widest font-heading shadow-[0_4px_20px_rgba(225,48,108,0.35),_inset_0_1px_1px_rgba(255,255,255,0.35)] hover:brightness-110 active:scale-[0.98] transition-all"
          >
            <span>VER INSTAGRAM</span>
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="transform group-hover:translate-x-1 transition-transform"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
};
