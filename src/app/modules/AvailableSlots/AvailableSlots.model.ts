import mongoose, { Schema, Document } from 'mongoose';

interface IService {
  _id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface ISlot extends Document {
  _id: string;
  service: IService;
  date: Date;
  startTime: string;
  endTime: string;
  isBooked: string;
  createdAt: Date;
  updatedAt: Date;
}

const serviceSchema = new Schema<IService>({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: Number, required: true },
  isDeleted: { type: Boolean, required: true },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
});

const slotSchema = new Schema<ISlot>({
  _id: { type: String, required: true },
  service: { type: serviceSchema, required: true },
  date: { type: Date, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  isBooked: {
    type: String,
    enum: ['available', 'booked', 'canceled'],
    required: true,
  },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
});

const Slot = mongoose.models.Slot || mongoose.model<ISlot>('Slot', slotSchema);

export { Slot, ISlot };
