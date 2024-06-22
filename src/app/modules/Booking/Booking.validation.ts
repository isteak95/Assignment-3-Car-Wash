// src/AvailableSlots/Booking.validation.ts

import { z } from 'zod';

export const bookingSchema = z.object({
  serviceId: z.string().nonempty({ message: 'Service ID is required' }),
  slotId: z.string().nonempty({ message: 'Slot ID is required' }),
  vehicleType: z.string().nonempty({ message: 'Vehicle type is required' }),
  vehicleBrand: z.string().nonempty({ message: 'Vehicle brand is required' }),
  vehicleModel: z.string().nonempty({ message: 'Vehicle model is required' }),
  manufacturingYear: z
    .number()
    .int()
    .min(1886, { message: 'Valid manufacturing year is required' }),
  registrationPlate: z
    .string()
    .nonempty({ message: 'Registration plate is required' }),
});

export const validateBooking = (req, res, next) => {
  try {
    bookingSchema.parse(req.body);
    next();
  } catch (e) {
    return res.status(400).json({ success: false, errors: e.errors });
  }
};
