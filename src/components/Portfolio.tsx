import { useState } from 'react';
import { Button } from './ui/button';

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);
  
  const portfolioItems = [
    {
      id: 1,
      image: "/lovable-uploads/d9fc9f24-6734-42c7-862f-4ad56b4522a0.png",
      title: "Tiger ERP Branding",
      category: "Business Card",
      size: "large"
    },
    {
      id: 2,
      image: "/lovable-uploads/52e8965c-3add-4340-b09c-e496cf2a8f13.png",
      title: "Tiger ERP Business Card",
      category: "Branding",
      size: "medium"
    },
    {
      id: 3,
      image: "/lovable-uploads/0d1794c9-0c90-47cb-a8b9-883edb0c6a70.png",
      title: "Fashion Discount Ad",
      category: "Social Media",
      size: "medium"
    },
    {
      id: 4,
      image: "/lovable-uploads/ac7193e0-f2f5-4bfe-86e4-e5122bdc147d.png",
      title: "Fashion Collection",
      category: "Social Media",
      size: "large"
    },
    {
      id: 5,
      image: "/lovable-uploads/bff939b1-b0c0-4d26-8e9e-394d045835a5.png",
      title: "Headphones Product Ad",
      category: "Product Design",
      size: "medium"
    },
    {
      id: 6,
      image: "/lovable-uploads/03f109b7-3894-40ab-ba8b-dda5e4a90168.png",
      title: "Fresh Juice Blender",
      category: "Product Design",
      size: "medium"
    },
    {
      id: 7,
      image: "/lovable-uploads/455a87b1-5911-4fd3-8797-c54fd2f966ef.png",
      title: "Silver Kitchen Restaurant",
      category: "Branding",
      size: "medium"
    },
    {
      id: 8,
      image: "/lovable-uploads/339b17eb-4a5e-4a89-b106-a065e5533bb5.png",
      title: "Headphone New Collection",
      category: "Product Design",
      size: "medium"
    },
    {
      id: 9,
      image: "/lovable-uploads/301edaef-7fab-46b8-853d-d110df12f214.png",
      title: "New Product Launch",
      category: "Product Design",
      size: "medium"
    },
    {
      id: 10,
      image: "/lovable-uploads/0c2e933d-3b03-4d48-9651-95ba11df7cd6.png",
      title: "Best Furniture",
      category: "Product Design",
      size: "large"
    },
    {
      id: 11,
      image: "/lovable-uploads/8c87d4b9-8759-4378-9c97-264b0fb9a38b.png",
      title: "Smart Watch Collection",
      category: "Product Design",
      size: "medium"
    },
    {
      id: 12,
      image: "/lovable-uploads/30bceef0-5978-409d-aba6-6adaec2c225c.png",
      title: "Doff Earbuds",
      category: "Product Design",
      size: "medium"
    },
    {
      id: 13,
      image: "/lovable-uploads/283d618a-3f70-4f86-8876-64fb762dd27a.png",
      title: "Backpack Collection",
      category: "Product Design",
      size: "medium"
    },
    {
      id: 14,
      image: "/lovable-uploads/30f5c14b-d127-4f0a-b8db-8fe3cdb2280f.png",
      title: "Drop & Drop Mockup",
      category: "Branding",
      size: "medium"
    },
    {
      id: 15,
      image: "/lovable-uploads/64f48661-79c3-4690-bdf6-715284d35c6c.png",
      title: "JR Circular Logo",
      category: "Branding",
      size: "medium"
    },
    {
      id: 16,
      image: "/lovable-uploads/6ce9f8d6-8718-4256-ae5c-fa5d1c7a4349.png",
      title: "Decorative Pattern",
      category: "Design",
      size: "medium"
    },
    {
      id: 17,
      image: "/lovable-uploads/51ccdb98-0cff-4ced-9989-992d6820ea19.png",
      title: "Iron Bull Premium",
      category: "Branding",
      size: "large"
    },
    {
      id: 18,
      image: "/lovable-uploads/427ef0f3-91e9-4651-b192-6932ccb42898.png",
      title: "Authentic Denim",
      category: "Branding",
      size: "medium"
    },
    {
      id: 19,
      image: "/lovable-uploads/39fb8020-dc4d-4241-a23c-13ab043294e2.png",
      title: "RICKO Wooden Letters",
      category: "Branding",
      size: "medium"
    },
    {
      id: 20,
      image: "/lovable-uploads/2f08f0e4-967d-4dfd-8e38-22fd364ac33a.png",
      title: "Tiger ERP Website",
      category: "Web Design",
      size: "large"
    },
    {
      id: 21,
      image: "/lovable-uploads/af961d06-4889-40f1-986c-846d2facd2a9.png",
      title: "Software Arena Limited",
      category: "Web Design",
      size: "medium"
    },
    {
      id: 22,
      image: "/lovable-uploads/8d7814e9-e7a1-41e8-a676-e614e3460d70.png",
      title: "CZOR Anna Collection",
      category: "Web Design",
      size: "medium"
    },
    {
      id: 23,
      image: "/lovable-uploads/17e54dd7-1219-4580-97a7-2ab2e740ce0a.png",
      title: "Sinp Minimal Watch",
      category: "Web Design",
      size: "large"
    },
    {
      id: 24,
      image: "/lovable-uploads/917107fe-ccd3-433d-b70e-651a14a09eef.png",
      title: "Patio & Pizza",
      category: "Web Design",
      size: "medium"
    },
    {
      id: 25,
      image: "/lovable-uploads/bb86facf-395a-4d17-a48c-eb7a56351225.png",
      title: "Narrow Offers Shop",
      category: "Web Design",
      size: "medium"
    },
    {
      id: 26,
      image: "/lovable-uploads/9d31d203-c107-4c38-b8f3-276d281fedf1.png",
      title: "Review Tapper",
      category: "Web Design",
      size: "medium"
    },
    {
      id: 27,
      image: "/lovable-uploads/ac0bfb70-c43f-47c0-a70f-553e718055eb.png",
      title: "Dental Clinic",
      category: "Web Design",
      size: "medium"
    },
    {
      id: 28,
      image: "/lovable-uploads/699bf3e5-a0e4-4f3e-adde-0d06f7297139.png",
      title: "Guns Online",
      category: "Web Design",
      size: "large"
    },
    {
      id: 29,
      image: "/lovable-uploads/419b6dbb-deed-4357-84dd-f1eef8da857c.png",
      title: "Boll & Branch",
      category: "Web Design",
      size: "medium"
    },
    {
      id: 30,
      image: "/lovable-uploads/e7731f53-8e22-44ca-a4e6-3c5660fbc559.png",
      title: "Software Arena - PVC Industries",
      category: "Branding",
      size: "medium"
    },
    {
      id: 31,
      image: "/lovable-uploads/fcc20466-7329-40d5-9432-ad99bf5c4a0d.png",
      title: "Software Arena - FMCG Industries",
      category: "Branding",
      size: "medium"
    },
    {
      id: 32,
      image: "/lovable-uploads/ee60f0c1-ea89-4d5e-87b0-f5ed11cdb458.png",
      title: "Tiger ERP - Steel Company",
      category: "Branding",
      size: "large"
    },
    {
      id: 33,
      image: "/lovable-uploads/5d04188e-14f5-4e0e-99fa-b58635c41640.png",
      title: "Tiger ERP - Bus Management",
      category: "Branding",
      size: "medium"
    },
    {
      id: 34,
      image: "/lovable-uploads/6661ca95-5095-49ed-a25f-8a000c186cbb.png",
      title: "Coffee Factory Logo",
      category: "Branding",
      size: "medium"
    },
    {
      id: 35,
      image: "/lovable-uploads/9cb07936-eb5f-4eb8-8fe3-e58a3fa18737.png",
      title: "LEKU Coffee Brand",
      category: "Branding",
      size: "medium"
    },
    {
      id: 36,
      image: "/lovable-uploads/3429cf2e-f42f-49e6-8390-3179c1ccead1.png",
      title: "The Plaza Restaurant",
      category: "Branding",
      size: "medium"
    },
    {
      id: 37,
      image: "/lovable-uploads/d30417d4-7251-4b82-9a54-6c3d9c2e71c1.png",
      title: "Godterest Brand",
      category: "Branding",
      size: "medium"
    },
    {
      id: 38,
      image: "/lovable-uploads/482cd90e-9875-429d-988f-bca5db64137a.png",
      title: "HouseCall MD Medical Care",
      category: "Branding",
      size: "large"
    },
    {
      id: 39,
      image: "/lovable-uploads/82ea25c2-0ce4-4348-ac39-156a2045aeab.png",
      title: "TRIM Education",
      category: "Branding",
      size: "medium"
    },
    {
      id: 40,
      image: "/lovable-uploads/92f4d730-7b9d-4820-ba92-3464a31db3a5.png",
      title: "Wildly Western & Co",
      category: "Branding",
      size: "medium"
    },
    {
      id: 41,
      image: "/lovable-uploads/f0f7da15-6361-42ee-90c6-abb0775ecf6d.png",
      title: "Tiger ERP Business Solution",
      category: "Branding",
      size: "large"
    },
    {
      id: 42,
      image: "/lovable-uploads/6733490c-c85d-493a-9024-167c0e762699.png",
      title: "FWM Web Market",
      category: "Branding",
      size: "medium"
    },
    {
      id: 43,
      image: "/lovable-uploads/cab352ca-86e5-4787-8157-d679da94f3a1.png",
      title: "Meme Time Boys T-Shirt",
      category: "Apparel Design",
      size: "medium"
    },
    {
      id: 44,
      image: "/lovable-uploads/4ebeb52a-f2f5-4a0c-bead-9f8b945265cc.png",
      title: "Wolf Moon T-Shirt",
      category: "Apparel Design",
      size: "medium"
    },
    {
      id: 45,
      image: "/lovable-uploads/1ea518b0-18dc-442c-a3e3-afacc440b967.png",
      title: "Italia Football T-Shirt",
      category: "Apparel Design",
      size: "medium"
    },
    {
      id: 46,
      image: "/lovable-uploads/4cff4a77-5884-409e-a098-27c89f9b94c4.png",
      title: "Life Is So Good T-Shirt",
      category: "Apparel Design",
      size: "medium"
    },
    {
      id: 47,
      image: "/lovable-uploads/25d62deb-e6ad-4e0f-8024-a8c56a70eeed.png",
      title: "Los Angeles California T-Shirt",
      category: "Apparel Design",
      size: "medium"
    },
    {
      id: 48,
      image: "/lovable-uploads/6291ef9d-9f73-43fd-9a7c-9324bb51ed50.png",
      title: "Rocky T-Shirt",
      category: "Apparel Design",
      size: "medium"
    },
    {
      id: 49,
      image: "/lovable-uploads/1c316b25-4891-4613-ac59-681a561487f8.png",
      title: "Simplicity Minimalist T-Shirt",
      category: "Apparel Design",
      size: "medium"
    }
  ];

  const displayedItems = showAll ? portfolioItems : portfolioItems.slice(0, 4);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Matrix Digital Rain Effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse text-green-500 text-xs font-mono"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            {Math.random().toString(36).substring(7)}
          </div>
        ))}
      </div>

      {/* 3D Floating Geometric Shapes */}
      <div className="absolute inset-0 perspective-1000">
        <div className="absolute top-20 left-20 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 transform rotate-45 animate-spin opacity-20" style={{ animationDuration: '10s' }}></div>
        <div className="absolute bottom-40 right-30 w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-bounce opacity-30" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-20 w-12 h-24 bg-gradient-to-r from-yellow-500 to-orange-500 transform skew-x-12 animate-pulse opacity-25"></div>
        <div className="absolute bottom-1/4 left-1/4 w-28 h-8 bg-gradient-to-r from-green-500 to-teal-500 transform rotate-12 animate-ping opacity-20"></div>
      </div>

      {/* Holographic Mesh Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-green-900/10 animate-pulse"></div>
      
      {/* Liquid Morphing Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-radial from-red-500/20 to-transparent rounded-full blur-3xl animate-pulse transform scale-150" style={{ animationDuration: '8s' }}></div>
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-gradient-radial from-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse transform scale-125" style={{ animationDuration: '12s', animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-radial from-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '15s', animationDelay: '6s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Magical Section Header */}
          <div className="mb-16 text-center relative">
            {/* Floating Sparkles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${1 + Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
            
            <h2 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-primary via-purple-500 via-blue-500 to-white bg-clip-text text-transparent animate-pulse relative">
              Portfolio
              {/* Glitch Effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 bg-clip-text text-transparent opacity-0 animate-ping" style={{ animationDuration: '0.1s', animationIterationCount: 'infinite' }}>Portfolio</span>
            </h2>
            
            {/* Morphing Subtitle */}
            <p className="text-xl text-gray-300 max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-500">
              A showcase of creativity and innovation in every project
            </p>
            
            {/* Magical Underline */}
            <div className="mt-4 mx-auto w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
          </div>

          {/* Mind-Bending 3D Portfolio Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-max perspective-1000">
            {displayedItems.map((item, index) => (
              <div
                key={item.id}
                className={`
                  group relative overflow-hidden cursor-pointer
                  transform-gpu transition-all duration-1000 preserve-3d
                  hover:scale-110 hover:z-30 hover:rotate-y-12 hover:rotate-x-3
                  ${item.size === 'large' ? 'col-span-2 row-span-2' : ''}
                  ${item.size === 'medium' ? 'row-span-1' : ''}
                  ${item.size === 'small' ? 'row-span-1' : ''}
                  animate-fade-in
                `}
                style={{
                  animationDelay: `${index * 0.15}s`,
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Holographic Container */}
                <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden group-hover:border-primary/60 transition-all duration-700">
                  
                  {/* Iridescent Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Liquid Distortion Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl animate-pulse"></div>
                  
                  {/* Floating Image with Magnetic Effect */}
                  <div className="aspect-square overflow-hidden relative group-hover:transform group-hover:translateZ-8">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-150 group-hover:rotate-6 filter group-hover:contrast-125 group-hover:saturate-150"
                    />
                    
                    {/* Holographic Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-magenta-500/20 opacity-0 group-hover:opacity-70 transition-opacity duration-700 mix-blend-overlay"></div>
                    
                    {/* Particle Storm */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {[...Array(15)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-0.5 h-0.5 bg-white rounded-full animate-ping"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 1}s`,
                            animationDuration: `${0.5 + Math.random() * 1}s`
                          }}
                        />
                      ))}
                    </div>
                    
                    {/* Electric Lines */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-700">
                      <svg className="w-full h-full" viewBox="0 0 200 200">
                        <path
                          d={`M${Math.random() * 200},${Math.random() * 200} Q${Math.random() * 200},${Math.random() * 200} ${Math.random() * 200},${Math.random() * 200}`}
                          stroke="currentColor"
                          strokeWidth="0.5"
                          fill="none"
                          className="text-primary animate-pulse"
                        />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Dimensional Text Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center">
                    <div className="text-center transform translate-y-12 rotate-x-45 group-hover:translate-y-0 group-hover:rotate-x-0 transition-all duration-700 preserve-3d">
                      <h3 className="text-lg font-bold mb-2 text-white group-hover:text-primary transition-colors duration-500 transform group-hover:translateZ-4">{item.title}</h3>
                      <p className="text-sm text-gray-300 group-hover:text-accent transition-colors duration-500 transform group-hover:translateZ-2">{item.category}</p>
                      
                      {/* Neon Underline */}
                      <div className="mt-3 w-16 h-0.5 bg-gradient-to-r from-primary via-white to-accent mx-auto opacity-0 group-hover:opacity-100 transition-all duration-700 shadow-lg shadow-primary/50"></div>
                      
                      {/* Holographic Badge */}
                      <div className="mt-2 px-3 py-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full border border-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <span className="text-xs text-white">View Project</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Corner Glow Effects */}
                  <div className="absolute top-0 left-0 w-8 h-8 bg-gradient-to-br from-primary to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-700"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-accent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-700"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced View More Button */}
          {!showAll && portfolioItems.length > 4 && (
            <div className="flex justify-center mt-12">
              <Button 
                onClick={() => setShowAll(true)}
                className="px-8 py-4 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-semibold rounded-full shadow-2xl hover:shadow-primary/50 transform transition-all duration-300 hover:scale-110 hover:rotate-1 border border-primary/30 hover:border-accent/50"
              >
                View More Magic ✨
              </Button>
            </div>
          )}

          {/* Enhanced View Less Button */}
          {showAll && (
            <div className="flex justify-center mt-12">
              <Button 
                onClick={() => setShowAll(false)}
                className="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-primary hover:to-accent text-white font-semibold rounded-full shadow-2xl hover:shadow-primary/50 transform transition-all duration-300 hover:scale-110 hover:rotate-1 border border-gray-600 hover:border-accent/50"
              >
                Show Less
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;