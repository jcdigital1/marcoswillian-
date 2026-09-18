import React, { useEffect, useState } from 'react';
import { JOURNEY_STEPS } from '../types';

export const JourneyTracker: React.FC = () => {
  const [activeStep, setActiveStep] = useState<string>('step-1');
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(Math.max(scrollY / docHeight, 0), 1) : 0;
      setScrollProgress(progress);

      // Detect active step based on section offsets
      for (let i = JOURNEY_STEPS.length - 1; i >= 0; i--) {
        const el = document.getElementById(JOURNEY_STEPS[i].targetId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            setActiveStep(JOURNEY_STEPS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="sticky top-0 z-40 w-full bg-[#07070a]/90 backdrop-blur-md border-b border-neutral-800/60 shadow-lg">
      {/* Dynamic orange progress indicator line */}
      <div 
        className="h-[2px] bg-gradient-to-r from-[#ff5500] via-[#ff7700] to-[#ffaa33] transition-all duration-150 ease-out shadow-[0_0_8px_#ff5500]"
        style={{ width: `${Math.max(scrollProgress * 100, 3)}%` }}
      />

      {/* 4 Journey Chapters */}
      <div className="px-3 py-2 flex items-center justify-between max-w-[460px] mx-auto text-[10px] sm:text-xs">
        {JOURNEY_STEPS.map((step, idx) => {
          const isActive = activeStep === step.id;
          const isPassed = JOURNEY_STEPS.findIndex((s) => s.id === activeStep) >= idx;

          return (
            <button
              key={step.id}
              onClick={() => scrollToSection(step.targetId)}
              className={`flex items-center gap-1.5 transition-all duration-300 py-0.5 px-1.5 rounded-md ${
                isActive
                  ? 'text-[#ff6a00] font-bold scale-105'
                  : isPassed
                  ? 'text-neutral-300 font-medium'
                  : 'text-neutral-400 font-normal hover:text-neutral-300'
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-[#ff5500] shadow-[0_0_8px_#ff5500] scale-125'
                    : isPassed
                    ? 'bg-[#ff8833]/80'
                    : 'bg-neutral-800'
                }`}
              />
              <span className="tracking-wider">{step.num}</span>
              <span className="tracking-wide hidden min-[360px]:inline">{step.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
