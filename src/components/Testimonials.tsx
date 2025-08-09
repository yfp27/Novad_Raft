import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import lucasByrne from '@/assets/lucas-byrne.jpg';
import nishantVerma from '@/assets/nishant-verma.jpg';
import poojaRay from '@/assets/pooja-ray.jpg';
import graceTanaka from '@/assets/grace-tanaka.jpg';
import roanKeller from '@/assets/roan-keller.jpg';
import paulDonovan from '@/assets/paul-donovan.jpg';
import syedRahman from '@/assets/syed-rahman.jpg';
import mateoCruz from '@/assets/mateo-cruz.jpg';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Novad nailed our brand identity with incredible precision and imagination. The logo is forever and in-your-head iconic, and the banners brought just the right pizzazz to our launch. A genuine talented and reliable creative partner we believe in",
      name: "Lucas Byrne",
      avatar: lucasByrne
    },
    {
      id: 2,
      quote: "Working with Jester was so seamless from start to finish. He created a clean, user-friendly site and developed a logo that perfectly delivered our message. He's savvy, trendy, and always a professional in every sense.",
      name: "Nishant Verma",
      avatar: nishantVerma
    },
    {
      id: 3,
      quote: "I was completely bogged down with constant website issues and frustrating design gaps. Jester not only remedied all the technical issues in a timely fashion but also modernized our appearance in a consistently cohesive way. He's my guy from now on.",
      name: "Pooja Ray",
      avatar: poojaRay
    },
    {
      id: 4,
      quote: "Jester brought my entire campaign to life with deep, textured language that jumped out at first sight. Every social media post was clean, bold, and unique. Statistics confirm the crowd definitely noticed and engaged more than ever before.",
      name: "Grace Tanaka",
      avatar: graceTanaka
    },
    {
      id: 5,
      quote: "I required graphics that really stood out but had a retro feel, and Jester got the task perfectly. His creative manipulation added real personality and soul to the whole product range, far exceeding my expectations.",
      name: "Roan Keller",
      avatar: roanKeller
    },
    {
      id: 6,
      quote: "Our shop needed more flavor and personality—and Jester delivered. His smart layout and clean typography gave our site an inviting edge, boosting sales within weeks.",
      name: "Paul Donovan",
      avatar: paulDonovan
    },
    {
      id: 7,
      quote: "Working with APIs is usually a nightmare, but Jester made it a piece of cake to work with ours and integrate our Google review widget and design modifications. He's pleasant to work with, quick to respond, and an excellent team player.",
      name: "Syed Rahman",
      avatar: syedRahman
    },
    {
      id: 8,
      quote: "I needed a clean user experience and sophisticated branding for my coaching website, and Jester performed impeccably. He wedded great storytelling with performance-oriented design. Clients frequently compliment how professional and engaging the site looks and feels.",
      name: "Mateo Cruz",
      avatar: mateoCruz
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
    <section id="testimonials" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent animate-pulse">
              My Happy Clients
            </h2>
            {/* Enhanced wavy line decoration */}
            <div className="flex justify-center mb-12">
              <svg width="120" height="16" viewBox="0 0 120 16" className="text-primary animate-pulse">
                <path
                  d="M4 12c8-8 16-8 24 0s16 8 24 0 16-8 24 0 16 8 24 0 16-8 24 0"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="relative max-w-5xl mx-auto px-4 lg:px-12">
            {/* Floating decorative elements */}
            <div className="absolute -top-10 -left-10 text-6xl text-primary/10 animate-float">"</div>
            <div className="absolute -bottom-10 -right-10 text-6xl text-primary/10 animate-float delay-1000 rotate-180">"</div>
            
            <div className="text-center animate-fade-in bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/10 shadow-2xl">
              {/* Quote Icon with glow effect */}
              <div className="text-5xl md:text-6xl lg:text-8xl text-primary mb-6 lg:mb-8 font-serif animate-pulse drop-shadow-2xl">"</div>
              
              {/* Quote Text with typewriter effect */}
              <blockquote className="text-base md:text-lg lg:text-xl leading-relaxed mb-8 lg:mb-12 max-w-4xl mx-auto text-gray-100 animate-fade-in px-4 font-light">
                {testimonials[currentIndex].quote}
              </blockquote>

              {/* Enhanced animated line */}
              <div className="relative mb-6 lg:mb-8 mx-auto">
                <div className="w-32 md:w-48 lg:w-64 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto animate-pulse"></div>
                <div className="absolute inset-0 w-32 md:w-48 lg:w-64 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto animate-pulse delay-500 blur-sm"></div>
              </div>

              {/* Client Info with enhanced styling */}
              <div className="flex flex-col items-center animate-fade-in">
                <div className="relative group">
                  <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden mb-4 ring-4 ring-primary/30 shadow-2xl transform transition-all duration-300 group-hover:scale-110 group-hover:ring-primary/60">
                    <img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  {/* Glowing ring effect */}
                  <div className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full ring-2 ring-primary/20 animate-ping"></div>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {testimonials[currentIndex].name}
                </h3>
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