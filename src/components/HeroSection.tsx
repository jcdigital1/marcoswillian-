import React, { useState } from 'react';
import { motion } from 'motion/react';
import { APP_LINKS } from '../types';

interface HeroProps {
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroProps> = ({ onExploreClick }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative pt-7 pb-8 px-4 flex flex-col items-center text-center">
      {/* Background glow apex behind main logo */}
      <div 
        className="absolute top-10 left-1/2 -translate-x-1/2 w-48 h-48 sm:w-64 sm:h-64 rounded-full opacity-35 blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #ff5500 0%, #ff7700 40%, transparent 75%)',
        }}
      />

      {/* Main Logo with Entrance Animation & Orange Sheen */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative mb-5 flex justify-center items-center"
      >
        <div className="relative group p-2">
          {/* Subtle metallic aura contour */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#ff6a00]/25 via-transparent to-[#ff5500]/10 blur-md pointer-events-none" />

          {/* Skeleton placeholder while loading */}
          {!imgLoaded && !imgError && (
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl bg-neutral-900/60 border border-neutral-800 animate-pulse flex items-center justify-center">
              <span className="text-xs tracking-widest text-[#ff6a00] font-semibold uppercase">MARCOS WILLIAN</span>
            </div>
          )}

          {imgError ? (
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl bg-neutral-900/90 border border-[#ff5500]/40 flex flex-col items-center justify-center p-4 shadow-2xl">
              <span className="text-3xl font-black tracking-tight text-white font-sport">MW</span>
              <span className="text-sm font-bold tracking-widest text-[#ff5500] uppercase mt-1">Marcos Willian</span>
              <span className="text-[11px] text-neutral-400 tracking-wider mt-0.5">Personal Trainer</span>
            </div>
          ) : (
            <img
              src={APP_LINKS.mainLogo}
              alt="Marcos Willian - Personal Trainer & Preparador Físico"
              referrerPolicy="no-referrer"
              loading="eager"
              decoding="async"
              onLoad={() => setImgLoaded(true)}
              onError={() => setImgError(true)}
              className={`relative z-10 w-44 sm:w-56 h-auto object-contain max-h-56 drop-shadow-[0_14px_30px_rgba(0,0,0,0.85)] filter transition-all duration-700 ${
                imgLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            />
          )}

          {/* Light sheen passing over composition */}
          <motion.div
            initial={{ x: '-130%', opacity: 0 }}
            animate={{ x: '190%', opacity: [0, 0.75, 0] }}
            transition={{ duration: 1.8, delay: 0.5, ease: 'easeInOut' }}
            className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-[#ff8800]/40 to-transparent skew-x-[-25deg] pointer-events-none z-20"
          />
        </div>
      </motion.div>

      {/* Name and Professional Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-1.5 max-w-sm"
      >
        <h1 
          id="hero-name"
          className="text-3xl sm:text-4xl font-black tracking-tight text-white font-heading uppercase"
          style={{ textShadow: '0 2px 16px rgba(0,0,0,0.9)' }}
        >
          MARCOS WILLIAN
        </h1>

        <div className="flex items-center justify-center gap-2">
          <span className="h-px w-5 bg-gradient-to-r from-transparent to-[#ff5500]" />
          <p 
            id="hero-subtitle"
            className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#ff6a00] uppercase"
          >
            PERSONAL TRAINER • PREPARADOR FÍSICO
          </p>
          <span className="h-px w-5 bg-gradient-to-l from-transparent to-[#ff5500]" />
        </div>
      </motion.div>

      {/* Animated Hook Phrase: "NÃO É SÓ TREINAR. É EVOLUIR." */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="mt-6 mb-3 px-4 py-2.5 rounded-xl bg-neutral-900/50 border border-neutral-800/80 backdrop-blur-sm shadow-inner"
      >
        <p className="text-base sm:text-lg font-black tracking-wider uppercase font-heading text-neutral-200">
          NÃO É SÓ TREINAR.{' '}
          <motion.span
            initial={{ opacity: 0, filter: 'blur(4px)', scale: 0.95 }}
            animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="relative inline-block text-[#ff5500] font-black"
            style={{
              textShadow: '0 0 16px rgba(255,85,0,0.55), 0 2px 6px rgba(0,0,0,0.8)',
            }}
          >
            É EVOLUIR.
            {/* Orange under-glow line */}
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute left-0 -bottom-0.5 h-[2px] bg-gradient-to-r from-[#ff5500] to-[#ff9933] rounded-full shadow-[0_0_6px_#ff5500]"
            />
          </motion.span>
        </p>
      </motion.div>

      {/* Short Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="text-xs sm:text-sm font-medium text-neutral-300 max-w-xs leading-relaxed"
      >
        “Treinamento, acompanhamento e preparação para quem decidiu buscar sua melhor versão.”
      </motion.p>

      {/* Soft Transition Button: [ ↓ CONHEÇA O TIME MW ] */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="w-full max-w-xs mt-7"
      >
        <button
          id="hero-explore-button"
          onClick={onExploreClick}
          className="btn-metallic group relative flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-2xl bg-gradient-to-b from-[#1c1c24] to-[#101015] border border-neutral-700/80 hover:border-[#ff5500]/60 shadow-[0_8px_24px_rgba(0,0,0,0.7),_inset_0_1px_1px_rgba(255,255,255,0.15)] active:scale-[0.98] transition-all cursor-pointer"
        >
          <span className="text-xs sm:text-sm font-extrabold tracking-widest text-neutral-100 uppercase font-heading group-hover:text-[#ff7700] transition-colors">
            CONHEÇA O TIME MW
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
