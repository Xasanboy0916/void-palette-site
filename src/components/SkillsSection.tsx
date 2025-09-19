import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Vue.js", level: 75 },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "Express.js", level: 88 },
        { name: "GraphQL", level: 80 },
        { name: "PostgreSQL", level: 82 },
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Docker", level: 80 },
        { name: "Git", level: 95 },
        { name: "Figma", level: 88 },
        { name: "Vercel", level: 90 },
      ]
    }
  ];

  const certifications = [
    "AWS Certified Developer",
    "Google Cloud Professional",
    "React Expert Certification",
    "UI/UX Design Specialist"
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience and continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 grid-fade-in">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="glass-effect hover-glow">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-center text-card-foreground">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-card-foreground">
                        {skill.name}
                      </span>
                      <span className="text-xs text-card-foreground/70">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-secondary/30 rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full transition-all duration-1000 ease-out animate-pulse"
                        style={{ 
                          width: `${skill.level}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-foreground">Certifications & Achievements</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm bg-secondary/50 border border-border/50 hover:bg-secondary/70 transition-colors">
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;