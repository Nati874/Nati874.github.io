import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { NavBar } from "@/components/NavBar";
import { TypingText, RotatingWords } from "@/components/HeroAnimations";
import { PageNavigation } from "@/components/PageNavigation";
import profileImg from "../../pictures/profile.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5 overflow-hidden">
      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4">
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
                  words={["Creative", "Innovative", "Passionate", "Designer", "Developer", "Visionary"]}
                  interval={3000}
                />
              </div>

              <p className="text-lg text-foreground/70 leading-relaxed max-w-md">
                Full-stack Software Engineer and Graphic Designer. I create elegant digital experiences
                that blend technical excellence with thoughtful design. Passionate about solving complex problems
                and bringing creative visions to life.
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

            {/* Right Image - Irregular Blob */}
            <div className="relative h-96 lg:h-full min-h-96 flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <filter id="blob-shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="8" stdDeviation="12" floodOpacity="0.2" />
                  </filter>
                </defs>
                <path
                  d="M 350,80 C 420,60 480,120 470,200 C 460,260 430,310 380,340 C 340,365 290,380 250,385 C 200,390 150,380 120,340 C 85,295 80,240 95,180 C 110,120 160,70 220,60 C 280,50 320,70 350,80 Z"
                  fill="currentColor"
                  className="text-accent"
                  filter="url(#blob-shadow)"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl">
                  <img
                    src={profileImg}
                    alt="Nathnael Ayizohibel - Software Engineer and Designer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center pb-8 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-accent rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Page Navigation */}
      <PageNavigation nextPage={{ href: "/about", label: "About" }} />
    </div>
  );
}
