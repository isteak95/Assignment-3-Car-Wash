import { Schema, model } from 'mongoose';

const bookingSchema = new Schema(
  {
    customer: { type: Schema.Types.ObjectId, ref: 'User', required: true },
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

export default model('Booking', bookingSchema);
