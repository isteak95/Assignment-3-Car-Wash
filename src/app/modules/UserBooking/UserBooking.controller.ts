import { Request, Response } from 'express';
import UserBookingService from './UserBooking.service';

class UserBookingController {
  async getUserBookings(req: Request, res: Response) {
    try {
      const userId = req.user._id;
      const bookings = await UserBookingService.getUserBookings(userId);
      if (!bookings.length) {
        return res.status(404).json({
          success: false,
          statusCode: 404,
          message: 'No Data Found',
          data: [],
        });
      }
      res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'User bookings retrieved successfully',
        data: bookings,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }
}

export default new UserBookingController();
