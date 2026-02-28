import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "ELEV Start",
    price: "R$ 24,90",
    period: "/mês",
    description: "Para quem está começando a treinar com estratégia.",
    features: [
      "Controle de treinos básico",
      "1 análise IA por semana",
      "Acesso à comunidade",
      "Conteúdos sobre treino",
      "Gamificação e ranking",
    ],
    cta: "Escolher plano",
    highlighted: false,
    href: "https://pay.kirvano.com/998314eb-56e1-4934-a7c9-d9357756aaa0",
  },
  {
    name: "ELEV Progress",
    price: "R$ 49,90",
    period: "/mês",
    description: "Para quem quer resultados reais com acompanhamento IA.",
    features: [
      "Tudo do Start",
      "3 análises IA por semana",
      "Envio de foto do físico para análise",
      "Envio de preferências para análise",
      "Melhor leitura do histórico e evolução",
    ],
    cta: "Evoluir agora",
    highlighted: true,
    href: "https://pay.kirvano.com/769cadb9-3e6d-404a-84dd-a96769d3e613",
  },
  {
    name: "ELEV Elite",
    price: "R$ 77,90",
    period: "/mês",
    description: "Para quem quer o máximo da plataforma e conteúdo premium.",
    features: [
      "Tudo do Progress",
      "5 análises IA por semana",
      "Conteúdo exclusivo Elite",
      "Badge Elite no perfil",
      "Suporte prioritário",
    ],
    cta: "Escolher plano",
    highlighted: false,
    href: "https://pay.kirvano.com/9028b67a-f369-4cfb-a866-df8936a1e029",
  },
];

const PricingSection = () => {
  return (
    <section id="planos" className="py-14 relative">
      <div className="absolute inset-0 bg-glow opacity-20" />
      <div className="container relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Planos</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Escolha o plano ideal para sua{" "}
            <span className="text-gradient-brand">evolução</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Escolha o plano que combina com você. Cancele quando quiser.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div key={plan.name} className="relative">
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1 px-3 py-1 rounded-full bg-background text-primary text-xs font-semibold glow-border-static">
                  <Sparkles className="w-3 h-3" />
                  Mais popular
                </div>
              )}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`rounded-2xl p-6 pt-8 flex flex-col h-full glass-card ${
                  plan.highlighted ? 'glow-border-pulse' : 'glow-border-static'
                }`}
              >
              <div className="mb-6">
                <h3 className={`text-lg font-semibold mb-1 ${plan.highlighted ? 'text-gradient-brand' : ''}`}>
                  {plan.name}
                </h3>
                <p className="text-sm mb-4 text-muted-foreground">
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className={`text-3xl font-bold ${plan.highlighted ? 'text-gradient-brand' : ''}`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-sm text-muted-foreground">
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5">
                    <Check className={`w-4 h-4 flex-shrink-0 ${plan.highlighted ? 'text-primary text-glow' : 'text-success'}`} />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant="hero"
                size="lg"
                asChild
              >
                <a href={plan.href} target="_blank" rel="noopener noreferrer">
                  {plan.cta}
                </a>
              </Button>
              <p className="text-xs text-center mt-3 text-muted-foreground/60">
                · Ambiente Seguro ·
              </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
