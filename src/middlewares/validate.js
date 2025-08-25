export const validate =
  (schema, where = 'body') =>
  (req, res, next) => {
    const data = req[where];
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'Validation error',
        details: parsed.error.flatten(),
      });
    }
    req[where] = parsed.data;
    next();
  };
