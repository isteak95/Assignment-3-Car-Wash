import { Schema, model, Document } from 'mongoose';
import { IUser } from './user.interface';

const userSchema = new Schema<IUser & Document>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    role: { type: String, required: true, enum: ['admin', 'user'] },
    address: { type: String, required: true },
  },
  { timestamps: true },
);

export default model<IUser & Document>('User', userSchema);
