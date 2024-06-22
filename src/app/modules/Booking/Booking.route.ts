// src/AvailableSlots/Booking.route.ts

import { Router } from 'express';
import { BookingController } from './Booking.controller';
import { validateBooking } from './Booking.validation';
// import { authenticateToken } from '../../middlewares/authMiddleware';

const router = Router();
const bookingController = new BookingController();

router.post(
  '/',

  validateBooking,
  bookingController.createBooking,
);

export default router;
