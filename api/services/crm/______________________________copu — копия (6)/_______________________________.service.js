const dbConnect = require('../../dbConnect');
const mongoose = require('mongoose');
const CategoryChildrenProduct = require('../../../models/crm/CategoryChildrenProduct');

async function save(data) {
  await dbConnect();
  const collection = mongoose.model('categoryChildrenProduct');
  await collection.create(data);
}

async function getAll() {
  await dbConnect();
  const collection = mongoose.model('categoryChildrenProduct');
  const data = await collection.find({});
  return data;
}

module.exports = {
  save,
  getAll,
};
