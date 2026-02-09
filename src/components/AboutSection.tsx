import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import consultoriaIA3 from "@/assets/consultoriaIA3.png";
import telaPerfil2 from "@/assets/telaPerfil2.png";

const AboutSection = () => {
  const navigate = useNavigate();

  const painPoints = [
    "Chega de pagar caro em nutricionista",
    "Chega de treinos genéricos",
    "Chega de evolução sem direção",
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-8 text-center">
            O que é o <span className="text-gradient">Elev</span>?
          </h2>

          <div className="space-y-4 mb-10">
            {painPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, duration: 0.25 }}
                className="glass-card p-4 flex items-center gap-3"
              >
                <span className="text-[#22C55E] text-xl">✓</span>
                <p className="text-foreground font-medium">{point}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-muted-foreground text-center mb-10 leading-relaxed">
            Elev é seu personal trainer + nutricionista + comunidade fitness — tudo movido por IA, no seu celular.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="flex gap-4 justify-center mb-12"
        >
          <div className="phone-mockup w-40 sm:w-48">
            <img src={telaPerfil2} alt="Tela de perfil Elev" className="w-full" loading="lazy" />
          </div>
          <div className="phone-mockup w-40 sm:w-48 mt-8">
            <img src={consultoriaIA3} alt="Consultoria IA Elev" className="w-full" loading="lazy" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.25 }}
          className="text-center"
        >
          <button
            onClick={() => navigate("/funcionalidades")}
            className="gradient-cta text-primary-foreground font-semibold px-8 py-3.5 rounded-xl glow transition-all"
          >
            Quero conhecer melhor
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
