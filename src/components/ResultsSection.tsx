import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const PLACEHOLDER_SLIDES = [
  {
    id: 's1',
    tag: 'RESULTADOS REAIS',
    headline: 'Construção consistente de físico e saúde.',
    sub: 'Sem atalhos ilusórios. Treinamento adaptado ao seu ponto de partida e ao seu objetivo.',
  },
  {
    id: 's2',
    tag: 'PROCESSOS REAIS',
    headline: 'Estratégia personalizada para o seu dia a dia.',
    sub: 'Alinhando rotina, intensidade e recuperação para garantir evolução contínua.',
  },
  {
    id: 's3',
    tag: 'EVOLUÇÃO REAL',
    headline: 'Desempenho elevado dentro e fora dos treinos.',
    sub: 'Ganho de força, postura, disposição e confiança a cada nova semana.',
  },
];

export const ResultsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % PLACEHOLDER_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + PLACEHOLDER_SLIDES.length) % PLACEHOLDER_SLIDES.length);
  };

  const slide = PLACEHOLDER_SLIDES[currentSlide];

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
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className="mb-6 max-w-sm"
      >
        <span className="block text-[11px] font-bold tracking-[0.25em] text-[#ff6a00] uppercase mb-1">
          GALERIA • FEEDBACK
        </span>
        <h2 
          id="results-section-title"
          className="text-2xl sm:text-3xl font-black tracking-tight text-white font-heading uppercase"
        >
          EVOLUÇÃO TIME MW
        </h2>
      </motion.div>

      {/* Premium Interactive Carousel Frame */}
      <div className="w-full max-w-md">
        <div className="relative overflow-hidden rounded-3xl glass-panel-3d p-6 sm:p-7 min-h-[220px] flex flex-col justify-between text-left border border-neutral-800 shadow-[0_16px_36px_-6px_rgba(0,0,0,0.85)]">
          {/* Subtle watermark badge */}
          <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-900/80 border border-neutral-800 text-[10px] font-mono text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6a00]" />
            <span>0{currentSlide + 1} / 0{PLACEHOLDER_SLIDES.length}</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="space-y-2.5 mt-2"
            >
              <span className="inline-block text-xs font-black tracking-[0.2em] text-[#ff6a00] uppercase font-heading">
                {slide.tag}
              </span>

              <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                {slide.headline}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pt-1">
                {slide.sub}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Controls & Pagination Dots */}
          <div className="pt-6 flex items-center justify-between border-t border-neutral-800/80 mt-4">
            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {PLACEHOLDER_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  aria-label={`Ir para o slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentSlide === i ? 'w-6 bg-[#ff6a00]' : 'w-2 bg-neutral-700 hover:bg-neutral-500'
                  }`}
                />
              ))}
            </div>

            {/* Next / Prev buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                aria-label="Slide anterior"
                className="w-8 h-8 rounded-full flex items-center justify-center bg-neutral-900 border border-neutral-700/80 text-neutral-300 hover:text-white hover:border-[#ff6a00] active:scale-95 transition-all"
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                aria-label="Próximo slide"
                className="w-8 h-8 rounded-full flex items-center justify-center bg-neutral-900 border border-neutral-700/80 text-neutral-300 hover:text-white hover:border-[#ff6a00] active:scale-95 transition-all"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Quiet footer note indicating modular readiness */}
        <p className="text-[11px] text-neutral-400 text-center mt-3 tracking-wide">
          Espaço dedicado para registros de evolução e transformações do TIME MW.
        </p>
      </div>
    </section>
  );
};
