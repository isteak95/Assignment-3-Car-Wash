import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';

// Custom type definition for request to include user
interface AuthenticatedRequest extends Request {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user?: any;
}

export const authenticateJWT = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, config.jwt_secret as string, (err, user) => {
      if (err) {
        console.error('JWT verification failed:', err);
        return res.sendStatus(403);
      }

      console.log('JWT payload:', user); // Log the payload for debugging
      req.user = user; // Attach the user object to the request
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

export const checkAdmin = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).send({
      success: false,
      statusCode: 401,
      message: 'You have no access to this route',
    });
  }
};

export const checkUser = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  if (req.user && req.user.role === 'user') {
    next(); // Proceed to the next middleware or route handler
  } else {
    res.status(403).send({
      success: false,
      statusCode: 403,
      message: 'You have no access to this route',
    });
  }
};
