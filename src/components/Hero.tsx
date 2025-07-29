import { Button } from '@/components/ui/button';
import { ArrowDown, Download } from 'lucide-react';
import heroImage from '@/assets/hero-workspace.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-hero relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={heroImage} 
          alt="Professional workspace" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-accent/20 rounded-full animate-float"></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 bg-primary-glow/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Creative
              <span className="block text-accent">Freelancer</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              Turning ideas into exceptional digital experiences through innovative design and development
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow transform hover:scale-105 transition-all duration-300"
              >
                View My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                Download CV
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-white/70" />
      </div>
    </section>
  );
};

export default Hero;