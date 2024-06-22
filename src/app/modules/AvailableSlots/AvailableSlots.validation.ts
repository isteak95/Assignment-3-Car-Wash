import { z, ZodError } from 'zod';
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
  } catch (error: unknown) {
    if (error instanceof ZodError) {
      // If error is a ZodError, handle validation errors
      return res.status(400).json({
        success: false,
        statusCode: 400,
        message: 'Validation errors',
        errors: error.errors.map((err) => ({
          path: err.path.join('.'),
          message: err.message,
        })),
      });
    } else {
      // Handle other types of errors if needed
      return res.status(500).json({
        success: false,
        statusCode: 500,
        message: 'Internal server error',
        error: error instanceof Error ? error.message : 'Unknown error',
      });
    }
  }
};
