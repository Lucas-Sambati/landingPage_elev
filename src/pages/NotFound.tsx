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
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <img src={LOGO_URL} alt="Elev" className="w-16 h-16 rounded-2xl mx-auto mb-6" />
        <h1 className="mb-4 text-5xl font-bold font-display text-gradient">404</h1>
        <p className="mb-6 text-lg text-muted-foreground">Página não encontrada</p>
        <a href="/" className="gradient-cta text-primary-foreground font-semibold px-6 py-3 rounded-xl inline-block hover:opacity-90 transition-all">
          Voltar ao início
        </a>
      </div>
    </div>
  );
};

export default NotFound;
