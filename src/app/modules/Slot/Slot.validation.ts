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

export const validateSlot = (req, res, next) => {
  try {
    slotSchema.parse(req.body);
    next();
  } catch (e) {
    res.status(400).json({
      success: false,
      statusCode: 400,
      errors: e.errors.map((err) => ({
        message: err.message,
        path: err.path,
      })),
    });
  }
};
