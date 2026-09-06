import React, { useState } from "react";
import { ServiceItem } from "../types";

interface ServicesSectionProps {
  services: ServiceItem[];
  onSelectService?: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  onSelectService,
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="services" id="solucoes">
      <div className="section-heading" id="services-heading-container">
        <p className="section-label" id="services-section-label">
          02 — O QUE FAZEMOS
        </p>
        <h2 id="services-heading">
          Uma visão completa.
          <br />
          <em>Uma execução impecável.</em>
        </h2>
      </div>

      <div className="service-list" id="services-list">
        {services.map((service, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <div key={service.number} className="border-b border-[var(--line)]">
              <article
                className="service"
                id={`service-item-${service.number}`}
                onClick={() => {
                  toggleExpand(index);
                  if (onSelectService) onSelectService(service);
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleExpand(index);
                  }
                }}
                aria-expanded={isExpanded}
              >
                <span>{service.number}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <span
                  className="arrow"
                  style={{
                    transform: isExpanded ? "rotate(90deg)" : "none",
                    transition: "transform 0.25s ease",
                  }}
                >
                  →
                </span>
              </article>

              {isExpanded && service.details && (
                <div
                  className="pb-8 pt-2 pl-4 md:pl-[100px] pr-4 animate-in fade-in duration-200"
                  id={`service-details-${service.number}`}
                >
                  <div className="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-black/5">
                    <p className="text-xs font-bold tracking-widest text-[#86868b] uppercase mb-3">
                      Capacidades & Entregas Chave
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.details.map((detail, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2.5 text-sm text-[#515154]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3] shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
