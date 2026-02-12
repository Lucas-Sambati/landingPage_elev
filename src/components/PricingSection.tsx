import { motion } from "framer-motion";
import { Check, ChevronDown, X, Zap, Crown, Rocket, Star } from "lucide-react";
import { useState } from "react";

const valueProps = [
  { icon: <Zap className="w-4 h-4" />, text: "Plano alimentar por IA" },
  { icon: <Star className="w-4 h-4" />, text: "Controle de treinos completo" },
  { icon: <Crown className="w-4 h-4" />, text: "Gamificação e ranking" },
  { icon: <Rocket className="w-4 h-4" />, text: "Conteúdo educacional" },
];

const plans = [
  {
    name: "Elev Start",
    icon: <Zap className="w-5 h-5" />,
    price: "R$24,90",
    period: "/mês",
    subtitle: "Comece com orientação inteligente e evolua no seu ritmo",
    popular: false,
    highlight: false,
    features: [
      { text: "Acesso completo ao app", included: true },
      { text: "Controle de treinos + histórico", included: true },
      { text: "Métricas do usuário (dashboard)", included: true },
      { text: "Pontos, levels e ranking da comunidade", included: true },
      { text: "1 consultoria por semana (métricas + dados personalizados)", included: true },
      { text: "Envio de foto do físico", included: false },
      { text: "Conteúdos avançados", included: false },
    ],
  },
  {
    name: "Elev Progress",
    icon: <Rocket className="w-5 h-5" />,
    price: "R$49,90",
    period: "/mês",
    subtitle: "Para quem quer evolução real e economizar centenas de reais por mês",
    popular: true,
    highlight: true,
    includes: "Inclui tudo do Start +",
    features: [
      { text: "🚀 3 consultorias por semana", included: true },
      { text: "📸 Envio de foto do físico para análise + mensagem opcional", included: true },
      { text: "🧠 IA com respostas mais profundas", included: true },
      { text: "📊 Melhor leitura do histórico e evolução", included: true },
      { text: "Conteúdos avançados", included: false },
    ],
  },
  {
    name: "Elev Elite",
    icon: <Crown className="w-5 h-5" />,
    price: "R$77,90",
    period: "/mês",
    subtitle: "Para usuários avançados, obsessivos por resultado. O nível mais alto de acompanhamento inteligente",
    popular: false,
    highlight: false,
    includes: "Inclui tudo do Progress +",
    features: [
      { text: "👑 Uso intensivo de consultorias semanais", included: true },
      { text: "🔓 Conteúdos avançados exclusivos (Cutting & bulking, Platôs e estagnação)", included: true },
      { text: "⚡ Prioridade de processamento", included: true },
      { text: "🏆 Badge Elite no ranking", included: true },
      { text: "🧪 Acesso antecipado a novas features", included: true },
    ],
  },
];

const faqItems = [
  {
    q: "A IA realmente monta um plano alimentar personalizado?",
    a: "Sim. A cada consultoria, a IA analisa suas métricas, treinos recentes, objetivo e até foto do físico (opcional) para montar um plano alimentar semanal sob medida. Não é um template genérico — é um plano que evolui junto com o seu progresso. Para condições médicas específicas, sempre recomendamos acompanhamento profissional.",
  },
  {
    q: "Nunca treinei. O Elev funciona pra mim?",
    a: "Foi pensado especialmente pra você. O Elev tem vídeos de execução para cada exercício, explicações sobre cada grupo muscular e a IA adapta todas as recomendações ao seu nível atual. Você começa no seu ritmo e o sistema cresce junto com a sua evolução.",
  },
  {
    q: "Como funciona a gamificação e o ranking?",
    a: "Cada treino registrado, consultoria feita e meta batida gera XP. Conforme acumula XP, você sobe de nível e escala no ranking da comunidade. É a motivação que faltava para manter a consistência — porque resultado vem de constância, e constância vem de hábito.",
  },
  {
    q: "Qual a diferença entre os planos?",
    a: "Cada plano evolui sobre o anterior. O Start traz 1 consultoria semanal, controle de treinos e ranking. O Progress adiciona 3 consultorias, envio de foto do físico e IA mais profunda. O Elite libera uso intensivo, conteúdos avançados exclusivos, badge no ranking e acesso antecipado a novidades. Se está em dúvida, o Progress é o equilíbrio perfeito entre custo e resultado.",
  },
  {
    q: "Posso cancelar a qualquer momento?",
    a: "Sim, sem letras miúdas e sem burocracia. Você cancela quando quiser direto pelo app, sem precisar ligar pra ninguém. Mas sendo sincero: quem começa a ver os resultados no dashboard não quer mais parar.",
  },
  {
    q: "O que torna o Elev diferente de outros apps de treino?",
    a: "A maioria dos apps só controla séries e repetições. O Elev integra controle de treino + consultoria alimentar com IA + gamificação + comunidade em uma única experiência. É como ter um personal, um nutricionista e uma comunidade motivadora no seu bolso — por uma fração do custo.",
  },
];

const PricingSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="relative min-h-screen flex flex-col items-center px-6 overflow-hidden">
      {/* Background sutil */}
      <div className="absolute inset-0 gradient-hero pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[180px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-lg mx-auto pt-10 pb-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            🚀 Sua escolha, sua evolução
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Escolha seu <span className="text-gradient">plano</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            Comece sua evolução hoje. Cancele quando quiser.
          </p>
        </motion.div>

        {/* Cards dos planos */}
        <div className="space-y-4 mb-16">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.3 }}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.highlight
                  ? "bg-gradient-to-b from-primary/10 via-card/90 to-card border-2 border-primary/40 shadow-[0_0_30px_hsl(244_76%_58%/0.12)]"
                  : "glass-card"
              }`}
            >
              {/* Banner do plano popular */}
              {plan.popular && (
                <div className="gradient-cta py-1.5 text-center">
                  <span className="text-white text-[11px] font-bold tracking-wider uppercase">
                    ⭐ Mais escolhido — melhor custo-benefício
                  </span>
                </div>
              )}

              <div className={`p-6 ${plan.popular ? "pt-5" : ""}`}>
                {/* Cabeçalho do card */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl ${
                      plan.highlight
                        ? "bg-primary/20 text-primary"
                        : "bg-secondary text-muted-foreground"
                    }`}>
                      {plan.icon}
                    </div>
                    <div>
                      <h3 className={`font-bold text-lg ${
                        plan.highlight ? "text-gradient" : "text-foreground"
                      }`}>
                        {plan.name}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{plan.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Preço */}
                <div className="flex items-baseline gap-1 mb-5">
                  <span className={`text-3xl font-extrabold ${
                    plan.highlight ? "text-white" : "text-foreground"
                  }`}>
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted-foreground">{plan.period}</span>
                </div>

                {/* Inclui tag */}
                {plan.includes && (
                  <p className={`text-xs font-semibold mb-3 ${
                    plan.highlight ? "text-primary" : "text-muted-foreground"
                  }`}>
                    {plan.includes}
                  </p>
                )}

                {/* Separador */}
                <div className={`h-px mb-5 ${
                  plan.highlight ? "bg-primary/20" : "bg-border/50"
                }`} />

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm">
                      {f.included ? (
                        <div className="w-5 h-5 rounded-full bg-[#22C55E]/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-[#22C55E]" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-muted/30 flex items-center justify-center flex-shrink-0">
                          <X className="w-3 h-3 text-muted-foreground/40" />
                        </div>
                      )}
                      <span className={f.included ? "text-foreground/90" : "text-muted-foreground/40 line-through"}>
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Botão */}
                <button
                  className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.97] touch-manipulation ${
                    plan.highlight
                      ? "gradient-cta text-white shadow-lg shadow-primary/25 hover:shadow-primary/40"
                      : "bg-secondary text-foreground hover:bg-secondary/80 border border-border/50"
                  }`}
                >
                  {plan.highlight ? "Começar com Progress" : "Escolher plano"}
                </button>

                {/* Tag extra para o destaque */}
                {plan.highlight && (
                  <p className="text-center text-[11px] text-muted-foreground mt-3">
                    7 dias grátis · sem compromisso
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">
              Ainda com dúvidas?
            </h3>
            <p className="text-sm text-muted-foreground">
              As respostas que você precisa antes de começar
            </p>
          </div>

          <div className="space-y-2.5">
            {faqItems.map((faq, i) => (
              <div
                key={i}
                className={`rounded-xl border transition-all duration-200 ${
                  openFaq === i
                    ? "bg-card border-primary/20"
                    : "bg-card/50 border-border/30 hover:border-border/60"
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-4 flex items-center justify-between text-left gap-3"
                >
                  <span className="font-medium text-foreground text-sm leading-snug">{faq.q}</span>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                    openFaq === i ? "bg-primary/20 rotate-180" : "bg-secondary"
                  }`}>
                    <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
                  </div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === i ? "auto" : 0,
                    opacity: openFaq === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Assinatura ELEV */}
      <span
        className="relative z-10 pb-8 text-[10px] font-semibold tracking-[0.4em] text-muted-foreground/80 opacity-60"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        ELEV
      </span>
    </section>
  );
};

export default PricingSection;
