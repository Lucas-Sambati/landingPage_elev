import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.webp";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Atleta treinando"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Glow effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow animate-pulse-glow" />

      <div className="container relative z-10 py-0 sm:py-20">
        <div className="max-w-3xl mx-auto text-center mt-16 sm:mt-0">
          <h1
            className="hero-fade-up text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
            style={{ animationDelay: "0.15s" }}
          >
            Pare de treinar{" "}
            <span className="text-gradient-brand">no escuro.</span>
          </h1>

          <p
            className="hero-fade-up text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
            style={{ animationDelay: "0.3s" }}
          >
            Tenha um robô personal + nutricionista no seu bolso.
          </p>

          <div
            className="hero-fade-up flex flex-col sm:flex-row gap-4 justify-center"
            style={{ animationDelay: "0.45s" }}
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
          </div>

          <p
            className="hero-fade-up mt-10 text-sm text-muted-foreground/80 italic"
            style={{ animationDelay: "0.6s" }}
          >
            Todos os dias, mais pessoas decidem transformar seu corpo com o ELEV.
          </p>

          <div
            className="hero-fade-up mt-12 flex flex-wrap sm:flex-nowrap items-center justify-center gap-3 sm:gap-8 text-muted-foreground text-sm"
            style={{ animationDelay: "0.75s" }}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
