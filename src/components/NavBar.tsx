import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { HomeIcon, UserIcon, ProjectIcon, BriefcaseIcon, PhoneIcon } from "@/components/NavIcons";

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [location] = useLocation();

  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Only run intersection observer on the root path
    if (window.location.pathname !== "/") return;

    const sections = ["home", "about", "projects", "experience", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-45% 0px -45% 0px", // Trigger when the section center matches the viewport center
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      if (isScrollingRef.current) return;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSection(id);
          const targetHash = id === "home" ? "" : `#${id}`;
          if (window.location.hash !== targetHash) {
            window.history.replaceState(null, "", id === "home" ? "/" : `/#${id}`);
          }
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
      if (scrollTimeoutRef.current !== null) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [location]); // Re-run if path change occurs (e.g. landing back on "/")

  const getLinkClass = (section: string) => {
    return `flex items-center gap-2 transition cursor-pointer font-mono text-xs uppercase tracking-wider ${
      activeSection === section
        ? "text-accent font-semibold hover:text-accent/80"
        : "text-foreground hover:text-accent"
    }`;
  };

  const handleNavClick = (e: React.MouseEvent, section: string) => {
    if (window.location.pathname !== "/") {
      // If not on the homepage, perform a normal location redirect
      window.location.href = section === "home" ? "/" : `/#${section}`;
      return;
    }

    e.preventDefault();
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", section === "home" ? "/" : `/#${section}`);
      
      setActiveSection(section);
      isScrollingRef.current = true;
      if (scrollTimeoutRef.current !== null) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = window.setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md border-b border-accent/20"
          : "bg-background/70 backdrop-blur-sm border-b border-transparent"
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
          <a href="/#about" onClick={(e) => handleNavClick(e, "about")} className={getLinkClass("about")}>
            <UserIcon /> About
          </a>
          <a href="/#projects" onClick={(e) => handleNavClick(e, "projects")} className={getLinkClass("projects")}>
            <ProjectIcon /> Projects
          </a>
          <a href="/#experience" onClick={(e) => handleNavClick(e, "experience")} className={getLinkClass("experience")}>
            <BriefcaseIcon /> Experience
          </a>
          <a href="/#contact" onClick={(e) => handleNavClick(e, "contact")} className={getLinkClass("contact")}>
            <PhoneIcon /> Contact
          </a>
        </div>
      </div>
    </nav>
  );
};
