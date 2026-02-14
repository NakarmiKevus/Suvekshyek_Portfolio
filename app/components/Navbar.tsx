"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (isOpen && target && !target.closest("nav")) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    if (pathname === "/About") {
      setActiveSection("about");
    } else if (pathname === "/Projects") {
      setActiveSection("project");
    } else if (pathname === "/") {
      setActiveSection("home");
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") return;

    const checkSection = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "project",
        "experience",
        "contact",
      ];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;

          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    checkSection();
    window.addEventListener("scroll", checkSection);
    return () => window.removeEventListener("scroll", checkSection);
  }, [pathname]);

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    setIsOpen(false);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
        <section className="container mx-auto px-8 py-4">
          <div className="flex justify-between items-center">
            <nav>
              <ul className="flex gap-4 items-center justify-between transition-all duration-200 hover:scale-[1.1]">
                <li>
                  <div>
                    <img
                      src="/Images/avatar1.png"
                      alt="Suvekshyek Nakarmi"
                      className="rounded-full w-15 h-auto"
                    />
                  </div>
                </li>

                <li className="text-xl sm:text-2xl text-blue-400 font-bold tracking-tight leading-tight">
                  <a href="/" className="flex flex-col">
                    <p>Suvekshyek</p>
                    <p>Nakarmi</p>
                  </a>
                </li>
              </ul>
            </nav>

            <nav>
              <ul className="hidden lg:flex justify-between gap-6 items-center">
                <li
                  className={`text-base font-medium transition-all duration-200 hover:scale-[1.2] ${
                    activeSection === "home"
                      ? "text-blue-400"
                      : "text-slate-100 hover:text-blue-400"
                  }`}
                >
                  <a href="/#home" onClick={() => handleNavClick("home")}>
                    Home
                  </a>
                </li>
                <li
                  className={`text-base font-medium transition-all duration-200 hover:scale-[1.2] ${
                    activeSection === "about"
                      ? "text-blue-400"
                      : "text-slate-100 hover:text-blue-400"
                  }`}
                >
                  <a href="/#about" onClick={() => handleNavClick("about")}>
                    About
                  </a>
                </li>
                <li
                  className={`text-base font-medium transition-all duration-200 hover:scale-[1.2] ${
                    activeSection === "skills"
                      ? "text-blue-400"
                      : "text-slate-100 hover:text-blue-400"
                  }`}
                >
                  <a href="/#skills" onClick={() => handleNavClick("skills")}>
                    Skills
                  </a>
                </li>
                <li
                  className={`text-base font-medium transition-all duration-200 hover:scale-[1.2] ${
                    activeSection === "project"
                      ? "text-blue-400"
                      : "text-slate-100 hover:text-blue-400"
                  }`}
                >
                  <a href="/#project" onClick={() => handleNavClick("project")}>
                    Project
                  </a>
                </li>
                <li
                  className={`text-base font-medium transition-all duration-200 hover:scale-[1.2] ${
                    activeSection === "experience"
                      ? "text-blue-400"
                      : "text-slate-100 hover:text-blue-400"
                  }`}
                >
                  <a
                    href="/#experience"
                    onClick={() => handleNavClick("experience")}
                  >
                    Experience
                  </a>
                </li>
                <li
                  className={`text-base font-medium transition-all duration-200 hover:scale-[1.2] ${
                    activeSection === "contact"
                      ? "text-blue-400"
                      : "text-slate-100 hover:text-blue-400"
                  }`}
                >
                  <a href="/#contact" onClick={() => handleNavClick("contact")}>
                    Contact
                  </a>
                </li>
              </ul>

              <div className="flex gap-4 items-center lg:hidden">
                <button
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all duration-200 hover:scale-[1.2]"
                  aria-label="Toggle menu"
                >
                  <img
                    src="/Images/menu.svg"
                    alt="menu"
                    className="w-8 h-auto"
                  />
                </button>
              </div>
            </nav>
          </div>
        </section>

        <div className="relative w-full flex justify-center">
          <div className="w-full h-0.5 bg-blue-400/50 rounded-full z-10"></div>
          <div className="absolute w-full h-0.5 bg-blue-400/50 blur-md opacity-60"></div>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="container mx-auto px-8 py-4 bg-black/50 backdrop-blur-sm">
            <ul className="flex flex-col gap-4">
              <li
                className={`text-base font-medium transition-all duration-200 hover:translate-x-2 ${
                  activeSection === "home"
                    ? "text-blue-400"
                    : "text-slate-100 hover:text-blue-400"
                }`}
              >
                <a href="/#home" onClick={() => handleNavClick("home")}>
                  Home
                </a>
              </li>
              <li
                className={`text-base font-medium transition-all duration-200 hover:translate-x-2 ${
                  activeSection === "about"
                    ? "text-blue-400"
                    : "text-slate-100 hover:text-blue-400"
                }`}
              >
                <a href="/#about" onClick={() => handleNavClick("about")}>
                  About
                </a>
              </li>
              <li
                className={`text-base font-medium transition-all duration-200 hover:translate-x-2 ${
                  activeSection === "skills"
                    ? "text-blue-400"
                    : "text-slate-100 hover:text-blue-400"
                }`}
              >
                <a href="/#skills" onClick={() => handleNavClick("skills")}>
                  Skills
                </a>
              </li>
              <li
                className={`text-base font-medium transition-all duration-200 hover:translate-x-2 ${
                  activeSection === "project"
                    ? "text-blue-400"
                    : "text-slate-100 hover:text-blue-400"
                }`}
              >
                <a href="/#project" onClick={() => handleNavClick("project")}>
                  Project
                </a>
              </li>
              <li
                className={`text-base font-medium transition-all duration-200 hover:translate-x-2 ${
                  activeSection === "experience"
                    ? "text-blue-400"
                    : "text-slate-100 hover:text-blue-400"
                }`}
              >
                <a
                  href="/#experience"
                  onClick={() => handleNavClick("experience")}
                >
                  Experience
                </a>
              </li>
              <li
                className={`text-base font-medium transition-all duration-200 hover:translate-x-2 ${
                  activeSection === "contact"
                    ? "text-blue-400"
                    : "text-slate-100 hover:text-blue-400"
                }`}
              >
                <a href="/#contact" onClick={() => handleNavClick("contact")}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="h-40"></div>
    </>
  );
}

export default Navbar;
