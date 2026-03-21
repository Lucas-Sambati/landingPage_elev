import { m } from "framer-motion";
import { XCircle } from "lucide-react";

const pains = [
  "Fica semanas treinando, mas o espelho quase não muda",
  "Vê os outros evoluindo e sente que você está ficando para trás",
  "Não sabe exatamente o que comer para ter resultado de verdade",
  "Começa cheio de animação e some depois de 2 semanas",
  "Já tentou app, planilha e personal — nada durou",
  "Passa pela academia vendo o mesmo físico há meses, sem mudar nada",
];

const PainSection = () => {
  return (
    <section id="dor" className="py-16 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-primary/40" />
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto">
          <m.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Se isso parece familiar...{" "}
              <span className="text-gradient-brand">não é coincidência.</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              Antes de continuar, leia isso com atenção.
            </p>
          </m.div>

          <m.div
            className="glass-card rounded-2xl p-6 sm:p-8 border border-border/60 space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {pains.map((pain, i) => (
              <m.div
                key={i}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
              >
                <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-muted-foreground leading-snug">
                  {pain}
                </span>
              </m.div>
            ))}
          </m.div>

          {/* Inimigo Comum */}
          <m.div
            className="mt-10 glass-card rounded-2xl p-6 sm:p-8 border border-primary/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gradient-brand">
              A culpa não é sua.
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Você tentou apps que só contam repetição. Tentou dietas genéricas
              da internet. Talvez até pagou um personal que montou uma planilha
              e sumiu.{" "}
              <strong className="text-foreground/90">
                E sabe por quê nada funcionou?
              </strong>{" "}
              Porque nenhum deles resolve o problema de verdade. Eles te dão uma
              ferramenta isolada — mas consistência não vem de uma ferramenta.
              Vem de um sistema. E até agora, esse sistema não existia.
            </p>
          </m.div>

          <m.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="text-base sm:text-lg font-medium text-foreground/90">
              Se você marcou qualquer um desses...
            </p>
            <p className="text-xl sm:text-2xl font-bold mt-2 text-gradient-brand">
              O ELEV foi construído pra acabar com esse ciclo — de vez.
            </p>
            <div className="mt-8">
              <a
                href="#showcase"
                className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
              >
                Conhecer o ELEV ↓
              </a>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
