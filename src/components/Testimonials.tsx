import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ericaMillar from '@/assets/erica-millar.jpg';
import sarahJohnson from '@/assets/sarah-johnson.jpg';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
       name: "Erica Millar",
       position: "Product Designer @Twitter",
       avatar: ericaMillar
    },
    {
      id: 2,
      quote: "The quick brown fox jumps over the lazy dog. This pangram contains every letter of the alphabet and is perfect for testing typography and layout designs across various platforms and applications.",
      name: "Sarah Johnson",
      position: "UI/UX Designer @google",
      avatar: sarahJohnson
    },
    {
      id: 3,
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "Michael Chen",
      position: "Creative Director @adobe",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">My Happy Clients</h2>
            {/* Wavy line decoration */}
            <div className="flex justify-center mb-12">
              <svg width="60" height="8" viewBox="0 0 60 8" className="text-white">
                <path
                  d="M2 6c4-4 8-4 12 0s8 4 12 0 8-4 12 0 8 4 12 0 8-4 12 0"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="relative max-w-5xl mx-auto px-4 lg:px-12">
            <div className="text-center animate-fade-in">
              {/* Quote Icon */}
              <div className="text-5xl md:text-6xl lg:text-8xl text-primary/20 mb-6 lg:mb-8 font-serif">"</div>
              
              {/* Quote Text */}
              <blockquote className="text-base md:text-lg lg:text-xl leading-relaxed mb-8 lg:mb-12 max-w-4xl mx-auto text-gray-300 animate-slide-up px-4">
                {testimonials[currentIndex].quote}
              </blockquote>

              {/* Red Line */}
              <div className="w-24 md:w-32 lg:w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent mb-6 lg:mb-8 mx-auto"></div>

              {/* Client Info */}
              <div className="flex flex-col items-center animate-slide-up">
                <div className="w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full overflow-hidden mb-3 lg:mb-4 ring-4 ring-primary/20">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-1 lg:mb-2">{testimonials[currentIndex].name}</h3>
                <p className="text-sm md:text-base text-gray-400">{testimonials[currentIndex].position}</p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors hidden md:flex"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-6 w-6 lg:h-8 lg:w-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors hidden md:flex"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-6 w-6 lg:h-8 lg:w-8" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-600'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;