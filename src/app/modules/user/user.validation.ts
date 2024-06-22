import { Request, Response, NextFunction } from 'express';
import { object, string } from 'zod';

const signUpSchema = object({
  name: string().min(3),
  email: string().email(),
  password: string().min(6),
  phone: string().min(10),
  role: string().refine((role) => ['admin', 'user'].includes(role), {
    message: "Role must be either 'admin' or 'user'",
  }),
  address: string().min(10),
});

const loginSchema = object({
  email: string().email(),
  password: string().min(6),
});

export const validateSignUp = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    signUpSchema.parse(req.body);
    next();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(400).json({ success: false, message: formatZodError(error) });
  }
};

export const validateLogin = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    loginSchema.parse(req.body);
    next();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(400).json({ success: false, message: formatZodError(error) });
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
