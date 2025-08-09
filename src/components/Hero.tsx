import { Button } from '@/components/ui/button';
import { ArrowDown, Download } from 'lucide-react';
import heroImage from '@/assets/hero-workspace.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-black via-purple-900 to-black relative overflow-hidden">
      {/* Animated Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Professional workspace" 
          className="w-full h-full object-cover animate-pulse"
        />
      </div>
      
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-accent to-primary rounded-full animate-float blur-xl opacity-60"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-primary to-red-500 rounded-full animate-float blur-xl opacity-70" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-float blur-2xl opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full animate-float blur-xl opacity-50" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full animate-ping opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="animate-pulse bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent">
                Hi there!
              </span>
              <span className="block text-accent animate-bounce mt-4">I'm Novad</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto animate-fade-in delay-500">
              Turning ideas into <span className="text-accent font-semibold animate-pulse">exceptional</span> digital experiences through innovative design and development
            </p>
            
            {/* Glowing CTA Button */}
            <div className="animate-fade-in delay-1000">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-accent to-primary hover:from-primary hover:to-accent text-white font-semibold px-8 py-4 rounded-full shadow-2xl hover:shadow-accent/50 transform transition-all duration-300 hover:scale-110 hover:rotate-1"
              >
                Let's Create Magic ✨
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