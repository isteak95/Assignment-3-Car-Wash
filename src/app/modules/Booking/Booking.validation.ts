import { z } from 'zod';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const validateBooking = (data: any) => {
  const bookingSchema = z.object({
    serviceId: z.string(),
    slotId: z.string(),
    vehicleType: z.string(),
    vehicleBrand: z.string(),
    vehicleModel: z.string(),
    manufacturingYear: z.number(),
    registrationPlate: z.string(),
  });

  bookingSchema.parse(data);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const validateGetAllBookings = (user: any) => {
  if (!user || user.role !== 'admin') {
    throw new Error('Unauthorized access');
  }
};
