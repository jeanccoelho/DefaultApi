import { Request, Response, NextFunction } from 'express';

export const roleMiddleware = (requiredRole: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.user;

    if (!user || user.role !== requiredRole) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    next();
  };
};
