const dbConnect = require('../../dbConnect');
const mongoose = require('mongoose');
const Catalog = require('../../../models/crm/Catalog');

async function save(data) {
  await dbConnect();
  const collection = mongoose.model('catalog');
  await collection.create(data);
}

async function getAll() {
  await dbConnect();
  const collection = mongoose.model('catalog');
  const data = await collection.find({});
  return data;
}

module.exports = {
  save,
  getAll,
};
