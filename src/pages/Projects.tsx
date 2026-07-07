import { Button } from "@/components/ui/button";
import { ChevronDown, Github, ExternalLink } from "lucide-react";
import { useState } from "react";
import { PageNavigation } from "@/components/PageNavigation";
import { NavBar } from "@/components/NavBar";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  github?: string;
  website?: string;
  gallery?: string[];
}

const projects: Project[] = [
  {
    id: "1",
    title: "Virtual Banking System",
    category: "SWE",
    description: "A comprehensive banking application with user authentication and transaction management.",
    fullDescription: "Built a full-stack banking system with secure authentication, real-time transaction processing, and account management. Features include deposit/withdrawal, balance tracking, and transaction history.",
    technologies: ["C#", "UI/UX", "SQLite3"],
    image: "placeholder",
    github: "https://github.com/Nati874/Virtual-Banking-System-with-C-and-SQLite"
  },
  {
    id: "2",
    title: "Attendance Management System",
    category: "SWE",
    description: "Non-database attendance tracking system with real-time monitoring.",
    fullDescription: "Developed an attendance system that tracks student/employee presence without relying on external databases. Includes reporting, statistics, and export functionality.",
    technologies: ["Java", "Swing"],
    image: "placeholder",
    github: "https://github.com/Nati874/Attendance-System-non-database-version-"
  },
  {
    id: "3",
    title: "Momentum Collision Simulator Website",
    category: "SWE",
    description: "Interactive physics simulation for momentum and collision calculations.",
    fullDescription: "An educational web application that simulates physics concepts of momentum and collisions. Users can adjust parameters and visualize real-time physics calculations.",
    technologies: ["React", "TypeScript", "Physics.js"],
    image: "placeholder",
    github: "https://github.com/Nati874/Momentum-Collision-Simulation"
  },
  {
    id: "4",
    title: "Primitive NLP Chat Bot",
    category: "SWE",
    description: "Natural language processing chatbot with basic AI capabilities.",
    fullDescription: "Developed a chatbot using NLP techniques to understand and respond to user queries. Includes intent recognition and entity extraction.",
    technologies: ["Python", "NLTK"],
    image: "placeholder",
    github: "https://github.com/Nati874/Science-Bot"
  },
  {
    id: "5",
    title: "MIBOT - Telegram Bot",
    category: "SWE",
    description: "Feature-rich Telegram bot with multiple functionalities.",
    fullDescription: "Created a Telegram bot with various features including information retrieval, command processing, and user interaction management.",
    technologies: ["Python", "Telegram API"],
    image: "placeholder",
    github: "https://github.com/Nati874/Telegram-bot-MIBOT-"
  },
  {
    id: "6",
    title: "DNA Replication Animation",
    category: "3D Modeling",
    description: "3D animation of DNA replication process for educational purposes.",
    fullDescription: "Created a detailed 3D animation showing the DNA replication process with accurate molecular representation.",
    technologies: ["Blender"],
    image: "placeholder"
  },
  {
    id: "7",
    title: "2075 Mars Travel Space City Model",
    category: "Space Science",
    description: "Futuristic 3D model of a Mars settlement city.",
    fullDescription: "Designed a comprehensive 3D model of a future Mars colony with habitats, research facilities, and transportation systems.",
    technologies: ["Blender"],
    image: "placeholder"
  },
  {
    id: "8",
    title: "2075 Marse Habitat City Model",
    category: "Space Science",
    description: "Detailed 3D model of Mars habitat structures.",
    fullDescription: "Created detailed architectural models for Mars habitat structures with realistic materials and lighting.",
    technologies: ["Blender", "Research"],
    image: "placeholder"
  },
  {
    id: "9",
    title: "Poster Designs",
    category: "Design/Art",
    description: "Collection of professional poster designs.",
    fullDescription: "A series of creative poster designs for various purposes including events, promotions, and awareness campaigns.",
    technologies: ["Canva", "Graphic Design", "GIMP"],
    image: "placeholder",
    gallery: ["poster1", "poster2", "poster3"]
  },
  {
    id: "10",
    title: "Arts & Illustrations",
    category: "Design/Art",
    description: "Digital art and illustration portfolio.",
    fullDescription: "A collection of digital artworks including character designs, landscapes, and conceptual illustrations.",
    technologies: ["Blender", "Canvas"],
    image: "placeholder",
    gallery: ["art1", "art2", "art3", "art4"]
  },
  {
    id: "11",
    title: "Shoppy.com - Online Marketing Website",
    category: "SWE",
    description: "E-commerce website with marketing features.",
    fullDescription: "Built a full-featured e-commerce platform with product listings, shopping cart, and integrated marketing tools.",
    technologies: ["HTML", "CSS", "JS"],
    image: "placeholder"
  },
  {
    id: "12",
    title: "Math Camp Website",
    category: "SWE",
    description: "Educational website for mathematics camp program.",
    fullDescription: "Developed a website for a mathematics camp with course listings, registration, and resource materials.",
    technologies: ["PHP", "HTML", "CSS", "JS"],
    image: "placeholder",
    github: "https://github.com/Nati874/Math-Camp",
    website: "https://math-camp-kappa.vercel.app/"
  },
  {
    id: "13",
    title: "Smart House System",
    category: "Electronics",
    description: "IoT-based smart home automation system.",
    fullDescription: "Designed and implemented a smart home system with IoT devices for automation and control.",
    technologies: ["Arduino", "Programming"],
    image: "placeholder"
  },
  {
    id: "14",
    title: "Biometric Security System",
    category: "Electronics",
    description: "Biometric authentication and security system.",
    fullDescription: "Developed a biometric security system with fingerprint recognition and access control.",
    technologies: ["Arduino", "Programming"],
    image: "placeholder"
  },
  {
    id: "15",
    title: "Eluda Fuel and EV Station Locator App (In Progress)",
    category: "SWE",
    description: "App for locating fuel and EV charging stations.",
    fullDescription: "Created an application that helps users find nearby fuel stations and EV charging points with real-time availability.",
    technologies: ["Next.js", "Supabase", "FastAPI"],
    image: "placeholder"
  },
  {
    id: "16",
    title: "AI Powered Case Management System",
    category: "SWE",
    description: "AI-driven case management for legal/medical purposes.",
    fullDescription: "Built a system that uses AI to manage and organize cases with intelligent categorization and recommendations.",
    technologies: ["React.js", "UI/UX", "SQLite3"],
    image: "placeholder",
    github: "https://github.com/Nati874/AI_Court_System"
  },
  {
    id: "17",
    title: "Harurael Website",
    category: "SWE",
    description: "A responsive website featuring clean aesthetics and modern design principles.",
    fullDescription: "Developed Harurael, a bespoke web application with a focus on immersive user experience, responsive grid layouts, and clean typographic design.",
    technologies: ["React", "TypeScript", "TailwindCSS"],
    image: "placeholder",
    github: "https://github.com/Nati874/Harurael"
  }
];

import { memo } from "react";

const categories = ["All", "SWE", "Space Science", "Electronics", "3D Modeling", "Design/Art"];

const Projects = memo(function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="py-24 px-4 relative">
      <div className="container max-w-7xl mx-auto">
        {/* Header */}
        <div className="space-y-8 mb-16 text-center">
          <div className="space-y-4">
            <p className="text-accent font-mono text-sm uppercase tracking-widest">// 02. PORTFOLIO</p>
            <h2 className="text-5xl lg:text-6xl font-display font-bold text-foreground">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-accent rounded-full mx-auto"></div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 font-mono text-xs border transition-all duration-300 rounded-none uppercase tracking-wider ${
                  selectedCategory === cat
                    ? "bg-accent text-accent-foreground border-accent font-bold"
                    : "bg-accent/5 text-foreground border-accent/20 hover:border-accent hover:bg-accent/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-card border border-accent/20 rounded-none overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:border-accent/50 flex flex-col relative"
            >
              {/* Tech outline corners */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-accent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Blueprint Image Placeholder */}
              <div className="h-44 bg-accent/5 flex items-center justify-center overflow-hidden relative border-b border-accent/10">
                {/* Subtle visual grid */}
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 opacity-10">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div key={i} className="border-[0.5px] border-accent" />
                  ))}
                </div>
                <div className="font-mono text-xs text-accent/40 group-hover:text-accent/60 group-hover:scale-105 transition-all select-none">
                  [ MODULE // {project.category} ]
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="space-y-1">
                    <h3 className="text-xl font-display font-bold text-foreground group-hover:text-accent transition">
                      {project.title}
                    </h3>
                    <p className="text-xs text-accent/60 font-mono tracking-wider">CATEGORY: {project.category}</p>
                  </div>

                  <p className="text-foreground/70 font-body text-sm line-clamp-3 leading-relaxed">{project.description}</p>
                </div>

                <div className="space-y-4 pt-2">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 border border-accent/30 bg-accent/5 text-foreground"
                      >
                        [{tech}]
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-0.5 border border-accent/20 bg-accent/5 text-accent font-bold">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Expand Button */}
                  <button
                    onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                    className="w-full flex items-center justify-between px-4 py-2 border border-accent/20 hover:border-accent bg-accent/5 hover:bg-accent/15 text-foreground transition-all duration-300 font-mono text-xs tracking-wider"
                  >
                    // DETAILS
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 text-accent ${
                        expandedId === project.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Expanded Content */}
                  {expandedId === project.id && (
                    <div className="pt-4 border-t border-accent/10 space-y-4 animate-in fade-in duration-300">
                      <p className="text-foreground/70 font-body text-xs leading-relaxed">
                        {project.fullDescription}
                      </p>

                      {/* All Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 border border-accent/30 bg-accent/5 text-foreground"
                          >
                            [{tech}]
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-1 font-mono text-xs">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 font-semibold"
                          >
                            <Github className="w-3.5 h-3.5" />
                            GIT_REPO
                          </a>
                        )}
                        {project.website && (
                          <a
                            href={project.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 border border-accent/30 bg-accent/5 text-foreground hover:bg-accent/15 transition-all duration-300 font-semibold"
                          >
                            <ExternalLink className="w-3.5 h-3.5 text-accent" />
                            LIVE_DEMO
                          </a>
                        )}
                        {project.gallery && (
                          <button className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 border border-accent/30 bg-accent/5 text-foreground hover:bg-accent/15 transition-all duration-300 font-semibold">
                            <ExternalLink className="w-3.5 h-3.5 text-accent" />
                            IMAGES
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Projects;
