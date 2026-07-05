import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import { NavBar } from "@/components/NavBar";

import { PageNavigation } from "@/components/PageNavigation";

import { memo } from "react";

const Contact = memo(function Contact() {
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
    <div className="py-24 px-4 relative">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - Contact Info */}
          <div className="space-y-12">
            <div className="space-y-4 text-center lg:text-left">
              <p className="text-accent font-mono text-sm uppercase tracking-widest">// 04. CONNECTION</p>
              <h2 className="text-5xl lg:text-6xl font-display font-bold text-foreground">
                Get In Touch
              </h2>
              <div className="w-20 h-1 bg-accent rounded-full mx-auto lg:mx-0"></div>
            </div>

            <p className="text-lg text-foreground/70 leading-relaxed text-center lg:text-left">
              I'm always interested in hearing about new projects, technical collaborations, and full-stack opportunities. 
              Whether you have a complex system to build or just want to discuss architectures, drop me a message.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 text-center lg:text-left font-mono">
              <div className="space-y-2">
                <p className="text-foreground/40 text-xs uppercase tracking-widest">// SYSTEM_TELEPHONE</p>
                <a
                  href="tel:+251953256171"
                  className="text-2xl font-display font-bold text-accent hover:text-accent/80 transition"
                >
                  +251 953 256 171
                </a>
              </div>

              <div className="space-y-2">
                <p className="text-foreground/40 text-xs uppercase tracking-widest">// SYSTEM_EMAIL</p>
                <a
                  href="mailto:nathnael.a.adamu@gmail.com"
                  className="text-2xl font-display font-bold text-accent hover:text-accent/80 transition break-all"
                >
                  nathnael.a.adamu@gmail.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4 text-center lg:text-left">
              <p className="text-foreground/40 font-mono text-xs uppercase tracking-widest">// SOCIAL_INDEX</p>
              <div className="flex gap-4 justify-center lg:justify-start">
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

          {/* Right - Contact Form in tech frame */}
          <div className="group bg-card border border-accent/20 rounded-none p-8 shadow-lg relative">
            {/* Tech corners */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-accent" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-accent" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-accent" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-accent" />

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-foreground font-mono text-xs font-semibold uppercase tracking-wider">
                  [ 01. SENDER_EMAIL ]
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-accent/20 rounded-none text-foreground placeholder-foreground/30 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all duration-300 font-mono text-sm"
                  placeholder="> enter your email address..."
                />
              </div>

              {/* Subject Field */}
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-foreground font-mono text-xs font-semibold uppercase tracking-wider">
                  [ 02. MESSAGE_SUBJECT ]
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-accent/20 rounded-none text-foreground placeholder-foreground/30 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all duration-300 font-mono text-sm"
                  placeholder="> enter subject payload..."
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-foreground font-mono text-xs font-semibold uppercase tracking-wider">
                  [ 03. MESSAGE_BODY ]
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-accent/20 rounded-none text-foreground placeholder-foreground/30 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent transition-all duration-300 font-mono text-sm resize-none"
                  placeholder="> write your transmission details here..."
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-mono text-sm uppercase font-semibold py-6 rounded-none transition-all duration-300 hover:shadow-lg active:scale-95 tracking-widest border border-accent/30"
              >
                {submitted ? "TRANSMISSION_SENT! ✓" : "SEND_TRANSMISSION"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Contact;
