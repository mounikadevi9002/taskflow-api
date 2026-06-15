// Global error handling middleware
export const errorHandler = (err, req, res, next) => {
  console.error(`[ERROR] ${err.stack}`);

  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';

  res.status(status).json({ error: message });
};

// 404 handler for unknown routes
export const notFound = (req, res) => {
  res.status(404).json({ error: `Route ${req.originalUrl} not found` });
};
