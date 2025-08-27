interface PromotionalBlockProps {
  whatsappUrl: string;
}

export function PromotionalBlock({ whatsappUrl }: PromotionalBlockProps) {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-primary-dark relative overflow-hidden" data-testid="promotional-block">
      {/* Background Car Silhouettes */}
      {/* <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full"
             style={{
               backgroundImage: 'url("https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400")',
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               filter: 'grayscale(100%) brightness(0.3)'
             }}>
        </div>
      </div> */}
      
      {/* Floating Elements */}
      <div className="absolute top-10 right-20 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
      <div className="absolute bottom-10 left-20 w-24 h-24 bg-white/5 rounded-full animate-float-delay"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="promo-title">
              Drive More, Pay Less
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90" data-testid="promo-subtitle">
              Exclusive deals on premium cars. Limited time offers for smart drivers.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="car-card bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20" data-testid="deal-weekend">
                <div className="text-3xl font-bold mb-2">30%</div>
                <div className="text-lg font-semibold mb-1">Weekend Special</div>
                <div className="text-white/80 text-sm">Friday to Sunday rentals</div>
              </div>
              
              <div className="car-card bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20" data-testid="deal-business">
                <div className="text-3xl font-bold mb-2">25%</div>
                <div className="text-lg font-semibold mb-1">Business Rate</div>
                <div className="text-white/80 text-sm">Corporate bookings</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={whatsappUrl}
                className="magnetic-btn bg-white text-primary px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center"
                data-testid="button-claim-offer"
              >
                <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.55-.01-.18 0-.47.068-.716.347-.247.28-.943.922-.943 2.249 0 1.327.966 2.61 1.1 2.79.135.18 1.888 2.88 4.572 4.04.639.275 1.137.439 1.526.563.64.204 1.224.175 1.686.106.514-.077 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
                </svg>
                Claim Your Deal
              </a>
              <button className="magnetic-btn bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold"
                      data-testid="button-view-deals">
                View All Deals
              </button>
            </div>
          </div>
<div className="relative"> 
  <div className="car-card bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8" data-testid="featured-car">
    <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold">
      FEATURED
    </div>
    
    <div className="aspect-video rounded-2xl overflow-hidden mb-6">
      <img
        src="https://www.motortrend.com/files/66a9771652c45400082bd012/21-2025-hyundai-elantra-n-front-view.jpg"
        alt="Hyundai Elantra 2025 N Front View"
        className="w-full h-full object-cover"
      />
    </div>
    
    <h3 className="text-2xl font-bold text-gray-900 mb-2">Hyundai Elantra 2025 N</h3>
    <p className="text-gray-600 mb-4">Sporty • 4 doors • Performance driven</p>
    
    <div className="flex items-center justify-between mb-6">
      <div>
        <span className="text-3xl font-bold text-primary">AED 300</span>
        <span className="text-gray-500 ml-2">Per day</span>
      </div>
      <div className="text-right">
        <div className="text-sm text-gray-500 line-through">AED 380</div>
        <div className="text-sm text-green-600 font-medium">Save 20%</div>
      </div>
    </div>
    
    <a
      href={whatsappUrl}
      className="magnetic-btn bg-primary text-white w-full py-3 rounded-full font-semibold text-center block"
      data-testid="button-book-featured"
    >
      Book This Deal
    </a>
  </div>
</div>


        </div>
      </div>
    </section>
  );
}