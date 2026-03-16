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
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Resultados reais</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 leading-tight">
            Eles pensaram{" "}
            <span className="text-gradient-brand">exatamente o que você</span>
            <br />
            está pensando agora.
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto text-sm sm:text-base">
            Dúvida é normal. Mas quem deu o primeiro passo não se arrependeu.
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

        <div className="mt-10 text-center">
          <a href="#planos" className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors">
            Quero fazer parte disso ↓
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
