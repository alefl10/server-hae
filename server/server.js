const express = require('express');
const api = require('./api/api');
const config = require('./config/config');

require('mongoose').connect(config.db.url, {
  useMongoClient: true,
});

const app = express();

if (config.seed) {
  require('./util/seed');
}

require('./middleware/appMiddleware')(app);

app.use('/', api);

app.use((err, req, res) => {
  console.log('An error has occured');
  console.log(err.message);
  res.status(500).json(err);
});

// export the app for testing
module.exports = app;
