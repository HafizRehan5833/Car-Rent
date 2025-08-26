import { Request, Response } from 'express';
import { IStorage } from './storage';
import { insertBookingSchema } from '../shared/schema';

export function setupRoutes(app: any, storage: IStorage) {
  // Get all cars
  app.get('/api/cars', async (req: Request, res: Response) => {
    try {
      const cars = await storage.getCars();
      res.json(cars);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch cars' });
    }
  });

  // Get car by ID
  app.get('/api/cars/:id', async (req: Request, res: Response) => {
    try {
      const car = await storage.getCarById(req.params.id);
      if (!car) {
        return res.status(404).json({ error: 'Car not found' });
      }
      res.json(car);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch car' });
    }
  });

  // Create booking with WhatsApp notification
  app.post('/api/bookings', async (req: Request, res: Response) => {
    try {
      const validatedData = insertBookingSchema.parse(req.body);
      const booking = await storage.createBooking(validatedData);
      
      // Get car details for WhatsApp message
      const car = await storage.getCarById(booking.carId);
      
      // Prepare WhatsApp message
      const whatsappMessage = `🚗 New Car Rental Booking!
      
📋 Booking Details:
Customer: ${booking.customerName}
Phone: ${booking.phone}
Email: ${booking.email}
Car: ${car?.name || 'Unknown'}
Rate: ${car?.rate} ${car?.currency} ${car?.duration}
Start Date: ${booking.startDate}
End Date: ${booking.endDate}
${booking.message ? `Message: ${booking.message}` : ''}

Please contact the customer to confirm the booking.`;

      // Create WhatsApp link
      const whatsappNumber = '923019201234'; // Your WhatsApp number
      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      res.json({ 
        booking, 
        whatsappUrl,
        success: true,
        message: 'Booking created successfully! Please click the WhatsApp link to notify the owner.'
      });
    } catch (error) {
      console.error('Booking error:', error);
      res.status(400).json({ error: 'Invalid booking data' });
    }
  });

  // Get all bookings
  app.get('/api/bookings', async (req: Request, res: Response) => {
    try {
      const bookings = await storage.getBookings();
      res.json(bookings);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch bookings' });
    }
  });
}