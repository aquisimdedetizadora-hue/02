import React from "react";
import { ProjectItem } from "../types";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquireProject: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onInquireProject,
}) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md"
      id="project-modal-overlay"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-2xl rounded-3xl p-7 sm:p-10 shadow-2xl border ${
          project.type === "dark"
            ? "bg-[#151517] text-white border-white/10"
            : "bg-white text-[#1d1d1f] border-black/10"
        } max-h-[90vh] overflow-y-auto`}
        id="project-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className={`absolute top-6 right-6 w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
            project.type === "dark"
              ? "bg-white/10 hover:bg-white/20 text-white"
              : "bg-[#f5f5f7] hover:bg-[#e8e8ed] text-[#1d1d1f]"
          }`}
          aria-label="Fechar modal do projeto"
          id="close-project-modal-btn"
        >
          ✕
        </button>

        <div className="mb-2 flex items-center gap-3">
          <span className="text-[11px] font-bold tracking-widest uppercase opacity-75">
            {project.category}
          </span>
          <span className="opacity-40">·</span>
          <span className="text-xs opacity-75">{project.year}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3" style={{ whiteSpace: "pre-line" }}>
          {project.title}
        </h2>

        {project.subtitle && (
          <p
            className={`text-lg font-medium leading-snug mb-6 ${
              project.type === "dark" ? "text-white/80" : "text-[#515154]"
            }`}
          >
            {project.subtitle}
          </p>
        )}

        <div
          className={`p-5 rounded-2xl mb-6 text-sm leading-relaxed ${
            project.type === "dark" ? "bg-white/5" : "bg-[#f5f5f7]"
          }`}
        >
          <div className="font-semibold text-xs tracking-wider uppercase opacity-60 mb-1">
            Cliente & Contexto
          </div>
          <p>{project.summary}</p>
        </div>

        <div className="mb-8">
          <div className="text-xs font-bold tracking-widest uppercase opacity-60 mb-3">
            Escopo de Execução
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3] shrink-0 mt-2" />
                <span className={project.type === "dark" ? "text-white/90" : "text-[#515154]"}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between pt-4 border-t border-black/10 dark:border-white/10">
          <div className="text-xs opacity-60">
            Deseja um projeto neste formato?
          </div>
          <button
            className="btn primary"
            id="inquire-project-btn"
            onClick={() => {
              onClose();
              onInquireProject(`Projeto similar a ${project.title.replace("\n", " ")}`);
            }}
          >
            Solicitar Proposta <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};
