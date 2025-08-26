import { getWhatsAppBookingUrl } from "@/lib/car-data";
import type { Car } from "@shared/schema";

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  const whatsappUrl = getWhatsAppBookingUrl(car.name);

  return (
    <div className="car-card bg-white rounded-2xl shadow-lg overflow-hidden group" data-testid={`car-card-${car.id}`}>
      <div className="relative h-64 overflow-hidden">
        <img 
          src={car.imageUrl || "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"} 
          alt={`${car.name} - ${car.description}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          data-testid={`car-image-${car.id}`}
        />
        <div className="absolute top-4 left-4">
          <span 
            className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium"
            data-testid={`car-category-${car.id}`}
          >
            {car.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 
          className="text-2xl font-bold text-gray-900 mb-2"
          data-testid={`car-name-${car.id}`}
        >
          {car.name}
        </h3>
        <p 
          className="text-gray-600 mb-4"
          data-testid={`car-details-${car.id}`}
        >
          {car.description} • {car.doors} • {car.capacity}
        </p>
        <div className="flex items-center justify-between">
          <div>
            <span 
              className="text-3xl font-bold text-primary"
              data-testid={`car-price-${car.id}`}
            >
              {car.currency} {car.rate.toLocaleString()}
            </span>
            <span 
              className="text-gray-500 ml-2"
              data-testid={`car-duration-${car.id}`}
            >
              {car.duration}
            </span>
          </div>
          <a 
            href={whatsappUrl}
            className="magnetic-btn bg-primary text-white px-6 py-2 rounded-full font-medium"
            data-testid={`button-book-${car.id}`}
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}
