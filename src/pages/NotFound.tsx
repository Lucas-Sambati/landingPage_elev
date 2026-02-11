import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const LOGO_URL =
  "https://res.cloudinary.com/dnyylurcv/image/upload/v1770233888/bbtntttjzaalbrdb9xrf.png";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background overflow-hidden">
      {/* Background sutil */}
      <div className="absolute inset-0 gradient-hero pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 text-center">
        <img src={LOGO_URL} alt="Elev" className="w-16 h-16 rounded-2xl mx-auto mb-6" />
        <h1 className="mb-4 text-5xl font-bold text-gradient" style={{ fontFamily: "'Inter', sans-serif" }}>404</h1>
        <p className="mb-6 text-lg text-muted-foreground">Página não encontrada</p>
        <a href="/" className="bg-[#4F46E5] text-white font-medium text-sm sm:text-base px-8 py-3.5 rounded-full transition-all hover:bg-[#4338CA] hover:scale-[1.02] active:scale-[0.97] touch-manipulation inline-block"
          style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '0.02em' }}
        >
          Voltar ao início
        </a>
      </div>

      {/* Assinatura ELEV */}
      <span
        className="absolute bottom-8 z-10 text-[10px] font-semibold tracking-[0.4em] text-muted-foreground/80 opacity-60"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        ELEV
      </span>
    </div>
  );
};

export default NotFound;
