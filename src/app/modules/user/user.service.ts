import {
  SignUpInput,
  SignUpResponse,
  LoginInput,
  LoginResponse,
} from './user.interface';
import User from './user.model';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signUp = async (
  userData: SignUpInput,
): Promise<SignUpResponse> => {
  try {
    const { name, email, password, phone, role, address } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      phone,
      role,
      address,
    });
    return {
      success: true,
      statusCode: 200,
      message: 'User registered successfully',
      data: newUser,
    };
  } catch (error) {
    return {
      success: false,
      statusCode: 500,
      message: error.message,
    };
  }
};

export const login = async (loginData: LoginInput): Promise<LoginResponse> => {
  try {
    const { email, password } = loginData;
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('User not found');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Invalid credentials');
    }
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '1h' },
    );
    return {
      success: true,
      statusCode: 200,
      message: 'User logged in successfully',
      token,
      data: user,
    };
  } catch (error) {
    return {
      success: false,
      statusCode: 500,
      message: error.message,
    };
  }
};
