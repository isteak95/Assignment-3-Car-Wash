import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

const slotSchema = z.object({
  service: z.string().nonempty('Service ID is required'),
  date: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), 'Valid date is required'),
  startTime: z
    .string()
    .regex(/^([01]\d|2[0-3]):?([0-5]\d)$/, 'Valid start time is required'),
  endTime: z
    .string()
    .regex(/^([01]\d|2[0-3]):?([0-5]\d)$/, 'Valid end time is required'),
});

export const validateSlot = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    slotSchema.parse(req.body);
    next();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    // Handle the validation error
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const errors = e.errors.map((err: any) => ({
      message: err.message,
      path: err.path.join('.'),
    }));
    res.status(400).json({
      success: false,
      statusCode: 400,
      errors,
    });
  }
};
