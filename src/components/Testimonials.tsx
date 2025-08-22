import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Novad nailed our brand identity with incredible precision and imagination. The logo is forever and in-your-head iconic, and the banners brought just the right pizzazz to our launch. A genuine talented and reliable creative partner we believe in",
      name: "Lucas Byrne"
    },
    {
      id: 2,
      quote: "Working with Novad was so seamless from start to finish. He created a clean, user-friendly site and developed a logo that perfectly delivered our message. He's savvy, trendy, and always a professional in every sense.",
      name: "Nishant Verma"
    },
    {
      id: 3,
      quote: "I was completely bogged down with constant website issues and frustrating design gaps. Novad not only remedied all the technical issues in a timely fashion but also modernized our appearance in a consistently cohesive way. He's my guy from now on.",
      name: "Pooja Ray"
    },
    {
      id: 4,
      quote: "Novad brought my entire campaign to life with deep, textured language that jumped out at first sight. Every social media post was clean, bold, and unique. Statistics confirm the crowd definitely noticed and engaged more than ever before.",
      name: "Grace Tanaka"
    },
    {
      id: 5,
      quote: "I required graphics that really stood out but had a retro feel, and Novad got the task perfectly. His creative manipulation added real personality and soul to the whole product range, far exceeding my expectations.",
      name: "Roan Keller"
    },
    {
      id: 6,
      quote: "Our shop needed more flavor and personality—and Novad delivered. His smart layout and clean typography gave our site an inviting edge, boosting sales within weeks.",
      name: "Paul Donovan"
    },
    {
      id: 7,
      quote: "Working with APIs is usually a nightmare, but Novad made it a piece of cake to work with ours and integrate our Google review widget and design modifications. He's pleasant to work with, quick to respond, and an excellent team player.",
      name: "Syed Rahman"
    },
    {
      id: 8,
      quote: "I needed a clean user experience and sophisticated branding for my coaching website, and Novad performed impeccably. He wedded great storytelling with performance-oriented design. Clients frequently compliment how professional and engaging the site looks and feels.",
      name: "Mateo Cruz"
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
      {/* Cosmic DNA Helix Background */}
      <div className="absolute inset-0 perspective-1000">
        <div className="absolute inset-0 animate-spin opacity-5" style={{ animationDuration: '60s' }}>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-full bg-gradient-to-b from-transparent via-primary to-transparent"
              style={{
                left: '50%',
                transform: `translateX(-50%) rotateZ(${i * 45}deg)`,
                transformOrigin: 'center center'
              }}
            />
          ))}
        </div>
      </div>

      {/* Quantum Particles Field */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-ping opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Holographic Data Streams */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute h-full w-px bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-pulse"
            style={{
              left: `${15 + i * 15}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>

      {/* Morphing Energy Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-radial from-purple-500/30 to-transparent rounded-full blur-3xl animate-pulse transform" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-gradient-radial from-cyan-500/25 to-transparent rounded-full blur-3xl animate-pulse transform scale-150" style={{ animationDuration: '12s', animationDelay: '4s' }}></div>
        <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-gradient-radial from-pink-500/35 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Interdimensional Section Header */}
          <div className="text-center mb-16 relative">
            {/* Orbital Rings */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none">
              <div className="absolute inset-0 border border-primary/20 rounded-full animate-spin opacity-30" style={{ animationDuration: '20s' }}></div>
              <div className="absolute inset-4 border border-accent/20 rounded-full animate-spin opacity-25" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
              <div className="absolute inset-8 border border-purple-500/20 rounded-full animate-spin opacity-20" style={{ animationDuration: '40s' }}></div>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-primary via-cyan-400 via-purple-500 to-white bg-clip-text text-transparent relative z-10">
              <span className="relative">
                My Happy Clients
                {/* Glitch Layers */}
                <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 bg-clip-text text-transparent opacity-0 animate-ping" style={{ animationDuration: '0.15s' }}>My Happy Clients</span>
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent opacity-0 animate-pulse" style={{ animationDuration: '0.3s' }}>My Happy Clients</span>
              </span>
            </h2>
            
            {/* Liquid SVG Decoration */}
            <div className="flex justify-center mb-12 relative">
              <svg width="200" height="32" viewBox="0 0 200 32" className="text-primary">
                <defs>
                  <linearGradient id="liquidGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="0"/>
                    <stop offset="50%" stopColor="currentColor" stopOpacity="1"/>
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <path
                  d="M8 16c16-12 32-12 48 0s32 12 48 0 32-12 48 0 32 12 48 0"
                  stroke="url(#liquidGrad)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  className="animate-pulse"
                />
              </svg>
              {/* Flowing Particles */}
              <div className="absolute inset-0">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-primary rounded-full animate-ping"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: '50%',
                      animationDelay: `${i * 0.2}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Dimensional Testimonial Portal */}
          <div className="relative max-w-5xl mx-auto px-4 lg:px-12">
            {/* Levitating Quote Marks */}
            <div className="absolute -top-16 -left-16 text-8xl text-primary/20 animate-float transform rotate-12" style={{ animationDuration: '6s' }}>"</div>
            <div className="absolute -bottom-16 -right-16 text-8xl text-accent/20 animate-float rotate-180 transform -rotate-12" style={{ animationDuration: '8s', animationDelay: '2s' }}>"</div>
            
            {/* Holographic Testimonial Container */}
            <div className="relative">
              {/* Energy Field */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-3xl blur-xl animate-pulse"></div>
              
              <div className="relative text-center bg-white/5 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl transform hover:scale-105 transition-transform duration-700">
                {/* Floating Geometric Ornaments */}
                <div className="absolute top-4 left-4 w-6 h-6 border-2 border-primary/40 rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-2 border-accent/40 rounded-full animate-pulse"></div>
                <div className="absolute bottom-4 left-4 w-4 h-8 bg-gradient-to-t from-purple-500/40 to-transparent animate-pulse"></div>
                <div className="absolute bottom-4 right-4 w-8 h-4 bg-gradient-to-r from-cyan-500/40 to-transparent animate-pulse"></div>
                
                {/* Hypnotic Quote Icon */}
                <div className="relative text-6xl md:text-8xl lg:text-9xl mb-6 lg:mb-8 font-serif">
                  <span className="bg-gradient-to-br from-primary via-white to-accent bg-clip-text text-transparent animate-pulse drop-shadow-2xl">"</span>
                  {/* Orbital Ring around Quote */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 border border-primary/30 rounded-full animate-spin opacity-50" style={{ animationDuration: '15s' }}></div>
                  </div>
                </div>
                
                {/* Morphing Quote Text */}
                <blockquote className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 lg:mb-12 max-w-4xl mx-auto text-gray-100 px-4 font-light relative">
                  <span className="relative z-10">{testimonials[currentIndex].quote}</span>
                  {/* Text Shadow Effects */}
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 blur-sm">{testimonials[currentIndex].quote}</span>
                </blockquote>

                {/* Liquid Crystal Divider */}
                <div className="relative mb-8 mx-auto">
                  <div className="w-48 md:w-64 lg:w-80 h-1 bg-gradient-to-r from-transparent via-primary via-white via-accent to-transparent mx-auto animate-pulse"></div>
                  <div className="absolute inset-0 w-48 md:w-64 lg:w-80 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto animate-pulse delay-300 blur-sm"></div>
                  <div className="absolute inset-0 w-48 md:w-64 lg:w-80 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto animate-pulse delay-600 blur-lg"></div>
                </div>

                {/* Client Name Focus */}
                <div className="flex flex-col items-center">
                  {/* Glowing Name with Enhanced Effects */}
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 relative">
                    <span className="relative z-10 text-white drop-shadow-2xl">{testimonials[currentIndex].name}</span>
                    <span className="absolute inset-0 blur-lg text-primary opacity-50">{testimonials[currentIndex].name}</span>
                    {/* Name Glow Effects */}
                    <span className="absolute inset-0 text-cyan-400 opacity-0 animate-ping" style={{ animationDuration: '0.2s' }}>{testimonials[currentIndex].name}</span>
                  </h3>
                  
                  {/* Energy Signatures under Name */}
                  <div className="relative mt-4">
                    <div className="w-48 md:w-64 lg:w-80 h-2 bg-gradient-to-r from-transparent via-primary via-white via-accent to-transparent mx-auto animate-pulse"></div>
                    <div className="absolute inset-0 w-48 md:w-64 lg:w-80 h-2 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto animate-pulse delay-300 blur-sm"></div>
                    <div className="absolute inset-0 w-48 md:w-64 lg:w-80 h-2 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto animate-pulse delay-600 blur-lg"></div>
                  </div>
                </div>
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