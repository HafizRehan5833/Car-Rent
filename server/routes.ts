import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBookingSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Get all available cars
  app.get("/api/fleet", async (req, res) => {
    try {
      const cars = await storage.getAllCars();
      res.json(cars);
    } catch (error) {
      console.error("Error fetching cars:", error);
      res.status(500).json({ error: "Failed to fetch cars" });
    }
  });

  // Get specific car by ID
  app.get("/api/fleet/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const car = await storage.getCarById(id);
      
      if (!car) {
        return res.status(404).json({ error: "Car not found" });
      }
      
      res.json(car);
    } catch (error) {
      console.error("Error fetching car:", error);
      res.status(500).json({ error: "Failed to fetch car" });
    }
  });

  // Create a new booking
  app.post("/api/bookings", async (req, res) => {
    try {
      // Validate request body
      const bookingData = insertBookingSchema.parse(req.body);
      
      // Check if car exists and is available
      const car = await storage.getCarById(bookingData.carId);
      if (!car) {
        return res.status(404).json({ error: "Car not found" });
      }
      
      if (!car.available) {
        return res.status(400).json({ error: "Car is not available" });
      }
      
      // Create booking
      const booking = await storage.createBooking(bookingData);
      
      res.status(201).json({ 
        message: "Booking created successfully", 
        booking,
        whatsappUrl: `https://wa.me/+923019201234?text=Booking confirmed for ${car.name}. Booking ID: ${booking.id}`
      });
    } catch (error) {
      console.error("Error creating booking:", error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          error: "Invalid booking data", 
          details: error.errors 
        });
      }
      
      res.status(500).json({ error: "Failed to create booking" });
    }
  });

  // Get bookings for a specific car
  app.get("/api/bookings/car/:carId", async (req, res) => {
    try {
      const { carId } = req.params;
      const bookings = await storage.getBookingsByCarId(carId);
      res.json(bookings);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      res.status(500).json({ error: "Failed to fetch bookings" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
