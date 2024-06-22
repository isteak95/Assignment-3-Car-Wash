import { Router } from 'express';
import { createSlotsHandler } from './Slot.controller';
import { authenticateJWT, checkAdmin } from '../../middlewares/auth.middleware';
import { validateSlot } from './Slot.validation';

const router = Router();

router.post(
  '/slots',
  authenticateJWT,
  checkAdmin,
  validateSlot,
  createSlotsHandler,
);

export default router;
