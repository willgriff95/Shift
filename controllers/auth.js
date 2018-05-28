const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/environment');

function register(req, res, next) {
  User.create(req.body)
    .then(user => {
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' });
      res.json({
        message: `Thanks for registering ${user.username}!`,
        token,
        user
      });
    })
    .catch(next);
}

function login(req, res, next) {
  User.findOne({ email: req.body.email })
    .then(user => {
      if(!user || !user.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
      // `{ sub: user._id}` is the payload. The secret forms the signature of the token. Apart from the payload, there's also `iat` and `exp`, which is the time since 1970 after which the token was created and when it will expire.
      // The jwt token consists of Header.Payload.Signature, and in Payload there is an object called { sub: '', iat: '', exp: '' }
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' });
      res.json({
        message: `Welcome back ${user.firstName}!`,
        token,
        user
      });
    })
    .catch(next);
}

module.exports = {
  register,
  login
};
