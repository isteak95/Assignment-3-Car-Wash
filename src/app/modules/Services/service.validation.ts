import { Request, Response, NextFunction } from 'express';
import { object, string, number, boolean } from 'zod';

const serviceSchema = object({
  name: string().min(3),
  description: string().min(10),
  price: number().min(0),
  duration: number().min(0),
  isDeleted: boolean().optional(),
});

export const validateService = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    serviceSchema.parse(req.body);
    next();
  } catch (error) {
    res.status(400).json({ success: false, message: error.errors });
  }
};
