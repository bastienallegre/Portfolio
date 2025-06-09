import React from "react";

/**
 * Component
 */
import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/project-n1.jpg",
    title: "Full stack game website",
    tags: ["React", "NextJS", "PostgreSQL"],
    projectLink: "https://phareaway.fun",
  },
  {
    imgSrc: "/images/project-n2.jpg",
    title: "Machine learning sorting articles app",
    tags: ["Java", "Machine learning"],
    projectLink: "",
  },
  {
    imgSrc: "/images/project-n3.jpg",
    title: "Event management app",
    tags: ["Java", "JavaFX"],
    projectLink: "",
  },
  {
    imgSrc: "/images/project-n4.jpg",
    title: "eCommerce website and Database",
    tags: ["Synfony", "PHP", "PostgreSQL"],
    projectLink: "https://github.com/bastienallegre/Boutique-Synfony",
  },
  {
    imgSrc: "/images/project-n5.jpg",
    title: "Educativ math mobile app",
    tags: ["Android Studio", "Java", "XML"],
    projectLink: "",
  },
  {
    imgSrc: "/images/project-n6.jpg",
    title: "BackOffice Intership website",
    tags: ["Synfony", "PHP", "Twig"],
    projectLink: "https://github.com/hugo-brb/CarnetStage",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Mes projets</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
