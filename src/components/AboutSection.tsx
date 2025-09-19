import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap, Users } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices and modern standards."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive interfaces that provide exceptional user experiences."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and seamless performance across all devices."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Working effectively with teams, stakeholders, and clients to deliver successful projects."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with 5+ years of experience creating digital solutions 
            that make a difference. I love turning complex problems into simple, beautiful, and intuitive designs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">My Journey</h3>
            <p className="text-foreground/80 leading-relaxed">
              I'm a passionate full-stack developer with expertise in building scalable web applications 
              and creating intuitive user interfaces. My journey began with curiosity about technology 
              and has evolved into a commitment to crafting exceptional digital experiences.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              I thrive on solving complex problems and transforming ideas into reality through clean, 
              efficient code. Always eager to learn new technologies and share knowledge with the developer community.
            </p>
            <div className="flex flex-wrap gap-3">
              {["React", "TypeScript", "Node.js", "Python", "AWS", "Docker"].map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1 text-sm bg-secondary/50 text-secondary-foreground rounded-full border border-border/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 grid-fade-in">
            {features.map((feature, index) => (
              <Card key={index} className="glass-effect hover-glow group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-card-foreground">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-card-foreground/70 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;