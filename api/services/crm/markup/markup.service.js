const dbConnect = require('../../dbConnect');
const mongoose = require('mongoose');
const Markup = require('../../../models/crm/Markup');

async function save(data) {
  await dbConnect();
  const collection = mongoose.model('markup');
  await collection.create(data);
}

async function getAll() {
  await dbConnect();
  const collection = mongoose.model('markup');
  const data = await collection.find({});
  return data;
}

module.exports = {
  save,
  getAll,
};
