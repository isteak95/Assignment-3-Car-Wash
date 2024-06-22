import express from 'express';
import { signUpController, loginController } from './user.controller';
import { validateSignUp, validateLogin } from './user.validation';

const router = express.Router();

router.post('/signup', validateSignUp, signUpController);
router.post('/login', validateLogin, loginController);

export default router;
