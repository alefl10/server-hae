const Candidate = require('../api/candidate/candidateModel');
const _ = require('lodash');
const candidates = require('../config/dataSeed');

console.log('Seeding the Database');

const createDoc = function (Model, doc) {
  return new Promise((resolve, reject) => {
    new Model(doc).save((err, saved) => (err ? reject(err) : resolve(saved)));
  });
};

const cleanDB = function () {
  console.log('... cleaning the DB');
  const cleanPromises = [Candidate]
    .map(model => model.remove().exec());
  return Promise.all(cleanPromises);
};

const createCandidates = function (data) {
  const promises = candidates.map(candidate => createDoc(Candidate, candidate));

  return Promise.all(promises)
    .then(candidates => _.merge({ candidates }, data || {}));
};

cleanDB()
  .then(createCandidates)
  .catch(err => console.log(err));
