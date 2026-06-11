import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { NavBar } from "@/components/NavBar";
import { PageNavigation } from "@/components/PageNavigation";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      {/* Navigation */}
      <NavBar />

      {/* Content */}
      <div className="pt-20 pb-20 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left - Profile Image */}
            <div className="flex justify-center lg:justify-start pt-4">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-full blur-3xl"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-accent/10 to-accent/5 rounded-full border-4 border-accent/20 overflow-hidden">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663499833886/XegQN4CvG2gYYwRAba9azA/hero-about-DVdKMZVf5wb22UpbeqgGFP.webp"
                    alt="Nathnael's creative workspace"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-display font-bold text-foreground text-center">
                  About Me
                </h1>
                <div className="w-24 h-1 bg-accent rounded-full mx-auto"></div>
              </div>

              <p className="text-lg text-foreground/70 leading-relaxed">
                I'm a passionate software engineer and graphic designer with a unique blend of technical expertise
                and creative vision. With experience in full-stack development, UI/UX design, and digital art,
                I bridge the gap between functionality and aesthetics.
              </p>

              <p className="text-lg text-foreground/70 leading-relaxed">
                My journey combines rigorous problem-solving with artistic expression. Whether building scalable
                applications or crafting compelling visual narratives, I bring meticulous attention to detail
                and a commitment to excellence in every project.
              </p>

              <div className="pt-4">
                <h3 className="text-xl font-display font-bold text-foreground mb-4">Core Skills</h3>
                <div className="grid grid-cols-2 gap-3">
                  {["React", "WordPress", "UI/UX Design", "3D Modeling", "Python", "Node.js", "Figma", "Blender"].map(
                    (skill) => (
                      <div
                        key={skill}
                        className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-lg text-foreground font-body font-medium hover:bg-accent/20 transition"
                      >
                        {skill}
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 pt-8">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
                >
                  Download Resume
                </Button>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="font-semibold px-8 py-6 transition-all duration-300 hover:shadow-lg"
                  >
                    Get in Touch
                  </Button>
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex gap-6 pt-8">
                <a
                  href="https://github.com/Nati874"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border-2 border-foreground/20 hover:border-accent hover:bg-accent/10 transition-all duration-300 group"
                >
                  <Github className="w-6 h-6 text-foreground group-hover:text-accent transition" />
                </a>
                <a
                  href="https://linkedin.com/in/nathnael-ayizohibel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border-2 border-foreground/20 hover:border-accent hover:bg-accent/10 transition-all duration-300 group"
                >
                  <Linkedin className="w-6 h-6 text-foreground group-hover:text-accent transition" />
                </a>
                <a
                  href="mailto:nathnael.a.adamu@gmail.com"
                  className="p-3 rounded-full border-2 border-foreground/20 hover:border-accent hover:bg-accent/10 transition-all duration-300 group"
                >
                  <Mail className="w-6 h-6 text-foreground group-hover:text-accent transition" />
                </a>
                <a
                  href="https://wa.me/251953256171"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border-2 border-foreground/20 hover:border-accent hover:bg-accent/10 transition-all duration-300 group"
                >
                  <MessageCircle className="w-6 h-6 text-foreground group-hover:text-accent transition" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page Navigation */}
      <PageNavigation
        previousPage={{ href: "/", label: "Home" }}
        nextPage={{ href: "/projects", label: "Projects" }}
      />
    </div>
  );
}
