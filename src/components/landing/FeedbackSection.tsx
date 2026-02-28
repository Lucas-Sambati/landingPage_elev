import { motion } from "framer-motion";
import feedbackImg from "@/assets/feedbacks.png";

const FeedbackSection = () => {
  return (
    <section id="usuarios" className="py-14 relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            Eles pensaram exatamente o que você{" "}
            <span className="text-gradient-brand">está pensando agora</span>
          </h2>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={feedbackImg}
            alt="Feedbacks de usuários do ELEV"
            className="w-full max-w-2xl md:max-w-md rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FeedbackSection;
