import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import taskRouter from './src/routes/taskRoutes.js';
import { securityHeaders } from './src/middleware/security.js';
import { errorHandler, notFound } from './src/middleware/errorHandler.js';
 
const app = express();
const PORT = process.env.PORT || 5000;
 
// Middleware pipeline
app.use(helmet());               // Security headers (helmet)
app.use(securityHeaders);        // Custom security headers
app.use(cors());                 // Enable cross-origin requests
app.use(morgan('dev'));           // Request logging
app.use(express.json());         // Parse JSON bodies
 
// Routes
app.use('/api/tasks', taskRouter);
 
// 404 handler (must be after all routes)
app.use(notFound);
 
// Global error handler (must be last)
app.use(errorHandler);
 
// Start server
app.listen(PORT, () =>
  console.log(`TaskFlow API running on port ${PORT}`)
);