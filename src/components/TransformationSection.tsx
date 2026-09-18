import React from 'react';
import { motion } from 'motion/react';

const MANIFESTO_WORDS = [
  { word: 'DISCIPLINA.', color: 'from-white via-neutral-200 to-neutral-400', glow: 'rgba(255,255,255,0.1)' },
  { word: 'CONSTÂNCIA.', color: 'from-neutral-200 via-neutral-300 to-[#ff7700]', glow: 'rgba(255,120,0,0.15)' },
  { word: 'EVOLUÇÃO.', color: 'from-[#ff7700] via-[#ff5500] to-[#ff3300]', glow: 'rgba(255,85,0,0.3)' },
  { word: 'RESULTADO.', color: 'from-white via-[#ff9933] to-[#ff5500]', glow: 'rgba(255,100,0,0.4)' },
];

export const TransformationSection: React.FC = () => {
  return (
    <section className="relative px-4 py-12 flex flex-col items-center text-center overflow-hidden">
      {/* Subtle section separator */}
      <div className="flex items-center gap-3 w-full max-w-xs mb-8 opacity-70">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-700 to-neutral-600" />
        <div className="w-1.5 h-1.5 rotate-45 bg-[#ff6a00] shadow-[0_0_8px_#ff5500]" />
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-neutral-700 to-neutral-600" />
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className="mb-8 max-w-sm"
      >
        <span className="block text-[11px] font-bold tracking-[0.25em] text-[#ff6a00] uppercase mb-1">
          TRANSFORMAÇÃO
        </span>
        <h2 
          id="transformation-title"
          className="text-2xl sm:text-3xl font-black tracking-tight text-white font-heading uppercase leading-tight"
        >
          O RESULTADO COMEÇA <br />
          <span className="text-neutral-400">ANTES DO ESPELHO.</span>
        </h2>
      </motion.div>

      {/* Large Visual Words displayed individually */}
      <div className="w-full max-w-md flex flex-col gap-5 my-2">
        {MANIFESTO_WORDS.map((item, index) => (
          <motion.div
            key={item.word}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            className="group relative py-4 px-6 rounded-2xl bg-gradient-to-b from-[#14141c] to-[#0b0b10] border border-neutral-800/80 shadow-2xl flex items-center justify-center overflow-hidden"
          >
            {/* Soft backdrop glow behind word */}
            <div 
              className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity blur-xl pointer-events-none"
              style={{ background: item.glow }}
            />

            {/* Subtle numbering watermark */}
            <span className="absolute left-4 top-2 text-[10px] font-mono tracking-widest text-neutral-400">
              0{index + 1}
            </span>

            {/* Huge bold word */}
            <span 
              className={`text-3xl sm:text-4xl font-black tracking-wider uppercase font-sport bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
              style={{
                filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.8))',
              }}
            >
              {item.word}
            </span>

            {/* Right micro line */}
            <div className="absolute right-4 bottom-3 w-4 h-0.5 bg-[#ff6a00]/40 group-hover:w-8 group-hover:bg-[#ff6a00] transition-all" />
          </motion.div>
        ))}
      </div>

      {/* Conclusion Subtext */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8 max-w-xs px-4"
      >
        <p className="text-sm sm:text-base font-medium text-neutral-300 italic leading-relaxed">
          “Quando existe direção, cada treino passa a ter um propósito.”
        </p>
      </motion.div>
    </section>
  );
};
