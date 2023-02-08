const dbConnect = require('../../dbConnect');
const mongoose = require('mongoose');
const Products = require('../../../models/crm/Products');

async function save(data) {
  await dbConnect();
  const collection = mongoose.model('products');
  await collection.create(data);
}

async function getAll() {
  await dbConnect();
  const collection = mongoose.model('products');
  const data = await collection.find({});
  return data;
}

async function getProductsTypeProduct(select) {
  await dbConnect();
  const collection = mongoose.model('products');
  const data = await collection.find({ typeProduct: select.name });
  return data;
}

module.exports = {
  save,
  getAll,
  getProductsTypeProduct,
};
