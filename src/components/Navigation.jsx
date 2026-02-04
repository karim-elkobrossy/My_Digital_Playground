import { useState, useEffect } from "react";
import { profile } from "../data/portfolio.js";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const sections = [
        "hero",
        "open-source-research",
        "ml-data-science",
        "programming-web",
      ];
      const navHeight = 70;
      const scrollPosition = window.scrollY + navHeight + 100; // Add buffer for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop =
            section.getBoundingClientRect().top + window.pageYOffset;
          if (sectionTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }

      // If scrolled to top, set hero as active
      if (window.scrollY < 100) {
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 70; // Navigation bar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      // Use requestAnimationFrame for smoother scrolling
      requestAnimationFrame(() => {
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: "smooth",
        });
      });
    } else {
      // Fallback: try scrolling after a short delay in case DOM isn't ready
      setTimeout(() => {
        const retryElement = document.getElementById(sectionId);
        if (retryElement) {
          const navHeight = 70;
          const elementPosition = retryElement.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - navHeight;
          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: "smooth",
          });
        }
      }, 100);
    }
  };

  return (
    <nav
      className={`navigation ${isScrolled ? "navigation--scrolled" : ""}`}
      aria-label="Main navigation"
    >
      <div className="navigation__container">
        <a
          href="#"
          className="navigation__logo"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {profile.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </a>
        <ul className="navigation__links">
          <li>
            <a
              href="#hero"
              className={`navigation__link ${activeSection === "hero" || !activeSection ? "navigation__link--active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("hero");
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#open-source-research"
              className={`navigation__link ${activeSection === "open-source-research" ? "navigation__link--active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("open-source-research");
              }}
            >
              Open Source & Research
            </a>
          </li>
          <li>
            <a
              href="#ml-data-science"
              className={`navigation__link ${activeSection === "ml-data-science" ? "navigation__link--active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("ml-data-science");
              }}
            >
              ML & Data Science
            </a>
          </li>
          <li>
            <a
              href="#programming-web"
              className={`navigation__link ${activeSection === "programming-web" ? "navigation__link--active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("programming-web");
              }}
            >
              Programming & Web
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
