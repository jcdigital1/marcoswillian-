import React from 'react';
import { motion } from 'motion/react';
import { METHOD_CARDS } from '../types';
import { Dumbbell3DIcon, Performance3DIcon, Strategy3DIcon } from './Icons3D';

export const MethodSection: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'planejamento':
        return <Strategy3DIcon size={26} />;
      case 'acompanhamento':
        return <Dumbbell3DIcon size={26} />;
      case 'performance':
      default:
        return <Performance3DIcon size={26} />;
    }
  };

  return (
    <section id="section-metodo" className="relative px-4 py-8 flex flex-col items-center text-center">
      {/* Subtle section separator */}
      <div className="flex items-center gap-3 w-full max-w-xs mb-8 opacity-70">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-700 to-neutral-600" />
        <div className="w-1.5 h-1.5 rotate-45 bg-[#ff6a00] shadow-[0_0_8px_#ff5500]" />
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-neutral-700 to-neutral-600" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.55 }}
        className="max-w-md mb-6"
      >
        <span className="block text-[11px] font-bold tracking-[0.25em] text-[#ff6a00] uppercase mb-1">
          PASSO 02 • MÉTODO
        </span>
        <h2 
          id="method-section-title"
          className="text-2xl sm:text-3xl font-black tracking-tight text-white font-heading uppercase leading-tight"
        >
          SEU TREINO PRECISA <br />
          <span className="text-neutral-200">TER UM OBJETIVO.</span>
        </h2>

        {/* Em destaque */}
        <div className="mt-3 px-3 py-2 rounded-xl bg-neutral-900/60 border border-neutral-800">
          <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#ff6a00] font-heading">
            NÃO É SOBRE FAZER MAIS. É SOBRE TREINAR MELHOR.
          </p>
        </div>
      </motion.div>

      {/* 3 Premium Cards */}
      <div className="w-full max-w-md flex flex-col gap-3.5">
        {METHOD_CARDS.map((card, index) => (
          <motion.div
            key={card.id}
            id={`method-card-${card.id}`}
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            className="group glass-panel-3d relative overflow-hidden rounded-2xl p-4 sm:p-5 flex items-center gap-4 text-left transition-all duration-300 hover:border-[#ff6a00]/40 hover:shadow-[0_12px_28px_-4px_rgba(255,85,0,0.16)]"
          >
            {/* Top metallic edge sheen */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-neutral-500/25 to-transparent group-hover:via-[#ff6a00]/50 transition-colors" />

            {/* 3D Icon container */}
            <div className="flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
              {getIcon(card.id)}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-white font-heading group-hover:text-[#ff8833] transition-colors mb-0.5">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-snug">
                {card.description}
              </p>
            </div>

            {/* Subtle right accent marker */}
            <div className="w-1.5 h-1.5 rounded-full bg-neutral-700 group-hover:bg-[#ff6a00] group-hover:shadow-[0_0_6px_#ff5500] transition-colors" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
