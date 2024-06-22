import { Document } from 'mongoose';

export interface IUserBooking extends Document {
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
