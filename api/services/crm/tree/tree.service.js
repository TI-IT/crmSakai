const dbConnect = require('../../dbConnect');
const mongoose = require('mongoose');
const Tree = require('../../../models/crm/Tree');

async function save(data) {
  await dbConnect();
  const collection = mongoose.model('tree');
  await collection.create(data);
}

async function getAll() {
  await dbConnect();
  const collection = mongoose.model('tree');
  const data = await collection.find({});
  return data;
}

module.exports = {
  save,
  getAll,
};
