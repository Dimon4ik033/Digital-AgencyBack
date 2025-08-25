import { z } from 'zod';

export const createReviewSchema = z.object({
  author: z.string().min(2, 'Author must be at least 2 chars'),
  text: z.string().min(5, 'Text must be at least 5 chars'),
  rating: z.number().int().min(1).max(5),
});

export const updateReviewSchema = createReviewSchema.partial();

export const createMessageSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 chars'),
  email: z.string().email('Invalid email'),
  message: z.string().min(5, 'Message must be at least 5 chars'),
});

export const createPortfolioSchema = z.object({
  imgUrl: z.string().url({ message: 'Invalid image URL' }),
  projectUrl: z.string().url({ message: 'Invalid project URL' }),
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  summary: z
    .string()
    .min(10, 'Summary must be at least 10 characters')
    .max(500),
});
