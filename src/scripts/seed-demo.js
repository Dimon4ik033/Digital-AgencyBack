import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { Service } from '../models/service.model.js';
import { Portfolio } from '../models/portfolio.model.js';
import { Review } from '../models/review.model.js';

dotenv.config();

const { MONGO_URI } = process.env;

const services = [
  {
    title: 'Web Design',
    description: 'Modern UI/UX for your brand',
    icon: 'uiux',
  },
  { title: 'Development', description: 'React/Node apps', icon: 'code' },
];

const portfolios = [
  {
    imgUrl: 'htttps:/www.chicboutique.com',
    projectUrl: 'htttps:/www.chicboutique.com',
    name: 'chicboutique',
    summary:
      'We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations, resulting in increased online sales and customer satisfaction.',
  },
  {
    imgUrl: 'htttps:/www.hungrybites.com',
    projectUrl: 'htttps:/www.hungrybites.com',
    name: 'hungrybites',
    summary:
      'HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options, resulting in improved customer convenience and operational efficiency. ',
  },
];

const reviews = [
  { author: 'Alice', text: 'Great team, fast delivery!', rating: 5 },
  { author: 'Mark', text: 'Solid execution, will return.', rating: 4 },
];

const run = async () => {
  await mongoose.connect(MONGO_URI);

  if ((await Service.countDocuments()) === 0)
    await Service.insertMany(services);
  if ((await Portfolio.countDocuments()) === 0)
    await Portfolio.insertMany(portfolios);
  if ((await Review.countDocuments()) === 0) await Review.insertMany(reviews);

  console.log('✅ Demo data seeded');
  process.exit(0);
};

run();
