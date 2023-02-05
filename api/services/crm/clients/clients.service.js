const dbConnect = require('../../dbConnect');
const mongoose = require('mongoose');
const Clients = require('../../../models/crm/Clients');

async function save(client) {
  await dbConnect();
  const collection = mongoose.model('clients');
  await collection.create(client);
}

async function getAll() {
  await dbConnect();
  const collection = mongoose.model('clients');
  const data = await collection.find({});
  return data;
}
async function getMaxId() {
  await dbConnect();
  const collection = mongoose.model('clients');
  const data = await collection.find({}, { id: 1, _id: 0 });
  const array = [];
  data.map((obj) => {
    array.push(obj.id);
  });
  return Math.max(...array);
}

module.exports = {
  save,
  getAll,
  getMaxId,
};
