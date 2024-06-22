import mongoose, { Document, Schema } from 'mongoose';

export interface ISlot extends Document {
  service: string;
  date: string;
  startTime: string;
  endTime: string;
  isBooked: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const SlotSchema: Schema = new Schema(
  {
    service: { type: Schema.Types.ObjectId, ref: 'Service', required: true },
    date: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    isBooked: { type: String, default: 'available' },
  },
  { timestamps: true },
);

export default mongoose.model<ISlot>('Slot', SlotSchema);
