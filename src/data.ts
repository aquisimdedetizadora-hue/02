import { ServiceItem, ProjectItem, MetricItem } from './types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    number: "01",
    title: "Estratégia",
    description: "Transformamos ideias em direções claras, relevantes e prontas para crescer.",
    details: [
      "Diagnóstico e posicionamento de marca",
      "Arquitetura de produto e roadmap digital",
      "Benchmarking e análise de ecossistema",
      "Definição de métricas e proposta de valor"
    ]
  },
  {
    number: "02",
    title: "Design",
    description: "Criamos experiências digitais sofisticadas, intuitivas e memoráveis.",
    details: [
      "Design Systems escaláveis e documentados",
      "Identidades visuais com alto impacto",
      "UI/UX Design para plataformas web e mobile",
      "Prototipagem de alta fidelidade e microinterações"
    ]
  },
  {
    number: "03",
    title: "Tecnologia",
    description: "Construímos soluções rápidas, escaláveis e preparadas para o futuro.",
    details: [
      "Engenharia front-end moderna e acessível",
      "Aplicações web performáticas em React e TypeScript",
      "Integrações de APIs e arquitetura headless",
      "Otimização extrema de Core Web Vitals e SEO"
    ]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "nova-forma",
    category: "BRAND EXPERIENCE",
    title: "NOVA\nFORMA",
    subtitle: "Redefinindo a identidade para a era dos ecossistemas digitais globais.",
    type: "dark",
    client: "Nova Forma Group",
    year: "2025",
    summary: "Uma renovação de marca completa e plataforma interativa centrada na fluidez e precisão arquitetônica contemporânea.",
    deliverables: [
      "Sistema de Identidade Visual e Tipografia Customizada",
      "Diretrizes Digitais e Brand Guidelines",
      "Plataforma Web Interativa com WebGL",
      "Experiência Multidispositivo Fluida"
    ]
  },
  {
    id: "simplify-everything",
    category: "DIGITAL PRODUCT",
    title: "SIMPLIFY\nEVERYTHING",
    subtitle: "Plataforma de produtividade e análise financeira com foco em clareza absoluta.",
    type: "light",
    client: "Simplify Labs",
    year: "2026",
    summary: "Design de produto e engenharia para uma suíte de inteligência operacional que elimina 90% da fricção em decisões empresariais.",
    deliverables: [
      "Design System com Glassmorphism e Microinterações",
      "Arquitetura de Informação e Fluxos de Usuário",
      "Dashboard Analítico de Alta Densidade",
      "Otimização de Performance e Acessibilidade WCAG AA"
    ]
  }
];

export const METRICS_DATA: MetricItem[] = [
  { value: "12+", label: "anos criando experiências" },
  { value: "80", label: "projetos realizados" },
  { value: "15", label: "especialistas" },
  { value: "∞", label: "possibilidades" }
];
