import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and secure payments.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      category: "Full Stack"
    },
    {
      title: "Creative Agency Website",
      description: "Modern, responsive website for a creative agency featuring smooth animations, portfolio showcase, and contact forms.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      category: "Frontend"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71",
      technologies: ["React", "Firebase", "Material-UI"],
      category: "Full Stack"
    },
    {
      title: "Mobile Banking App UI",
      description: "Clean and intuitive mobile banking interface design focused on user experience and accessibility.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
      technologies: ["Figma", "React Native", "UI/UX"],
      category: "Design"
    },
    {
      title: "Restaurant Website",
      description: "Elegant restaurant website with online menu, reservation system, and location information. Optimized for mobile devices.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      technologies: ["Vue.js", "Nuxt.js", "SCSS"],
      category: "Frontend"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard with interactive charts, data visualization, and customizable widgets for business insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      category: "Full Stack"
    }
  ];

  const categories = ["All", "Full Stack", "Frontend", "Design"];

  return (
    <section id="portfolio" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Portfolio</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of recent projects demonstrating creativity, technical expertise, and attention to detail
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex justify-center mb-12 animate-slide-up">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className="mb-2"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-slide-up">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-2">
                      <Button size="icon" variant="secondary" className="shadow-glow">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="secondary" className="shadow-glow">
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-12 animate-slide-up">
            <Button variant="outline" size="lg" className="shadow-card hover:shadow-elegant">
              View More Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;