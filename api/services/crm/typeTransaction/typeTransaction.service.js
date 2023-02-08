const dbConnect = require('../../dbConnect');
const mongoose = require('mongoose');
const TypeTransaction = require('../../../models/crm/TypeTransaction');

async function save(data) {
  await dbConnect();
  const collection = mongoose.model('typeTransaction');
  await collection.create(data);
}

async function getAll() {
  await dbConnect();
  const collection = mongoose.model('typeTransaction');
  const data = await collection.find({});
  return data;
}

module.exports = {
  save,
  getAll,
};
