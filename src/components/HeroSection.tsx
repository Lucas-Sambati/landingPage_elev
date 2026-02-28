import { useNavigate } from "react-router-dom";
import { useCallback, useRef } from "react";

const HeroSection = () => {
  const navigate = useNavigate();
  const navigated = useRef(false);

  const goToAbout = useCallback(() => {
    if (navigated.current) return;
    navigated.current = true;

    navigate("/");
    setTimeout(() => { navigated.current = false; }, 400);
  }, [navigate]);

  return (
    <section className="fixed inset-0 flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background sutil */}
      <div className="absolute inset-0 gradient-hero pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />

      {/* Conteúdo central */}
      <div className="relative z-10 text-center flex flex-col items-center gap-12">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <span className="font-light text-foreground/90">Sua evolução</span>
          <br />
          <span className="font-semibold text-gradient">começa aqui.</span>
        </h1>

        <button
          onClick={goToAbout}
          onTouchEnd={(e) => {
            e.preventDefault();
            goToAbout();
          }}
          className="bg-[#4F46E5] text-white font-medium text-sm sm:text-base px-8 py-3.5 rounded-full transition-all hover:bg-[#4338CA] hover:scale-[1.02] active:scale-[0.97] touch-manipulation"
          style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '0.02em' }}
        >
          Elevar meu resultado
        </button>
      </div>

      {/* Assinatura ELEV */}
      <span className="absolute bottom-8 z-10 flex items-center gap-1.5">
        <span
          className="text-[10px] elev-brand"
          style={{ color: "#4F46E5" }}
        >
          ELEV
        </span>
        <span className="text-[10px]" style={{ color: "#4F46E5" }}>•</span>
        <span
          className="text-[10px]"
          style={{ fontFamily: "'Inter', sans-serif", color: "#737d7f" }}
        >
          Eleve seu resultado
        </span>
      </span>
    </section>
  );
};

export default HeroSection;
