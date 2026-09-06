import React from "react";

export const Footer: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer">
      <a href="#inicio" className="logo" onClick={scrollToTop} id="footer-logo">
        ESSENTIA<span>®</span>
      </a>

      <div id="footer-copyright">
        © 2026 Essentia. Todos os direitos reservados.
      </div>

      <div className="socials" id="footer-socials">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          id="social-instagram"
        >
          Instagram
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          id="social-linkedin"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};
