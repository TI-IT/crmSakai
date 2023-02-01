const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
  },
  { autoCreate: true },
);

const Organizations = mongoose.model('organizations', schema);
module.exports = Organizations;
