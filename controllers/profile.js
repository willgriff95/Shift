const User = require('../models/user');


function showRoute(req, res, next) {
  console.log(req.body);
  User
    .findById(req.currentUser)
    .populate({
      path: 'jobs',
      populate: {
        path: 'requests.user'
      }
    })
    // .populate('requests.user')
    .exec()
    .then(user => {
      if(!user) return res.sendStatus(404);
      return res.json(user);
    })
    .catch(next);
}

function updateRoute(req, res, next){
  User
    .findById(req.currentUser)
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
  update: updateRoute
};
