import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useCallback, useRef } from "react";

const HeroSection = () => {
  const navigate = useNavigate();
  const navigated = useRef(false);

  const goToAbout = useCallback(() => {
    if (navigated.current) return;
    navigated.current = true;
    navigate("/sobre");
    setTimeout(() => { navigated.current = false; }, 400);
  }, [navigate]);

  return (
    <section className="fixed inset-0 flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background sutil */}
      <div className="absolute inset-0 gradient-hero pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />

      {/* Conteúdo central */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center flex flex-col items-center gap-12"
      >
        <h1
          className="text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <span className="font-light text-foreground/90">Sua evolução</span>
          <br />
          <span className="font-semibold text-gradient">começa aqui.</span>
        </h1>

        <motion.button
          onClick={goToAbout}
          onTouchEnd={(e) => {
            e.preventDefault();
            goToAbout();
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="bg-[#4F46E5] text-white font-medium text-sm sm:text-base px-8 py-3.5 rounded-full transition-all hover:bg-[#4338CA] touch-manipulation"
          style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '0.02em' }}
        >
          Elevar meus resultados
        </motion.button>
      </motion.div>

      {/* Assinatura ELEV */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.2, duration: 1.5 }}
        className="absolute bottom-8 z-10 text-[10px] font-semibold tracking-[0.4em] text-muted-foreground/80"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        ELEV
      </motion.span>
    </section>
  );
};

export default HeroSection;
