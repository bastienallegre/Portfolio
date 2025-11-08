const aboutItems = [
  {
    id: "projects",
    label: "Projets réalisés",
    number: 20,
  },
  {
    id: "experience",
    label: "Années d'expérience",
    number: 2,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Bonjour, je suis Bastien un développeur passionné, j’aime concevoir
            des applications fonctionnelles et bien structurées. Mon expertise
            s’étend sur plusieurs technologies, notamment Python, JavaScript,
            PostgreSQL, Symfony, Java, C, C++, React et Next.js. J’ai travaillé
            sur divers projets, allant d’applications web à des solutions
            mobiles, en mettant un point d’honneur à assurer une expérience
            utilisateur fluide et optimisée. Mon approche est axée sur la
            rigueur, la collaboration et la résolution de problèmes, des
            qualités que j’ai affinées en travaillant sur des projets comme
            Phare Away et d&apos;autres applications éducatives et interactives.
            Curieux et soucieux du détail, je m’investis pleinement dans chaque
            développement, en veillant à livrer un code propre et maintenable.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ id, label, number }) => (
              <div key={id}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>

                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <img
              src="/images/logo.svg"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
