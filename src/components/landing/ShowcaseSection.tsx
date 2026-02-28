import { motion } from "framer-motion";
import appMockup from "@/assets/controleTreinos1.png";
import aiMockup from "@/assets/consultoriaIA3.png";

const ShowcaseSection = () => {
  return (
    <section className="py-14 overflow-hidden">
      <div className="container">
        {/* Workout tracking showcase */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <motion.div
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src={appMockup}
              alt="ELEV app - controle de treinos"
              className="w-72 animate-float drop-shadow-2xl rounded-2xl glow-border-static"
            />
          </motion.div>
        </div>

        {/* AI showcase */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:order-1"
          >
            <img
              src={aiMockup}
              alt="ELEV app - consultoria IA"
              className="w-72 animate-float drop-shadow-2xl rounded-2xl glow-border-static"
              style={{ animationDelay: "3s" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
