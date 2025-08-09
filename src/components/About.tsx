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
    "Graphics Design", "Logo Design", "Business card Design", "T-Shirt Design", 
    "Brochure Design", "Product Design", "Banner Design", "Social Media Graphics",
    "UI/UX Design", "Infographics", "Photo Editing", "Presentation Design", "Flyer Design",
    "HTML & CSS", "Responsive Design", "SEO", "CMS", "Design with Builder",
    "Bug Research", "Video Editing", "Color Correction", "Motion Graphics",
    "Web Hosting", "Digital Marketing & SEO", "Website Hosting & Domain Integration"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4 animate-pulse">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate freelancer with 5+ years of experience creating digital solutions that make a difference
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Content */}
            <div className="animate-fade-in delay-300 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 shadow-2xl">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
                I'm a Web & Graphic Design Professional with a flair for bug fixing and artistic video editing.
              </h3>
              
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                I design beautiful graphics and websites that grab attention and speak your brand voice. 
                I debug, UI optimize, and ensure your site runs smoothly, securely, and trouble-free. 
                From branding to domain + hosting setup, I handle the technical issues so you're launch-ready.
              </p>
              
              <p className="text-lg text-foreground mb-8 leading-relaxed">
                I also design engaging, platform-ready videos that keep your audience interested.
              </p>

              {/* Technologies with enhanced styling */}
              <div>
                <h4 className="text-lg font-semibold text-primary mb-4 animate-pulse">Skills I Work With</h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="text-sm hover:scale-110 transition-transform duration-300 hover:bg-accent hover:text-accent-foreground cursor-pointer animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Highlights Grid with enhanced effects */}
            <div className="grid sm:grid-cols-2 gap-6 animate-fade-in delay-500">
              {highlights.map((highlight, index) => (
                <Card key={index} className="group shadow-card hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 bg-white/10 backdrop-blur-sm border-primary/20">
                  <CardContent className="p-6 text-center relative overflow-hidden">
                    {/* Glowing background effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="mb-4 flex justify-center relative z-10">
                      <div className="p-3 rounded-full bg-accent/20 group-hover:bg-accent/40 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                        {highlight.icon}
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-primary mb-2 group-hover:text-accent transition-colors duration-300 relative z-10">
                      {highlight.title}
                    </h4>
                    <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300 relative z-10">
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