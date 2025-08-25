import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema(
  {
    imgUrl: {
      type: String,
      required: true,
    },
    projectUrl: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 100,
    },
    summary: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 500,
    },
  },
  { timestamps: true },
);

export const Portfolio = mongoose.model('Portfolio', portfolioSchema);
