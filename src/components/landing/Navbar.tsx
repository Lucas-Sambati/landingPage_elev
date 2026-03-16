import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const LOGO_URL =
  "https://res.cloudinary.com/dnyylurcv/image/upload/v1773429220/elev_logo_jh8geu.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Como funciona", href: "#dor" },
    { label: "Funcionalidades", href: "#features" },
    { label: "Usuários", href: "#usuarios" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-xl border-b border-border" : ""
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2.5 group">
          <img
            src={LOGO_URL}
            alt="Elev"
            className="w-9 h-9 rounded-xl transition-transform group-hover:scale-105"
          />
          <span className="text-xl font-bold uppercase tracking-wider">ELEV</span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="hero" size="sm" asChild>
            <a href="#planos">Começar agora</a>
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <div
        ref={menuRef}
        className={`md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-b-0"
        }`}
      >
        <div className="container py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button variant="hero" size="default" asChild>
            <a href="#planos" onClick={() => setMobileOpen(false)}>
              Começar agora
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
