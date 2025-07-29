import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Brand Identity & Logo Design",
      description: "Complete brand identity package including logo design, color palette, and brand guidelines for modern businesses.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71",
      technologies: ["Logo Design", "Branding", "Adobe Illustrator"],
      category: "Graphics"
    },
    {
      title: "Business Card Collection",
      description: "Professional business card designs featuring clean layouts, typography, and brand consistency across various industries.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07",
      technologies: ["Print Design", "Typography", "Adobe InDesign"],
      category: "Graphics"
    },
    {
      title: "Custom T-Shirt Designs",
      description: "Creative t-shirt designs for events, brands, and personal use featuring unique graphics and typography.",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
      technologies: ["T-Shirt Design", "Graphics", "Adobe Photoshop"],
      category: "Graphics"
    },
    {
      title: "Shopify E-commerce Store",
      description: "Complete Shopify store setup with custom design, product management, and payment integration for online businesses.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
      technologies: ["Shopify", "E-commerce", "Web Design"],
      category: "Web"
    },
    {
      title: "Social Media Graphics",
      description: "Engaging social media graphics and posts designed to increase engagement and maintain brand consistency across platforms.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113",
      technologies: ["Social Media", "Graphics Design", "Canva"],
      category: "Graphics"
    },
    {
      title: "Video Content Creation",
      description: "Professional video editing for social media, including transitions, effects, color grading, and motion graphics.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d",
      technologies: ["Video Editing", "Motion Graphics", "After Effects"],
      category: "Video"
    }
  ];

  const categories = ["All", "Graphics", "Web", "Video"];

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