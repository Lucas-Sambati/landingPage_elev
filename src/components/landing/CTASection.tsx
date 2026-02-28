import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Flame } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-glow" />
      <div className="container relative z-10">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Flame className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Comece hoje</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 leading-tight">
            Pronto para parar de treinar{" "}
            <span className="text-gradient-brand">no escuro?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-lg mx-auto">
            Junte-se a milhares de pessoas que já estão evoluindo com o ELEV. 
            Comece grátis, sem cartão de crédito.
          </p>
          <Button variant="hero" size="xl" asChild>
            <a href="#planos">
              Criar minha conta grátis
              <ArrowRight className="w-5 h-5 ml-1" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
