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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      {/* Navigation */}
      <NavBar />

      {/* Content */}
      <div className="pt-32 pb-20 px-4">
        <div className="container max-w-7xl mx-auto">
          {/* Header */}
          <div className="space-y-8 mb-16">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-display font-bold text-foreground text-center">
                Experience
              </h1>
              <div className="w-24 h-1 bg-accent rounded-full mx-auto"></div>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-3">
              {(["education", "skills", "experiences"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 capitalize ${
                    activeTab === tab
                      ? "bg-accent text-accent-foreground shadow-lg"
                      : "bg-accent/10 text-foreground border border-accent/30 hover:border-accent hover:bg-accent/20"
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
                className="ml-auto flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Education Tab */}
          {activeTab === "education" && (
            <div className="space-y-6">
           {education.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-card border border-border p-6 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="space-y-2">
                    <h3 className="text-2xl font-display font-bold text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="text-accent font-semibold">{edu.school}</p>
                    <p className="text-foreground/70 font-body">{edu.field}</p>
                    <p className="text-foreground/60 font-body text-sm">{edu.period}</p>
                    {edu.grade && (
                      <p className="text-foreground/70 font-body text-sm pt-2">
                        <span className="font-semibold text-accent">Grade:</span> {edu.grade}
                      </p>
                    )}
                    {edu.examScore && (
                      <p className="text-foreground/70 font-body text-sm">
                        <span className="font-semibold text-accent">Exam Score:</span> {edu.examScore}
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
                      <h2 className="text-2xl font-display font-bold text-foreground">
                        {category}
                      </h2>
                      <div className="space-y-4">
                        {categorySkills.map((skill) => (
                          <div key={skill.name} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="font-body font-semibold text-foreground">
                                {skill.name}
                              </span>
                              <span className="text-accent font-bold">
                                {skill.percentage}%
                              </span>
                            </div>
                            <div className="w-full h-3 bg-accent/10 overflow-hidden border border-accent/20 rounded-full">
                              <div
                                className="h-full bg-gradient-to-r from-orange-500 to-yellow-400 transition-all duration-500 rounded-full"
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
                      <h2 className="text-2xl font-display font-bold text-foreground">
                        {category}
                      </h2>
                      <div className="space-y-4">
                        {categorySkills.map((skill) => (
                          <div key={skill.name} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="font-body font-semibold text-foreground">
                                {skill.name}
                              </span>
                              <span className="text-accent font-bold">
                                {skill.percentage}%
                              </span>
                            </div>
                            <div className="w-full h-3 bg-accent/10 overflow-hidden border border-accent/20 rounded-full">
                              <div
                                className="h-full bg-gradient-to-r from-orange-500 to-yellow-400 transition-all duration-500 rounded-full"
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
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="bg-card border border-border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                >
                  {/* Header */}
                  <button
                    onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                    className="w-full p-6 flex items-start justify-between hover:bg-accent/5 transition-colors duration-300"
                  >
                    <div className="text-left space-y-2">
                      <h3 className="text-2xl font-display font-bold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-accent font-semibold">{exp.company}</p>
                      <p className="text-foreground/60 font-body text-sm">{exp.period}</p>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-accent transition-transform duration-300 flex-shrink-0 ${
                        expandedId === exp.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Expanded Content */}
                  {expandedId === exp.id && (
                    <div className="px-6 pb-6 border-t border-border space-y-4 animate-in fade-in duration-300">
                      <p className="text-foreground/70 font-body">{exp.description}</p>
                      <ul className="space-y-2">
                        {exp.details.map((detail, idx) => (
                          <li key={idx} className="flex gap-3 text-foreground/70 font-body">
                            <span className="text-accent font-bold flex-shrink-0">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}

              {/* Honors Section */}
              <div className="mt-12">
                <h2 className="text-3xl font-display font-bold text-foreground mb-8">Honors & Awards</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {honors.map((honor) => (
                    <div
                      key={honor.id}
                      className="bg-card border border-border rounded-xl p-6 space-y-3 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="h-16 bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg flex items-center justify-center">
                        <span className="text-3xl">🏆</span>
                      </div>
                      <h4 className="text-lg font-display font-bold text-foreground">
                        {honor.title}
                      </h4>
                      <p className="text-accent font-semibold text-sm">{honor.organization}</p>
                      <p className="text-foreground/60 font-body text-sm">{honor.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Page Navigation */}
      <PageNavigation
        previousPage={{ href: "/projects", label: "Projects" }}
        nextPage={{ href: "/contact", label: "Contact" }}
      />
    </div>
  );
}
