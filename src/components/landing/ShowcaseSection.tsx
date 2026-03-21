import { useState, useEffect, useCallback } from "react";
import { m } from "framer-motion";
import { Check } from "lucide-react";
import appMockup1 from "@/assets/newMockup/telaTreinos1.webp";
import appMockup2 from "@/assets/newMockup/telaTreinos2.webp";
import communityMockup1 from "@/assets/newMockup/telaPerfil.webp";
import communityMockup2 from "@/assets/newMockup/telaHome.webp";
import aiMockup1 from "@/assets/newMockup/telaConsultoria3.webp";
import aiMockup2 from "@/assets/newMockup/telaConsultoria2.webp";
import aiMockup3 from "@/assets/newMockup/telaConsultoria1.webp";

const appImages = [appMockup1, appMockup2];
const aiImages = [aiMockup1, aiMockup2, aiMockup3];
const communityImages = [communityMockup1, communityMockup2];

const FlippingImage = ({
  images,
  interval = 3000,
  alt,
  className,
  style,
}: {
  images: string[];
  interval?: number;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipPhase, setFlipPhase] = useState<"idle" | "out" | "in">("idle");
  const [preloaded, setPreloaded] = useState(false);

  // Preload images one at a time to avoid bandwidth contention
  useEffect(() => {
    let cancelled = false;
    // Load first image immediately, rest sequentially
    const loadSequentially = async () => {
      for (const src of images) {
        if (cancelled) return;
        await new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => resolve();
          img.src = src;
        });
      }
      if (!cancelled) setPreloaded(true);
    };
    loadSequentially();
    return () => {
      cancelled = true;
    };
  }, [images]);

  const doFlip = useCallback(() => {
    // Phase 1: rotate to 90deg (edge-on, hides image)
    setFlipPhase("out");

    setTimeout(() => {
      // At 90deg, swap image and jump to -90deg instantly
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setFlipPhase("in");

      // Force a reflow so the jump to -90deg happens without transition
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          // Phase 2: rotate from -90deg back to 0deg (reveals new image)
          setFlipPhase("idle");
        });
      });
    }, 120);
  }, [images.length]);

  useEffect(() => {
    if (!preloaded) return;
    const timer = setInterval(doFlip, interval);
    return () => clearInterval(timer);
  }, [doFlip, interval, preloaded]);

  const getTransform = () => {
    switch (flipPhase) {
      case "out":
        return "rotateY(90deg)";
      case "in":
        return "rotateY(-90deg)";
      case "idle":
        return "rotateY(0deg)";
    }
  };

  const getTransition = () => {
    // No transition for the instant jump from 90deg to -90deg
    if (flipPhase === "in") return "none";
    return "transform 0.12s ease-in-out";
  };

  return (
    <div style={{ perspective: "1200px", ...style }} className={className}>
      <div
        style={{
          transform: getTransform(),
          transition: getTransition(),
          transformStyle: "preserve-3d",
        }}
      >
        <img
          src={images[currentIndex]}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="w-72 animate-float drop-shadow-2xl rounded-2xl"
        />
      </div>
    </div>
  );
};

const ShowcaseSection = () => {
  const bulletStyle = "flex items-center gap-3";
  const dotStyle =
    "w-5 h-5 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center flex-shrink-0";

  return (
    <section id="showcase" className="py-16 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-primary/40" />
      <div className="container">
        {/* Título da seção */}
        <m.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            O App
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3">
            Tudo em um lugar.{" "}
            <span className="text-gradient-brand">Tudo sob controle.</span>
          </h2>
        </m.div>

        {/* Consultoria IA */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 sm:mb-24">
          <m.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Consultoria com IA
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              Um personal e nutricionista{" "}
              <span className="text-gradient-brand">no seu bolso</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Imagine abrir o app no domingo, enviar suas métricas da semana e,
              em minutos, receber um treino ajustado pro seu nível atual e um
              plano alimentar que realmente faz sentido pra sua rotina. Sem
              pesquisar no Google. Sem adivinhar.{" "}
              <strong className="text-foreground/90">
                A IA olha pra VOCÊ — e te diz exatamente o que fazer.
              </strong>
            </p>
            <div className="space-y-3">
              {[
                "Um treino que evolui junto com você — não um template",
                "Saber exatamente o que comer, sem neurose",
                "Ver onde você travou e como destravar",
                "Envie uma foto e receba feedback visual real",
              ].map((item) => (
                <div key={item} className={bulletStyle}>
                  <div className={dotStyle}>
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </m.div>
          <m.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <FlippingImage
              images={aiImages}
              interval={3500}
              alt="ELEV app - consultoria IA"
              className="flex justify-center"
            />
          </m.div>
        </div>

        {/* Controle de Treinos */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 sm:mb-24">
          <m.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:order-2"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Controle de Treinos
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              Cada carga, cada rep.{" "}
              <span className="text-gradient-brand">Tudo registrado.</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Você terminou o treino. Mas evoluiu? Com o ELEV, essa dúvida não
              existe.{" "}
              <strong className="text-foreground/90">
                Cada carga, cada repetição fica registrada
              </strong>{" "}
              — e você vê, semana após semana, o gráfico subindo. É a prova
              visual de que o esforço está valendo.
            </p>
            <div className="space-y-3">
              {[
                "Nunca mais perguntar 'qual carga eu usei?'",
                "Ver a evolução subindo no gráfico dá outro ânimo",
                "Números reais, não achismo",
                "Simples como uma planilha, poderoso como um sistema",
              ].map((item) => (
                <div key={item} className={bulletStyle}>
                  <div className={dotStyle}>
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </m.div>
          <m.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:order-1"
          >
            <FlippingImage
              images={appImages}
              interval={3500}
              alt="ELEV app - controle de treinos"
              className="flex justify-center"
            />
          </m.div>
        </div>

        {/* Comunidade e Perfil */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-0">
          <m.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Comunidade & Perfil
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              Você não está{" "}
              <span className="text-gradient-brand">treinando sozinho.</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Quando ninguém sabe que você faltou, faltar é fácil. No ELEV,{" "}
              <strong className="text-foreground/90">
                a comunidade vê sua evolução — e você vê a deles.
              </strong>{" "}
              É aquele empurrão silencioso que te faz levantar do sofá mesmo nos
              dias difíceis.
            </p>
            <div className="space-y-3">
              {[
                "Competir com a comunidade mantém o fogo aceso",
                "Ver outros treinando te faz querer treinar também",
                "Suas badges contam sua história de evolução",
                "Conteúdo avançado pra quem quer ir além",
              ].map((item) => (
                <div key={item} className={bulletStyle}>
                  <div className={dotStyle}>
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </m.div>
          <m.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <FlippingImage
              images={communityImages}
              interval={3500}
              alt="ELEV app - comunidade e ranking"
              className="flex justify-center"
            />
          </m.div>
        </div>
      </div>
      <div className="text-center mt-12">
        <a
          href="#gamification"
          className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
        >
          Ver como o ELEV te mantém motivado ↓
        </a>
      </div>
    </section>
  );
};

export default ShowcaseSection;
