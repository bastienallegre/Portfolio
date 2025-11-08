/**
 * Modules
 */
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();

  const initActiveBox = () => {
    if (lastActiveLink.current && activeBox.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
      activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
    }
  };

  useEffect(() => {
    initActiveBox();

    window.addEventListener("resize", initActiveBox);

    // Cleanup pour éviter les memory leaks
    return () => {
      window.removeEventListener("resize", initActiveBox);
    };
  }, []);

  const activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove("active");
    event.target.classList.add("active");
    lastActiveLink.current = event.target;

    activeBox.current.style.top = event.target.offsetTop + "px";

    activeBox.current.style.left = event.target.offsetLeft + "px";

    activeBox.current.style.width = event.target.offsetWidth + "px";

    activeBox.current.style.height = event.target.offsetHeight + "px";
  };

  const navItems = [
    {
      id: "home",
      label: "Accueil",
      link: "#home",
      className: "nav-link active",
      isActive: true,
    },
    {
      id: "about",
      label: "À propos",
      link: "#about",
      className: "nav-link",
    },
    {
      id: "work",
      label: "Travaux",
      link: "#work",
      className: "nav-link",
    },
    {
      id: "contact",
      label: "Me contacter",
      link: "#contact",
      className: "nav-link md:hidden",
    },
  ];
  return (
    <nav className={"navbar " + (navOpen ? "active" : "")}>
      {navItems.map(({ id, label, link, className, isActive }) => (
        <a
          href={link}
          key={id}
          ref={isActive ? lastActiveLink : null}
          className={className}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
