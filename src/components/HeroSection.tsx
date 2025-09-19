import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 neon-cyan rounded-full opacity-10 pulse-neon" />
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 neon-purple rounded-full opacity-20 pulse-neon" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-1/3 w-16 h-16 neon-blue rounded-full opacity-15 pulse-neon" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 float-animation">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="gradient-text">Alex</span>{" "}
              <span className="text-foreground">Johnson</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-2">
              Full Stack Developer & UI/UX Designer
            </p>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed">
              Crafting digital experiences with cutting-edge technology and innovative design. 
              Specializing in React, Node.js, and modern web development.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button 
              variant="glass" 
              size="xl"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6 mb-16">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors hover:scale-110 transform duration-300"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-neon-blue transition-colors hover:scale-110 transform duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:alex@example.com"
              className="text-foreground/60 hover:text-accent transition-colors hover:scale-110 transform duration-300"
            >
              <Mail size={24} />
            </a>
          </div>

          <button 
            onClick={() => scrollToSection("about")}
            className="text-foreground/60 hover:text-primary transition-all duration-300 animate-bounce"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;