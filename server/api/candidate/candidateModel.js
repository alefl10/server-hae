const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const {
  Schema,
} = mongoose;

const CandidateSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  years_exp: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  date_applied: {
    type: String,
    required: true,
  },
  reviewed: {
    type: Boolean,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('candidate', CandidateSchema);
