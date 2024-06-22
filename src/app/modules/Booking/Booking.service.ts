// src/AvailableSlots/Booking.service.ts

import BookingModel from './Booking.model';
import SlotModel from '../Slot/Slot.model'; // Import Slot model for updating slot status
import { IBooking } from './Booking.interface';

export class BookingService {
  public async createBooking(bookingData: IBooking): Promise<IBooking> {
    const booking = new BookingModel(bookingData);

    // Save the booking
    const newBooking = await booking.save();

    // Update the slot status to 'booked'
    await SlotModel.findByIdAndUpdate(bookingData.slot, { isBooked: 'booked' });

    return newBooking;
  }
}
