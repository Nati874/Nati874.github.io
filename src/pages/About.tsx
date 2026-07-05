import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { memo } from "react";

const About = memo(function About() {
  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="py-24 px-4 relative">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Profile Image with tech frame */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-80 h-80">
              {/* Rotating background blueprint circle */}
              <div className="absolute inset-0 border border-dashed border-accent/30 rounded-full -m-4 pointer-events-none animate-[spin_80s_linear_infinite]" />
              
              {/* Tech corner framing */}
              <div className="relative w-full h-full bg-card border border-accent/20 p-3 shadow-xl">
                <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-accent" />
                <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-accent" />
                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-accent" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-accent" />
                
                {/* Image */}
                <div className="w-full h-full overflow-hidden border border-accent/10">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663499833886/XegQN4CvG2gYYwRAba9azA/hero-about-DVdKMZVf5wb22UpbeqgGFP.webp"
                    alt="Nathnael's creative workspace"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right - Tech Profile Details */}
          <div className="space-y-8">
            <div className="space-y-4 text-center lg:text-left">
              <p className="text-accent font-mono text-sm uppercase tracking-widest">// 01. PROFILE</p>
              <h2 className="text-5xl lg:text-6xl font-display font-bold text-foreground">
                About Me
              </h2>
              <div className="w-20 h-1 bg-accent rounded-full mx-auto lg:mx-0"></div>
            </div>

            <p className="text-lg text-foreground/70 leading-relaxed">
              I'm a passionate software engineer and full-stack developer with a unique blend of technical expertise
              and creative digital design. With experience building scalable web architectures, managing robust databases, 
              and crafting digital interfaces, I bridge the gap between engineering efficiency and polished design.
            </p>

            <p className="text-lg text-foreground/70 leading-relaxed">
              My methodology balances structural problem-solving with high-quality visual representation. 
              Whether optimizing API performance, automating workflows, or engineering animations, 
              I deliver clean, well-documented code designed to run smoothly and scale.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-display font-bold text-foreground mb-4 text-center lg:text-left">Core Stack</h3>
              <div className="grid grid-cols-2 gap-3">
                {["React", "WordPress", "UI/UX Design", "3D Modeling", "Python", "Node.js", "Figma", "Blender"].map(
                  (skill) => (
                    <div
                      key={skill}
                      className="px-4 py-2 bg-accent/5 border border-accent/20 hover:border-accent hover:bg-accent/10 transition-all font-mono text-sm text-foreground flex items-center gap-1.5"
                    >
                      <span className="text-accent font-semibold">&gt;</span> {skill}
                    </div>
                  )
                )}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-6 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
              >
                Download Resume
              </Button>
              <a href="#contact" onClick={handleScrollToContact}>
                <Button
                  variant="outline"
                  size="lg"
                  className="font-semibold px-8 py-6 transition-all duration-300 hover:shadow-lg hover:bg-accent/5 hover:border-accent"
                >
                  Get in Touch
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-6 justify-center lg:justify-start">
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
  );
});

export default About;
