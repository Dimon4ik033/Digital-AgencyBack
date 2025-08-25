import express from 'express';
import connectDB from './db/index.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import 'express-async-errors';

import serviceRoutes from './routes/services.route.js';
import portfolioRoutes from './routes/portfolio.route.js';
import reviewRoutes from './routes/review.route.js';
import messageRoutes from './routes/mesasge.route.js';
import authRoutes from './routes/auth.route.js';

import { notFound, errorHandler } from './middlewares/errorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(helmet());
app.use(
  cors({
    origin: process.env.FRONTEND_ORIGIN,
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(express.json());

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.use('/api/services', serviceRoutes);
app.use('/api/portfolio', portfolioRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/auth', authRoutes);

app.use(notFound);
app.use(errorHandler);

app.use(express.json());

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
