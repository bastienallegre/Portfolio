import React from "react";

/**
 * Components
 */
import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "/images/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/android-studio.svg",
    label: "Android Studio",
    desc: "Mobile Development",
  },
  {
    imgSrc: "/images/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/c.svg",
    label: "C",
    desc: "Back-end",
  },
  {
    imgSrc: "/images/symfony.svg",
    label: "Symfony",
    desc: "Framework",
  },
  {
    imgSrc: "/images/c++.svg",
    label: "C++",
    desc: "Back-end",
  },
  {
    imgSrc: "/images/java.svg",
    label: "Java",
    desc: "Object Oriented / Back-end",
  },

  {
    imgSrc: "/images/php.svg",
    label: "PHP",
    desc: "Back-end",
  },
  {
    imgSrc: "/images/postgresql.svg",
    label: "PostgreSQL",
    desc: "Database",
  },
  {
    imgSrc: "/images/nextjs.svg",
    label: "NextJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/images/python.svg",
    label: "Python",
    desc: "Back-end",
  },
  {
    imgSrc: "/images/typescript.svg",
    label: "TypeScript",
    desc: "Framework",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">
          Les outils essentiels que j'utilise
        </h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Découvrez les outils et technologies que je maitrise et utilise
          quotidiennement.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
