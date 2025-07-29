import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm opacity-90">
              © 2024 Creative Freelancer. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-sm opacity-90">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-accent fill-current" />
            <span>and lots of coffee</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;