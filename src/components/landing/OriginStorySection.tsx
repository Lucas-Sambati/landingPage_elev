import { m } from "framer-motion";

const beforeImg = "/img/criador-antes.webp";
const afterImg = "/img/criador-depois.webp";

const OriginStorySection = () => {
  return (
    <section id="historia" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-primary/40" />
      <div className="absolute inset-0 bg-glow opacity-15" />

      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              A história por trás
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6 leading-tight">
              Por que eu{" "}
              <span className="text-gradient-brand">construí o ELEV?</span>
            </h2>

            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-primary/20">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                Eu não criei o ELEV sentado numa cadeira de escritório.{" "}
                <strong className="text-foreground/90">
                  Criei porque vivi o problema.
                </strong>
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                Meu shape era ruim — e eu sabia disso. Tentei apps de treino.
                Tentei planilhas do Excel. Tentei fazer tudo no achismo. Mas
                nenhum juntava treino, dieta, acompanhamento e motivação num
                lugar só.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Então eu decidi construir o sistema que eu precisava. O
                resultado tá aqui embaixo.{" "}
                <strong className="text-foreground/90">
                  Essa transformação não veio de genética. Veio de sistema.
                </strong>
              </p>
            </div>
          </m.div>

          {/* Antes / Depois */}
          <m.div
            className="mt-10 grid grid-cols-2 gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-center">
              <div className="glass-card rounded-2xl border border-border/50 overflow-hidden">
                <img
                  src={beforeImg}
                  alt="Antes do ELEV — físico do criador"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mt-3 font-medium">
                Antes do ELEV
              </p>
            </div>
            <div className="text-center">
              <div className="glass-card rounded-2xl border border-primary/30 overflow-hidden glow-border-static">
                <img
                  src={afterImg}
                  alt="Com o ELEV — físico do criador depois da transformação"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-xs sm:text-sm text-primary mt-3 font-semibold">
                Com o ELEV
              </p>
            </div>
          </m.div>

          <m.p
            className="mt-8 text-center text-base sm:text-lg font-medium text-foreground/90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Se funcionou pra mim, funciona pra você.{" "}
            <span className="text-gradient-brand font-bold">
              Mas não acredite em mim — teste por 7 dias.
            </span>
          </m.p>

          <div className="mt-8 text-center">
            <a
              href="#planos"
              className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
            >
              Ver os planos ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OriginStorySection;
