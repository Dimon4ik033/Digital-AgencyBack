import { Portfolio } from '../../models/portfolio.model.js';

export const getAllPortfolio = async (req, res) => {
  const items = await Portfolio.find();
  res.json(items);
};

export const getPortfolioById = async (req, res) => {
  const item = await Portfolio.findById(req.params.id);
  if (!item) return res.status(404).json({ message: 'Not found' });
  res.json(item);
};

export const createPortfolio = async (req, res) => {
  const newItem = await Portfolio.create(req.body);
  res.status(201).json(newItem);
};

export const updatePortfolio = async (req, res) => {
  const updatedItem = await Portfolio.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
  );
  if (!updatedItem) return res.status(404).json({ message: 'Not found' });
  res.json(updatedItem);
};

export const deletePortfolio = async (req, res) => {
  const deletedItem = await Portfolio.findByIdAndDelete(req.params.id);
  if (!deletedItem) return res.status(404).json({ message: 'Not found' });
  res.json({ message: 'Deleted successfully' });
};
