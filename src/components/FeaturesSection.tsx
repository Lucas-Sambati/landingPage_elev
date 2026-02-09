import { motion } from "framer-motion";
import { Bot, Dumbbell, Brain, Trophy, Globe } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import consultoriaIA1 from "@/assets/consultoriaIA1.png";
import consultoriaIA2 from "@/assets/consultoriaIA2.png";
import controleTreinos1 from "@/assets/controleTreinos1.png";
import controleTreinos2 from "@/assets/controleTreinos2.png";
import conteudoEducacional2 from "@/assets/conteudoEducacional2.png";
import telaPerfil1 from "@/assets/telaPerfil1.png";
import paginaInicial_Ranking from "@/assets/paginaInicial_Ranking.png";
import paginaInicial_Comunidade from "@/assets/paginaInicial_Comunidade.png";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  images: string[];
}

const features: Feature[] = [
  {
    icon: <Bot className="w-6 h-6" />,
    title: "Consultoria com IA",
    description: "Envie suas métricas e receba plano alimentar + dicas de treino personalizadas.",
    images: [consultoriaIA1, consultoriaIA2],
  },
  {
    icon: <Dumbbell className="w-6 h-6" />,
    title: "Controle de Treino",
    description: "Layout moderno com histórico, métricas e vídeos de execução para cada exercício.",
    images: [controleTreinos1, controleTreinos2],
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Aprendizado",
    description: "Módulos explicativos e dinâmicos para evoluir seu conhecimento fitness.",
    images: [conteudoEducacional2],
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Competição & Gamificação",
    description: "XP, níveis, conquistas e rankings para manter sua motivação no máximo.",
    images: [telaPerfil1, paginaInicial_Ranking],
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Rede Social Fitness",
    description: "Ranking da comunidade, conquistas e comparação saudável e motivacional.",
    images: [paginaInicial_Comunidade],
  },
];

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const navigate = useNavigate();

  return (
    <section className="py-20 px-6">
      <div className="max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            🎮 Desbloqueie suas habilidades
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display">
            O Sistema <span className="text-gradient">Elev</span>
          </h2>
        </motion.div>

        {/* Feature selector pills */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide">
          {features.map((f, i) => (
            <motion.button
              key={i}
              onClick={() => setActiveFeature(i)}
              whileTap={{ scale: 0.95 }}
              className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeFeature === i
                  ? "gradient-cta text-primary-foreground glow"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {f.icon}
              <span className="whitespace-nowrap">{f.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Active feature content */}
        <motion.div
          key={activeFeature}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="glass-card p-6 mb-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl gradient-cta flex items-center justify-center text-primary-foreground">
                {features[activeFeature].icon}
              </div>
              <h3 className="text-xl font-bold font-display">{features[activeFeature].title}</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {features[activeFeature].description}
            </p>
          </div>

          {/* Phone mockups */}
          <div className="flex gap-4 justify-center">
            {features[activeFeature].images.map((img, i) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className={`phone-mockup ${
                  features[activeFeature].images.length === 1 ? "w-52 sm:w-60" : "w-40 sm:w-48"
                } ${i === 1 ? "mt-6" : ""}`}
              >
                <img src={img} alt={features[activeFeature].title} className="w-full" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mt-8">
          {features.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveFeature(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                activeFeature === i ? "w-6 bg-primary" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>

        {/* Next page button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => navigate("/depoimentos")}
            className="gradient-cta text-primary-foreground font-semibold px-8 py-3.5 rounded-xl glow transition-all"
          >
            Ver depoimentos
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
