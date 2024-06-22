// src/AvailableSlots/Booking.controller.ts

import { Request, Response } from 'express';
import { BookingService } from './Booking.service';
import { bookingSchema } from './Booking.validation';

const bookingService = new BookingService();

interface AuthenticatedRequest extends Request {
  user?: any;
}

export class BookingController {
  public async createBooking(
    req: AuthenticatedRequest,
    res: Response,
  ): Promise<void> {
    try {
      bookingSchema.parse(req.body); // Validate the request body using Zod

      const {
        serviceId,
        slotId,
        vehicleType,
        vehicleBrand,
        vehicleModel,
        manufacturingYear,
        registrationPlate,
      } = req.body;

      const bookingData = {
        service: serviceId,
        slot: slotId,
        vehicleType,
        vehicleBrand,
        vehicleModel,
        manufacturingYear,
        registrationPlate,
      };

      const newBooking = await bookingService.createBooking(bookingData);

      res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'Booking successful',
        data: newBooking,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
}
