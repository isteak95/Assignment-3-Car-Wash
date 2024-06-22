import { z } from 'zod';

const ServiceSchema = z.object({
  _id: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  duration: z.number(),
  isDeleted: z.boolean(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const SlotSchema = z.object({
  _id: z.string(),
  service: ServiceSchema,
  date: z.string().datetime(),
  startTime: z.string(),
  endTime: z.string(),
  isBooked: z.enum(['available', 'booked', 'canceled']),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export type ISlot = z.infer<typeof SlotSchema>;
