import { Router } from 'express';
import { getAvailableSlotsHandler } from './AvailableSlots.controller';

const router = Router();

router.get('/availability', getAvailableSlotsHandler);

export default router;
