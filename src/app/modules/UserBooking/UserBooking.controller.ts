import { AuthenticatedRequest } from './AuthenticatedRequest'; // Assuming you named the file AuthenticatedRequest.ts
import { Response } from 'express';
import UserBookingService from './UserBooking.service';

class UserBookingController {
  async getUserBookings(req: AuthenticatedRequest, res: Response) {
    try {
      // Check if req.user is defined
      const userId = req.user?._id; // Use optional chaining to avoid errors if req.user is undefined
      if (!userId) {
        return res.status(401).json({
          success: false,
          statusCode: 401,
          message: 'Unauthorized access',
        });
      }

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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error('Error in getUserBookings:', error); // Log the error for debugging

      // Handle error and send response
      res.status(500).json({
        success: false,
        message: error.message || 'Internal Server Error',
      });
    }
  }
}

export default new UserBookingController();
