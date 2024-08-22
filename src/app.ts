import express from 'express';
import 'express-async-errors';
import helmet from 'helmet';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';
import { errorMiddleware } from './middlewares/errorMiddleware';
import rateLimit from 'express-rate-limit';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

const app = express();

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again later."
});

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'DefaultApi',
      version: '1.0.0',
      description: 'API RESTful com autenticação JWT e Prisma',
    },
  },
  apis: ['./src/routes/*.ts'],
};

app.use(helmet());
app.use(express.json());
app.use(apiLimiter);

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

app.use(errorMiddleware);

export default app;
