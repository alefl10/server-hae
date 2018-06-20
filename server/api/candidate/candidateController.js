const Candidate = require('./candidateModel');
const _ = require('lodash');

exports.params = (req, res, next, id) => {
  Candidate.findById(id)
    .then((candidate) => {
      if (candidate === undefined || candidate === null) {
        next(new Error('No candidate with that id'));
      } else {
        req.candidate = candidate;
        next();
      }
    })
    .catch((err) => {
      next(err);
    });
};

exports.get = (req, res, next) => {
  Candidate.find({})
    .then((candidates) => {
      res.json(candidates);
    })
    .catch((err) => {
      next(err);
    });
};

exports.getOne = (req, res) => {
  const {
    candidate,
  } = req;
  res.json(candidate);
};

exports.patch = (req, res, next) => {
  const {
    candidate,
    body: update,
  } = req;
  _.merge(candidate, update);

  candidate.save()
    .then((saved) => {
      res.json(saved);
    })
    .catch((err) => {
      next(err);
    });
};

exports.put = (req, res, next) => {
  const {
    candidate,
    body: update,
  } = req;
  _.merge(candidate, update);

  candidate.save()
    .then((saved) => {
      res.json(saved);
    })
    .catch((err) => {
      next(err);
    });
};

exports.post = (req, res, next) => {
  const newCandidate = new Candidate(req.body);
  console.log('Hello');
  newCandidate.save()
    .then((saved) => {
      res.json(saved);
    })
    .catch((err) => {
      next(err);
    });
};

exports.delete = (req, res, next) => {
  req.candidate.remove()
    .then((removed) => {
      res.json(removed);
    })
    .catch((err) => {
      next(err);
    });
};
