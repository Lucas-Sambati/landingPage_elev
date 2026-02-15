import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Brain, TrendingUp, Utensils, Eye } from "lucide-react";
import consultoriaIA3 from "@/assets/consultoriaIA3.png";
import controleTreinos1 from "@/assets/controleTreinos1.png";

const AboutSection = () => {
  const navigate = useNavigate();

  const journeySteps = [
    {
      icon: <TrendingUp className="w-5 h-5 text-[#4F46E5]" />,
      title: "Você treina",
      text: "Registre seus treinos, pesos e evolução no app. Cada série conta.",
    },
    {
      icon: <Brain className="w-5 h-5 text-[#4F46E5]" />,
      title: "A IA aprende",
      text: "A inteligência artificial analisa seu histórico, métricas e progresso real.",
    },
    {
      icon: <Utensils className="w-5 h-5 text-[#4F46E5]" />,
      title: "Você recebe orientação",
      text: "Plano alimentar semanal + dicas de treino personalizadas — feitas para o seu momento.",
    },
    {
      icon: <Eye className="w-5 h-5 text-[#4F46E5]" />,
      title: "Ela acompanha",
      text: "Semana a semana, a IA ajusta suas orientações conforme você evolui.",
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center px-6 overflow-hidden">
      {/* Background sutil */}
      <div className="absolute inset-0 gradient-hero pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-lg mx-auto w-full flex-1 pt-10 pb-20">
        {/* Hook + Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-6"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-10">
            🧠 Consultoria Inteligente
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
            Imagine a inteligência artificial{" "}
            <span className="text-gradient">cuidando</span> de você.
          </h2>
          <p className="text-muted-foreground text-[15px] leading-relaxed">
            Acompanhamento semanal, dieta e treino personalizados.
          </p>
        </motion.div>

        {/* Mockups — primeiro contato visual com o app */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.35 }}
          className="flex gap-4 justify-center mb-10"
        >
          <div className="phone-mockup w-40 sm:w-48">
            <img src={consultoriaIA3} alt="Consultoria IA Elev" className="w-full" loading="lazy" />
          </div>
          <div className="phone-mockup w-40 sm:w-48 mt-8">
            <img src={controleTreinos1} alt="Controle de Treinos Elev" className="w-full" loading="lazy" />
          </div>
        </motion.div>

        {/* Card pontos negativos — modelo tradicional */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.3 }}
          className="glass-card p-5 mb-4 border-red-500/15"
        >
          <p className="text-center text-sm text-muted-foreground font-semibold mb-4 tracking-wide uppercase">
            O modelo tradicional
          </p>
          <div className="space-y-2.5">
            <div className="flex items-start gap-2.5 px-1">
              <span className="text-red-400 text-sm mt-0.5">✕</span>
              <p className="text-foreground/70 text-sm leading-relaxed">Personal e nutricionista não se conversam — treino e dieta desconectados</p>
            </div>
            <div className="flex items-start gap-2.5 px-1">
              <span className="text-red-400 text-sm mt-0.5">✕</span>
              <p className="text-foreground/70 text-sm leading-relaxed">Orientação genérica que não acompanha sua evolução real</p>
            </div>
            <div className="flex items-start gap-2.5 px-1">
              <span className="text-red-400 text-sm mt-0.5">✕</span>
              <p className="text-foreground/70 text-sm leading-relaxed">Consultas caras e esporádicas — você paga e espera semanas</p>
            </div>
            <div className="flex items-start gap-2.5 px-1">
              <span className="text-red-400 text-sm mt-0.5">✕</span>
              <p className="text-foreground/70 text-sm leading-relaxed">Sem acompanhamento contínuo — entre as consultas, você fica sozinho</p>
            </div>
          </div>
        </motion.div>

        {/* Card pontos positivos — Elev (destaque) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="glass-card p-5 mb-10 border-primary/40 ring-1 ring-primary/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <p className="text-center text-sm font-semibold mb-4 tracking-wide uppercase">
              <span className="text-gradient">Com o <span className="elev-brand">ELEV</span></span>
            </p>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5 px-1">
                <span className="text-[#22C55E] text-sm mt-0.5">✓</span>
                <p className="text-foreground text-sm leading-relaxed">Orientação semanal que evolui junto com seu progresso</p>
              </div>
              <div className="flex items-start gap-2.5 px-1">
                <span className="text-[#22C55E] text-sm mt-0.5">✓</span>
                <p className="text-foreground text-sm leading-relaxed">Plano alimentar + dicas de treino personalizadas para o seu momento</p>
              </div>
              <div className="flex items-start gap-2.5 px-1">
                <span className="text-[#22C55E] text-sm mt-0.5">✓</span>
                <p className="text-foreground text-sm leading-relaxed">Treino e dieta integrados — a IA enxerga tudo de forma conectada</p>
              </div>
              <div className="flex items-start gap-2.5 px-1">
                <span className="text-[#22C55E] text-sm mt-0.5">✓</span>
                <p className="text-foreground text-sm leading-relaxed">Disponível 24h — no seu celular, quando você precisar</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Como funciona - Jornada */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.3 }}
          className="mb-10"
        >
          <h3 className="text-lg font-semibold text-center mb-6 text-foreground/90" style={{ fontFamily: "'Inter', sans-serif" }}>
            Como funciona?
          </h3>

          <div className="space-y-3">
            {journeySteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.28 + i * 0.06, duration: 0.25 }}
                className="glass-card p-4 flex items-start gap-3.5"
              >
                <div className="mt-0.5 p-1.5 rounded-lg bg-primary/10 flex-shrink-0">
                  {step.icon}
                </div>
                <div>
                  <p className="text-foreground font-semibold text-[15px] mb-0.5">{step.title}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Diferencial emocional */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="text-muted-foreground text-center mb-10 leading-relaxed text-sm italic"
        >
          "Não é sobre substituir profissionais. É sobre ter a orientação que você precisa
          — acessível, contínua e que evolui junto com você — a qualquer hora."
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.25 }}
          className="text-center"
        >
          <button
            onClick={() => navigate("/funcionalidades")}
            className="bg-[#4F46E5] text-white font-medium text-sm sm:text-base px-8 py-3.5 rounded-full transition-all hover:bg-[#4338CA] hover:scale-[1.02] active:scale-[0.97] touch-manipulation"
            style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '0.02em' }}
          >
            Conhecer o <span className="elev-brand">ELEV</span>
          </button>
        </motion.div>
      </div>

      {/* Assinatura ELEV */}
      <span className="relative z-10 pb-8 flex items-center gap-1.5">
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

export default AboutSection;
