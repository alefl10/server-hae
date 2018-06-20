const _ = require('lodash');

const config = {
  dev: 'development',
  prod: 'production',
  test: 'testing',
  port: process.env.PORT || 8080,
};

process.env.NODE_ENV = process.env.NODE_ENV || config.dev;
config.env = process.env.NODE_ENV;

const envConfig = require(`./${config.env}`);

module.exports = _.merge(config, envConfig);
