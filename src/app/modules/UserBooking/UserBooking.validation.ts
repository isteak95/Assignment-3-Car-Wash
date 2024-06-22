import { z } from 'zod';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const validateGetUserBookings = (user: any) => {
  const userSchema = z.object({
    _id: z.string(),
    role: z.string(),
  });

  userSchema.parse(user);
};
