import React from 'react';
import { BackgroundFX } from './components/BackgroundFX';
import { JourneyTracker } from './components/JourneyTracker';
import { HeroSection } from './components/HeroSection';
import { GoalSection } from './components/GoalSection';
import { MethodSection } from './components/MethodSection';
import { TeamMWSection } from './components/TeamMWSection';
import { TransformationSection } from './components/TransformationSection';
import { ResultsSection } from './components/ResultsSection';
import { SocialSection } from './components/SocialSection';
import { FinalCTASection } from './components/FinalCTASection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050507] text-neutral-100 flex justify-center overflow-x-hidden selection:bg-[#ff5500] selection:text-white">
      {/* Cinematic subtle background motion effects */}
      <BackgroundFX />

      {/* Mobile-First App Wrapper */}
      <main className="relative z-10 w-full max-w-[480px] min-h-screen flex flex-col bg-[#08080c]/70 backdrop-blur-sm border-x border-neutral-800/40 shadow-[0_0_80px_rgba(0,0,0,0.95)]">
        {/* Top Journey Tracker Bar with illuminated progress line & 4 chapters */}
        <JourneyTracker />

        {/* 1. IMPACTO: Nova Abertura / Hero com Frase Animada e scroll suave */}
        <HeroSection onExploreClick={() => scrollTo('section-objetivo')} />

        {/* 2. CURIOSIDADE & IDENTIFICAÇÃO: Qual é o seu próximo nível? */}
        <GoalSection onContinueClick={() => scrollTo('section-metodo')} />

        {/* 3. MÉTODO: Não é treino genérico / Planejamento, Acompanhamento, Performance */}
        <MethodSection />

        {/* 4. TIME MW: Revelação Cinematográfica */}
        <TeamMWSection onLearnMoreClick={() => scrollTo('section-transformacao')} />

        {/* 5. TRANSFORMAÇÃO: Disciplina, Constância, Evolução, Resultado */}
        <div id="section-transformacao">
          <TransformationSection />
        </div>

        {/* 6. RESULTADOS: Espaço Modular para Evolução Time MW */}
        <ResultsSection />

        {/* 7. INSTAGRAM: Acompanhe o dia a dia do Time MW */}
        <SocialSection />

        {/* 8. DECISÃO & CONTATO: O único CTA comercial forte com WhatsApp 3D */}
        <FinalCTASection />
      </main>

      {/* Floating WhatsApp button: discreto, elegante e não obstrutivo */}
      <FloatingWhatsApp />
    </div>
  );
}
