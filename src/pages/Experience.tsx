import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronDown, Download } from "lucide-react";
import { useState } from "react";
import { NavBar } from "@/components/NavBar";

import { PageNavigation } from "@/components/PageNavigation";

interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  details: string[];
}

interface Skill {
  name: string;
  percentage: number;
  category: "Development" | "Design" | "Other" | "Languages";
}

interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  period: string;
  grade?: string;
  examScore?: string;
}

interface Honor {
  id: string;
  title: string;
  date: string;
  organization: string;
}

const experiences: Experience[] = [];

const skills: Skill[] = [
  // Development
  { name: "Python", percentage: 75, category: "Development" },
  { name: "HTML/CSS/JS", percentage: 90, category: "Development" },
  { name: "React", percentage: 60, category: "Development" },
  { name: "FastAPI", percentage: 60, category: "Development" },
  { name: "Java", percentage: 50, category: "Development" },
  { name: "C#", percentage: 50, category: "Development" },
  { name: "SQL", percentage: 60, category: "Development" },
  // Design
  { name: "WordPress", percentage: 70, category: "Design" },
  { name: "Figma", percentage: 80, category: "Design" },
  { name: "Blender", percentage: 75, category: "Design" },
  // Other
  { name: "Research", percentage: 50, category: "Other" },
  // Languages
  { name: "Amharic", percentage: 90, category: "Languages" },
  { name: "English", percentage: 80, category: "Languages" },
];

const education: Education[] = [
  {
    id: "1",
    school: "Shaggar Institute of Technology",
    degree: "Bachelor of Science",
    field: "Information Technology and AI",
    period: "September 2025 - 2029"
  },
  {
    id: "2",
    school: "Bahir Dar University",
    degree: "High School / STEM Focus",
    field: "Natural Science",
    period: "September 2021 - August 2025",
    grade: "91/100 (Cumulative GPA)",
    examScore: "557/600 (National Ethiopian Secondary School Leaving Examination)"
  }
];

const honors: Honor[] = [
  { id: "1", title: "Math Camp Facilitator", date: "2022", organization: "Math Camp" },
  { id: "2", title: "INSA Summer Camp Participant", date: "2022", organization: "INSA" },
  { id: "3", title: "Bahir Dar University Electronics Workshop", date: "2023", organization: "BDU" },
  { id: "4", title: "HabeshaSTEM Graphic Designing Intern", date: "2023", organization: "HabeshaSTEM" },
  { id: "5", title: "National Science Fair Participant", date: "2023", organization: "NSF" },
  { id: "6", title: "STEMPower Mentorship Program Winner", date: "2024", organization: "STEMPower" },
  { id: "7", title: "GFSSM International Winner", date: "2024", organization: "GFSSM" },
  { id: "8", title: "Ethiopian Math Olympiad Finalist", date: "2024", organization: "EMO" },
  { id: "9", title: "Software Developer & Back-end Database Manager", date: "2024", organization: "Professional" },
  { id: "10", title: "BDU STEM Center Science Fair Winner", date: "2025", organization: "BDU" }
];

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"education" | "skills" | "experiences">("education");

  return (
    <div className="py-24 px-4 relative">
      <div className="container max-w-7xl mx-auto">
        {/* Header */}
        <div className="space-y-8 mb-16">
          <div className="space-y-4 text-center">
            <p className="text-accent font-mono text-sm uppercase tracking-widest">// 03. TIMELINE & SKILLS</p>
            <h2 className="text-5xl lg:text-6xl font-display font-bold text-foreground">
              Experience
            </h2>
            <div className="w-20 h-1 bg-accent rounded-full mx-auto"></div>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 items-center">
            {(["education", "skills", "experiences"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 font-mono text-xs border transition-all duration-300 rounded-none uppercase tracking-wider ${
                  activeTab === tab
                    ? "bg-accent text-accent-foreground border-accent font-bold"
                    : "bg-accent/5 text-foreground border-accent/20 hover:border-accent hover:bg-accent/10"
                }`}
              >
                {tab === "education" && "Education"}
                {tab === "skills" && "Skills"}
                {tab === "experiences" && "Experiences"}
              </button>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="ml-auto flex items-center gap-2 rounded-none border-accent/20 hover:border-accent font-mono text-xs tracking-wider"
            >
              <Download className="w-3.5 h-3.5 text-accent" />
              DOWNLOAD_CV
            </Button>
          </div>
        </div>

        {/* Education Tab */}
        {activeTab === "education" && (
          <div className="space-y-6">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="group bg-card border border-accent/20 rounded-none p-6 shadow-md hover:border-accent/50 transition-all duration-300 relative"
              >
                {/* Tech corners */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-accent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-2">
                  <h3 className="text-2xl font-display font-bold text-foreground">
                    {edu.degree}
                  </h3>
                  <p className="text-accent font-semibold font-mono text-sm">{edu.school}</p>
                  <p className="text-foreground/70 font-body text-sm">{edu.field}</p>
                  <p className="text-foreground/50 font-mono text-xs tracking-wider">// PERIOD: {edu.period}</p>
                  {edu.grade && (
                    <p className="text-foreground/70 font-body text-xs pt-2">
                      <span className="font-mono text-accent font-semibold">[GRADE]:</span> {edu.grade}
                    </p>
                  )}
                  {edu.examScore && (
                    <p className="text-foreground/70 font-body text-xs">
                      <span className="font-mono text-accent font-semibold">[EXAM_SCORE]:</span> {edu.examScore}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Skills Tab */}
        {activeTab === "skills" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-12">
              {["Development", "Languages"].map((category) => {
                const categorySkills = skills.filter((s) => s.category === category);
                if (categorySkills.length === 0) return null;
                return (
                  <div key={category} className="space-y-6">
                    <h2 className="text-2xl font-display font-bold text-foreground font-mono">
                      // {category.toUpperCase()}
                    </h2>
                    <div className="space-y-5">
                      {categorySkills.map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex items-center justify-between font-mono text-xs">
                            <span className="font-semibold text-foreground">
                              {skill.name}
                            </span>
                            <span className="text-accent font-bold">
                              {skill.percentage}%
                            </span>
                          </div>
                          <div className="w-full h-3 bg-accent/5 overflow-hidden border border-accent/20 rounded-none relative p-[1px]">
                            <div
                              className="h-full bg-accent transition-all duration-500 rounded-none"
                              style={{ width: `${skill.percentage}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              {["Design", "Other"].map((category) => {
                const categorySkills = skills.filter((s) => s.category === category);
                if (categorySkills.length === 0) return null;
                return (
                  <div key={category} className="space-y-6">
                    <h2 className="text-2xl font-display font-bold text-foreground font-mono">
                      // {category.toUpperCase()}
                    </h2>
                    <div className="space-y-5">
                      {categorySkills.map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex items-center justify-between font-mono text-xs">
                            <span className="font-semibold text-foreground">
                              {skill.name}
                            </span>
                            <span className="text-accent font-bold">
                              {skill.percentage}%
                            </span>
                          </div>
                          <div className="w-full h-3 bg-accent/5 overflow-hidden border border-accent/20 rounded-none relative p-[1px]">
                            <div
                              className="h-full bg-accent transition-all duration-500 rounded-none"
                              style={{ width: `${skill.percentage}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Experiences Tab */}
        {activeTab === "experiences" && (
          <div className="space-y-6">
            {experiences.length === 0 ? (
              <div className="border border-dashed border-accent/20 p-8 text-center font-mono text-xs text-foreground/50">
                // NO ADDITIONAL COMMERCIAL EXPERIENCE DATA LOGGED. SEE CORE PROJECTS MODULES.
              </div>
            ) : (
              experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="group bg-card border border-accent/20 rounded-none overflow-hidden shadow-md hover:border-accent/50 transition-all duration-300"
                >
                  <button
                    onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                    className="w-full p-6 flex items-start justify-between hover:bg-accent/5 transition-colors duration-300 relative"
                  >
                    {/* Tech outline corners */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-accent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="text-left space-y-2">
                      <h3 className="text-2xl font-display font-bold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-accent font-semibold font-mono text-sm">{exp.company}</p>
                      <p className="text-foreground/50 font-mono text-xs tracking-wider">// PERIOD: {exp.period}</p>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-accent transition-transform duration-300 flex-shrink-0 mt-1 ${
                        expandedId === exp.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Expanded Content */}
                  {expandedId === exp.id && (
                    <div className="px-6 pb-6 border-t border-accent/10 space-y-4 animate-in fade-in duration-300 font-body text-sm pt-4">
                      <p className="text-foreground/70">{exp.description}</p>
                      <ul className="space-y-2">
                        {exp.details.map((detail, idx) => (
                          <li key={idx} className="flex gap-2.5 text-foreground/70">
                            <span className="text-accent font-mono font-semibold flex-shrink-0">&gt;</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))
            )}

            {/* Honors Section */}
            <div className="mt-16 space-y-8">
              <h3 className="text-3xl font-display font-bold text-foreground font-mono text-center md:text-left">
                // HONORS & ACHIEVEMENTS
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {honors.map((honor) => (
                  <div
                    key={honor.id}
                    className="group bg-card border border-accent/20 rounded-none p-6 space-y-4 shadow-md hover:border-accent/50 hover:-translate-y-1 transition-all duration-300 relative"
                  >
                    {/* Tech corners */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-accent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="h-14 bg-accent/5 rounded-none flex items-center justify-center border border-accent/10">
                      <span className="text-2xl opacity-80 group-hover:scale-110 transition-transform duration-300">🏆</span>
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="text-lg font-display font-bold text-foreground leading-tight">
                        {honor.title}
                      </h4>
                      <p className="text-accent font-semibold font-mono text-xs">{honor.organization}</p>
                      <p className="text-foreground/50 font-mono text-[10px] tracking-wider">// YEAR: {honor.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
