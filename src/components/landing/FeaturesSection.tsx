import { motion } from "framer-motion";
import { Dumbbell, Brain, Trophy, BookOpen } from "lucide-react";

const features = [
  {
    icon: Dumbbell,
    title: "Controle de Treinos",
    description: "Registre cargas, repetições e acompanhe sua evolução em tempo real com um layout intuitivo inspirado em planilhas.",
  },
  {
    icon: Brain,
    title: "Consultoria IA",
    description: "Receba plano de treino + alimentar personalizado com base nas suas métricas. Como ter um personal e nutricionista no bolso.",
  },
  {
    icon: Trophy,
    title: "Gamificação & Ranking",
    description: "Suba de nível, acumule pontos semanais e dispute posições no ranking da comunidade. Treinar nunca foi tão motivador.",
  },
  {
    icon: BookOpen,
    title: "Conteúdo Exclusivo",
    description: "Módulos educativos sobre treino, nutrição e mindset. Conteúdo premium para assinantes Elev Elite.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-14 relative">
      <div className="absolute inset-0 bg-glow opacity-30" />
      <div className="container relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Funcionalidades</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Tudo que você precisa para{" "}
            <span className="text-gradient-brand">evoluir</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            O ELEV integra treino, alimentação, comunidade e inteligência artificial em uma única plataforma.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card glow-border-static rounded-xl p-6 hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
