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
    <section className="py-20 px-6">
      <div className="max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-3">
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
            className="gradient-cta text-primary-foreground font-semibold px-8 py-3.5 rounded-xl glow transition-all"
          >
            Ver planos
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
