import { motion, type Easing } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

const ease: Easing = [0.25, 0.1, 0.25, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease },
  }),
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Atleta treinando"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Glow effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow animate-pulse-glow" />

      <div className="container relative z-10 py-0 sm:py-20">
        <motion.div
          className="max-w-3xl mx-auto text-center mt-16 sm:mt-0"
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            custom={1}
            variants={fadeUp}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
          >
            Pare de treinar{" "}
            <span className="text-gradient-brand">no escuro.</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            className="hidden sm:block text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
          >
            O ELEV usa inteligência artificial para montar seu plano alimentar, 
            acompanhar seu treino e evoluir com você.
          </motion.p>
          <motion.p
            custom={2}
            variants={fadeUp}
            className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Tenha um robô personal + nutricionista no seu bolso.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button id="btn-conhecer-elev" variant="hero" size="xl" asChild>
              <a href="#planos">
                Começar agora
                <ArrowRight className="w-5 h-5 ml-1" />
              </a>
            </Button>
            <Button id="btn-como-funciona" variant="hero-outline" size="xl" asChild>
              <a href="#features">Como funciona</a>
            </Button>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUp}
            className="mt-12 flex flex-wrap sm:flex-nowrap items-center justify-center gap-3 sm:gap-8 text-muted-foreground text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success" />
              <span>IA integrada</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success" />
              <span>Controle de treinos</span>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto justify-center mt-2 sm:mt-0">
              <div className="w-2 h-2 rounded-full bg-success" />
              <span>Garantia de 7 dias</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
