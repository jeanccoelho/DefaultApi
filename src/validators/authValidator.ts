import { z } from 'zod';

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().min(2),
  role: z.enum(['ADMIN', 'USER'])
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});
