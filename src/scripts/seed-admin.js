import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { User } from '../models/user.model.js';

dotenv.config();

const { MONGO_URI } = process.env;

const run = async () => {
  await mongoose.connect(MONGO_URI);

  const email = process.env.ADMIN_EMAIL || 'dimanaumenko31@gmail.com';
  const password = process.env.ADMIN_PASSWORD || 'google1001';

  const existing = await User.findOne({ email });
  if (existing) {
    console.log('Admin already exists:', email);
    return process.exit(0);
  }

  const passwordHash = await bcrypt.hash(password, 10);
  await User.create({ email, passwordHash, role: 'admin' });

  console.log('✅ Admin created:', email);
  process.exit(0);
};

run();
