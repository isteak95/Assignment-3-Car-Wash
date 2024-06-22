import UserBooking from './UserBooking.model';

class UserBookingService {
  async getUserBookings(userId: string) {
    return UserBooking.find({ customer: userId })
      .populate('customer')
      .populate('service')
      .populate('slot');
  }
}

export default new UserBookingService();
