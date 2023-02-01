const dbConnect = require('../../dbConnect');
const mongoose = require('mongoose');
const CategoryProduct = require('../../../models/crm/CategoryProduct');

async function save(data) {
  await dbConnect();
  const collection = mongoose.model('categoryProduct');
  await collection.create(data);
}

async function getAll() {
  await dbConnect();
  const collection = mongoose.model('categoryProduct');
  const data = await collection.find({});
  return data;
}

module.exports = {
  save,
  getAll,
};
