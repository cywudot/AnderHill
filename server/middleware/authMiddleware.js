import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/User.js';

//Checks for the presence of an access token in the Authorization header of an HTTP request. If authorized is found, it passes to the next function through the next() function

const protectRoute = asyncHandler(async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      //extracts the token from the Authorization header by splitting the string at the space character and taking the second element.
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
      //sets the req.user property to the user object retrieved from the User model using the user ID from the decoded token.
      req.user = User.findById(decoded.id);

      next();
    } catch (error) {
      res.status(401);
      throw new Error('Not authorized, token failed.');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Not authorized, no token.');
  }
});

// const admin = (req, res, next) => {
//   if (req.user && req.user.isAdmin !== 'false') {
//     next();
//   } else {
//     res.status(401);
//     throw new Error('Not authorized as an admin.');
//   }
// };

export default protectRoute;
