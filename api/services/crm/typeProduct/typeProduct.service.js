const dbConnect = require('../../dbConnect');
const mongoose = require('mongoose');
const TypeProduct = require('../../../models/crm/TypeProduct');

async function save(data) {
  console.log(data);
  await dbConnect();
  const collection = mongoose.model('typeProduct');
  await collection.create(data);
}

async function getAll() {
  await dbConnect();
  const collection = mongoose.model('typeProduct');
  const data = await collection.find({});
  return data;
}

module.exports = {
  save,
  getAll,
};
