const dbConnect = require('../../dbConnect');
const mongoose = require('mongoose');
const Offer = require('../../../models/crm/Offer');

async function save(data) {
  await dbConnect();
  const collection = mongoose.model('offer');
  await collection.create(data);
}

async function getAll() {
  await dbConnect();
  const collection = mongoose.model('offer');
  const data = await collection.find({});
  return data;
}

module.exports = {
  save,
  getAll,
};
