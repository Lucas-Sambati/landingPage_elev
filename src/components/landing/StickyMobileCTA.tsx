import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 420);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-background/95 backdrop-blur-xl border-t border-border px-4 py-3 flex items-center gap-3">
        <Button variant="hero" size="default" className="flex-1 h-12 text-base" asChild>
          <a href="#planos">
            Quero o ELEV agora <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default StickyMobileCTA;
