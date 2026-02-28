import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "A IA realmente monta um plano alimentar personalizado?",
    answer:
      "Sim. A cada consultoria, a IA analisa suas métricas, treinos recentes, objetivo e até foto do físico (opcional) para montar um plano alimentar semanal sob medida. Não é um template genérico — é um plano que evolui junto com o seu progresso. Para condições médicas específicas, sempre recomendamos acompanhamento profissional.",
  },
  {
    question: "Nunca treinei. O ELEV funciona pra mim?",
    answer:
      "Foi pensado especialmente pra você. O ELEV tem vídeos de execução para cada exercício, explicações sobre cada grupo muscular e a IA adapta todas as recomendações ao seu nível atual. Você começa no seu ritmo e o sistema cresce junto com a sua evolução.",
  },
  {
    question: "Como funciona a gamificação e o ranking?",
    answer:
      "Cada treino registrado, consultoria feita e meta batida gera XP. Conforme acumula XP, você sobe de nível e escala no ranking da comunidade. É a motivação que faltava para manter a consistência — porque resultado vem de constância, e constância vem de hábito.",
  },
  {
    question: "Qual a diferença entre os planos?",
    answer:
      "Cada plano evolui sobre o anterior. O Start traz 1 consultoria semanal, controle de treinos e ranking. O Progress adiciona 3 consultorias, envio de foto do físico e IA mais profunda. O Elite libera uso intensivo, conteúdos avançados exclusivos, badge no ranking e acesso antecipado a novidades. Se está em dúvida, o Progress é o equilíbrio perfeito entre custo e resultado.",
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer:
      "Sim, sem letras miúdas e sem burocracia. Você cancela quando quiser direto pelo app, sem precisar ligar pra ninguém. Mas sendo sincero: quem começa a ver os resultados no dashboard não quer mais parar.",
  },
  {
    question: "O que torna o ELEV diferente de outros apps de treino?",
    answer:
      "A maioria dos apps só controla séries e repetições. O ELEV integra controle de treino + consultoria alimentar com IA + gamificação + comunidade em uma única experiência. É como ter um personal, um nutricionista e uma comunidade motivadora no seu bolso — por uma fração do custo.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-14 relative">
      <div className="container relative z-10 max-w-3xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Perguntas{" "}
            <span className="text-gradient-brand">frequentes</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Tire suas dúvidas sobre o ELEV antes de começar.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="glass-card rounded-xl px-6 border-border/50"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base font-medium hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
