import { Schema, model, Document } from 'mongoose';
import { IService } from './service.interface';

const serviceSchema = new Schema<IService & Document>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: Number, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export default model<IService & Document>('Service', serviceSchema);
