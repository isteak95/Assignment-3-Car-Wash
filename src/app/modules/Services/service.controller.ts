import { Request, Response } from 'express';
import {
  createService,
  getServiceById,
  getAllServices,
  updateService,
  deleteService,
} from './service.service';
import { ServiceInput } from './service.interface';

export const createServiceController = async (req: Request, res: Response) => {
  const serviceData: ServiceInput = req.body;
  const response = await createService(serviceData);
  res.status(response.statusCode).json(response);
};

export const getServiceController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const response = await getServiceById(id);
  res.status(response.statusCode).json(response);
};

export const getAllServicesController = async (req: Request, res: Response) => {
  const response = await getAllServices();
  res.status(response.statusCode).json(response);
};

export const updateServiceController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const serviceData = req.body;
  const response = await updateService(id, serviceData);
  res.status(response.statusCode).json(response);
};

export const deleteServiceController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const response = await deleteService(id);
    res.status(response.statusCode).json(response);
  } catch (error) {
    console.error('Error in deleteServiceController:', error);
    res.status(500).json({
      success: false,
      statusCode: 500,
      message: 'Internal server error',
    });
  }
};
