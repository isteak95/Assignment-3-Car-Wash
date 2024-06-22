import BookingModel from './Booking.model';
import SlotModel from '../Slot/Slot.model';
import mongoose from 'mongoose';

class BookingService {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async bookService(data: any, user: any) {
    console.log('Booking data:', data);
    console.log('User data:', user);

    const booking = new BookingModel({
      customer: new mongoose.Types.ObjectId(user._id),
      service: new mongoose.Types.ObjectId(data.serviceId),
      slot: new mongoose.Types.ObjectId(data.slotId),
      vehicleType: data.vehicleType,
      vehicleBrand: data.vehicleBrand,
      vehicleModel: data.vehicleModel,
      manufacturingYear: data.manufacturingYear,
      registrationPlate: data.registrationPlate,
    });

    await booking.save();
    await SlotModel.findByIdAndUpdate(data.slotId, { isBooked: 'booked' });

    return BookingModel.findById(booking._id)
      .populate('customer')
      .populate('service')
      .populate('slot');
  }

  async getAllBookings() {
    return BookingModel.find()
      .populate('customer')
      .populate('service')
      .populate('slot');
  }
}

export default new BookingService();
