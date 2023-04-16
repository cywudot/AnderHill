import express from 'express';
import Product from '../models/Product.js';
import asyncHandler from 'express-async-handler';
import User from '../models/User.js';
import protectRoute from '../middleware/authMiddleware.js';

const productRoutes = express.Router();

//PREVIOUS CODE THAT USE BACKEND TO CHANGE STATE OF PRODUCTS
// In this updated code, we first extract the category parameter from the request query string using req.query.category. If category is present, we create a query object that filters by the specified category using { category }. If category is not present, the query object will be empty, which will return all products.Then, we use the query object to filter the products with Product.find(query), and return the filtered products with res.json(products).

// const getProducts = async (req, res) => {
//   //TO DELETE
//   const category = req.query.category;
//   const query = category ? { category } : {};
//   const products = await Product.find(query);
//   // const products = await Product.find({});
//   res.json(products);
// };

const getProducts = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};

const getProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found.');
  }
};

const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment, userId, title } = req.body;
  const product = await Product.findById(req.params.id);
  const user = await User.findById(userId);

  if (product) {
    const alreadyReviewed = product.reviews.find((rev) => rev.user.toString() === user._id.toString());

    if (alreadyReviewed) {
      res.status(400);
      throw new Error('Product already reviewed');
    }

    const review = {
      name: user.name,
      rating: Number(rating),
      comment,
      title,
      user: user._id,
    };

    product.reviews.push(review);

    product.numberOfReviews = product.reviews.length;

    product.rating = product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length;
    await product.save();
    res.status(201).json({ message: 'Review has been saved.' });
  } else {
    res.status(400);
    throw new Error('Product not found');
  }
});

productRoutes.route('/').get(getProducts);
productRoutes.route('/:id').get(getProduct);
productRoutes.route('/reviews/:id').post(protectRoute, createProductReview);

export default productRoutes;
