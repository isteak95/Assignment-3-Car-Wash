import { Router } from 'express';
import BookingController from './Booking.controller';
import {
  authenticateJWT,
  checkUser,
  checkAdmin,
} from '../../middlewares/auth.middleware';

const router = Router();

router.post('/', authenticateJWT, checkUser, BookingController.bookService);
router.get('/', authenticateJWT, checkAdmin, BookingController.getAllBookings);

export default router;
