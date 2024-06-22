import { Request, Response } from 'express';
import BookingService from './Booking.service';
import { validateBooking, validateGetAllBookings } from './Booking.validation';

class BookingController {
  async bookService(req: Request, res: Response) {
    try {
      validateBooking(req.body);
      const booking = await BookingService.bookService(req.body, req);
      res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'Booking successful',
        data: booking,
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // Handle specific errors or return a generic error message
      const errorMessage = error.message || 'Something went wrong';
      res.status(400).json({ success: false, message: errorMessage });
    }
  }

  async getAllBookings(req: Request, res: Response) {
    try {
      validateGetAllBookings(req);
      const bookings = await BookingService.getAllBookings();
      res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'All bookings retrieved successfully',
        data: bookings,
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // Handle specific errors or return a generic error message
      const errorMessage = error.message || 'Something went wrong';
      res.status(400).json({ success: false, message: errorMessage });
    }
  }
}

export default new BookingController();
