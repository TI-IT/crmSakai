const dbConnect = require('../../dbConnect');
const mongoose = require('mongoose');
const AnaliticAddress = require('../../../models/crm/AnaliticAddress');

async function saveAnaliticAddress(data) {
  await dbConnect();
  const collection = mongoose.model('analiticAddress');
  await collection.create({
    name: data.name,
  });
}

async function getAnaliticAddress() {
  await dbConnect();
  const collection = mongoose.model('analiticAddress');
  const analiticAddress = await collection.find({});
  return analiticAddress;
}

module.exports = {
  saveAnaliticAddress,
  getAnaliticAddress,
};
