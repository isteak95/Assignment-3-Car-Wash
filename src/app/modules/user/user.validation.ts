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

export const validateSignUp = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    signUpSchema.parse(req.body);
    next();
  } catch (error) {
    res.status(400).json({ success: false, message: error.errors });
  }
};

export const validateLogin = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    loginSchema.parse(req.body);
    next();
  } catch (error) {
    res.status(400).json({ success: false, message: error.errors });
  }
};
