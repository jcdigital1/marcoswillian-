import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GOALS } from '../types';

interface GoalSectionProps {
  onContinueClick: () => void;
}

export const GoalSection: React.FC<GoalSectionProps> = ({ onContinueClick }) => {
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    setSelectedGoal(id);
  };

  return (
    <section id="section-objetivo" className="relative px-4 py-8 flex flex-col items-center text-center">
      {/* Subtle section separator */}
      <div className="flex items-center gap-3 w-full max-w-xs mb-8 opacity-70">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-700 to-neutral-600" />
        <div className="w-1.5 h-1.5 rotate-45 bg-[#ff6a00] shadow-[0_0_8px_#ff5500]" />
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-neutral-700 to-neutral-600" />
      </div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className="mb-6 max-w-sm"
      >
        <span className="block text-[11px] font-bold tracking-[0.25em] text-[#ff6a00] uppercase mb-1">
          PASSO 01 • FOCO
        </span>
        <h2 
          id="goal-section-title"
          className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-heading uppercase"
        >
          QUAL É O SEU <br />
          <span className="text-[#ff6a00] drop-shadow-[0_2px_12px_rgba(255,85,0,0.3)]">
            PRÓXIMO NÍVEL?
          </span>
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-neutral-400">
          Selecione o seu objetivo principal de hoje:
        </p>
      </motion.div>

      {/* 4 Interactive Goal Options */}
      <div className="w-full max-w-md flex flex-col gap-3">
        {GOALS.map((goal, idx) => {
          const isSelected = selectedGoal === goal.id;

          return (
            <motion.button
              key={goal.id}
              id={`goal-btn-${goal.id}`}
              onClick={() => handleSelect(goal.id)}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileTap={{ scale: 0.97 }}
              className={`group relative overflow-hidden rounded-2xl p-4 flex items-center justify-between text-left transition-all duration-300 cursor-pointer ${
                isSelected
                  ? 'bg-gradient-to-r from-[#26160e] via-[#1a1210] to-[#141216] border-2 border-[#ff6a00] shadow-[0_0_24px_rgba(255,85,0,0.35),_inset_0_1px_1px_rgba(255,140,50,0.3)]'
                  : 'glass-panel-3d border border-neutral-800 hover:border-neutral-700 active:border-[#ff6a00]/40'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <span className="text-2xl filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] group-hover:scale-110 transition-transform">
                  {goal.emoji}
                </span>
                <span
                  className={`text-sm sm:text-base font-bold tracking-wide font-heading transition-colors ${
                    isSelected ? 'text-white' : 'text-neutral-200 group-hover:text-white'
                  }`}
                >
                  {goal.label}
                </span>
              </div>

              {/* Selection Checkmark Indicator */}
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isSelected
                    ? 'bg-[#ff5500] text-white shadow-[0_0_10px_#ff5500]'
                    : 'border border-neutral-700 bg-neutral-900/60'
                }`}
              >
                {isSelected ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-700 group-hover:bg-neutral-500" />
                )}
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Revelation block after selection */}
      <AnimatePresence>
        {selectedGoal && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: 10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-full max-w-md mt-6 overflow-hidden"
          >
            <div className="p-4 rounded-2xl bg-gradient-to-b from-[#1c1815] to-[#121010] border border-[#ff6a00]/30 shadow-lg">
              <p className="text-sm sm:text-base font-semibold text-neutral-200 italic">
                “Então você já tem um objetivo. <br />
                <span className="text-[#ff7700] not-italic font-bold">Agora precisa do caminho certo.</span>”
              </p>

              <button
                id="goal-continue-button"
                onClick={onContinueClick}
                className="btn-metallic group relative mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#ff5500] to-[#ff7700] text-white font-extrabold text-xs sm:text-sm uppercase tracking-widest font-heading shadow-[0_4px_16px_rgba(255,85,0,0.4)] hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>CONTINUAR</span>
                <motion.span
                  animate={{ y: [0, 3, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity }}
                  className="font-bold text-base"
                >
                  ↓
                </motion.span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
