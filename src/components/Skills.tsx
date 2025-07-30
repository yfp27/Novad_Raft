import { Palette, Globe, Video } from 'lucide-react';

const Skills = () => {
  const services = [
    {
      icon: <Palette className="h-12 w-12 text-accent" />,
      title: "Graphic Design",
      description: "Creative visual solutions for your brand identity and marketing needs."
    },
    {
      icon: <Globe className="h-12 w-12 text-accent" />,
      title: "Web Design & Development",
      description: "Modern, responsive websites built with the latest technologies."
    },
    {
      icon: <Video className="h-12 w-12 text-accent" />,
      title: "Video Editing",
      description: "Professional video content for social media and marketing campaigns."
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

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 animate-slide-up text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;