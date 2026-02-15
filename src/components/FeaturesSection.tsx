import { motion, AnimatePresence } from "framer-motion";
import { Bot, Dumbbell, Brain, Trophy, Users, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { renderWithElevBrand } from "@/lib/utils";

import consultoriaIA1 from "@/assets/consultoriaIA1.png";
import consultoriaIA2 from "@/assets/consultoriaIA2.png";
import controleTreinos1 from "@/assets/controleTreinos1.png";
import controleTreinos2 from "@/assets/controleTreinos2.png";
import conteudoEducacional1 from "@/assets/conteudoEducacional1.png";
import conteudoEducacional2 from "@/assets/conteudoEducacional2.png";
import telaPerfil1 from "@/assets/telaPerfil1.png";
import telaPerfil2 from "@/assets/telaPerfil2.png";
import paginaInicial_Ranking from "@/assets/paginaInicial_Ranking.png";
import paginaInicial_Comunidade from "@/assets/paginaInicial_Comunidade.png";

interface Feature {
  icon: React.ReactNode;
  hook: string;
  title: string;
  description: string;
  highlights: string[];
  images: string[];
}

const features: Feature[] = [
  {
    icon: <Dumbbell className="w-5 h-5" />,
    hook: "Seu caderninho de treino? Esquece.",
    title: "Controle Total do Treino",
    description:
      "Registre séries, cargas e descanso com a precisão de uma planilha — e a praticidade de um toque. Histórico completo, vídeos de execução e métricas de evolução.",
    highlights: [
      "Layout inspirado em planilha, adaptado para o celular",
      "Vídeos de execução para cada exercício",
      "Histórico detalhado de evolução de carga",
    ],
    images: [controleTreinos1, controleTreinos2],
  },
  {
    icon: <Bot className="w-5 h-5" />,
    hook: "Orientação que evolui junto com você.",
    title: "Consultoria com IA",
    description:
      "Suas métricas, seu histórico, seu físico — tudo é analisado pela IA para gerar um plano alimentar semanal e dicas de treino personalizadas para o seu momento.",
    highlights: [
      "Plano alimentar semanal personalizado",
      "Dicas de treino baseadas no seu progresso",
      "Disponível 24h, quando você precisar",
    ],
    images: [consultoriaIA1, consultoriaIA2],
  },
  {
    icon: <Brain className="w-5 h-5" />,
    hook: "Treinar sem entender é desperdiçar potencial.",
    title: "Conteúdo que Transforma",
    description:
      "Módulos educativos e dinâmicos sobre treino, nutrição e mentalidade. Não é teoria genérica — é conhecimento aplicável que muda a forma como você treina.",
    highlights: [
      "Módulos organizados por tema e nível",
      "Conteúdo direto, prático e visual",
      "Aprenda no seu ritmo, dentro do app",
    ],
    images: [conteudoEducacional1, conteudoEducacional2],
  },
  {
    icon: <Trophy className="w-5 h-5" />,
    hook: "Cada treino vale pontos. Cada ponto conta.",
    title: "Sistema de Pontos & Níveis",
    description:
      "Ganhe XP a cada treino registrado, suba de nível e desbloqueie conquistas. O Elev transforma disciplina em jogo — e jogar é muito mais fácil do que se forçar.",
    highlights: [
      "XP por treino finalizado e metas batidas",
      "Níveis que mostram sua consistência",
      "Conquistas que celebram seu progresso",
    ],
    images: [telaPerfil1, telaPerfil2],
  },
  {
    icon: <Users className="w-5 h-5" />,
    hook: "Você não treina sozinho.",
    title: "Ranking da Comunidade",
    description:
      "Compare seu progresso com outros usuários do Elev. Rankings semanais, conquistas compartilhadas e a motivação de saber que tem gente crescendo junto com você.",
    highlights: [
      "Rankings semanais e mensais",
      "Veja quem está no topo e se inspire",
      "Motivação através de competição saudável",
    ],
    images: [paginaInicial_Ranking, paginaInicial_Comunidade],
  },
];

const FeaturesSection = () => {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    containScroll: false,
    loop: false,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section className="relative flex flex-col items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[180px] pointer-events-none" />

      <div className="relative z-10 w-full pt-10 pb-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10 px-6"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-10">
            🎯 Muito além da consultoria
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-3">
            Tudo o que você precisa.
            <br />
            <span className="text-gradient">Em um único app.</span>
          </h2>
        </motion.div>

        {/* Swipe hint */}
        <AnimatePresence>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center text-muted-foreground/50 text-xs mt-4 px-6 mb-5"
            >
              Deslize para o lado →
            </motion.p>
        </AnimatePresence>

        {/* Carrossel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex-[0_0_100%] min-w-0 px-6"
              >
                <div className="max-w-lg mx-auto">
                  {/* Número + Hook */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-primary/40 tabular-nums">
                      0{idx + 1}
                    </span>
                    <span className="h-px flex-1 bg-border/50" />
                    <span className="text-xs text-muted-foreground/40">
                      {idx + 1}/{features.length}
                    </span>
                  </div>
                  <p className="text-primary text-sm font-medium mb-1.5 tracking-wide">
                    {feature.hook}
                  </p>

                  {/* Título + Ícone */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl gradient-cta flex items-center justify-center text-primary-foreground flex-shrink-0">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold">{feature.title}</h3>
                  </div>

                  {/* Descrição */}
                  <p className="text-muted-foreground text-[15px] leading-relaxed mb-4">
                    {renderWithElevBrand(feature.description)}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    {feature.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <span className="text-[#22C55E] text-sm mt-0.5 flex-shrink-0">✓</span>
                        <p className="text-foreground/80 text-sm leading-relaxed">{h}</p>
                      </div>
                    ))}
                  </div>

                  {/* Phone Mockups — pares mantidos */}
                  <div className="flex gap-4 justify-center">
                    {feature.images.map((img, i) => (
                      <div
                        key={img}
                        className={`phone-mockup w-40 sm:w-48 ${i === 1 ? "mt-6" : ""}`}
                      >
                        <img
                          src={img}
                          alt={feature.title}
                          className="w-full"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Indicador de slide + Setas */}
        <div className="flex items-center justify-center gap-4 mt-4 mb-6 px-6">
          <button
            onClick={scrollPrev}
            disabled={selectedIndex === 0}
            className="w-8 h-8 rounded-full bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-1.5">
            {features.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  selectedIndex === i
                    ? "w-6 bg-primary"
                    : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>

          <button
            onClick={scrollNext}
            disabled={selectedIndex === features.length - 1}
            className="w-8 h-8 rounded-full bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Frase de transição + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mt-10 px-6"
        >
          <p className="text-muted-foreground text-sm leading-relaxed mb-2 italic">
            "Tá, parece bom. Mas funciona de verdade?"
          </p>
          <p className="text-foreground/90 text-[15px] font-medium mb-8">
            Veja o que quem já está usando tem a dizer.
          </p>

          <button
            onClick={() => navigate("/depoimentos")}
            className="group bg-[#4F46E5] text-white font-medium text-sm sm:text-base px-8 py-3.5 rounded-full transition-all hover:bg-[#4338CA] hover:scale-[1.02] active:scale-[0.97] touch-manipulation inline-flex items-center gap-2"
            style={{ letterSpacing: "0.02em" }}
          >
            Ver resultados reais
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </motion.div>
      </div>

      {/* Assinatura ELEV */}
      <span className="relative z-10 pb-8 pt-8 flex items-center gap-1.5">
        <span
          className="text-[10px] elev-brand"
          style={{ color: "#4F46E5" }}
        >
          ELEV
        </span>
        <span className="text-[10px]" style={{ color: "#4F46E5" }}>•</span>
        <span
          className="text-[10px]"
          style={{ fontFamily: "'Inter', sans-serif", color: "#737d7f" }}
        >
          Eleve seu resultado
        </span>
      </span>
    </section>
  );
};

export default FeaturesSection;
