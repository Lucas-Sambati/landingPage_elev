import { m } from "framer-motion";
import { X, Check } from "lucide-react";

const rows = [
  { feature: "Controle de treinos", others: true, elev: true },
  { feature: "Plano de treino personalizado", others: false, elev: true },
  { feature: "Plano alimentar estratégico", others: false, elev: true },
  { feature: "Consultoria com IA", others: false, elev: true },
  { feature: "Envio de foto para análise", others: false, elev: true },
  { feature: "Gamificação e ranking", others: false, elev: true },
  { feature: "Comunidade ativa", others: false, elev: true },
  { feature: "Conteúdo educativo exclusivo", others: false, elev: true },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-primary/40" />
      <div className="absolute inset-0 bg-glow opacity-15" />
      <div className="container relative z-10">
        <m.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Comparação
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-3">
            Por que o ELEV{" "}
            <span className="text-gradient-brand">
              funciona onde os outros falham?
            </span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm sm:text-base">
            Apps de treino controlam séries. Nutricionistas custam R$200 por
            consulta. Personais montam um PDF e somem. O ELEV integra tudo — num
            único lugar.
          </p>
        </m.div>

        <m.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Header */}
          <div className="grid grid-cols-3 mb-3 px-4">
            <span className="col-span-1 text-xs text-muted-foreground uppercase tracking-wide">
              Recurso
            </span>
            <span className="text-center text-xs text-muted-foreground uppercase tracking-wide">
              Outros apps
            </span>
            <span className="text-center text-xs font-bold text-primary uppercase tracking-wide">
              ELEV
            </span>
          </div>

          <div className="glass-card rounded-2xl border border-border/50 divide-y divide-border/40 overflow-hidden">
            {rows.map((row, i) => (
              <m.div
                key={row.feature}
                className="grid grid-cols-3 items-center px-4 py-3.5"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.3 }}
              >
                <span className="text-sm text-muted-foreground col-span-1 pr-2 leading-snug">
                  {row.feature}
                </span>
                <div className="flex justify-center">
                  {row.others ? (
                    <Check className="w-4 h-4 text-muted-foreground/40" />
                  ) : (
                    <X className="w-4 h-4 text-destructive/70" />
                  )}
                </div>
                <div className="flex justify-center">
                  <Check className="w-5 h-5 text-primary text-glow" />
                </div>
              </m.div>
            ))}
          </div>
        </m.div>

        <div className="mt-10 text-center">
          <a
            href="#historia"
            className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
          >
            Conhecer quem criou o ELEV ↓
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
