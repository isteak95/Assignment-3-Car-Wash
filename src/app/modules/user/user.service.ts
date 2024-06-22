import {
  SignUpInput,
  SignUpResponse,
  LoginInput,
  LoginResponse,
} from './user.interface';
import User from './user.model';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Function to handle user registration (sign up)
export const signUp = async (
  userData: SignUpInput,
): Promise<SignUpResponse> => {
  try {
    const { name, email, password, phone, role, address } = userData;

    // Validate input data (you should implement this validation)

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      phone,
      role,
      address,
    });

    // Return successful registration response
    return {
      success: true,
      statusCode: 200,
      message: 'User registered successfully',
      data: newUser,
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // Return error response
    return {
      success: false,
      statusCode: 500,
      message: error.message || 'Internal server error',
    };
  }
};

// Function to handle user login
export const login = async (loginData: LoginInput): Promise<LoginResponse> => {
  try {
    const { email, password } = loginData;

    // Validate input data (you should implement this validation)

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      // User not found
      throw new Error('User not found');
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      // Invalid credentials
      throw new Error('Invalid credentials');
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '1h' },
    );

    // Return successful login response
    return {
      success: true,
      statusCode: 200,
      message: 'User logged in successfully',
      token,
      data: user,
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // Return error response
    return {
      success: false,
      statusCode: 500,
      message: error.message || 'Internal server error',
    };
  }
};
