const dbConnect = require('../../dbConnect');
const mongoose = require('mongoose');
const Clients = require('../../../models/crm/Clients');
const fs = require('fs');
const path = require('path');
const filePath = path.resolve(__dirname, '../../../data/getAllGoogleClients.json');
fs.readFile(filePath, function (err, data) {
  if (err) {
    connectData();
  }
});
async function connectData() {
  // const data = await getAllGoogleSheeds();
  // saveData(data);
}

async function save(client) {
  await dbConnect();
  const collection = mongoose.model('clients');
  await collection.create(client);
}

async function getAll() {
  await dbConnect();
  const collection = mongoose.model('clients');
  const clients = await collection.find({});
  return clients;
}

async function getAllDataGoogleJson() {
  data = require('../../../data/getAllGoogleClients.json');
  return data;
}

module.exports = {
  save,
  getAll,
  getAllDataGoogleJson,
};
