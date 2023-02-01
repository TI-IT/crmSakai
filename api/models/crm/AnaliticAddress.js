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

const AnaliticAddress = mongoose.model('analiticAddress', schema);
module.exports = AnaliticAddress;
