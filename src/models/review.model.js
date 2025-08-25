import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
  },
  { timestamps: true },
);

export const Review = mongoose.model('Review', reviewSchema);
