import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const testimonials = [
  {
    name: "Rafael M.",
    result: "Ganhou 5kg de massa em 3 meses",
    text: "Nunca tive resultados assim. A IA me deu um plano que realmente funciona pro meu corpo.",
    avatar: "RM",
  },
  {
    name: "Ana C.",
    result: "Economizou R$400/mês",
    text: "Gastava uma fortuna com nutricionista. O Elev entrega o mesmo nível por uma fração do preço.",
    avatar: "AC",
  },
  {
    name: "Pedro S.",
    result: "De sedentário a 6x na semana",
    text: "A gamificação e a comunidade me mantêm motivado. Nunca mais parei de treinar.",
    avatar: "PS",
  },
  {
    name: "Juliana R.",
    result: "Perdeu 12kg em 4 meses",
    text: "O plano alimentar da IA mudou minha relação com a comida. Simples e eficiente.",
    avatar: "JR",
  },
];

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
          <p className="text-muted-foreground">Resultados reais de quem confia no Elev.</p>
        </motion.div>

        <div className="space-y-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.25 }}
              className="glass-card p-5"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full gradient-cta flex items-center justify-center text-primary-foreground text-sm font-bold">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-[#22C55E] font-medium">{t.result}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">"{t.text}"</p>
              <div className="flex gap-0.5 mt-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#22C55E] text-[#22C55E]" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Next page button */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.25 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => navigate("/planos")}
            className="bg-[#4F46E5] text-white font-medium text-sm sm:text-base px-8 py-3.5 rounded-full transition-all hover:bg-[#4338CA] hover:scale-[1.02] active:scale-[0.97] touch-manipulation"
            style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '0.02em' }}
          >
            Ver planos
          </button>
        </motion.div>
      </div>

      {/* Assinatura ELEV */}
      <span
        className="relative z-10 pb-8 text-[10px] font-semibold tracking-[0.4em] text-muted-foreground/80 opacity-60"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        ELEV
      </span>
    </section>
  );
};

export default TestimonialsSection;
