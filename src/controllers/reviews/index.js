import { Review } from '../../models/review.model.js';

export const getAllReviews = async (req, res) => {
  const reviews = await Review.find();
  res.json(reviews);
};

export const getReviewById = async (req, res) => {
  const review = await Review.findById(req.params.id);
  if (!review) {
    return res.status(404).json({ message: 'Review not found' });
  }
  res.json(review);
};

export const createReview = async (req, res) => {
  const newReview = await Review.create(req.body);
  res.status(201).json(newReview);
};

export const updateReview = async (req, res) => {
  const updateReview = await Review.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!updateReview) {
    return res.status(404).json({ message: 'Review not found' });
  }
  res.json(updateReview);
};

export const deleteReview = async (req, res) => {
  const deletedReview = await Review.findByIdAndDelete(req.params.id);
  if (!deletedReview) {
    return res.status(404).json({ message: 'Review not found' });
  }
  res.json({ message: 'Deleted successfully' });
};
