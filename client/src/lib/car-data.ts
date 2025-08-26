export interface CarData {
  id: string;
  name: string;
  category: string;
  rate: number;
  currency: string;
  duration: string;
  description: string;
  doors: string;
  capacity: string;
  imageUrl: string;
  available: number;
}

export const whatsappNumber = "+971503019201234";

export const getWhatsAppBookingUrl = (carName: string) => {
  const message = encodeURIComponent(`I'm interested in booking ${carName}. Please provide more details.`);
  return `https://wa.me/${whatsappNumber}?text=${message}`;
};

export const formatPrice = (rate: number, currency: string, duration: string) => {
  return `${currency} ${rate.toLocaleString()} ${duration}`;
};
