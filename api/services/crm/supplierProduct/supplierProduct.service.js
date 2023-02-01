const dbConnect = require('../../dbConnect');
const mongoose = require('mongoose');
const SupplierProduct = require('../../../models/crm/SupplierProduct');

async function save(data) {
  await dbConnect();
  const collection = mongoose.model('supplierProduct');
  await collection.create(data);
}

async function getAll() {
  await dbConnect();
  const collection = mongoose.model('supplierProduct');
  const data = await collection.find({});
  return data;
}

module.exports = {
  save,
  getAll,
};
