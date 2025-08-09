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
    <section id="skills" className="py-20 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full animate-ping opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 1}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4 animate-pulse">Skills & Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for bringing your digital projects to life
            </p>
          </div>

          {/* Services Grid with enhanced effects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="group relative overflow-hidden p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-card via-card/80 to-card/60 border border-border hover:border-accent/50 transition-all duration-500 animate-fade-in text-center hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-3 hover:rotate-1">
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating geometric shapes */}
                <div className="absolute top-2 right-2 w-3 h-3 bg-accent/20 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                <div className="absolute bottom-3 left-3 w-2 h-2 bg-primary/30 rounded-full animate-pulse opacity-0 group-hover:opacity-100"></div>
                
                <div className="mb-4 lg:mb-6 flex justify-center relative z-10">
                  <div className="p-4 lg:p-5 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 group-hover:from-accent/40 group-hover:to-primary/40 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-xl">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-foreground mb-3 lg:mb-4 group-hover:text-accent transition-colors duration-300 relative z-10">
                  {service.title}
                </h3>
                <p className="text-sm lg:text-base text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed relative z-10">
                  {service.description}
                </p>
                
                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-accent/30 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;