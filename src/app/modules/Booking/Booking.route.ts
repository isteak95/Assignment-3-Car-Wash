import { Router } from 'express';
import BookingController from './Booking.controller';
import {
  authenticateJWT,
  checkUser,
  checkAdmin,
} from '../../middlewares/auth.middleware';

const router = Router();

// POST /api/bookings - Create a new booking
router.post('/', authenticateJWT, checkUser, BookingController.bookService);

// GET /api/bookings - Get all bookings
router.get('/', authenticateJWT, checkAdmin, BookingController.getAllBookings);

export default router;
