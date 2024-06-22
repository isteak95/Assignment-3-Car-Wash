import { Request, Response, NextFunction } from 'express';
import { object, string, number, boolean } from 'zod';

const serviceSchema = object({
  name: string().min(3),
  description: string().min(10),
  price: number().min(0),
  duration: number().min(0),
  isDeleted: boolean().optional(),
});

export const validateService = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    serviceSchema.parse(req.body);
    next();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    const errorMessage = formatZodError(error);
    res.status(400).json({ success: false, message: errorMessage });
  }
};

// Helper function to format Zod validation errors
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const formatZodError = (error: any) => {
  if (error?.format && typeof error.format === 'function') {
    // Use Zod's format method to get formatted error messages
    return error.format();
  } else if (error.message) {
    // Fall back to returning the error message if available
    return error.message;
  } else {
    // Default error message for unexpected errors
    return 'Invalid request body';
  }
};
