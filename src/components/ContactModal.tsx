import React, { useState } from "react";
import { ContactFormData } from "../types";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  prefilledService,
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    service: prefilledService || "Projeto Completo",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("contato@essentiastudio.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      service: "Projeto Completo",
      message: "",
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm"
      id="contact-modal-overlay"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl p-7 sm:p-9 shadow-2xl border border-black/5 text-[#1d1d1f] max-h-[90vh] overflow-y-auto"
        id="contact-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#f5f5f7] hover:bg-[#e8e8ed] flex items-center justify-center text-sm font-semibold transition-colors"
          aria-label="Fechar modal"
          id="close-contact-modal-btn"
        >
          ✕
        </button>

        {submitted ? (
          <div className="py-8 text-center" id="contact-success-state">
            <div className="w-14 h-14 rounded-full bg-[#0071e3]/10 text-[#0071e3] flex items-center justify-center mx-auto mb-5 text-2xl font-bold">
              ✓
            </div>
            <h3 className="text-2xl font-bold tracking-tight mb-3">
              Mensagem Recebida
            </h3>
            <p className="text-[#6e6e73] text-sm leading-relaxed max-w-sm mx-auto mb-6">
              Obrigado, <strong className="text-[#1d1d1f]">{formData.name}</strong>. Nossa equipe de estratégia e design analisará seu briefing e entrará em contato em até 24 horas úteis.
            </p>
            <button
              onClick={handleReset}
              className="btn primary"
              id="contact-success-close-btn"
            >
              Concluir
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-bold tracking-widest text-[#86868b] uppercase">
                CONTATO DIRETO
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mt-1 mb-2">
                Vamos construir algo <em>único.</em>
              </h3>
              <p className="text-sm text-[#6e6e73] leading-relaxed">
                Conte-nos sobre sua visão, desafios e objetivos para avaliarmos a melhor abordagem.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" id="contact-form">
              <div>
                <label className="block text-xs font-semibold text-[#1d1d1f] mb-1.5" htmlFor="contact-name">
                  Nome completo *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#d2d2d7] bg-[#fcfcfd] text-sm focus:outline-none focus:border-[#0071e3] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1d1d1f] mb-1.5" htmlFor="contact-email">
                  E-mail profissional *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="voce@suaempresa.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#d2d2d7] bg-[#fcfcfd] text-sm focus:outline-none focus:border-[#0071e3] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1d1d1f] mb-1.5" htmlFor="contact-service">
                  Foco principal do projeto
                </label>
                <select
                  id="contact-service"
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#d2d2d7] bg-[#fcfcfd] text-sm focus:outline-none focus:border-[#0071e3] transition-colors"
                >
                  <option value="Estratégia">01 — Estratégia & Posicionamento</option>
                  <option value="Design">02 — Design de Produto & UI/UX</option>
                  <option value="Tecnologia">03 — Engenharia & Desenvolvimento</option>
                  <option value="Projeto Completo">Transformação Digital Completa</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1d1d1f] mb-1.5" htmlFor="contact-message">
                  Breve descrição da sua ideia
                </label>
                <textarea
                  id="contact-message"
                  rows={3}
                  placeholder="Fale um pouco sobre o momento da sua empresa e o que deseja alcançar..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#d2d2d7] bg-[#fcfcfd] text-sm focus:outline-none focus:border-[#0071e3] transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
                <button
                  type="submit"
                  className="btn primary justify-center"
                  id="submit-contact-form-btn"
                >
                  Enviar mensagem <span className="arrow">→</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="text-xs text-[#6e6e73] hover:text-[#1d1d1f] py-2 px-3 rounded-lg border border-dashed border-[#d2d2d7] transition-colors text-center"
                  id="copy-email-btn"
                >
                  {copied ? "✓ E-mail copiado!" : "Copiar e-mail direto"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
