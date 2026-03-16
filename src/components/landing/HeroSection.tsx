import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";

// Stable public-folder paths — enables <link rel="preload"> in index.html
const heroBg = "/img/hero-bg.webp";
const robotCharacter = "/img/nosso_personagem_apontando_sem_background.webp";

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
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
      </div>

      {/* Glow efeito central */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-glow opacity-60" />

      <div className="container relative z-10 pt-24 pb-12 sm:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          {/* Personagem — mobile: acima do texto / desktop: coluna direita */}
          <div
            className="hero-fade-up flex justify-center md:hidden"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75" />
              <img
                src={robotCharacter}
                alt="ELEV - Treinador robô apontando para você"
                fetchPriority="high"
                decoding="async"
                className="relative h-[260px] object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Texto */}
          <div className="text-center md:text-left">
            {/* Badge — oculto no mobile */}
            <div
              className="hero-fade-up hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 mb-6 text-sm font-medium text-primary"
              style={{ animationDelay: "0s" }}
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Treinador de IA para quem quer resultado de verdade
            </div>

            <h1
              className="hero-fade-up text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-5"
              style={{ animationDelay: "0.15s" }}
            >
              Quantas vezes você{" "}
              <span className="text-gradient-brand">começou... e parou?</span>
            </h1>

            <p
              className="hero-fade-up text-base sm:text-lg text-muted-foreground max-w-md mb-8 leading-relaxed"
              style={{ animationDelay: "0.3s" }}
            >
              Você não parou por falta de vontade.{" "}
              <strong className="text-foreground/90">Parou porque estava usando o sistema errado.</strong>{" "}
              O ELEV muda isso — de vez.
            </p>

            <div
              className="hero-fade-up flex flex-col sm:flex-row gap-3 justify-center md:justify-start"
              style={{ animationDelay: "0.45s" }}
            >
              <Button variant="hero" size="xl" asChild>
                <a href="#dor">
                  Ver como funciona <ArrowRight className="ml-1 w-5 h-5" />
                </a>
              </Button>
            </div>

            {/* Microtrust */}
            <div
              className="hero-fade-up mt-8 flex flex-wrap gap-x-5 gap-y-2 justify-center md:justify-start text-sm text-muted-foreground"
              style={{ animationDelay: "0.6s" }}
            >
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
                iOS, Android e Web
              </span>
            </div>
          </div>

          {/* Personagem — desktop: coluna direita */}
          <div
            className="hero-fade-up hidden md:flex justify-end"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75" />
              <img
                src={robotCharacter}
                alt="ELEV - Treinador robô apontando para você"
                fetchPriority="high"
                decoding="async"
                className="relative h-[380px] sm:h-[460px] md:h-[500px] object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
