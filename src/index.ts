import express, { Express, Request, Response } from 'express';
import * as dotenv from 'dotenv';
import connectDB from './config/database';
import userRoutes from './routes/userRoutes';
import { setupSwagger } from './config/swagger';
import { startServer } from './utils/banner';

// Load environment variables from .env file
dotenv.config();

const app: Express = express();
const port = Number(process.env.PORT) || 3000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

// Setup Swagger UI
setupSwagger(app);

// Routes
app.use('/api/users', userRoutes);

// Basic route
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello from TypeScript Express!' });
});

// Start server with banner
startServer(app, port);
