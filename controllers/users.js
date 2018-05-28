const User = require('../models/user');

function indexRoute(req, res, next){
  User
    .find()
    .exec()
    .then(users => res.json(users))
    .catch(next);
}

function showRoute(req, res, next) {
  User
    .findById(req.params.id)
    .populate({
      path: 'jobs',
      populate: {
        path: 'requests.user'
      }
    })
    .exec()
    .then(user => {
      if(!user) return res.sendStatus(404);
      return res.json(user);
    })
    .catch(next);
}

function updateRoute(req, res, next){
  User
    .findById(req.params.id)
    .then(user => {
      if(!user) return res.sendStatus(404);
      return Object.assign(user, req.body);
    })
    .then(user =>  user.save())
    .then(user => res.json(user))
    .catch(next);
}


module.exports = {
  show: showRoute,
  index: indexRoute,
  update: updateRoute
};
