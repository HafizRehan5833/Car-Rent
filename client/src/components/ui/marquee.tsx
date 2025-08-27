export function Marquee() {
  const marqueeItems = [
    "🚗 Luxury Sedans",
    "🏎️ Sports Cars", 
    "🚙 Premium SUVs",
    "💎 Exotic Vehicles",
    "👔 Business Rentals",
    "🌟 24/7 Service",
    "💳 Flexible Payment"
  ];

  return (
    <section className="bg-accent text-white py-6 relative overflow-hidden" data-testid="marquee-section">
      <div className="floating-shape w-20 h-20 top-2 right-10 rounded-full opacity-10"></div>
      <div className="marquee-container">
        <div className="marquee-content" data-testid="marquee-content">
          {marqueeItems.map((item, index) => (
            <span key={index} className="text-lg font-medium mx-8">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
