import React from "react";

export const AboutIntro: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="intro" id="sobre">
      <p className="section-label" id="about-section-label">
        01 — QUEM SOMOS
      </p>

      <div className="intro-grid" id="about-intro-grid">
        <h2 id="about-heading">
          Menos ruído.
          <br />
          Mais <em>impacto.</em>
        </h2>

        <div>
          <p className="large-copy" id="about-copy">
            Acreditamos que as melhores experiências nascem da simplicidade. Por isso, eliminamos o excesso e focamos no que realmente importa.
          </p>
          <button
            className="text-link"
            id="about-approach-link"
            onClick={() => scrollTo("solucoes")}
          >
            Descubra nossa abordagem <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};
