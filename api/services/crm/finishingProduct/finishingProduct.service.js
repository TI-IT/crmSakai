const dbConnect = require('../../dbConnect');
const mongoose = require('mongoose');
const FinishingProduct = require('../../../models/crm/FinishingProduct');

async function save(data) {
  console.log(data);
  await dbConnect();
  const collection = mongoose.model('finishingProduct');
  await collection.create(data);
}

async function getAll() {
  await dbConnect();
  const collection = mongoose.model('finishingProduct');
  const data = await collection.find({});
  return data;
}

module.exports = {
  save,
  getAll,
};
