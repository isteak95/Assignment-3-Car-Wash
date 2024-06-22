export interface UserBooking {
  _id: string;
  service: {
    _id: string;
    name: string;
    description: string;
    price: number;
    duration: number;
    isDeleted: boolean;
  };
  slot: {
    _id: string;
    service: string;
    date: string;
    startTime: string;
    endTime: string;
    isBooked: string;
  };
  vehicleType: string;
  vehicleBrand: string;
  vehicleModel: string;
  manufacturingYear: number;
  registrationPlate: string;
  createdAt: string;
  updatedAt: string;
}
