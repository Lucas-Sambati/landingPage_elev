import { m } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-glow opacity-30" />

      <div className="container relative z-10">
        <m.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-5 leading-tight">
            O melhor momento pra começar era ontem.{" "}
            <span className="text-gradient-brand">
              O segundo melhor é agora.
            </span>
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg mb-8 max-w-lg mx-auto leading-relaxed">
            Cada semana sem sistema é uma semana de treino sem direção, comida
            no achismo e evolução invisível. O ELEV funciona. Os números provam.
            Os usuários confirmam.{" "}
            <strong className="text-foreground/90">
              A única pergunta que resta é: você vai continuar fazendo a mesma
              coisa esperando resultado diferente?
            </strong>
          </p>

          <Button variant="hero" size="xl" asChild>
            <a href="#planos">
              Quero começar agora
              <ArrowRight className="w-5 h-5 ml-1" />
            </a>
          </Button>

          <div className="mt-5 flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-success" />
              Garantia de 7 dias
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-success" />
              Cancele quando quiser
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-success" />
              Sem letras miúdas
            </span>
          </div>
        </m.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
