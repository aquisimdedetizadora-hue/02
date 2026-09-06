import React from "react";

export const Statement: React.FC = () => {
  return (
    <section className="statement" id="manifesto">
      <div className="statement-card" id="manifesto-card">
        <span className="card-number" id="manifesto-card-glyph">
          A
        </span>
        <p id="manifesto-card-subheading">
          Não criamos apenas coisas bonitas.
        </p>
        <h2 id="manifesto-card-heading">
          Criamos coisas que <em>fazem sentido.</em>
        </h2>
      </div>
    </section>
  );
};
