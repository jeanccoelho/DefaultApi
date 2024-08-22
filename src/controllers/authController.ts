import { Request, Response } from 'express';
import { registerUser, loginUser } from '../services/authService';
import { registerSchema, loginSchema } from '../validators/authValidator';

export const register = async (req: Request, res: Response) => {
  try {
    const data = registerSchema.parse(req.body);
    const user = await registerUser(data.email, data.password, data.name, data.role);
    res.status(201).json(user);
  } catch (error) {
    const errorMessage = (error instanceof Error) ? error.message : 'An unknown error occurred';
    res.status(400).json({ message: errorMessage });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const data = loginSchema.parse(req.body);
    const { token, user } = await loginUser(data.email, data.password);
    res.status(200).json({ token, user });
  } catch (error) {
    const errorMessage = (error instanceof Error) ? error.message : 'An unknown error occurred';
    res.status(400).json({ message: errorMessage });
  }
};
