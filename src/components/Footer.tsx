import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground py-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-2 left-10 w-12 h-12 bg-white rounded-full blur-lg animate-pulse"></div>
        <div className="absolute bottom-2 right-10 w-8 h-8 bg-white rounded-full blur-md animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 animate-fade-in">
            <p className="text-sm opacity-90 hover:opacity-100 transition-opacity duration-300">
              © 2025 <span className="font-semibold">Novad Raft</span> ✨
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-sm opacity-90 hover:opacity-100 transition-opacity duration-300 animate-fade-in delay-300">
            <Heart className="h-4 w-4 text-red-300 animate-pulse" />
            <span>All Rights Reserved</span>
            <Heart className="h-4 w-4 text-red-300 animate-pulse delay-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;