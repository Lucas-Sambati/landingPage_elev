import { m } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, ShieldCheck } from "lucide-react";

const plans = [
  {
    name: "ELEV Start",
    price: "R$ 38",
    period: "/mês",
    description: "Para começar com o pé direito.",
    features: [
      "Controle completo de treinos",
      "1 consultoria IA por semana",
      "Gamificação & Ranking",
      "Comunidade",
    ],
    cta: "Começar com o Start",
    highlighted: false,
    href: "https://pay.kirvano.com/998314eb-56e1-4934-a7c9-d9357756aaa0",
  },
  {
    name: "ELEV Progress",
    price: "R$ 47",
    period: "/mês",
    description: "Para quem quer resultado de verdade.",
    features: [
      "Tudo do Start",
      "3 consultorias IA completas/semana",
      "Análise com foto do físico",
      "Envio de preferências e objetivos",
      "Leitura inteligente da sua evolução",
      "Plano de treino personalizado",
      "Plano alimentar estratégico",
      "Todos os conteúdos educativos",
    ],
    cta: "Quero o Progress",
    highlighted: true,
    href: "https://pay.kirvano.com/769cadb9-3e6d-404a-84dd-a96769d3e613",
  },
  {
    name: "ELEV Elite",
    price: "R$ 89",
    period: "/mês",
    description: "Para quem não aceita menos que o máximo.",
    features: [
      "Tudo do Progress",
      "5 consultorias IA completas/semana",
      "Conteúdo exclusivo Elite",
      "Badge Elite no ranking",
      "Suporte prioritário",
    ],
    cta: "Quero o Elite",
    highlighted: false,
    href: "https://pay.kirvano.com/9028b67a-f369-4cfb-a866-df8936a1e029",
  },
];

const PricingSection = () => {
  return (
    <section id="planos" className="py-16 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-primary/40" />
      <div className="absolute inset-0 bg-glow opacity-20" />
      <div className="container relative z-10">
        <m.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Planos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-3">
            Escolha seu{" "}
            <span className="text-gradient-brand">nível de evolução</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto text-sm sm:text-base">
            Experimente por 7 dias. Se não sentir a diferença, devolvemos seu
            dinheiro. Sem perguntas.
          </p>
        </m.div>

        {/* Âncora de preço */}
        <m.div
          className="max-w-2xl mx-auto mb-10 glass-card rounded-2xl border border-border/50 p-5 grid sm:grid-cols-3 gap-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="space-y-0.5">
            <p className="text-xs text-muted-foreground uppercase tracking-wide">
              Personal trainer
            </p>
            <p className="text-xl font-bold text-destructive/80">
              R$ 150+<span className="text-sm font-normal">/hora</span>
            </p>
          </div>
          <div className="space-y-0.5">
            <p className="text-xs text-muted-foreground uppercase tracking-wide">
              Nutricionista
            </p>
            <p className="text-xl font-bold text-destructive/80">
              R$ 200+<span className="text-sm font-normal">/consulta</span>
            </p>
          </div>
          <div className="space-y-0.5 sm:border-l sm:border-border/50 sm:pl-4">
            <p className="text-xs text-primary uppercase tracking-wide font-semibold">
              ELEV Progress
            </p>
            <p className="text-xl font-bold text-gradient-brand">
              R$ 47
              <span className="text-sm font-normal text-muted-foreground">
                /mês
              </span>
            </p>
            <p className="text-[11px] text-muted-foreground">
              (≈ R$ 1,57 por dia)
            </p>
            <p className="text-[11px] text-foreground/70 font-medium mt-0.5">
              Menos que um café. Mais que um personal.
            </p>
          </div>
        </m.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div key={plan.name} className="relative">
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-background text-primary text-sm font-bold text-glow border border-primary/30">
                  <Sparkles className="w-4 h-4" />
                  Mais popular
                </div>
              )}
              <m.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`rounded-2xl p-6 pt-8 flex flex-col h-full glass-card ${
                  plan.highlighted
                    ? "shimmer-card glow-border-pulse scale-[1.03]"
                    : "border border-border"
                }`}
              >
                <div className="mb-6">
                  <h3
                    className={`text-lg font-bold mb-1 ${plan.highlighted ? "text-gradient-brand" : ""}`}
                  >
                    {plan.name}
                  </h3>
                  <p className="text-sm mb-4 text-muted-foreground">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`text-4xl font-bold ${plan.highlighted ? "text-gradient-brand" : ""}`}
                    >
                      {plan.price}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {plan.period}
                    </span>
                  </div>
                  {plan.highlighted && (
                    <p className="text-[11px] text-amber-400/90 font-semibold mt-1.5 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 inline-block" />
                      Preço de lançamento — pode ser reajustado
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-4 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check
                        className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                          plan.highlighted
                            ? "text-primary text-glow"
                            : "text-success"
                        }`}
                      />
                      <span className="text-sm text-muted-foreground leading-snug">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {plan.highlighted && (
                  <div className="mb-6 px-3 py-2.5 rounded-lg bg-amber-400/10 border border-amber-400/20">
                    <p className="text-xs text-amber-400/90 font-semibold flex items-center gap-1.5">
                      <span>🎁</span>
                      Bônus de lançamento: Guia "Os 7 erros que travam seu
                      shape" — exclusivo para assinantes.
                    </p>
                  </div>
                )}

                <Button variant="hero" size="lg" className="w-full" asChild>
                  <a href={plan.href} target="_blank" rel="noopener noreferrer">
                    {plan.cta}
                  </a>
                </Button>
                <p className="text-xs text-center mt-3 text-muted-foreground/60 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-success" />
                  Ambiente seguro · Garantia de 7 dias
                </p>
              </m.div>
            </div>
          ))}
        </div>

        <m.p
          className="text-center mt-10 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Em dúvida? O <strong className="text-foreground/80">Progress</strong>{" "}
          é o equilíbrio perfeito entre custo e resultado.
        </m.p>

        <m.p
          className="text-center mt-3 text-xs text-muted-foreground/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Quem assina agora mantém o valor mesmo quando os preços forem
          reajustados.
        </m.p>
      </div>
    </section>
  );
};

export default PricingSection;
