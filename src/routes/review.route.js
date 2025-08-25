import express from 'express';
import {
  getAllReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
} from '../controllers/reviews/index.js';
import { auth, isAdmin } from '../middlewares/auth.js';
import { validate } from '../middlewares/validate.js';
import {
  createReviewSchema,
  updateReviewSchema,
} from '../validation/schemas.js';

const router = express.Router();

router.get('/', getAllReviews);
router.get('/:id', getReviewById);
router.post('/', auth, isAdmin, validate(createReviewSchema), createReview);
router.put('/:id', auth, isAdmin, validate(updateReviewSchema), updateReview);
router.delete('/:id', auth, isAdmin, deleteReview);

export default router;
