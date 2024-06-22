import { z } from 'zod';

export const userBookingSchema = z.object({
  serviceId: z.string(),
  slotId: z.string(),
  vehicleType: z.string(),
  vehicleBrand: z.string(),
  vehicleModel: z.string(),
  manufacturingYear: z.number().int(),
  registrationPlate: z.string(),
});

export type UserBookingInput = z.infer<typeof userBookingSchema>;
