import { Request, Response } from 'express';
import { getAvailableSlots } from './AvailableSlots.service';

export const getAvailableSlotsHandler = async (req: Request, res: Response) => {
  try {
    const { date, serviceId } = req.query;
    const slots = await getAvailableSlots(date as string, serviceId as string);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: 'Available slots retrieved successfully',
      data: slots,
    });
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(500).json({
      success: false,
      statusCode: 500,
      message: 'Server error',
    });
  }
};
