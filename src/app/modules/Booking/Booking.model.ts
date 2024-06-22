// src/AvailableSlots/Booking.model.ts

import mongoose, { Schema } from 'mongoose';
import { IBooking } from './Booking.interface';

const BookingSchema: Schema = new Schema(
  {
    service: { type: Schema.Types.ObjectId, ref: 'Service', required: true },
    slot: { type: Schema.Types.ObjectId, ref: 'Slot', required: true },
    vehicleType: { type: String, required: true },
    vehicleBrand: { type: String, required: true },
    vehicleModel: { type: String, required: true },
    manufacturingYear: { type: Number, required: true },
    registrationPlate: { type: String, required: true },
  },
  { timestamps: true },
);

export default mongoose.model<IBooking>('Booking', BookingSchema);
