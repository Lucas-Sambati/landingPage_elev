import { useState, useEffect, useCallback } from "react";
import { m } from "framer-motion";
import appMockup1 from "@/assets/newMockup/telaTreinos1.webp";
import appMockup2 from "@/assets/newMockup/telaTreinos2.webp";
import appMockup3 from "@/assets/newMockup/telaModulos.webp";
import appMockup4 from "@/assets/newMockup/telaRanking.webp";
import aiMockup1 from "@/assets/newMockup/consultoriaIA3.webp";
import aiMockup2 from "@/assets/newMockup/consultoriaIA2.webp";
import aiMockup3 from "@/assets/newMockup/consultoriaIA1.webp";
import aiMockup4 from "@/assets/newMockup/telaPerfil2.webp";

const appImages = [appMockup1, appMockup2, appMockup3, appMockup4];
const aiImages = [aiMockup1, aiMockup2, aiMockup3, aiMockup4];

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

  // Preload all images before starting the flip cycle
  useEffect(() => {
    let cancelled = false;
    const promises = images.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => resolve();
          img.src = src;
        })
    );
    Promise.all(promises).then(() => {
      if (!cancelled) setPreloaded(true);
    });
    return () => { cancelled = true; };
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
      case "out": return "rotateY(90deg)";
      case "in": return "rotateY(-90deg)";
      case "idle": return "rotateY(0deg)";
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
          className="w-72 animate-float drop-shadow-2xl rounded-2xl glow-border-static"
        />
      </div>
    </div>
  );
};

const ShowcaseSection = () => {
  return (
    <section className="py-14 overflow-hidden">
      <div className="container">
        {/* Workout tracking showcase */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <m.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Treinos</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              Acompanhe sua evolução em{" "}
              <span className="text-gradient-brand">métricas reais</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Registre cada série, cada carga, cada repetição. O ELEV organiza tudo 
              em um layout inteligente para que você veja exatamente onde está evoluindo 
              — e onde precisa ajustar.
            </p>
            <div className="space-y-3">
              {["Histórico completo de treinos", "Progressão de carga visual", "Layout inspirado em planilhas"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
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
              images={appImages}
              interval={3500}
              alt="ELEV app - controle de treinos"
              className="flex justify-center"
            />
          </m.div>
        </div>

        {/* AI showcase */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <m.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:order-2"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Inteligência Artificial</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
              Seu personal e nutricionista{" "}
              <span className="text-gradient-brand">no bolso</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Envie suas métricas e receba de volta: feedback detalhado, plano de treino 
              personalizado e plano alimentar. A IA analisa seus dados, ajusta sua 
              estratégia e evolui com você.
            </p>
            <div className="space-y-3">
              {["Plano de treino personalizado", "Plano alimentar sob medida", "Feedback baseado em dados reais"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
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
              images={aiImages}
              interval={3500}
              alt="ELEV app - consultoria IA"
              className="flex justify-center"
            />
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
