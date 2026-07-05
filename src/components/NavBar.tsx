import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { HomeIcon, UserIcon, ProjectIcon, BriefcaseIcon, PhoneIcon } from "@/components/NavIcons";

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkClass = (path: string) => {
    return `flex items-center gap-2 transition ${
      location === path
        ? "text-accent font-medium hover:text-accent/80"
        : "text-foreground hover:text-accent"
    }`;
  };

  return (
    <nav
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-md border-b border-border/50"
          : "bg-background/40 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="container flex items-center justify-center h-20">
        <Link href="/" className="absolute left-4 lg:left-8 text-2xl font-display font-bold text-foreground">
          NA
        </Link>
        <div className="flex gap-12 items-center">
          <Link href="/" className={getLinkClass("/")}>
            <HomeIcon /> Home
          </Link>
          <Link href="/about" className={getLinkClass("/about")}>
            <UserIcon /> About
          </Link>
          <Link href="/projects" className={getLinkClass("/projects")}>
            <ProjectIcon /> Projects
          </Link>
          <Link href="/experience" className={getLinkClass("/experience")}>
            <BriefcaseIcon /> Experience
          </Link>
          <Link href="/contact" className={getLinkClass("/contact")}>
            <PhoneIcon /> Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};
