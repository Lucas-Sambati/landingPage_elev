import { m } from "framer-motion";
import { Users, Dumbbell, Brain, Star } from "lucide-react";

// Atualize estes números conforme os dados reais do app crescem
const stats = [
  { icon: Users,    value: "1.200+", label: "usuários ativos"          },
  { icon: Dumbbell, value: "22k+",   label: "treinos registrados"       },
  { icon: Brain,    value: "5.400+", label: "consultorias com IA"       },
  { icon: Star,     value: "4.8★",   label: "avaliação média"           },
];

const StatsBar = () => {
  return (
    <section className="py-10 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-primary/40" />
      <div className="container">
        <m.div
          className="glass-card rounded-2xl border border-border/50 grid grid-cols-2 sm:grid-cols-4 divide-x-0 sm:divide-x divide-y sm:divide-y-0 divide-border/50 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {stats.map((stat, i) => (
            <m.div
              key={stat.label}
              className="flex flex-col items-center justify-center gap-1.5 py-6 px-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <stat.icon className="w-4 h-4 text-primary mb-0.5 opacity-80" />
              <span className="text-2xl font-bold tracking-tight">{stat.value}</span>
              <span className="text-xs text-muted-foreground text-center leading-tight">
                {stat.label}
              </span>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
};

export default StatsBar;
