import React from "react";

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero" id="inicio">
      <div className="eyebrow" id="hero-eyebrow">
        ESTRATÉGIA · DESIGN · TECNOLOGIA
      </div>

      <h1 id="hero-heading">
        O futuro
        <br />
        começa <em>agora.</em>
      </h1>

      <p className="hero-copy" id="hero-copy">
        Criamos marcas, produtos e experiências digitais para empresas que querem deixar sua marca no mundo.
      </p>

      <div className="hero-actions" id="hero-actions">
        <button
          className="btn primary"
          id="hero-cta-btn"
          onClick={onOpenContact}
        >
          Vamos conversar <span className="arrow">→</span>
        </button>
        <button
          className="text-link"
          id="hero-learn-more-link"
          onClick={() => scrollTo("sobre")}
        >
          Conheça nosso trabalho <span className="arrow">→</span>
        </button>
      </div>

      <div className="hero-orb orb-one" aria-hidden="true" id="hero-orb-1"></div>
      <div className="hero-orb orb-two" aria-hidden="true" id="hero-orb-2"></div>

      <div
        className="scroll cursor-pointer select-none"
        id="hero-scroll-indicator"
        onClick={() => scrollTo("sobre")}
      >
        SCROLL PARA EXPLORAR <span>↓</span>
      </div>
    </section>
  );
};
