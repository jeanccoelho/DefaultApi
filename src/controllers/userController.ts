import { Request, Response } from 'express';
import { getAllUsers, getUserById } from '../services/userService';

export const getUsers = async (req: Request, res: Response) => {
  const users = await getAllUsers();
  res.status(200).json(users);
};

export const getUser = async (req: Request, res: Response) => {
  const user = await getUserById(req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.status(200).json(user);
};
