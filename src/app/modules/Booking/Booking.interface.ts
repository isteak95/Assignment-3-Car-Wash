// src/AvailableSlots/Booking.interface.ts

import { Document } from 'mongoose';

export interface IBooking extends Document {
  service: string;
  slot: string;
  vehicleType: string;
  vehicleBrand: string;
  vehicleModel: string;
  manufacturingYear: number;
  registrationPlate: string;
  createdAt: Date;
  updatedAt: Date;
}
