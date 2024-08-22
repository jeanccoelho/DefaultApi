import { Router } from 'express';
import { getUsers, getUser } from '../controllers/userController';
import { authMiddleware } from '../middlewares/authMiddleware';
import { roleMiddleware } from '../middlewares/roleMiddleware';

const router = Router();

router.get('/', authMiddleware, roleMiddleware('ADMIN'), getUsers);
router.get('/:id', authMiddleware, getUser);

export default router;
