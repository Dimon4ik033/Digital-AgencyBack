import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../../models/user.model.js';

const cookieOpts = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
  path: '/',
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: (email || '').toLowerCase() });
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });

  const ok = await bcrypt.compare(password || '', user.passwordHash);
  if (!ok) return res.status(401).json({ message: 'Invalid credentials' });

  const accessToken = jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES || '1h' },
  );

  res.cookie('accessToken', accessToken, {
    ...cookieOpts,
    maxAge: 1000 * 60 * 60,
  });
  res.json({ id: user._id, email: user.email, role: user.role });
};

export const logout = (req, res) => {
  res.clearCookie('accessToken', cookieOpts);
  res.json({ message: 'Logged out' });
};

export const me = (req, res) => {
  res.json({ id: req.user.id, email: req.user.email, role: req.user.role });
};
