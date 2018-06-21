const Candidate = require('../api/candidate/candidateModel');
const _ = require('lodash');

console.log('Seeding the Database');

const candidates = [
  {
    name: 'Alan Cruz',
    years_exp: 10,
    status: 'pending',
    date_applied: '2018/06/05T11:55:42Z',
    reviewed: false,
    description: 'An accomplished legal professional with a myriad of experience and a stellar reputation for handling all facets of litigation and trial practice.  An analytical and strategic thinker with a firm understanding of the drivers and interests impacting litigation, the legal ramifications of the workplace disciplinary process and the overall dynamics of attorney-client relations. Licensed to practice in Pennsylvania, New Jersey and the District of Columbia.',
  },
  {
    name: 'Brian Patel',
    years_exp: 13,
    status: 'accepted',
    date_applied: '2018-06-02T09:55:42Z',
    reviewed: true,
    description: 'I am a seasoned litigator in the South Florida area with 10 years worth of experience in construction, maritime and insurance defense. My current practice involves real estate (litigation and transactional) and family law as well. In addition to extensive in-court experience, I offer excellent legal research and writing skills and a dedicated focus on the timely delivery of high quality product.',
  },
  {
    name: 'Sally Collins',
    years_exp: 2,
    status: 'rejected',
    date_applied: '2018-06-05T11:55:42Z',
    reviewed: true,
    description: 'Experience in business immigration with an emphasis on the preparation, review and analysis of immigrant (PERM, I-140 immigrant petitions and AOS applications) and nonimmigrant (L-1A, L-1B, H-1B, O-1) visa petitions and applications. Work directly with large multinational clients in a broad spectrum of global industries. Advise on mergers, acquisitions and corporate reorganizations issues to ensure compliance with immigration regulations. In charge of responding to NOIR, RFE and audits.',
  },
  {
    name: 'Adrienne Hopkins',
    years_exp: 1,
    status: 'pending',
    date_applied: '2018-04-30T21:55:42Z',
    reviewed: false,
    description: 'Business litigation and employment litigation attorney; former law review editor; worked at top firms in Dallas, Texas for seven years before forming a private practice.',
  },
  {
    name: 'Kari Morgan',
    years_exp: 1,
    status: 'pending',
    date_applied: '2018-04-30T21:55:42Z',
    reviewed: false,
    description: 'I am an attorney with a diverse background in multiple areas of practice. I have counseled banks, corporations, and individuals at both state and federal levels.',
  },
];

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
