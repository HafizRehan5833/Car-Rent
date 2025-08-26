interface HeroSectionProps {
  whatsappUrl: string;
}

export function HeroSection({ whatsappUrl }: HeroSectionProps) {
  const scrollToFleet = () => {
    const element = document.getElementById('fleet');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen bg-animate flex items-center justify-center overflow-hidden" data-testid="hero-section">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-light/20 to-white"></div>
      
      {/* Authentic Car Background Images */}
      <div className="absolute inset-0 opacity-15">
        {/* Luxury sedan silhouette - bottom left */}
        <div className="absolute bottom-0 left-0 w-96 h-64 bg-gradient-to-t from-gray-800/30 to-transparent">
          <div className="absolute bottom-8 left-8 w-80 h-32 rounded-lg opacity-60" 
               style={{
                 backgroundImage: 'url("https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400")',
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 filter: 'grayscale(70%) brightness(0.7)'
               }}>
          </div>
        </div>
        
        {/* Sports car silhouette - top right */}
        <div className="absolute top-0 right-0 w-80 h-60 bg-gradient-to-b from-gray-800/20 to-transparent">
          <div className="absolute top-12 right-12 w-64 h-36 rounded-lg opacity-50" 
               style={{
                 backgroundImage: 'url("https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400")',
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 filter: 'grayscale(80%) brightness(0.6)'
               }}>
          </div>
        </div>
        
        {/* SUV silhouette - middle left */}
        <div className="absolute top-1/2 left-0 w-72 h-48 bg-gradient-to-r from-gray-800/15 to-transparent transform -translate-y-1/2">
          <div className="absolute top-8 left-6 w-60 h-32 rounded-lg opacity-40" 
               style={{
                 backgroundImage: 'url("https://images.unsplash.com/photo-1549399504-8c5d60c7cfce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400")',
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 filter: 'grayscale(90%) brightness(0.5)'
               }}>
          </div>
        </div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/10 to-transparent rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-primary/5 to-transparent rounded-full animate-float"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Hero Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text leading-tight" data-testid="hero-title">
              Experience Luxury
              <br />
              <span className="text-4xl md:text-6xl">Drive Your Dreams</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed" data-testid="hero-description">
              Premium vehicles meet exceptional service. Whether it's business, weddings, or pure thrill - 
              GT Cars Rent delivers seamless luxury at unbeatable rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <button 
                onClick={scrollToFleet}
                className="magnetic-btn bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center"
                data-testid="button-explore-fleet"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                Explore Fleet
              </button>
              <a 
                href={whatsappUrl} 
                className="magnetic-btn bg-white text-primary border-2 border-primary px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center"
                data-testid="button-book-instantly"
              >
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.55-.01-.18 0-.47.068-.716.347-.247.28-.943.922-.943 2.249 0 1.327.966 2.61 1.1 2.79.135.18 1.888 2.88 4.572 4.04.639.275 1.137.439 1.526.563.64.204 1.224.175 1.686.106.514-.077 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
                </svg>
                Book Instantly
              </a>
            </div>
          </div>

          {/* Prominent Promotional Block */}
          <div className="relative">
            <div className="car-card bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-primary/20" data-testid="promo-block">
              <div className="absolute -top-4 -right-4 bg-primary text-white px-6 py-2 rounded-full text-sm font-bold animate-bounce-slow">
                SPECIAL OFFER
              </div>
              
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Monthly Packages</h3>
                <p className="text-gray-600 mb-4">Save up to 40% with our extended rental plans</p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-700">1 Month Rental</span>
                  <span className="text-primary font-bold">Save 25%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-700">3+ Months</span>
                  <span className="text-primary font-bold">Save 40%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg border border-primary/20">
                  <span className="font-medium text-gray-700">Business Package</span>
                  <span className="text-primary font-bold">Custom Rates</span>
                </div>
              </div>
              
              <a 
                href={whatsappUrl}
                className="magnetic-btn bg-primary text-white w-full py-3 rounded-full font-semibold text-center block"
                data-testid="button-get-quote"
              >
                Get Custom Quote
              </a>
              
              <div className="text-center mt-4">
                <p className="text-sm text-gray-500">
                  ✓ Free Delivery & Pickup &nbsp; ✓ 24/7 Support &nbsp; ✓ Full Insurance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
