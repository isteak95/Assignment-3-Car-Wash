import { z } from 'zod';

export const validateGetUserBookings = (user: any) => {
  const userSchema = z.object({
    _id: z.string(),
    role: z.string(),
  });

  userSchema.parse(user);
};
