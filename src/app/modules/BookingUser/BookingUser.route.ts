import { Router } from 'express';
import { getUserBookings } from './BookingUser.controller';

const router = Router();

router.get('/', getUserBookings);

export default router;
