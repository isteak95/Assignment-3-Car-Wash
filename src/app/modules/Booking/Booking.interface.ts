import { Document } from 'mongoose';

export interface IBooking extends Document {
  customer: string;
  service: string;
  slot: string;
  vehicleType: string;
  vehicleBrand: string;
  vehicleModel: string;
  manufacturingYear: number;
  registrationPlate: string;
  createdAt?: Date;
  updatedAt?: Date;
}
