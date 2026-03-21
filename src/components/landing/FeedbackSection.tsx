import { m } from "framer-motion";
import feedback1 from "@/assets/newFeedbacks/feedback1.webp";
import feedback2 from "@/assets/newFeedbacks/feedback2.webp";
import feedback3 from "@/assets/newFeedbacks/feedback3.webp";
import feedback4 from "@/assets/newFeedbacks/feedback4.webp";

const feedbacks = [feedback1, feedback2, feedback3, feedback4];

const FeedbackSection = () => {
  return (
    <section id="usuarios" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-primary/40" />
      <div className="container relative z-10">
        <m.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Resultados reais
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 leading-tight">
            Eles estavam{" "}
            <span className="text-gradient-brand">
              exatamente onde você está
            </span>
            <br />
            agora.
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto text-sm sm:text-base">
            Mesmo achismo, mesma dúvida. Mas fizeram diferente — e o resultado
            fala por si.
          </p>
        </m.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {feedbacks.map((src, i) => (
            <m.div
              key={i}
              className="glass-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/30 transition-colors flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <img
                src={src}
                alt={`Feedback de usuário ${i + 1} do ELEV`}
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-contain"
              />
            </m.div>
          ))}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {[
            {
              name: "Renato S.",
              time: "3 meses no ELEV",
              text: "Já tinha tentado 3 apps e 2 personais. Mas nenhum me mostrava se eu tava evoluindo. Com o ELEV, vi meu supino subir 15kg em 2 meses — e a IA me explicou por quê.",
            },
            {
              name: "Mariana L.",
              time: "5 meses no ELEV",
              text: "Eu achava que nutricionista era luxo. A IA do ELEV me deu um plano alimentar que funcionou melhor que as 4 dietas que paguei R$300 cada.",
            },
            {
              name: "Lucas P.",
              time: "2 meses no ELEV",
              text: "Meu streak está em 47 dias. Nunca treinei tanto tempo seguido na vida. A gamificação é viciante.",
            },
            {
              name: "Camila R.",
              time: "4 meses no ELEV",
              text: "Comecei sem saber nada. Hoje treino 5x/semana e as pessoas já estão comentando. O ELEV me deu o sistema que faltava.",
            },
          ].map((dep, i) => (
            <m.div
              key={dep.name}
              className="glass-card rounded-xl p-5 border border-border/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
            >
              <p className="text-sm text-muted-foreground leading-relaxed mb-3 italic">
                "{dep.text}"
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center text-xs font-bold text-primary">
                  {dep.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold">{dep.name}</p>
                  <p className="text-xs text-muted-foreground">{dep.time}</p>
                </div>
              </div>
            </m.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#features"
            className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
          >
            Ver por que o ELEV funciona ↓
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
