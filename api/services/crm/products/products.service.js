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
  const data = await collection.find(
    { $or: [{ typeTransaction: select.typeTransaction }, { typeProduct: select.typeProduct }] },
    function (err, docs) {
      if (!err) res.send(docs);
    },
  );
  return data;
}

async function getProductsTypeTransaction(select) {
  await dbConnect();
  const collection = mongoose.model('products');
  const data = await collection.find({ typeTransaction: select.name });
  return data;
}

module.exports = {
  save,
  getAll,
  getProductsTypeProduct,
  getProductsTypeTransaction,
};
