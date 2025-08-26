import { z } from 'zod';

// Car schema
export const carSchema = z.object({
  id: z.string(),
  name: z.string(),
  rate: z.number(),
  currency: z.string(),
  duration: z.string(),
  category: z.string(),
  doors: z.string(),
  description: z.string(),
  image: z.string(),
  features: z.array(z.string()),
});

export const insertCarSchema = carSchema.omit({ id: true });
export type Car = z.infer<typeof carSchema>;
export type InsertCar = z.infer<typeof insertCarSchema>;

// Booking schema
export const bookingSchema = z.object({
  id: z.string(),
  customerName: z.string(),
  phone: z.string(),
  email: z.string(),
  carId: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  message: z.string().optional(),
  status: z.enum(['pending', 'confirmed', 'completed', 'cancelled']),
  createdAt: z.string(),
});

export const insertBookingSchema = bookingSchema.omit({ 
  id: true, 
  status: true, 
  createdAt: true 
});

export type Booking = z.infer<typeof bookingSchema>;
export type InsertBooking = z.infer<typeof insertBookingSchema>;