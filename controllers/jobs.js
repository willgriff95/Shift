const Job = require('../models/job');

function indexRoute(req, res, next) {
  Job
    .find()
    .then(jobs => res.json(jobs))
    .catch(next);
}

function createRoute(req, res, next) {
  req.body.manager = req.currentUser;
  Job
    .create(req.body)
    .then(job => res.status(201).json(job))
    .catch(next);
}

function showRoute(req, res, next) {
  Job
    .findById(req.params.id)
    .populate('manager')
    .then(job => res.json(job))
    .catch(next);
}

function updateRoute(req, res, next) {
  Job
    .findById(req.params.id)
    .then(job => {
      job = Object.assign(job, req.body);
      return job.save();
    })
    .then(job => {
      return res.json(job);
    })
    .catch(next);
}

function deleteRoute(req, res, next) {
  Job
    .findById(req.params.id)
    .then(job => {
      return job.remove();
    })
    .then(() => res.sendStatus(204).json({
      message: 'Job successfully deleted'
    }))
    .catch(next);
}

function jobsRequestCreate(req, res, next){
  req.body.user = req.currentUser;
  Job
    .findById(req.params.id)
    .exec()
    .then(job => {
      job.requests.push(req.body);
      return job.save();
    })
    .then(job => res.json(job))
    .catch(next);
}

function jobsRequestAccept(req, res, next) {
  // console.log('req.body: ', req.body);

  Job
    .findById(req.params.id)
    .exec()
    .then(job => {
      job.active = false;
      job.requests = job.requests.map(request => {
        request.status = request._id.equals(req.params.requestId) ? 'accepted' : 'rejected';
        return request;
      });
      return job.save();
    })
    .then(job => Job.populate(job, { path: 'requests.user' }))
    .then(job => res.json(job))
    .catch(next);
}

function jobsRelist(req, res, next){
  Job
    .findById(req.params.id)
    .exec()
    .then(job => {
      job.active = true;
      job.requests = [];
      return job.save();
    })
    .then(job => res.json(job))
    .catch(next);
}

function commentCreateRoute(req, res, next) {
  req.body.createdBy = req.currentUser;
  Job
    .findById(req.params.id)
    .populate('comment.createdBy')
    .then(job => {
      job.comments.push(req.body);
      return job.save();
    })
    .then(job => res.json(job))
    .catch(next);
}

function commentDeleteRoute(req, res, next) {
  Job
    .findById(req.params.id)
    .then(job => {
      const comment = job.comments.id(req.params.commentId);
      // The throw new Error() takes you into the next catch block.
      if(!comment.createdBy._id.equals(req.currentUser._id)) throw new Error('Unauthorized');
      comment.remove();
      return job.save();
    })
    .then(job => res.json(job))
    .catch(next);
}


module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute,
  requestCreate: jobsRequestCreate,
  requestAccept: jobsRequestAccept,
  relistJob: jobsRelist,
  commentCreate: commentCreateRoute,
  commentDelete: commentDeleteRoute
};
