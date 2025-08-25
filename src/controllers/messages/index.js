import { Message } from '../../models/message.model.js';

export const getAllMessages = async (req, res) => {
  const messages = await Message.find();
  res.json(messages);
};

export const getMessageById = async (req, res) => {
  const message = await Message.findById(req.params.id);
  if (!message) {
    return res.status(404).json({ message: 'Message not found' });
  }
  res.json(message);
};

export const createMessage = async (req, res) => {
  const newMessage = await Message.create(req.body);
  res.status(201).json(newMessage);
};

export const deleteMessage = async (req, res) => {
  const deleteMessage = await Message.findByIdAndDelete(req.params.id);
  if (!deleteMessage) {
    return res.status(404).json({ message: 'Message not found' });
  }
  res.json({ message: 'Deleted successfully' });
};
