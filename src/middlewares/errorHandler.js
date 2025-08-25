export const notFound = (req, res, next) => {
  res
    .status(404)
    .json({ status: 'error', code: 404, message: 'Route not found' });
};

export const errorHandler = (err, req, res, next) => {
  if (process.env.NODE_ENV !== 'production') {
    console.error(err);
  }

  if (err.name === 'CastError') {
    return res.status(400).json({
      status: 'error',
      code: 400,
      message: 'Invalid ID format',
    });
  }

  if (err.name === 'ValidationError') {
    return res.status(400).json({
      status: 'error',
      code: 400,
      message: 'Validation error',
      details:
        err.errors &&
        Object.fromEntries(
          Object.entries(err.errors).map(([k, v]) => [k, v.message]),
        ),
    });
  }

  if (err.code === 11000) {
    return res.status(409).json({
      status: 'error',
      code: 409,
      message: 'Duplicate key error',
      details: err.keyValue,
    });
  }

  if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
    return res.status(401).json({
      status: 'error',
      code: 401,
      message: 'Invalid or expired token',
    });
  }

  res.status(500).json({
    status: 'error',
    code: 500,
    message: err.message || 'Server error',
  });
};
