import React from 'react';
import { motion } from 'motion/react';
import { APP_LINKS } from '../types';
import { WhatsApp3DIcon } from './Icons3D';

export const FinalCTASection: React.FC = () => {
  return (
    <section id="section-comecar" className="relative px-4 pt-12 pb-20 flex flex-col items-center text-center">
      {/* Subtle separator */}
      <div className="flex items-center gap-3 w-full max-w-xs mb-10 opacity-70">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-700 to-neutral-600" />
        <div className="w-1.5 h-1.5 rotate-45 bg-[#ff6a00] shadow-[0_0_8px_#ff5500]" />
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-neutral-700 to-neutral-600" />
      </div>

      {/* Hero-like Final Commercial Section */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md glass-panel-orange relative overflow-hidden rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center shadow-[0_20px_50px_-10px_rgba(255,85,0,0.3)] border border-[#ff5500]/30"
      >
        {/* Cinematic ambient aura */}
        <div className="absolute -top-20 -right-20 w-44 h-44 rounded-full bg-[#ff5500]/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-44 h-44 rounded-full bg-[#ff7700]/20 blur-3xl pointer-events-none" />

        {/* Small Eyebrow: VOCÊ CHEGOU ATÉ AQUI. */}
        <span className="text-[11px] font-bold tracking-[0.25em] text-[#ff8833] uppercase mb-2">
          VOCÊ CHEGOU ATÉ AQUI.
        </span>

        {/* Enormous Title: AGORA É COM VOCÊ. */}
        <h2 
          id="final-cta-title"
          className="text-3xl sm:text-4xl font-black tracking-tight text-white font-sport uppercase leading-none mt-1 mb-3"
          style={{ textShadow: '0 0 24px rgba(255,85,0,0.35)' }}
        >
          AGORA É COM VOCÊ.
        </h2>

        {/* Subtext */}
        <p className="text-sm sm:text-base text-neutral-200 font-medium leading-relaxed max-w-xs">
          “Se você decidiu levar sua evolução a sério, vamos conversar sobre o seu objetivo.”
        </p>

        {/* Main CTA Button: [ QUERO FAZER PARTE DO TIME MW ] */}
        <div className="w-full mt-7">
          <a
            id="main-commercial-cta-button"
            href={APP_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-metallic group relative flex items-center justify-center gap-3 w-full py-4 px-5 rounded-2xl bg-gradient-to-r from-[#ff5500] via-[#ff6a00] to-[#e64d00] text-white font-extrabold text-sm sm:text-base uppercase tracking-wider font-heading shadow-[0_10px_36px_rgba(255,85,0,0.55),_0_2px_8px_rgba(0,0,0,0.9),_inset_0_1px_1px_rgba(255,255,255,0.45)] hover:brightness-110 active:scale-[0.98] transition-all"
          >
            {/* Real 3D WhatsApp Icon */}
            <WhatsApp3DIcon size={26} className="group-hover:scale-105 transition-transform" />
            <span className="leading-tight">QUERO FAZER PARTE DO TIME MW</span>
          </a>
        </div>

        {/* Small reassurance note */}
        <p className="text-[11px] text-neutral-400 mt-3 tracking-wide">
          Falar diretamente com Marcos Willian
        </p>
      </motion.div>

      {/* Visual Signature */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-12 flex flex-col items-center"
      >
        <div className="w-8 h-0.5 bg-[#ff6a00]/70 rounded-full mb-3" />
        <h3 
          id="signature-name"
          className="text-sm font-extrabold tracking-widest text-neutral-200 uppercase font-heading"
        >
          MARCOS WILLIAN
        </h3>
        <p 
          id="signature-role"
          className="text-xs text-neutral-400 font-medium tracking-wider mt-0.5"
        >
          Personal Trainer • Preparador Físico
        </p>

        <p className="text-[10px] text-neutral-400 mt-4 tracking-wider">
          © {new Date().getFullYear()} TIME MW • Todos os direitos reservados
        </p>
      </motion.div>
    </section>
  );
};
