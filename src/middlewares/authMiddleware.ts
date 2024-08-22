import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';
import { JwtPayload } from 'jsonwebtoken';
import { Role } from '@prisma/client';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access denied' });
  }

  try {
    const decoded = verifyToken(token) as JwtPayload & { userId: string; role: string };
    // Converta o role de string para o enum Role
    req.user = { userId: decoded.userId, role: decoded.role as Role };
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
