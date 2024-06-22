import { z } from 'zod';
import { Request, Response, NextFunction } from 'express';

const getAvailableSlotsSchema = z.object({
  query: z.object({
    date: z.string().optional(),
    serviceId: z.string().optional(),
  }),
});

export const validateGetAvailableSlots = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    getAvailableSlotsSchema.parse({
      query: req.query,
    });
    next();
  } catch (error) {
    return res.status(400).json({
      success: false,
      statusCode: 400,
      message: 'Validation errors',
      errors: error.errors,
    });
  }
};
