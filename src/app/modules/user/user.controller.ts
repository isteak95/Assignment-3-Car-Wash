import { Request, Response } from 'express';
import { signUp, login } from './user.service';
import { SignUpInput, LoginInput } from './user.interface';

export const signUpController = async (req: Request, res: Response) => {
  const userData: SignUpInput = req.body;
  const response = await signUp(userData);
  res.status(response.statusCode).json(response);
};

export const loginController = async (req: Request, res: Response) => {
  const loginData: LoginInput = req.body;
  const response = await login(loginData);
  res.status(response.statusCode).json(response);
};
