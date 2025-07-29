import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Palette, Zap, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-8 w-8 text-accent" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time"
    },
    {
      icon: <Palette className="h-8 w-8 text-accent" />,
      title: "Creative Design",
      description: "Crafting beautiful, user-centered designs that tell your story"
    },
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: "Fast Delivery",
      description: "Meeting deadlines without compromising on quality"
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Collaboration",
      description: "Working closely with clients to bring their vision to life"
    }
  ];

  const technologies = [
    "React", "TypeScript", "Node.js", "Python", "Figma", "Adobe Creative Suite",
    "Tailwind CSS", "PostgreSQL", "AWS", "Docker", "Git", "Agile"
  ];

  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate freelancer with 5+ years of experience creating digital solutions that make a difference
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Content */}
            <div className="animate-slide-up">
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Building Digital Dreams Into Reality
              </h3>
              
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                I'm a creative freelancer who specializes in turning complex ideas into elegant, 
                user-friendly digital experiences. With a background in both design and development, 
                I bridge the gap between aesthetics and functionality.
              </p>
              
              <p className="text-lg text-foreground mb-8 leading-relaxed">
                Every project is an opportunity to solve unique challenges and create something 
                meaningful. I believe in the power of good design and clean code to transform 
                businesses and delight users.
              </p>

              {/* Technologies */}
              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">Technologies I Work With</h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6 animate-slide-up">
              {highlights.map((highlight, index) => (
                <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      {highlight.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-primary mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;