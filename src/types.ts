export interface LinkConfig {
  label: string;
  url: string;
}

export const APP_LINKS = {
  mainLogo: 'https://i.postimg.cc/rFX6pTd8/Convite-de-Aniversario-Colagem-com-Foto-Divertido-Branco.png',
  teamMwLogo: 'https://i.postimg.cc/28Rp5Yqn/5DBE1D9D-C3C8-4E98-A9C1-A233508DDCC5.png',
  whatsapp: 'https://wa.link/s8gahy',
  instagram: 'https://www.instagram.com/marcos_willian.oficial?stkn=MXMyNWw2NXNtanc5cg==',
  instagramHandle: '@marcos_willian.oficial',
} as const;

export interface GoalOption {
  id: string;
  emoji: string;
  label: string;
}

export const GOALS: GoalOption[] = [
  { id: 'fisico', emoji: '🔥', label: 'Quero melhorar meu físico' },
  { id: 'condicionamento', emoji: '⚡', label: 'Quero mais condicionamento' },
  { id: 'forca', emoji: '💪', label: 'Quero ganhar força' },
  { id: 'desempenho', emoji: '🏃', label: 'Quero melhorar meu desempenho' },
];

export interface MethodCard {
  id: string;
  title: string;
  description: string;
}

export const METHOD_CARDS: MethodCard[] = [
  {
    id: 'planejamento',
    title: 'PLANEJAMENTO',
    description: 'Treino pensado de acordo com seus objetivos.',
  },
  {
    id: 'acompanhamento',
    title: 'ACOMPANHAMENTO',
    description: 'Sua evolução não acontece no escuro.',
  },
  {
    id: 'performance',
    title: 'PERFORMANCE',
    description: 'Força, condicionamento e desempenho trabalhando juntos.',
  },
];

export interface JourneyStep {
  id: string;
  num: string;
  name: string;
  targetId: string;
}

export const JOURNEY_STEPS: JourneyStep[] = [
  { id: 'step-1', num: '01', name: 'OBJETIVO', targetId: 'section-objetivo' },
  { id: 'step-2', num: '02', name: 'MÉTODO', targetId: 'section-metodo' },
  { id: 'step-3', num: '03', name: 'TIME MW', targetId: 'section-timemw' },
  { id: 'step-4', num: '04', name: 'COMEÇAR', targetId: 'section-comecar' },
];

