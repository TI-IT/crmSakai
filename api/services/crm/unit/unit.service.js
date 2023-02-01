const dbConnect = require('../../dbConnect');
const mongoose = require('mongoose');
const Unit = require('../../../models/crm/Unit');

async function save(data) {
  await dbConnect();
  const collection = mongoose.model('unit');
  await collection.create(data);
}

async function getAll() {
  await dbConnect();
  const collection = mongoose.model('unit');
  const data = await collection.find({});
  return data;
}

module.exports = {
  save,
  getAll,
};
