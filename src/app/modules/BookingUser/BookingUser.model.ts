import { UserBooking } from './BookingUser.interface';

const userBookings: UserBooking[] = []; // Simulated in-memory database

export const addUserBooking = (booking: UserBooking): UserBooking => {
  userBookings.push(booking);
  return booking;
};

export const getUserBookings = (userId: string): UserBooking[] => {
  return userBookings.filter((booking) => booking._id === userId);
};
