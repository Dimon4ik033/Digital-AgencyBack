import express from 'express';
import {
  getAllServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
} from '../controllers/services/index.js';
import { auth, isAdmin } from '../middlewares/auth.js';

const router = express.Router();

router.get('/', getAllServices);
router.get('/:id', getServiceById);
router.post('/', auth, isAdmin, createService);
router.put('/:id', auth, isAdmin, updateService);
router.delete('/:id', auth, isAdmin, deleteService);

export default router;
