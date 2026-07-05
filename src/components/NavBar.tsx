import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { HomeIcon, UserIcon, ProjectIcon, BriefcaseIcon, PhoneIcon } from "@/components/NavIcons";

export const NavBar = ({
  activeSection,
  onSectionChange,
}: {
  activeSection?: string;
  onSectionChange?: (section: string) => void;
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentActive = activeSection || (location === "/" ? "home" : location.substring(1));

  const getLinkClass = (section: string) => {
    return `flex items-center gap-2 transition cursor-pointer font-mono text-xs uppercase tracking-wider ${
      currentActive === section
        ? "text-accent font-semibold hover:text-accent/80"
        : "text-foreground hover:text-accent"
    }`;
  };

  const handleNavClick = (e: React.MouseEvent, section: string) => {
    e.preventDefault();
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", section === "home" ? "/" : `/${section}`);
      onSectionChange?.(section);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-md border-b border-accent/10"
          : "bg-background/20 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20 px-4 max-w-7xl mx-auto">
        <a
          href="/"
          onClick={(e) => handleNavClick(e, "home")}
          className="text-2xl font-display font-bold text-foreground tracking-widest hover:text-accent transition select-none"
        >
          NA
        </a>
        <div className="flex gap-8 lg:gap-12 items-center">
          <a href="/" onClick={(e) => handleNavClick(e, "home")} className={getLinkClass("home")}>
            <HomeIcon /> Home
          </a>
          <a href="/about" onClick={(e) => handleNavClick(e, "about")} className={getLinkClass("about")}>
            <UserIcon /> About
          </a>
          <a href="/projects" onClick={(e) => handleNavClick(e, "projects")} className={getLinkClass("projects")}>
            <ProjectIcon /> Projects
          </a>
          <a href="/experience" onClick={(e) => handleNavClick(e, "experience")} className={getLinkClass("experience")}>
            <BriefcaseIcon /> Experience
          </a>
          <a href="/contact" onClick={(e) => handleNavClick(e, "contact")} className={getLinkClass("contact")}>
            <PhoneIcon /> Contact
          </a>
        </div>
      </div>
    </nav>
  );
};
