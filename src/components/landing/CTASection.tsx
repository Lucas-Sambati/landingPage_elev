import { m } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";
import robotCharacter from "@/assets/nosso_personagem_duplo_biceps_sem_background.webp";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-glow opacity-40" />
      {/* Linha separadora decorativa */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-primary/40" />

      <div className="container relative z-10">
        <m.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-5 leading-tight">
            Hoje você decide:{" "}
            <span className="text-gradient-brand">muda ou deixa igual?</span>
          </h2>

          <div className="flex justify-center my-6">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/15 blur-3xl rounded-full" />
              <img
                src={robotCharacter}
                alt="ELEV - personagem"
                loading="lazy"
                decoding="async"
                className="relative h-52 sm:h-64 object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          <p className="text-muted-foreground text-base sm:text-lg mb-8 max-w-lg mx-auto leading-relaxed">
            O físico que você quer não vai aparecer sozinho. Mas com o sistema certo,
            ele para de parecer impossível e começa a parecer inevitável.
          </p>

          <Button variant="hero" size="xl" asChild>
            <a href="#planos">
              Quero começar agora
              <ArrowRight className="w-5 h-5 ml-1" />
            </a>
          </Button>

          <div className="mt-5 flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
            <ShieldCheck className="w-4 h-4 text-success" />
            <span>Garantia de 7 dias. Cancele quando quiser.</span>
          </div>
        </m.div>
      </div>
    </section>
  );
};

export default CTASection;
