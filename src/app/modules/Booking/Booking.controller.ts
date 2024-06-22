import { Request, Response } from 'express';
import BookingService from './Booking.service';
import { validateBooking, validateGetAllBookings } from './Booking.validation';

class BookingController {
  async bookService(req: Request, res: Response) {
    try {
      validateBooking(req.body);
      const booking = await BookingService.bookService(req.body, req.user);
      res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'Booking successful',
        data: booking,
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  }

  async getAllBookings(req: Request, res: Response) {
    try {
      validateGetAllBookings(req.user);
      const bookings = await BookingService.getAllBookings();
      res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'All bookings retrieved successfully',
        data: bookings,
      });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  }
}

export default new BookingController();
