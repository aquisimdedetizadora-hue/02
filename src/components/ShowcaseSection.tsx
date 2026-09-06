import React from "react";
import { ProjectItem } from "../types";

interface ShowcaseSectionProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
  onOpenContact: () => void;
}

export const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({
  projects,
  onSelectProject,
  onOpenContact,
}) => {
  return (
    <section className="showcase" id="projetos">
      <div className="showcase-copy" id="showcase-header">
        <div>
          <p className="section-label" id="showcase-section-label">
            03 — PROJETOS SELECIONADOS
          </p>
          <h2 id="showcase-heading">
            Ideias que
            <br />
            <em>ganham vida.</em>
          </h2>
        </div>

        <button
          className="text-link"
          id="showcase-view-all-link"
          onClick={onOpenContact}
        >
          Ver todos os projetos <span className="arrow">→</span>
        </button>
      </div>

      <div className="project-grid" id="projects-grid">
        {projects.map((project) => (
          <article
            key={project.id}
            className={`project ${
              project.type === "dark" ? "project-dark" : "project-light"
            } group`}
            id={`project-card-${project.id}`}
            onClick={() => onSelectProject(project)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onSelectProject(project);
              }
            }}
          >
            <span>{project.category}</span>
            <h3 style={{ whiteSpace: "pre-line" }}>{project.title}</h3>

            {project.type === "dark" ? (
              <div
                className="project-shape"
                aria-hidden="true"
                id={`project-shape-${project.id}`}
              ></div>
            ) : (
              <div
                className="glass"
                aria-hidden="true"
                id={`project-glass-${project.id}`}
              ></div>
            )}

            <div className="absolute bottom-9 left-10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-xs font-semibold tracking-wider uppercase">
              <span>Explorar Estudo de Caso</span>
              <span className="arrow">→</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
