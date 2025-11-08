/**
 * Modules
 */
import { useEffect } from "react";
import PropTypes from "prop-types";

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-zinc-900 rounded-2xl ring-1 ring-zinc-50/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-lg grid place-items-center bg-zinc-800 hover:bg-zinc-700 transition-colors"
          aria-label="Fermer"
        >
          <span className="material-symbols-rounded text-zinc-400">close</span>
        </button>

        {/* Image */}
        <figure className="w-full h-64 rounded-t-2xl overflow-hidden">
          <img
            src={project.imgSrc}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </figure>

        {/* Content */}
        <div className="p-8">
          <h2 className="headline-2 mb-4">{project.title}</h2>

          <p className="text-zinc-400 mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Info grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-zinc-800/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-rounded text-sky-400">
                  group
                </span>
                <h3 className="text-sm font-semibold text-zinc-300">Équipe</h3>
              </div>
              <p className="text-zinc-400">
                {project.teamSize}{" "}
                {project.teamSize > 1 ? "personnes" : "personne"}
              </p>
            </div>

            <div className="bg-zinc-800/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-rounded text-sky-400">
                  schedule
                </span>
                <h3 className="text-sm font-semibold text-zinc-300">Durée</h3>
              </div>
              <p className="text-zinc-400">{project.duration}</p>
            </div>

            <div className="bg-zinc-800/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-rounded text-sky-400">
                  calendar_today
                </span>
                <h3 className="text-sm font-semibold text-zinc-300">Date</h3>
              </div>
              <p className="text-zinc-400">{project.date}</p>
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-zinc-300 mb-3">
              Technologies utilisées
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-zinc-800 text-zinc-300 rounded-lg text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            {project.projectLink && (
              <a
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-sky-400 hover:bg-sky-500 text-zinc-950 rounded-lg font-medium transition-colors"
              >
                <span className="material-symbols-rounded">open_in_new</span>
                Voir le projet
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-lg font-medium transition-colors"
              >
                <span className="material-symbols-rounded">code</span>
                Code source
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectModal.propTypes = {
  project: PropTypes.shape({
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    teamSize: PropTypes.number.isRequired,
    duration: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    projectLink: PropTypes.string,
    githubLink: PropTypes.string,
  }),
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProjectModal;
