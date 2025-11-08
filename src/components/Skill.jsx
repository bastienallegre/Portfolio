/**
 * Components
 */
import SkillCard from "./SkillCard";

const skillCategories = [
  {
    title: "Langages de programmation",
    skills: [
      {
        imgSrc: "/images/javascript.svg",
        label: "JavaScript",
        desc: "Développement web",
      },
      {
        imgSrc: "/images/typescript.svg",
        label: "TypeScript",
        desc: "JavaScript typé",
      },
      {
        imgSrc: "/images/java.svg",
        label: "Java",
        desc: "POO & Backend",
      },
      {
        imgSrc: "/images/python.svg",
        label: "Python",
        desc: "Scripts & Backend",
      },
      {
        imgSrc: "/images/php.svg",
        label: "PHP",
        desc: "Développement web",
      },
      {
        imgSrc: "/images/c.svg",
        label: "C",
        desc: "Programmation système",
      },
      {
        imgSrc: "/images/c++.svg",
        label: "C++",
        desc: "Programmation orientée objet",
      },
      {
        imgSrc: "/images/css3.svg",
        label: "CSS3",
        desc: "Stylisation web",
      },
    ],
  },
  {
    title: "Frameworks & Librairies",
    skills: [
      {
        imgSrc: "/images/react.svg",
        label: "React",
        desc: "Librairie UI",
      },
      {
        imgSrc: "/images/nextjs.svg",
        label: "NextJS",
        desc: "Framework React",
      },
      {
        imgSrc: "/images/nodejs.svg",
        label: "NodeJS",
        desc: "Runtime JavaScript",
      },
      {
        imgSrc: "/images/symfony.svg",
        label: "Symfony",
        desc: "Framework PHP",
      },
      {
        imgSrc: "/images/tailwindcss.svg",
        label: "TailwindCSS",
        desc: "Framework CSS",
      },
      {
        imgSrc: "/images/angular.svg",
        label: "Angular",
        desc: "Framework TypeScript",
      },
    ],
  },
  {
    title: "Bases de données",
    skills: [
      {
        imgSrc: "/images/postgresql.svg",
        label: "PostgreSQL",
        desc: "Base de données relationnelle",
      },
      {
        imgSrc: "/images/mongodb.svg",
        label: "MongoDB",
        desc: "Base de données NoSQL",
      },
      {
        imgSrc: "/images/graphql.svg",
        label: "GraphQL",
        desc: "Langage de requête pour API",
      },
    ],
  },
  {
    title: "Outils de développement",
    skills: [
      {
        imgSrc: "/images/android-studio.svg",
        label: "Android Studio",
        desc: "Développement mobile",
      },
      {
        imgSrc: "/images/git.svg",
        label: "Git",
        desc: "Gestion de version",
      },
      {
        imgSrc: "/images/vscode.svg",
        label: "VsCode",
        desc: "Développement web",
      },
      {
        imgSrc: "/images/docker.svg",
        label: "Docker",
        desc: "Conteneurisation",
      },
      {
        imgSrc: "/images/jetbrains.svg",
        label: "JetBrains",
        desc: "Environnement de développement intégré",
      },
    ],
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">
          Les outils essentiels que j&apos;utilise
        </h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Découvrez les outils et technologies que je maitrise et utilise
          quotidiennement.
        </p>

        <div className="space-y-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="headline-3 mb-4 text-zinc-200 reveal-up">
                {category.title}
              </h3>
              <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(250px,_1fr))]">
                {category.skills.map(({ imgSrc, label, desc }, skillIndex) => (
                  <SkillCard
                    key={skillIndex}
                    imgSrc={imgSrc}
                    label={label}
                    desc={desc}
                    classes="reveal-up"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
