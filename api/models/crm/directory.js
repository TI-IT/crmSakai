const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new mongoose.Schema(
  {
    city: {
      type: String,
    },
  },
  { autoCreate: true },
);

const Directory = mongoose.model('directory', schema);
module.exports = Directory;
