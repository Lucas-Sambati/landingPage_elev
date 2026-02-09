import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const LOGO_URL =
  "https://res.cloudinary.com/dnyylurcv/image/upload/v1770233888/bbtntttjzaalbrdb9xrf.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="max-w-lg mx-auto px-6 py-12">
        {/* Logo & brand */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <Link to="/" className="flex items-center gap-2.5 group">
            <img
              src={LOGO_URL}
              alt="Elev"
              className="w-10 h-10 rounded-xl transition-transform group-hover:scale-105"
            />
            <span className="text-xl font-bold font-display text-foreground tracking-tight">
              Elev
            </span>
          </Link>
          <p className="text-sm text-muted-foreground text-center max-w-xs">
            Eleve seu resultado ao próximo nível. Treinos, nutrição e evolução — tudo movido por IA.
          </p>
        </div>

        {/* Nav links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
          {[
            { label: "Sobre", to: "/sobre" },
            { label: "Funcionalidades", to: "/funcionalidades" },
            { label: "Depoimentos", to: "/depoimentos" },
            { label: "Planos", to: "/planos" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Social */}
        <div className="flex justify-center mb-8">
          <a
            href="https://instagram.com/elevapp"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-white/5 text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-border/30 pt-6">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Elev. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
