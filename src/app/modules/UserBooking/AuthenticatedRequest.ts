import { Request } from 'express';

export interface AuthenticatedRequest extends Request {
  user?: { _id: string }; // Define the structure of the user object if it exists
}
