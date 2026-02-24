import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import feedbacksImg from "@/assets/feedbacks.png";

const TestimonialsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex flex-col items-center px-6 overflow-hidden">
      {/* Background sutil */}
      <div className="absolute inset-0 gradient-hero pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 w-full pt-10 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10 px-6"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-10">
            ⭐ Resultados que falam por si
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
            Quem usa, <span className="text-gradient">evolui.</span>
          </h2>
          <p className="text-muted-foreground">Resultados reais de quem confiou no <span className="elev-brand">ELEV</span>.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full flex justify-center"
        >
          <img
            src={feedbacksImg}
            alt="Feedbacks de usuários do ELEV"
            className="w-full max-w-md rounded-2xl"
          />
        </motion.div>

        {/* Next page button */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.25 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => {
              if (typeof fbq === "function") fbq("track", "CompleteRegistration");
              navigate("/planos");
            }}
            className="bg-[#4F46E5] text-white font-medium text-sm sm:text-base px-8 py-3.5 rounded-full transition-all hover:bg-[#4338CA] hover:scale-[1.02] active:scale-[0.97] touch-manipulation"
            style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '0.02em' }}
          >
            Ver planos
          </button>
        </motion.div>
      </div>

      {/* Assinatura ELEV */}
      <span className="relative z-10 pb-8 flex items-center gap-1.5">
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

export default TestimonialsSection;
