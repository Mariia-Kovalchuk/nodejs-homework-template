const jwt = require('jsonwebtoken');
const { Unauthorized } = require('http-errors')
const {getUserById} =require('../services/users')

const authMiddleware = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      next(new Unauthorized('Please, provide a token in request authorization header'));
    }

    const [, token] = authorization.split(' ');
    // console.log("token:", token);
    
    if (!token) {
      next(new Unauthorized('Please, provide a token'));
    }
    
    const decodedToken = jwt.decode(token, process.env.JWT_SECRET);
    // console.log("decodedToken:", decodedToken);
    if (!decodedToken) {
      next(new Unauthorized('Not authorized'));
    }
    const user = await getUserById(decodedToken.id)
    console.log(user);
    if (user && user.token === token) {
      req.user = user;
      next();
    }
    else {
      next(new Unauthorized('Not authorized'));
    };

  } catch (err) {
    next(new Unauthorized('Invalid token'));
  }
};

module.exports = authMiddleware;
