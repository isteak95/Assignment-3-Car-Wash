import { UserBookingInput } from './BookingUser.validation';
import { UserBooking } from './BookingUser.interface';
import { addUserBooking, getUserBookings } from './BookingUser.model';

export const createUserBooking = (
  input: UserBookingInput,
  userId: string,
): UserBooking => {
  const newUserBooking: UserBooking = {
    _id: userId,
    service: {
      _id: input.serviceId,
      name: 'Car Wash', // Mock data
      description: 'Exterior and interior car cleaning', // Mock data
      price: 50, // Mock data
      duration: 30, // Mock data
      isDeleted: false,
    },
    slot: {
      _id: input.slotId,
      service: input.serviceId,
      date: '2024-06-15', // Mock data
      startTime: '09:00', // Mock data
      endTime: '10:00', // Mock data
      isBooked: 'booked',
    },
    vehicleType: input.vehicleType,
    vehicleBrand: input.vehicleBrand,
    vehicleModel: input.vehicleModel,
    manufacturingYear: input.manufacturingYear,
    registrationPlate: input.registrationPlate,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  return addUserBooking(newUserBooking);
};

export const getUserBookingsByUserId = (userId: string): UserBooking[] => {
  return getUserBookings(userId);
};
