const LOGO_URL =
  "https://res.cloudinary.com/dnyylurcv/image/upload/v1773429220/elev_logo_jh8geu.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <img src={LOGO_URL} alt="Elev" className="w-8 h-8 rounded-xl" />
            <span className="text-lg font-semibold uppercase tracking-wider">ELEV</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Funcionalidades</a>
            <a href="#planos" className="hover:text-foreground transition-colors">Planos</a>
            <a href="#usuarios" className="hover:text-foreground transition-colors">Usuários</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            © 2026 ELEV. Todos os direitos reservados.
          </p>
        </div>
        <div className="mt-6 pt-6 border-t border-border/40 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground/60">
          <a href="#" className="hover:text-muted-foreground transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-muted-foreground transition-colors">Termos de Uso</a>
          <a href="mailto:suporte@elevapp.com.br" className="hover:text-muted-foreground transition-colors">Contato</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
