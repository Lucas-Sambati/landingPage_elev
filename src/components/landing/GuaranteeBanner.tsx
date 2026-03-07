import { useState, useEffect, useCallback } from "react";
import { m, AnimatePresence } from "framer-motion";
import { ShieldCheck, X } from "lucide-react";

const DISPLAY_DURATION = 6000; // tempo visível (ms)
const REAPPEAR_INTERVAL = 25000; // intervalo entre reaparições (ms)

const GuaranteeBanner = () => {
  const [visible, setVisible] = useState(false);

  const show = useCallback(() => {
    setVisible(true);
    setTimeout(() => setVisible(false), DISPLAY_DURATION);
  }, []);

  // Aparece pela primeira vez após 1 minuto
  useEffect(() => {
    const initialDelay = setTimeout(() => show(), 60000);
    return () => clearTimeout(initialDelay);
  }, []);

  // Reaparece a cada 30s
  useEffect(() => {
    const interval = setInterval(() => {
      show();
    }, REAPPEAR_INTERVAL);
    return () => clearInterval(interval);
  }, [show]);

  return (
    <div className="fixed top-16 left-0 right-0 z-40 flex justify-center pointer-events-none">
      <AnimatePresence>
        {visible && (
          <m.div
            key="guarantee-banner"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-card/90 backdrop-blur-xl glow-border-static shadow-lg pointer-events-auto"
          >
            <m.div
              className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/15 flex items-center justify-center"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, -10, 10, -5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 1.5,
                ease: "easeInOut",
              }}
            >
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </m.div>
            <p className="text-xs text-white leading-snug">
              <span className="font-bold">Garantia de 7 dias</span>
              {" · "}
              Experimente o ELEV sem medo
            </p>
            <button
              onClick={() => setVisible(false)}
              className="flex-shrink-0 text-muted-foreground hover:text-white transition-colors ml-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GuaranteeBanner;
