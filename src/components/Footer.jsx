/**
 * Compopnent
 */
import { ButtonPrimary } from "./Button";

const sitemap = [
  {
    label: "Accueil",
    href: "#home",
  },
  {
    label: "À propos",
    href: "#about",
  },
  {
    label: "Travaux",
    href: "#work",
  },
  {
    label: "Me contacter",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/bastienallegre",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bastien-allegre-859479345/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/bastien.allegre/",
  },
];

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
              Travaillons ensemble dès aujourd&apos;hui !
            </h2>

            <ButtonPrimary
              href="mailto:bastien_allegre@orange.fr"
              label="Démarrer un projet"
              icon="chevron_right"
              classes="reveal-up"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2 reveal-up">Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 reveal-up">Réseaux Sociaux</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="/" className="logo reveal-up">
            <img src="/images/logo.svg" width={40} height={40} alt="Logo" />
          </a>

          <p className="text-zinc-500 text-sm reveal-up">
            &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
