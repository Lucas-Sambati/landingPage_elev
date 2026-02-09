import { motion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Elev Start",
    price: "R$27",
    period: "/mês",
    description: "1 consultoria por semana",
    popular: false,
    features: [
      "1 consultoria IA/semana",
      "Controle de treinos",
      "Gamificação e XP",
      "Comunidade",
    ],
  },
  {
    name: "Elev Progress",
    price: "R$49,90",
    period: "/mês",
    description: "3 consultorias por semana",
    popular: true,
    features: [
      "3 consultorias IA/semana",
      "Controle de treinos",
      "Gamificação e XP",
      "Comunidade + Ranking",
      "Conteúdo educacional",
    ],
  },
  {
    name: "Elev Elite",
    price: "R$79,90",
    period: "/mês",
    description: "1 consultoria por dia",
    popular: false,
    features: [
      "7 consultorias IA/semana",
      "Tudo do Progress",
      "Suporte prioritário",
      "Análise avançada",
    ],
  },
];

const faqItems = [
  {
    q: "A IA substitui nutricionista?",
    a: "O Elev é uma ferramenta de apoio. A IA oferece planos alimentares baseados em dados, mas para condições médicas específicas, consulte um profissional.",
  },
  {
    q: "Preciso ser avançado?",
    a: "Não! O Elev se adapta ao seu nível. Iniciantes recebem orientações detalhadas e exercícios com vídeos explicativos.",
  },
  {
    q: "Funciona para iniciantes?",
    a: "Sim! Foi feito especialmente pensando em quem está começando. A IA ajusta tudo ao seu perfil.",
  },
  {
    q: "Posso cancelar quando quiser?",
    a: "Sim, sem burocracia. Cancele a qualquer momento diretamente pelo app.",
  },
];

const PricingSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="py-20 px-6">
      <div className="max-w-lg mx-auto">
        {/* Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-3">
            Escolha seu <span className="text-gradient">plano</span>
          </h2>
          <p className="text-muted-foreground">Comece sua evolução hoje.</p>
        </motion.div>

        <div className="space-y-4 mb-16">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.25 }}
              className={`glass-card p-6 relative ${
                plan.popular ? "border-primary/50 ring-1 ring-primary/30" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-cta text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                  MAIS POPULAR
                </span>
              )}
              <div className="flex items-end justify-between mb-4">
                <div>
                  <h3 className="font-bold font-display text-lg text-foreground">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold font-display text-foreground">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-2">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-[#22C55E] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full mt-5 py-3 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? "gradient-cta text-primary-foreground glow"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                Começar agora
              </button>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-2xl font-bold font-display mb-6 text-center">
            Perguntas frequentes
          </h3>
          <div className="space-y-3">
            {faqItems.map((faq, i) => (
              <div key={i} className="glass-card overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-4 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-foreground text-sm">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-muted-foreground transition-transform flex-shrink-0 ml-2 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
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
    </section>
  );
};

export default PricingSection;
