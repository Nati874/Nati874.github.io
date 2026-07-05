import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { NavBar } from "@/components/NavBar";
import { TypingText, RotatingWords } from "@/components/HeroAnimations";
import { PageNavigation } from "@/components/PageNavigation";
import { ParticleBackground } from "@/components/ParticleBackground";
import profileImg from "../../pictures/profile.jpg";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-background via-background to-accent/5 overflow-hidden">
      {/* Dynamic Particle Background */}
      <ParticleBackground />

      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4 z-10">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-2">
                <p className="text-accent font-display text-xl font-semibold">
                  <TypingText text="Hi I'm" speed={120} />
                </p>
                <h1 className="text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight min-h-20">
                  <TypingText text="Nathnael Ayizohibel" speed={120} />
                </h1>
                <RotatingWords
                  words={["Full Stack Developer", "Software Engineer", "Systems Architect", "Problem Solver", "UI/UX Developer"]}
                  interval={3000}
                />
              </div>

              <p className="text-lg text-foreground/70 leading-relaxed max-w-md">
                Full-stack software engineer specializing in scalable web applications, robust backends, 
                and clean user interfaces. I bridge technical engineering with design patterns 
                to build high-performance systems and seamless digital architectures.
              </p>

              {/* Social Links */}
              <div className="flex gap-6 pt-4">
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

              {/* CTA Button */}
              <Link href="/projects">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
                >
                  Get Started →
                </Button>
              </Link>
            </div>

            {/* Right Image - Technical Grid/Blueprint & Circular Profile */}
            <div className="relative h-96 lg:h-full min-h-96 flex items-center justify-center">
              {/* Rotating Blueprint SVG Grid */}
              <svg className="absolute inset-0 w-full h-full text-accent opacity-30 animate-[spin_120s_linear_infinite]" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet">
                <circle cx="250" cy="250" r="220" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="12 12" />
                <circle cx="250" cy="250" r="180" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="40 10 10 10" />
                <circle cx="250" cy="250" r="140" fill="none" stroke="currentColor" strokeWidth="1" />
                <circle cx="250" cy="250" r="80" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="6 4" />
                
                {/* Crosshairs */}
                <line x1="20" y1="250" x2="480" y2="250" stroke="currentColor" strokeWidth="0.75" strokeDasharray="8 8" />
                <line x1="250" y1="20" x2="250" y2="480" stroke="currentColor" strokeWidth="0.75" strokeDasharray="8 8" />
                
                {/* Digital Corner Brackets */}
                <path d="M 60,100 L 60,60 L 100,60" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M 440,100 L 440,60 L 400,60" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M 60,400 L 60,440 L 100,440" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M 440,400 L 440,440 L 400,440" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>

              {/* Orbiting Ring Visuals */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                {/* Rotating Tech Rings */}
                <div className="absolute w-80 h-80 lg:w-[360px] lg:h-[360px] rounded-full border-2 border-accent/20 border-t-accent/80 animate-[spin_12s_linear_infinite]" />
                <div className="absolute w-72 h-72 lg:w-[320px] lg:h-[320px] rounded-full border border-dashed border-accent/30 animate-[spin_20s_reverse_linear_infinite]" />

                {/* Profile Image (static) */}
                <div className="relative w-60 h-60 lg:w-68 lg:h-68 rounded-full overflow-hidden border-4 border-background shadow-2xl z-10 transition-transform duration-500 hover:scale-105">
                  <img
                    src={profileImg}
                    alt="Nathnael Ayizohibel - Software Engineer and Designer"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center pb-8 animate-bounce z-10 relative">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-accent rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Page Navigation */}
      <PageNavigation nextPage={{ href: "/about", label: "About" }} />
    </div>
  );
}
