import React from "react";

interface CtaSectionProps {
  onOpenContact: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenContact }) => {
  return (
    <section className="cta" id="contato">
      <p className="section-label" id="cta-section-label">
        04 — VAMOS COMEÇAR
      </p>

      <h2 id="cta-heading">
        Tem uma grande ideia?
        <br />
        <em>Vamos torná-la real.</em>
      </h2>

      <div className="flex flex-col items-center justify-center gap-4">
        <button
          className="btn primary large"
          id="cta-start-project-btn"
          onClick={onOpenContact}
        >
          Iniciar um projeto <span className="arrow">→</span>
        </button>

        <p className="text-xs text-[#86868b] tracking-wide mt-2">
          Atendimento direto:{" "}
          <a
            href="mailto:contato@essentiastudio.com"
            className="text-[#1d1d1f] hover:underline font-medium"
          >
            contato@essentiastudio.com
          </a>
        </p>
      </div>
    </section>
  );
};
