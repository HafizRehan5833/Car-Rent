import { type User, type InsertUser, type Car, type InsertCar, type Booking, type InsertBooking } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Car methods
  getAllCars(): Promise<Car[]>;
  getCarById(id: string): Promise<Car | undefined>;
  createCar(car: InsertCar): Promise<Car>;
  
  // Booking methods
  createBooking(booking: InsertBooking): Promise<Booking>;
  getBookingsByCarId(carId: string): Promise<Booking[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private cars: Map<string, Car>;
  private bookings: Map<string, Booking>;

  constructor() {
    this.users = new Map();
    this.cars = new Map();
    this.bookings = new Map();
    
    // Initialize with fleet data
    this.initializeFleetData();
  }

  private initializeFleetData() {
    const fleetData: InsertCar[] = [
      {
  name: "Hyundai Accent 2024",
  category: "Compact",
  rate: 150,
  currency: "AED",
  duration: "Per day",
  description: "Perfect for city driving",
  doors: "4-5 doors",
  capacity: "5 passengers",
  imageUrl: "https://www.motortrend.com/uploads/sites/5/2020/08/2021-hyundai-accent-09.jpg",
  available: 1
}
,
 {
  name: "Hyundai Creta",
  category: "SUV", 
  rate: 150,
  currency: "AED",
  duration: "Per day",
  description: "Family & adventure ready",
  doors: "4-5 doors",
  capacity: "7 passengers",
  imageUrl: "https://www.motortrend.com/uploads/f/127318022.jpg"
}
,
{
  name: "Kia Pegas 2024",
  category: "Economy",
  rate: 110,
  currency: "AED", 
  duration: "Daily",
  description: "Efficient & reliable",
  doors: "4-5 doors",
  capacity: "5 passengers",
  imageUrl: "https://www.motortrend.com/uploads/2023/08/2024-Kia-Sportage-X-Pro-AWD-Prestige-front-view-29.jpg?w=640&width=640&q=75&format=webp",
  available: 1
}
     
,
{
  name: "Toyota Raize",
  category: "Compact SUV",
  rate: 150,
  currency: "AED",
  duration: "Per day", 
  description: "Urban mobility",
  doors: "4-5 doors",
  capacity: "5 passengers",
  imageUrl: "https://www.motortrend.com/uploads/2021/12/2022-Toyota-Raize-1.jpg",
  available: 1
}
      
,
      {
  name: "Toyota Yaris 2024",
  category: "Compact",
  rate: 180,
  currency: "AED",
  duration: "Per day",
  description: "Eco-friendly and efficient",
  doors: "4-5 doors",
  capacity: "5 passengers",
  imageUrl: "https://www.motortrend.com/files/6736958c3f9abd0008bdef3c/015-2025-toyota-prius-limited-fwd-front-view.jpg?w=640&width=640&q=75&format=webp",
  available: 1
}
,
    {
  name: "Corolla 2023",
  category: "Sedan",
  rate: 150,
  currency: "AED",
  duration: "Daily",
  description: "Business preferred",
  doors: "4 doors",
  capacity: "5 passengers", 
  imageUrl: "https://s1.cdn.autoevolution.com/images/gallery/toyota-corolla-eu-2022-7422_10.jpg",
  available: 1
}
 ,
      {
        name: "Accent 2023", 
        category: "Compact",
        rate: 2400,
        currency: "AED",
        duration: "Monthly",
        description: "Monthly rental package",
        doors: "4 doors",
        capacity: "5 passengers",
        imageUrl: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        available: 1
      },
      {
        name: "Sunny 2023",
        category: "Sedan", 
        rate: 1800,
        currency: "AED",
        duration: "Monthly",
        description: "Monthly rental package",
        doors: "4 doors",
        capacity: "5 passengers",
        imageUrl: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        available: 1
      },
      {
        name: "Elantra 2023",
        category: "Sedan",
        rate: 150, 
        currency: "AED",
        duration: "Daily",
        description: "Premium comfort",
        doors: "4 doors",
        capacity: "5 passengers",
        imageUrl: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        available: 1
      }
    ];

    fleetData.forEach(car => this.createCar(car));
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllCars(): Promise<Car[]> {
    return Array.from(this.cars.values());
  }

  async getCarById(id: string): Promise<Car | undefined> {
    return this.cars.get(id);
  }

  async createCar(insertCar: InsertCar): Promise<Car> {
    const id = randomUUID();
    const car: Car = { 
      ...insertCar, 
      id, 
      createdAt: new Date() 
    };
    this.cars.set(id, car);
    return car;
  }

  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const id = randomUUID();
    const booking: Booking = { 
      ...insertBooking, 
      id, 
      createdAt: new Date() 
    };
    this.bookings.set(id, booking);
    return booking;
  }

  async getBookingsByCarId(carId: string): Promise<Booking[]> {
    return Array.from(this.bookings.values()).filter(
      booking => booking.carId === carId
    );
  }
}

export const storage = new MemStorage();
