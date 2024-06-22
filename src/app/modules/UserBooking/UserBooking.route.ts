import { Router } from 'express';
import UserBookingController from './UserBooking.controller';
import { authenticateJWT, checkUser } from '../../middlewares/auth.middleware';

const router = Router();

router.get(
  '/my-bookings',
  authenticateJWT,
  checkUser,
  UserBookingController.getUserBookings,
);

export default router;
