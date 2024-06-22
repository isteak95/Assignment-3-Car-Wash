import Slot from './Slot.model';

interface CreateSlotsInput {
  service: string;
  date: string;
  startTime: string;
  endTime: string;
}

export const createSlots = async ({
  service,
  date,
  startTime,
  endTime,
}: CreateSlotsInput) => {
  const serviceDuration = 60; // Assume the service duration is 60 minutes

  // Convert times to minutes
  const start =
    parseInt(startTime.split(':')[0]) * 60 + parseInt(startTime.split(':')[1]);
  const end =
    parseInt(endTime.split(':')[0]) * 60 + parseInt(endTime.split(':')[1]);
  const totalDuration = end - start;
  const numberOfSlots = totalDuration / serviceDuration;

  const slots = [];
  for (let i = 0; i < numberOfSlots; i++) {
    const slotStart = start + i * serviceDuration;
    const slotEnd = slotStart + serviceDuration;

    const slot = new Slot({
      service,
      date,
      startTime: `${String(Math.floor(slotStart / 60)).padStart(
        2,
        '0',
      )}:${String(slotStart % 60).padStart(2, '0')}`,
      endTime: `${String(Math.floor(slotEnd / 60)).padStart(2, '0')}:${String(
        slotEnd % 60,
      ).padStart(2, '0')}`,
    });

    await slot.save();
    slots.push(slot);
  }

  return slots;
};
