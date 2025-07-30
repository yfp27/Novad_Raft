const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86",
      title: "Product Design",
      category: "Design",
      size: "large"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      title: "Luxury Watch",
      category: "Product",
      size: "medium"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
      title: "Architecture",
      category: "Design",
      size: "medium"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89",
      title: "Kitchen Design",
      category: "Interior",
      size: "large"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07",
      title: "Business Cards",
      category: "Branding",
      size: "medium"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      title: "Footwear Design",
      category: "Product",
      size: "medium"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256",
      title: "Photography",
      category: "Creative",
      size: "small"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71",
      title: "Brand Package",
      category: "Branding",
      size: "medium"
    }
  ];

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
            {portfolioItems.map((item, index) => (
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
        </div>
      </div>
    </section>
  );
};

export default Portfolio;