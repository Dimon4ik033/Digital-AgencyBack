import express from 'express';
import {
  getAllMessages,
  getMessageById,
  createMessage,
  deleteMessage,
} from '../controllers/messages/index.js';
import { auth, isAdmin } from '../middlewares/auth.js';
import { validate } from '../middlewares/validate.js';
import { createMessageSchema } from '../validation/schemas.js';

const router = express.Router();

router.post('/', validate(createMessageSchema), createMessage);
router.get('/', auth, isAdmin, getAllMessages);
router.get('/:id', auth, isAdmin, getMessageById);
router.delete('/:id', auth, isAdmin, deleteMessage);

export default router;
