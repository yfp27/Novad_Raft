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