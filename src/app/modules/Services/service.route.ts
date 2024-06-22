import express from 'express';
import {
  createServiceController,
  getServiceController,
  getAllServicesController,
  updateServiceController,
  deleteServiceController,
} from './service.controller';
import { authenticateJWT, checkAdmin } from '../../middlewares/auth.middleware';

const router = express.Router();

router.post('/', authenticateJWT, checkAdmin, createServiceController);
router.get('/:id', getServiceController);
router.get('/', getAllServicesController);
router.put('/:id', authenticateJWT, checkAdmin, updateServiceController);
router.delete('/:id', authenticateJWT, checkAdmin, deleteServiceController);

export default router;
