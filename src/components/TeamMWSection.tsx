import React, { useState } from 'react';
import { motion } from 'motion/react';
import { APP_LINKS } from '../types';

interface TeamMWSectionProps {
  onLearnMoreClick: () => void;
}

export const TeamMWSection: React.FC<TeamMWSectionProps> = ({ onLearnMoreClick }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <section id="section-timemw" className="relative px-4 py-10 flex flex-col items-center text-center">
      {/* Subtle separator */}
      <div className="flex items-center gap-3 w-full max-w-xs mb-8 opacity-70">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-700 to-neutral-600" />
        <div className="w-1.5 h-1.5 rotate-45 bg-[#ff6a00] shadow-[0_0_8px_#ff5500]" />
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-neutral-700 to-neutral-600" />
      </div>

      {/* Cinematic Phase 1: VOCÊ NÃO PRECISA FAZER ISSO SOZINHO */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className="mb-3 max-w-xs"
      >
        <span className="block text-[11px] font-bold tracking-[0.25em] text-[#ff6a00] uppercase mb-1">
          PASSO 03 • PERTENCIMENTO
        </span>
        <p className="text-sm sm:text-base font-bold tracking-wider text-neutral-400 uppercase font-heading">
          VOCÊ NÃO PRECISA <br />
          <span className="text-white">FAZER ISSO SOZINHO.</span>
        </p>
      </motion.div>

      {/* Cinematic Phase 2: VENHA PRO */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.55, delay: 0.15 }}
        className="text-2xl sm:text-3xl font-black tracking-tight text-white font-sport uppercase leading-none mt-1 mb-2"
      >
        VENHA PRO
      </motion.h2>

      {/* Cinematic Phase 3: Reveal Official TIME MW Image with Scale & Orange Backlight */}
      <motion.div
        initial={{ opacity: 0, scale: 0.88 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="relative my-4 w-full max-w-xs flex justify-center items-center"
      >
        {/* Cinematic orange backlighting aura */}
        <div 
          className="absolute inset-0 m-auto w-52 h-52 rounded-full opacity-45 blur-2xl pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(255,85,0,0.65) 0%, rgba(255,120,0,0.2) 50%, transparent 75%)',
          }}
        />

        <div className="relative p-2 rounded-2xl">
          {!imgLoaded && !imgError && (
            <div className="w-52 h-52 rounded-2xl bg-neutral-900/60 border border-neutral-800 animate-pulse flex items-center justify-center">
              <span className="text-xs tracking-widest text-[#ff6a00] font-semibold">TIME MW</span>
            </div>
          )}

          {imgError ? (
            <div className="w-52 h-44 rounded-2xl bg-gradient-to-b from-[#181820] to-[#0d0d12] border border-[#ff5500]/30 flex flex-col items-center justify-center p-4">
              <span className="text-4xl font-black text-[#ff6a00] font-sport">MW TEAM#</span>
              <span className="text-xs text-neutral-400 mt-1 uppercase tracking-widest">Time Marcos Willian</span>
            </div>
          ) : (
            <img
              src={APP_LINKS.teamMwLogo}
              alt="Logo TIME MW - MW Team#"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              onLoad={() => setImgLoaded(true)}
              onError={() => setImgError(true)}
              className={`relative z-10 w-48 sm:w-56 h-auto object-contain max-h-56 filter drop-shadow-[0_14px_34px_rgba(0,0,0,0.95)] transition-all duration-700 ${
                imgLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            />
          )}
        </div>
      </motion.div>

      {/* Quote below image */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-sm sm:text-base font-semibold text-neutral-200 italic tracking-wide max-w-xs mt-1 mb-6 leading-relaxed"
      >
        “Mais que treinar. <br />
        <span className="text-neutral-300">É fazer parte de um time que busca evolução.”</span>
      </motion.p>

      {/* Soft Transition Button: [ ↓ QUERO SABER MAIS ] (No WhatsApp here!) */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-full max-w-xs"
      >
        <button
          id="team-mw-learn-more-btn"
          onClick={onLearnMoreClick}
          className="btn-metallic group relative flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-2xl bg-gradient-to-b from-[#1c1c24] to-[#101015] border border-neutral-700/80 hover:border-[#ff5500]/60 shadow-[0_8px_24px_rgba(0,0,0,0.7),_inset_0_1px_1px_rgba(255,255,255,0.15)] active:scale-[0.98] transition-all cursor-pointer"
        >
          <span className="text-xs sm:text-sm font-extrabold tracking-widest text-neutral-100 uppercase font-heading group-hover:text-[#ff7700] transition-colors">
            QUERO SABER MAIS
          </span>
          <motion.span
            animate={{ y: [0, 3, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="text-[#ff6a00] text-sm font-bold"
          >
            ↓
          </motion.span>
        </button>
      </motion.div>
    </section>
  );
};
