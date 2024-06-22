import { Request, Response } from 'express';
import {
  createUserBooking,
  getUserBookingsByUserId,
} from './BookingUser.service';
import { userBookingSchema } from './BookingUser.validation';

export const bookUserService = (req: Request, res: Response) => {
  try {
    const userId = req.user.id; // Assuming the user ID is attached to the request object by the auth middleware
    const validatedInput = userBookingSchema.parse(req.body);
    const newUserBooking = createUserBooking(validatedInput, userId);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Booking successful',
      data: newUserBooking,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      statusCode: 400,
      message: error.errors || 'Invalid request data',
    });
  }
};

export const getUserBookings = (req: Request, res: Response) => {
  const userId = req.user.id; // Assuming the user ID is attached to the request object by the auth middleware
  const bookings = getUserBookingsByUserId(userId);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: 'User bookings retrieved successfully',
    data: bookings,
  });
};
