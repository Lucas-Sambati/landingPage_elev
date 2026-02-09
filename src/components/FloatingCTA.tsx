import { motion } from "framer-motion";

const FloatingCTA = () => {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.3 }}
      className="fixed bottom-0 left-0 right-0 z-50 p-4 pb-6 bg-gradient-to-t from-background via-background/95 to-transparent pointer-events-none"
    >
      <button
        onClick={scrollToPricing}
        className="pointer-events-auto w-full max-w-lg mx-auto block gradient-cta text-primary-foreground font-bold text-base py-4 rounded-2xl animate-pulse-glow transition-all"
      >
        Começar minha evolução agora
      </button>
    </motion.div>
  );
};

export default FloatingCTA;
