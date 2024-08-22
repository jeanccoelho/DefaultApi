import { Role } from '@prisma/client';
import { hashPassword, comparePassword } from '../utils/bcrypt';
import { generateToken } from '../utils/jwt';

import database from '../utils/database';

export const registerUser = async (email: string, password: string, name: string, role: string) => {
  const hashedPassword = await hashPassword(password);
  const user = await database.user.create({
    data: { 
      email, 
      password: hashedPassword, 
      name, 
      role: role as Role
    }
  });
  return user;
};

export const loginUser = async (email: string, password: string) => {
  const user = await database.user.findUnique({ where: { email } });
  if (!user) throw new Error('User not found');

  const isPasswordValid = await comparePassword(password, user.password);
  if (!isPasswordValid) throw new Error('Invalid password');

  const token = generateToken(user.id, user.role);
  return { token, user };
};
