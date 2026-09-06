import React, { useState, useEffect } from "react";

interface HeaderProps {
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`} id="header">
      <a href="#inicio" className="logo" id="header-logo" onClick={(e) => { e.preventDefault(); handleNavClick("inicio"); }}>
        ESSENTIA<span>®</span>
      </a>

      <nav className={`nav ${menuOpen ? "open" : ""}`} id="main-navigation">
        <a
          href="#sobre"
          id="nav-link-sobre"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("sobre");
          }}
        >
          Sobre
        </a>
        <a
          href="#solucoes"
          id="nav-link-solucoes"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("solucoes");
          }}
        >
          Soluções
        </a>
        <a
          href="#projetos"
          id="nav-link-projetos"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("projetos");
          }}
        >
          Projetos
        </a>
        <a
          href="#contato"
          id="nav-link-contato"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("contato");
          }}
        >
          Contato
        </a>
        <button
          onClick={() => {
            setMenuOpen(false);
            onOpenContact();
          }}
          className="text-left text-blue-600 font-semibold md:hidden mt-2 text-sm"
          id="nav-mobile-cta"
        >
          Falar com um especialista →
        </button>
      </nav>

      <button
        className={`menu ${menuOpen ? "is-active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
        aria-expanded={menuOpen}
        id="mobile-menu-toggle"
      >
        <span></span>
        <span></span>
      </button>
    </header>
  );
};
