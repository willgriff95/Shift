const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');
const Promise = require('bluebird');
const User = require('../models/user');

function secureRoute(req, res, next) {
  // Checking if any token exists at all.
  if(!req.headers.authorization) return res.status(401).json({ message: 'Unauthorized' });

  // Getting the header and replacing 'Bearer' with nothing.
  const token = req.headers.authorization.replace('Bearer ', '');

  new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, payload) => {
      // If there is an error, go to the catch block.
      if(err) return reject(err);

      //If it's valid, return the payload, which is an object with the `sub`, `iat`, and `exp`
      resolve(payload);
    });
  })
    .then(payload => {
      // currently not finding anything.
      console.log('logging payload', payload);
      return User.findById(payload.sub);
    })
    .then(user => {
      console.log('logging user', user);
      if(!user) return res.status(401).json({ message: 'Unauthorized' });
      // This is very important because we can use whatever comes out of it in the controller.
      req.currentUser = user;
      next();
    })
    .catch(next);
}

module.exports = secureRoute;
