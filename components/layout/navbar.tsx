"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

interface NavLink {
  label: string;
  href: string;
}

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navigation: NavLink[] = [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];
  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => section !== null);

    const handleScroll = () => {
      let currentSection = sections[0]?.id;

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= 150) {
          currentSection = section.id;
        } else {
          break;
        }
      }

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  const handleNavigation = (href: string) => {
    setActiveSection(href.slice(1));
    setOpenMenu(false);
  };

  const linkClass = (item: any) =>
    `transition-all duration-300 py-2 px-4 rounded-xl hover:scale-105 hover:-translate-y-[2px] ${
      activeSection === item.href.slice(1)
        ? "text-white bg-primary py-2 px-4 rounded-xl"
        : "hover:text-primary"
    }`;

  return (
    <header className="fixed top-4 right-0 left-0 z-[100] mx-auto mt-3 w-full max-w-6xl px-4 font-bold">
      <nav className="flex w-full items-center justify-between rounded-full bg-watery px-6 py-4 text-darkPrimary md:px-12">
        <h3 className="font-bold tracking-wide flex items-end text-xl">
          <span className="text-primary montecarlo-regular mr-1 text-2xl">
            M
          </span>
          iracle.
        </h3>

        <ul className="hidden list-none items-center gap-6 text-[15px] sm:flex">
          {navigation.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => handleNavigation(item.href)}
                className={linkClass(item)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="flex items-center sm:hidden"
          onClick={toggleMenu}
          aria-label={openMenu ? "Close menu" : "Open menu"}
          aria-expanded={openMenu}
        >
          {!openMenu ? <Menu size={32} /> : <X size={32} />}
        </button>
      </nav>

      {openMenu && (
        <div className="absolute right-8 top-full mt-4 min-h-40 min-w-64 rounded-xl bg-watery sm:hidden">
          <ul className="py-4">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => handleNavigation(item.href)}
                  className={`block w-full px-4 py-2 text-[15px] transition-all duration-300 hover:bg-secondary ${linkClass(item)}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
