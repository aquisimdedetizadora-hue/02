import React, { useState } from "react";

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const [mouseShift, setMouseShift] = useState({ x: 0, y: 0 });

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 40;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 40;
    setMouseShift({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseShift({ x: 0, y: 0 });
  };

  return (
    <section
      className="hero"
      id="inicio"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
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

      {/* Atmospheric dynamic orbs with continuous organic loop across the screen */}
      <div
        className="hero-orb-field"
        aria-hidden="true"
        id="hero-orb-field"
        style={{
          transform: `translate3d(${mouseShift.x}px, ${mouseShift.y}px, 0)`,
        }}
      >
        <div className="hero-orb orb-one" id="hero-orb-1"></div>
        <div className="hero-orb orb-two" id="hero-orb-2"></div>
        <div className="hero-orb orb-three" id="hero-orb-3"></div>
      </div>

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
