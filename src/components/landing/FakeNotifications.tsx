import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dumbbell, Sparkles, Brain, Trophy, Flame, TrendingUp, X } from "lucide-react";

type NotifType = "treino" | "plano" | "consultoria" | "ranking" | "streak" | "evolucao";

interface FakeNotif {
  prefix: string;
  bold: string;
  type: NotifType;
}

const iconMap: Record<NotifType, React.ReactNode> = {
  treino: <Dumbbell className="w-4 h-4 text-primary" />,
  plano: <Sparkles className="w-4 h-4 text-primary" />,
  consultoria: <Brain className="w-4 h-4 text-primary" />,
  ranking: <Trophy className="w-4 h-4 text-amber-400" />,
  streak: <Flame className="w-4 h-4 text-orange-400" />,
  evolucao: <TrendingUp className="w-4 h-4 text-emerald-400" />,
};

const notifications: FakeNotif[] = [
  { prefix: "Renato completou", bold: "Treino C — Upper", type: "treino" },
  { prefix: "Jorge assinou o plano", bold: "ELEV Progress", type: "plano" },
  { prefix: "Pedro realizou", bold: "Consultoria com IA", type: "consultoria" },
  { prefix: "Mariana subiu para o", bold: "nível 12 no ranking", type: "ranking" },
  { prefix: "Lucas completou", bold: "Treino A — Push", type: "treino" },
  { prefix: "Camila assinou o plano", bold: "ELEV Elite", type: "plano" },
  { prefix: "Thiago realizou", bold: "Consultoria com IA", type: "consultoria" },
  { prefix: "Fernanda bateu", bold: "7 dias de streak", type: "streak" },
  { prefix: "Gabriel completou", bold: "Treino B — Pull", type: "treino" },
  { prefix: "Juliana assinou o plano", bold: "ELEV Start", type: "plano" },
  { prefix: "Rafael realizou", bold: "Consultoria com IA", type: "consultoria" },
  { prefix: "Beatriz evoluiu", bold: "8kg no supino reto", type: "evolucao" },
  { prefix: "Diego completou", bold: "Treino D — Lower", type: "treino" },
  { prefix: "Ana assinou o plano", bold: "ELEV Progress", type: "plano" },
  { prefix: "Matheus realizou", bold: "Consultoria com IA", type: "consultoria" },
  { prefix: "Larissa subiu para o", bold: "nível 7 no ranking", type: "ranking" },
  { prefix: "Bruno completou", bold: "Treino A — Push", type: "treino" },
  { prefix: "Carla assinou o plano", bold: "ELEV Elite", type: "plano" },
  { prefix: "Felipe realizou", bold: "Consultoria com IA", type: "consultoria" },
  { prefix: "Isabela bateu", bold: "14 dias de streak", type: "streak" },
  { prefix: "Gustavo completou", bold: "Treino C — Upper", type: "treino" },
  { prefix: "Patrícia assinou o plano", bold: "ELEV Progress", type: "plano" },
  { prefix: "Ricardo realizou", bold: "Consultoria com IA", type: "consultoria" },
  { prefix: "Amanda evoluiu", bold: "5kg no agachamento", type: "evolucao" },
  { prefix: "Vinícius completou", bold: "Treino B — Pull", type: "treino" },
  { prefix: "Tatiana assinou o plano", bold: "ELEV Start", type: "plano" },
  { prefix: "Eduardo realizou", bold: "Consultoria com IA", type: "consultoria" },
  { prefix: "Daniela subiu para o", bold: "nível 15 no ranking", type: "ranking" },
  { prefix: "André completou", bold: "Treino D — Lower", type: "treino" },
  { prefix: "Letícia assinou o plano", bold: "ELEV Progress", type: "plano" },
  { prefix: "Marcos realizou", bold: "Consultoria com IA", type: "consultoria" },
  { prefix: "Sofia bateu", bold: "30 dias de streak", type: "streak" },
  { prefix: "Caio completou", bold: "Treino A — Push", type: "treino" },
  { prefix: "Priscila assinou o plano", bold: "ELEV Elite", type: "plano" },
  { prefix: "Hugo realizou", bold: "Consultoria com IA", type: "consultoria" },
  { prefix: "Natália evoluiu", bold: "12kg no leg press", type: "evolucao" },
  { prefix: "Leonardo completou", bold: "Treino C — Upper", type: "treino" },
  { prefix: "Aline assinou o plano", bold: "ELEV Progress", type: "plano" },
  { prefix: "Roberto realizou", bold: "Consultoria com IA", type: "consultoria" },
  { prefix: "Carolina subiu para o", bold: "nível 20 no ranking", type: "ranking" },
];

function shuffleArray<T>(arr: T[]): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const FakeNotifications = () => {
  const [current, setCurrent] = useState<FakeNotif | null>(null);
  const [queue, setQueue] = useState<FakeNotif[]>(() => shuffleArray(notifications));
  const [index, setIndex] = useState(0);

  const showNext = useCallback(() => {
    setQueue((prev) => {
      let q = prev;
      let idx = index;
      if (idx >= q.length) {
        q = shuffleArray(notifications);
        idx = 0;
        setIndex(0);
      }
      setCurrent(q[idx]);
      setIndex((i) => i + 1);
      return q;
    });

    setTimeout(() => {
      setCurrent(null);
    }, 6000);
  }, [index]);

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      showNext();
    }, 5000);
    return () => clearTimeout(initialDelay);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      showNext();
    }, 28000 + Math.random() * 5000);
    return () => clearInterval(interval);
  }, [showNext]);

  return (
    <div className="fixed bottom-4 left-4 z-50 pointer-events-none">
      <AnimatePresence>
        {current && (
          <motion.div
            key={current.prefix + current.bold}
            initial={{ opacity: 0, y: 20, x: -20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card/90 backdrop-blur-xl glow-border-static shadow-lg max-w-[250px] pointer-events-auto"
          >
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
              {iconMap[current.type]}
            </div>
            <p className="text-[11px] text-white leading-snug flex-1">
              {current.prefix} <span className="font-bold">{current.bold}</span>
            </p>
            <button
              onClick={() => setCurrent(null)}
              className="flex-shrink-0 text-muted-foreground hover:text-white transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FakeNotifications;
