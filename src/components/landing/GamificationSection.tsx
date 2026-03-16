import { m } from "framer-motion";
import { Flame, Trophy, TrendingUp, Zap } from "lucide-react";

const steps = [
  {
    icon: Zap,
    title: "Registre o treino",
    description: "Cada série registrada gera XP e alimenta sua análise de IA.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: TrendingUp,
    title: "Suba de nível",
    description: "Seu XP acumula e seu nível cresce com a consistência.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    icon: Trophy,
    title: "Dispute no ranking",
    description: "Pontos semanais colocam você no ranking da comunidade.",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
  },
  {
    icon: Flame,
    title: "Mantenha o streak",
    description: "Cada dia treinado mantém sua sequência ativa — e o hábito vivo.",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
  },
];

const GamificationSection = () => {
  return (
    <section id="gamification" className="py-16 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-primary/40" />
      <div className="absolute inset-0 bg-glow opacity-20" />

      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Texto */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Gamificação</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4 leading-tight">
              Seu cérebro foi programado{" "}
              <span className="text-gradient-brand">pra se acomodar.</span>
              <br />
              O ELEV reprograma.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Falta de vontade não é preguiça — é biologia. O sistema de gamificação do ELEV dá ao seu cérebro{" "}
              <strong className="text-foreground/90">o que ele precisa para querer voltar amanhã.</strong>
            </p>

            <div className="space-y-4">
              {steps.map((step, i) => (
                <m.div
                  key={step.title}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                >
                  <div className={`w-10 h-10 rounded-lg ${step.bg} flex items-center justify-center flex-shrink-0`}>
                    <step.icon className={`w-5 h-5 ${step.color}`} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-0.5">{step.title}</p>
                    <p className="text-muted-foreground text-sm leading-snug">{step.description}</p>
                  </div>
                </m.div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <a href="#features" className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors">
                Ver tudo o que o ELEV oferece ↓
              </a>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default GamificationSection;
