import { ServiceInput, ServiceResponse } from './service.interface';
import Service from './service.model';

export const createService = async (
  serviceData: ServiceInput,
): Promise<ServiceResponse> => {
  try {
    const newService = await Service.create(serviceData);
    return {
      success: true,
      statusCode: 200,
      message: 'Service created successfully',
      data: newService,
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return {
      success: false,
      statusCode: 500,
      message: error.message || 'Internal server error',
    };
  }
};

export const getServiceById = async (id: string): Promise<ServiceResponse> => {
  try {
    const service = await Service.findById(id);
    if (!service) {
      return {
        success: false,
        statusCode: 404,
        message: 'Service not found',
      };
    }
    return {
      success: true,
      statusCode: 200,
      message: 'Service retrieved successfully',
      data: service,
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return {
      success: false,
      statusCode: 500,
      message: error.message || 'Internal server error',
    };
  }
};

export const getAllServices = async (): Promise<ServiceResponse> => {
  try {
    const services = await Service.find({ isDeleted: false });
    return {
      success: true,
      statusCode: 200,
      message: 'Services retrieved successfully',
      data: services,
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return {
      success: false,
      statusCode: 500,
      message: error.message || 'Internal server error',
    };
  }
};

export const updateService = async (
  id: string,
  serviceData: Partial<ServiceInput>,
): Promise<ServiceResponse> => {
  try {
    const updatedService = await Service.findByIdAndUpdate(id, serviceData, {
      new: true,
    });
    if (!updatedService) {
      return {
        success: false,
        statusCode: 404,
        message: 'Service not found',
      };
    }
    return {
      success: true,
      statusCode: 200,
      message: 'Service updated successfully',
      data: updatedService,
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return {
      success: false,
      statusCode: 500,
      message: error.message || 'Internal server error',
    };
  }
};

export const deleteService = async (id: string): Promise<ServiceResponse> => {
  try {
    const deletedService = await Service.findByIdAndDelete(id);

    if (!deletedService) {
      return {
        success: false,
        statusCode: 404,
        message: 'Service not found',
      };
    }

    // Log the deleted service for debugging purposes
    console.log('Deleted Service:', deletedService);

    return {
      success: true,
      statusCode: 200,
      message: 'Service deleted successfully',
      data: deletedService,
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // Log the error for debugging purposes
    console.error('Error deleting service:', error);

    return {
      success: false,
      statusCode: 500,
      message: error.message || 'Internal server error',
    };
  }
};
