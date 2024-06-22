export interface IService {
  name: string;
  description: string;
  price: number;
  duration: number;
  isDeleted: boolean;
}

export interface ServiceInput {
  name: string;
  description: string;
  price: number;
  duration: number;
  isDeleted: boolean;
}

export interface ServiceResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data?: IService | IService[];
}
