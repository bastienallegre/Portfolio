/**
 * Modules
 */
import { useState } from "react";

/**
 * Components
 */
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const works = [
  {
    id: 1,
    imgSrc: "/images/project-n1.jpg",
    title: "Full stack game website",
    tags: ["React", "NextJS", "PostgreSQL"],
    description:
      "Développement d'un site web de jeu complet avec authentification, gestion des utilisateurs et base de données PostgreSQL. Interface utilisateur moderne et responsive.",
    teamSize: 6,
    duration: "3 semaines",
    date: "2024",
    projectLink: "https://phareaway.fun",
    githubLink: "",
  },
  {
    id: 2,
    imgSrc: "/images/project-n2.jpg",
    title: "Machine learning sorting articles app",
    tags: ["Java", "Machine learning"],
    description:
      "Application de tri automatique d'articles utilisant des algorithmes de machine learning. Permet de classifier et organiser des contenus textuels de manière intelligente.",
    teamSize: 2,
    duration: "1 semaines",
    date: "2023",
    projectLink: "",
    githubLink: "",
  },
  {
    id: 3,
    imgSrc: "/images/project-n3.jpg",
    title: "Event management app",
    tags: ["Java", "JavaFX"],
    description:
      "Application desktop de gestion d'événements permettant la création, planification et suivi d'événements avec une interface graphique intuitive développée en JavaFX.",
    teamSize: 5,
    duration: "2 semaines",
    date: "2023",
    projectLink: "",
    githubLink: "",
  },
  {
    id: 4,
    imgSrc: "/images/project-n4.jpg",
    title: "eCommerce website and Database",
    tags: ["Symfony", "PHP", "PostgreSQL"],
    description:
      "Site e-commerce complet développé avec Symfony incluant gestion des produits, panier d'achat, système de paiement et administration back-office.",
    teamSize: 1,
    duration: "3 semaines",
    date: "2024",
    projectLink: "",
    githubLink: "https://github.com/bastienallegre/Boutique-Synfony",
  },
  {
    id: 5,
    imgSrc: "/images/project-n5.jpg",
    title: "Educational math mobile app",
    tags: ["Android Studio", "Java", "XML"],
    description:
      "Application mobile éducative pour l'apprentissage des mathématiques avec des exercices interactifs et un système de progression pour les élèves.",
    teamSize: 1,
    duration: "1 semaines",
    date: "2025",
    projectLink: "",
    githubLink: "",
  },
  {
    id: 6,
    imgSrc: "/images/project-n6.jpg",
    title: "BackOffice Internship website",
    tags: ["Symfony", "PHP", "Twig"],
    description:
      "Plateforme de gestion de stages permettant aux étudiants de suivre leurs candidatures et aux entreprises de publier des offres. Interface d'administration complète.",
    teamSize: 5,
    duration: "2 semaines",
    date: "2025",
    projectLink: "",
    githubLink: "https://github.com/hugo-brb/CarnetStage",
  },
  {
    id: 7,
    imgSrc: "/images/project-n7.jpg",
    title: "Compilateur de langage de liste simple",
    tags: ["Java", "ANTLR"],
    description:
      "Création d'un langage de programmation dédié à la manipulation de listes, avec un compilateur développé en Java à l'aide d'ANTLR. Il permet des opérations et énumérations sur les listes telles que sum, sort, max, min, etc.",
    teamSize: 1,
    duration: "1 semaine",
    date: "2026",
    projectLink: "",
    githubLink: "https://github.com/bastienallegre/Project-Antlr",
  },
  {
    id: 8,
    imgSrc: "/images/project-n8.jpg",
    title: "API et application de gestion de films",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    description:
      "Développement d'une API REST pour gérer une collection de films, avec gestion des réalisateurs, genres et collections. Authentification JWT, routes protégées, recherche, filtres, tri, pagination, HATEOAS et documentation interactive via Swagger UI.",
    teamSize: 1,
    duration: "1 semaine",
    date: "2026",
    projectLink: "",
    githubLink: "https://github.com/bastienallegre/movies-collection",
  },
  {
    id: 9,
    imgSrc: "/images/project-n9.jpg",
    title: "Parc de tests d'interface pour ERP Openprod",
    tags: ["Python", "Selenium", "Odoo", "Openprod"],
    description:
      "Création et maintien d'un parc de tests d'interface automatisés avec Selenium et Python, dans le but d'assurer la qualité et la stabilité du logiciel ERP Openprod.",
    teamSize: "1",
    duration: "1.5 ans",
    date: "2025-2026",
    projectLink: "",
    githubLink: "",
  },
];

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Mes projets</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,_1fr))]">
          {works.map((project) => (
            <ProjectCard
              key={project.id}
              imgSrc={project.imgSrc}
              title={project.title}
              tags={project.tags}
              onClick={() => handleProjectClick(project)}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default Work;
