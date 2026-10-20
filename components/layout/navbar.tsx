"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const navigation = [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className="fixed top-4 right-0 left-0 z-100 w-full max-w-5xl mx-auto m-3 px-4  font-bold">
        <nav className="w-full bg-watery py-4 px-6 md:px-12 flex items-center justify-between text-darkPrimary rounded-full">
          <h3 className="text-2xl font-bold tracking-wide">
            Mi<span className="text-secondary">rac</span>le.
          </h3>
          <ul className="list-none sm:flex items-center gap-3 text-[15px] hidden">
            {navigation.map((item, idx) => (
              <li
                key={idx}
                className="hover:text-primary hover:scale-105 hover:-translate-y-[2px] duration-300 transition-all"
              >
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <button className="sm:hidden flex items-center" onClick={toggleMenu}>
            {!openMenu ? <Menu size={32} /> : <X size={32} />}
          </button>
        </nav>

        {openMenu && (
          <div
            id="dropMenu"
            className="sm:hidden block bg-watery !absolute top-full translate-y-4 min-w-64 min-h-40 rounded-xl max-w-max right-4 left-auto"
          >
            <ul className="py-4">
              {navigation.map((item, idx) => (
                <li
                  key={idx}
                  className="w-full hover:bg-secondary duration-300 transition-all py-2 px-3 text-[15px]"
                >
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
