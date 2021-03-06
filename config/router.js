const router = require('express').Router();
const jobs = require('../controllers/jobs');
const users = require('../controllers/users');
const profile = require('../controllers/profile');
const auth = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');

router.route('/jobs')
  .get(jobs.index)
  .post(secureRoute, jobs.create);

router.route('/jobs/:id')
  .get(jobs.show)
  .put(secureRoute, jobs.update)
  .delete(secureRoute ,jobs.delete);

router.route('/jobs/:id/requests')
  .post(secureRoute, jobs.requestCreate);

router.route('/jobs/:id/requests/:requestId')
  .put(secureRoute, jobs.requestAccept);

router.route('/jobs/:id/relist')
  .put(secureRoute, jobs.relistJob);

router.route('/profile/:id')
  .get(secureRoute, profile.show)
  .put(secureRoute, profile.update);

router.route('/users')
  .get( users.index);

router.route('/users/:id')
  .get(users.show)
  .put(secureRoute, users.update);

router.post('/jobs/:id/comments', secureRoute, jobs.commentCreate);
router.delete('/jobs/:id/comments/:commentId', secureRoute, jobs.commentDelete);

router.post('/register', auth.register);
router.post('/login', auth.login);

module.exports = router;
