import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { BackgroundAnimations } from "@/components/ui/background-animations";
import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/ui/hero-section";
import { Marquee } from "@/components/ui/marquee";
import { CarCard } from "@/components/ui/car-card";
import { PromotionalBlock } from "@/components/ui/promotional-block";
import { whatsappNumber } from "@/lib/car-data";
import type { Car } from "@shared/schema";
import { Gem, DollarSign, Clock, Headphones, Gift, Shield } from "lucide-react";

export default function Home() {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello! I'm interested in your car rental services.")}`;

  const { data: cars, isLoading, error } = useQuery<Car[]>({
    queryKey: ['/api/fleet'],
  });

  useEffect(() => {
    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Observe car cards for staggered animation
    document.querySelectorAll('.car-card').forEach((card, index) => {
      (card as HTMLElement).style.opacity = '0';
      (card as HTMLElement).style.transform = 'translateY(30px)';
      (card as HTMLElement).style.transition = `all 0.6s ease ${index * 0.1}s`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, [cars]);

  // SEO Meta tags
  useEffect(() => {
    document.title = "GT Cars Rent - Luxury Car Rental Dubai | Premium Vehicle Hire";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Experience luxury with GT Cars Rent Dubai. Premium car rental service for business, weddings, and special occasions. Book your dream car today.');
    }
  }, []);

  const dailyCars = cars?.filter(car => car.duration.toLowerCase().includes('daily') || car.duration.toLowerCase().includes('day')) || [];
  const monthlyCars = cars?.filter(car => car.duration.toLowerCase().includes('monthly')) || [];

  return (
    <div className="font-sans bg-white overflow-x-hidden">
      <BackgroundAnimations />
      
      <Navigation whatsappUrl={whatsappUrl} />
      
      <HeroSection whatsappUrl={whatsappUrl} />
      
      <Marquee />
      
      <PromotionalBlock whatsappUrl={whatsappUrl} />

      {/* Why Choose Us */}
      <section id="services" className="py-20 bg-gray-50 relative" data-testid="services-section">
        <div className="floating-shape w-36 h-36 top-10 right-1/4 rounded-full opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6" data-testid="services-title">
              Why Choose GT Cars Rent
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="services-subtitle">
              Experience the difference with our premium service and exceptional fleet
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="car-card bg-white p-8 rounded-2xl shadow-lg" data-testid="service-luxury">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Gem className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Luxury & Comfort</h3>
              <p className="text-gray-600 leading-relaxed">A fleet of high-end vehicles designed for style and performance, ensuring every journey is exceptional.</p>
            </div>
            
            <div className="car-card bg-white p-8 rounded-2xl shadow-lg" data-testid="service-rates">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Affordable Rates</h3>
              <p className="text-gray-600 leading-relaxed">Premium service at competitive prices with transparent pricing and no hidden fees.</p>
            </div>
            
            <div className="car-card bg-white p-8 rounded-2xl shadow-lg" data-testid="service-flexible">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Flexible Plans</h3>
              <p className="text-gray-600 leading-relaxed">Hourly, daily, weekly, or monthly options to suit your specific needs and schedule.</p>
            </div>
            
            <div className="car-card bg-white p-8 rounded-2xl shadow-lg" data-testid="service-support">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Headphones className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Exceptional Service</h3>
              <p className="text-gray-600 leading-relaxed">Hassle-free booking process with dedicated customer support available 24/7.</p>
            </div>
            
            <div className="car-card bg-white p-8 rounded-2xl shadow-lg" data-testid="service-packages">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Gift className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Special Packages</h3>
              <p className="text-gray-600 leading-relaxed">Tailored packages for weddings, corporate events, and special occasions with premium add-ons.</p>
            </div>
            
            <div className="car-card bg-white p-8 rounded-2xl shadow-lg" data-testid="service-insurance">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Full Insurance</h3>
              <p className="text-gray-600 leading-relaxed">Comprehensive insurance coverage and 24/7 roadside assistance for complete peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white relative" data-testid="how-it-works">
        <div className="floating-shape w-28 h-28 bottom-10 left-10 rounded-full opacity-15"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6" data-testid="how-it-works-title">
              How It Works
            </h2>
            <p className="text-xl text-gray-600" data-testid="how-it-works-subtitle">
              Three simple steps to your luxury ride
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center" data-testid="step-1">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Browse Fleet</h3>
              <p className="text-gray-600 leading-relaxed">Explore our premium collection of luxury vehicles and choose your perfect ride.</p>
            </div>
            
            <div className="text-center" data-testid="step-2">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Book Online</h3>
              <p className="text-gray-600 leading-relaxed">Complete your booking in minutes with our easy online reservation system.</p>
            </div>
            
            <div className="text-center" data-testid="step-3">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enjoy the Ride</h3>
              <p className="text-gray-600 leading-relaxed">Pick up your car and experience luxury, comfort, and performance on every journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Premium Fleet */}
      <section id="fleet" className="py-20 bg-gray-50 relative overflow-hidden" data-testid="fleet-section">
        {/* Authentic Car Background Integration */}
        <div className="absolute inset-0 opacity-8">
          {/* Luxury car showcase - right side */}
          <div className="absolute top-20 right-0 w-96 h-64">
            <div className="absolute top-0 right-12 w-80 h-48 rounded-2xl opacity-60" 
                 style={{
                   backgroundImage: 'url("https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500")',
                   backgroundSize: 'cover',
                   backgroundPosition: 'center',
                   filter: 'grayscale(60%) brightness(0.8) contrast(1.1)'
                 }}>
            </div>
          </div>
          
          {/* Sports car background - left side */}
          <div className="absolute bottom-32 left-0 w-80 h-56">
            <div className="absolute bottom-0 left-8 w-72 h-44 rounded-2xl opacity-50" 
                 style={{
                   backgroundImage: 'url("https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500")',
                   backgroundSize: 'cover',
                   backgroundPosition: 'center',
                   filter: 'grayscale(70%) brightness(0.7) contrast(1.2)'
                 }}>
            </div>
          </div>
        </div>
        
        <div className="floating-shape w-44 h-44 top-20 left-1/3 rounded-full opacity-10"></div>
        <div className="floating-shape w-32 h-32 bottom-20 right-10 rounded-full opacity-15"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6" data-testid="fleet-title">
              Our Premium Fleet
            </h2>
            <p className="text-xl text-gray-600" data-testid="fleet-subtitle">
              Discover our collection of luxury vehicles
            </p>
          </div>
          
          {isLoading && (
            <div className="text-center" data-testid="fleet-loading">
              <p className="text-gray-600">Loading our premium fleet...</p>
            </div>
          )}

          {error && (
            <div className="text-center" data-testid="fleet-error">
              <p className="text-red-600">Sorry, we couldn't load our fleet at the moment. Please try again later.</p>
            </div>
          )}
          
          {dailyCars.length > 0 && (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16" data-testid="daily-cars">
              {dailyCars.map(car => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          )}
          
          {/* Monthly Rental Options */}
          {monthlyCars.length > 0 && (
            <div className="mt-16" data-testid="monthly-cars">
              <h3 className="text-3xl font-bold text-center gradient-text mb-12">Monthly Rental Packages</h3>
              <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
                {monthlyCars.map(car => (
                  <div key={car.id} className="car-card bg-white rounded-xl shadow-lg p-6" data-testid={`monthly-car-${car.id}`}>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{car.name}</h4>
                    <p className="text-gray-600 text-sm mb-4">{car.description}</p>
                    <div className="text-2xl font-bold text-primary">{car.currency} {car.rate.toLocaleString()}</div>
                    <div className="text-gray-500 text-sm">{car.duration}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="py-20 bg-accent text-white relative overflow-hidden" data-testid="cta-section">
        <div className="floating-shape w-48 h-48 top-10 right-20 rounded-full opacity-10"></div>
        <div className="floating-shape w-32 h-32 bottom-10 left-20 rounded-full opacity-15"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="cta-title">
            Book Your Dream Car Today
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto" data-testid="cta-description">
            Travel in style with GT Cars Rent. Your perfect ride is just a click away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={whatsappUrl} 
              className="magnetic-btn bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center justify-center"
              data-testid="button-whatsapp-booking"
            >
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.55-.01-.18 0-.47.068-.716.347-.247.28-.943.922-.943 2.249 0 1.327.966 2.61 1.1 2.79.135.18 1.888 2.88 4.572 4.04.639.275 1.137.439 1.526.563.64.204 1.224.175 1.686.106.514-.077 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
              </svg>
              WhatsApp Booking
            </a>
            <a 
              href="tel:+923019201234" 
              className="magnetic-btn bg-white text-accent px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center justify-center"
              data-testid="button-call-now"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12" data-testid="footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div data-testid="footer-brand">
              <h3 className="text-2xl font-bold gradient-text mb-4">GT Cars Rent</h3>
              <p className="text-gray-400 leading-relaxed">
                Premium luxury car rental service in Dubai. Experience comfort, style, and exceptional service.
              </p>
            </div>
            
            <div data-testid="footer-services">
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Daily Rentals</li>
                <li>Monthly Packages</li>
                <li>Wedding Cars</li>
                <li>Business Rentals</li>
              </ul>
            </div>
            
            <div data-testid="footer-fleet">
              <h4 className="text-lg font-semibold mb-4">Fleet</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Luxury Sedans</li>
                <li>Premium SUVs</li>
                <li>Economy Cars</li>
                <li>Compact Vehicles</li>
              </ul>
            </div>
            
            <div data-testid="footer-contact">
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>
                  <svg className="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.55-.01-.18 0-.47.068-.716.347-.247.28-.943.922-.943 2.249 0 1.327.966 2.61 1.1 2.79.135.18 1.888 2.88 4.572 4.04.639.275 1.137.439 1.526.563.64.204 1.224.175 1.686.106.514-.077 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
                  </svg>
                  +92 3019201234
                </p>
                <p>
                  <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@gtcarsrent.com
                </p>
                <p>
                  <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Dubai, UAE
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GT Cars Rent. All rights reserved. | Premium Car Rental Dubai</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
