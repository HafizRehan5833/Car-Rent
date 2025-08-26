import { Car, InsertCar, Booking, InsertBooking } from '../shared/schema';

export interface IStorage {
  // Car operations
  getCars(): Promise<Car[]>;
  getCarById(id: string): Promise<Car | null>;
  createCar(car: InsertCar): Promise<Car>;
  updateCar(id: string, car: Partial<InsertCar>): Promise<Car | null>;
  deleteCar(id: string): Promise<boolean>;

  // Booking operations
  getBookings(): Promise<Booking[]>;
  getBookingById(id: string): Promise<Booking | null>;
  createBooking(booking: InsertBooking): Promise<Booking>;
  updateBooking(id: string, booking: Partial<InsertBooking>): Promise<Booking | null>;
  deleteBooking(id: string): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private cars: Car[] = [
    {
      id: '1',
      name: 'Hyundai Accent 2024',
      rate: 150,
      currency: 'AED',
      duration: 'Per day',
      category: 'Compact',
      doors: '4-5 doors',
      description: 'Perfect for city driving with excellent fuel efficiency and modern features',
      image: '@assets/WhatsApp Image 2025-08-26 at 20.20.15_48364618_1756222277342.jpg',
      features: ['Air Conditioning', 'Bluetooth', 'USB Ports', 'Power Steering']
    },
    {
      id: '2',
      name: 'Hyundai Creta',
      rate: 150,
      currency: 'AED',
      duration: 'Per day',
      category: 'SUV',
      doors: '4-5 doors',
      description: 'Family & adventure ready SUV with spacious interior and advanced safety features',
      image: '@assets/WhatsApp Image 2025-08-26 at 20.20.15_48364618_1756222277342.jpg',
      features: ['All-Wheel Drive', 'Panoramic Sunroof', 'Cruise Control', 'Parking Sensors']
    },
    {
      id: '3',
      name: 'Kia Pegas 2024',
      rate: 110,
      currency: 'AED',
      duration: 'Daily',
      category: 'Economy',
      doors: '4-5 doors',
      description: 'Efficient and reliable economy car perfect for budget-conscious travelers',
      image: '@assets/WhatsApp Image 2025-08-26 at 20.20.15_48364618_1756222277342.jpg',
      features: ['Fuel Efficient', 'Digital Display', 'Remote Keyless Entry', 'ABS Brakes']
    },
    {
      id: '4',
      name: 'Toyota Raize',
      rate: 150,
      currency: 'AED',
      duration: 'Per day',
      category: 'Compact SUV',
      doors: '4-5 doors',
      description: 'Compact SUV combining urban agility with off-road capability',
      image: '@assets/WhatsApp Image 2025-08-26 at 20.20.15_48364618_1756222277342.jpg',
      features: ['Smart Entry', 'Push Start', 'Hill Start Assist', 'LED Headlights']
    },
    {
      id: '5',
      name: 'Yaris 2024',
      rate: 130,
      currency: 'AED',
      duration: 'Daily',
      category: 'Compact',
      doors: '4-5 doors',
      description: 'Modern compact car with premium interior and advanced technology',
      image: '@assets/WhatsApp Image 2025-08-26 at 20.20.15_48364618_1756222277342.jpg',
      features: ['Toyota Safety Sense', 'Wireless Charging', 'Apple CarPlay', 'Android Auto']
    },
    {
      id: '6',
      name: 'Accent 2023',
      rate: 2400,
      currency: 'AED',
      duration: 'Monthly',
      category: 'Compact',
      doors: '4-5 doors',
      description: 'Long-term rental option with excellent reliability and comfort',
      image: '@assets/WhatsApp Image 2025-08-26 at 20.19.54_a6045abe_1756222277343.jpg',
      features: ['Extended Warranty', 'Maintenance Included', 'Roadside Assistance', '24/7 Support']
    },
    {
      id: '7',
      name: 'Corolla 2023',
      rate: 150,
      currency: 'AED',
      duration: 'Daily',
      category: 'Sedan',
      doors: '4 doors',
      description: 'Reliable and comfortable sedan ideal for business and leisure travel',
      image: '@assets/WhatsApp Image 2025-08-26 at 20.19.54_a6045abe_1756222277343.jpg',
      features: ['Hybrid Engine', 'Lane Keeping Assist', 'Adaptive Cruise Control', 'Premium Audio']
    },
    {
      id: '8',
      name: 'Kia Pegas 2024',
      rate: 2550,
      currency: 'AED',
      duration: 'Monthly',
      category: 'Economy',
      doors: '4-5 doors',
      description: 'Monthly rental option with comprehensive insurance and maintenance',
      image: '@assets/WhatsApp Image 2025-08-26 at 20.19.54_a6045abe_1756222277343.jpg',
      features: ['Full Insurance', 'Monthly Maintenance', 'Emergency Support', 'Flexible Terms']
    },
    {
      id: '9',
      name: 'Sunny 2023',
      rate: 1800,
      currency: 'AED',
      duration: 'Monthly',
      category: 'Sedan',
      doors: '4 doors',
      description: 'Affordable monthly option with proven reliability and low running costs',
      image: '@assets/WhatsApp Image 2025-08-26 at 20.19.54_a6045abe_1756222277343.jpg',
      features: ['Low Fuel Consumption', 'Spacious Interior', 'Digital Cluster', 'Power Windows']
    },
    {
      id: '10',
      name: 'Elantra 2023',
      rate: 150,
      currency: 'AED',
      duration: 'Daily',
      category: 'Sedan',
      doors: '4 doors',
      description: 'Premium sedan with cutting-edge technology and sophisticated design',
      image: '@assets/WhatsApp Image 2025-08-26 at 20.19.54_a6045abe_1756222277343.jpg',
      features: ['Smart Trunk', 'Wireless CarPlay', 'Premium Sound', 'Heated Seats']
    }
  ];

  private bookings: Booking[] = [];

  async getCars(): Promise<Car[]> {
    return [...this.cars];
  }

  async getCarById(id: string): Promise<Car | null> {
    return this.cars.find(car => car.id === id) || null;
  }

  async createCar(car: InsertCar): Promise<Car> {
    const newCar: Car = {
      ...car,
      id: Date.now().toString()
    };
    this.cars.push(newCar);
    return newCar;
  }

  async updateCar(id: string, updates: Partial<InsertCar>): Promise<Car | null> {
    const index = this.cars.findIndex(car => car.id === id);
    if (index === -1) return null;
    
    this.cars[index] = { ...this.cars[index], ...updates };
    return this.cars[index];
  }

  async deleteCar(id: string): Promise<boolean> {
    const index = this.cars.findIndex(car => car.id === id);
    if (index === -1) return false;
    
    this.cars.splice(index, 1);
    return true;
  }

  async getBookings(): Promise<Booking[]> {
    return [...this.bookings];
  }

  async getBookingById(id: string): Promise<Booking | null> {
    return this.bookings.find(booking => booking.id === id) || null;
  }

  async createBooking(booking: InsertBooking): Promise<Booking> {
    const newBooking: Booking = {
      ...booking,
      id: Date.now().toString(),
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    this.bookings.push(newBooking);
    return newBooking;
  }

  async updateBooking(id: string, updates: Partial<InsertBooking>): Promise<Booking | null> {
    const index = this.bookings.findIndex(booking => booking.id === id);
    if (index === -1) return null;
    
    this.bookings[index] = { ...this.bookings[index], ...updates };
    return this.bookings[index];
  }

  async deleteBooking(id: string): Promise<boolean> {
    const index = this.bookings.findIndex(booking => booking.id === id);
    if (index === -1) return false;
    
    this.bookings.splice(index, 1);
    return true;
  }
}