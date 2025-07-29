import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Monitor, Smartphone, Server, Paintbrush } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Monitor className="h-8 w-8 text-accent" />,
      title: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Vue.js", level: 80 }
      ]
    },
    {
      icon: <Server className="h-8 w-8 text-accent" />,
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python/Django", level: 80 },
        { name: "PostgreSQL", level: 85 },
        { name: "API Design", level: 90 }
      ]
    },
    {
      icon: <Paintbrush className="h-8 w-8 text-accent" />,
      title: "Design & UX",
      skills: [
        { name: "UI/UX Design", level: 90 },
        { name: "Figma", level: 95 },
        { name: "Adobe Creative Suite", level: 85 },
        { name: "Prototyping", level: 88 }
      ]
    },
    {
      icon: <Smartphone className="h-8 w-8 text-accent" />,
      title: "Mobile & DevOps",
      skills: [
        { name: "React Native", level: 75 },
        { name: "AWS/Cloud", level: 80 },
        { name: "Docker", level: 75 },
        { name: "CI/CD", level: 78 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Skills & Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for bringing your digital projects to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 animate-slide-up">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    {category.icon}
                    <CardTitle className="text-xl text-primary">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-slide-up">
            <div className="bg-gradient-primary rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
              <p className="text-lg opacity-90 mb-6">
                Let's discuss how these skills can bring your project to life
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;