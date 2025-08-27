import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  whatsappUrl: string;
}

export function Navigation({ whatsappUrl }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-red-600 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50" data-testid="navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white" data-testid="brand-logo">GT Cars Rent</h1>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('fleet')} 
                className="text-white hover:text-gray-200 transition-colors"
                data-testid="nav-fleet"
              >
                Fleet
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-white hover:text-gray-200 transition-colors"
                data-testid="nav-services"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-white hover:text-gray-200 transition-colors"
                data-testid="nav-contact"
              >
                Contact
              </button>
              <a 
                href={whatsappUrl} 
                className="magnetic-btn bg-white text-red-600 px-6 py-2 rounded-full font-medium inline-flex items-center"
                data-testid="nav-book-now"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.55-.01-.18 0-.47.068-.716.347-.247.28-.943.922-.943 2.249 0 1.327.966 2.61 1.1 2.79.135.18 1.888 2.88 4.572 4.04.639.275 1.137.439 1.526.563.64.204 1.224.175 1.686.106.514-.077 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
                </svg>
                Book Now
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              className="text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="mobile-menu-toggle"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100" data-testid="mobile-menu">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('fleet')} 
                className="text-white hover:text-gray-200 transition-colors text-left"
                data-testid="mobile-nav-fleet"
              >
                Fleet
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="text-white hover:text-gray-200 transition-colors text-left"
                data-testid="mobile-nav-services"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-white hover:text-gray-200 transition-colors text-left"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
              <a 
                href={whatsappUrl} 
                className="magnetic-btn bg-white text-red-600 px-6 py-2 rounded-full font-medium inline-flex items-center justify-center w-fit"
                data-testid="mobile-nav-book-now"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.55-.01-.18 0-.47.068-.716.347-.247.28-.943.922-.943 2.249 0 1.327.966 2.61 1.1 2.79.135.18 1.888 2.88 4.572 4.04.639.275 1.137.439 1.526.563.64.204 1.224.175 1.686.106.514-.077 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
                </svg>
                Book Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
