import { Slot } from './AvailableSlots.model';

export const getAvailableSlots = async (date?: string, serviceId?: string) => {
  const query: any = {};

  if (date) {
    query.date = new Date(date); // Ensure the date is in the correct format
  }

  if (serviceId) {
    query['service._id'] = serviceId; // Ensure the serviceId is in the correct format
  }

  console.log('Query:', query); // Add logging

  const slots = await Slot.find(query).exec();
  console.log('Slots:', slots); // Add logging

  return slots;
};
