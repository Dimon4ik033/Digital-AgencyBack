import express from 'express';
import {
  getAllPortfolio,
  getPortfolioById,
  createPortfolio,
  updatePortfolio,
  deletePortfolio,
} from '../controllers/portfolio/index.js';
import { auth, isAdmin } from '../middlewares/auth.js';

const router = express.Router();

router.get('/', getAllPortfolio);
router.get('/:id', getPortfolioById);
router.post('/', auth, isAdmin, createPortfolio);
router.put('/:id', auth, isAdmin, updatePortfolio);
router.delete('/:id', auth, isAdmin, deletePortfolio);

export default router;
