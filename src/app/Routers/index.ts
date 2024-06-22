import { Router } from 'express';
import AuthRoutes from '../modules/user/user.route';
import serviceRoutes from '../modules/Services/service.route';
import slotRoutes from '../modules/Slot/Slot.route';
import AvailableSlots from '../modules/AvailableSlots/AvailableSlots.route';
import BookingsRoutes from '../modules/Booking/Booking.route';
import BookingUserRoutes from '../modules/BookingUser/BookingUser.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/services',
    route: serviceRoutes,
  },
  {
    path: '/services',
    route: slotRoutes,
  },
  {
    path: '/slots',
    route: AvailableSlots,
  },
  {
    path: '/bookings',
    route: BookingsRoutes,
  },
  {
    path: '/my-bookings',
    route: BookingUserRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
