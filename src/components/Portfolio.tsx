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
    }
  ];

  const displayedItems = showAll ? portfolioItems : portfolioItems.slice(0, 4);

  return (
    <section id="portfolio" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Portfolio</h2>
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-max">
            {displayedItems.map((item, index) => (
              <div
                key={item.id}
                className={`
                  group relative overflow-hidden bg-gray-900 rounded-lg cursor-pointer
                  transform transition-all duration-500 hover:scale-105 hover:z-10
                  ${item.size === 'large' ? 'col-span-2 row-span-2' : ''}
                  ${item.size === 'medium' ? 'row-span-1' : ''}
                  ${item.size === 'small' ? 'row-span-1' : ''}
                  animate-fade-in
                `}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-300">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          {!showAll && portfolioItems.length > 4 && (
            <div className="flex justify-center mt-12">
              <Button 
                onClick={() => setShowAll(true)}
                variant="outline"
                className="px-8 py-3 text-black bg-white border-white hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300"
              >
                View More
              </Button>
            </div>
          )}

          {/* View Less Button */}
          {showAll && (
            <div className="flex justify-center mt-12">
              <Button 
                onClick={() => setShowAll(false)}
                variant="outline"
                className="px-8 py-3 text-black bg-white border-white hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300"
              >
                View Less
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;