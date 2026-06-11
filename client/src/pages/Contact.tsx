import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import { NavBar } from "@/components/NavBar";

import { PageNavigation } from "@/components/PageNavigation";

export default function Contact() {
  const [formData, setFormData] = useState({ email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      {/* Navigation */}
      <NavBar />

      {/* Content */}
      <div className="pt-32 pb-20 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left - Contact Info */}
            <div className="space-y-12">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-display font-bold text-foreground">
                  Want to Talk?
                </h1>
                <div className="w-24 h-1 bg-accent rounded-full mx-auto"></div>
              </div>

              <p className="text-lg text-foreground/70 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, feel free to get in touch!
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-foreground/60 font-body text-sm uppercase tracking-wide">Phone</p>
                  <a
                    href="tel:+251953256171"
                    className="text-2xl font-display font-bold text-accent hover:text-accent/80 transition"
                  >
                    +251 953 256 171
                  </a>
                </div>

                <div className="space-y-2">
                  <p className="text-foreground/60 font-body text-sm uppercase tracking-wide">Email</p>
                  <a
                    href="mailto:nathnael.a.adamu@gmail.com"
                    className="text-2xl font-display font-bold text-accent hover:text-accent/80 transition break-all"
                  >
                    nathnael.a.adamu@gmail.com
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <p className="text-foreground/60 font-body text-sm uppercase tracking-wide">Find me on</p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Nati874"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-full border-2 border-foreground/20 hover:border-accent hover:bg-accent/10 transition-all duration-300 group"
                  >
                    <Github className="w-6 h-6 text-foreground group-hover:text-accent transition" />
                  </a>
                  <a
                    href="https://linkedin.com/in/nathnael-ayizohibel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-full border-2 border-foreground/20 hover:border-accent hover:bg-accent/10 transition-all duration-300 group"
                  >
                    <Linkedin className="w-6 h-6 text-foreground group-hover:text-accent transition" />
                  </a>
                  <a
                    href="mailto:nathnael.a.adamu@gmail.com"
                    className="p-4 rounded-full border-2 border-foreground/20 hover:border-accent hover:bg-accent/10 transition-all duration-300 group"
                  >
                    <Mail className="w-6 h-6 text-foreground group-hover:text-accent transition" />
                  </a>
                  <a
                    href="https://wa.me/251953256171"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-full border-2 border-foreground/20 hover:border-accent hover:bg-accent/10 transition-all duration-300 group"
                  >
                    <MessageCircle className="w-6 h-6 text-foreground group-hover:text-accent transition" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-foreground font-body font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 font-body"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Subject Field */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-foreground font-body font-semibold">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 font-body"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-foreground font-body font-semibold">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 font-body resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6 transition-all duration-300 hover:shadow-lg active:scale-95"
                >
                  {submitted ? "Message Sent! ✓" : "Send Email"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider at Bottom */}
      <div className="relative mt-20 h-32 bg-accent">
        <svg
          className="absolute top-0 w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
            fill="currentColor"
            className="text-background"
          ></path>
        </svg>
      </div>
      {/* Page Navigation */}
      <PageNavigation
        previousPage={{ href: "/experience", label: "Experience" }}
      />
    </div>
  );
}
