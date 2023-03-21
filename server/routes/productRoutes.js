import express from 'express';
import Product from '../models/Product.js';

const productRoutes = express.Router();

// In this updated code, we first extract the category parameter from the request query string using req.query.category. If category is present, we create a query object that filters by the specified category using { category }. If category is not present, the query object will be empty, which will return all products.Then, we use the query object to filter the products with Product.find(query), and return the filtered products with res.json(products).
const getProducts = async (req, res) => {
  //TO DELETE
  const category = req.query.category;
  const query = category ? { category } : {};
  const products = await Product.find(query);
  // const products = await Product.find({});
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

productRoutes.route('/').get(getProducts);
productRoutes.route('/:id').get(getProduct);

export default productRoutes;
